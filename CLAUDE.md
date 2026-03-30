# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

**Next.js 16 App Router** project with React 19, TypeScript, and Tailwind CSS 4. E-commerce site for Nexa Origami selling origami products.

### Key Structure

- `src/app/` — All pages using App Router (`page.tsx` per route)
- `src/components/` — `Navbar.tsx` (client component), `Footer.tsx`
- `src/data/products.ts` — Product catalog (id, name, description, price, image, stock)
- `src/app/api/orders/route.ts` — POST endpoint that forwards orders to Google Sheets via webhook

### Root Layout

`src/app/layout.tsx` wraps every page with `<Navbar>` and `<Footer>`. Global styles and fonts are in `globals.css`.

### Client vs Server Components

Pages are server components by default. Mark `'use client'` only for interactivity — currently used in `Navbar.tsx` (mobile menu toggle) and `products/page.tsx` (order modal state).

### Styling

Tailwind utility classes throughout. Custom theme defined in `tailwind.config.ts`:
- Brand colors: primary `#8843A3`, secondary-blue `#0038A8`, secondary-green `#00C853`
- Fonts: Quicksand (headings), Nunito (body)

### Environment

`.env.local` requires `GOOGLE_SHEET_WEBHOOK_URL` for the orders API route to function.

### Path Aliases

`@/*` resolves to `./src/*` (configured in `tsconfig.json`).
