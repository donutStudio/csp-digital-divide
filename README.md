# The Digital Divide Lab (Static Website)

This project is a **single-page interactive website** built with plain HTML, CSS, and JavaScript in the repo root for easy GitHub Pages deployment.

## What it includes

- 7 required digital divide factors:
  1. Affordability
  2. Rural / geographic infrastructure
  3. Device access
  4. Digital skills / literacy
  5. Education level
  6. Age
  7. Race/ethnicity and underserved communities
- Factor Explorer with tabs:
  - Overview
  - Data (stats + chart)
  - Solutions
  - Sources
- Comparison Dashboard with dynamic filters
- Local Reality Check with FCC Broadband Map link + QR code
- Solution Simulator (interactive policy lab)
- Final takeaways + global references list

## Files

- `index.html` – page structure and sections
- `styles.css` – visual design and responsive layout
- `script.js` – data model + all interactivity

## Run locally

Because this is static, you can open `index.html` directly or use a tiny local server:

```bash
python3 -m http.server 4173
```

Then open: `http://localhost:4173`

## Deploy to GitHub Pages

1. Push this repository to GitHub.
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, select:
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or your preferred branch)
   - **Folder:** `/ (root)`
4. Save, then wait for deployment.

## Content updates

All factor content (explanations, stats, chart values, citations, solutions) is in `script.js` under the `factors` array, so swapping in verified final stats is straightforward.
