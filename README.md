# VCAD — Web Developer Code Test

Homepage, Explore Our Courses, and Course Details pages for Victoria College of Arts and Design, built from the supplied Figma designs and design tokens.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). `npm run build && npm run start` runs the production build (all pages, including every course detail page, are statically generated at build time).

## How far I got

All three pages are built: Homepage, Explore Our Courses, and the Course Details page (with all 5 courses linked and fully populated, not just the one shown in the mock). I prioritised in the order given in the brief, front-loading the shared foundation first — design tokens, header/footer, the course data model — since every page depends on it, then built the homepage, then Courses, then Course Details. Everything listed as required is interactive and working: the homepage course accordion, the campus and testimonial carousels, the courses gallery strip, the year tabs and module accordion on the course details page, the admissions tabs, and the scrollspy section nav.

## Figma access

The Figma MCP connection only had view access to the file, and Figma's MCP server requires edit access even for read calls, so I couldn't pull design context or export assets that way. Instead I worked from the full-page PNG exports (`Resources/`), inspecting them at full resolution, and cropped the photos, partner logos, and accreditation badges directly out of those screenshots for use as image assets.

## The one decision the designs didn't specify

**Courses loading and empty states.** `getCourses()` is written as an async function (with a small artificial delay, so it's actually exercised) — `/courses` has a real `loading.tsx` skeleton matching the asymmetric grid shape, rather than a blank flash. If the course list is empty, the grid and gallery strip render an empty state (icon, message, link back home) instead of collapsing to nothing. You can see it by temporarily setting `courses` to `[]` in `data/courses.ts`.

A second, smaller decision worth flagging: the homepage mock's header (About VCAD / Courses / Contact Us, no Apply button) differs from the header shown on the Courses and Course Details mocks (About VCAD / Courses / Campuses / VCAD Life / Apply Now). Since the brief asks for one shared header component, I standardised on the fuller version everywhere, since it's the one used on two of the three pages.

## What I'd do next given more time

- Wire up the nav items that don't have a corresponding page yet (About VCAD, Campuses, VCAD Life, Apply Now) — currently styled but pointing at `#`, since building those pages was out of scope.
- Re-export cleaner image/logo assets directly from Figma once I have edit access, rather than screenshot crops.
- Add basic e2e coverage (Playwright) for the interactive pieces — accordions, tabs, carousels — since I only checked these manually during development.
- A closer pass on tablet breakpoints; I tested desktop and mobile (390px) but the mid-range is less scrutinised.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4, no other UI/animation libraries beyond `lucide-react` for icons. Course, campus, testimonial, and story content all live in `/data` and are typed — nothing is hardcoded into markup.
