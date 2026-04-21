# STATUS LOG: InterLex

## 2026-04-21

### Item
Local production-hardening pass for the live Coolify codebase.

### Completed
- Removed external Material Symbols font link from `interlex/src/app/layout.tsx`
- Replaced all icon-font spans in the requested pages and components with local SVG React icons
- Downloaded critical hero images from external Google-hosted URLs into `interlex/public/images/hero`
- Replaced external hero `<img>` usage with local `next/image`
- Rewrote broken locale dictionaries and shared service content into clean UTF-8 files
- Updated locale fallback behavior to keep `.kz` RU/KK-oriented and `.ge` EN/KA-oriented
- Ran `npm install`
- Ran `npm run build` successfully
- Ran `npm run dev` and verified route responses for `/`, `/kz`, `/ge`, `/services`, `/packages`

### Evidence
- `npm run build` completed successfully on 2026-04-21
- `/` with `Host: interlex.kz` returned `lang=ru`
- `/` with `Host: interlex.ge` returned `lang=en`
- `/kz`, `/ge`, `/services`, `/packages` returned `200`

### Open
- Git commit and push still pending
- Coolify restart still pending
- No browser-automation visual check was run; current validation is build + HTTP smoke testing

### Item
Live asset outage on `interlex.kz` after the previous push.

### Completed
- Confirmed the live HTML reflects the latest code, so the deploy itself is updated
- Confirmed live static asset failures for `/brand/IL_logo_dark.svg` and `/images/hero/home-hero.jpg`
- Confirmed live `/_next/image` returns `500` because the source image from `public` is missing
- Reproduced the same failure locally by starting `interlex` from `.next/standalone/server.js`
- Added `interlex/scripts/prepare-standalone.mjs` to copy `public` and `.next/static` into `.next/standalone`
- Updated `interlex/package.json` so `npm run build` prepares the standalone runtime automatically
- Rebuilt locally and verified standalone returns `200` for `/brand/IL_logo_dark.svg`, `/images/hero/home-hero.jpg`, and `/_next/image?...`

### Evidence
- Live checks before the fix:
- `https://interlex.kz/brand/IL_logo_dark.svg` -> `404`
- `https://interlex.kz/images/hero/home-hero.jpg` -> `404`
- `https://interlex.kz/_next/image?url=%2Fimages%2Fhero%2Fhome-hero.jpg&w=1200&q=75` -> `500`
- Local standalone checks after the fix:
- `http://127.0.0.1:3000/brand/IL_logo_dark.svg` -> `200`
- `http://127.0.0.1:3000/images/hero/home-hero.jpg` -> `200`
- `http://127.0.0.1:3000/_next/image?url=%2Fimages%2Fhero%2Fhome-hero.jpg&w=1200&q=75` -> `200`

### Open
- Commit and push the runtime fix
- Restart the Coolify deploys
- Verify whether Coolify uses the root `Dockerfile` or a direct app start command

### Item
Repository follow-up after the standalone asset fix.

### Completed
- Additional commit `9341cd2` was prepared and pushed to `main`
- Hero images were switched to a more deployment-tolerant `unoptimized` mode
- `Dockerfile` expectations around `public` assets were verified
- `docs/deploy/coolify.md` was updated to reflect the current deployment assumptions

### Evidence
- `git rev-parse --short HEAD` -> `9341cd2`
- User confirmed `main` advanced from `4687c72` to `9341cd2`

### Open
- Run redeploy in Coolify for the `interlex` application on `host` and `hostkz`
- Verify live hero and brand assets after redeploy

### Item
Repository hygiene update for local-only specifications.

### Completed
- Added `/docs/spec/` to `.gitignore`
- Removed the existing `docs/spec/*` files from the git index with `git rm --cached -r docs/spec`
- Kept the files on disk locally so they remain available as working reference material outside git

### Evidence
- `git status --short` now shows `.gitignore` modified and `docs/spec/*` staged as tracked deletions

### Open
- Root docs still mention `docs/spec` as repository-tracked source material and may need follow-up wording changes

### Item
`docs/spec` content transfer into the commercial site surface.

### Completed
- Added a quick services showcase to the home page based on the phase-1 service structure from `docs/spec`
- Added representative project-track cards to the home page to cover the missing projects/cases layer from the specifications
- Added service-selection scenarios to the services catalogue based on the route logic from `docs/spec`
- Added representative bundled project-track cards to the services catalogue to show how services combine in real mandates

### Evidence
- `interlex/src/app/page.tsx` now renders service cards and project-track cards
- `interlex/src/app/services/page.tsx` now renders selection scenarios and project-track cards
- `interlex/src/lib/projects.ts` stores the new localized project/scenario content layer

### Open
- Build verification still needs to be rerun after these content additions

### Item
Country-specific investment-project visibility for Kazakhstan and Georgia.

### Completed
- Added a Kazakhstan investment-project section to `interlex/src/app/kz/page.tsx`
- Added a Georgia investment-project section to `interlex/src/app/ge/page.tsx`
- Extended `interlex/src/lib/projects.ts` with localized country-specific investment-project data

### Evidence
- `interlex/src/app/kz/page.tsx` now renders Kazakhstan investor-entry cards
- `interlex/src/app/ge/page.tsx` now renders Georgia investor-entry cards

### Open
- Re-run build after the new jurisdiction-level investment sections

### Item
Shared navigation refresh for the investor-facing site direction.

### Completed
- Reordered the main header navigation so the generic services catalogue appears earlier in the menu
- Added a dedicated `Investors / Инвесторам` entry in the shared header navigation
- Added the same investor-direction link to the shared footer navigation

### Evidence
- `interlex/src/components/layout/HeaderNav.tsx` now links directly to `/services/investor-gr`
- `interlex/src/components/layout/Footer.tsx` now exposes `/services/investor-gr` alongside the main catalogue links

### Open
- Re-run build after the shared navigation update
