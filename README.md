# Next.js Blog App (App Router) - Sample Project

## Overview
This is a sample Next.js blog application using the App Router (app directory). Articles are loaded from a local JSON file (`/data/artigos.json`) and each article has a dynamic route (`/artigos/[slug]`). The project demonstrates:
- Server Components with `async` data fetching
- `generateStaticParams` for SSG
- Dynamic metadata per article with `generateMetadata`
- Simple slug generation (uses `slugify` in package.json)

## Files created
- `app/page.tsx` — homepage listing articles
- `app/artigos/[slug]/page.tsx` — article page, `generateStaticParams`, `generateMetadata`
- `data/artigos.json` — example articles
- `lib/slugify.ts` — helper slugify function (uses npm `slugify` or fallback)
- `app/layout.tsx` — root layout
- `package.json`, `tsconfig.json`, `next.config.js`

## How to run locally
1. Install dependencies:
```bash
npm install
```
2. Run dev:
```bash
npm run dev
```
Project runs at `http://localhost:3000`.

## Deploy
- Push this repo to GitHub.
- Import project into Vercel and deploy (App Router supported).
- Make sure build command is `npm run build` and the root is the repo root.

## Notes
- This is a minimal example; adapt styles and structure as preferred.
- If you want the data to come from an external API (e.g. https://crudcrud.com) replace the JSON read in `app/page.tsx` and `app/artigos/[slug]/page.tsx` with fetch calls.

