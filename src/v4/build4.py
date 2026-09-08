"""Assemble v4 from index4.tpl.html.

Produces:
  dist4/index.html     deploy build (assets/*.webp, /resume)
  dist4/preview.html   self-contained preview (data-URI images)
  dist4/artifact.html  body-only variant for the Artifact tool
  dist4/assets/        copies of every image referenced
"""
import re, base64, pathlib, shutil

ROOT = pathlib.Path(__file__).parent
SVG = ROOT / "svg"
DIST = ROOT / "dist4"
(DIST / "assets").mkdir(parents=True, exist_ok=True)

NAMES = ["01-hero-curiosity", "02-work-distribution", "03-ai-workbench",
         "04-travel", "05-games", "06-coffee"]
IMAGES = {  # placeholder name -> source file
    "hero-env": ROOT / "art/hero-env.webp",
    "hero-agent": ROOT / "art/hero-agent.webp",
    "hero-mobile": ROOT / "art/hero-mobile.webp",
    "about": ROOT / "art/about.webp",
    "card-dezerv": ROOT / "art/card-dezerv.webp",
    "card-loom": ROOT / "art/card-loom.webp",
    "card-distromap": ROOT / "art/card-distromap.webp",
    "contact": ROOT / "art/contact.webp",
    "mountains": ROOT / "photos/mountains.webp",
    "hills": ROOT / "photos/hills.webp",
    "coast": ROOT / "photos/coast.webp",
}


def symbol(name):
    raw = (SVG / f"{name}.svg").read_text()
    vb = re.search(r'viewBox="([^"]+)"', raw).group(1)
    inner = re.search(r"<svg[^>]*>(.*)</svg>", raw, re.S).group(1)
    inner = re.sub(r"<title[^>]*>.*?</title>", "", inner, flags=re.S)
    inner = re.sub(r"<desc[^>]*>.*?</desc>", "", inner, flags=re.S)
    inner = re.sub(r'\s(id|aria-labelledby)="[^"]*"', "", inner)
    return f'<symbol id="il-{name[:2]}" viewBox="{vb}">{inner}</symbol>'


tpl = (ROOT / "index4.tpl.html").read_text()
used = [n for n in NAMES if f"#il-{n[:2]}" in tpl]
sprite = ('<svg xmlns="http://www.w3.org/2000/svg" class="sprite" aria-hidden="true" focusable="false">'
          + "".join(symbol(n) for n in used) + "</svg>") if used else ""
html = tpl.replace("{{SPRITE}}", sprite)
assert "—" not in html, "em dash found"


def with_images(h, mode):
    for n, src in IMAGES.items():
        if f"{{{{IMG:{n}}}}}" not in h:
            continue
        if mode == "deploy":
            shutil.copy(src, DIST / "assets" / f"{n}.webp")
            h = h.replace(f"{{{{IMG:{n}}}}}", f"assets/{n}.webp")
        else:
            data = base64.b64encode(src.read_bytes()).decode()
            h = h.replace(f"{{{{IMG:{n}}}}}", "data:image/webp;base64," + data)
    assert "{{IMG:" not in h, re.findall(r"\{\{IMG:[^}]+\}\}", h)
    return h


deploy = (with_images(html, "deploy")
          .replace('<meta name="theme-color" content="#0B141B">', '<meta name="theme-color" content="#0B141B">\n<link rel="preload" as="image" href="assets/hero-agent.webp" media="(min-width: 900px)">')
          .replace("{{TITLE}}", "Priyansh Mathur | Growth Product Manager, Bengaluru")
          .replace("{{RESUME}}", "/resume"))
(DIST / "index.html").write_text(deploy)

preview = (with_images(html, "preview")
           .replace("{{TITLE}}", "Priyansh Mathur")
           .replace("{{RESUME}}", "https://priyanshmathur.com/Priyansh_Mathur_Resume.pdf"))
(DIST / "preview.html").write_text(preview)

m = re.search(r"<head>(.*?)</head>\s*<body>(.*)</body>", preview, re.S)
head, body = m.group(1), m.group(2)
head = re.sub(r"<meta[^>]*>\s*", "", head)
head = re.sub(r'<link rel="canonical"[^>]*>\s*', "", head)
(DIST / "artifact.html").write_text(head.strip() + "\n" + body.strip() + "\n")

js = re.findall(r"<script[^>]*>(.*?)</script>", deploy, re.S)
print("index.html", len(deploy.encode()), "bytes; inline JS", sum(len(s.encode()) for s in js), "bytes;",
      "preview", len(preview.encode()) // 1024, "KB")
