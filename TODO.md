# TODO: InterLex

## Current Focus
- [x] Remove Material Symbols dependency from `interlex/src/app/layout.tsx`
- [x] Replace all `material-symbols-outlined` usages with local SVG React icons
- [x] Move critical hero images from external Google-hosted URLs into `interlex/public/images/hero`
- [x] Replace critical `<img>` hero usage with `next/image`
- [x] Normalize `messages/*` and `services.ts` into clean UTF-8 content
- [x] Rework locale fallbacks so `kk -> ru`, `ka -> en`, and temporary `zh -> en`
- [x] Verify `npm install`, `npm run build`, and route smoke checks via local `npm run dev`

## Next Actions
- [ ] Push the standalone asset-runtime fix to `main`
- [ ] Restart the Coolify deploys for `interlex` on `host` and `hostkz`
- [ ] Verify that Coolify uses the root `Dockerfile` or otherwise serves `interlex/public` alongside `.next/standalone`
- [ ] Decide whether to keep dual lockfiles or set `turbopack.root` to silence the workspace-root warning
- [ ] Decide whether `zh` should stay English fallback or receive a full dedicated translation pass later

## Verification Notes
- [x] `/` with `Host: interlex.kz` returns `lang=ru`
- [x] `/` with `Host: interlex.ge` returns `lang=en`
- [x] `/kz`, `/ge`, `/services`, `/packages` return `200`
- [x] Language switcher `<select>` and mobile menu trigger are present in rendered HTML

## Open Risks
- [ ] No browser-automation visual pass was run for responsive layout, only HTTP smoke checks
- [ ] Coolify restart has not been executed from this session yet
- [ ] Live hosting may still fail if Coolify bypasses the repository `Dockerfile` and starts `interlex` directly with a custom command
