import { withFallbackLocales, type ContentLocale, type Locale } from "@/lib/i18n";

const geMetaBase: Record<ContentLocale, { title: string; description: string }> = {
  en: {
    title: "Georgia | InterLex",
    description:
      "European operational standards and Eurasian market access in Georgia.",
  },
  ru: {
    title: "Грузия | InterLex",
    description:
      "Европейские стандарты ведения бизнеса и доступ к евразийским рынкам.",
  },
  zh: {
    title: "格鲁吉亚 | InterLex",
    description: "欧洲运营标准与欧亚市场准入的结合。",
  },
};
export const geMeta: Record<Locale, { title: string; description: string }> = withFallbackLocales(geMetaBase);

export type GeMessages = {
  heroTitle1: string;
  heroTitle2: string;
  heroLead: string;
  heroCta: string;
  stratTitle: string;
  stratLead: string;
  ad1Title: string;
  ad1Body: string;
  ad2Title: string;
  ad2Body: string;
  ad3Title: string;
  ad3Body: string;
  coreTitle: string;
  coreSubtitle: string;
  cap1Title: string;
  cap1Body: string;
  cap2Title: string;
  cap2Body: string;
  cap3Title: string;
  cap3Body: string;
  fizTitle: string;
  fizLead: string;
  fizLink: string;
  potiTitle: string;
  potiTag: string;
  potiBody: string;
  tbilisiTitle: string;
  tbilisiTag: string;
  tbilisiBody: string;
  hualingTitle: string;
  hualingTag: string;
  hualingBody: string;
  kutaisiTitle: string;
  kutaisiTag: string;
  kutaisiBody: string;
};

const geMessagesBase: Record<ContentLocale, GeMessages> = {
  en: {
    heroTitle1: "The Georgia",
    heroTitle2: "Jurisdiction",
    heroLead:
      "A strategic convergence of European operational standards and Eurasian market access. We engineer robust corporate structures within Georgia's low-tax and free industrial frameworks.",
    heroCta: "Initiate Consultation",
    stratTitle: "Strategic Advantages",
    stratLead:
      "Leveraging sovereign incentives for optimized global operations.",
    ad1Title: "Territorial Tax System",
    ad1Body:
      "Corporate tax is only applied upon distribution of dividends. Reinvested profits are exempt, creating an optimal environment for growth and capital accumulation.",
    ad2Title: "Strategic Geography",
    ad2Body:
      "Functioning as a critical nexus point on the Middle Corridor, offering duty-free access to major markets through comprehensive Free Trade Agreements (DCFTA, China, CIS).",
    ad3Title: "Operational Velocity",
    ad3Body:
      "Renowned for minimal bureaucratic friction. Entity incorporation and banking relationships can be established with unprecedented speed and efficiency.",
    coreTitle: "Core",
    coreSubtitle: "Capabilities",
    cap1Title: "Corporate Structuring & Formation",
    cap1Body:
      "Bespoke entity design, balancing liability protection with operational fluidity. We handle complete lifecycle registration across standard and specialized zones.",
    cap2Title: "Free Industrial Zone Licensing",
    cap2Body:
      "Navigation and procurement of FIZ status, unlocking zero percent corporate profit, dividend, and property tax incentives for qualified trading and manufacturing entities.",
    cap3Title: "Regulatory & Banking Navigation",
    cap3Body:
      "Facilitating institutional banking relationships and ensuring rigorous compliance with local AML/KYC directives and international reporting standards.",
    fizTitle: "Free Industrial Zones",
    fizLead:
      "Tax-exempt jurisdictions tailored for international trade, logistics, and manufacturing.",
    fizLink: "View Comparative Matrix",
    potiTitle: "Poti FIZ",
    potiTag: "Maritime Gateway",
    potiBody:
      "Adjacent to the largest seaport in Georgia. Optimal for heavy manufacturing, logistics, and global commodity trading. Offers direct access to rail networks.",
    tbilisiTitle: "Tbilisi FIZ",
    tbilisiTag: "Capital Hub",
    tbilisiBody:
      "Strategic location near the capital city and international airport. Preferred by IT service providers, light manufacturing, and consulting entities requiring urban proximity.",
    hualingTitle: "Hualing FIZ (Kutaisi)",
    hualingTag: "Eurasian Node",
    hualingBody:
      "Extensive infrastructure focused on trade processing and manufacturing. Excellent connectivity to Kutaisi International Airport and major highways.",
    kutaisiTitle: "Kutaisi FIZ",
    kutaisiTag: "Industrial Center",
    kutaisiBody:
      "Built on the grounds of a former automotive plant. Specialized infrastructure suitable for large-scale industrial operations and regional distribution.",
  },
  ru: {
    heroTitle1: "Юрисдикция",
    heroTitle2: "Грузии",
    heroLead:
      "Европейские операционные стандарты и доступ к евразийским рынкам. Надёжные корпоративные структуры в налогово льготных и свободных промышленных режимах.",
    heroCta: "Запросить консультацию",
    stratTitle: "Стратегические преимущества",
    stratLead:
      "Суверенные стимулы для оптимизации глобальных операций.",
    ad1Title: "Территориальное налогообложение",
    ad1Body:
      "Налог на прибыль при распределении дивидендов; реинвестированная прибыль освобождается.",
    ad2Title: "География",
    ad2Body:
      "Узел Срединного коридора; безпошлинный доступ к рынкам через СЗТ (DCFTA, Китай, СНГ).",
    ad3Title: "Скорость запуска",
    ad3Body:
      "Минимум бюрократии; быстрая регистрация компаний и банковские отношения.",
    coreTitle: "Ключевые",
    coreSubtitle: "компетенции",
    cap1Title: "Структурирование и регистрация",
    cap1Body:
      "Индивидуальный дизайн компаний; полный цикл регистрации в стандартных и специальных зонах.",
    cap2Title: "Лицензирование СИЗ",
    cap2Body:
      "Получение статуса СИЗ: налог на прибыль, дивиденды и имущество — 0% для квалифицированных операторов.",
    cap3Title: "Регуляторика и банки",
    cap3Body:
      "Банковские отношения и комплаенс по AML/KYC и международной отчётности.",
    fizTitle: "Свободные промышленные зоны",
    fizLead:
      "Льготные режимы для торговли, логистики и производства.",
    fizLink: "Сравнительная матрица",
    potiTitle: "СИЗ Поти",
    potiTag: "Морские ворота",
    potiBody:
      "У крупнейшего порта Грузии. Тяжёлое производство, логистика, торговля сырьём; ж/д доступ.",
    tbilisiTitle: "СИЗ Тбилиси",
    tbilisiTag: "Столица",
    tbilisiBody:
      "Рядом со столицей и аэропортом; IT, лёгкая промышленность, консалтинг.",
    hualingTitle: "СИЗ Хуалин (Кутаиси)",
    hualingTag: "Евразийский узел",
    hualingBody:
      "Инфраструктура под переработку и производство; связь с аэропортом Кутаиси и трассами.",
    kutaisiTitle: "СИЗ Кутаиси",
    kutaisiTag: "Индустриальный центр",
    kutaisiBody:
      "На базе бывшего автозавода; крупные производство и региональная дистрибуция.",
  },
  zh: {
    heroTitle1: "格鲁吉亚",
    heroTitle2: "司法管辖区",
    heroLead:
      "融合欧洲运营标准与欧亚市场准入。在低税与自由工业区框架内构建稳健的公司架构。",
    heroCta: "发起咨询",
    stratTitle: "战略优势",
    stratLead: "借助主权层面的激励优化全球布局。",
    ad1Title: "属地税制",
    ad1Body:
      "企业所得税仅在分配股息时征收；留存利润再投资免税，利于增长与资本积累。",
    ad2Title: "地缘战略",
    ad2Body:
      "中欧走廊关键节点；依托 DCFTA、中国、独联体等自贸安排进入主要市场。",
    ad3Title: "落地效率",
    ad3Body:
      "官僚摩擦低；公司设立与银行关系建立高效。",
    coreTitle: "核心",
    coreSubtitle: "能力",
    cap1Title: "公司架构与设立",
    cap1Body:
      "量身定制主体设计；标准与特区全流程注册。",
    cap2Title: "自由工业区牌照",
    cap2Body:
      "获取 FIZ 资格，符合条件的贸易与制造企业可享受企业所得税、股息税、房产税等零税率激励。",
    cap3Title: "监管与银行",
    cap3Body:
      "协助建立银行关系并满足 AML/KYC 与国际报告要求。",
    fizTitle: "自由工业区",
    fizLead: "面向国际贸易、物流与制造的免税导向园区。",
    fizLink: "查看对比矩阵",
    potiTitle: "波季 FIZ",
    potiTag: "海运门户",
    potiBody:
      "毗邻格鲁吉亚最大海港；适合重工、物流与大宗商品贸易；衔接铁路网络。",
    tbilisiTitle: "第比利斯 FIZ",
    tbilisiTag: "首都枢纽",
    tbilisiBody:
      "毗邻首都与国际机场；IT、轻工与咨询业态首选。",
    hualingTitle: "华凌 FIZ（库塔伊西）",
    hualingTag: "欧亚节点",
    hualingBody:
      "面向贸易加工与制造的完善基础设施；连接库塔伊西国际机场与主干道。",
    kutaisiTitle: "库塔伊西 FIZ",
    kutaisiTag: "工业中心",
    kutaisiBody:
      "原汽车制造厂旧址；适配大型工业与区域分拨。",
  },
};
export const geMessages: Record<Locale, GeMessages> = withFallbackLocales(geMessagesBase);
