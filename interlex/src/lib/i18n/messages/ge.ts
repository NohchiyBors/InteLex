import { withFallbackLocales, type ContentLocale, type Locale } from "@/lib/i18n";

const geMetaBase: Record<ContentLocale, { title: string; description: string }> = {
  en: {
    title: "Georgia | InterLex",
    description: "Corporate, FIZ, and market-entry advisory for Georgia.",
  },
  ru: {
    title: "Грузия | InterLex",
    description: "Корпоративный, FIZ- и market-entry консалтинг по Грузии.",
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
    heroTitle1: "Georgia",
    heroTitle2: "as an operating base",
    heroLead: "InterLex structures Georgian companies, FIZ setups, investor vehicles, and operating models for regional trade, services, and production businesses.",
    heroCta: "Request consultation",
    stratTitle: "Why Georgia",
    stratLead: "A practical jurisdiction for corporate entry, tax planning, trade routing, and investor-friendly operating structures.",
    ad1Title: "Territorial taxation",
    ad1Body: "A workable tax model for retained earnings, operational efficiency, and controlled distributions.",
    ad2Title: "Trade connectivity",
    ad2Body: "Georgia links the Caucasus, Europe, Türkiye, and wider Eurasian routes through logistics and treaty access.",
    ad3Title: "Fast execution",
    ad3Body: "Entity registration, FIZ assessment, and operational launch can move quickly with the right paperwork and banking path.",
    coreTitle: "Core",
    coreSubtitle: "capabilities",
    cap1Title: "Company formation and structuring",
    cap1Body: "We register companies, branches, SPVs, and holding structures aligned with ownership, tax, and operational goals.",
    cap2Title: "FIZ and special regimes",
    cap2Body: "We compare Free Industrial Zones and related incentives for trade, manufacturing, and export-oriented models.",
    cap3Title: "Banking and compliance support",
    cap3Body: "We coordinate KYC packs, banking logic, corporate maintenance, and local reporting continuity.",
    fizTitle: "Free Industrial Zones",
    fizLead: "A jurisdictional layer for trade, production, logistics, and tax-efficient operating models in Georgia.",
    fizLink: "View services",
    potiTitle: "Poti FIZ",
    potiTag: "Port and logistics",
    potiBody: "Strong for trade, warehousing, processing, and supply-chain models linked to maritime routes.",
    tbilisiTitle: "Tbilisi FIZ",
    tbilisiTag: "Capital proximity",
    tbilisiBody: "Relevant for urban access, services, light production, and teams that need fast coordination with the capital.",
    hualingTitle: "Hualing FIZ",
    hualingTag: "Commercial hub",
    hualingBody: "Suitable for mixed trade and processing models with established infrastructure and city connectivity.",
    kutaisiTitle: "Kutaisi FIZ",
    kutaisiTag: "Industrial potential",
    kutaisiBody: "Useful for production and regional distribution models that need scale, land, and route flexibility.",
  },
  ru: {
    heroTitle1: "Грузия",
    heroTitle2: "как операционная база",
    heroLead: "InterLex выстраивает грузинские компании, FIZ-структуры, инвесторские SPV и операционные модели для торговли, сервисного бизнеса и производства.",
    heroCta: "Запросить консультацию",
    stratTitle: "Почему Грузия",
    stratLead: "Практичная юрисдикция для корпоративного входа, налогового планирования, торговых маршрутов и инвесторских структур.",
    ad1Title: "Территориальная налоговая логика",
    ad1Body: "Рабочая модель для нераспределённой прибыли, операционной эффективности и управляемых дивидендов.",
    ad2Title: "Торговая связность",
    ad2Body: "Грузия связывает Кавказ, Европу, Турцию и более широкие евразийские маршруты через логистику и договорную сеть.",
    ad3Title: "Быстрое исполнение",
    ad3Body: "Регистрация компании, оценка FIZ и запуск операций могут идти быстро при правильном пакете документов и банковской траектории.",
    coreTitle: "Ключевые",
    coreSubtitle: "компетенции",
    cap1Title: "Регистрация и структурирование",
    cap1Body: "Регистрируем компании, филиалы, SPV и холдинговые конфигурации под задачи владения, налогов и операционной модели.",
    cap2Title: "FIZ и специальные режимы",
    cap2Body: "Сравниваем свободные индустриальные зоны и смежные льготы для торговли, производства и экспортных моделей.",
    cap3Title: "Банковский и комплаенс-контур",
    cap3Body: "Координируем KYC, банковскую логику, корпоративное сопровождение и локальную отчётность.",
    fizTitle: "Свободные индустриальные зоны",
    fizLead: "Отдельный слой юрисдикционной логики для торговли, производства, логистики и налогово-эффективной операционной модели в Грузии.",
    fizLink: "Перейти к услугам",
    potiTitle: "Poti FIZ",
    potiTag: "Порт и логистика",
    potiBody: "Подходит для торговли, складской логистики, переработки и supply-chain моделей, связанных с морскими маршрутами.",
    tbilisiTitle: "Tbilisi FIZ",
    tbilisiTag: "Близость к столице",
    tbilisiBody: "Актуальна для сервисных компаний, лёгкого производства и команд, которым нужна быстрая координация с Тбилиси.",
    hualingTitle: "Hualing FIZ",
    hualingTag: "Коммерческий хаб",
    hualingBody: "Подходит для смешанных торгово-производственных моделей с готовой инфраструктурой и связностью с городом.",
    kutaisiTitle: "Kutaisi FIZ",
    kutaisiTag: "Индустриальный потенциал",
    kutaisiBody: "Полезна для производственных и распределительных моделей, которым нужна масштабируемость, земля и гибкая маршрутная логика.",
  },
};

export const geMessages: Record<Locale, GeMessages> = withFallbackLocales(geMessagesBase);
