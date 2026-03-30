Create a new UI component for this project.

Arguments: $ARGUMENTS
(Expected format: <ComponentName> <description of what the component does>)

Parse the arguments: the first word is the component name, everything after is the description.

## Instructions

### 1. Explore the codebase first
Before writing any code, read and understand:
- `src/app/globals.css` — global styles and CSS variables
- `tailwind.config.ts` — custom colors, fonts, and theme tokens
- `src/app/layout.tsx` — root layout structure
- `src/components/Navbar.tsx` and `src/components/Footer.tsx` — existing component patterns (client directive usage, Tailwind class conventions, responsive breakpoints)
- Any existing page that is most relevant to the component's purpose (e.g. `src/app/products/page.tsx` for product-related components)

### 2. Determine the correct location
- If the component will be reused across multiple pages → place it in `src/components/`
- If it's specific to a single page/route → place it as a local component file alongside that page, or inline it within the page file
- Use `@/` path alias for all imports

### 3. Design constraints — match the existing UI exactly
The site uses:
- **Fonts**: Quicksand for headings (`font-heading`), Nunito for body (`font-body`)
- **Colors**: primary `#8843A3` (purple), primary-light `#a865c9`, primary-dark `#6b2d85`, secondary-blue `#0038A8`, secondary-green `#00C853` — use these via Tailwind custom classes or CSS variables, not hardcoded hex values
- **Layout**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container pattern
- **Responsive**: mobile-first, `md:` and `lg:` breakpoints with grid/flex layouts
- **Visual style**: subtle shadows (`shadow-md`, `shadow-lg`), rounded corners (`rounded-xl`, `rounded-2xl`), hover transitions (`transition-all duration-300`), decorative blur circles for backgrounds
- **Interactivity**: use `'use client'` directive only when the component needs state or event handlers

### 4. Build the component
Create a TypeScript React component (`.tsx`) that:
- Has a clear, typed props interface
- Is fully responsive
- Uses only Tailwind utility classes (no inline styles unless absolutely necessary)
- Follows the existing visual language described above
- Includes any necessary accessibility attributes (aria labels, semantic HTML)

### 5. Show where to use it
After creating the file, show a usage example snippet demonstrating how to import and use the component in a relevant page.

Do not add any placeholder lorem ipsum content — use realistic content appropriate for an origami product brand.
