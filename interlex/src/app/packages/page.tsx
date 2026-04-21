import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRightIcon,
  BalanceScaleIcon,
  CheckIcon,
  ShieldIcon,
  XCircleIcon,
} from "@/components/ui/icons";
import { getLocale } from "@/lib/i18n/server";
import { packagesMeta, packagesMessages } from "@/lib/i18n/messages/packages";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return packagesMeta[locale];
}

export default async function PackagesPage() {
  const locale = await getLocale();
  const t = packagesMessages[locale];

  return (
    <main className="flex-grow pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8 max-w-xl">
          <h1 className="font-headline text-5xl md:text-7xl font-medium tracking-tight text-primary leading-tight">
            {t.heroTitle1}
            <br />
            {t.heroTitle2}
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed">{t.heroLead}</p>
          <div className="pt-4">
            <button className="bg-primary text-on-primary font-label text-sm tracking-widest uppercase px-8 py-4 rounded hover:opacity-90 transition-opacity">
              {t.heroCta}
            </button>
          </div>
        </div>
        <div className="relative h-96 w-full">
          <Image
            alt={t.imgAlt}
            className="absolute inset-0 w-full h-full object-cover object-center grayscale opacity-80"
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            src="/images/hero/packages-hero.jpg"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface to-transparent"></div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 flex flex-col h-full border border-outline-variant/15 relative">
              <h3 className="font-headline text-2xl text-primary mb-2">{t.t1Name}</h3>
              <p className="font-body text-sm text-on-surface-variant mb-8">{t.t1Desc}</p>
              <div className="flex items-baseline gap-2 mb-8 border-b border-outline-variant/15 pb-8">
                <span className="font-headline text-4xl text-primary">{t.t1Price}</span>
                <span className="font-label text-sm text-on-surface-variant">{t.t1Period}</span>
              </div>
              <ul className="flex-grow flex flex-col gap-4 mb-8 font-body text-sm text-on-surface">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-secondary" />
                  <span>{t.t1f1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-secondary" />
                  <span>{t.t1f2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-secondary" />
                  <span>{t.t1f3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-secondary" />
                  <span>{t.t1f4}</span>
                </li>
              </ul>
              <button className="w-full bg-surface-container text-primary font-label text-sm tracking-widest uppercase px-6 py-4 hover:bg-surface-container-high transition-colors">
                {t.selectTier}
              </button>
            </div>
            <div className="bg-primary p-10 flex flex-col h-full relative transform lg:-translate-y-4 shadow-[0_20px_40px_-15px_rgba(0,9,36,0.3)]">
              <div className="absolute top-0 right-0 bg-secondary px-4 py-1 text-on-secondary-container font-label text-xs tracking-widest uppercase font-bold">
                {t.mostSelected}
              </div>
              <h3 className="font-headline text-2xl text-on-primary mb-2">{t.t2Name}</h3>
              <p className="font-body text-sm text-on-primary/70 mb-8">{t.t2Desc}</p>
              <div className="flex items-baseline gap-2 mb-8 border-b border-on-primary/10 pb-8">
                <span className="font-headline text-4xl text-on-primary">{t.t2Price}</span>
                <span className="font-label text-sm text-on-primary/70">{t.t2Period}</span>
              </div>
              <ul className="flex-grow flex flex-col gap-4 mb-8 font-body text-sm text-on-primary/90">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-secondary-fixed" />
                  <span>{t.t2f1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-secondary-fixed" />
                  <span>{t.t2f2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-secondary-fixed" />
                  <span>{t.t2f3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-secondary-fixed" />
                  <span>{t.t2f4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-secondary-fixed" />
                  <span>{t.t2f5}</span>
                </li>
              </ul>
              <button className="w-full bg-secondary text-primary font-label font-bold text-sm tracking-widest uppercase px-6 py-4 hover:bg-secondary-fixed transition-colors">
                {t.selectTier}
              </button>
            </div>
            <div className="bg-surface-container-lowest p-10 flex flex-col h-full border border-outline-variant/15 relative">
              <h3 className="font-headline text-2xl text-primary mb-2">{t.t3Name}</h3>
              <p className="font-body text-sm text-on-surface-variant mb-8">{t.t3Desc}</p>
              <div className="flex items-baseline gap-2 mb-8 border-b border-outline-variant/15 pb-8">
                <span className="font-headline text-4xl text-primary">{t.t3Price}</span>
                <span className="font-label text-sm text-on-surface-variant">{t.t3Period}</span>
              </div>
              <ul className="flex-grow flex flex-col gap-4 mb-8 font-body text-sm text-on-surface">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-secondary" />
                  <span>{t.t3f1}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-secondary" />
                  <span>{t.t3f2}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-secondary" />
                  <span>{t.t3f3}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-secondary" />
                  <span>{t.t3f4}</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-0.5 h-[18px] w-[18px] text-secondary" />
                  <span>{t.t3f5}</span>
                </li>
              </ul>
              <button className="w-full bg-transparent border-b-2 border-primary text-primary font-label text-sm tracking-widest uppercase px-6 py-3 hover:text-secondary hover:border-secondary transition-colors text-left pl-0">
                {t.contactMP}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-headline text-4xl text-primary mb-16 max-w-2xl">{t.tableTitle}</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-body text-sm">
            <thead>
              <tr className="border-b border-outline-variant/20">
                <th className="py-6 font-headline text-lg font-normal text-on-surface-variant w-1/4">{t.thScope}</th>
                <th className="py-6 font-label tracking-widest uppercase text-xs text-primary w-1/4 px-4">{t.thT1}</th>
                <th className="py-6 font-label tracking-widest uppercase text-xs text-primary w-1/4 px-4">{t.thT2}</th>
                <th className="py-6 font-label tracking-widest uppercase text-xs text-primary w-1/4 px-4">{t.thT3}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/10">
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="py-6 font-medium text-on-surface">{t.r1h}</td>
                <td className="py-6 px-4 text-on-surface-variant">{t.r1a}</td>
                <td className="py-6 px-4 text-on-surface-variant">{t.r1b}</td>
                <td className="py-6 px-4 text-on-surface-variant">{t.r1c}</td>
              </tr>
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="py-6 font-medium text-on-surface">{t.r2h}</td>
                <td className="py-6 px-4 text-on-surface-variant">{t.r2a}</td>
                <td className="py-6 px-4 text-on-surface-variant">{t.r2b}</td>
                <td className="py-6 px-4 text-on-surface-variant">{t.r2c}</td>
              </tr>
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="py-6 font-medium text-on-surface">{t.r3h}</td>
                <td className="py-6 px-4 text-on-surface-variant">
                  <XCircleIcon className="h-5 w-5 text-outline" />
                </td>
                <td className="py-6 px-4 text-secondary">
                  <CheckIcon className="h-5 w-5" />
                </td>
                <td className="py-6 px-4 text-secondary">
                  <CheckIcon className="h-5 w-5" />
                </td>
              </tr>
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="py-6 font-medium text-on-surface">{t.r4h}</td>
                <td className="py-6 px-4 text-on-surface-variant">{t.r4a}</td>
                <td className="py-6 px-4 text-secondary">{t.r4b}</td>
                <td className="py-6 px-4 text-secondary">{t.r4c}</td>
              </tr>
              <tr className="hover:bg-surface-container-low/50 transition-colors">
                <td className="py-6 font-medium text-on-surface">{t.r5h}</td>
                <td className="py-6 px-4 text-on-surface-variant">
                  <XCircleIcon className="h-5 w-5 text-outline" />
                </td>
                <td className="py-6 px-4 text-on-surface-variant">{t.r5b}</td>
                <td className="py-6 px-4 text-secondary">{t.r5c}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-primary text-on-primary py-24 relative overflow-hidden">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="font-label text-secondary tracking-widest text-xs uppercase mb-4 block">{t.maLabel}</span>
            <h2 className="font-headline text-4xl leading-tight mb-6">{t.maTitle}</h2>
            <p className="font-body text-on-primary-container mb-8">{t.maLead}</p>
            <Link className="inline-flex items-center gap-2 text-secondary font-label text-sm uppercase tracking-widest hover:text-secondary-fixed transition-colors" href="/services">
              <span>{t.maLink}</span>
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface-container-low/10 p-8 backdrop-blur-sm border border-on-primary/10">
              <BalanceScaleIcon className="mb-4 h-8 w-8 text-secondary" />
              <h4 className="font-headline text-xl mb-3">{t.maC1Title}</h4>
              <p className="font-body text-sm text-on-primary-container">{t.maC1Body}</p>
            </div>
            <div className="bg-surface-container-low/10 p-8 backdrop-blur-sm border border-on-primary/10">
              <ShieldIcon className="mb-4 h-8 w-8 text-secondary" />
              <h4 className="font-headline text-xl mb-3">{t.maC2Title}</h4>
              <p className="font-body text-sm text-on-primary-container">{t.maC2Body}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="font-headline text-4xl text-primary mb-16 border-b border-outline-variant/20 pb-8">{t.faqTitle}</h2>
        <div className="flex flex-col gap-12">
          <div className="flex gap-8 group">
            <div className="font-headline text-3xl text-outline-variant group-hover:text-secondary transition-colors duration-300">01</div>
            <div>
              <h4 className="font-body font-medium text-lg text-primary mb-3">{t.faq1q}</h4>
              <p className="font-body text-on-surface-variant leading-relaxed">{t.faq1a}</p>
            </div>
          </div>
          <div className="flex gap-8 group">
            <div className="font-headline text-3xl text-outline-variant group-hover:text-secondary transition-colors duration-300">02</div>
            <div>
              <h4 className="font-body font-medium text-lg text-primary mb-3">{t.faq2q}</h4>
              <p className="font-body text-on-surface-variant leading-relaxed">{t.faq2a}</p>
            </div>
          </div>
          <div className="flex gap-8 group">
            <div className="font-headline text-3xl text-outline-variant group-hover:text-secondary transition-colors duration-300">03</div>
            <div>
              <h4 className="font-body font-medium text-lg text-primary mb-3">{t.faq3q}</h4>
              <p className="font-body text-on-surface-variant leading-relaxed">{t.faq3a}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-headline text-4xl text-primary mb-6">{t.bottomTitle}</h2>
          <p className="font-body text-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">{t.bottomLead}</p>
          <button className="bg-primary text-on-primary font-label text-sm tracking-widest uppercase px-10 py-5 rounded hover:opacity-90 transition-opacity">
            {t.bottomBtn}
          </button>
        </div>
      </section>
    </main>
  );
}
