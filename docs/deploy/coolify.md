# Coolify Deployment

## Рекомендуемый способ
- Build Pack: `Dockerfile`
- Dockerfile path: `./Dockerfile`
- Port: `3000`

## Почему так
- Приложение живёт в подпапке `interlex/`, а не в корне репозитория.
- Для `Next.js` SSR-проекта предсказуемее использовать multi-stage Docker build.
- Включён `output: "standalone"`, поэтому runtime-образ получается компактнее и проще для Coolify.

## Переменные окружения
- `PORT=3000`
- `HOSTNAME=0.0.0.0`
- `NODE_ENV=production`
- `NEXT_PUBLIC_SITE_URL=https://interlex.kz`

Если будет отдельный ресурс под английский домен, задать:
- `NEXT_PUBLIC_SITE_URL=https://interlex.ge`

### Соответствие имён инстансов и доменов

Удобная схема (как в UI/описании деплоя):

| Логическое имя | Публичный домен | Локаль по умолчанию |
|----------------|-----------------|---------------------|
| `host` (инстанс GE) | `interlex.ge` | EN |
| `hostkz` (инстанс KZ) | `interlex.kz` | RU |

Если запрос приходит с внутренним `Host` (за Traefik/Coolify не видно публичного домена), на **каждом** ресурсе задайте явно:

- инстанс под **interlex.ge**: `INTERLEX_INSTANCE=ge`
- инстанс под **interlex.kz**: `INTERLEX_INSTANCE=kz`

Приложение уже учитывает заголовок `x-forwarded-host` для определения локали.

Фоновые JPEG в `public/images/hero/` отдаются через `<Image unoptimized />`, чтобы не дергать пайплайн `/_next/image` в контейнере (иначе в логах возможны ошибки вида «isn't a valid image … received null», если optimizer не находит файл так же, как локально).

### Препрод-домены `stage.interlex.*`

Для хостов вида **`stage.interlex.kz`**, **`stage.interlex.ge`** и любых **`stage.interlex.<зона>`**:

- `/robots.txt` отдаёт **`Disallow: /`** для всех ботов.
- В `<head>` добавляется **`noindex, nofollow`** (метаданные страниц).

Так препрод не попадает в индекс при условии, что запрос приходит с корректным **`Host`** / **`x-forwarded-host`** на этот домен.

## Проверка после деплоя
- Основной сайт открывается по домену
- Health endpoint отвечает: `/api/health`
- Локаль по домену работает корректно:
  - `interlex.kz` -> `RU`
  - `interlex.ge` -> `EN`

## Что уже подготовлено в проекте
- Dockerfile в корне репозитория
- `.dockerignore` для уменьшения build context
- standalone build для Next.js
- `sharp` для production image optimization
- endpoint `/api/health`
