import { withFallbackLocales, type ContentLocale, type Locale } from "@/lib/i18n";

const kzMetaBase: Record<ContentLocale, { title: string; description: string }> = {
  en: {
    title: "Kazakhstan | InterLex",
    description: "AIFC, mainland, and investor-entry advisory for Kazakhstan.",
  },
  ru: {
    title: "Казахстан | InterLex",
    description: "Консалтинг по AIFC, mainland-структурам и инвесторскому входу в Казахстан.",
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
    heroTitle1: "Kazakhstan",
    heroTitle2: "for regional expansion",
    heroLead: "InterLex builds Kazakhstan entry strategies across AIFC, mainland corporate law, industrial zones, tax positioning, and investor-facing structures.",
    adv1Title: "AIFC plus mainland logic",
    adv1Body: "We align the right balance between AIFC instruments, local legal forms, and operational realities in Kazakhstan.",
    adv2Title: "Industrial and tax positioning",
    adv2Body: "We compare special regimes, logistics zones, and structuring options for trade, manufacturing, and technology businesses.",
    adv3Title: "Institutional execution",
    adv3Body: "Registration, reporting, banking, and post-launch compliance are treated as one continuous operating track.",
    coreTitle: "Core services",
    viewAll: "View all services",
    svc1Title: "Registration and structuring",
    svc1Body: "LLP, JSC, branch, and AIFC entity setup with ownership, governance, and document architecture aligned from the start.",
    svc1Cta: "Start setup",
    svc2Title: "Tax and compliance",
    svc2Body: "Tax logic, accounting supervision, transfer pricing support, and ongoing regulatory maintenance for operating groups.",
    svc2Cta: "Request advisory",
    zonesTitle: "Strategic zones and platforms",
    aifcTag: "Financial hub",
    aifcTitle: "AIFC",
    aifcBody: "A distinct legal and regulatory platform for finance, investment, holding structures, and internationally oriented corporate projects.",
    tagFintech: "Fintech",
    tagAsset: "Asset management",
    tagIslamic: "Islamic finance",
    khTitle: "Khorgos Eastern Gate",
    khBody: "A logistics and trade platform for border-linked supply chains, warehousing, and industrial routing.",
    khLink: "Logistics advantages",
    pitTitle: "Park of Innovative Technologies",
    pitBody: "A technology-focused environment for IT, R&D, and innovation-driven operating models.",
    pitLink: "Technology incentives",
  },
  ru: {
    heroTitle1: "Казахстан",
    heroTitle2: "для регионального роста",
    heroLead: "InterLex выстраивает траекторию входа в Казахстан через AIFC, mainland-структуры, индустриальные зоны, налоговую модель и инвесторскую упаковку.",
    adv1Title: "Связка AIFC и mainland",
    adv1Body: "Подбираем правильный баланс между инструментами AIFC, локальными юрформами и операционной реальностью в Казахстане.",
    adv2Title: "Индустриальная и налоговая логика",
    adv2Body: "Сравниваем специальные режимы, логистические зоны и структурирование для торговли, производства и технологических компаний.",
    adv3Title: "Институциональное исполнение",
    adv3Body: "Регистрация, отчётность, банки и постзапусковой комплаенс рассматриваются как единая операционная траектория.",
    coreTitle: "Ключевые услуги",
    viewAll: "Смотреть все услуги",
    svc1Title: "Регистрация и структурирование",
    svc1Body: "Регистрация ТОО, АО, филиалов и субъектов AIFC с заранее выстроенной логикой владения, governance и документации.",
    svc1Cta: "Начать запуск",
    svc2Title: "Налоги и комплаенс",
    svc2Body: "Налоговая модель, бухгалтерский контроль, поддержка по трансфертному ценообразованию и постоянное регуляторное сопровождение.",
    svc2Cta: "Запросить сопровождение",
    zonesTitle: "Стратегические зоны и платформы",
    aifcTag: "Финансовый хаб",
    aifcTitle: "AIFC",
    aifcBody: "Отдельная правовая и регуляторная платформа для финансовых, инвестиционных, холдинговых и международно ориентированных проектов.",
    tagFintech: "Финтех",
    tagAsset: "Управление активами",
    tagIslamic: "Исламские финансы",
    khTitle: "Хоргос Восточные ворота",
    khBody: "Логистическая и торговая платформа для приграничных supply-chain моделей, складской инфраструктуры и индустриальных маршрутов.",
    khLink: "Логистические преимущества",
    pitTitle: "Парк инновационных технологий",
    pitBody: "Технологическая среда для IT, R&D и инновационных операционных моделей.",
    pitLink: "Технологические стимулы",
  },
};

export const kzMessages: Record<Locale, KzMessages> = withFallbackLocales(kzMessagesBase);
