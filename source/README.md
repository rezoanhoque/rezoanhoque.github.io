# M. R. Hoque — academic portfolio

Astro static website with TypeScript interactions and course data. The design follows the compact glass header, Inter typography, navy/blue palette, square portrait, gentle gradients, and bordered cards of https://shakhaowat.com/ using Hoque's own content and photography.

## Develop and build

Requires Node.js 22.12+ or a supported newer version.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

The build goes to `dist/`. After review, `npm run sync` copies it to the parent GitHub Pages repository without deleting other files. It does not commit, push, or publish anything. Existing legacy redirects and the CV are retained.

## Update content

- Header: `src/components/Header.astro` (shared across every page).
- About, experience, publications, projects, presentations, gallery, contact, resume: the corresponding HTML fragment in `src/content/`. These preserve the existing site's detailed content and native disclosure controls.
- Tutorials: `src/data/courses.ts`. Add lessons with a title and public URL. MP4 files receive a video player; other video URLs receive a named link. Empty courses honestly state that recordings are coming soon.
- Photos and downloads: `public/`. The professional portrait is `public/images/professional-headshot.png`, with a neutral studio background. Gallery images belong to Hoque; none were copied from the reference site.
- Styles: `src/styles/base.css` and `src/styles/refinements.css`.
- TypeScript: `src/scripts/interactions.ts` handles the mobile menu, saved light/dark preference, keyboard page search, accessible image dialog, and name pronunciation audio.

## Content sources and remaining inputs

The existing portfolio and its October 2026 CV supply current education, publications, teaching, and research roles. Earlier CVs in `MRH Profile/CV_extracted/` supply historical project context. Older CVs have different graduation estimates; the current published CV takes precedence. BankPulse retains its existing name and status.

Tutorial recordings and any additional conference photos still need to be supplied. No invented videos, project URLs, or publication statuses were added.
