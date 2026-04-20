# TODO: InterLex Website

## Текущее состояние
- [x] Собран пакет проектной документации в `docs/spec`
- [x] Поднят сайт на `Next.js + TypeScript + Tailwind CSS`
- [x] Приведён бренд к `InterLex`
- [x] Зафиксирована доменная логика `interlex.kz -> RU`, `interlex.ge -> EN`
- [x] Добавлены локали `RU / EN / ZH / KK / KA`
- [x] Языковой переключатель переведён в формат dropdown
- [x] Добавлен базовый каталог услуг и маршруты `/services/[slug]`
- [x] Применены логотипы InterLex в header и footer
- [x] Подготовлен production deployment baseline под Coolify

## Сейчас в работе
- [ ] Привести проект к полному соответствию с утверждённой архитектурой сайта
- [ ] Ближайшее действие: добрать service pages, SEO-логику, metadata и контентную модель

## Завершено
- [x] Аудит документов и материалов по проекту
- [x] Подготовка ТЗ, sitemap, launch scope, content plan и dev task list
- [x] Подготовка Stitch prompt
- [x] Проверка Google Drive-материалов для контента сайта
- [x] Оптимизация базового деплой-контура под Coolify

## Правила и рамки
- [ ] Это полноценный корпоративный сайт с каталогом услуг, не лендинг
- [ ] Основной бренд в документах и интерфейсе: `InterLex`
- [ ] Основной домен по RU: `interlex.kz`
- [ ] Основной домен по EN: `interlex.ge`
- [ ] Дополнительные языки: `ZH`, `KK`, `KA`

## Операционный TODO
- [ ] Проверить и выровнять header/nav после недавних правок
- [ ] Добавить/расширить detail pages по ключевым услугам
- [ ] Доработать доменно-зависимые metadata и `hreflang`
- [ ] Убрать lint warnings по `<img>` и внешнему font link
- [ ] Решить архитектуру CMS (`Sanity` или `Strapi`)
- [ ] Подготовить контентную модель для услуг, пакетов и jurisdiction pages
- [ ] Подготовить env-профили для `interlex.kz` и `interlex.ge` в Coolify

## Текущий блокер
- `Нет критического блокера.`
- Сдерживающий фактор:
  - в проекте ещё нет подключённой CMS
  - часть локалей пока работает через fallback
  - контейнерный деплой ещё не проверен на живом ресурсе Coolify

## Важные файлы
- `docs/spec/01_structured_tz.md`
- `docs/spec/02_sitemap_and_page_blocks.md`
- `docs/spec/03_launch_scope.md`
- `docs/spec/05_dev_task_list.md`
- `docs/deploy/coolify.md`
- `Dockerfile`
- `.dockerignore`
- `interlex/src/lib/i18n.ts`
- `interlex/src/lib/services.ts`

## Проверка после завершения
- [ ] Проверить основной пользовательский сценарий по RU и EN доменам
- [ ] Проверить языковой переключатель и fallback-локали
- [ ] Проверить отсутствие регрессии в header/navigation
- [ ] Проверить `lint`, `tsc` и production build
- [ ] Проверить деплой контейнера в Coolify и ответ `/api/health`
