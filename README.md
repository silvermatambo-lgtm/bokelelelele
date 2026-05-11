# Boleke Enterprise Website

Production-ready React + Vite website for Boleke Enterprise (PTY) LTD.

## Stack

- **React 18** + **TypeScript**
- **Vite 5** (bundler)
- **Tailwind CSS** + **shadcn/ui**
- **React Router v6**
- **TanStack Query**
- **Sonner** (toast notifications)

## Local Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm run dev
```

## Deploy to GitHub + Vercel

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Boleke Enterprise website"
git remote add origin https://github.com/YOUR_USERNAME/boleke-enterprise.git
git push -u origin main
```

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Vercel auto-detects the settings from `vercel.json`
4. Click **Deploy** — done!

> No environment variables needed for this site.

## Build

```bash
npm run build       # Production build → dist/
npm run preview     # Preview the production build locally
```

## Project Structure

```
src/
  assets/boleke/    # Images
  components/       # Shared components (Header, Footer, etc.)
  components/ui/    # shadcn/ui components
  hooks/            # Custom hooks
  pages/            # Route pages
  lib/              # Utilities
public/
  media/            # Videos
  *.png / *.ico     # Favicons and PWA icons
```
