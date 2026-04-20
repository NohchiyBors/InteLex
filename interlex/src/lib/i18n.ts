export type Locale = "en" | "ru" | "zh" | "kk" | "ka";
export type ContentLocale = "en" | "ru" | "zh";

export const locales: Locale[] = ["ru", "en", "zh", "kk", "ka"];

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
  if (locale === "kk") return "ru";
  if (locale === "ka") return "en";
  return locale;
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
  };
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

export const chrome: Record<Locale, ChromeStrings> = {
  en: {
    nav: {
      home: "Home",
      kazakhstan: "Kazakhstan",
      georgia: "Georgia",
      services: "Services",
      pricing: "Pricing",
      contact: "Contact",
    },
    footer: {
      tagline:
        "© 2026 InterLex. Cross-border legal and business advisory.",
      kazakhstan: "Kazakhstan",
      georgia: "Georgia",
      services: "Services",
      pricing: "Pricing",
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
      tagline:
        "© 2026 InterLex. Международный юридический и бизнес-консалтинг.",
      kazakhstan: "Казахстан",
      georgia: "Грузия",
      services: "Услуги",
      pricing: "Пакеты",
      contact: "Контакты",
    },
  },
  zh: {
    nav: {
      home: "首页",
      kazakhstan: "哈萨克斯坦",
      georgia: "格鲁吉亚",
      services: "服务",
      pricing: "套餐与价格",
      contact: "联系我们",
    },
    footer: {
      tagline: "© 2026 InterLex。哈萨克斯坦与格鲁吉亚跨境咨询服务。",
      kazakhstan: "哈萨克斯坦",
      georgia: "格鲁吉亚",
      services: "服务",
      pricing: "套餐与价格",
      contact: "联系我们",
    },
  },
  kk: {
    nav: {
      home: "Басты бет",
      kazakhstan: "Қазақстан",
      georgia: "Грузия",
      services: "Қызметтер",
      pricing: "Пакеттер",
      contact: "Байланыс",
    },
    footer: {
      tagline: "© 2026 InterLex. Қазақстан мен Грузия бойынша халықаралық консалтинг.",
      kazakhstan: "Қазақстан",
      georgia: "Грузия",
      services: "Қызметтер",
      pricing: "Пакеттер",
      contact: "Байланыс",
    },
  },
  ka: {
    nav: {
      home: "Home",
      kazakhstan: "Kazakhstan",
      georgia: "Georgia",
      services: "Services",
      pricing: "Packages",
      contact: "Contact",
    },
    footer: {
      tagline: "© 2026 InterLex. Cross-border advisory for Kazakhstan and Georgia.",
      kazakhstan: "Kazakhstan",
      georgia: "Georgia",
      services: "Services",
      pricing: "Packages",
      contact: "Contact",
    },
  },
};
