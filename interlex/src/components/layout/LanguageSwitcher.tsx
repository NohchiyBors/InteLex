"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { setLocale } from "@/app/actions/locale";
import { locales, type Locale } from "@/lib/i18n";

type Props = {
  current: Locale;
};

const labels: Record<Locale, string> = {
  ru: "RU",
  en: "EN",
  zh: "ZH",
  kk: "KK",
  ka: "KA",
};

export default function LanguageSwitcher({ current }: Props) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  function select(locale: string) {
    const nextLocale = locale as Locale;
    if (!locales.includes(nextLocale)) return;
    if (nextLocale === current) return;
    startTransition(async () => {
      await setLocale(nextLocale);
      router.refresh();
    });
  }

  return (
    <label className="relative block" aria-label="Language">
      <span className="sr-only">Language</span>
      <select
        value={current}
        disabled={pending}
        onChange={(event) => select(event.target.value)}
        className="min-w-[88px] appearance-none rounded border border-primary/12 bg-white py-2 pl-3 pr-9 text-xs font-medium uppercase tracking-[0.18em] text-primary shadow-sm outline-none transition-colors hover:border-secondary/40 focus:border-secondary disabled:opacity-60"
      >
        {locales.map((locale) => (
          <option key={locale} value={locale}>
            {labels[locale]}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-primary/70">
        <span className="material-symbols-outlined text-[18px]">expand_more</span>
      </span>
    </label>
  );
}
