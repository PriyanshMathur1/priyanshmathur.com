# priyanshmathur.com v3 plan: the VALORANT tri-tone direction

Design read: personal site for Priyansh Mathur (Bengaluru, product, plays FPS and board games) for hiring managers and the curious. Direction: the VALORANT web idiom as it actually is on playvalorant.com, not "black with red": an off-white ground with red and dark-navy sections, giant super-condensed uppercase type, notched corners, diagonal slabs, thin rules with square markers, numbered labels. Dials: variance 8, motion 8, density 4.

## 1. What the v2.1 grill found (from Priyansh's desktop screenshots and my own pass)

- Rail overlaps the marquee band: the rail is fixed, the marquee is full-bleed, so "OFF THE CLOCK" sits on top of "LEAVES TOWN". Also "OFF THE CLOCK" wraps to two lines in a 172px rail.
- Dezerv plate: the drawing is small inside a big empty plate because the plate stretches to the text column's height and keeps 32px padding. Reads unfinished.
- Sticky header hides the top of a section after a nav click: sections need scroll-margin-top.
- Mobile: header takes two rows; hero card is tall; long tags wrap awkwardly ("02 // Wint Wealth / Investor tools and organic growth").
- Everything is one charcoal ground. The reference alternates cream, dark and red, and that alternation is most of its energy.

## 2. Tokens

Grounds (three, deliberately, section by section):
- cream #ECE8E1 (default ground), cream-2 #E2DCD2 (surface on cream)
- navy #0F1923 (dark ground), navy-2 #1B2733 (surface on navy)
- red #FF4655 (accent everywhere, and the ground of exactly one section: Contact)

Ink: navy on cream, cream on navy and on red. Muted: #6B7470 on cream, #A8B0B4 on navy. Rules: #CFC8BC on cream, #2C3946 on navy, rgba(15,25,35,.35) on red.

Illustrations: on cream, ink navy + red; on navy, ink cream + red; on red, ink navy + cream accent.

Type: Anton for h1/h2 and the big numbers (closest Google face to Tungsten), Barlow Condensed 700 for h3, nav, buttons, labels; Barlow 400/500/600 for body. Body 17/18px, line-height 1.6.

Shape: one notch (--cut 14px) on buttons, panels and photo cards. Radius 0 everywhere except 4px on the small plus buttons. One diagonal slab motif: a red parallelogram used behind the hero portrait, on the Dezerv plate, and as the section divider between grounds (a 48px skewed band).

## 3. Section rhythm

1. Header: cream, brand + nav + red Résumé button. Sticky.
2. Hero: cream. Giant red "PRIYANSH MATHUR." Navy "CURIOUS BY DEFAULT." Player card on navy with a red slab behind the portrait cut-out.
3. Marquee: navy strip.
4. Intel: cream. Numbers in Anton navy, red top rules.
5. Work: navy. Dezerv dominant panel (drawing fills the plate, red slab behind), Wint second with the bar chart.
6. Builds: cream. Drawing large right, copy left.
7. Notes: cream, red numerals, rows.
8. About: cream. Desk drawing plate + story + vertical route.
9. Off the clock: navy. Loadout + Instagram photo strip.
10. Contact: red. Cream type, navy button. The one red block.
11. Footer: navy.

Diagonal slab dividers between ground changes (cream to navy, navy to cream, navy to red) so the page cuts rather than stacks.

## 4. Layout fixes

- Rail: 200px wide, 18px type, own cream background and z-index; the marquee gets a left margin on rail widths so nothing passes under it.
- scroll-margin-top on every section = header height + 16px.
- Dezerv plate: no inner padding, drawing at 100% width, plate no taller than its drawing plus the slab, grid 7/5 in favour of the plate.
- Tag text: shorter labels ("02 // Wint Wealth / Investor tools"); tags never wrap on desktop.
- Mobile header: one row (brand + Résumé), nav row under it, 44px targets; hero card art capped at 260px.

## 5. Motion (unchanged from v2, plus)

- Ground changes animate: the diagonal divider slides in as it enters.
- Hero: red headline rises through a clip mask; slab wipes in from the left.
- Keep: crosshair companion, mouse parallax, tilt, rail progress, reveals, drift, count-ups, bars, route, marquee, animated details. All off under reduced motion.

## 6. Ship gate

No em dashes. One accent. One notch. Nav one line at 1280. CTAs never wrap. No overlap at 1280, 1440, 1920 and 390, 320. Contrast AA on all three grounds (red ground: cream text 18px+ or 600 weight; check navy button on red). Lighthouse mobile 90+ locally.

## 7. Where things live

- Build sources: PC Claude Projects/priyanshmathur-site/src (index.tpl.html, build.py, svg/, photos/, PLAN-v3.md).
- Deploy output: PC Claude Projects/priyanshmathur-site/build-v2 (to be replaced by build-v3).
- Preview artifact: https://claude.ai/code/artifact/6afc93a3-726a-405c-aabb-2da2821f9460 (republish with url to keep the link).
- Project doc: priyanshmathur-site/build-notes.md in the "PC Projects" project.
