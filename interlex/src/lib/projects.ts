import { resolveContentLocale, type ContentLocale, type Locale } from "@/lib/i18n";

export type ProjectEntry = {
  slug: string;
  tag: string;
  title: string;
  summary: string;
  services: string[];
  outcome: string;
};

const projectsBase: Record<ContentLocale, ProjectEntry[]> = {
  en: [
    {
      slug: "industrial-entry-kazakhstan",
      tag: "Kazakhstan / Industrial entry",
      title: "Manufacturing group launch with jurisdiction and operating model design",
      summary:
        "Representative project for a foreign industrial investor entering Kazakhstan through a mainland operating company, banking setup, and zone-screening workstream.",
      services: ["Business Registration", "Special Regimes and Zones", "Banking Support"],
      outcome: "Launch-ready structure with an aligned registration, banking, and compliance roadmap.",
    },
    {
      slug: "georgia-trade-platform",
      tag: "Georgia / Trade platform",
      title: "Trading structure with Free Industrial Zone assessment",
      summary:
        "Representative project for a regional trading business comparing Georgian company setup, FIZ eligibility, banking logic, and tax positioning before launch.",
      services: ["Business Registration", "Special Regimes and Zones", "Accounting and Legal Support"],
      outcome: "Commercial model narrowed to the right zone and post-registration support track.",
    },
    {
      slug: "cross-border-holding",
      tag: "Cross-border / Holding",
      title: "Holding and governance model for foreign-owned group",
      summary:
        "Representative project for a shareholder group needing entity architecture, governance roles, and ongoing legal maintenance across Kazakhstan and Georgia.",
      services: ["Corporate Management", "Accounting and Legal Support", "Banking Support"],
      outcome: "Single governance framework tied to operating entities and recurring compliance control.",
    },
    {
      slug: "investment-transaction",
      tag: "Transactions / Investment",
      title: "Acquisition screening, due diligence, and investor negotiation support",
      summary:
        "Representative project for an investor assessing a regional target through legal, tax, and operational review before commercial negotiations and structuring.",
      services: ["M&A Advisory", "Due Diligence", "Investor Support and GR"],
      outcome: "Risk map, negotiation posture, and transaction path prepared before commitment.",
    },
  ],
  ru: [
    {
      slug: "industrial-entry-kazakhstan",
      tag: "Казахстан / Промышленный вход",
      title: "Запуск производственной группы с проектированием юрисдикции и операционной модели",
      summary:
        "Типовой проект для иностранного промышленного инвестора, который входил в Казахстан через локальную операционную компанию, банковскую настройку и трек по подбору специального режима.",
      services: ["Регистрация бизнеса", "Специальные режимы и зоны", "Банковское сопровождение"],
      outcome: "Готовая к запуску структура с согласованной дорожной картой регистрации, банка и комплаенса.",
    },
    {
      slug: "georgia-trade-platform",
      tag: "Грузия / Торговая платформа",
      title: "Торговая структура с оценкой Free Industrial Zone",
      summary:
        "Типовой проект для регионального торгового бизнеса, где сравнивались регистрация компании в Грузии, применимость FIZ, банковская логика и налоговая модель до запуска.",
      services: ["Регистрация бизнеса", "Специальные режимы и зоны", "Бухгалтерия и юридическая поддержка"],
      outcome: "Коммерческая модель сведена к подходящей зоне и понятному треку пострегистрационного сопровождения.",
    },
    {
      slug: "cross-border-holding",
      tag: "Трансгранично / Холдинг",
      title: "Холдинговая и governance-модель для группы с иностранным владением",
      summary:
        "Типовой проект для группы акционеров, которой нужна была архитектура владения, распределение governance-ролей и постоянная юридическая поддержка между Казахстаном и Грузией.",
      services: ["Корпоративный менеджмент", "Бухгалтерия и юридическая поддержка", "Банковское сопровождение"],
      outcome: "Единый governance-контур, привязанный к операционным компаниям и регулярному контролю комплаенса.",
    },
    {
      slug: "investment-transaction",
      tag: "Сделки / Инвестиции",
      title: "Скрининг актива, due diligence и переговорная поддержка инвестора",
      summary:
        "Типовой проект для инвестора, который оценивал региональный актив через юридическую, налоговую и операционную проверку перед переговорами и структурированием сделки.",
      services: ["M&A-консультирование", "Due diligence", "Инвесторская поддержка и GR"],
      outcome: "Подготовлены карта рисков, переговорная позиция и траектория сделки до принятия обязательств.",
    },
  ],
};

export type ProjectScenario = {
  title: string;
  body: string;
  href: string;
};

const scenariosBase: Record<ContentLocale, ProjectScenario[]> = {
  en: [
    {
      title: "Enter Kazakhstan or Georgia",
      body: "Start from the jurisdiction and let InterLex map registration, banking, and compliance from day one.",
      href: "/services/business-registration",
    },
    {
      title: "Choose a special regime",
      body: "Compare AIFC, SEZ, FIZ, and adjacent incentive paths before building the legal and tax model.",
      href: "/services/free-zones",
    },
    {
      title: "Stabilise recurring operations",
      body: "Move from launch into accounting, legal maintenance, corporate governance, and banking continuity.",
      href: "/services/accounting-legal",
    },
    {
      title: "Prepare for investment or acquisition",
      body: "Use due diligence, deal support, and investor-facing structuring when the project moves into transactions.",
      href: "/services/due-diligence",
    },
  ],
  ru: [
    {
      title: "Войти в Казахстан или Грузию",
      body: "Стартуйте от юрисдикции, а InterLex выстроит регистрацию, банковский трек и комплаенс с первого дня.",
      href: "/services/business-registration",
    },
    {
      title: "Выбрать специальный режим",
      body: "Сравните AIFC, СЭЗ, FIZ и смежные льготные сценарии до сборки правовой и налоговой модели.",
      href: "/services/free-zones",
    },
    {
      title: "Стабилизировать операционную работу",
      body: "Перейдите от запуска к бухгалтерии, юридическому сопровождению, governance и банковской устойчивости.",
      href: "/services/accounting-legal",
    },
    {
      title: "Подготовить инвестицию или сделку",
      body: "Подключите due diligence, поддержку сделки и investor-facing структурирование, когда проект переходит в транзакционный этап.",
      href: "/services/due-diligence",
    },
  ],
};

export function getProjects(locale: Locale): ProjectEntry[] {
  return projectsBase[resolveContentLocale(locale)];
}

export function getProjectScenarios(locale: Locale): ProjectScenario[] {
  return scenariosBase[resolveContentLocale(locale)];
}

export type InvestmentProjectEntry = {
  country: "kz" | "ge";
  tag: string;
  title: string;
  summary: string;
  tracks: string[];
  outcome: string;
};

const investmentProjectsBase: Record<ContentLocale, InvestmentProjectEntry[]> = {
  en: [
    {
      country: "kz",
      tag: "Kazakhstan / Investor entry",
      title: "Industrial investment project with incentives, GR, and residency path",
      summary:
        "Representative Kazakhstan track for foreign investors evaluating incentives, government engagement, local presence, and investor-related residency or management structuring.",
      tracks: ["Investment preferences", "GR support", "Residency and investor structuring"],
      outcome: "A country-entry model aligned with incentives, approval sequence, and operating setup.",
    },
    {
      country: "kz",
      tag: "Kazakhstan / Strategic expansion",
      title: "Manufacturing and logistics project routed through SEZ and institutional support",
      summary:
        "Representative track for investors comparing SEZ eligibility, mainland setup, banking, and negotiation support before committing capital in Kazakhstan.",
      tracks: ["SEZ assessment", "Banking and KYC", "Negotiation support"],
      outcome: "Clear sequence from incentive screening to launch-ready structure and stakeholder map.",
    },
    {
      country: "ge",
      tag: "Georgia / Investor platform",
      title: "Trade and services investment project with FIZ or special-regime comparison",
      summary:
        "Representative Georgia track for investors testing FIZ, company-formation, banking, and operational tax positioning before selecting the right commercial platform.",
      tracks: ["FIZ comparison", "Banking path", "Operating tax model"],
      outcome: "A narrowed market-entry platform with the right structure for investor-backed operations.",
    },
    {
      country: "ge",
      tag: "Georgia / Technology and cross-border setup",
      title: "Cross-border investment structure for digital or export-led operations",
      summary:
        "Representative track for investors using Georgia for international-company logic, service export, and founder or manager relocation scenarios.",
      tracks: ["International company logic", "Relocation and residency", "Cross-border compliance setup"],
      outcome: "A practical Georgian operating base linked to investor, management, and tax requirements.",
    },
  ],
  ru: [
    {
      country: "kz",
      tag: "Казахстан / Investor entry",
      title: "Инвестпроект с преференциями, GR и траекторией резидентства",
      summary:
        "Типовой казахстанский трек для иностранного инвестора, который оценивает преференции, взаимодействие с государством, локальное присутствие и investor-related резидентскую или управленческую модель.",
      tracks: ["Инвестиционные преференции", "GR-сопровождение", "Резидентство и инвестструктурирование"],
      outcome: "Модель входа в страну, согласованная с льготами, последовательностью согласований и операционной настройкой.",
    },
    {
      country: "kz",
      tag: "Казахстан / Стратегическое расширение",
      title: "Производственный или логистический проект через СЭЗ и институциональную поддержку",
      summary:
        "Типовой трек для инвестора, который сравнивает применимость СЭЗ, mainland-структуру, банковскую настройку и переговорную поддержку до фиксации капитального входа в Казахстан.",
      tracks: ["Оценка СЭЗ", "Банковский трек и KYC", "Переговорная поддержка"],
      outcome: "Понятная последовательность от скрининга льгот до launch-ready структуры и карты стейкхолдеров.",
    },
    {
      country: "ge",
      tag: "Грузия / Инвестплатформа",
      title: "Инвестпроект для торговли и сервисных моделей с выбором FIZ или специального режима",
      summary:
        "Типовой грузинский трек для инвестора, который сравнивает FIZ, регистрацию компании, банковскую логику и операционную налоговую модель до выбора коммерческой платформы.",
      tracks: ["Сравнение FIZ", "Банковский маршрут", "Операционная налоговая модель"],
      outcome: "Суженная платформа входа на рынок с подходящей структурой для инвесторской операционной модели.",
    },
    {
      country: "ge",
      tag: "Грузия / Технологический и cross-border setup",
      title: "Трансграничная инвестиционная структура для digital- и export-led моделей",
      summary:
        "Типовой трек для инвесторов, которые используют Грузию под логику international company, экспорт услуг и сценарии релокации собственника или менеджмента.",
      tracks: ["Логика international company", "Релокация и резидентство", "Трансграничный compliance-контур"],
      outcome: "Практичная грузинская операционная база, увязанная с инвесторскими, управленческими и налоговыми требованиями.",
    },
  ],
};

export function getInvestmentProjects(locale: Locale, country: "kz" | "ge"): InvestmentProjectEntry[] {
  return investmentProjectsBase[resolveContentLocale(locale)].filter((entry) => entry.country === country);
}
