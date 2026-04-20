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
      category: "Foundation",
      title: "Business Registration",
      summary: "Entity setup for foreign founders in Kazakhstan and Georgia, including branches, local companies, and structuring options.",
      forWhom: ["Foreign founders", "Holdings entering a new market", "Regional operating companies"],
      deliverables: ["Entity selection and structuring memo", "Registration support", "Founder and document checklist", "Launch coordination with banking and compliance"],
      process: ["Choose jurisdiction and entity type", "Prepare corporate documents", "Register the company", "Move to banking and post-registration setup"],
    },
    {
      slug: "free-zones",
      category: "Optimization",
      title: "SEZ / FIZ / Special Regimes",
      summary: "Selection and implementation of the right free economic zone or special tax regime for trade, manufacturing, IT, and investment projects.",
      forWhom: ["Export businesses", "IT companies", "Manufacturers"],
      deliverables: ["Zone comparison", "Eligibility review", "Application support", "Tax and compliance roadmap"],
      process: ["Assess business model", "Compare zones and regimes", "Prepare application package", "Secure status and operational setup"],
    },
    {
      slug: "accounting-legal",
      category: "Compliance",
      title: "Accounting & Legal Support",
      summary: "Ongoing bookkeeping, legal maintenance, contracts, reporting, and compliance for cross-border corporate structures.",
      forWhom: ["Operating companies", "Local subsidiaries", "Investor-backed structures"],
      deliverables: ["Monthly accounting support", "Legal retainer", "Contract drafting and review", "Regulatory reporting support"],
      process: ["Audit current structure", "Define support scope", "Onboard records and contracts", "Run monthly service cycle"],
    },
    {
      slug: "corporate-management",
      category: "Governance",
      title: "Corporate Management",
      summary: "Corporate secretarial support, nominee and trusted management structures, and governance administration for foreign-owned companies.",
      forWhom: ["Foreign shareholders", "Holding structures", "Sensitive ownership cases"],
      deliverables: ["Governance model", "Corporate secretarial support", "Director and management structuring", "Compliance monitoring"],
      process: ["Assess ownership model", "Define governance structure", "Implement appointments and controls", "Maintain reporting and compliance"],
    },
    {
      slug: "turnkey-company",
      category: "Operations",
      title: "Company Under Management",
      summary: "Turnkey operational launch support spanning HR, logistics, IT infrastructure, marketing, and sourcing coordination.",
      forWhom: ["New market entrants", "Manufacturing businesses", "Lean foreign teams"],
      deliverables: ["Launch roadmap", "Operational vendor stack", "HR and admin setup", "Ongoing support coordination"],
      process: ["Map operational needs", "Build launch stack", "Coordinate third parties", "Transition to steady operations"],
    },
    {
      slug: "banking-support",
      category: "Operations",
      title: "Banking Support",
      summary: "Bank account opening strategy, KYC preparation, and relationship support for corporate banking across target jurisdictions.",
      forWhom: ["Newly incorporated entities", "International trading businesses", "Holding companies"],
      deliverables: ["Bank selection memo", "KYC pack preparation", "Submission support", "Fallback banking options"],
      process: ["Profile the business", "Select target banks", "Prepare KYC set", "Support review and onboarding"],
    },
    {
      slug: "investor-gr",
      category: "Investment",
      title: "Investor Support & GR",
      summary: "Government relations, investor incentives, residency pathways, and strategic support for large-scale investment projects.",
      forWhom: ["Investors", "Industrial projects", "Strategic entrants"],
      deliverables: ["Incentive assessment", "Government engagement support", "Residency and investment roadmap", "Meeting and negotiation support"],
      process: ["Review project profile", "Select incentive path", "Prepare materials", "Coordinate negotiations and approvals"],
    },
    {
      slug: "ma-advisory",
      category: "Transactions",
      title: "M&A Advisory",
      summary: "Acquisition support for businesses and assets in Kazakhstan, Georgia, and adjacent regional markets.",
      forWhom: ["Strategic buyers", "Funds", "Asset investors"],
      deliverables: ["Target screening", "Deal structuring", "Transaction support", "Post-closing coordination"],
      process: ["Define acquisition mandate", "Screen and qualify targets", "Structure and negotiate", "Support signing and closing"],
    },
    {
      slug: "due-diligence",
      category: "Transactions",
      title: "Due Diligence",
      summary: "Legal, financial, tax, and operational review before investment, acquisition, or strategic partnership.",
      forWhom: ["Acquirers", "Investors", "Joint venture sponsors"],
      deliverables: ["Risk matrix", "Legal review", "Financial and tax review", "Executive summary and recommendations"],
      process: ["Collect documents", "Run legal and financial review", "Map key risks", "Deliver findings and action points"],
    },
  ],
  ru: [
    {
      slug: "business-registration",
      category: "Основание",
      title: "Регистрация бизнеса",
      summary: "Запуск компаний для иностранных учредителей в Казахстане и Грузии: локальные компании, филиалы и структура входа на рынок.",
      forWhom: ["Иностранные учредители", "Холдинги при выходе на рынок", "Операционные компании"],
      deliverables: ["Мемо по выбору структуры", "Сопровождение регистрации", "Чек-лист документов", "Координация запуска с банком и комплаенсом"],
      process: ["Выбор страны и формы", "Подготовка документов", "Регистрация компании", "Переход к банковскому и операционному запуску"],
    },
    {
      slug: "free-zones",
      category: "Оптимизация",
      title: "СЭЗ / СИЗ / спецрежимы",
      summary: "Подбор и внедрение подходящей СЭЗ, СИЗ или специального налогового режима под торговлю, производство, IT и инвестиционные проекты.",
      forWhom: ["Экспортные компании", "IT-бизнес", "Производственные проекты"],
      deliverables: ["Сравнение режимов", "Проверка применимости", "Сопровождение подачи", "Налоговая и комплаенс-карта"],
      process: ["Анализ бизнес-модели", "Сравнение зон и режимов", "Подготовка пакета", "Получение статуса и запуск"],
    },
    {
      slug: "accounting-legal",
      category: "Комплаенс",
      title: "Бухгалтерия и юридическое сопровождение",
      summary: "Постоянное бухгалтерское, договорное и юридическое сопровождение трансграничных корпоративных структур.",
      forWhom: ["Операционные компании", "Дочерние структуры", "Компании с инвесторами"],
      deliverables: ["Ежемесячная бухгалтерия", "Юридический ретейнер", "Договорная работа", "Поддержка отчётности"],
      process: ["Аудит текущей структуры", "Фиксация scope", "Подключение учёта и документов", "Ежемесячный цикл сопровождения"],
    },
    {
      slug: "corporate-management",
      category: "Управление",
      title: "Корпоративный менеджмент",
      summary: "Корпоративный секретариат, nominee/trusted management и сопровождение governance-модели для иностранных владельцев.",
      forWhom: ["Иностранные собственники", "Холдинговые структуры", "Конфиденциальные кейсы"],
      deliverables: ["Governance-модель", "Корпоративный секретариат", "Структурирование директоров и управления", "Контроль комплаенса"],
      process: ["Анализ модели владения", "Проектирование governance", "Назначения и контроль", "Поддержание отчётности"],
    },
    {
      slug: "turnkey-company",
      category: "Операции",
      title: "Компания под ключ",
      summary: "Операционный запуск бизнеса под ключ: HR, логистика, IT-инфраструктура, маркетинг и координация подрядчиков.",
      forWhom: ["Новые игроки рынка", "Производственные компании", "Иностранные команды без локального офиса"],
      deliverables: ["Карта запуска", "Операционный стек подрядчиков", "Настройка HR и админ-функций", "Координация сопровождения"],
      process: ["Определение операционных задач", "Сборка launch stack", "Координация подрядчиков", "Выход в штатный режим"],
    },
    {
      slug: "banking-support",
      category: "Операции",
      title: "Банковское сопровождение",
      summary: "Стратегия открытия счетов, подготовка KYC-пакета и сопровождение корпоративного банкинга в целевых юрисдикциях.",
      forWhom: ["Новые компании", "Торговые структуры", "Холдинги"],
      deliverables: ["Подбор банков", "Подготовка KYC", "Сопровождение подачи", "Резервные банковские сценарии"],
      process: ["Профилирование бизнеса", "Выбор банков", "Подготовка KYC", "Сопровождение рассмотрения"],
    },
    {
      slug: "investor-gr",
      category: "Инвестиции",
      title: "Инвесторам и GR",
      summary: "GR-сопровождение, инвестпреференции, резидентство и стратегическая поддержка крупных инвестиционных проектов.",
      forWhom: ["Инвесторы", "Промышленные проекты", "Стратегические входы на рынок"],
      deliverables: ["Оценка льгот и преференций", "Поддержка переговоров", "Дорожная карта по резидентству", "Подготовка встреч и материалов"],
      process: ["Анализ проекта", "Выбор программы", "Подготовка материалов", "Координация переговоров и согласований"],
    },
    {
      slug: "ma-advisory",
      category: "Сделки",
      title: "M&A консультирование",
      summary: "Сопровождение покупки бизнеса и активов в Казахстане, Грузии и соседних рынках.",
      forWhom: ["Стратегические покупатели", "Фонды", "Инвесторы в активы"],
      deliverables: ["Поиск и фильтрация целей", "Структурирование сделки", "Сопровождение транзакции", "Поддержка после закрытия"],
      process: ["Формирование мандата", "Отбор целей", "Структурирование и переговоры", "Подписание и закрытие"],
    },
    {
      slug: "due-diligence",
      category: "Сделки",
      title: "Due Diligence",
      summary: "Юридическая, финансовая, налоговая и операционная проверка перед инвестициями, покупкой или партнёрством.",
      forWhom: ["Покупатели", "Инвесторы", "Партнёры по JV"],
      deliverables: ["Карта рисков", "Юридический обзор", "Финансово-налоговый обзор", "Executive summary и рекомендации"],
      process: ["Сбор документов", "Юридическая и финансовая проверка", "Карта ключевых рисков", "Итоговые выводы и рекомендации"],
    },
  ],
  zh: [
    {
      slug: "business-registration",
      category: "基础服务",
      title: "公司注册",
      summary: "为外国创始人在哈萨克斯坦和格鲁吉亚落地公司，包括本地实体、分支机构与进入结构设计。",
      forWhom: ["外国创始人", "进入新市场的控股公司", "区域运营公司"],
      deliverables: ["结构选择备忘录", "注册支持", "文件清单", "与银行及合规环节联动"],
      process: ["选择国家与主体类型", "准备公司文件", "完成注册", "进入银行与后续运营设置"],
    },
    {
      slug: "free-zones",
      category: "优化",
      title: "经济特区 / 工业区 / 特殊税制",
      summary: "为贸易、制造、IT 与投资项目选择并落地适合的特区和特殊税制。",
      forWhom: ["出口企业", "IT 公司", "制造项目"],
      deliverables: ["制度对比", "资格评估", "申请支持", "税务与合规路线图"],
      process: ["分析商业模式", "比较制度", "准备申请", "取得资格并启动运营"],
    },
    {
      slug: "accounting-legal",
      category: "合规",
      title: "会计与法律支持",
      summary: "为跨境公司结构提供持续的账务、合同、法律与合规支持。",
      forWhom: ["运营公司", "本地子公司", "投资支持结构"],
      deliverables: ["月度会计支持", "法律顾问服务", "合同起草与审阅", "监管申报支持"],
      process: ["审阅现有结构", "确定服务范围", "接入账务和合同", "执行月度支持循环"],
    },
    {
      slug: "corporate-management",
      category: "治理",
      title: "公司治理管理",
      summary: "面向外国股东的公司秘书、治理结构与 nominee / trusted 管理安排。",
      forWhom: ["外国股东", "控股结构", "敏感持股场景"],
      deliverables: ["治理模型", "公司秘书支持", "董事与管理安排", "持续合规跟踪"],
      process: ["评估持股模式", "设计治理结构", "执行任命与控制", "维持报告与合规"],
    },
    {
      slug: "turnkey-company",
      category: "运营",
      title: "公司落地一站式管理",
      summary: "覆盖 HR、物流、IT 基础设施、市场与供应协调的企业启动支持。",
      forWhom: ["新进入市场的企业", "制造公司", "精简的外国团队"],
      deliverables: ["落地路线图", "运营服务商体系", "HR 与行政设置", "持续协调支持"],
      process: ["梳理运营需求", "搭建启动堆栈", "协调第三方", "过渡到稳定运营"],
    },
    {
      slug: "banking-support",
      category: "运营",
      title: "银行开户支持",
      summary: "公司账户开立策略、KYC 材料准备与目标法域银行关系支持。",
      forWhom: ["新设公司", "国际贸易企业", "控股公司"],
      deliverables: ["银行选择建议", "KYC 材料包", "提交协助", "备选银行路径"],
      process: ["业务画像", "选择目标银行", "准备 KYC", "跟进审核与开户"],
    },
    {
      slug: "investor-gr",
      category: "投资",
      title: "投资者支持与政府关系",
      summary: "面向大型投资项目的政府关系、优惠政策、居留路径和战略支持。",
      forWhom: ["投资者", "工业项目", "战略进入者"],
      deliverables: ["优惠评估", "政府沟通支持", "居留与投资路线图", "会议与谈判支持"],
      process: ["审阅项目画像", "选择激励路径", "准备材料", "推进审批和谈判"],
    },
    {
      slug: "ma-advisory",
      category: "交易",
      title: "并购顾问",
      summary: "支持在哈萨克斯坦、格鲁吉亚及周边区域市场收购企业和资产。",
      forWhom: ["战略买方", "基金", "资产投资者"],
      deliverables: ["目标筛选", "交易结构设计", "交易支持", "交割后协调"],
      process: ["定义收购授权", "筛选目标", "结构与谈判", "支持签约交割"],
    },
    {
      slug: "due-diligence",
      category: "交易",
      title: "尽职调查",
      summary: "在投资、收购或战略合作前进行法律、财务、税务与运营审阅。",
      forWhom: ["收购方", "投资者", "合资发起方"],
      deliverables: ["风险矩阵", "法律审阅", "财务与税务审阅", "管理摘要与建议"],
      process: ["收集文件", "开展法律与财务审阅", "识别关键风险", "交付结论与行动建议"],
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
