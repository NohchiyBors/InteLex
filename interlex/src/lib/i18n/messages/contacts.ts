import { withFallbackLocales, type ContentLocale, type Locale } from "@/lib/i18n";

const contactsMetaBase: Record<ContentLocale, { title: string; description: string }> = {
  en: {
    title: "Contact Us | InterLex",
    description:
      "Reach out to InterLex for confidential corporate guidance in Kazakhstan and Georgia.",
  },
  ru: {
    title: "Контакты | InterLex",
    description:
      "Свяжитесь с InterLex для конфиденциального консалтинга в Казахстане и Грузии.",
  },
  zh: {
    title: "联系我们 | InterLex",
    description: "就哈萨克斯坦与格鲁吉亚的企业事务联系 InterLex。",
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
    h1Line1: "Global Presence,",
    h1Line2: "Local Precision.",
    lead:
      "Contact our international hubs in the AIFC and Tbilisi. We provide definitive cross-border corporate architecture and advisory services.",
    kzHub: "Kazakhstan Hub",
    kzJur: "AIFC Jurisdiction",
    geHub: "Georgia Hub",
    geNode: "European Node",
    emailLabel: "Email:",
    telLabel: "Tel:",
    directTitle: "Direct Communication",
  },
  ru: {
    h1Line1: "Глобальное присутствие,",
    h1Line2: "локальная точность.",
    lead:
      "Наши хабы в AIFC и Тбилиси. Трансграничная корпоративная архитектура и консалтинг.",
    kzHub: "Хаб Казахстан",
    kzJur: "Юрисдикция AIFC",
    geHub: "Хаб Грузия",
    geNode: "Европейский узел",
    emailLabel: "Email:",
    telLabel: "Тел.:",
    directTitle: "Прямая связь",
  },
  zh: {
    h1Line1: "全球布局，",
    h1Line2: "本地精准。",
    lead:
      "联系我们在 AIFC 和第比利斯的国际办公室。提供跨境架构与企业顾问服务。",
    kzHub: "哈萨克斯坦办公室",
    kzJur: "AIFC 司法管辖区",
    geHub: "格鲁吉亚办公室",
    geNode: "欧洲节点",
    emailLabel: "邮箱：",
    telLabel: "电话：",
    directTitle: "直接沟通",
  },
};
export const contactsMessages: Record<Locale, ContactsMessages> = withFallbackLocales(contactsMessagesBase);
