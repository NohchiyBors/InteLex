export type Locale = "en" | "ru" | "zh" | "kk" | "ka";
export type ContentLocale = "en" | "ru";

export const locales: Locale[] = ["ru", "kk", "en", "ka", "zh"];

export const defaultLocale: Locale = "ru";

export function normalizeLocale(raw: string | undefined): Locale {
  if (raw === "en" || raw === "ru" || raw === "zh" || raw === "kk" || raw === "ka") return raw;
  return defaultLocale;
}

/**
 * Локаль по умолчанию для домена: `.ge` -> EN, `.kz` -> RU.
 * Если `Host` за прокси не публичный (внутреннее имя Coolify), задайте `INTERLEX_INSTANCE=ge|kz`
 * (логически соответствует инстансу под interlex.ge / interlex.kz).
 */
export function getDomainDefaultLocale(host: string | null | undefined): Locale {
  const normalizedHost = host?.toLowerCase().split(":")[0] ?? "";
  if (normalizedHost.endsWith("interlex.ge")) return "en";
  if (normalizedHost.endsWith("interlex.kz")) return "ru";

  const instance = process.env.INTERLEX_INSTANCE?.toLowerCase();
  if (instance === "ge") return "en";
  if (instance === "kz") return "ru";

  return "ru";
}

export function resolveContentLocale(locale: Locale): ContentLocale {
  if (locale === "ru" || locale === "kk") return "ru";
  return "en";
}

export function getHtmlLang(locale: Locale): string {
  switch (locale) {
    case "zh":
      return "zh-Hans";
    case "kk":
      return "kk";
    case "ka":
      return "ka";
    default:
      return locale;
  }
}

export function withFallbackLocales<T>(base: Record<ContentLocale, T>): Record<Locale, T> {
  return {
    ...base,
    kk: base.ru,
    ka: base.en,
    zh: base.en,
  };
}

export function getLocalePriority(current: Locale): Locale[] {
  if (current === "ru" || current === "kk") return ["ru", "kk", "zh", "en", "ka"];
  if (current === "en" || current === "ka") return ["en", "ka", "zh", "ru", "kk"];
  return ["zh", "ru", "kk", "en", "ka"];
}

export type ChromeStrings = {
  nav: {
    home: string;
    services: string;
    projects: string;
    kazakhstan: string;
    georgia: string;
    investors: string;
    pricing: string;
    contact: string;
  };
  footer: {
    tagline: string;
    services: string;
    projects: string;
    kazakhstan: string;
    georgia: string;
    investors: string;
    pricing: string;
    contact: string;
  };
};

const chromeBase: Record<ContentLocale, ChromeStrings> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      kazakhstan: "Kazakhstan",
      georgia: "Georgia",
      investors: "Investors",
      pricing: "Packages",
      contact: "Contact",
    },
    footer: {
      tagline: "© 2026 InterLex. Cross-border legal and business advisory for Kazakhstan and Georgia.",
      services: "Services",
      projects: "Projects",
      kazakhstan: "Kazakhstan",
      georgia: "Georgia",
      investors: "Investors",
      pricing: "Packages",
      contact: "Contact",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      projects: "Проекты",
      kazakhstan: "Казахстан",
      georgia: "Грузия",
      investors: "Инвесторам",
      pricing: "Пакеты",
      contact: "Контакты",
    },
    footer: {
      tagline: "© 2026 InterLex. Международный юридический и бизнес-консалтинг для Казахстана и Грузии.",
      services: "Услуги",
      projects: "Проекты",
      kazakhstan: "Казахстан",
      georgia: "Грузия",
      investors: "Инвесторам",
      pricing: "Пакеты",
      contact: "Контакты",
    },
  },
};

export const chrome: Record<Locale, ChromeStrings> = withFallbackLocales(chromeBase);
