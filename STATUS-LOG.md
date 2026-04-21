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
