# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based website for Wellness Medical Center, a traditional Chinese medicine clinic in Santa Cruz. The site features practitioner information, blog functionality via Sanity CMS, a product shop, and booking integration.

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## Tech Stack

- **Framework**: Astro 5.14+ (static site generation)
- **Styling**: Tailwind CSS 4.1+ (using new v4 Vite plugin)
- **CMS**: Sanity (headless CMS for blog posts)
- **Content**: Astro Content Collections (for products and local blog content)
- **Animations**: Motion (motion.dev)
- **UI Components**: Swiper (carousels/slideshows)

## Architecture

### Content Management Dual System

This project uses **two separate content systems**:

1. **Sanity CMS** (src/lib/sanity.ts): Used for blog posts with dynamic content
   - Posts fetched via GROQ queries (src/lib/queries.ts)
   - Images served through Sanity CDN with imageUrlBuilder
   - Videos stored as Sanity file assets
   - Content rendered using Portable Text (src/lib/portableText.ts)

2. **Astro Content Collections** (src/content/): Used for products and any local blog posts
   - Schema defined in src/content/config.ts
   - Blog collection: markdown files with frontmatter (title, pubDate, author, etc.)
   - Products collection: markdown files with product metadata (price, brand, image, shopUrl)

### Environment Variables

The project uses a `.env` file for Sanity configuration:
- `PUBLIC_SANITY_PROJECT_ID`: Sanity project ID (defaults to "96tssprd")
- `PUBLIC_SANITY_DATASET`: Sanity dataset (defaults to "production")

### Page Routes

- `/` - Homepage (src/pages/index.astro)
- `/about` - About page
- `/blog` - Blog listing page
- `/blog/[slug]` - Dynamic blog post pages (from Sanity)
- `/shop` - Product listing page
- `/sandbox` - Development sandbox page

### Layouts

- **Layout.astro**: Base layout with Header/Footer, global styles, font loading
- **BlogLayout.astro**: Layout for blog listing pages
- **BlogPostLayout.astro**: Layout for individual blog post pages

### Key Components

- **VideoHero.astro**: Full-width video background hero section
- **ImageSlideshow.astro**: Automated image carousel using Swiper
- **TestimonialCarousel.astro**: Client testimonials carousel
- **BookingModal.astro**: Appointment booking integration
- **Header.astro / Footer.astro**: Site navigation and footer
- **MobileMenu.astro**: Responsive mobile navigation
- **Motion.astro**: Wrapper component for scroll animations
- **Icon components** (AcuIcon, HerbsIcon, LotusIcon, WellnessIcon, BrandLogo): SVG icons

### Styling Approach

- Using Tailwind CSS v4 with Vite plugin (configured in astro.config.mjs)
- PostCSS config includes @tailwindcss/postcss and autoprefixer
- Global styles in src/styles/global.css
- CSS custom properties for theme colors (--color-primary, --color-card-bg, etc.)
- Typography plugin for prose styles (@tailwindcss/typography)

### Asset Handling

- Images imported from src/assets/ using Astro's built-in image optimization
- Clinic photos organized in src/assets/clinic/
- Astro Image component used for optimized images with width/height/quality params
- Build assets output to `_assets/` directory (configured in astro.config.mjs)

### Blog Post Rendering

Blog posts from Sanity use:
1. GROQ queries to fetch post data (src/lib/queries.ts)
2. Portable Text converted to HTML via @portabletext/to-html
3. Images served through urlFor() helper with Sanity's image CDN
4. getStaticPaths() to generate all post routes at build time

### Sanity Integration Pattern

When working with Sanity data:
- Always use the `urlFor()` helper from src/lib/sanity.ts for images
- Reference queries from src/lib/queries.ts
- Handle missing/optional data gracefully (author, coverImage, etc.)
- Use try/catch when fetching from Sanity to handle connection errors

## Common Development Patterns

### Adding a New Blog Post (Sanity)
Create content in Sanity Studio - posts will automatically appear via GROQ queries.

### Adding a New Product
Create a markdown file in src/content/products/ following the schema in src/content/config.ts.

### Working with Content Collections
Import and query using `import { getCollection } from 'astro:content'`.

### TypeScript Configuration
Uses strict Astro TypeScript config (extends "astro/tsconfigs/strict").

## Git Branch Information

- Main branch: `main`
- Recent work includes blog functionality, Sanity integration, and removing old Sanity implementation
