# The Digital Divide Lab

The Digital Divide Lab is a simplified, static one-page interactive research webpage for the school digital divide assignment. It is easy to grade, easy to deploy, and still goes beyond a basic slideshow.

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

## Main Sections

- Single-page intro
- 7 factor sections (assignment-ready content blocks)
- Per-factor mini chart, solution, and clickable citations

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

- `src/App.tsx` (the factor objects contain the explanation, statistics, charts, solution text, images, and citations)

## Deployment

Static deployment ready for Netlify, Vercel, and GitHub Pages:
- Build command: `npm run build`
- Output directory: `dist`

For GitHub Pages (repo: `csp-digital-divide`), publish `dist` and open the site at `https://<your-user>.github.io/csp-digital-divide/` (include the trailing slash).
