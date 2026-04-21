# MEMORY: InterLex

## Identity
- Project: `InterLex`
- Workspace: `D:\Data\OneDrive\source\www\InteLex`
- App: `D:\Data\OneDrive\source\www\InteLex\interlex`

## Stable Rules
- Brand name is `InterLex`
- `interlex.kz` is RU-first
- `interlex.ge` is EN-first
- `kk` falls back to `ru`
- `ka` falls back to `en`
- Site remains a service-catalog website, not a landing-page reframing
- `docs/spec` is no longer tracked in git and should be treated as a local reference archive, not a deployment/runtime dependency

## Current Implementation Facts
- Material Symbols were removed from the app shell and page components
- Local SVG React icons now live in `interlex/src/components/ui/icons.tsx`
- Critical hero images are now stored under `interlex/public/images/hero`
- Critical hero rendering was adjusted for more robust production delivery, including an `unoptimized` fix for hero images
- `interlex/package.json` build now runs `node scripts/prepare-standalone.mjs` after `next build`
- `interlex/scripts/prepare-standalone.mjs` copies `public` and `.next/static` into `.next/standalone`
- `Dockerfile` and `docs/deploy/coolify.md` were updated to make public-asset expectations explicit for Coolify deploys
- Broken message files were replaced with clean UTF-8 content
- `zh` is currently normalized to English fallback to avoid broken or partial translations
- Language switcher ordering now follows locale group priority:
- `ru/kk -> ru, kk, zh, en, ka`
- `en/ka -> en, ka, zh, ru, kk`
- The home page now includes a quick service showcase and representative project-track cards derived from `docs/spec`
- The services catalogue now includes project-selection scenarios and representative bundled project tracks derived from `docs/spec`
- The Kazakhstan and Georgia pages now include explicit investment-project sections derived from `docs/spec` investor-entry logic

## Known Follow-up Items
- `main` now includes the image/runtime fixes through commit `9341cd2`
- Coolify redeploy still needs to be triggered and verified after the latest push
- Coolify runtime mode should be checked to confirm it uses the root `Dockerfile` or an equivalent copy step for `public`
- Dual lockfiles cause a Next.js workspace-root warning during build
- Full visual QA on mobile still remains desirable
- Root documentation files still need a wording cleanup so they do not imply that `docs/spec` is versioned in the repository
