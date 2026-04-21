import { withFallbackLocales, type ContentLocale, type Locale } from "@/lib/i18n";

const packagesMetaBase: Record<ContentLocale, { title: string; description: string }> = {
  en: {
    title: "Packages | InterLex",
    description: "Structured advisory packages for cross-border work in Kazakhstan and Georgia.",
  },
  ru: {
    title: "Пакеты | InterLex",
    description: "Структурированные пакеты сопровождения для трансграничной работы по Казахстану и Грузии.",
  },
};

export const packagesMeta: Record<Locale, { title: string; description: string }> = withFallbackLocales(packagesMetaBase);

export type PackagesMessages = {
  heroTitle1: string;
  heroTitle2: string;
  heroLead: string;
  heroCta: string;
  imgAlt: string;
  t1Name: string;
  t1Desc: string;
  t1Price: string;
  t1Period: string;
  t1f1: string;
  t1f2: string;
  t1f3: string;
  t1f4: string;
  selectTier: string;
  mostSelected: string;
  t2Name: string;
  t2Desc: string;
  t2Price: string;
  t2Period: string;
  t2f1: string;
  t2f2: string;
  t2f3: string;
  t2f4: string;
  t2f5: string;
  t3Name: string;
  t3Desc: string;
  t3Price: string;
  t3Period: string;
  t3f1: string;
  t3f2: string;
  t3f3: string;
  t3f4: string;
  t3f5: string;
  contactMP: string;
  tableTitle: string;
  thScope: string;
  thT1: string;
  thT2: string;
  thT3: string;
  r1h: string;
  r1a: string;
  r1b: string;
  r1c: string;
  r2h: string;
  r2a: string;
  r2b: string;
  r2c: string;
  r3h: string;
  r4h: string;
  r4a: string;
  r4b: string;
  r4c: string;
  r5h: string;
  r5a: string;
  r5b: string;
  r5c: string;
  maLabel: string;
  maTitle: string;
  maLead: string;
  maLink: string;
  maC1Title: string;
  maC1Body: string;
  maC2Title: string;
  maC2Body: string;
  faqTitle: string;
  faq1q: string;
  faq1a: string;
  faq2q: string;
  faq2a: string;
  faq3q: string;
  faq3a: string;
  bottomTitle: string;
  bottomLead: string;
  bottomBtn: string;
};

const packagesMessagesBase: Record<ContentLocale, PackagesMessages> = {
  en: {
    heroTitle1: "Clear scope,",
    heroTitle2: "predictable engagement.",
    heroLead: "InterLex packages cover recurring advisory, cross-border structuring, and partner-led strategic support for complex corporate work.",
    heroCta: "Request proposal",
    imgAlt: "InterLex package overview",
    t1Name: "Core counsel",
    t1Desc: "A steady package for recurring corporate, compliance, and legal support in one main jurisdictional track.",
    t1Price: "from €5k",
    t1Period: "/ month",
    t1f1: "Dedicated advisor",
    t1f2: "Monthly compliance review",
    t1f3: "Contract and document support",
    t1f4: "Priority response for routine matters",
    selectTier: "Choose package",
    mostSelected: "Most selected",
    t2Name: "Cross-border advisory",
    t2Desc: "A partner-led package for groups working across Kazakhstan, Georgia, and adjacent jurisdictions.",
    t2Price: "from €15k",
    t2Period: "/ month",
    t2f1: "Senior-led coordination",
    t2f2: "Multi-jurisdiction structuring",
    t2f3: "Tax and banking positioning",
    t2f4: "Fast-turnaround strategic support",
    t2f5: "Quarterly steering review",
    t3Name: "Strategic retainer",
    t3Desc: "A bespoke package for investor-facing, transaction-heavy, or highly confidential mandates.",
    t3Price: "custom",
    t3Period: "engagement",
    t3f1: "Managing-partner access",
    t3f2: "Investor and GR support",
    t3f3: "Transaction and negotiation layer",
    t3f4: "Crisis-response availability",
    t3f5: "Tailored governance and reporting",
    contactMP: "Speak to a managing partner",
    tableTitle: "What changes by package",
    thScope: "Scope",
    thT1: "Core",
    thT2: "Cross-border",
    thT3: "Strategic",
    r1h: "Jurisdictional coverage",
    r1a: "One main track",
    r1b: "Two to three linked tracks",
    r1c: "Custom multi-jurisdiction scope",
    r2h: "Lead level",
    r2a: "Advisor",
    r2b: "Senior advisor",
    r2c: "Managing partner",
    r3h: "Structured tax work",
    r4h: "Transaction support",
    r4a: "On demand",
    r4b: "Included by quota",
    r4c: "Built into mandate",
    r5h: "Strategic monitoring",
    r5a: "—",
    r5b: "Periodic review",
    r5c: "Continuous oversight",
    maLabel: "Add-on capability",
    maTitle: "M&A support when timing matters",
    maLead: "Specialised M&A support can be layered onto any package when the project moves from planning into live negotiations, diligence, and closing.",
    maLink: "See services",
    maC1Title: "Regulatory strategy",
    maC1Body: "Clearance planning, filing strategy, and transaction sequencing across target jurisdictions.",
    maC2Title: "Control and protection",
    maC2Body: "Negotiation posture, shareholder coordination, and defensive structuring for sensitive transactions.",
    faqTitle: "Common questions",
    faq1q: "What happens outside package scope?",
    faq1a: "Out-of-scope work is priced separately with a clear estimate and approval flow before we start.",
    faq2q: "Can the package be upgraded mid-cycle?",
    faq2a: "Yes. We can move the engagement to a wider package when project complexity or timing changes.",
    faq3q: "How is jurisdiction counted?",
    faq3a: "A jurisdiction is a distinct legal and regulatory track, such as AIFC, mainland Kazakhstan, Georgia, or another linked operating market.",
    bottomTitle: "Discuss the right package",
    bottomLead: "InterLex will map your operating scope and recommend the package that matches the real workload rather than a generic template.",
    bottomBtn: "Schedule briefing",
  },
  ru: {
    heroTitle1: "Понятный scope,",
    heroTitle2: "предсказуемое сопровождение.",
    heroLead: "Пакеты InterLex покрывают регулярную правовую работу, трансграничное структурирование и стратегическую поддержку партнёрского уровня для сложных корпоративных задач.",
    heroCta: "Запросить предложение",
    imgAlt: "Обзор пакетов InterLex",
    t1Name: "Базовое сопровождение",
    t1Desc: "Регулярный пакет для корпоративных, комплаенс- и правовых задач в одном основном юрисдикционном треке.",
    t1Price: "от €5k",
    t1Period: "/ месяц",
    t1f1: "Выделенный консультант",
    t1f2: "Ежемесячный комплаенс-обзор",
    t1f3: "Поддержка по договорам и документам",
    t1f4: "Приоритетная реакция по типовым вопросам",
    selectTier: "Выбрать пакет",
    mostSelected: "Чаще выбирают",
    t2Name: "Трансграничный пакет",
    t2Desc: "Партнёрский пакет для групп, работающих между Казахстаном, Грузией и смежными юрисдикциями.",
    t2Price: "от €15k",
    t2Period: "/ месяц",
    t2f1: "Координация senior-уровня",
    t2f2: "Мультиюрисдикционное структурирование",
    t2f3: "Налоговая и банковская логика",
    t2f4: "Быстрая стратегическая поддержка",
    t2f5: "Квартальный steering-review",
    t3Name: "Стратегический ретейнер",
    t3Desc: "Индивидуальный пакет для инвесторских, транзакционных и конфиденциальных мандатов.",
    t3Price: "индивидуально",
    t3Period: "мандат",
    t3f1: "Доступ к managing partner",
    t3f2: "Инвесторская и GR-поддержка",
    t3f3: "Сделочный и переговорный контур",
    t3f4: "Готовность к кризисным задачам",
    t3f5: "Индивидуальная governance- и reporting-модель",
    contactMP: "Связаться с управляющим партнёром",
    tableTitle: "Чем отличаются пакеты",
    thScope: "Параметр",
    thT1: "Базовый",
    thT2: "Трансграничный",
    thT3: "Стратегический",
    r1h: "Охват юрисдикций",
    r1a: "Один основной трек",
    r1b: "Два-три связанных трека",
    r1c: "Индивидуальный мультиюрисдикционный scope",
    r2h: "Уровень ведущего",
    r2a: "Консультант",
    r2b: "Старший консультант",
    r2c: "Управляющий партнёр",
    r3h: "Структурная налоговая работа",
    r4h: "Сделочная поддержка",
    r4a: "По запросу",
    r4b: "Включено по квоте",
    r4c: "Встроено в мандат",
    r5h: "Стратегический мониторинг",
    r5a: "—",
    r5b: "Периодический обзор",
    r5c: "Непрерывное сопровождение",
    maLabel: "Дополнительный модуль",
    maTitle: "M&A-поддержка, когда важна скорость",
    maLead: "Специализированный M&A-модуль можно добавить к любому пакету, когда проект переходит из планирования в живые переговоры, due diligence и closing.",
    maLink: "Смотреть услуги",
    maC1Title: "Регуляторная стратегия",
    maC1Body: "Логика клиренсов, подача заявок и sequencing сделки по целевым юрисдикциям.",
    maC2Title: "Контроль и защита",
    maC2Body: "Переговорная позиция, координация с акционерами и защитное структурирование чувствительных сделок.",
    faqTitle: "Частые вопросы",
    faq1q: "Что происходит вне scope пакета?",
    faq1a: "Внескоупная работа оценивается отдельно, с прозрачной сметой и подтверждением до старта.",
    faq2q: "Можно ли расширить пакет в середине цикла?",
    faq2a: "Да. Если проект усложнился или ускорился, мы переводим сопровождение на более широкий пакет.",
    faq3q: "Как считается юрисдикция?",
    faq3a: "Юрисдикция — это отдельный правовой и регуляторный трек, например AIFC, mainland Казахстан, Грузия или другой связанный рынок.",
    bottomTitle: "Обсудить подходящий пакет",
    bottomLead: "InterLex сопоставит фактический объём работы с форматом сопровождения и предложит не шаблон, а реалистичную конфигурацию.",
    bottomBtn: "Запланировать брифинг",
  },
};

export const packagesMessages: Record<Locale, PackagesMessages> = withFallbackLocales(packagesMessagesBase);
