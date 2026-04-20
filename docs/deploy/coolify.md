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
