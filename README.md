# The Digital Divide Lab

The Digital Divide Lab is a production-style interactive research web application built for school projects that need strong content depth and high interactivity. Instead of a slide deck, it delivers a data-rich exploratory experience with factor deep-dives, live comparison filters, a local reality check, and a policy solution simulator.

## Project Overview

This app explores 7 key factors behind the digital divide:
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
- visual area
- research-based solution
- linked citations with full URLs

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Recharts
- React Router

## Features

- **Landing experience** with animated intro and factor preview
- **Factor Explorer** with detail routes and tabbed panels (Overview, Data, Solutions, Sources)
- **Comparison Dashboard** with dynamic filters and chart updates
- **Local Reality Check** with simulated ZIP/city lookup and FCC Broadband Map integration
- **QR code panel** linking to FCC map
- **Solution Simulator** to test interventions by community profile
- **Final Synthesis** page with takeaways + global references
- Sticky nav, section progress indicator, responsive layouts, empty states, and loading states

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Start development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## How to Replace Research Content

All content is modular and stored in data files:

- `src/data/factors.ts` → factor explanations, stats, chart data, solutions, citations
- `src/data/comparisonData.ts` → comparison dashboard dataset
- `src/data/simulatorData.ts` → community profiles and interventions

To swap placeholders with final verified research:
1. Update values and source metadata in these files.
2. Keep existing object keys intact (`id`, `stats`, `chartData`, `citations`, etc.).
3. UI updates automatically without component rewrites.

## Deployment (Netlify/Vercel)

The app is static and backend-free.

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- Works out of the box on Netlify or Vercel static hosting.

## Architecture Decisions

- **Data-driven model:** Keeps all research content out of presentation components for easy updates.
- **Reusable components:** Cards, chart panels, citations, and simulation UI are modular.
- **Route-based structure:** Factor detail routes and lazy-loaded heavy sections improve clarity and performance.
- **Accessibility-first patterns:** semantic sections, keyboard-friendly controls, contrast, alt text, and safe external links.

## Notes

This project currently uses realistic placeholder research content designed to be school-appropriate and easy to replace with final verified sources.
