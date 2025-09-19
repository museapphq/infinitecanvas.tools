# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

InfiniteCanvas.tools is an Astro-based static site that documents the history and ecosystem of infinite canvas software. The site showcases various tools from design and whiteboarding applications to thinking and programming tools.

## Development Commands

- `npm run dev` - Start development server (use `npm run start` for host access on local network)
- `npm run build` - Build the site for production
- `npm run preview` - Preview production build locally
- `npm run dead-links` - Check for broken links in gallery content

## Architecture

The site is built with:
- **Astro** - Static site generator with islands architecture
- **React** - For interactive components (SlideShow, IndexAppGallery)
- **Tailwind CSS** - Utility-first styling with custom design system
- **Content Collections** - Structured content in `/src/content/`

### Key Directories

- `/src/content/gallery/` - App gallery entries as markdown files with frontmatter
- `/src/content/history/` - Historical timeline entries as markdown files
- `/src/components/` - Astro and React components
- `/src/layouts/Layout.astro` - Main layout with SEO and analytics
- `/public/images/` - Static assets (gallery images 16:9 ratio, history images 1024x684px)

### Content Structure

Gallery entries require:
- `title`, `platforms`, `url`, `usecases`, `image`, `description`, `multiplayer` fields
- Use predefined usecases from README list (e.g., "whiteboard", "notetaking", "design prototyping")
- Images stored in `/public/images/gallery/` with 16:9 aspect ratio, min 1200px wide

History entries require:
- Date-based frontmatter and corresponding images in `/public/images/history/`
- Images sized at 1024x684px

### Styling System

Custom Tailwind config with:
- Brand colors: parchment (#FCFAF6), red (#C7381E), green (#409E3F), blue (#3C9499), etc.
- Typography: IBM Plex Sans, Merriweather serif
- Custom spacing, breakpoints, and design tokens

## Tech Stack Integration

- Astro integrations: @astrojs/image, @astrojs/react, @astrojs/tailwind
- Analytics: Fathom and Umami tracking
- Fonts: Google Fonts (IBM Plex Sans, Merriweather)
- Image optimization through Astro's image integration