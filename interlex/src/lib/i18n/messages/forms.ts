import { withFallbackLocales, type ContentLocale, type Locale } from "@/lib/i18n";

export type HomeFormLabels = {
  successTitle: string;
  fullLegalName: string;
  corporateEmail: string;
  natureOfInquiry: string;
  submit: string;
};

export type ServicesFormLabels = {
  successTitle: string;
  fullName: string;
  email: string;
  interestPlaceholder: string;
  interests: { value: string; label: string }[];
  details: string;
  disclaimer: string;
  submit: string;
  submitting: string;
};

const homeFormLabelsBase: Record<ContentLocale, HomeFormLabels> = {
  en: {
    successTitle: "Request received",
    fullLegalName: "Full legal name",
    corporateEmail: "Corporate email",
    natureOfInquiry: "Nature of inquiry",
    submit: "Submit inquiry",
  },
  ru: {
    successTitle: "Запрос получен",
    fullLegalName: "Полное юридическое имя",
    corporateEmail: "Корпоративный email",
    natureOfInquiry: "Суть запроса",
    submit: "Отправить запрос",
  },
};

export const homeFormLabels: Record<Locale, HomeFormLabels> = withFallbackLocales(homeFormLabelsBase);

const interestOptions: Record<ContentLocale, { value: string; label: string }[]> = {
  en: [
    { value: "registration", label: "Corporate registration" },
    { value: "tax", label: "Tax structuring and special regimes" },
    { value: "legal", label: "Legal and compliance support" },
    { value: "ma", label: "M&A advisory" },
  ],
  ru: [
    { value: "registration", label: "Корпоративная регистрация" },
    { value: "tax", label: "Налоги и специальные режимы" },
    { value: "legal", label: "Право и комплаенс" },
    { value: "ma", label: "M&A-консультирование" },
  ],
};

const servicesFormLabelsBase: Record<ContentLocale, ServicesFormLabels> = {
  en: {
    successTitle: "Dialogue initiated",
    fullName: "Full name / entity",
    email: "Corporate email",
    interestPlaceholder: "Select primary area of interest",
    interests: interestOptions.en,
    details: "Business context (optional)",
    disclaimer: "By submitting this form, you agree to our confidentiality-first handling of client data.",
    submit: "Submit request",
    submitting: "Submitting...",
  },
  ru: {
    successTitle: "Диалог начат",
    fullName: "ФИО / компания",
    email: "Корпоративный email",
    interestPlaceholder: "Основная тема запроса",
    interests: interestOptions.ru,
    details: "Контекст задачи (необязательно)",
    disclaimer: "Отправляя форму, вы соглашаетесь с конфиденциальной обработкой данных по стандартам InterLex.",
    submit: "Отправить",
    submitting: "Отправка...",
  },
};

export const servicesFormLabels: Record<Locale, ServicesFormLabels> = withFallbackLocales(servicesFormLabelsBase);

const contactSuccessMessageBase: Record<ContentLocale, string> = {
  en: "Your request has been received. A senior InterLex advisor will contact you shortly to arrange a confidential briefing.",
  ru: "Мы получили ваш запрос. Старший консультант InterLex свяжется с вами в ближайшее время для конфиденциального брифинга.",
};

export const contactSuccessMessage: Record<Locale, string> = withFallbackLocales(contactSuccessMessageBase);
