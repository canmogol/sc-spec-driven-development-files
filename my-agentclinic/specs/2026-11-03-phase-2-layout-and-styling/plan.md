# Layout and styling: plan

## 1. Layout

- [x] `src/layout.tsx`: export `Layout({ title, current, children })`. It renders the doctype, `<html lang="en">`, the charset and viewport metas, `<title>{title} · AgentClinic</title>` and a `<link rel="stylesheet" href="/styles.css">`.
- [x] Header: the "AgentClinic" wordmark linking to `/`, then a `<nav>` with Home `/`, Agents `/agents`, Ailments `/ailments`, Therapies `/therapies`, Appointments `/appointments` and Dashboard `/dashboard`. The link matching `current` gets `aria-current="page"`.
- [x] Footer: the playful line ("No agents were over-prompted in the making of this site.") and the current year.
- [x] `src/pages/home.tsx`: keep the `Home` content as is.
- [x] `src/app.tsx`: render `<Layout title="Home" current="home"><Home /></Layout>` at `GET /`.

## 2. Stylesheet and font

- [x] Add Fredoka as `public/fonts/fredoka.woff2`, with its license as `public/fonts/OFL.txt`.
- [x] `public/styles.css`: define custom properties for the pastel palette, spacing and radius. Load the font with `@font-face` and use it for headings, with a system font stack for body text. Style the max-width container, the header and nav (flex, wraps on narrow screens, distinct `[aria-current="page"]` style) and the footer.
- [x] `src/app.tsx`: serve `public/` with `serveStatic({ root: "./public" })` from `@hono/node-server/serve-static`. Register it after the page routes.

## 3. Tests and tooling

- [x] Add `prompts.md` and `.claude/` to `.prettierignore`.
- [x] Add the script `format:check` (prettier --check .).
- [x] `src/app.test.ts`: `GET /` has the wordmark, all six nav links, the footer line, and a link to `/styles.css`.
- [x] `src/app.test.ts`: on `GET /`, the Home link has `aria-current="page"` and the other links don't.
- [x] `src/app.test.ts`: `GET /styles.css` returns 200 with `text/css`, and `GET /fonts/fredoka.woff2` returns 200 with a `font/woff2` content type.
- [x] `src/layout.test.tsx`: rendering `<Layout title="X" current="home">` produces `<title>X · AgentClinic</title>`.
- [x] Update any Phase 1 test that assumes the bare `<title>AgentClinic</title>`.
