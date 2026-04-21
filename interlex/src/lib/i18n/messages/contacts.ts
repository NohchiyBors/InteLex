import { withFallbackLocales, type ContentLocale, type Locale } from "@/lib/i18n";

const contactsMetaBase: Record<ContentLocale, { title: string; description: string }> = {
  en: {
    title: "Contact | InterLex",
    description: "Contact InterLex for confidential legal and business advisory in Kazakhstan and Georgia.",
  },
  ru: {
    title: "Контакты | InterLex",
    description: "Свяжитесь с InterLex для конфиденциального юридического и бизнес-консалтинга по Казахстану и Грузии.",
  },
};

export const contactsMeta: Record<Locale, { title: string; description: string }> = withFallbackLocales(contactsMetaBase);

export type ContactsMessages = {
  h1Line1: string;
  h1Line2: string;
  lead: string;
  kzHub: string;
  kzJur: string;
  geHub: string;
  geNode: string;
  emailLabel: string;
  telLabel: string;
  directTitle: string;
};

const contactsMessagesBase: Record<ContentLocale, ContactsMessages> = {
  en: {
    h1Line1: "Global presence,",
    h1Line2: "local precision.",
    lead: "Speak with our teams in Kazakhstan and Georgia about cross-border structuring, regulatory support, and market entry.",
    kzHub: "Kazakhstan Desk",
    kzJur: "AIFC and mainland support",
    geHub: "Georgia Desk",
    geNode: "Corporate and FIZ support",
    emailLabel: "Email:",
    telLabel: "Tel:",
    directTitle: "Direct communication",
  },
  ru: {
    h1Line1: "Глобальное присутствие,",
    h1Line2: "локальная точность.",
    lead: "Свяжитесь с командами InterLex в Казахстане и Грузии по вопросам трансграничного структурирования, комплаенса и выхода на рынок.",
    kzHub: "Казахстанское направление",
    kzJur: "AIFC и mainland-практика",
    geHub: "Грузинское направление",
    geNode: "Корпоративная и FIZ-практика",
    emailLabel: "Email:",
    telLabel: "Тел.:",
    directTitle: "Прямая связь",
  },
};

export const contactsMessages: Record<Locale, ContactsMessages> = withFallbackLocales(contactsMessagesBase);
