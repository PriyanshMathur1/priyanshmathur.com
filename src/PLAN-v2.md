# priyanshmathur.com v2 plan

Design read: a personal site for Priyansh Mathur (Bengaluru, product, plays FPS and board games), for hiring managers and the curious, in a VALORANT-inspired tactical idiom: charcoal, one coral accent, condensed uppercase display, corner brackets, one diagonal cut, hand-drawn white-and-coral illustrations. Dials: variance 8, motion 8, density 4.

## 1. What was wrong with v1 (the grill)

Copy
- Reads like a spec. Every line is correct and none of it smiles. "A little context from the work" is a label, not a sentence a person says.
- Case studies explain but don't land. The result is buried under a label stack (tag, h3, summary, result).
- Hobbies are three-word captions. They should sound like the person.
- Secondary CTA "The person behind it" is vague.

Layout and breathing room
- Section padding 64/96 and panel padding 24/48 is a document rhythm, not a poster rhythm. Everything sits on top of everything.
- Illustrations are boxed in dark plates with padding, so a 1377px drawing renders at 340px inside a box that is itself small. They read as thumbnails.
- Ledger numbers wrap; the four cells fight for 218px each because the rail eats the width.
- Hobby row: 150px drawings next to 60px-wide text columns. Cramped and unreadable.
- Portrait placeholder looks broken rather than deliberate.
- Wint chart is a small box with three lines of 13px text.
- Contact headline wraps to four lines; the coffee drawing floats with no anchor.

Motion
- v1 has four hover states and one count-up. For a tactical theme that is inert. Nothing happens on scroll. The rail does not know where you are until you stop.

Repetition tells
- Work panel, builds row, about grid, hobby row are all "illustration left, text right" variants. Four zigzags in a row.

## 2. Copy voice

Plain sentences, one small joke per section at most, never at the expense of a fact. Every number keeps its denominator. No em dashes. Jokes are about coffee, calendars, compliance and Slack, never about employers or partners.

## 3. Spacing and sizing

- Section padding: 96 mobile / 144 desktop. Section head to body: 64. Panel padding: 32 mobile / 64 desktop.
- Illustration minimums on desktop: hero 420, Dezerv 560 (full-bleed plate, no inner padding), workbench 520, travel and games 300, coffee 300. Mobile: hero 240 tall max, others 260 to 320 wide.
- Ledger: 2x2 on rail widths under 1440, 4 across only when each cell gets 240px.
- Hobbies: travel large on the left, games and board games stacked on the right, coffee as a wide closing row. Not three cards.
- Layout families, one each: hero (split with panel), proof (ledger), work (dominant panel + second panel), builds (full-bleed drawing with text overlay), notes (rows), about (portrait + text), life (asymmetric loadout), contact (poster type).

## 4. Motion inventory (each one motivated)

Load
- Hero lines rise in with a clip mask, staggered 80ms; tag types in; panel brackets draw. Hierarchy: name first, then tagline, then the rest.

Mouse
- Crosshair ring follows the cursor, snaps larger over links and buttons. Feedback, and the theme's signature.
- Hero drawing and stripe band shift 6 to 12px against the mouse. Depth.
- Mission panels and the profile panel tilt up to 3deg toward the cursor. Feedback.
- Buttons shift with a ghost bracket behind. Feedback.

Scroll
- Rail is a progress track: a coral line fills top to bottom with page progress (CSS scroll-driven, no JS), and the active section is marked.
- Section content reveals as it enters (fade + 24px rise). Only elements below the first viewport are hidden, so the page is complete at rest and without JS.
- Illustrations drift 40px across their scroll range (CSS view() timeline). Depth.
- Metrics count up once. Chart bars grow once. Route nodes light up in order. Storytelling.
- Marquee under the hero: "Makes things / plays games / drinks coffee / leaves town", constant slow scroll, pauses on hover. Rhythm.
- Details open with an animated height (interpolate-size, progressive).

Off switches
- prefers-reduced-motion: everything above is static, reveals are instant, cursor ring is not created.
- Touch and coarse pointers: no cursor ring, no tilt, no mouse parallax.

## 5. Ship gate

- No em dashes. One accent, one radius scale, one cut.
- Nav on one line at 1280. CTA never wraps. Hero fits 900px tall viewport.
- No horizontal scroll at 320. Contrast AA everywhere.
- Inline JS under 30 KB. Lighthouse mobile 90+ locally, expect 95+ on Cloudflare with compression.
