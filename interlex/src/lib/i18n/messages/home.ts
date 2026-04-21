import { withFallbackLocales, type ContentLocale, type Locale } from "@/lib/i18n";

const homeMetaBase: Record<ContentLocale, { title: string; description: string }> = {
  en: {
    title: "InterLex | Cross-Border Advisory",
    description: "Cross-border legal and business advisory for Kazakhstan and Georgia.",
  },
  ru: {
    title: "InterLex | Трансграничный консалтинг",
    description: "Юридический и бизнес-консалтинг для проектов в Казахстане и Грузии.",
  },
};

export const homeMeta: Record<Locale, { title: string; description: string }> = withFallbackLocales(homeMetaBase);

export type HomeMessages = {
  heroEyebrow: string;
  heroTitle1: string;
  heroTitle2: string;
  heroLead: string;
  ctaEngage: string;
  ctaExplore: string;
  mPractice: string;
  mMa: string;
  mEntities: string;
  mJur: string;
  disciplinesLine1: string;
  disciplinesLine2: string;
  disciplinesLead: string;
  d1Title: string;
  d1Body: string;
  d2Title: string;
  d2Body: string;
  d3Title: string;
  d3Body: string;
  jurSection: string;
  kzCardTitle: string;
  kzTag: string;
  kzB1: string;
  kzB2: string;
  kzB3: string;
  geCardTitle: string;
  geTag: string;
  geB1: string;
  geB2: string;
  geB3: string;
  consultTitle: string;
  consultLead: string;
};

const homeMessagesBase: Record<ContentLocale, HomeMessages> = {
  en: {
    heroEyebrow: "Cross-Border Advisory",
    heroTitle1: "Kazakhstan and Georgia,",
    heroTitle2: "one strategic counsel.",
    heroLead: "InterLex advises founders, investors, and corporate groups on structuring, regulatory entry, tax positioning, and high-stakes transactions across two key jurisdictions.",
    ctaEngage: "Request consultation",
    ctaExplore: "Explore jurisdictions",
    mPractice: "Years of practice",
    mMa: "M&A transactions supported",
    mEntities: "Corporate entities launched",
    mJur: "Core jurisdictions",
    disciplinesLine1: "Core",
    disciplinesLine2: "disciplines",
    disciplinesLead: "We focus on the practical legal and business work required to enter, scale, and protect cross-border operations.",
    d1Title: "Corporate structuring",
    d1Body: "Entity setup, ownership architecture, governance design, and market-entry structuring for cross-border groups.",
    d2Title: "Transactions and investment",
    d2Body: "Target review, M&A support, investor-facing structuring, government relations, and negotiation support.",
    d3Title: "Tax and compliance",
    d3Body: "Tax residency, special regimes, reporting discipline, accounting supervision, and regulatory continuity.",
    jurSection: "Jurisdictions",
    kzCardTitle: "Kazakhstan",
    kzTag: "RU / KK logic",
    kzB1: "AIFC and mainland structuring under one advisory track.",
    kzB2: "Support for foreign founders, industrial projects, and regional holdings.",
    kzB3: "Positioning for Central Asia, China corridors, and regulated sectors.",
    geCardTitle: "Georgia",
    geTag: "EN / KA logic",
    geB1: "Corporate, FIZ, and tax planning for market entry and operating companies.",
    geB2: "Advisory for trade, services, manufacturing, and investor-backed expansion.",
    geB3: "A practical bridge to Europe, the Caucasus, and wider Eurasian routes.",
    consultTitle: "Request a consultation",
    consultLead: "Share your project context and InterLex will propose the right jurisdictional and service track.",
  },
  ru: {
    heroEyebrow: "Трансграничный консалтинг",
    heroTitle1: "Казахстан и Грузия,",
    heroTitle2: "один стратегический партнёр.",
    heroLead: "InterLex консультирует собственников, инвесторов и корпоративные группы по структурированию, выходу на рынок, налоговой логике и сопровождению сложных сделок в двух ключевых юрисдикциях.",
    ctaEngage: "Запросить консультацию",
    ctaExplore: "Смотреть юрисдикции",
    mPractice: "лет практики",
    mMa: "сделок M&A",
    mEntities: "запущенных структур",
    mJur: "ключевые юрисдикции",
    disciplinesLine1: "Ключевые",
    disciplinesLine2: "направления",
    disciplinesLead: "Мы закрываем практические юридические и бизнес-задачи, которые нужны для входа, роста и защиты трансграничных операций.",
    d1Title: "Корпоративное структурирование",
    d1Body: "Регистрация компаний, проектирование владения, governance-модели и конфигурация выхода на рынок для трансграничных групп.",
    d2Title: "Сделки и инвестиции",
    d2Body: "Проверка целей, сопровождение M&A, инвесторская упаковка, GR-поддержка и координация переговоров.",
    d3Title: "Налоги и комплаенс",
    d3Body: "Налоговое резидентство, специальные режимы, отчётность, бухгалтерский контроль и регуляторная устойчивость.",
    jurSection: "Юрисдикции",
    kzCardTitle: "Казахстан",
    kzTag: "Логика RU / KK",
    kzB1: "Структурирование через AIFC и mainland в едином контуре.",
    kzB2: "Поддержка иностранных учредителей, промышленных проектов и холдингов.",
    kzB3: "Позиционирование под Центральную Азию, Китайские коридоры и регулируемые отрасли.",
    geCardTitle: "Грузия",
    geTag: "Логика EN / KA",
    geB1: "Корпоративное, FIZ- и налоговое планирование для выхода и операционной работы.",
    geB2: "Сопровождение торговли, сервисных и производственных компаний, а также инвестпроектов.",
    geB3: "Практический мост к Европе, Кавказу и более широким евразийским маршрутам.",
    consultTitle: "Запросить консультацию",
    consultLead: "Опишите проект, и InterLex предложит подходящую юрисдикционную и сервисную траекторию.",
  },
};

export const homeMessages: Record<Locale, HomeMessages> = withFallbackLocales(homeMessagesBase);
