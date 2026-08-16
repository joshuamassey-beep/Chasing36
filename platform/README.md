# Chasing 36 — Platform

The Next.js + Supabase tournament platform described in `../CHASING36_PLATFORM_PLAN.md`. Lives inside the `race-to-36` repo, in this `platform/` subfolder, alongside the current static site at repo root — see the plan's "Repo & folder structure" section for why.

## Status

**Phase 1 in progress.** Public landing page is built (`src/app/page.tsx`). No data model, auth, or tournament features yet — see the plan doc for the phased build order.

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> Note: this project folder may sync through a cloud file connector on some setups. If `next dev`/`next build` ever crashes with a low-level "Bus error", delete `node_modules` and reinstall on a normal local disk — that's an environment quirk, not a code issue.

## Deployment

A second Vercel project should point at this repo with **Root Directory** set to `platform/`. The existing Vercel project (root directory `/`, serving `index.html`) is untouched — chasing36.com keeps working exactly as it does today until Phase 4's cutover.
