# PROJECT RESUME

Date: `2026-04-21`
Project: `InterLex`
Session owner: `Codex`

## Where The Work Landed
- Status: `in progress, code fixes complete`
- Main completed scope:
- Removed Google Material Symbols dependency from the app
- Replaced all icon-font usages with local SVG icon components
- Localized critical hero assets into the repository
- Cleaned broken mojibake text in `messages/*`, `services.ts`, and shared locale chrome
- Normalized locale fallback behavior for `kk`, `ka`, and temporary `zh`
- Verified local build and route-level dev smoke checks

## Verified Commands
- `npm install` in repo root
- `npm run build` in repo root
- `npm run dev` in repo root, followed by HTTP checks against `/`, `/kz`, `/ge`, `/services`, `/packages`

## Remaining Work
- Commit the changes
- Push to `main`
- Restart Coolify deploys for the live app instances

## Notes For Next Session
- If build fails with `EBUSY` on `interlex/.next/standalone`, check for leftover local `next dev` or `next start` processes and stop them before rebuilding
- If the Next.js root warning becomes noisy, either remove the extra lockfile or set `turbopack.root`
