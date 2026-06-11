# Portafolio Web - Directrices de Proyecto

Portfolio personal de Bladimir Luna Corrales construido con **Astro** + **TypeScript** + **Tailwind CSS**.

## Stack Tecnológico

- **Framework**: Astro 6.4.4 (SSG, zero-JS components)
- **Styling**: Tailwind CSS 4.3 + custom animations
- **Language**: TypeScript (strict mode)
- **UI/UX**: Spanish language site, dark theme with blue accents (`dark-950`, `blue-500`)
- **Deployment**: Docker + Caddy web server
- **Site URL**: https://bladimir.github.io

## Arquitectura

### Estructura de Componentes

**Section Components** (`src/components/`):

- Page sections as `.astro` files: `Hero.astro`, `About.astro`, `Skills.astro`, `Experience.astro`, `ProjectCard.astro`, `Contact.astro`, etc.
- Composed into single page: [src/pages/index.astro](src/pages/index.astro)

**Reusable UI Components** (`src/components/ui/`):

- `Badge.astro` — Skill badges with variant styling (color variants: `default`, `blue`, `green`, `yellow`, `purple`)
- `SectionTitle.astro` — Section headings with consistent typography

**Data-Driven Design**:

- All content lives in [src/data/profile.ts](src/data/profile.ts): skills, experience, projects, personal info
- Components hydrate from typed data exports → zero content duplication, single source of truth
- Type inference: `type Project = (typeof profile)["projects"][number]`

### Página Layout

- [src/layouts/Layout.astro](src/layouts/Layout.astro) — Master layout with `<head>` metadata, global styles, navigation
- File-based routing: `src/pages/` files become routes
- Project detail page: `src/pages/projects/hospital-system.astro`

## Estilo de Código

### TypeScript & Components

- **Strict mode enabled** (see [tsconfig.json](tsconfig.json))
- **Component props with interfaces**:

  ```astro
  ---
  export interface Props {
    variant?: "default" | "blue" | "green" | "yellow" | "purple";
    className?: string;
  }

  const { variant = "default", className = "" } = Astro.props;
  ---
  ```

- **Avoid client-side JavaScript** — Astro components are server-side only (zero JS overhead)
- Use `.astro` components, not React/Vue, unless interactivity is truly required

### Tailwind & Styling

- **Utility-first approach**: All styling via Tailwind classes
- **Responsive patterns**: `px-6 md:px-12`, `text-4xl md:text-6xl lg:text-7xl`
- **Consistent spacing**: `max-w-4xl mx-auto` for content centering
- **Custom animations** in `global.css`: `animate-glow-pulse`, `animate-fade-in-up`, `animate-fade-in`
- **Color palette**:
  - Dark backgrounds: `bg-dark-950`
  - Accent: `blue-500`
  - Secondary colors for badges: green, yellow, purple via variant prop
- **Typography**: Monospace for code: `font-mono` (JetBrains Mono)

### Content Updates

To modify portfolio content, edit [src/data/profile.ts](src/data/profile.ts):

- Update `skills[]` array to add/remove skill categories
- Update `experience[]` for job history
- Update `projects[]` for portfolio items
- Components automatically reflect changes

## Compilación y Testing

### Comandos Locales

```bash
npm install              # Install dependencies
npm run dev             # Dev server with hot reload → localhost:4321
npm run build           # Production build → ./dist/
npm run preview         # Preview built site locally
npm run astro           # Astro CLI (e.g., `npm run astro check`)
```

### Node Requirement

- **Node >= 22.12.0** (see [package.json](package.json))

### Generación Estática

- Astro pre-renders all pages → pure HTML/CSS/JS artifacts in `./dist/`
- No JavaScript payload for components (unless client directive is added)
- Fast load times, perfect for portfolio/blog sites

## Convenciones Específicas del Proyecto

### 1. Estructura de Datos vs Componentes

- **Rule**: Never hardcode content in components
- **Do**: Reference [src/data/profile.ts](src/data/profile.ts) for dynamic content
- All portfolio info: name, title, skills, projects, experience lives in a single TypeScript object

### 2. Component Composition Pattern

- **Large sections** = individual components (e.g., `Experience.astro` maps `profile.experience[]`)
- **Reusable elements** = `ui/` subfolder (e.g., `Badge.astro` for skill tags)
- Parents pass data via props; children consume and render

### 3. Idioma y Locales

- Site language: **Spanish** (`lang="es"` in [Layout.astro](src/layouts/Layout.astro))
- All UI labels must be in Spanish
- Technical terms can stay English (Laravel, Docker, GitHub, etc.)

### 4. Responsive Design

Use Tailwind's breakpoints consistently:

- Mobile-first: Start with mobile styles, override with `md:`, `lg:`
- Common pattern: `px-6 md:px-12`, `text-lg md:text-xl lg:text-2xl`

### 5. Agregando Nuevas Secciones

1. Add data to `profile.ts` (new array or object)
2. Create component in `src/components/`
3. Import & compose in `src/pages/index.astro`
4. Style with Tailwind utilities

**Example**: To add testimonials:

```astro
// 1. Add testimonials to profile.ts
testimonials: [{ author: "...", text: "..." }]

// 2. Create src/components/Testimonials.astro
---
import { profile } from "../data/profile";
---
<section>
  {profile.testimonials.map(t => <blockquote>{t.text}</blockquote>)}
</section>

// 3. Import in index.astro
```

## Docker & Despliegue

See [Dockerfile](Dockerfile) and [Caddyfile](Caddyfile).

**Build & Run Locally**:

```bash
docker build -t portafolio .
docker run -p 3080:80 portafolio
# Visit: http://localhost:3080
```

**Docker Compose** (with networking):

```bash
docker-compose up  # Port 3080
```

**Security Headers** (set via Caddy):

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- Gzip compression enabled

## Recursos Clave

- [Astro Docs](https://docs.astro.build) — Official guide (English)
- [Tailwind CSS](https://tailwindcss.com) — Utility CSS reference
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) — Type safety primer
