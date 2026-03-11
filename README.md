# The Digital Divide Lab

The Digital Divide Lab is a clean, interactive research web app for a school digital divide project. It is designed to be simple to navigate and easy to grade while still going beyond a slideshow.

## Project Overview

This app covers 7 required factors:
1. Affordability
2. Rural / geographic infrastructure
3. Device access
4. Digital skills / literacy
5. Education level
6. Age
7. Race/ethnicity and underserved communities

Each factor includes:
- explanation
- 2020+ statistics
- chart
- research-based solution
- source citations with full clickable URLs

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Recharts
- React Router

## Main Sections

- **Home** (clear intro + grading guide)
- **Factor Explorer** (all required factor content)
- **Comparison Dashboard** (interactive filters)
- **Local Reality Check** (ZIP/city simulated lookup + FCC map + QR)
- **Solution Simulator** (community + intervention matching)
- **Takeaways** (final synthesis + global references)

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Where to Edit Research Content

- `src/data/factors.ts`
- `src/data/comparisonData.ts`
- `src/data/simulatorData.ts`

Keep object keys the same (`id`, `stats`, `chartData`, `citations`, etc.) and only swap values/sources.

## Deployment

Static deployment ready for Netlify, Vercel, and GitHub Pages:
- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages notes

This app now uses a hash router and relative Vite asset paths so it works on GitHub Pages project URLs (for example `https://<user>.github.io/<repo>/`) without server-side route rewrites.

When publishing, make sure your Pages source points to your built static files (the `dist` output).

## Notes

- The Local Reality section is intentionally simulated (no backend), then links users to the official FCC Broadband Map for verified local data.
- Current statistics are realistic placeholders and should be replaced with final teacher-approved sources if needed.
