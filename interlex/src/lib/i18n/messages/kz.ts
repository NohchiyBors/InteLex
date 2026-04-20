import { withFallbackLocales, type ContentLocale, type Locale } from "@/lib/i18n";

const kzMetaBase: Record<ContentLocale, { title: string; description: string }> = {
  en: {
    title: "Kazakhstan | InterLex",
    description: "Corporate presence in Central Asia's premier financial hub (AIFC).",
  },
  ru: {
    title: "Казахстан | InterLex",
    description:
      "Корпоративное присутствие в ключевом финансовом хабе Центральной Азии (AIFC).",
  },
  zh: {
    title: "哈萨克斯坦 | InterLex",
    description: "在中亚首要金融中心（AIFC）建立企业布局。",
  },
};
export const kzMeta: Record<Locale, { title: string; description: string }> = withFallbackLocales(kzMetaBase);

export type KzMessages = {
  heroTitle1: string;
  heroTitle2: string;
  heroLead: string;
  adv1Title: string;
  adv1Body: string;
  adv2Title: string;
  adv2Body: string;
  adv3Title: string;
  adv3Body: string;
  coreTitle: string;
  viewAll: string;
  svc1Title: string;
  svc1Body: string;
  svc1Cta: string;
  svc2Title: string;
  svc2Body: string;
  svc2Cta: string;
  zonesTitle: string;
  aifcTag: string;
  aifcTitle: string;
  aifcBody: string;
  tagFintech: string;
  tagAsset: string;
  tagIslamic: string;
  khTitle: string;
  khBody: string;
  khLink: string;
  pitTitle: string;
  pitBody: string;
  pitLink: string;
};

const kzMessagesBase: Record<ContentLocale, KzMessages> = {
  en: {
    heroTitle1: "The Sovereignty",
    heroTitle2: "of the Steppe",
    heroLead:
      "Establishing a corporate presence in Central Asia’s premier financial hub. A jurisdiction defined by progressive legal frameworks, strategic geography, and institutional stability.",
    adv1Title: "Common Law Framework",
    adv1Body:
      "The Astana International Financial Centre (AIFC) operates on a distinct legal framework based on the principles, norms, and precedents of the law of England and Wales.",
    adv2Title: "Tax Optimization",
    adv2Body:
      "Favorable tax regimes including exemptions from corporate income tax, property tax, and land tax for up to 50 years within designated Free Economic Zones and the AIFC.",
    adv3Title: "Strategic Logistics",
    adv3Body:
      "The critical nexus of the Middle Corridor, connecting Chinese manufacturing hubs to European markets, offering unparalleled logistical advantages for trade and transit.",
    coreTitle: "Core Advisory Services",
    viewAll: "View Full Capabilities",
    svc1Title: "Corporate Structuring",
    svc1Body:
      "End-to-end registration of Limited Liability Partnerships (LLPs), Joint Stock Companies, and branches. Navigating local ownership requirements and AIFC entity formation.",
    svc1Cta: "Initiate Incorporation",
    svc2Title: "Tax & Compliance",
    svc2Body:
      "Strategic tax planning, transfer pricing advisory, and ongoing regulatory compliance. Ensuring seamless alignment with the State Revenue Committee and international treaties.",
    svc2Cta: "Request Consultation",
    zonesTitle: "Economic Zones Directory",
    aifcTag: "Financial Hub",
    aifcTitle: "AIFC (Astana International Financial Centre)",
    aifcBody:
      "An independent jurisdiction with its own civil and commercial law. Offers 50-year tax exemptions and a specialized arbitration center.",
    tagFintech: "Fintech",
    tagAsset: "Asset Management",
    tagIslamic: "Islamic Finance",
    khTitle: "Khorgos Eastern Gate",
    khBody:
      "The premier logistics and industrial hub on the Kazakh-Chinese border.",
    khLink: "Explore Logistics Advantages",
    pitTitle: "Park of Innovative Technologies",
    pitBody:
      "Almaty's IT and R&D zone offering targeted incentives for tech enterprises.",
    pitLink: "Review IT Incentives",
  },
  ru: {
    heroTitle1: "Суверенитет",
    heroTitle2: "степи",
    heroLead:
      "Корпоративное присутствие в ведущем финансовом центре Центральной Азии. Юрисдикция с современным правом, выгодной географией и стабильными институтами.",
    adv1Title: "Рамка общего права",
    adv1Body:
      "МФЦА (AIFC) использует правовую модель на основе принципов и прецедентов права Англии и Уэльса.",
    adv2Title: "Налоговая оптимизация",
    adv2Body:
      "Льготные режимы: освобождения от налога на прибыль, имущества и земли до 50 лет в СЭЗ и AIFC.",
    adv3Title: "Стратегическая логистика",
    adv3Body:
      "Узел Срединного коридора между производством в Китае и рынками Европы.",
    coreTitle: "Ключевые услуги",
    viewAll: "Все компетенции",
    svc1Title: "Корпоративное структурирование",
    svc1Body:
      "Регистрация ТОО, АО, филиалов; требования к собственности и создание субъектов AIFC.",
    svc1Cta: "Начать регистрацию",
    svc2Title: "Налоги и комплаенс",
    svc2Body:
      "Налоговое планирование, трансфертное ценообразование и комплаенс с ГНС и международными соглашениями.",
    svc2Cta: "Запросить консультацию",
    zonesTitle: "Каталог экономических зон",
    aifcTag: "Финансовый хаб",
    aifcTitle: "МФЦА (Astana International Financial Centre)",
    aifcBody:
      "Отдельная юрисдикция с собственным гражданским и торговым правом; льготы до 50 лет и арбитраж.",
    tagFintech: "Финтех",
    tagAsset: "Управление активами",
    tagIslamic: "Исламские финансы",
    khTitle: "Хоргос Восточные ворота",
    khBody:
      "Крупнейший логистический и промышленный узел на казахстанско-китайской границе.",
    khLink: "Логистические преимущества",
    pitTitle: "Парк инновационных технологий",
    pitBody:
      "IT и НИОКР в Алматы — целевые стимулы для технологических компаний.",
    pitLink: "IT-льготы",
  },
  zh: {
    heroTitle1: "草原上的",
    heroTitle2: "主权力量",
    heroLead:
      "在中亚领先的金融中心建立企业存在；以现代法律框架、地缘与制度稳定为核心。",
    adv1Title: "普通法体系",
    adv1Body:
      "阿斯塔纳国际金融中心（AIFC）基于英格兰与威尔士法律原则与判例构建独立框架。",
    adv2Title: "税务优化",
    adv2Body:
      "优越税制：指定自由经济区与 AIFC 内企业所得税、房产税、土地税等可最长豁免 50 年。",
    adv3Title: "战略物流",
    adv3Body:
      "中欧走廊关键节点，连接中国制造与欧洲市场，贸易与过境优势突出。",
    coreTitle: "核心顾问服务",
    viewAll: "查看全部能力",
    svc1Title: "公司架构",
    svc1Body:
      "有限责任公司、股份公司与分支机构全流程注册；本地持股与 AIFC 主体设立。",
    svc1Cta: "启动注册",
    svc2Title: "税务与合规",
    svc2Body:
      "税务筹划、转让定价与持续合规；对接国家税务委员会与国际协定。",
    svc2Cta: "预约咨询",
    zonesTitle: "经济特区目录",
    aifcTag: "金融枢纽",
    aifcTitle: "AIFC（阿斯塔纳国际金融中心）",
    aifcBody:
      "独立司法辖区，自带民商法律体系；最长五十年税务豁免及专业仲裁中心。",
    tagFintech: "金融科技",
    tagAsset: "资产管理",
    tagIslamic: "伊斯兰金融",
    khTitle: "霍尔果斯东门",
    khBody: "中哈边境领先的物流与工业枢纽。",
    khLink: "了解物流优势",
    pitTitle: "创新技术园区",
    pitBody: "阿拉木图 IT 与研发特区，面向科技企业提供定向激励。",
    pitLink: "查看 IT 激励",
  },
};
export const kzMessages: Record<Locale, KzMessages> = withFallbackLocales(kzMessagesBase);
