# priyanshmathur.com, build v3 (tri-tone VALORANT direction)

Deploy the whole folder as the site root: `index.html`, `_redirects`, `assets/` (portrait.webp, mountains.webp, hills.webp, coast.webp). Keep `Priyansh_Mathur_Resume.pdf` at the root so `/resume` keeps working.

Single static file plus four images. Inline CSS, 3.8 KB of vanilla JS, six inlined SVG illustrations as one symbol sprite. Fonts from Google Fonts: Anton (headlines), Barlow Condensed 700 (labels, nav, buttons), Barlow 400/500/600 (body).

## What v3 changed

Direction. The page now follows playvalorant.com's actual rhythm instead of one dark ground: off-white #ECE8E1 is the default ground, navy #0F1923 carries Work, Off the clock, the marquee and the footer, and red #FA4553 is the accent everywhere and the ground of exactly one section, Contact. Grounds change with a 4vw diagonal cut. Headlines are Anton (the closest Google face to Tungsten). One notch (14px) on buttons, panels and photo cards. One diagonal slab motif in red: behind the portrait, under the Dezerv drawing, under the desk drawing.

Fixes from the desktop and mobile grill.
- Rail no longer overlaps the marquee: the rail is a 200px cream panel with its own z-index, and the marquee starts after the rail zone on 1200px+ screens. "Off the clock" fits on one line.
- Dezerv drawing fills its plate at 7/5 with the red slab behind it, no more empty plate.
- Every section has scroll-margin-top so anchor clicks land below the sticky header.
- Player card tag no longer collides with the portrait; the card art sits below it.
- Case-study tags never wrap on desktop ("01 // Dezerv / Embedded tracker", "02 // Wint Wealth / Investor tools"); on phones they wrap on the slash, not mid-word.
- Illustrations recolour per ground (cream on navy, navy on cream, navy with cream accent on red). This was a real bug in the first v3 pass: the drawings vanished on navy because the colour variables resolved at the root; they now resolve on each drawing.
- Red section: markers, slashes and arrows switch to navy so nothing disappears into the ground; the button is navy with cream text.

Contrast. Navy on cream 13.7:1. Cream on navy 13.7:1. Navy on red 5.0:1 (body text and buttons in the red section). Red on cream 3.1:1, used only for large headline text and marks, never for small text. Muted on cream #5F6A66 4.6:1.

## Grill log (three rounds)

Round 1 at 1920/1440/1280/390/320: no horizontal scroll at any width, nav on one line, no wrapped CTAs. Found: marquee got the diagonal cut and the rail margin at once; drawings invisible on navy; red-on-red marks in Contact; player card tag under the art; slab covering the whole Dezerv plate. Round 2: fixed all five; found the Dezerv tag wrapping at 1440 and the desk plate too small. Round 3: fixed both; motion pass with a real pointer and scroll (43 reveals, 3 triggers, counters, rail active state, crosshair) with no console errors.

Lighthouse mobile, local http server, uncompressed: Performance 91, Accessibility 100, SEO 100 (Best practices 77 is only the local http origin and a test-only console error). Cloudflare compression brings the 266 KB HTML to roughly a third; expect 95+ on the production URL.

## Before going live

1. `/resume`: `_redirects` handles it on Cloudflare Pages; otherwise add a Redirect Rule `/resume -> /Priyansh_Mathur_Resume.pdf` (302).
2. Confirm the metric reporting periods and that priyanshmathur2@gmail.com is the address you want on the mailto links.
3. Add `og:image` (the portrait on the red slab would work).
4. Re-run Lighthouse on the production URL.
