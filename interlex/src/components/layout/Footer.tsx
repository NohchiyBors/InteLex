import Link from "next/link";
import Image from "next/image";
import { chrome, type Locale } from "@/lib/i18n";

type Props = {
  locale: Locale;
};

export default function Footer({ locale }: Props) {
  const t = chrome[locale].footer;

  return (
    <footer className="w-full py-16 px-12 border-t border-[#000924]/5 bg-[#f2f4f7]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="mb-6 inline-flex" aria-label="InterLex home">
            <Image
              src="/brand/IL_logo_dark.svg"
              alt="InterLex"
              width={188}
              height={38}
              className="h-9 w-auto"
            />
          </Link>
          <p className="font-sans text-xs tracking-widest uppercase text-[#191c1e]/60 max-w-xs leading-relaxed">
            {t.tagline}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            className="font-sans text-xs tracking-widest uppercase text-[#191c1e]/60 hover:text-[#755b00] underline decoration-[#755b00] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="/kz"
          >
            {t.kazakhstan}
          </Link>
          <Link
            className="font-sans text-xs tracking-widest uppercase text-[#191c1e]/60 hover:text-[#755b00] underline decoration-[#755b00] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="/ge"
          >
            {t.georgia}
          </Link>
          <Link
            className="font-sans text-xs tracking-widest uppercase text-[#191c1e]/60 hover:text-[#755b00] underline decoration-[#755b00] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="/services"
          >
            {t.services}
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            className="font-sans text-xs tracking-widest uppercase text-[#191c1e]/60 hover:text-[#755b00] underline decoration-[#755b00] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="/packages"
          >
            {t.pricing}
          </Link>
          <Link
            className="font-sans text-xs tracking-widest uppercase text-[#191c1e]/60 hover:text-[#755b00] underline decoration-[#755b00] underline-offset-4 opacity-80 hover:opacity-100 transition-opacity"
            href="/contacts"
          >
            {t.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
