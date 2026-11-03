# Roadmap

Tiny vertical slices. Each phase is small enough to finish in one sitting and leaves the app running.

1. **Hello clinic** — Hono server on Node renders "Welcome to AgentClinic" at `/`. Add `dev`, `start`, `test` scripts and one Vitest route test.
2. **Layout and styling** — Shared JSX layout (header, nav, footer) and a base stylesheet with the clinic's look.
3. **Database setup** — SQLite connection, migration runner, and a health check that touches the DB.
4. **Agents list** — `agents` table with seed data; `/agents` lists them.
5. **Agent detail** — `/agents/:id` shows one agent's profile.
6. **Register an agent** — Form to add a new agent, with validation.
7. **Ailments catalog** — `ailments` table and `/ailments` page.
8. **Agent ailments** — Link ailments to agents; show them on the agent detail page.
9. **Therapies catalog** — `therapies` table and `/therapies` page; show which ailments each therapy treats.
10. **Book an appointment** — Form to book an agent for a therapy at a time slot.
11. **Appointments list** — `/appointments` shows upcoming appointments; cancel an appointment.
12. **Staff dashboard** — `/dashboard` with counts and today's schedule.
13. **Polish** — Responsive layout, empty states, error pages, playful copy pass.
