# InteLex — развёртывание из GitHub

Корпоративный сайт на **Next.js** (App Router). Исходники приложения лежат в каталоге **`interlex/`**. Корень репозитория — только удобная обёртка со скриптами `npm run dev|build|lint`.

## Требования

- **Node.js** 20.x или новее (рекомендуется актуальный LTS).
- **npm** (или совместимый клиент для установки зависимостей).

## Клонирование с GitHub

```bash
git clone https://github.com/NohchiyBors/InteLex.git
cd InteLex
```

## Установка зависимостей

Из корня репозитория:

```bash
npm install --prefix interlex
```

Либо перейти в приложение и установить там:

```bash
cd interlex
npm install
```

## Локальный запуск (разработка)

Из корня:

```bash
npm run dev
```

Или из `interlex/`:

```bash
cd interlex
npm run dev
```

Сайт: [http://localhost:3000](http://localhost:3000).

## Сборка и production-запуск локально

```bash
npm run build
npm run start --prefix interlex
```

После `build` команда `start` запускает production-сервер Next.js (порт по умолчанию **3000**).

## Переменные окружения

Для работы сайта в продакшене обязательных секретов в текущей версии нет. Файл **`.env.example`** в корне описывает переменные для локальных инструментов (например, MCP Stitch для разработки). При необходимости скопируйте значения в переменные окружения CI или хостинга; не коммитьте реальные ключи.

## Развёртывание с GitHub

### Vercel (рекомендуется для Next.js)

1. Импортируйте репозиторий в [Vercel](https://vercel.com/new): укажите этот GitHub-репозиторий.
2. **Важно:** задайте **Root Directory** = `interlex` (не корень монорепозитория).
3. Команды сборки по умолчанию подходят: **Build Command** `npm run build`, **Output** управляется Next.js автоматически.
4. После пуша в подключённую ветку (например, `main`) Vercel соберёт и опубликует новую версию.

### Другие платформы

Принцип тот же: рабочая директория сборки должна быть **`interlex`**, где лежит `package.json` приложения. Укажите:

- install: `npm ci` или `npm install`
- build: `npm run build`
- start: `npm run start`

Убедитесь, что платформа поддерживает **Node 20+** и не обрезает лимиты по времени/памяти на этапе `next build`.

### Свой сервер (Node)

На машине после `git clone` и `npm install --prefix interlex`:

```bash
npm run build
```

Запуск процесса (через systemd, PM2 и т.п.):

```bash
cd interlex && npm run start
```

Обычно перед приложением ставят reverse-proxy (nginx, Caddy) с TLS и проксированием на `127.0.0.1:3000`.

## Полезные ссылки

- Спецификация и задачи: каталог `docs/spec/` в репозитории.
- Точка входа для статуса проекта: `StatusProject.md`, `TODO.md`, `MEMORY.md`.
