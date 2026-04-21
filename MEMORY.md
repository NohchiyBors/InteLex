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

## Current Implementation Facts
- Material Symbols were removed from the app shell and page components
- Local SVG React icons now live in `interlex/src/components/ui/icons.tsx`
- Critical hero images are now stored under `interlex/public/images/hero`
- Critical hero rendering now uses `next/image`
- Broken message files were replaced with clean UTF-8 content
- `zh` is currently normalized to English fallback to avoid broken or partial translations
- Language switcher ordering now follows locale group priority:
- `ru/kk -> ru, kk, zh, en, ka`
- `en/ka -> en, ka, zh, ru, kk`

## Known Follow-up Items
- Coolify redeploy still needs to be triggered after push
- Dual lockfiles cause a Next.js workspace-root warning during build
- Full visual QA on mobile still remains desirable
