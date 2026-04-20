import { withFallbackLocales, type ContentLocale, type Locale } from "@/lib/i18n";

const servicesMetaBase: Record<ContentLocale, { title: string; description: string }> = {
  en: {
    title: "Services Catalog | InterLex",
    description:
      "Comprehensive advisory suite spanning legal, corporate, and financial structuring.",
  },
  ru: {
    title: "Каталог услуг | InterLex",
    description:
      "Полный спектр консалтинга: право, корпоративные и финансовые структуры.",
  },
  zh: {
    title: "服务目录 | InterLex",
    description: "涵盖法律、公司与财务架构的综合顾问体系。",
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
    heroTitle1: "Comprehensive",
    heroTitle2: "Advisory Suite",
    heroLead:
      "Strategic legal, corporate, and financial structuring designed for sovereignty and scale. We architect cross-border solutions for high-net-worth individuals and multinational enterprises.",
    explore: "Explore Services",
    consult: "Request Consultation",
    imgAlt: "Executive Advisory",
    trajTitle: "Strategic Trajectory",
    trajLead:
      "Filter our capabilities by your target jurisdiction or immediate operational requirement.",
    jurCardTitle: "Jurisdictional Setup",
    jurCardBody:
      "Establish presence in key strategic markets with optimized tax and regulatory frameworks.",
    linkKz: "Kazakhstan",
    linkGe: "Georgia",
    lifeTitle: "Corporate Lifecycle",
    lifeBody:
      "From initial structuring to complex M&A and eventual exit strategies.",
    btnStruct: "Structuring",
    btnScale: "Scale",
    btnAcquire: "Acquisition",
    ledgerTitle: "The Advisory Ledger",
    ledgerLead:
      "A definitive index of our operational, legal, and financial service modalities.",
    fTag: "01 / Foundation",
    fMain: "Corporate Registration & Structuring",
    efTitle: "Entity Formation",
    efDesc:
      "End-to-end registration of LLCs, JSCs, and branch offices across global jurisdictions.",
    hsTitle: "Holding Structures",
    hsDesc:
      "Design and implementation of multi-tiered holding companies for asset protection.",
    nsTitle: "Nominee Services",
    nsDesc:
      "Discreet corporate directorship and shareholder representation.",
    baTitle: "Bank Account Opening",
    baDesc:
      "Facilitation of corporate accounts in premium banking jurisdictions.",
    oTag: "02 / Optimization",
    oMain: "SEZ & Tax Residency",
    aifcTitle: "AIFC Registration",
    aifcDesc:
      "Full admission to the Astana International Financial Centre.",
    htpTitle: "High-Tech Park Access",
    htpDesc:
      "Navigating tax incentives for IT and tech enterprises.",
    trcTitle: "Tax Residency Certificates",
    trcDesc:
      "Securing corporate and personal tax residency status.",
    viewTax: "View Tax Tables",
    cTag: "03 / Compliance",
    cMain: "Legal & Accounting",
    cdTitle: "Contract Drafting & Review",
    cdDesc: "Bespoke commercial agreements and SLAs.",
    bkTitle: "Comprehensive Bookkeeping",
    bkDesc: "Multi-currency accounting and IFRS reporting.",
    raTitle: "Regulatory Audits",
    raDesc:
      "Pre-emptive compliance checks and health assessments.",
    gTag: "04 / Growth",
    gMain: "M&A & Corporate Mgmt",
    ddTitle: "Due Diligence (Legal & Financial)",
    ddDesc:
      "Rigorous target assessment prior to acquisition.",
    pmTitle: "Post-Merger Integration",
    pmDesc:
      "Harmonizing corporate structures and operational frameworks.",
    csTitle: "Corporate Secretariat",
    csDesc:
      "Ongoing management of statutory registers and filings.",
    dialogueTitle: "Initiate Dialogue",
    dialogueLead:
      "Submit your inquiry for a confidential preliminary assessment by our senior partners.",
  },
  ru: {
    heroTitle1: "Комплексный",
    heroTitle2: "консалтинг",
    heroLead:
      "Стратегическое правовое, корпоративное и финансовое структурирование для масштаба и устойчивости. Трансграничные решения для частных клиентов и транснациональных групп.",
    explore: "Смотреть услуги",
    consult: "Запросить консультацию",
    imgAlt: "Корпоративный консалтинг",
    trajTitle: "Стратегическая траектория",
    trajLead:
      "Выберите компетенции по целевой юрисдикции или текущей задаче.",
    jurCardTitle: "Выход на юрисдикцию",
    jurCardBody:
      "Присутствие на ключевых рынках с оптимальным налогом и регулированием.",
    linkKz: "Казахстан",
    linkGe: "Грузия",
    lifeTitle: "Жизненный цикл компании",
    lifeBody:
      "От первичного структурирования до сложных M&A и выхода.",
    btnStruct: "Структуры",
    btnScale: "Масштаб",
    btnAcquire: "Поглощение",
    ledgerTitle: "Реестр компетенций",
    ledgerLead:
      "Полный перечень операционных, юридических и финансовых услуг.",
    fTag: "01 / Фундамент",
    fMain: "Регистрация и структурирование",
    efTitle: "Создание юрлица",
    efDesc:
      "Регистрация ТОО, АО и филиалов в разных юрисдикциях.",
    hsTitle: "Холдинговые структуры",
    hsDesc:
      "Многоуровневые холдинги для защиты активов.",
    nsTitle: "Номинальные услуги",
    nsDesc:
      "Директора и акционеры — конфиденциально.",
    baTitle: "Открытие счёта",
    baDesc:
      "Сопровождение корпоративных счетов в премиальных банках.",
    oTag: "02 / Оптимизация",
    oMain: "СЭЗ и налоговое резидентство",
    aifcTitle: "Регистрация в AIFC",
    aifcDesc:
      "Полное участие в Astana International Financial Centre.",
    htpTitle: "High-Tech Park",
    htpDesc:
      "Налоговые стимулы для IT и технологических компаний.",
    trcTitle: "Сертификаты резидентства",
    trcDesc:
      "Корпоративное и персональное налоговое резидентство.",
    viewTax: "Таблицы налогообложения",
    cTag: "03 / Комплаенс",
    cMain: "Право и учёт",
    cdTitle: "Договоры и проверка",
    cdDesc: "Индивидуальные коммерческие соглашения и SLA.",
    bkTitle: "Бухгалтерия",
    bkDesc: "Мультивалютный учёт и отчётность по МСФО.",
    raTitle: "Регуляторные аудиты",
    raDesc:
      "Профилактика нарушений и оценка комплаенса.",
    gTag: "04 / Рост",
    gMain: "M&A и корпоративный менеджмент",
    ddTitle: "Due diligence (право и финансы)",
    ddDesc:
      "Глубокая оценка цели перед сделкой.",
    pmTitle: "Интеграция после сделки",
    pmDesc:
      "Согласование структур и операционных моделей.",
    csTitle: "Корпоративный секретариат",
    csDesc:
      "Ведение реестров и подача отчётности.",
    dialogueTitle: "Начать диалог",
    dialogueLead:
      "Оставьте запрос для предварительной конфиденциальной оценки старшими партнёрами.",
  },
  zh: {
    heroTitle1: "全面",
    heroTitle2: "顾问体系",
    heroLead:
      "面向主权级与规模化设计的战略法律、公司与财务架构。我们为高净值客户与跨国企业提供跨境方案。",
    explore: "浏览服务",
    consult: "预约咨询",
    imgAlt: "高管顾问场景",
    trajTitle: "战略路径",
    trajLead:
      "按目标司法管辖区或当前运营需求筛选我们的能力。",
    jurCardTitle: "司法管辖区落地",
    jurCardBody:
      "在关键战略市场建立布局，配套优化税制与监管框架。",
    linkKz: "哈萨克斯坦",
    linkGe: "格鲁吉亚",
    lifeTitle: "企业全生命周期",
    lifeBody:
      "从初始架构到复杂并购再到退出路径。",
    btnStruct: "架构",
    btnScale: "扩张",
    btnAcquire: "并购",
    ledgerTitle: "顾问索引",
    ledgerLead:
      "覆盖运营、法律与财务服务方式的权威清单。",
    fTag: "01 / 基础",
    fMain: "公司注册与架构",
    efTitle: "主体设立",
    efDesc:
      "有限责任公司、股份公司、分支机构在全球法域的端到端注册。",
    hsTitle: "控股结构",
    hsDesc:
      "多层控股设计，用于资产保护与隔离。",
    nsTitle: "名义服务",
    nsDesc:
      "审慎的董事与股东代表安排。",
    baTitle: "银行账户开立",
    baDesc:
      "协助在顶级银行司法管辖区开立公司账户。",
    oTag: "02 / 优化",
    oMain: "特区与税务居民",
    aifcTitle: "AIFC 注册",
    aifcDesc:
      "完整纳入阿斯塔纳国际金融中心体系。",
    htpTitle: "科技园准入",
    htpDesc:
      "为科技与 IT 企业导航税收优惠。",
    trcTitle: "税务居民证明",
    trcDesc:
      "办理公司与个人税务居民身份。",
    viewTax: "查看税率表",
    cTag: "03 / 合规",
    cMain: "法律与会计",
    cdTitle: "合同起草与审阅",
    cdDesc: "定制化商业协议与服务水平协议。",
    bkTitle: "全面账务",
    bkDesc: "多币种核算与国际财务报告准则报表。",
    raTitle: "监管审计",
    raDesc:
      "前瞻性合规体检与风险评估。",
    gTag: "04 / 增长",
    gMain: "并购与公司治理",
    ddTitle: "尽职调查（法律与财务）",
    ddDesc:
      "收购前对标的进行严谨评估。",
    pmTitle: "并购后整合",
    pmDesc:
      "统一公司结构与运营框架。",
    csTitle: "公司秘书",
    csDesc:
      "持续管理法定义务登记与申报。",
    dialogueTitle: "发起沟通",
    dialogueLead:
      "提交咨询以获取资深合伙人的保密初步评估。",
  },
};
export const servicesMessages: Record<Locale, ServicesMessages> = withFallbackLocales(servicesMessagesBase);
