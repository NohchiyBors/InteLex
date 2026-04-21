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
