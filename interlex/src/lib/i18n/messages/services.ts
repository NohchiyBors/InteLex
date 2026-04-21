import { withFallbackLocales, type ContentLocale, type Locale } from "@/lib/i18n";

const servicesMetaBase: Record<ContentLocale, { title: string; description: string }> = {
  en: {
    title: "Services | InterLex",
    description: "Structured legal and business advisory across Kazakhstan and Georgia.",
  },
  ru: {
    title: "Услуги | InterLex",
    description: "Структурированный каталог юридических и бизнес-услуг по Казахстану и Грузии.",
  },
};

export const servicesMeta: Record<Locale, { title: string; description: string }> = withFallbackLocales(servicesMetaBase);

export type ServicesMessages = {
  heroTitle1: string;
  heroTitle2: string;
  heroLead: string;
  explore: string;
  consult: string;
  imgAlt: string;
  trajTitle: string;
  trajLead: string;
  jurCardTitle: string;
  jurCardBody: string;
  linkKz: string;
  linkGe: string;
  lifeTitle: string;
  lifeBody: string;
  btnStruct: string;
  btnScale: string;
  btnAcquire: string;
  ledgerTitle: string;
  ledgerLead: string;
  fTag: string;
  fMain: string;
  efTitle: string;
  efDesc: string;
  hsTitle: string;
  hsDesc: string;
  nsTitle: string;
  nsDesc: string;
  baTitle: string;
  baDesc: string;
  oTag: string;
  oMain: string;
  aifcTitle: string;
  aifcDesc: string;
  htpTitle: string;
  htpDesc: string;
  trcTitle: string;
  trcDesc: string;
  viewTax: string;
  cTag: string;
  cMain: string;
  cdTitle: string;
  cdDesc: string;
  bkTitle: string;
  bkDesc: string;
  raTitle: string;
  raDesc: string;
  gTag: string;
  gMain: string;
  ddTitle: string;
  ddDesc: string;
  pmTitle: string;
  pmDesc: string;
  csTitle: string;
  csDesc: string;
  dialogueTitle: string;
  dialogueLead: string;
};

const servicesMessagesBase: Record<ContentLocale, ServicesMessages> = {
  en: {
    heroTitle1: "InterLex",
    heroTitle2: "service catalogue",
    heroLead: "A structured advisory map for company launch, special regimes, banking, accounting, transactions, and investor support across Kazakhstan and Georgia.",
    explore: "Explore catalogue",
    consult: "Request consultation",
    imgAlt: "InterLex advisory team",
    trajTitle: "Choose your route",
    trajLead: "Start from a jurisdiction, a business stage, or a specific operating problem. The catalogue is built to route each of those entry points.",
    jurCardTitle: "Jurisdictional entry",
    jurCardBody: "Compare the Kazakhstan and Georgia tracks before choosing the legal, tax, and operational model that fits your case.",
    linkKz: "Kazakhstan",
    linkGe: "Georgia",
    lifeTitle: "Business lifecycle",
    lifeBody: "Move from registration to compliance, banking, investor support, and complex transactions without switching advisory teams.",
    btnStruct: "Launch",
    btnScale: "Scale",
    btnAcquire: "Acquire",
    ledgerTitle: "Catalogue structure",
    ledgerLead: "InterLex organises services around the real operating sequence: launch, optimisation, compliance, and growth.",
    fTag: "01 / Launch",
    fMain: "Company formation and market entry",
    efTitle: "Entity formation",
    efDesc: "LLP, JSC, branch, SPV, and local-company setup across both jurisdictions.",
    hsTitle: "Holding structures",
    hsDesc: "Ownership, governance, and asset-positioning architecture for regional groups.",
    nsTitle: "Corporate administration",
    nsDesc: "Nominee, secretarial, and trusted-management layers where they are commercially justified.",
    baTitle: "Banking path",
    baDesc: "KYC preparation, bank selection, fallback scenarios, and onboarding support.",
    oTag: "02 / Optimisation",
    oMain: "Special regimes and tax positioning",
    aifcTitle: "AIFC entry",
    aifcDesc: "Corporate and investment structures aligned with AIFC use cases.",
    htpTitle: "Technology incentives",
    htpDesc: "Tech-oriented regimes and incentives for IT, R&D, and digital projects.",
    trcTitle: "Tax residency",
    trcDesc: "Corporate and personal tax residency support linked to operating substance.",
    viewTax: "View packages",
    cTag: "03 / Continuity",
    cMain: "Accounting and legal support",
    cdTitle: "Contracts and legal drafting",
    cdDesc: "Commercial documents, internal policies, and operating paperwork.",
    bkTitle: "Accounting supervision",
    bkDesc: "Bookkeeping, reporting, and periodic compliance support.",
    raTitle: "Regulatory control",
    raDesc: "Health checks, risk mapping, and remediation of compliance gaps.",
    gTag: "04 / Growth",
    gMain: "Transactions and investor support",
    ddTitle: "Due diligence",
    ddDesc: "Legal, financial, and tax review before investment or acquisition.",
    pmTitle: "Post-deal execution",
    pmDesc: "Negotiation support, transaction flow, and post-closing coordination.",
    csTitle: "Corporate governance",
    csDesc: "Management, reporting, and governance continuity for growing groups.",
    dialogueTitle: "Start the conversation",
    dialogueLead: "Describe your goal, geography, and timeline. We will route the request to the right InterLex workstream.",
  },
  ru: {
    heroTitle1: "Каталог",
    heroTitle2: "услуг InterLex",
    heroLead: "Структурированная карта услуг по запуску компаний, специальным режимам, банковскому сопровождению, бухгалтерии, сделкам и инвесторской поддержке в Казахстане и Грузии.",
    explore: "Открыть каталог",
    consult: "Запросить консультацию",
    imgAlt: "Команда консультантов InterLex",
    trajTitle: "Выберите маршрут",
    trajLead: "Можно стартовать от юрисдикции, этапа бизнеса или конкретной операционной проблемы. Каталог собран именно под такие точки входа.",
    jurCardTitle: "Выход в юрисдикцию",
    jurCardBody: "Сравните казахстанский и грузинский трек до выбора правовой, налоговой и операционной модели.",
    linkKz: "Казахстан",
    linkGe: "Грузия",
    lifeTitle: "Жизненный цикл бизнеса",
    lifeBody: "Переходите от регистрации к комплаенсу, банкам, инвесторской поддержке и сложным сделкам без смены консультирующей команды.",
    btnStruct: "Запуск",
    btnScale: "Рост",
    btnAcquire: "Сделки",
    ledgerTitle: "Структура каталога",
    ledgerLead: "InterLex организует услуги по реальной последовательности задач: запуск, оптимизация, сопровождение и рост.",
    fTag: "01 / Запуск",
    fMain: "Регистрация компании и выход на рынок",
    efTitle: "Создание юрлица",
    efDesc: "ТОО, АО, филиалы, SPV и локальные компании в обеих юрисдикциях.",
    hsTitle: "Холдинговые структуры",
    hsDesc: "Архитектура владения, governance и позиционирования активов для региональных групп.",
    nsTitle: "Корпоративное администрирование",
    nsDesc: "Номинальные, секретарские и trusted-management решения там, где это коммерчески оправдано.",
    baTitle: "Банковская траектория",
    baDesc: "KYC-подготовка, подбор банков, резервные сценарии и сопровождение онбординга.",
    oTag: "02 / Оптимизация",
    oMain: "Специальные режимы и налоговая логика",
    aifcTitle: "Вход через AIFC",
    aifcDesc: "Корпоративные и инвестиционные структуры под сценарии использования AIFC.",
    htpTitle: "Технологические стимулы",
    htpDesc: "Режимы и льготы для IT, R&D и цифровых проектов.",
    trcTitle: "Налоговое резидентство",
    trcDesc: "Сопровождение корпоративного и персонального резидентства, связанного с реальной substance-моделью.",
    viewTax: "Смотреть пакеты",
    cTag: "03 / Сопровождение",
    cMain: "Бухгалтерия и право",
    cdTitle: "Договоры и документы",
    cdDesc: "Коммерческие соглашения, внутренние политики и операционный документооборот.",
    bkTitle: "Бухгалтерский контроль",
    bkDesc: "Учёт, отчётность и регулярная комплаенс-поддержка.",
    raTitle: "Регуляторный контроль",
    raDesc: "Health check, карта рисков и устранение комплаенс-разрывов.",
    gTag: "04 / Рост",
    gMain: "Сделки и инвесторская поддержка",
    ddTitle: "Due diligence",
    ddDesc: "Юридическая, финансовая и налоговая проверка перед инвестициями и покупкой активов.",
    pmTitle: "Исполнение сделки",
    pmDesc: "Поддержка переговоров, транзакционного потока и пост-closing координации.",
    csTitle: "Корпоративное управление",
    csDesc: "Управленческий, отчётный и governance-контур для растущих групп.",
    dialogueTitle: "Начать диалог",
    dialogueLead: "Опишите цель, географию и сроки проекта. Мы направим запрос в подходящий рабочий трек InterLex.",
  },
};

export const servicesMessages: Record<Locale, ServicesMessages> = withFallbackLocales(servicesMessagesBase);
