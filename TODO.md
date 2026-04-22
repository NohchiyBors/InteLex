# TODO: InterLex

## Current Focus
- [x] Add `interlex/src/app/sitemap.ts` and expose it from `robots.txt`
- [x] Add a permanent project rule: update `interlex/src/app/sitemap.ts` whenever a new indexable page or route is added
- [x] Duplicate the sitemap-update rule in `interlex/AGENTS.md` and reflect it in the StatusProject files
- [x] Save the initial SEO optimisation plan as a project document in `docs/seo-plan.md`
- [x] Add Google Analytics `gtag` for production hosts `interlex.kz` and `interlex.ge`
- [x] Remove Material Symbols dependency from `interlex/src/app/layout.tsx`
- [x] Replace all `material-symbols-outlined` usages with local SVG React icons
- [x] Move critical hero images from external Google-hosted URLs into `interlex/public/images/hero`
- [x] Replace critical `<img>` hero usage with `next/image`
- [x] Normalize `messages/*` and `services.ts` into clean UTF-8 content
- [x] Rework locale fallbacks so `kk -> ru`, `ka -> en`, and temporary `zh -> en`
- [x] Verify `npm install`, `npm run build`, and route smoke checks via local `npm run dev`
- [x] Patch standalone runtime asset serving and hero-image delivery for production
- [x] Enrich the site from local `docs/spec` with service showcase and representative project tracks on core commercial pages
- [x] Add explicit investment-project blocks for Kazakhstan and Georgia on the jurisdiction pages
- [x] Update the shared site navigation to surface the investor direction from the main menu and footer
- [x] Add a dedicated `/projects` page and expose it in the shared navigation
- [x] Add cross-links between `/projects` and the Kazakhstan / Georgia jurisdiction pages
- [x] Replace the placeholder contact phone lines with direct WhatsApp links for Kazakhstan and Georgia
- [x] Compile a repository-level project inventory from `docs/spec` with documentation priorities and current site-status markers

## Next Actions
- [ ] Review `docs/seo-plan.md` and convert it into an implementation backlog for technical SEO changes
- [ ] Verify public `https://interlex.kz/sitemap.xml` and `https://interlex.ge/sitemap.xml` after deploy
- [ ] Review whether the initial sitemap alternates should stay `ru/en`-only or later include explicit fallback-locale handling
- [ ] Implement canonical URLs and page-level `hreflang` / alternates for the two production domains
- [ ] Design a shared metadata helper so page SEO is consistent across services, jurisdictions, and projects
- [ ] Add structured data for `Organization`, `WebSite`, services, breadcrumbs, and FAQ where applicable
- [ ] Restart the Coolify deploys for `interlex` on `host` and `hostkz`
- [ ] Verify after redeploy that `https://interlex.kz/` serves hero images and brand assets correctly
- [ ] Verify that Coolify uses the root `Dockerfile` or an equivalent runtime that keeps `interlex/public` available
- [ ] Decide whether to keep dual lockfiles or set `turbopack.root` to silence the workspace-root warning
- [ ] Decide whether `zh` should stay English fallback or receive a full dedicated translation pass later
- [ ] Align `README.md` and root `AGENTS.md` with the new local-only status of `docs/spec`

## Verification Notes
- [x] Local `Host: interlex.kz` `robots.txt` includes `Sitemap: https://interlex.kz/sitemap.xml`
- [x] Local `Host: interlex.ge` `robots.txt` includes `Sitemap: https://interlex.ge/sitemap.xml`
- [x] Local `Host: interlex.kz` `sitemap.xml` renders core routes and `/services/[slug]` URLs on the `.kz` domain
- [x] Local `Host: interlex.ge` `sitemap.xml` renders core routes and `/services/[slug]` URLs on the `.ge` domain
- [x] `/` with `Host: interlex.kz` returns `lang=ru`
- [x] `/` with `Host: interlex.ge` returns `lang=en`
- [x] Rendered HTML for `Host: interlex.kz` includes `G-0PB5VDR3F9`
- [x] Rendered HTML for `Host: interlex.ge` does not include `G-0PB5VDR3F9`
- [ ] Rendered HTML for `Host: interlex.ge` includes `G-ZR71QDW2FB`
- [ ] Rendered HTML for `Host: interlex.kz` does not include `G-ZR71QDW2FB`
- [x] `/kz`, `/ge`, `/services`, `/packages` return `200`
- [x] Language switcher `<select>` and mobile menu trigger are present in rendered HTML
- [x] Standalone runtime returns `200` for `/brand/IL_logo_dark.svg`, `/images/hero/home-hero.jpg`, and `/_next/image?...`
- [x] Re-run build after the new content, projects routing, cross-links, WhatsApp contact updates, and sitemap changes

## Open Risks
- [ ] No browser-automation visual pass was run for responsive layout, only HTTP smoke checks
- [ ] Redeploy still needs to be executed and validated in live Coolify environments
- [ ] Live hosting may still fail if Coolify ignores the repository runtime assumptions despite the current fixes
- [ ] `README.md` and `AGENTS.md` still reference `docs/spec` as repository source of truth even though that folder is now excluded from git
