# priyanshmathur.com

Source for [priyanshmathur.com](https://priyanshmathur.com), the portfolio of Priyansh Mathur, a growth PM for regulated Indian fintech.

**Positioning the site is built around:** distribution is a product decision. At Dezerv the wealth product reached 20M users by living inside Moneycontrol, Livemint and Inshorts instead of buying downloads.

## What is in this repo

| Path | What it is |
|---|---|
| [`PLAN.md`](PLAN.md) | The redesign brief: verdict on the current site, positioning, sitemap, case-study template, three creative directions, and the build loop. |
| [`work/loom.md`](work/loom.md) | Case study: Loom, the production ledger built for my father's bed-cover factory. Follows the case-study template in the plan. |
| [`projects/distromap/`](projects/distromap/) | DistroMap, a tool that maps where a product's target users already spend time across Indian surfaces and turns that into an embedded-distribution playbook. Its [README](projects/distromap/README.md) is written as a PRD: problem, users, job to be done, success metric, scope, non-goals, risks. |

## Status

- Redesign: brief written, direction not yet chosen (see section 4 of the plan).
- DistroMap: v0 scaffold. Curated surface dataset in `data/surfaces.json`, deterministic scoring in `src/score.js`.

## Planned

Site rebuild on Astro with three case studies (Dezerv embedded distribution, Wint Wealth organic growth, Search Combat), a builds index, and short written teardowns. Tracked in `PLAN.md`.
