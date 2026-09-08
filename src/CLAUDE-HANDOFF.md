# Priyansh Mathur personal website

## Start here

Build a personal website, not a role-led job application. The first impression is a curious person who makes things, plays FPS and board games, travels, and likes coffee. Strong work should be easy to find, but his current role must not be the opening hook.

The website has **two explicit modes**. **Professional mode** is the default: the light Field Notes design, personal introduction, readable case studies and direct contact. **Game mode** is the optional immersive experience: a VALORANT-inspired tactical interface, bold typography, angular panels and a player-profile presentation, using the Off the Clock dark art direction. These are two presentations of the same person and content. Build both. Keep one coherent palette inside each mode; do not alternate palettes section by section.

Use this document, the numbered boards, and the SVG assets together. The mode-system and immersive-game boards supplement the original theme and page-composition boards. The original dark full-page board supplies content rhythm; the immersive-game board supplies the game hero and tactical navigation. The copy below is the source of truth where a board abbreviates text. The old Product Ledger role-led hero is superseded.

## Two modes and one personal website

### Professional mode

Default for a first visit, direct recruiter links and JavaScript-disabled browsing. Use warm paper, Newsreader headings, IBM Plex Sans body copy and vermilion accents. The personal hero still reads “Hi, I'm Priyansh. Curious by default.” Professional does not mean opening with a job title. Keep Work one click away, show outcomes with context, and make email and résumé obvious. No tactical jargon in this mode.

### Game mode

An immersive **VALORANT-inspired theme**, not a clone of VALORANT or a playable shooter. Use charcoal surfaces, warm white ink, one coral-red accent, bold condensed headings, restrained technical labels and clipped decorative panel corners. Borrow tactical visual rhythm, player-selection hierarchy and decisive transitions. Keep Priyansh's own identity and original artwork.

Hero treatment: a player-profile composition reading **PRIYANSH MATHUR** and **CURIOUS BY DEFAULT**. The supporting copy stays personal: making things, FPS and board games, travelling and coffee. A right-side panel holds the original games or curiosity illustration; a small profile strip lists Bengaluru and the four interests. Do not invent a VALORANT rank, agent main, win rate, gaming handle or play history. The user supplied FPS gaming as an interest, not a particular competitive record.

The immersive experience comes from the layout and navigation, not constant effects. Desktop can have a narrow tactical navigation rail, a dominant selected-work panel, numbered entries, thin route lines and a player-profile panel. Mobile keeps the same visual identity but collapses to a normal single-column page with a compact mode switch. It must not become a tiny desktop HUD.

| Normal section | Game presentation | Readability rule |
|---|---|---|
| Hero | Player profile | Priyansh's real name stays dominant |
| Selected work | Selected missions | Keep “Work” visible in navigation |
| AI builds | Workshop | Keep “AI builds” as a descriptive label |
| Working notes | Field notes | Actual readable notes, not collectible lore |
| About | Player story | Preserve the career facts and personal narrative |
| Outside work | Off the clock | Travel, FPS games, board games and coffee |
| Contact | Team up | Always pair with “Contact” or “Say hello” |

Use the original SVG drawings in white and coral on dark surfaces. Use `assets/riot-dark/` for external img assets; inline the base assets for variable-based theming. Use the supplied `07-Game-Mode-immersive` board for the player-profile hero. No downloaded Riot characters, weapons, maps, soundtracks, proprietary logos or imitation official affiliation are required. A small implementation-note disclaimer can live in the source documentation; the website does not need a distracting legal banner.

### The mode switch

- Visible in the header on desktop and mobile: **Professional | Game mode**. Use two real buttons in a labelled group, with aria-pressed to expose the active mode. Do not present it as a hidden Easter egg, a tiny icon or a colour-only toggle.
- Default is Professional. Explicit mode choice can persist locally. Support ?mode=professional and ?mode=game, with an explicit URL value taking priority over a stored preference. Unknown values fall back to Professional. A recruiter can receive an explicit Professional link.
- Switching changes theme, display typography, decorative composition and secondary labels. It must not alter metrics, hide contact information, duplicate the page for screen readers, change factual content or reset open case studies.
- Keep the visitor at the same section. Keep keyboard focus on the selected mode button and announce “Professional mode” or “Game mode” once through a polite status message. Preserve the current hash in the URL.
- Build from one shared content model and one accessible main content tree. Avoid rendering two complete versions and merely placing one off screen.
- A 180–250ms opacity transition is enough. No loading screen, fake connection sequence, mandatory “press start”, autoplay sound, flashing scan lines or simulated download progress. Reduced motion switches instantly.
- No sound is included by default. Do not add sound unless Priyansh explicitly requests it later. Do not load heavy video or 3D assets to make the page immersive.
- Professional mode must work without JavaScript. Hide the nonfunctional mode control in that case; the complete content and /resume route remain usable.
- Keep the one-accent rule separately in each mode. Light uses #B73525; Game uses #F45454. Both use the same spacing scale and 0/4px radius scale.

### Why both modes exist

Professional mode gives a hiring manager a calm and fast reading experience. Game mode rewards curiosity and expresses the gaming side of Priyansh's personality. Neither mode is a lesser version. The same work, proof, story and contact options must be available in both.

## Creative thesis

The website should feel like an invitation into Priyansh's world. Curiosity connects the career story and the personal interests, but every hobby does not need a business justification. Gaming has one real connection to work: Priyansh trained friends he used to play games with into an SEO team. Travel, board games, and coffee can simply be things he enjoys.

Within five seconds a visitor should know his name, feel a distinct personality, and see how to reach the work. Within twenty seconds, the work preview should establish that this person has shipped consequential products. Current role and credentials belong in Work and About, not the hero headline or an oversized job-title badge.

### What to borrow from the references

- Riot Games: a visually dominant opening, confident large headings, generous image surfaces, strong contrast, and varied section scale. Use a large lead work entry and a smaller supporting entry instead of three equal cards.
- ChatGPT money and finances: loose editorial line drawings, object-based storytelling, clear breathing room, and restrained spot colour.
- Make the combination original: personal objects instead of gaming characters, actual work evidence instead of fantasy game screens, and Priyansh's name instead of an imitation studio wordmark.
- Do not reproduce Riot's logos, characters, game artwork, trailers, or proprietary typography. Do not copy the reference's piggy bank or money-jar illustrations. No implied affiliation with Riot or OpenAI.

## Theme systems

### Game mode theme Off the Clock

| Token | Value | Usage |
|---|---|---|
| bg | #101112 | Main canvas |
| surface | #1D2022 | Work panels and quiet illustration plates |
| ink | #F1EEE7 | Headlines, body and illustration outlines |
| accent | #F45454 | One red accent for links, markers and small SVG patches |
| accent-2 | #3A3D40 | Neutral dividers and secondary structure |

Display: **Barlow Condensed 700**, Google Fonts. Body: **IBM Plex Sans 400/500/600**, Google Fonts. Avoid a condensed face for paragraphs. Desktop hero display 112–144px, section titles 56–72px, case headings 36–44px. Mobile hero 64–72px, sections 40–48px, case headings 28–32px. Body 18px desktop / 16px mobile, line-height 1.6. Secondary labels 14px; occasional metadata 12px minimum.

### Professional mode theme Field Notes

| Token | Value | Usage |
|---|---|---|
| bg | #F5F2EA | Warm paper canvas |
| surface | #EAE5DA | Evidence and note surfaces |
| ink | #20251F | Text and illustration outlines |
| accent | #B73525 | One vermilion accent |
| accent-2 | #CEC8BB | Neutral rules |

Display: **Newsreader 400**, with italic used sparingly. Body: **IBM Plex Sans 400/500/600**. Use sentence case in Professional mode. The same section order and readable content apply; the immersive Game mode can have a stronger decorative composition.

### Shared rules

- Use spacing 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96. Desktop content maximum 1280px, outer gutters 64–80px where space permits; mobile gutters 16–24px.
- Radius scale: 0 for structural surfaces, 4px for controls. No large pill buttons, random rounding, glass effects or gradients.
- accent-2 is neutral, not a second accent. Photographs can retain natural colour, but do not introduce coloured badges or decorative gradients.
- Use one repeated diagonal crop on decorative background panels in the dark theme if desired. Never clip controls, text, or focus rings.
- Red backgrounds use dark ink for compact button labels; check contrast. Red text on dark should be used sparingly and checked for AA. Light-theme vermilion on paper is suitable for normal labels. Aim for 4.5:1 normal text and 3:1 large text.

## Page structure and why it exists

| Order | Section | What the visitor learns |
|---|---|---|
| 1 | Personal hero | Who Priyansh is and what gives the site its personality |
| 2 | Compact work proof | There is substantive product experience behind the personality |
| 3 | Selected work | What he chose, owned, shipped and learned |
| 4 | Things I make | He builds AI products himself beyond the day job |
| 5 | Working notes | How he reasons about product and people |
| 6 | The story so far | How gaming, stores, SEO and fintech connect |
| 7 | Away from the desk | Travel, FPS games, board games and coffee matter in their own right |
| 8 | Contact | How to talk about work or simply meet |

Keep Work one click away from the first viewport. On desktop, the start of the compact proof row should be visible close to the fold. On mobile, do not make the visitor scroll through a full screen of illustration before the first action.

## Exact website copy

### Navigation

Brand: **Priyansh Mathur**

Links: **Work / Notes / About / Say hello**. Include **Résumé** in the desktop header and contact section. Mobile can show Work, About and Say hello directly without a hidden menu if they fit at 320px; otherwise use a semantic disclosure menu.

### Hero

Eyebrow: **A few things about me**

Headline:

**Hi, I'm Priyansh.**
**Curious by default.**

Body:

I make things, play games, drink coffee, and leave town when I can. Some of that turned into a career in product. The rest is just life.

Primary action: **Explore my work**
Secondary action: **The person behind it**

Small location line: **Bengaluru, India**

Do not put “Product Manager at Dezerv”, availability claims, a salary target, a job-seeking badge, or a huge metric in place of this introduction. The wording does not claim full-time availability or that Priyansh has left his role.

### Compact proof

Heading: **A little context from the work.**

- **₹7,000 Cr** — assets tracked through Dezerv's embedded product.
- **700 / month** — qualified leads from the embedded channel.
- **75% lower CAC** — embedded channel compared with paid channels.
- **10K → 140K** — monthly organic sessions at Dezerv; separate SEO work.

Keep each metric paired with its label. These are outcomes reported on Priyansh's existing website, not independently audited claims. Before public launch, confirm reporting periods and attribution with Priyansh. Do not invent a measurement window. Do not call assets tracked AUM, and do not present partner reach as product users.

### Selected work

Section title: **A few things I've put into the world.**

Intro: I came to product through growth. I still care about the same question: how does someone find this, and why would they come back?

#### Dezerv

Label: **Dezerv / Embedded portfolio tracker**

Headline: **Build on a road people already take.**

Summary: Instead of asking people to download another wealth app, we put a portfolio tracker inside Moneycontrol, Livemint and Inshorts.

Visible result: **17,000+ users. 700 qualified leads a month. 75% lower CAC than paid channels.**

Action: **Read the decisions**

Expanded content:

**The choice.** I scoped the MVP around portfolio tracking, before full onboarding. That meant a smaller compliance surface, faster partner sign-off, and a reason to return.

**My responsibility.** Sole PM across three external partner engineering teams. I moved into full ownership of the embedded channel in 2025.

**What made it stick.** Daily portfolio movement and news tied to holdings lifted repeat engagement by 38%. Lead scoring improved lead-to-call by 21%.

**The result in context.** The product tracked ₹7,000 Cr in assets. The partner apps' combined reach was 20M+; that was their audience, not our user count. Assets tracked are not assets managed.

Use the distribution SVG as an editorial illustration. If a factual product screenshot is later provided, it belongs inside the expanded story with an explanatory caption. Never present the illustration as a screenshot of the shipped app.

#### Wint Wealth

Label: **Wint Wealth / Investor tools and organic growth**

Headline: **Answer the question. Connect it to the product.**

Summary: I owned investor tools: the Bonds Directory, FD calculators, and gold and silver rates. The sequencing mattered as much as the traffic.

Visible result: **7K → 153.4K monthly organic sessions.**

Action: **Read the decisions**

Expanded content:

**The choice.** The Bonds Directory came first. It connected what people searched for to what Wint actually sold.

**The work behind it.** Five editors, seven subject-matter experts and multiple agencies. Named authorship, expert review and careful financial language supported 500+ articles a month.

**The result in context.** Organic sessions grew from 7K to 153.4K a month, one year apart. This was a combined tools and content effort, not a controlled experiment proving one feature caused all the growth.

Use a native two-bar chart with a shared zero baseline. Label both values and “monthly organic sessions”. No invented intermediate dates or trend line.

### Things I make

Title: **Some ideas don't leave me alone.**

Body: I've built six AI products solo, on nights and weekends. Before that, I taught myself to build online stores. I still like taking an idea far enough to find out whether it works.

Action: **Ask me for a walkthrough**

Destination: mailto:priyanshmathur2@gmail.com?subject=Show%20me%20your%20AI%20builds

Use the AI workbench illustration. This section is deliberately compact until real project names, URLs and screenshots are available. Do not invent products, fake a demo, or draw a mock dashboard and imply Priyansh shipped it. A future project entry needs name, user problem, live or recorded demo, Priyansh's contribution, and what he learned.

### Working notes

Title: **Things I'm still thinking about.**

Intro: A few short notes from the work. Open one.

**Distribution is part of the product.**
I learned this on my own stores. I could build a site and buy ads. I couldn't make that add up to a business. Learning SEO changed the question: where is someone already looking for this? Years later, the embedded tracker was a much bigger version of that question.

**The smaller first version can be the better decision.**
At Dezerv, the first version was portfolio tracking, before full onboarding. It gave users something useful and gave partners a smaller product to approve. Scope is a product decision, especially when several companies have to agree to ship.

**Good people don't always have the right CV.**
When I built an SEO team, I went back to people I used to play games with and taught them from scratch. We grew into a team of seven. Sometimes you know someone's ability before their CV has a name for it.

These are new short website notes adapted from Priyansh's existing story. Do not label them as previously published essays or give them invented dates, links or publication names.

### The story so far

Title: **I didn't take the straight line.**

At BIT Mesra, I was good at a video game and curious about how people made money online. That led to seven stores, a painful lesson in paid ads, and teaching myself SEO.

One store started ranking. I cold-messaged an agency owner in Australia, became an intern, then an SEO team lead. Some of the people I trained were friends I used to play games with.

After that came Wint Wealth, then Dezerv. These days I work on financial products and build AI things on the side. The route here was messy. It gave me plenty to learn from.

Small career line: **Stores → SEO team lead → Wint Wealth → Dezerv**

Use the real portrait from the existing site if available. Do not generate a substitute face. The portrait is photography and remains a separate raster asset, not an SVG pretending to be a photo.

### Away from the desk

Title: **There's more to life than the work.**

Lead: My Instagram bio says “En route to vacation.” That's a reasonable place to start.

**Travelling.** I like getting out of the usual routine. Some time away, somewhere else.

**FPS games.** Gaming was part of my life before product was. It's still here.

**Board games.** Different table. Different game. Still a good way to spend an evening.

**Coffee.** A good reason to pause, catch up, or start a conversation.

Closing line: Not every hobby needs to become a lesson about work.

Action: **A little more of life** → https://www.instagram.com/priyanshmathurr/

Do not imply the private Instagram feed is visible on the site. Link out; do not embed a gated feed. Do not invent countries visited, game ranks, favourite games, coffee equipment, cafés or personal anecdotes. The above interest copy is proposed first-person wording for Priyansh's review, based on the interests he supplied.

### Contact

Title: **A good project. A good game. A coffee.**

Body: If you have something in mind, say hello. I'm interested in product roles in fintech and AI, and conversations beyond them.

Primary: **Say hello** → mailto:priyanshmathur2@gmail.com

Secondary: **LinkedIn** → https://www.linkedin.com/in/priyansh-mathur/

Secondary: **Résumé** → /resume

Resume target: https://priyanshmathur.com/Priyansh_Mathur_Resume.pdf

Footer: **Priyansh Mathur / Bengaluru, India**. Keep the copyright year current at build time. Do not add “Built with AI”, an agency credit, invented availability, or a newsletter.

## Desktop composition

1440px reference canvas; maximum readable content width 1280px. The desktop board is an art-direction mockup, not a screenshot of an implemented page. It establishes the shared content rhythm; apply the light Professional typography for the default mode and the tactical hero/rail from the Game mode board when Game mode is selected.

1. Header at the top with name left and quiet text navigation right. Thin neutral divider. No imitation Riot logo.
2. Hero is a roughly 55/45 split: huge personal headline left, original desk illustration right on a restrained geometric surface. The name and actions stay fully readable. At narrow desktop widths, reduce type before allowing collision.
3. Proof is one horizontal ledger with four units. It is supporting evidence, not a competing second hero.
4. Work uses a dominant Dezerv feature, then a smaller Wint story. Alternate image and text weight without making every section mechanically symmetrical.
5. AI is one open feature row with the workbench illustration. No three-card filler grid.
6. Notes are full-width numbered disclosure rows.
7. About is a portrait and narrative. The illustrated hobbies follow as two editorial rows: travel plus games, then a coffee-led contact transition. Four interests need not mean four equal cards.
8. Contact finishes with generous type and direct links. No form required.

## Mobile composition

Design at 390px, verify at 320px and 430px. Use real stacked layouts, not a shrunken desktop screenshot.

- Header: name plus compact navigation. Minimum 44px touch targets.
- Hero: headline, body, primary and secondary actions, then the illustration. Artwork never covers text. Limit illustration display height to about 220px so it does not bury Work.
- Proof: two columns with labels, or four compact rows at very narrow widths. Keep number and unit together.
- Work: title and summary first, illustration second, native disclosure third. The case result remains visible without expansion.
- AI: one column, illustration under the body or alongside a short label only when it fits.
- Notes: large tappable rows, native details/summary. No horizontal carousels.
- About: real portrait above copy. Hobbies become stacked editorial snippets using the travel and games SVGs. Coffee can be the closing illustration.
- No hover-only meaning, clipped name, tiny navigation, decorative fixed sidebar, or sideways page scrolling. At 200% text enlargement, allow natural wrapping.

## Signature interaction and motion

**A wandering line, a useful destination.** Hover or keyboard-focus the hero's “The person behind it” link: a small accent underline draws once under “curious”; the link navigates directly to About. The illustration remains a static composition. The interaction should be a detail, not the only route to information.

**Evidence notes.** Native disclosure controls reveal the decisions, responsibility and outcome context for each case. Plus changes to minus. Preserve keyboard support, visible focus and a comfortable hit target.

**Metrics.** Animate each metric at most once when its region first enters the viewport. Unobserve it immediately. Use an 800ms ease-out at most. Keep the final value in the initial HTML; do not start the document with zero-valued results. Use a visually animated duplicate marked aria-hidden if necessary, and keep a stable accessible value. Never announce every count frame.

**Reduced motion.** Show final metric values, disable drawing and movement, and use instant anchor navigation. Do not use autoplay video, looping coin animations, bouncing doodles, animated backgrounds, scroll hijacking, or cursor-following art.

## SVG integration

The six illustrations are true vector paths with no embedded raster images, no fonts, no external dependencies, and no background rectangles. The linework has been traced into outlined shapes; it is editable path artwork, not a clean centreline stroke icon set. Do not animate stroke-dasharray on these filled silhouettes. Animate a wrapper or a separate simple native underline if needed.

Each SVG has two groups: `data-layer="ink"` and `data-layer="accent"`. The ink uses `var(--illustration-ink, currentColor)`. Accent uses `var(--illustration-accent, #B73525)`.

For theme inheritance, inline the SVG into HTML and set the two variables on a parent. An SVG loaded through an HTML img tag does not inherit page CSS variables. If using img, use the supplied theme-specific files or edit the SVG's root defaults at build time.

Light example values: illustration-ink #20251F, illustration-accent #B73525. Dark example values: illustration-ink #F1EEE7, illustration-accent #F45454. For monochrome, set both to currentColor. The `assets/riot-dark/` versions are ready for img usage on the dark background. Base files suit the light theme.

Preserve each viewBox and use width:100%; height:auto. Fit using contain; never stretch. All six source illustrations include enough margin around the object. Keep decorative assets aria-hidden with an empty alt when their meaning is already expressed by adjacent copy. If the asset carries information independently, give it a short contextual label. When repeating inline assets, prefix title and group IDs to keep IDs unique.

## Asset placement

| Asset | Placement | Desktop width | Mobile width |
|---|---|---|---|
| 01-hero-curiosity.svg | Hero | 480–640px | 300–350px |
| 02-work-distribution.svg | Dezerv case | 440–560px | 280–340px |
| 03-ai-workbench.svg | AI builds | 400–520px | 280–340px |
| 04-travel.svg | Away from the desk | 260–360px | 180–240px |
| 05-games.svg | Gaming and board games | 260–360px | 180–240px |
| 06-coffee.svg | Contact or personal transition | 240–320px | 160–220px |

Do not put every illustration in the hero. The full desk illustration can introduce the objects; individual illustrations later give them room. They are decorative storytelling assets, never substitutes for evidence.

## Technical build requirements for Claude

- Single-file static HTML with inline CSS and vanilla JS. No framework. SVGs can be inlined to preserve the single-file requirement.
- Total JavaScript under 30 KB uncompressed, including inline handlers. Do not count image assets as JavaScript. No third-party animation library.
- Semantic header, nav, main, section, article and footer. One h1. Ordered heading levels. A working skip link. Visible keyboard focus.
- CSS custom properties for theme, spacing and radius, with a root data-mode attribute for professional or game. Mobile-first styles. Use self-hosted or Google-hosted Google Fonts with font-display:swap and sensible fallbacks. Load only the initially needed display font early; do not make Professional mode wait on the Game display face.
- Set width/height or aspect-ratio on illustrations and portrait to prevent layout shift. Optimise SVG paths without changing appearance. No blocking analytics or embeds.
- Target Lighthouse 95+ mobile performance, accessibility, best practices and SEO. Measure the finished site; this design handoff does not certify an implementation score.
- OG title: Priyansh Mathur — Curious by default. OG description: A few things about me: the work, the side projects, and life away from the desk. Set canonical and og:url to the real production origin. Do not invent an OG image URL.
- Implement /resume as a real host redirect or document route, not a JavaScript-only click override. Until a local resume file is supplied, redirect to the verified existing PDF URL above. Test a direct visit with JavaScript disabled.
- Email, LinkedIn, Instagram and resume links must work. No fake live chat, fake project demos, or dead buttons.
- Keep the notes readable without JavaScript. Prefer native details elements. Preserve full content when printed if feasible.
- Do not deploy or change DNS as part of interpreting this handoff. First deliver a local reviewable build to Priyansh.

## Final review checklist

1. First screen says Priyansh and shows personality before role or metrics.
2. Work is obvious within one click and not buried below a biography.
3. All six SVG assets render without a paper rectangle on both light and dark backgrounds.
4. No role-led hero, fake product screenshot, invented hobby, or invented project URL.
5. Metric comparisons and denominators remain explicit.
6. Keyboard, 320px layout, 200% text enlargement and reduced motion work.
7. One accent per theme, one radius scale and the specified spacing rhythm.
8. Native disclosures and direct /resume visits work with JavaScript disabled.
9. Mobile Lighthouse is actually measured and the report is supplied.
10. Priyansh approves personal wording and measurement periods before public launch.
11. Both modes preserve the same facts, working links, current section and accessible reading order. Professional is the default, and explicit URL mode selection overrides local preference.
12. Game mode feels immersive at 390px without clipped panels, autoplay media, a fake intro sequence or a mandatory mini-game.

## Source ledger

- Existing portfolio: https://priyanshmathur.com/ — career narrative, metrics, email, LinkedIn and resume link, inspected 7 September 2026. These remain self-reported claims.
- Instagram: https://www.instagram.com/priyanshmathurr/ — public bio “En route to vacation.” The profile is private; posts were not used.
- Direct user input: travelling, FPS gaming, board games and coffee. Personal-first hero; SVG deliverables; plan and visuals only.
- Illustration-style reference: https://chatgpt.com/use-cases/money-and-finances — playful editorial line drawings, inspected 7 September 2026.
- Layout reference: https://www.riotgames.com/en — large visual opening, bold navigation and headings, varied feature panels, inspected 8 September 2026.
- Game-mode reference: https://playvalorant.com/en-us/ — VALORANT tactical-game context; the user's requested theme is realised through original interface composition and artwork, not official game assets.

## Prompt to give Claude

Build my personal website using this handoff and the attached SVGs and design boards. It must have two modes: Professional, the default light editorial experience, and Game mode, an immersive VALORANT-inspired dark tactical experience. Use a visible Professional / Game mode switch and one shared accessible content tree. Start with “Hi, I'm Priyansh. Curious by default.” Do not lead with my job title or current employer. Use the supplied copy and keep the experience personal, with work easy to reach in both modes. Preserve the original vector illustrations; inline them and recolour with the supplied variables. Use the immersive-game board for the Game hero and tactical navigation, and the professional board for the default opening. Follow the desktop and mobile composition, accessibility, motion, performance and /resume requirements. Do not invent case evidence, gaming ranks or AI project links. Deliver one static HTML file for review before deployment. If an implementation choice conflicts with the handoff, explain the tradeoff rather than silently replacing the design with a generic portfolio.
