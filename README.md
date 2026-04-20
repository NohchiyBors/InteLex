# Структура приложения InterLex

## Назначение

Корпоративный сайт `InterLex`: международный legal и business advisory с фокусом на Казахстан и Грузию. Репозиторий устроен как корневой workspace с обвязкой и документацией, а само приложение находится в подпапке **`interlex/`**.

Технологический стек приложения:
- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**

Целевая модель развёртывания:
- контейнерный деплой через **Coolify**
- production-сборка в режиме **`output: "standalone"`**

## Схема потока данных и сборки

- Корень репозитория хранит документацию, deployment-файлы, status-файлы и wrapper-скрипты npm.
- Рабочее веб-приложение живёт в `interlex/`.
- Точка входа приложения: `interlex/src/app/layout.tsx` и `interlex/src/app/page.tsx`.
- Маршруты строятся через **Next.js App Router** в `interlex/src/app/`.
- Общие компоненты лежат в `interlex/src/components/`.
- Локализация и контентные словари лежат в `interlex/src/lib/i18n*`.
- Каталог услуг описан в `interlex/src/lib/services.ts`.
- Public-ассеты отдаются из `interlex/public/`.
- Для production `next build` создаёт `.next/standalone`, а запуск идёт через `node .next/standalone/server.js`.
- Для контейнерного деплоя в корне есть `Dockerfile`; он собирает приложение из подпапки `interlex/`.

## Дерево каталогов (логическая модель)

```text
InteLex/
├── AGENTS.md                    # Общие правила для агентов по всему проекту
├── README.md                    # Этот обзор структуры репозитория
├── package.json                 # Wrapper-скрипты npm из корня
├── Dockerfile                   # Multi-stage production build для Coolify / Docker
├── .dockerignore                # Исключения для build context
├── .env.example                 # Пример env-переменных
├── TODO.md                      # Текущие задачи проекта
├── MEMORY.md                    # Устойчивые решения и ограничения
├── PROJECT-RESUME.md            # Снимок текущего состояния
├── STATUS-LOG.md                # Журнал заметных шагов
├── StatusProject.md             # Индексный файл режима StatusProject
├── docs/
│   ├── spec/                    # ТЗ, sitemap, scope, content plan, dev task list
│   └── deploy/
│       └── coolify.md           # Инструкция по деплою в Coolify
├── design/                      # Дизайн-материалы и Stitch exports
├── logo/                        # Исходные логотипы бренда
├── interlex/                    # Основное Next.js-приложение
│   ├── package.json             # Скрипты приложения: dev, build, start, lint
│   ├── next.config.ts           # Конфиг Next.js, включая standalone output
│   ├── tsconfig.json
│   ├── eslint.config.mjs
│   ├── postcss.config.mjs
│   ├── AGENTS.md                # Узкие правила именно для Next.js-части
│   ├── public/
│   │   └── brand/               # Применяемые логотипы InterLex
│   ├── src/
│   │   ├── app/                 # Layout, страницы, api routes, server actions
│   │   ├── components/
│   │   │   ├── forms/           # Формы и кнопки отправки
│   │   │   └── layout/          # Header, Footer, nav, language switcher
│   │   └── lib/
│   │       ├── i18n.ts          # Локали, chrome strings, доменная логика
│   │       ├── services.ts      # Каталог услуг и service detail data
│   │       └── i18n/
│   │           ├── server.ts    # Определение locale по host/cookie
│   │           └── messages/    # Контентные словари по страницам
│   ├── .next/                   # Результат локальной сборки (не править вручную)
│   └── node_modules/            # Зависимости приложения
└── StatusProject/               # Вспомогательная папка project-state режима
```

## Роли основных файлов

| Компонент | Файл / каталог | Ответственность |
|-----------|----------------|-----------------|
| Корневой вход в проект | `README.md`, `AGENTS.md` | Обзор структуры, общие правила репозитория |
| Статус проекта | `TODO.md`, `MEMORY.md`, `PROJECT-RESUME.md`, `STATUS-LOG.md` | Состояние работ, ограничения, журнал шагов |
| Бизнес-спецификация | `docs/spec/*` | ТЗ, архитектура страниц, scope и backlog |
| Деплой | `Dockerfile`, `docs/deploy/coolify.md` | Сборка и запуск в Docker / Coolify |
| Next.js app shell | `interlex/src/app/layout.tsx` | Общий layout, metadata, header/footer |
| Главная страница | `interlex/src/app/page.tsx` | Основной входной коммерческий экран |
| Основные маршруты | `interlex/src/app/*/page.tsx` | Страницы `services`, `kz`, `ge`, `packages`, `contacts` |
| Service detail routes | `interlex/src/app/services/[slug]/page.tsx` | Детальные страницы услуг |
| Навигация и chrome | `interlex/src/components/layout/*` | Header, nav, footer, language switcher |
| Формы | `interlex/src/components/forms/*`, `interlex/src/app/actions/*` | UI форм и server actions |
| Локализация | `interlex/src/lib/i18n.ts`, `interlex/src/lib/i18n/messages/*` | Локали, тексты, fallback-логика |
| Данные каталога услуг | `interlex/src/lib/services.ts` | Категории и detail-данные услуг |
| Публичные ассеты | `interlex/public/*` | Логотипы и прочая статика |

## Скрипты npm

### Корень репозитория

- `npm run dev` — запускает dev-режим приложения из `interlex/`
- `npm run build` — запускает production build приложения из `interlex/`
- `npm run lint` — запускает lint приложения из `interlex/`

### Приложение `interlex/`

- `npm run dev` — локальная разработка на Next.js dev server
- `npm run build` — production build
- `npm run start` — запуск standalone production server
- `npm run lint` — eslint-проверка

В среде, где PowerShell плохо обрабатывает `npm`, использовать:

```bash
cmd /c npm.cmd run <script>
```

## Принципы архитектуры

- Репозиторий разделён на:
  - проектную документацию и состояние работ в корне
  - приложение в `interlex/`
- Бизнес-решения и архитектура страниц сначала фиксируются в `docs/spec/`, потом отражаются в коде.
- Проект не должен откатываться в сторону landing page.
- Доменно-зависимая локаль является частью архитектуры:
  - `interlex.kz` -> `ru`
  - `interlex.ge` -> `en`
- Дополнительные локали (`zh`, `kk`, `ka`) должны сохраняться в архитектуре даже если часть контента пока fallback-only.
- Изменения структуры репозитория нужно синхронизировать с:
  - `README.md`
  - `AGENTS.md`
  - status-файлами проекта

## Полезные ссылки внутри репозитория

- Спецификация: [docs/spec/01_structured_tz.md](D:\Data\OneDrive\source\www\InteLex\docs\spec\01_structured_tz.md)
- Sitemap и page blocks: [docs/spec/02_sitemap_and_page_blocks.md](D:\Data\OneDrive\source\www\InteLex\docs\spec\02_sitemap_and_page_blocks.md)
- Launch scope: [docs/spec/03_launch_scope.md](D:\Data\OneDrive\source\www\InteLex\docs\spec\03_launch_scope.md)
- Dev task list: [docs/spec/05_dev_task_list.md](D:\Data\OneDrive\source\www\InteLex\docs\spec\05_dev_task_list.md)
- Coolify deploy note: [docs/deploy/coolify.md](D:\Data\OneDrive\source\www\InteLex\docs\deploy\coolify.md)

---
*Файл создан для быстрой ориентации в репозитории. Дата: 2026-04-20.*
