# Loom: a production ledger for my father's bed-cover factory

**One line:** Replaced the workbook a bed-cover factory had run on for years with a phone-first ledger that answers the owner's only question, *where did that quantity go?*, and imported the real register so nothing had to be retyped.

## Context

- **Who:** my father, who owns and runs a small bed-cover factory in India. He is in his sixties and reads on a phone, often in poor light.
- **How it worked before:** one workbook, five cutting sheets, one row per roll of cloth. Roll number, challan, metres on the supplier's bill, usable metres after the standard 3% deduction, expected bedsheets, bedsheets produced, small pieces left. It lived in one person's head.
- **Constraints:** one non-technical primary user, job-work parties who never touch a screen, a godown with no signal, no budget for hosting. Built solo in September 2026 with AI tooling, evenings and weekends.

## The bet

Most small-factory software fails the same way: it asks the owner to learn the software's model of a factory. The bet was the reverse. Build around the register the business already keeps, make yield per roll the spine, and let the database enforce the rules so nobody, including me, can type a balance in.

Two decisions carried the rest:

1. **Stock is never edited, only moved.** Every change is an immutable ledger line. Balances are sums the database computes. A saved entry is never changed, only cancelled with its exact mirror image and re-entered. The books cannot fail to balance.
2. **The rules live in Postgres, not in screens.** Every stock movement goes through a posting function. Two people saving at once cannot corrupt stock, and a bug in a screen cannot produce a negative balance.

Alternatives rejected: an off-the-shelf ERP (too much model, too little register), Google Sheets with scripts (no rules, no audit), a native app (an installable web app on a phone was enough and needed no store).

## What shipped

- **Nine entry screens** that match the factory's nine physical steps, from cloth received to dispatch. Every entry is the same three moves: pick the party, enter the quantities, save.
- **A shortage check at the truck.** The receipt screen shows the gap between the bill and the tape measure live. Past the tolerance it will not save without a written reason. A repeated bill number for the same supplier is stopped.
- **Open jobs stay open.** Every issue has an expected return date. Cloth not accounted for stays visible as still with that cutter until it returns or the owner closes the job with a reason. Missing pieces are written off against the printer, on the record.
- **Yield per roll.** Expected bedsheets against produced, per roll and per unit, the number the workbook could only show by hand.
- **The real register imported.** A script reads the factory's own workbook and posts every row through the ordinary functions, so ledger and register agree line for line.
- **Three roles and an audit trail.** Owner, staff, read-only. People request access; the owner decides. Every change records who made it.
- **Nightly backups to the repo** because the free database plan keeps none. Plus one-command CSV export so the business is never locked in.
- **Printable challans, twenty-odd reports, offline reading**, and a calm paper-like interface designed for a phone in bad light.

## Result

The system runs on the factory's real register, imported from the original workbook, with the ledger reconciled against it. Two automated test suites guard the rules: a TypeScript suite for calculations and a SQL suite that proves the books balance, roles behave, and edge cases like partial returns and double-saves do the right thing.

The measure that matters is not a dashboard number. It is that the answer to *where did that quantity go?* no longer depends on who is in the room.

## What I would do differently

I built the textbook ERP first. Nine stages, twenty reports, a twelve-number dashboard, all in the first weekend. The business used about half of it. The next four days were spent removing the checking and packing screens nobody used, cutting the home screen from twelve numbers to four, and rebuilding the spine around rolls, units and yield. If I had started from the workbook instead of from what an ERP is supposed to have, the first weekend would have been the last.

## Skills

`product discovery` `domain modelling` `ledger design` `Postgres` `Next.js` `Supabase` `mobile-first` `operations` `AI-assisted build`

*The repository is private because it holds the factory's real production register. A walkthrough is available on request.*
