# Project memory

## Product intent & audience

- Appathon / hackathon event website: multi-page marketing + operations site for a coding competition.
- Audience: prospective participants (students/developers), organizers, and admins.
- Core user flows: learn about event → view rules/prizes/schedule → register → submit project → receive confirmation.

## Brand personality & voice

- Event/hackathon energy: energetic, encouraging, clear, and trustworthy.
- Production-grade presentation expected (not a demo/stub site).

## Visual design & UX direction

- Multi-page SPA-style site with top navigation across sections.
- Pages: Home, About, Register, Submit, Rules, Prizes, Schedule, FAQ, Contact, Privacy, Admin.
- Components should feel polished and cohesive across pages; avoid generic/cookie-cutter layouts.
- Icons via `lucide-react`; use for logos and UI iconography.

## Decisions, constraints & rationale

- Stack: Vite + React + Tailwind CSS (template default; do not add UI theme/icon packages).
- Imports use `@/` alias → `src/` (avoid deep relative paths).
- Edge function `send-confirmation` deployed; fires on registration and project submission.
- Database + edge function are active and wired into the live site.
- Repo source: `https://github.com/AnayaAcharya24/Appathon_website_Bolt.git`.
- Build verified passing; dev server runs automatically for preview.

## Open questions & assumptions

- Backend provider assumed to be Supabase (edge functions + DB present) — confirm if different.
- Admin area scope/auth mechanism not yet specified.
- Brand colors/typography not explicitly stated — infer from existing repo styles as the source of truth.
- Content (dates, prizes, rules text) is whatever exists in the cloned repo; verify it is current before production.