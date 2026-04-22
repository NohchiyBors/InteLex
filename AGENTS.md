# AGENTS.md for `D:\Data\OneDrive\source\www\InteLex`

## Scope
- Этот файл действует для всего проекта `InterLex`.
- Более узкие инструкции в подпапках имеют приоритет над этим файлом.
- Для кода приложения учитывать также [interlex/AGENTS.md](D:\Data\OneDrive\source\www\InteLex\interlex\AGENTS.md).

## StatusProject Rules
- Если задача длинная, многошаговая или требует сохранения состояния между сессиями, использовать режим `StatusProject`.
- Считать, что `StatusProject` нужен, если:
  - работа идет в несколько этапов
  - есть блокеры, зависимости, правила, формулы или критичные файлы
  - важно явно фиксировать, что уже сделано, что делать дальше и что мешает
  - задача связана с импортом, миграцией, пакетной обработкой, публикацией, интеграцией или длительным сопровождением
- Не использовать `StatusProject`, если задача:
  - простая и одношаговая
  - закрывается в одной короткой сессии
  - не требует сохранения проектного состояния в файлах
  - не нуждается в `TODO`, `MEMORY`, `PROJECT-RESUME` и `STATUS-LOG`
- Если режим `StatusProject` подходит, использовать шаблоны из `D:\Data\OneDrive\source\StatusProject\templates`
- Использовать файлы:
  - `TODO.template.md`
  - `MEMORY.template.md`
  - `PROJECT-RESUME.template.md`
  - `STATUS-LOG.template.md`
- Дополнительные инструкции брать из файлов:
  - `D:\Data\OneDrive\source\StatusProject\PROMPT-RU.md`
  - `D:\Data\OneDrive\source\StatusProject\START-HERE-RU.md`
  - `D:\Data\OneDrive\source\StatusProject\IMPORT-SOP-RU.md`
- Если режим включен:
  - скопировать шаблоны в рабочую папку проекта
  - переименовать их под конкретный проект или поток работ
  - в начале каждой сессии сначала читать `TODO`, `MEMORY`, `PROJECT-RESUME` и при наличии `STATUS-LOG`
  - после каждого заметного шага обновлять проектные файлы, а не оставлять состояние только в переписке
- Минимальный набор файлов:
  - `TODO`
  - `MEMORY`
  - `PROJECT-RESUME`
- `STATUS-LOG` использовать для длинных, пакетных или повторяемых процессов

## Project Overview
- Проект: `InterLex`
- Тип продукта: полноценный корпоративный сайт с каталогом услуг
- Это не landing page и не проект, который надо описывать через `MVP` как основную рамку
- Основное приложение находится в `interlex/`
- Документы и спецификации находятся в `docs/spec/`

## Brand And Positioning
- Бренд писать как `InterLex`
- Доменные имена писать в lowercase: `interlex.kz`, `interlex.ge`
- Позиционирование: cross-border legal and business advisory for Kazakhstan and Georgia

## Domain And Locale Rules
- `interlex.kz` -> primary locale `ru`
- `interlex.ge` -> primary locale `en`
- Дополнительные локали: `zh`, `kk`, `ka`
- Текущие fallback-правила:
  - `kk` -> `ru`
  - `ka` -> `en`
- Не ломать доменно-зависимую локаль без явного запроса

## Product Rules
- Сайт должен оставаться service-catalog website
- Главная страница продаёт бренд и маршрутизирует по направлениям
- Каталог услуг — обязательный центральный раздел
- Архитектура должна поддерживать дальнейшее расширение по услугам, jurisdiction pages и SEO

## Tech Stack
- App: `Next.js` App Router
- Language: `TypeScript`
- Styling: `Tailwind CSS`
- Runtime strategy: `output: "standalone"` для контейнерного деплоя
- Target deployment: `Coolify` via root `Dockerfile`

## Repository Map
- `interlex/` — рабочее Next.js-приложение
- `docs/spec/` — согласованные проектные документы
- `docs/deploy/` — deployment notes
- `design/` — Stitch exports и дизайн-материалы
- `logo/` — исходные логотипы
- `interlex/public/brand/` — логотипы, используемые приложением

## Deployment Rules
- Для production деплоя ориентироваться на:
  - [Dockerfile](D:\Data\OneDrive\source\www\InteLex\Dockerfile)
  - [docs/deploy/coolify.md](D:\Data\OneDrive\source\www\InteLex\docs\deploy\coolify.md)
- Не убирать `standalone`-сборку без причины
- Для metadata и canonical логики использовать `NEXT_PUBLIC_SITE_URL`

## Editing Rules
- Перед заметными изменениями сверяться с:
  - [TODO.md](D:\Data\OneDrive\source\www\InteLex\TODO.md)
  - [MEMORY.md](D:\Data\OneDrive\source\www\InteLex\MEMORY.md)
  - [PROJECT-RESUME.md](D:\Data\OneDrive\source\www\InteLex\PROJECT-RESUME.md)
  - [STATUS-LOG.md](D:\Data\OneDrive\source\www\InteLex\STATUS-LOG.md)
- Не откатывать чужие изменения без явного запроса
- Не возвращать проект к framing через `MVP` или `landing page`
- При изменении проектных правил обновлять status-файлы, а не оставлять состояние только в чате
- Избегать дублирования и противоречий между `AGENTS.md`, `interlex/AGENTS.md` и файлами `StatusProject`
- Если правило уже существует в более подходящем или более узком источнике, не копировать его без необходимости, а ссылаться на действующий источник
- При обнаружении дублирующихся или конфликтующих правил сначала упростить и согласовать их, а потом вносить новые
- При добавлении новой индексируемой страницы или маршрута обновлять `interlex/src/app/sitemap.ts` в той же задаче
- Изменение `sitemap` считать обязательной частью SEO-проверки для новых страниц, jurisdiction pages и service pages

## Current Known Gaps
- CMS ещё не подключена
- Есть warnings по `<img>` и внешнему font link
- `kk` и `ka` пока fallback-only
- Контейнерная сборка подготовлена, но живой деплой в Coolify ещё надо проверить на целевом сервере

## Source Of Truth
- Бизнес и архитектурные решения: `docs/spec/`
- Текущее состояние работ: `TODO.md`, `MEMORY.md`, `PROJECT-RESUME.md`, `STATUS-LOG.md`
- Кодовые ограничения по Next.js: `interlex/AGENTS.md`
