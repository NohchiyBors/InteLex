import { resolveContentLocale, type ContentLocale, type Locale } from "@/lib/i18n";

export type ServiceSlug =
  | "business-registration"
  | "free-zones"
  | "accounting-legal"
  | "corporate-management"
  | "turnkey-company"
  | "banking-support"
  | "investor-gr"
  | "ma-advisory"
  | "due-diligence";

export type ServiceEntry = {
  slug: ServiceSlug;
  category: string;
  title: string;
  summary: string;
  forWhom: string[];
  deliverables: string[];
  process: string[];
};

const servicesBase: Record<ContentLocale, ServiceEntry[]> = {
  en: [
    {
      slug: "business-registration",
      category: "Launch",
      title: "Business Registration",
      summary: "Company setup for foreign founders in Kazakhstan and Georgia, including local entities, branches, and ownership design.",
      forWhom: ["Foreign founders", "Holding groups entering a new market", "Regional operating companies"],
      deliverables: ["Jurisdiction and entity memo", "Registration support", "Document checklist", "Launch coordination with banking and compliance"],
      process: ["Choose jurisdiction and form", "Prepare corporate documents", "Register the entity", "Move to post-registration setup"],
    },
    {
      slug: "free-zones",
      category: "Optimisation",
      title: "Special Regimes and Zones",
      summary: "Selection and implementation of AIFC, FIZ, SEZ, and other special regimes for trade, manufacturing, IT, and investor projects.",
      forWhom: ["Export businesses", "Technology companies", "Manufacturing and logistics projects"],
      deliverables: ["Regime comparison", "Eligibility review", "Application support", "Tax and compliance roadmap"],
      process: ["Review business model", "Compare available regimes", "Build the application package", "Secure status and launch operations"],
    },
    {
      slug: "accounting-legal",
      category: "Continuity",
      title: "Accounting and Legal Support",
      summary: "Ongoing bookkeeping, reporting, legal maintenance, and contract support for cross-border corporate structures.",
      forWhom: ["Operating companies", "Subsidiaries", "Investor-backed structures"],
      deliverables: ["Accounting supervision", "Legal retainer", "Contract drafting and review", "Regulatory reporting support"],
      process: ["Audit current state", "Define monthly scope", "Onboard records and documents", "Run recurring support cycle"],
    },
    {
      slug: "corporate-management",
      category: "Governance",
      title: "Corporate Management",
      summary: "Corporate secretary, governance, nominee, and trusted-management solutions for foreign-owned companies.",
      forWhom: ["Foreign shareholders", "Holding structures", "Sensitive ownership cases"],
      deliverables: ["Governance model", "Corporate secretary support", "Director and management structure", "Ongoing compliance control"],
      process: ["Assess ownership model", "Design governance layer", "Implement appointments", "Maintain reporting and controls"],
    },
    {
      slug: "turnkey-company",
      category: "Operations",
      title: "Company Under Management",
      summary: "Turnkey launch support covering HR, admin, logistics, IT, sourcing, and vendor coordination for a new local presence.",
      forWhom: ["New market entrants", "Industrial businesses", "Lean foreign teams"],
      deliverables: ["Launch roadmap", "Vendor stack", "HR and admin setup", "Operational coordination"],
      process: ["Map operating needs", "Assemble the launch stack", "Coordinate counterparties", "Transition into steady-state operations"],
    },
    {
      slug: "banking-support",
      category: "Operations",
      title: "Banking Support",
      summary: "Bank account opening strategy, KYC preparation, and relationship support for corporate banking in target jurisdictions.",
      forWhom: ["New entities", "Trading businesses", "Holding companies"],
      deliverables: ["Banking memo", "KYC package", "Submission support", "Fallback banking scenarios"],
      process: ["Profile the business", "Choose target banks", "Prepare KYC set", "Support review and onboarding"],
    },
    {
      slug: "investor-gr",
      category: "Investment",
      title: "Investor Support and GR",
      summary: "Government relations, incentives, residency pathways, and strategic support for large-scale investment projects.",
      forWhom: ["Investors", "Industrial projects", "Strategic market entrants"],
      deliverables: ["Incentive review", "Government engagement support", "Residency and investment roadmap", "Negotiation support"],
      process: ["Review the project profile", "Select incentive path", "Prepare materials", "Coordinate negotiations and approvals"],
    },
    {
      slug: "ma-advisory",
      category: "Transactions",
      title: "M&A Advisory",
      summary: "Acquisition support for companies and assets in Kazakhstan, Georgia, and linked regional markets.",
      forWhom: ["Strategic buyers", "Funds", "Asset investors"],
      deliverables: ["Target screening", "Deal structuring", "Transaction support", "Post-closing coordination"],
      process: ["Define the acquisition mandate", "Screen and qualify targets", "Structure and negotiate", "Support signing and closing"],
    },
    {
      slug: "due-diligence",
      category: "Transactions",
      title: "Due Diligence",
      summary: "Legal, financial, tax, and operating review before investment, acquisition, or strategic partnership.",
      forWhom: ["Acquirers", "Investors", "Joint-venture sponsors"],
      deliverables: ["Risk matrix", "Legal review", "Financial and tax review", "Executive summary with recommendations"],
      process: ["Collect source materials", "Run legal and financial review", "Map key risks", "Present findings and action points"],
    },
  ],
  ru: [
    {
      slug: "business-registration",
      category: "Запуск",
      title: "Регистрация бизнеса",
      summary: "Запуск компаний для иностранных учредителей в Казахстане и Грузии, включая локальные юрлица, филиалы и логику владения.",
      forWhom: ["Иностранные учредители", "Холдинги при выходе на рынок", "Региональные операционные компании"],
      deliverables: ["Мемо по выбору юрисдикции и формы", "Сопровождение регистрации", "Чек-лист документов", "Координация запуска с банком и комплаенсом"],
      process: ["Выбрать страну и форму", "Подготовить корпоративные документы", "Зарегистрировать компанию", "Перейти к пострегистрационной настройке"],
    },
    {
      slug: "free-zones",
      category: "Оптимизация",
      title: "Специальные режимы и зоны",
      summary: "Подбор и внедрение AIFC, FIZ, СЭЗ и других специальных режимов для торговли, производства, IT и инвестпроектов.",
      forWhom: ["Экспортные компании", "Технологический бизнес", "Производственные и логистические проекты"],
      deliverables: ["Сравнение режимов", "Проверка применимости", "Сопровождение заявки", "Налоговая и комплаенс-карта"],
      process: ["Разобрать бизнес-модель", "Сравнить доступные режимы", "Собрать пакет заявки", "Получить статус и запустить операции"],
    },
    {
      slug: "accounting-legal",
      category: "Сопровождение",
      title: "Бухгалтерия и юридическая поддержка",
      summary: "Постоянное бухгалтерское, отчётное, договорное и юридическое сопровождение трансграничных корпоративных структур.",
      forWhom: ["Операционные компании", "Дочерние общества", "Структуры с инвесторами"],
      deliverables: ["Бухгалтерский контроль", "Юридический ретейнер", "Подготовка и ревью договоров", "Поддержка по отчётности"],
      process: ["Аудит текущего состояния", "Фиксация ежемесячного scope", "Подключение учёта и документов", "Регулярный цикл сопровождения"],
    },
    {
      slug: "corporate-management",
      category: "Управление",
      title: "Корпоративный менеджмент",
      summary: "Корпоративный секретариат, governance-контур, nominee- и trusted-management решения для компаний с иностранным владением.",
      forWhom: ["Иностранные собственники", "Холдинговые структуры", "Чувствительные кейсы владения"],
      deliverables: ["Governance-модель", "Корпоративный секретариат", "Структура директоров и менеджмента", "Постоянный контроль комплаенса"],
      process: ["Оценить модель владения", "Спроектировать governance-слой", "Внедрить назначения", "Поддерживать отчётность и контроль"],
    },
    {
      slug: "turnkey-company",
      category: "Операции",
      title: "Компания под управлением",
      summary: "Запуск локального присутствия под ключ: HR, админ-контур, логистика, IT, sourcing и координация подрядчиков.",
      forWhom: ["Новые игроки рынка", "Промышленные компании", "Иностранные команды без локального офиса"],
      deliverables: ["Дорожная карта запуска", "Стек подрядчиков", "Настройка HR и admin", "Операционная координация"],
      process: ["Картировать потребности", "Собрать launch-стек", "Скоординировать контрагентов", "Перевести бизнес в штатный режим"],
    },
    {
      slug: "banking-support",
      category: "Операции",
      title: "Банковское сопровождение",
      summary: "Стратегия открытия счетов, подготовка KYC-пакета и сопровождение корпоративного банкинга в целевых юрисдикциях.",
      forWhom: ["Новые компании", "Торговые структуры", "Холдинги"],
      deliverables: ["Банковское memo", "KYC-пакет", "Сопровождение подачи", "Резервные банковские сценарии"],
      process: ["Профилировать бизнес", "Выбрать банки", "Подготовить KYC", "Сопровождать проверку и онбординг"],
    },
    {
      slug: "investor-gr",
      category: "Инвестиции",
      title: "Инвесторская поддержка и GR",
      summary: "GR-сопровождение, льготы, резидентские траектории и стратегическая поддержка крупных инвестиционных проектов.",
      forWhom: ["Инвесторы", "Промышленные проекты", "Стратегические входы на рынок"],
      deliverables: ["Оценка льгот", "Поддержка взаимодействия с государством", "Инвестиционная и резидентская дорожная карта", "Переговорная поддержка"],
      process: ["Изучить профиль проекта", "Выбрать стимулы", "Подготовить материалы", "Координировать переговоры и согласования"],
    },
    {
      slug: "ma-advisory",
      category: "Сделки",
      title: "M&A-консультирование",
      summary: "Сопровождение приобретения компаний и активов в Казахстане, Грузии и связанных региональных рынках.",
      forWhom: ["Стратегические покупатели", "Фонды", "Инвесторы в активы"],
      deliverables: ["Поиск и фильтрация целей", "Структурирование сделки", "Транзакционная поддержка", "Координация после closing"],
      process: ["Сформировать мандат", "Отобрать цели", "Выстроить и согласовать сделку", "Поддержать подписание и закрытие"],
    },
    {
      slug: "due-diligence",
      category: "Сделки",
      title: "Due diligence",
      summary: "Юридическая, финансовая, налоговая и операционная проверка перед инвестициями, покупкой бизнеса или партнёрством.",
      forWhom: ["Покупатели", "Инвесторы", "Партнёры по JV"],
      deliverables: ["Матрица рисков", "Юридический обзор", "Финансово-налоговый обзор", "Executive summary с рекомендациями"],
      process: ["Собрать материалы", "Провести юридическую и финансовую проверку", "Выделить ключевые риски", "Представить выводы и план действий"],
    },
  ],
};

export function getServices(locale: Locale): ServiceEntry[] {
  return servicesBase[resolveContentLocale(locale)];
}

export function getServiceBySlug(locale: Locale, slug: string): ServiceEntry | undefined {
  return getServices(locale).find((service) => service.slug === slug);
}

export function getServiceBySlugAnyLocale(slug: string): ServiceEntry | undefined {
  return servicesBase.en.find((service) => service.slug === slug);
}
