# MEMORY: InterLex Website

## Идентичность проекта
- Проект: `InterLex`
- Основной workspace: `D:\Data\OneDrive\source\www\InteLex`
- Приложение: `D:\Data\OneDrive\source\www\InteLex\interlex`
- Документы проекта: `D:\Data\OneDrive\source\www\InteLex\docs\spec`

## Устойчивые цели
- Запустить полноценный корпоративный сайт `InterLex` с каталогом услуг.
- Сделать сайт пригодным для лидогенерации, SEO и мультиязычной работы на двух доменах.
- Поддержать две ключевые юрисдикции: Казахстан и Грузия.

## Уже принятые решения
- Решение: использовать `Next.js + TypeScript + Tailwind CSS`.
  Причина: это уже выбранный и частично реализованный стек проекта.
- Решение: сайт проектируется как полноценный corporate website, а не как landing page.
  Причина: большой объём услуг, две юрисдикции, SEO и мультиязычность.
- Решение: основная доменная логика такая:
  Причина: она согласована с пользователем и влияет на i18n и SEO.
  - `interlex.kz` -> `RU`
  - `interlex.ge` -> `EN`
- Решение: дополнительные локали `ZH`, `KK`, `KA` должны быть предусмотрены в архитектуре.
  Причина: они уже зафиксированы в документах и в коде.
- Решение: основной бренд пишется как `InterLex`.
  Причина: это явное указание пользователя.

## Жёсткие правила
- Не использовать терминологию `MVP` как основную рамку проекта.
- Не отклоняться в сторону лендинга; базовая модель это service catalog website.
- Доменные имена оставлять в lowercase: `interlex.kz`, `interlex.ge`.
- В коде не откатывать чужие изменения без явного запроса.

## Формулы и соответствия
- Primary locale by host:
  - `.kz` = `ru`
  - `.ge` = `en`
- Fallback locales:
  - `kk` -> `ru`
  - `ka` -> `en`
- Primary content sections:
  - `Home`
  - `Services Catalog`
  - `Jurisdictions`
  - `Packages`
  - `Contacts`

## Критические зависимости
- Документы-спецификации в `docs/spec`
- Рабочий Next.js-проект в `interlex`
- Google Drive-материалы по пакетам, sales funnel, GR и investment catalog

## Известные ограничения
- `KK` и `KA` пока не имеют полного собственного контента и используют fallback.
- CMS пока не подключена.
- В проекте остаются lint warnings по `<img>` и внешнему font link.
- `build` ранее компилировал проект, но падал на системном `spawn EPERM` после компиляции.

## Важные ссылки и артефакты
- Спецификация: `docs/spec/01_structured_tz.md`
- Карта сайта: `docs/spec/02_sitemap_and_page_blocks.md`
- Scope запуска: `docs/spec/03_launch_scope.md`
- Таск-лист разработки: `docs/spec/05_dev_task_list.md`
- Stitch prompt: `docs/spec/06_stitch_prompt.md`
- i18n: `interlex/src/lib/i18n.ts`
- Service catalog data: `interlex/src/lib/services.ts`

## Что нельзя потерять
- Сайт не лендинг, а полноценный корпоративный сайт с каталогом услуг.
- Брендовая форма: `InterLex`.
- Доменная стратегия:
  - `interlex.kz` — RU-first
  - `interlex.ge` — EN-first
- Дополнительные языки предусмотрены архитектурно: `ZH / KK / KA`.
