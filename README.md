# Tianxiong Zhong - Design Portfolio

Optimized Next.js clone of [t-zhong.de](https://t-zhong.de/) — a design portfolio featuring transportation design, industrial design, illustration, and furniture design projects.

## Tech Stack

- **Next.js 16** (App Router, static generation)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (animations, parallax, custom cursor)
- **Google Fonts** (Barlow, self-hosted via `next/font`)

## Features

### Interactive Elements
- Custom cursor with spring physics (scales on hover targets)
- Magnetic buttons (nav links, CTAs follow mouse position)
- 3D tilt effect on project cards (perspective rotation on mouse move)
- Parallax scrolling on project gallery images
- Scroll progress indicator

### Animations
- Word-by-word text reveal with 3D rotateX
- Clip-path image reveal on scroll
- Staggered grid entrance on design page
- Animated dividers (scale from left/right)
- Hover overlays with gradient + project info

### SEO
- Full Open Graph & Twitter Card metadata per page
- JSON-LD structured data (Person schema)
- Auto-generated `sitemap.xml` and `robots.txt`
- Canonical URLs on all pages
- SVG favicon + Apple Touch Icon
- Custom OG image (1200x630)
- Semantic HTML throughout

### Performance
- `next/image` for automatic WebP/AVIF, lazy loading, responsive srcsets
- `next/font` for zero layout shift
- All pages statically generated at build time
- Automatic code splitting per route
- Minimal CSS via Tailwind

## Project Structure

```
src/
  app/
    layout.tsx              # Root layout, metadata, structured data
    page.tsx                # Homepage
    globals.css             # Tailwind + custom properties
    sitemap.ts              # Auto-generated sitemap
    robots.ts               # Auto-generated robots.txt
    icon.svg                # Favicon
    apple-icon.png          # Apple Touch Icon
    design/
      layout.tsx            # SEO metadata
      page.tsx              # Design projects grid
    contact/
      layout.tsx            # SEO metadata
      page.tsx              # Contact info + socials
    impressum/
      layout.tsx            # SEO metadata
      page.tsx              # Legal page (German)
    projects/
      tesla/page.tsx        # Tesla Cyberrad gallery
      readymade/page.tsx    # Readymade Motorcycle gallery
      illustration/page.tsx # Book of Time gallery
      little/page.tsx       # LittleEasy Table gallery
  components/
    layout/
      Header.tsx            # Animated header with magnetic nav
      Footer.tsx            # Animated footer with staggered links
    ui/
      AnimatedText.tsx      # Word-by-word text reveal
      CustomCursor.tsx      # Spring-physics custom cursor
      MagneticButton.tsx    # Mouse-following magnetic wrapper
      ScrollProgress.tsx    # Scroll progress bar
    ProjectShowcase.tsx     # Homepage project section (3D tilt)
    ProjectGallery.tsx      # Project detail page (parallax images)
  lib/
    animations.ts           # Shared Framer Motion variants
public/
  images/                   # 66 downloaded assets from original site
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Lint & Format

```bash
npx tsc --noEmit              # Type check
npx eslint src/               # ESLint
npx prettier --write "src/**" # Format
```
