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
    successTitle: "Request Received",
    fullLegalName: "Full Legal Name",
    corporateEmail: "Corporate Email",
    natureOfInquiry: "Nature of Inquiry",
    submit: "Submit Inquiry",
  },
  ru: {
    successTitle: "Заявка получена",
    fullLegalName: "Полное юридическое имя",
    corporateEmail: "Корпоративный email",
    natureOfInquiry: "Суть запроса",
    submit: "Отправить запрос",
  },
  zh: {
    successTitle: "请求已收到",
    fullLegalName: "法定全名",
    corporateEmail: "企业邮箱",
    natureOfInquiry: "咨询事项",
    submit: "提交咨询",
  },
};
export const homeFormLabels: Record<Locale, HomeFormLabels> = withFallbackLocales(homeFormLabelsBase);

const interestOptions: Record<
  ContentLocale,
  { value: string; label: string }[]
> = {
  en: [
    { value: "registration", label: "Corporate Registration" },
    { value: "tax", label: "Tax Optimization & SEZ" },
    { value: "legal", label: "Legal & Compliance" },
    { value: "ma", label: "M&A Advisory" },
  ],
  ru: [
    { value: "registration", label: "Корпоративная регистрация" },
    { value: "tax", label: "Налоги и СЭЗ" },
    { value: "legal", label: "Право и комплаенс" },
    { value: "ma", label: "M&A консультирование" },
  ],
  zh: [
    { value: "registration", label: "公司注册" },
    { value: "tax", label: "税务优化与特区" },
    { value: "legal", label: "法律与合规" },
    { value: "ma", label: "并购顾问" },
  ],
};

const servicesFormLabelsBase: Record<ContentLocale, ServicesFormLabels> = {
  en: {
    successTitle: "Dialogue Initiated",
    fullName: "Full Name / Entity",
    email: "Corporate Email",
    interestPlaceholder: "Select Primary Area of Interest",
    interests: interestOptions.en,
    details: "Operational Context (Optional)",
    disclaimer:
      "By submitting this form, you agree to our strict data confidentiality policy.",
    submit: "Submit Request",
    submitting: "Submitting...",
  },
  ru: {
    successTitle: "Диалог начат",
    fullName: "ФИО / компания",
    email: "Корпоративный email",
    interestPlaceholder: "Основная тема интереса",
    interests: interestOptions.ru,
    details: "Контекст (необязательно)",
    disclaimer:
      "Отправляя форму, вы соглашаетесь с нашей политикой конфиденциальности данных.",
    submit: "Отправить",
    submitting: "Отправка...",
  },
  zh: {
    successTitle: "对话已发起",
    fullName: "姓名 / 实体名称",
    email: "企业邮箱",
    interestPlaceholder: "请选择主要咨询方向",
    interests: interestOptions.zh,
    details: "业务背景（可选）",
    disclaimer: "提交表单即表示您同意我们严格的数据保密政策。",
    submit: "提交请求",
    submitting: "提交中...",
  },
};
export const servicesFormLabels: Record<Locale, ServicesFormLabels> = withFallbackLocales(servicesFormLabelsBase);

const contactSuccessMessageBase: Record<ContentLocale, string> = {
  en: "Your inquiry has been received. Our senior partners will contact you shortly to arrange a confidential briefing.",
  ru: "Мы получили ваш запрос. Старшие партнёры свяжутся с вами для организации конфиденциального брифинга.",
  zh: "我们已收到您的咨询。资深合伙人将尽快与您联系并安排保密沟通。",
};
export const contactSuccessMessage: Record<Locale, string> = withFallbackLocales(contactSuccessMessageBase);
