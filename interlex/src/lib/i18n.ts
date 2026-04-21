export type Locale = "en" | "ru" | "zh" | "kk" | "ka";
export type ContentLocale = "en" | "ru";

export const locales: Locale[] = ["ru", "kk", "en", "ka", "zh"];

export const defaultLocale: Locale = "ru";

export function normalizeLocale(raw: string | undefined): Locale {
  if (raw === "en" || raw === "ru" || raw === "zh" || raw === "kk" || raw === "ka") return raw;
  return defaultLocale;
}

export function getDomainDefaultLocale(host: string | null | undefined): Locale {
  const normalizedHost = host?.toLowerCase().split(":")[0] ?? "";
  if (normalizedHost.endsWith("interlex.ge")) return "en";
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
    kazakhstan: string;
    georgia: string;
    services: string;
    pricing: string;
    contact: string;
  };
  footer: {
    tagline: string;
    kazakhstan: string;
    georgia: string;
    services: string;
    pricing: string;
    contact: string;
  };
};

const chromeBase: Record<ContentLocale, ChromeStrings> = {
  en: {
    nav: {
      home: "Home",
      kazakhstan: "Kazakhstan",
      georgia: "Georgia",
      services: "Services",
      pricing: "Packages",
      contact: "Contact",
    },
    footer: {
      tagline: "© 2026 InterLex. Cross-border legal and business advisory for Kazakhstan and Georgia.",
      kazakhstan: "Kazakhstan",
      georgia: "Georgia",
      services: "Services",
      pricing: "Packages",
      contact: "Contact",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      kazakhstan: "Казахстан",
      georgia: "Грузия",
      services: "Услуги",
      pricing: "Пакеты",
      contact: "Контакты",
    },
    footer: {
      tagline: "© 2026 InterLex. Международный юридический и бизнес-консалтинг для Казахстана и Грузии.",
      kazakhstan: "Казахстан",
      georgia: "Грузия",
      services: "Услуги",
      pricing: "Пакеты",
      contact: "Контакты",
    },
  },
};

export const chrome: Record<Locale, ChromeStrings> = withFallbackLocales(chromeBase);
