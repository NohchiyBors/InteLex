# PROJECT RESUME

Date: `2026-04-21`
Project: `InterLex`
Session owner: `Codex`

## Where The Work Landed
- Status: `in progress, live image issue reproduced and patched`
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

## Verified Commands
- `npm install` in repo root
- `npm run build` in repo root
- `npm run dev` in repo root, followed by HTTP checks against `/`, `/kz`, `/ge`, `/services`, `/packages`
- `npm run start` in `interlex/`, followed by direct checks for `/brand/IL_logo_dark.svg`, `/images/hero/home-hero.jpg`, and `/_next/image?...`

## Remaining Work
- Commit the standalone asset-runtime fix
- Push to `main`
- Restart Coolify deploys for the live app instances
- Confirm the active Coolify deploy path matches the repository `Dockerfile` or an equivalent runtime copy strategy

## Notes For Next Session
- If build fails with `EBUSY` on `interlex/.next/standalone`, check for leftover local `node .next/standalone/server.js` processes and stop them before rebuilding
- If the Next.js root warning becomes noisy, either remove the extra lockfile or set `turbopack.root`
