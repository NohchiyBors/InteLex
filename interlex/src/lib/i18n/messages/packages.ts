import { withFallbackLocales, type ContentLocale, type Locale } from "@/lib/i18n";

const packagesMetaBase: Record<ContentLocale, { title: string; description: string }> = {
  en: {
    title: "Packages & Pricing | InterLex",
    description:
      "Transparent, tiered advisory structures for cross-border entities.",
  },
  ru: {
    title: "Пакеты и цены | InterLex",
    description:
      "Прозрачные ступенчатые модели консалтинга для трансграничных структур.",
  },
  zh: {
    title: "套餐与定价 | InterLex",
    description: "面向跨境实体的透明分层顾问结构。",
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
    heroTitle1: "Sovereign Value,",
    heroTitle2: "Clear Investment.",
    heroLead:
      "Transparent, tiered advisory structures designed for cross-border entities, high-net-worth individuals, and sovereign wealth funds navigating complex jurisdictions.",
    heroCta: "Request Custom Proposal",
    imgAlt: "Architectural structure",
    t1Name: "Retained Counsel",
    t1Desc:
      "For ongoing compliance and operational legal guidance in stable jurisdictions.",
    t1Price: "Starting at €5k",
    t1Period: "/ month",
    t1f1: "Dedicated Associate Counsel",
    t1f2: "Monthly compliance audit (Single Jurisdiction)",
    t1f3: "Standard contract review (Up to 20/mo)",
    t1f4: "48-hour SLA on standard inquiries",
    selectTier: "Select Tier",
    mostSelected: "Most Selected",
    t2Name: "Cross-Border Advisory",
    t2Desc:
      "Comprehensive structuring and risk management across multiple international borders.",
    t2Price: "Starting at €15k",
    t2Period: "/ month",
    t2f1: "Senior Partner Led Advisory Team",
    t2f2: "Multi-jurisdictional tax optimization",
    t2f3: "M&A Due Diligence (Up to 2 projects/yr)",
    t2f4: "Priority 12-hour SLA",
    t2f5: "Quarterly strategic board presence",
    t3Name: "Sovereign Asset Protection",
    t3Desc:
      "Bespoke architecture for high-net-worth families and sovereign wealth entities.",
    t3Price: "Custom",
    t3Period: "Engagement",
    t3f1: "Managing Partner Direct Access",
    t3f2: "Global Trust & Foundation Structuring",
    t3f3: "Crisis Management & Dispute Resolution",
    t3f4: "Immediate 24/7 SLA",
    t3f5: "Geopolitical risk assessment",
    contactMP: "Contact Managing Partner",
    tableTitle: "Ledger of Services",
    thScope: "Service Scope",
    thT1: "Retained Counsel",
    thT2: "Cross-Border",
    thT3: "Sovereign Asset",
    r1h: "Jurisdictional Coverage",
    r1a: "Single Territory",
    r1b: "Multi-Territory (Up to 3)",
    r1c: "Global Scope",
    r2h: "Lead Counsel Level",
    r2a: "Associate",
    r2b: "Senior Partner",
    r2c: "Managing Partner",
    r3h: "Tax Optimization Strategy",
    r4h: "M&A Due Diligence",
    r4a: "Billed Hourly",
    r4b: "Included (2/yr)",
    r4c: "Unlimited within scope",
    r5h: "Geopolitical Risk Assessment",
    r5a: "—",
    r5b: "Annual Review",
    r5c: "Continuous Monitoring",
    maLabel: "Specialized Retainers",
    maTitle: "Navigating M&A with Precision",
    maLead:
      "For entities engaging in aggressive acquisition strategies, our specialized M&A advisory can be bolted onto any existing tier, providing dedicated 'war-room' counsel during critical transaction windows.",
    maLink: "Explore M&A Advisory",
    maC1Title: "Regulatory Clearance",
    maC1Body:
      "Pre-emptive antitrust analysis and regulatory filing management across targeted jurisdictions.",
    maC2Title: "Hostile Defense",
    maC2Body:
      "Rapid deployment of structural defenses and shareholder communication strategies during unsolicited approaches.",
    faqTitle: "Inquiries on Structure",
    faq1q: "How are out-of-scope services billed on a retainer?",
    faq1a:
      "Services falling outside the defined parameters of your selected tier are billed at a preferential hourly rate, negotiated at the inception of the retainer. You will receive a detailed estimate prior to commencement of any out-of-scope work.",
    faq2q: "Can we upgrade our tier mid-cycle?",
    faq2a:
      "Yes. We recognize that business needs escalate rapidly, particularly during restructuring or acquisition phases. Tiers can be upgraded immediately, with billing prorated for the remainder of the current cycle.",
    faq3q: "What constitutes a 'jurisdiction' in the pricing model?",
    faq3a:
      "A jurisdiction refers to a distinct legal and regulatory environment (e.g., Delaware (US), the United Kingdom, or Singapore). InterLex maintains deep expertise in primary financial centers globally.",
    bottomTitle: "Initiate Consultation",
    bottomLead:
      "Discuss your entity's specific legal architecture requirements with a senior partner to determine the most effective advisory structure.",
    bottomBtn: "Schedule Confidential Briefing",
  },
  ru: {
    heroTitle1: "Суверенная ценность,",
    heroTitle2: "ясные инвестиции.",
    heroLead:
      "Прозрачные ступенчатые модели для трансграничных компаний, состоятельных клиентов и суверенных фондов в сложных юрисдикциях.",
    heroCta: "Запросить предложение",
    imgAlt: "Архитектурная композиция",
    t1Name: "Retained Counsel",
    t1Desc:
      "Постоянное сопровождение по комплаенсу и операционному праву в стабильных юрисдикциях.",
    t1Price: "от €5k",
    t1Period: "/ месяц",
    t1f1: "Выделенный ассоциированный юрист",
    t1f2: "Ежемесячный комплаенс-аудит (одна юрисдикция)",
    t1f3: "Стандартный договорный review (до 20/мес)",
    t1f4: "SLA 48 часов по стандартным запросам",
    selectTier: "Выбрать тариф",
    mostSelected: "Чаще выбирают",
    t2Name: "Cross-Border Advisory",
    t2Desc:
      "Структурирование и управление рисками на нескольких границах.",
    t2Price: "от €15k",
    t2Period: "/ месяц",
    t2f1: "Команда под руководством старшего партнёра",
    t2f2: "Мультиджур. налоговая оптимизация",
    t2f3: "M&A due diligence (до 2 проектов/год)",
    t2f4: "Приоритетный SLA 12 часов",
    t2f5: "Квартальное участие стратегического совета",
    t3Name: "Sovereign Asset Protection",
    t3Desc:
      "Индивидуальная архитектура для семей и суверенных структур.",
    t3Price: "Индивидуально",
    t3Period: "контракт",
    t3f1: "Прямой доступ к управляющему партнёру",
    t3f2: "Трасты и фонды — глобально",
    t3f3: "Кризис-менеджмент и споры",
    t3f4: "SLA 24/7",
    t3f5: "Оценка геополитических рисков",
    contactMP: "Связаться с управляющим партнёром",
    tableTitle: "Реестр услуг",
    thScope: "Объём",
    thT1: "Retained Counsel",
    thT2: "Cross-Border",
    thT3: "Sovereign Asset",
    r1h: "Охват юрисдикций",
    r1a: "Одна территория",
    r1b: "Несколько (до 3)",
    r1c: "Глобально",
    r2h: "Уровень ведущего юриста",
    r2a: "Ассоциированный",
    r2b: "Старший партнёр",
    r2c: "Управляющий партнёр",
    r3h: "Налоговая оптимизация",
    r4h: "M&A Due Diligence",
    r4a: "Почасовая оплата",
    r4b: "Включено (2/год)",
    r4c: "Без лимита в рамках scope",
    r5h: "Геополитический риск",
    r5a: "—",
    r5b: "Ежегодный обзор",
    r5c: "Непрерывный мониторинг",
    maLabel: "Специализированные ретейнеры",
    maTitle: "M&A с точностью",
    maLead:
      "Специализированный M&A-консалтинг можно добавить к любому тарифу — «комната войны» в критические окна сделок.",
    maLink: "M&A консалтинг",
    maC1Title: "Регуляторные клиренсы",
    maC1Body:
      "Антимонопольный анализ и подача заявок в целевых юрисдикциях.",
    maC2Title: "Защита от недружественного поглощения",
    maC2Body:
      "Быстрое развёртывание структурной защиты и коммуникаций с акционерами.",
    faqTitle: "Вопросы по структуре",
    faq1q: "Как оплачиваются услуги вне пакета?",
    faq1a:
      "Работа вне рамок тарифа — по льготной почасовой ставке, согласованной при старте ретейнера. Перед началом — детальная оценка.",
    faq2q: "Можно ли повысить тариф в середине цикла?",
    faq2a:
      "Да. Тариф можно повысить немедленно; оплата пересчитывается пропорционально оставшемуся периоду.",
    faq3q: "Что считается «юрисдикцией» в модели цены?",
    faq3a:
      "Отдельная правовая и регуляторная среда (например, Делавэр, Великобритания, Сингапур). У InterLex глубокая экспертиза в ключевых финансовых центрах.",
    bottomTitle: "Начать консультацию",
    bottomLead:
      "Обсудите требования к юридической архитектуре со старшим партнёром.",
    bottomBtn: "Запланировать брифинг",
  },
  zh: {
    heroTitle1: "主权级价值，",
    heroTitle2: "清晰投入。",
    heroLead:
      "为跨境实体、高净值客户与主权基金设计的透明分层顾问结构，面向复杂司法环境。",
    heroCta: "获取定制方案",
    imgAlt: "建筑结构意象",
    t1Name: "常年法律顾问",
    t1Desc:
      "在稳定法域提供持续的合规与运营法律支持。",
    t1Price: "低至 €5k",
    t1Period: "/ 月",
    t1f1: "专属协办律师",
    t1f2: "月度合规审计（单一法域）",
    t1f3: "标准合同审阅（每月至多 20 份）",
    t1f4: "常规咨询 48 小时 SLA",
    selectTier: "选择档位",
    mostSelected: "最受欢迎",
    t2Name: "跨境顾问",
    t2Desc:
      "跨多国边境的综合架构与风险管理。",
    t2Price: "低至 €15k",
    t2Period: "/ 月",
    t2f1: "资深合伙人领衔团队",
    t2f2: "多法域税务优化",
    t2f3: "并购尽职调查（每年至多 2 个项目）",
    t2f4: "优先 12 小时 SLA",
    t2f5: "季度战略董事会参与",
    t3Name: "主权级资产保护",
    t3Desc:
      "为高净值家族与主权财富实体量身定制的架构。",
    t3Price: "定制",
    t3Period: "合作",
    t3f1: "管理合伙人直达通道",
    t3f2: "全球信托与基金会结构",
    t3f3: "危机管理与争议解决",
    t3f4: "7×24 即时 SLA",
    t3f5: "地缘政治风险评估",
    contactMP: "联系管理合伙人",
    tableTitle: "服务对照表",
    thScope: "服务范围",
    thT1: "常年顾问",
    thT2: "跨境",
    thT3: "主权资产",
    r1h: "法域覆盖",
    r1a: "单一领土",
    r1b: "多地（至多 3 个）",
    r1c: "全球范围",
    r2h: "牵头律师层级",
    r2a: "协办",
    r2b: "资深合伙人",
    r2c: "管理合伙人",
    r3h: "税务优化策略",
    r4h: "并购尽职调查",
    r4a: "按小时计费",
    r4b: "包含（每年 2 次）",
    r4c: "范围内不限",
    r5h: "地缘政治风险评估",
    r5a: "—",
    r5b: "年度复盘",
    r5c: "持续监测",
    maLabel: "专项顾问包",
    maTitle: "精准驾驭并购",
    maLead:
      "对积极收购策略的主体，可将专项并购顾问叠加到任一档位，在关键交易窗口提供「作战室」级支持。",
    maLink: "了解并购顾问",
    maC1Title: "监管报批",
    maC1Body:
      "反垄断预判与跨目标司法管辖区的申报管理。",
    maC2Title: "敌意收购防御",
    maC2Body:
      "在被动要约情境下快速部署结构性防线与股东沟通策略。",
    faqTitle: "结构相关问题",
    faq1q: "套餐外服务如何计费？",
    faq1a:
      "超出档位定义范围的服务按签约时约定的优惠小时费率计费；任何套餐外工作在开始前都会提供明细估算。",
    faq2q: "周期中途可以升级档位吗？",
    faq2a:
      "可以。业务需求常在重组或并购阶段快速上升；档位可即时升级，并按剩余周期比例计费。",
    faq3q: "定价模型中的「司法管辖区」指什么？",
    faq3a:
      "指彼此独立的法律与监管环境（例如美国特拉华、英国或新加坡）。InterLex在全球主要金融中心具备深厚经验。",
    bottomTitle: "发起咨询",
    bottomLead:
      "与资深合伙人讨论贵司的法律架构需求，确定最有效的顾问组合。",
    bottomBtn: "预约保密简报",
  },
};
export const packagesMessages: Record<Locale, PackagesMessages> = withFallbackLocales(packagesMessagesBase);
