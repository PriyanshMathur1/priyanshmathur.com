"""Assemble the single-file site from the template and the optimised SVGs.

Produces:
  dist/index.html    deploy build (relative portrait, /resume route, SEO title)
  dist/preview.html  artifact preview (portrait slot labelled, resume link absolute)
"""
import re, pathlib

ROOT = pathlib.Path(__file__).parent
SVG = ROOT / "svg"
DIST = ROOT / "dist"
DIST.mkdir(exist_ok=True)

NAMES = ["01-hero-curiosity", "02-work-distribution", "03-ai-workbench",
         "04-travel", "05-games", "06-coffee"]


def symbol(name: str) -> str:
    raw = (SVG / f"{name}.svg").read_text()
    vb = re.search(r'viewBox="([^"]+)"', raw).group(1)
    inner = re.search(r"<svg[^>]*>(.*)</svg>", raw, re.S).group(1)
    inner = re.sub(r"<title[^>]*>.*?</title>", "", inner, flags=re.S)
    inner = re.sub(r"<desc[^>]*>.*?</desc>", "", inner, flags=re.S)
    inner = re.sub(r'\s(id|aria-labelledby)="[^"]*"', "", inner)
    # the paths carry var() fills with hex fallbacks; keep them (they are the theme hooks)
    return f'<symbol id="il-{name[:2]}" viewBox="{vb}">{inner}</symbol>'


tpl = (ROOT / "index.tpl.html").read_text()
sprite = '<svg xmlns="http://www.w3.org/2000/svg" class="sprite" aria-hidden="true" focusable="false">' + \
    "".join(symbol(n) for n in NAMES) + "</svg>"
html = tpl.replace("{{SPRITE}}", sprite)
import base64
PHOTOS = ["portrait", "mountains", "hills", "coast"]
def with_images(h, mode):
    for n in PHOTOS:
        if mode == "deploy":
            h = h.replace("{{IMG:%s}}" % n, "assets/%s.webp" % n)
        else:
            data = base64.b64encode((ROOT / "photos" / f"{n}.webp").read_bytes()).decode()
            h = h.replace("{{IMG:%s}}" % n, "data:image/webp;base64," + data)
    return h

deploy = (with_images(html, "deploy")
          .replace("{{TITLE}}", "Priyansh Mathur · Curious by default")
          .replace("{{PORTRAIT}}",
                   '<img src="assets/priyansh.webp" width="720" height="900" alt="Priyansh Mathur" loading="lazy" decoding="async">')
          .replace("{{RESUME}}", "/resume"))
(DIST / "index.html").write_text(deploy)

preview = (with_images(html, "preview")
           .replace("{{TITLE}}", "Priyansh Mathur")
           .replace("{{PORTRAIT}}",
                    '<div class="portrait-slot" role="img" aria-label="Portrait placeholder">'
                    '<span>Portrait goes here</span><small>assets/priyansh.webp from the current site</small></div>')
           .replace("{{RESUME}}", "https://priyanshmathur.com/Priyansh_Mathur_Resume.pdf"))
(DIST / "preview.html").write_text(preview)

# artifact variant: body content only (the Artifact tool supplies the document skeleton)
m = re.search(r"<head>(.*?)</head>\s*<body>(.*)</body>", preview, re.S)
head, body = m.group(1), m.group(2)
head = re.sub(r"<meta[^>]*>\s*", "", head)
head = re.sub(r'<link rel="canonical"[^>]*>\s*', "", head)
(DIST / "artifact.html").write_text(head.strip() + "\n" + body.strip() + "\n")

js = re.findall(r"<script[^>]*>(.*?)</script>", deploy, re.S)
print("index.html", len(deploy.encode()), "bytes; inline JS", sum(len(s.encode()) for s in js), "bytes")
