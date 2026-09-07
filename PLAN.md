# priyanshmathur.com — Redesign Plan (PM + Creative Director brief)

_Owner: Priyansh Mathur · Working folder: `PC Claude Projects/priyanshmathur-site` · Sept 2026_

---

## 0. The verdict on the current site (zoom-out)

**What works**
- Voice. "The unfiltered version. Actual sequence, expensive mistakes included." is the best line on the site. Keep the honesty.
- Numbers are real and specific: ₹7,000 Cr tracked, 700 leads/mo, 75% lower CAC, 10K→140K sessions/mo, 7K→153K at Wint Wealth.
- The Dezerv distribution story ("inside the apps 20 million Indians already open") is a differentiated PM thesis. Nobody else has this.

**What fails a hiring manager in the first 5 seconds**
1. Hero says "priyansh" in lowercase and then a paragraph. No claim, no role, no proof, no visual. A CPO can't tell in one glance *what kind of PM* this is.
2. It's a memoir, not a portfolio. Seven chronological chapters force the reader to earn the payoff. Recruiters read bottom-up; they want the Dezerv result first, the origin story last.
3. Zero visual craft signal. One blue (#1E3BE1), default type, no motion, no artefacts (screens, flows, docs). "Six AI products built independently" is a claim with nothing to click.
4. No "Work" as case studies. The best PM sites (Lenny-style, Julie Zhuo-style) show *decisions*: the problem, the bet, what shipped, the metric, what you'd do differently.
5. No proof of thinking. No writing, no teardown, no frameworks. In 2026 the bar for a PM is "shows how they think + ships with AI." The site says it, doesn't show it.
6. The "pitch" chapter volunteers weaknesses (not design-led, hasn't led a PM org). Honest, but framed as gaps rather than as a deliberate profile. Reframe: "I'm the PM you hire for distribution and growth in regulated products."
7. Single GitHub link missing entirely. The repos that exist are backend/AI plumbing with no product framing.

**North-star for the new site:** *"In 10 seconds a CPO knows: growth PM, regulated fintech, puts products where users already are, and ships AI things himself. In 60 seconds they've seen proof of all four."*

---

## 1. Positioning (the one sentence everything hangs off)

> **Priyansh Mathur builds distribution into the product.**
> Growth PM for regulated Indian fintech. Took a wealth product to 20M users by living inside Moneycontrol, Livemint and Inshorts instead of buying downloads. Ships AI tools on the side.

Tagline candidates for the hero (pick in loop):
- "I put products where the users already are."
- "Distribution is a product decision."
- "Growth PM. Regulated money. No ad budget."

---

## 2. Information architecture (new sitemap)

```
/                     Home (one page, sections below, anchors)
  ├─ Hero             claim + 3 proof numbers + one signature visual
  ├─ Proof strip      logos: Dezerv · Wint Wealth · Moneycontrol · Livemint · Inshorts
  ├─ Selected Work    3 case studies (cards → /work/<slug>)
  ├─ Builds           4–6 AI/side projects with live demos (→ GitHub + demo)
  ├─ Thinking         3–5 short essays / teardowns (→ /writing/<slug>)
  ├─ The story        the current 7 chapters, compressed to a scroll timeline
  ├─ How I work       principles (5 lines) + "what I'm not"
  └─ Contact          email · LinkedIn · GitHub · résumé PDF
/work/dezerv-embedded-distribution
/work/wint-wealth-organic-22x
/work/search-combat-team-of-seven
/builds                 (index of projects)
/writing                (index)
/resume                 → PDF (and an HTML version for ATS/LLM readers)
/llms.txt               (machine-readable bio; recruiters' AI tools read it)
```

**Redirect map** (old anchors → new URLs, 301 at host level):
| Old | New |
|---|---|
| `/#numbers` | `/#proof` |
| `/#story` | `/#story` |
| `/#best-work` | `/work/dezerv-embedded-distribution` |
| `/#pitch` | `/#how-i-work` |
| `/#contact` | `/#contact` |
| `/Priyansh_Mathur_Resume.pdf` | keep, plus `/resume` |

---

## 3. Case-study template (every /work page)

1. **One-line outcome** (the number).
2. **Context** — company, role, team size, constraint (regulated, no ad budget, 4 engineers…).
3. **The bet** — the non-obvious decision and the alternatives rejected.
4. **What shipped** — 2–4 artefacts: screens, flows, a doc excerpt, a dashboard.
5. **Result** — before/after metric with dates.
6. **What I'd do differently** — one honest paragraph.
7. **Skills tags** — distribution, SEO/organic, partnerships, YMYL compliance, analytics.

---

## 4. Creative directions (loop input — pick one, then iterate)

### A. "The Ledger" — editorial finance
- Concept: a broadsheet/ledger for a person. Ruled lines, tabular numerals, serif display.
- Tokens: bg `#F6F2EA` · surface `#FFFFFF` · ink `#141414` · accent `#0B5D3B` (ledger green) · accent-2 `#B8412E` (red ink)
- Type: Fraunces alt → **Instrument Serif** display + **IBM Plex Sans** body + **IBM Plex Mono** numerals
- Aha: hero numbers "post" like ledger entries as you scroll; a thin running total ticks up.
- Adjectives: considered, credible, quiet confidence.

### B. "Growth Console" — dark dashboard
- Concept: the site *is* a growth dashboard for a person. Metrics, sparklines, a changelog.
- Tokens: bg `#0B0F14` · surface `#121820` · ink `#E8EEF5` · accent `#3DF2A2` (signal green) · accent-2 `#FFB454`
- Type: **Space Grotesk** display + **Inter Tight** body + **JetBrains Mono** data
- Aha: hero is a live chart drawing 10K→140K as the page loads; cursor reveals data points.
- Adjectives: sharp, technical, "this guy reads dashboards for fun."

### C. "Bharat Modern" — warm, bold, human
- Concept: big type, warm palette, film grain, real photos. Indian fintech, not Silicon Valley cosplay.
- Tokens: bg `#FFF8F0` · surface `#FFE9D6` · ink `#1A1410` · accent `#E4572E` (saffron-red) · accent-2 `#1F3A5F`
- Type: **Bricolage Grotesque** display + **Source Sans 3** body
- Aha: hero headline set in 3 lines that "typeset" in; the word "20 million" swaps through the logos of Moneycontrol / Livemint / Inshorts.
- Adjectives: confident, warm, memorable.

**Creative director's recommendation: B for aha, A for trust. Prototype B first; if it reads "engineer" rather than "PM", fall back to A with B's animated metrics.**

Kill list (never): purple gradient mesh, 3 identical feature cards, glass cards, "Hi, I'm 👋", stock illustrations, Inter as display.

---

## 5. NEW projects to build (for the site + GitHub) — ranked

Criteria: (1) tells the *same* story as the positioning, (2) demoable in 30 seconds, (3) buildable solo in 1–3 weekends with AI tooling, (4) hiring managers at fintech/AI companies would actually use or fork it.

| # | Project | What it is | Why it lands a PM job | Effort |
|---|---|---|---|---|
| 1 | **DistroMap** — "Where do your users already live?" | Enter a product category (e.g. "SIP investing"); it maps the Indian apps/surfaces where that audience already is (news apps, UPI apps, WhatsApp, YouTube) with reach estimates and an embed-partnership playbook, from public data + LLM. | Productises his single best thesis. Demo = his Dezerv story generalised. Unique. | 2 weekends |
| 2 | **PRD Critic** | Paste a PRD; an agent scores it on problem clarity, metric, non-goals, risks, then rewrites the weakest section. Ships with 5 real anonymised PRDs as examples. | Every PM interviewer reads PRDs. Shows AI-shaped PM craft. Very shareable. | 1 weekend |
| 3 | **YMYL Trust Auditor** | URL in → checks E-E-A-T signals for finance content (author bios, disclosures, SEBI/RBI citations, schema), outputs a scorecard + fix list. | Bridges his SEO past and fintech PM present. Wint Wealth + Sharpely credibility. | 1–2 weekends |
| 4 | **Growth Experiment Ledger** | Lightweight experiment tracker: hypothesis → metric → result → learning, with an "expected value" calculator and a public changelog page. Seeded with his own past experiments. | Shows rigour. Doubles as the "How I work" proof on the site. | 1 weekend |
| 5 | **Fee Drag Calculator** (embeddable widget) | "What does 1% fee cost you over 20 years?" — an embeddable widget any finance blog can drop in (the exact distribution move he made at Dezerv). | Distribution-as-product, literally embeddable. Gets real backlinks/usage. | 1 weekend |
| 6 | **Teardown Fridays** | Not code: 5 written product teardowns of Indian fintech onboarding flows (Groww, Zerodha, Jupiter, Dezerv, CRED) with screenshots and a "what I'd ship" section. | The cheapest, highest-signal PM artefact there is. Writing is proof of thinking. | 5 evenings |

**Recommended first three:** #1 DistroMap (signature), #2 PRD Critic (shareable), #6 Teardowns (content, no code). Together they cover: distribution thesis, AI-era PM craft, product judgment.

Each project ships with: README written as a PRD (problem → users → metric → scope → non-goals), a 45-second Loom/GIF, a live demo URL, and a card on `/builds`.

---

## 6. The build loop (how we iterate until "aha")

```
LOOP 1 — Direction   : 3 mood boards (A/B/C) as artboards → pick one → lock tokens
LOOP 2 — Hero        : 3 hero variants of the chosen direction → pick → lock the aha interaction
LOOP 3 — Wireframes  : lo-fi desktop + mobile for all sections → annotate → freeze IA
LOOP 4 — Hi-fi Home  : full home page in code → review on real phone → 2 rounds of polish
LOOP 5 — Case studies: 3 /work pages, one at a time, artefacts gathered from Priyansh
LOOP 6 — Builds      : DistroMap → PRD Critic → Teardowns, each with README-as-PRD
LOOP 7 — Ship        : redirects, OG images, llms.txt, Lighthouse ≥95, deploy, DNS
LOOP 8 — Post-ship   : Plausible analytics, weekly check of clicks to résumé/LinkedIn
```

Exit criterion for each loop: Priyansh says "yes" in ≤2 rounds, otherwise we change the variable, not the polish.

**Stack recommendation:** Astro (static, fast, MDX for case studies + writing) on Vercel or Cloudflare Pages. Single-file HTML prototypes for the loops; port to Astro once the direction is locked.

---

## 7. Inputs needed from Priyansh

- Which of the 3 directions (or a hybrid) to prototype first.
- Screens/artefacts from Dezerv, Wint Wealth, Search Combat (anything shareable, even blurred).
- 1–2 good photos (not a LinkedIn headshot).
- Where the site is hosted now + DNS access, so redirects can be set.
- Which project to build first.
