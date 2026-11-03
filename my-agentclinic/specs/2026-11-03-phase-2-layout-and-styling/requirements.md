# Layout and styling: requirements

## Scope

**In**
- A shared JSX layout with a header, nav and footer, wrapping the home page.
- Nav links to every planned section: Home, Agents, Ailments, Therapies, Appointments, Dashboard.
- A base stylesheet at `/styles.css` with a playful pastel look and a self-hosted rounded heading font.
- Basic small-screen support: viewport meta, a max-width container, a nav that wraps.

**Out** (later phases)
- The pages behind the Agents, Ailments, Therapies, Appointments and Dashboard links (Phases 4–12).
- A full responsive pass, dark mode, empty states and error pages (Phase 13).

## Decisions

- **The nav shows all six sections now.** It shows the clinic's whole shape from day one; the unbuilt links 404 until their phase.
- **The header has the "AgentClinic" wordmark linking home, plus the nav.** It's simple and recognizable.
- **The footer has a playful line and the year**, e.g. "No agents were over-prompted in the making of this site." It follows the mission's "Delight in the details".
- **A playful pastel palette with a rounded display font for headings.** It gives the clinic personality, which serves Marketing's "attractive site".
- **The heading font is Fredoka, self-hosted in `public/fonts/`** as `.woff2` with its SIL Open Font License file. It looks the same in every browser and makes no external requests.
- **The layout takes a `title` prop and renders `<title>{title} · AgentClinic</title>`.** Each page gets a distinct tab title.
- **The layout takes a `current` prop, and the nav marks that section with `aria-current="page"`.** Users can see where they are, and screen readers announce it.
- **The CSS is a static file served from `public/`.** This follows the tech stack's "plain CSS served as a static file" and the `public/` convention.
- **Basic responsiveness only.** The full responsive pass stays in Phase 13; this phase only avoids a broken layout on phones.

## Context

- Roadmap: [Phase 2. Layout and styling](../roadmap.md#phase-2-layout-and-styling).
- `mission.md`: "Delight in the details" sets the whimsical copy and playful look. "Small, working steps" means each change keeps the app running. "Simple over clever" rules out a CSS framework.
- `tech-stack.md`: Hono JSX for the layout. Plain CSS with custom properties and flexbox/grid. Static assets live in `public/`. Vitest uses `app.request()`.

