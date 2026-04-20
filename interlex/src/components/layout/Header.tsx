import LanguageSwitcher from "@/components/layout/LanguageSwitcher";
import HeaderNav from "@/components/layout/HeaderNav";
import Link from "next/link";
import Image from "next/image";
import { chrome, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export default function Header({ locale }: Props) {
  const t = chrome[locale];

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f7f9fc]/90 backdrop-blur-xl shadow-sm border-b border-[#0f2044]/6">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-5 md:px-8 xl:px-12 py-4 md:py-5">
        <Link href="/" className="flex items-center shrink-0" aria-label="InterLex home">
          <Image
            src="/brand/IL_logo_dark.svg"
            alt="InterLex"
            width={172}
            height={34}
            priority
            className="h-8 w-auto md:h-9"
          />
        </Link>
        <div className="flex items-center gap-3 md:gap-5">
          <HeaderNav t={t.nav} />
          <Link
            href="/contacts"
            className="hidden lg:inline-flex items-center rounded border border-primary/12 bg-primary px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#1c2f5b]"
          >
            {t.nav.contact}
          </Link>
          <LanguageSwitcher current={locale} />
        </div>
      </div>
    </header>
  );
}
