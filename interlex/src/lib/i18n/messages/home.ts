import { withFallbackLocales, type ContentLocale, type Locale } from "@/lib/i18n";

const homeMetaBase: Record<ContentLocale, { title: string; description: string }> = {
  en: {
    title: "InterLex | Cross-Border Advisory",
    description: "Legal and business consulting in Kazakhstan and Georgia.",
  },
  ru: {
    title: "InterLex | Международный консалтинг",
    description: "Юридический и деловой консалтинг в Казахстане и Грузии.",
  },
  zh: {
    title: "InterLex | 跨境咨询",
    description: "哈萨克斯坦与格鲁吉亚的法律与商业咨询。",
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
    heroEyebrow: "Sovereign Advisory",
    heroTitle1: "Two Jurisdictions,",
    heroTitle2: "One Partner.",
    heroLead:
      "Navigating complex corporate structures across Kazakhstan and Georgia. We provide definitive legal, tax, and M&A advisory for cross-border entities.",
    ctaEngage: "Engage Advisory",
    ctaExplore: "Explore Jurisdictions",
    mPractice: "Years of Practice",
    mMa: "M&A Facilitated",
    mEntities: "Corporate Entities",
    mJur: "Key Jurisdictions",
    disciplinesLine1: "Core",
    disciplinesLine2: "Disciplines",
    disciplinesLead:
      "Our practice is strictly focused on high-stakes corporate advisory, ensuring absolute precision in our core markets.",
    d1Title: "Cross-Border Structuring",
    d1Body:
      "Architecting tax-efficient, legally robust corporate entities spanning multiple jurisdictions, specializing in the nuances between Central Asia and the Caucasus.",
    d2Title: "Mergers & Acquisitions",
    d2Body:
      "Full-lifecycle advisory for complex M&A transactions. From rigorous due diligence to definitive agreements and post-merger integration.",
    d3Title: "Regulatory Compliance",
    d3Body:
      "Navigating the distinct regulatory frameworks of the AIFC (Kazakhstan) and Georgian Free Industrial Zones, ensuring absolute operational legality.",
    jurSection: "The Jurisdictions",
    kzCardTitle: "Kazakhstan",
    kzTag: "AIFC Focus",
    kzB1: "English Common Law framework within the AIFC.",
    kzB2: "Unprecedented tax incentives for holding companies.",
    kzB3: "Gateway to Central Asian and Chinese markets.",
    geCardTitle: "Georgia",
    geTag: "Strategic Hub",
    geB1: "Exceptional ease of doing business rankings.",
    geB2: "Territorial tax system and Free Industrial Zones.",
    geB3: "Strategic access to European and Middle Eastern markets.",
    consultTitle: "Request a Consultation",
    consultLead: "Confidential advisory for definitive corporate strategy.",
  },
  ru: {
    heroEyebrow: "Sovereign Advisory",
    heroTitle1: "Две юрисдикции,",
    heroTitle2: "один партнёр.",
    heroLead:
      "Сложные корпоративные структуры в Казахстане и Грузии. Юридический, налоговый и M&A-консалтинг для трансграничных компаний.",
    ctaEngage: "Запросить консультацию",
    ctaExplore: "Смотреть юрисдикции",
    mPractice: "лет практики",
    mMa: "оборот M&A",
    mEntities: "корпоративных структур",
    mJur: "ключевых юрисдикции",
    disciplinesLine1: "Ключевые",
    disciplinesLine2: "направления",
    disciplinesLead:
      "Фокус на высокорисковом корпоративном консалтинге и точности в наших основных рынках.",
    d1Title: "Трансграничное структурирование",
    d1Body:
      "Налогово эффективные и юридически устойчивые структуры в нескольких юрисдикциях — с акцентом на Центральную Азию и Кавказ.",
    d2Title: "Слияния и поглощения",
    d2Body:
      "Сопровождение сложных M&A: due diligence, сделки и интеграция после объединения.",
    d3Title: "Регуляторный комплаенс",
    d3Body:
      "AIFC (Казахстан) и свободные промзоны Грузии — полное соблюдение требований.",
    jurSection: "Юрисдикции",
    kzCardTitle: "Казахстан",
    kzTag: "Фокус AIFC",
    kzB1: "Common law в рамках AIFC.",
    kzB2: "Сильные налоговые стимулы для холдингов.",
    kzB3: "Доступ к рынкам Центральной Азии и Китая.",
    geCardTitle: "Грузия",
    geTag: "Стратегический хаб",
    geB1: "Высокие позиции в рейтингах ведения бизнеса.",
    geB2: "Территориальное налогообложение и СИЗ.",
    geB3: "Доступ к рынкам Европы и Ближнего Востока.",
    consultTitle: "Запросить консультацию",
    consultLead: "Конфиденциальный консалтинг по корпоративной стратегии.",
  },
  zh: {
    heroEyebrow: "主权咨询",
    heroTitle1: "两大司法管辖区，",
    heroTitle2: "同一合作伙伴。",
    heroLead:
      "在哈萨克斯坦与格鲁吉亚驾驭复杂的公司架构。我们为跨境实体提供权威的法律、税务与并购顾问服务。",
    ctaEngage: "预约顾问",
    ctaExplore: "了解司法管辖区",
    mPractice: "年从业经验",
    mMa: "并购撮合规模",
    mEntities: "服务企业实体",
    mJur: "核心司法管辖区",
    disciplinesLine1: "核心",
    disciplinesLine2: "业务领域",
    disciplinesLead:
      "专注高风险企业顾问，并在核心市场保持极高的专业精度。",
    d1Title: "跨境架构设计",
    d1Body:
      "搭建税务高效、法律稳固的多法域架构，深谙中亚与高加索的差异。",
    d2Title: "并购（M&A）",
    d2Body:
      "覆盖复杂并购全周期：尽职调查、交易文件与并购后整合。",
    d3Title: "合规监管",
    d3Body:
      "驾驭 AIFC（哈萨克斯坦）与格鲁吉亚自由工业区等不同监管框架，确保运营合法。",
    jurSection: "司法管辖区",
    kzCardTitle: "哈萨克斯坦",
    kzTag: "AIFC 重点",
    kzB1: "AIFC 内的普通法框架。",
    kzB2: "面向控股公司的强力税收优惠。",
    kzB3: "通往中亚与中国市场的门户。",
    geCardTitle: "格鲁吉亚",
    geTag: "战略枢纽",
    geB1: "营商环境排名领先。",
    geB2: "属地税制与自由工业区。",
    geB3: "连接欧洲与中东市场。",
    consultTitle: "预约咨询",
    consultLead: "保密的战略性公司顾问服务。",
  },
};
export const homeMessages: Record<Locale, HomeMessages> = withFallbackLocales(homeMessagesBase);
