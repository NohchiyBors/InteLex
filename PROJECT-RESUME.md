# PROJECT RESUME

Date: `2026-04-20 15:35:00 +05:00`
Project: `InterLex Website`
Session owner: `Codex`

## Где находимся
- Текущая фаза: `Подготовка production deployment и выравнивание архитектуры`
- Общий статус: `В работе`
- Последний подтверждённый результат: `Проект подготовлен к контейнерному деплою в Coolify: добавлены standalone build, Dockerfile, .dockerignore, /api/health и env-aware metadataBase; production build проходит локально.`

## Следующий шаг
- `Развернуть контейнер в Coolify и задать доменные env-переменные, затем продолжить SEO и контентную доработку.`

## Снимок прогресса
- Завершено: `документы, базовый каркас сайта, i18n-архитектура, доменная логика, язык-switcher, базовый каталог услуг, логотипы, Coolify deployment baseline`
- В работе: `сведение кода, контента и SEO-архитектуры к единой production-модели`
- Осталось: `CMS, углубление service pages, чистка warnings, расширение контента и metadata, настройка env по доменам в Coolify`

## Блокеры
- `Нет жёсткого блокера`
- Наблюдаемые риски:
  - часть контента пока черновая
  - локали `KK` и `KA` пока fallback-only
  - контейнер ещё не проверен на реальном Coolify instance

## Ключевые правила
- Использовать `StatusProject` для фиксации состояния между сессиями.
- Держать бренд в форме `InterLex`.
- Не возвращаться к framing через `MVP` и `landing page`.
- Сохранять доменную логику `interlex.kz -> RU`, `interlex.ge -> EN`.

## Важные файлы
- `TODO.md`
- `MEMORY.md`
- `PROJECT-RESUME.md`
- `STATUS-LOG.md`
- `docs/spec/01_structured_tz.md`
- `docs/deploy/coolify.md`
- `Dockerfile`
- `interlex/src/lib/i18n.ts`
- `interlex/src/lib/services.ts`

## Заметки для следующей сессии
- Стартовать с: `TODO.md`, `MEMORY.md`, `PROJECT-RESUME.md`, `STATUS-LOG.md`
- Перепроверить: настройки ресурса Coolify и `NEXT_PUBLIC_SITE_URL`
- Не забыть: `/api/health` уже добавлен для post-deploy проверки
