# Layout and styling: validations

## Automated

Run `npm test`:

- [ ] `GET /` has the header wordmark, all six nav links, the footer line, and links `/styles.css` (integration, `app.request()`).
- [ ] On `GET /`, the Home link has `aria-current="page"` and no other link does (integration).
- [ ] `GET /styles.css` returns 200 `text/css`, and `/fonts/fredoka.woff2` returns 200 `font/woff2` (integration).
- [ ] `Layout` renders `<title>X · AgentClinic</title>` for `title="X"` (unit).
- [ ] The Phase 1 tests still pass, with the title checks updated (integration, end to end).

## Manual

- [ ] `npm run dev`, then open http://localhost:3000: the pastel palette, the rounded heading font, and the header, nav and footer all show.
- [ ] At about 375px wide, the nav wraps and the page doesn't scroll sideways.
- [ ] `npm run build && npm start` serves `/styles.css` and the font from `public/`.
- [ ] Clicking Agents, Ailments, Therapies, Appointments or Dashboard shows a 404 (expected until their phase).

## Ready to merge

- [ ] `npm test` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] `npm run format:check` passes.
