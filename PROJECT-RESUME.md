# PROJECT RESUME

Date: `2026-04-21`
Project: `InterLex`
Session owner: `Codex`

## Where The Work Landed
- Status: `in progress, repository fixes shipped, live redeploy pending`
- Main completed scope:
- Removed Google Material Symbols dependency from the app
- Replaced all icon-font usages with local SVG icon components
- Localized critical hero assets into the repository
- Cleaned broken mojibake text in `messages/*`, `services.ts`, and shared locale chrome
- Normalized locale fallback behavior for `kk`, `ka`, and temporary `zh`
- Verified local build and route-level dev smoke checks
- Reproduced the live `404/500` image issue under local standalone runtime
- Added a post-build step that copies `public` and `.next/static` into `.next/standalone`
- Verified standalone runtime now serves `/brand/*`, `/images/*`, and `/_next/image`
- Added a follow-up production hardening pass that sets hero images to `unoptimized`
- Updated deployment notes and Docker expectations for Coolify
- Excluded `docs/spec` from git tracking and removed the existing files from the git index
- Pulled service and representative project-track content from local `docs/spec` into the home page and services catalogue
- Added country-specific investment-project blocks to the Kazakhstan and Georgia pages
- Updated the shared navigation so the investor direction is visible from the main menu and footer
- Added a dedicated `/projects` page and linked it from the shared navigation
- Added cross-links between `/projects` and the Kazakhstan / Georgia jurisdiction pages
- Replaced placeholder contact phone numbers with direct WhatsApp links for Kazakhstan and Georgia
- Added Google Analytics `gtag` to the root layout for the exact production host `interlex.kz`
- Adjusted the Google Analytics script strategy to `beforeInteractive` so validators can see the tag in the initial document
- Added `docs/project-inventory.md` as a working register of project directions from `docs/spec` with docs-priority and site-status fields
- Latest repository head is `9341cd2`

## Verified Commands
- `npm install` in repo root
- `npm run build` in repo root
- `npm run dev` in repo root, followed by HTTP checks against `/`, `/kz`, `/ge`, `/services`, `/packages`
- `npm run start` in `interlex/`, followed by direct checks for `/brand/IL_logo_dark.svg`, `/images/hero/home-hero.jpg`, and `/_next/image?...`

## Remaining Work
- Restart Coolify deploys for the live app instances
- Validate live asset delivery on `interlex.kz` and related routes after redeploy
- Confirm the active Coolify deploy path matches the repository `Dockerfile` or an equivalent runtime copy strategy
- Update root documentation language if the repository should no longer present `docs/spec` as tracked source of truth
- Verify the new content, projects page, shared navigation, cross-links, and WhatsApp contact additions with a clean build
- Verify host-specific analytics markup is present on `interlex.kz` and absent on `interlex.ge`
- Decide whether to formalise the project inventory into structured data instead of keeping it only as a markdown register

## Notes For Next Session
- If build fails with `EBUSY` on `interlex/.next/standalone`, check for leftover local `node .next/standalone/server.js` processes and stop them before rebuilding
- If live assets still fail after redeploy, inspect the exact Coolify start command and mounted working directory before changing application code again
- If the Next.js root warning becomes noisy, either remove the extra lockfile or set `turbopack.root`
- `docs/spec` remains on disk locally after `git rm --cached -r docs/spec`; the current change only stops tracking it in git
