import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRightIcon, BankIcon, GlobeIcon, HandshakeIcon, SpeedIcon } from "@/components/ui/icons";
import { getLocale } from "@/lib/i18n/server";
import { geMeta, geMessages } from "@/lib/i18n/messages/ge";
import { getInvestmentProjects } from "@/lib/projects";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return geMeta[locale];
}

export default async function GeorgiaPage() {
  const locale = await getLocale();
  const t = geMessages[locale];
  const investmentProjects = getInvestmentProjects(locale, "ge");
  const investorCopy =
    locale === "ru" || locale === "kk"
      ? {
          title: "Инвестиционные проекты Грузии",
          lead:
            "В `docs/spec` Грузия раскрыта через FIZ, special regimes, international-company логику, резидентство и investor-friendly operating structures.",
          tracks: "Треки",
          outcome: "Результат",
          cta: "Смотреть investor support",
          projectsCta: "Все проекты",
        }
      : {
          title: "Georgia investment projects",
          lead:
            "In `docs/spec`, Georgia is framed through FIZ, special regimes, international-company logic, residency, and investor-friendly operating structures.",
          tracks: "Tracks",
          outcome: "Outcome",
          cta: "View investor support",
          projectsCta: "All projects",
        };

  return (
    <main className="pt-32">
      <section className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-32 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-5/12 z-10 relative">
          <h1 className="font-headline text-5xl md:text-7xl text-primary tracking-tighter leading-tight mb-8">
            {t.heroTitle1} <br />
            <span className="text-secondary italic">{t.heroTitle2}</span>
          </h1>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10 max-w-md">{t.heroLead}</p>
          <button className="bg-primary text-on-primary font-body font-medium px-8 py-4 rounded hover:bg-primary-container transition-colors duration-300">
            {t.heroCta}
          </button>
        </div>
        <div className="md:w-7/12 relative h-[500px] md:h-[700px] w-full">
          <div className="absolute inset-0 bg-surface-container-low translate-x-4 translate-y-4"></div>
          <Image
            alt=""
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-125"
            fill
            priority
            sizes="(min-width: 768px) 58vw, 100vw"
            src="/images/hero/georgia-hero.jpg"
            unoptimized
          />
        </div>
      </section>

      <section className="bg-surface-container-low py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="font-headline text-4xl text-primary tracking-tight mb-4">{t.stratTitle}</h2>
            <p className="font-body text-on-surface-variant max-w-2xl">{t.stratLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 shadow-[0_20px_40px_-10px_rgba(25,28,30,0.04)] h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-500">
              <div>
                <BankIcon className="mb-6 h-10 w-10 text-secondary" />
                <h3 className="font-headline text-2xl text-primary mb-4">{t.ad1Title}</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{t.ad1Body}</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 shadow-[0_20px_40px_-10px_rgba(25,28,30,0.04)] h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-500">
              <div>
                <GlobeIcon className="mb-6 h-10 w-10 text-secondary" />
                <h3 className="font-headline text-2xl text-primary mb-4">{t.ad2Title}</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{t.ad2Body}</p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-10 shadow-[0_20px_40px_-10px_rgba(25,28,30,0.04)] h-full flex flex-col justify-between hover:-translate-y-1 transition-transform duration-500">
              <div>
                <SpeedIcon className="mb-6 h-10 w-10 text-secondary" />
                <h3 className="font-headline text-2xl text-primary mb-4">{t.ad3Title}</h3>
                <p className="font-body text-on-surface-variant text-sm leading-relaxed">{t.ad3Body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-20">
          <div className="md:w-1/3">
            <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-tight sticky top-32">
              {t.coreTitle} <br />
              {t.coreSubtitle}
            </h2>
          </div>
          <div className="md:w-2/3 flex flex-col gap-y-16">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
              <div className="font-headline text-4xl text-outline-variant group-hover:text-secondary transition-colors duration-300">01</div>
              <div>
                <h3 className="font-headline text-2xl text-primary mb-4">{t.cap1Title}</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">{t.cap1Body}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
              <div className="font-headline text-4xl text-outline-variant group-hover:text-secondary transition-colors duration-300">02</div>
              <div>
                <h3 className="font-headline text-2xl text-primary mb-4">{t.cap2Title}</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">{t.cap2Body}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 group">
              <div className="font-headline text-4xl text-outline-variant group-hover:text-secondary transition-colors duration-300">03</div>
              <div>
                <h3 className="font-headline text-2xl text-primary mb-4">{t.cap3Title}</h3>
                <p className="font-body text-on-surface-variant leading-relaxed">{t.cap3Body}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 md:py-32 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-16 border-b border-outline-variant/20 pb-8">
            <div className="max-w-3xl">
              <h2 className="font-headline text-4xl md:text-5xl text-primary tracking-tight mb-4">{investorCopy.title}</h2>
              <p className="font-body text-on-surface-variant leading-relaxed">{investorCopy.lead}</p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link className="font-body text-sm text-primary border-b-2 border-secondary hover:text-secondary transition-colors py-1 inline-flex items-center gap-2" href="/projects">
                {investorCopy.projectsCta} <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link className="font-body text-sm text-primary border-b-2 border-secondary hover:text-secondary transition-colors py-1 inline-flex items-center gap-2" href="/services/investor-gr">
                {investorCopy.cta} <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentProjects.map((project) => (
              <article key={project.title} className="bg-surface p-10 border border-outline-variant/15">
                <div className="flex items-start justify-between gap-6 mb-6">
                  <div>
                    <p className="font-body text-xs tracking-widest uppercase text-secondary mb-3">{project.tag}</p>
                    <h3 className="font-headline text-3xl text-primary tracking-tight">{project.title}</h3>
                  </div>
                  <HandshakeIcon className="h-8 w-8 text-secondary shrink-0" />
                </div>
                <p className="font-body text-on-surface-variant leading-relaxed mb-8">{project.summary}</p>
                <div className="mb-6">
                  <p className="font-body text-xs tracking-widest uppercase text-primary mb-3">{investorCopy.tracks}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tracks.map((track) => (
                      <span key={track} className="px-3 py-1.5 bg-surface-container-lowest text-sm text-on-surface-variant border border-outline-variant/10">
                        {track}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-outline-variant/15 pt-6">
                  <p className="font-body text-xs tracking-widest uppercase text-primary mb-3">{investorCopy.outcome}</p>
                  <p className="font-body text-on-surface-variant leading-relaxed">{project.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-on-primary py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 70% 30%, #ffe08f 0%, transparent 40%)" }}></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-on-primary/10 pb-8">
            <div>
              <h2 className="font-headline text-4xl md:text-5xl tracking-tight mb-4 text-surface">{t.fizTitle}</h2>
              <p className="font-body text-inverse-on-surface/70 max-w-xl">{t.fizLead}</p>
            </div>
            <Link className="font-body text-sm text-secondary hover:text-white transition-colors duration-300 flex items-center gap-2 mt-6 md:mt-0 uppercase tracking-widest" href="/services">
              {t.fizLink} <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-on-primary/10">
            <div className="bg-primary p-10 hover:bg-primary-container transition-colors duration-300">
              <h3 className="font-headline text-2xl text-surface mb-2">{t.potiTitle}</h3>
              <p className="font-body text-xs text-secondary uppercase tracking-widest mb-6">{t.potiTag}</p>
              <p className="font-body text-inverse-on-surface/80 text-sm leading-relaxed">{t.potiBody}</p>
            </div>
            <div className="bg-primary p-10 hover:bg-primary-container transition-colors duration-300">
              <h3 className="font-headline text-2xl text-surface mb-2">{t.tbilisiTitle}</h3>
              <p className="font-body text-xs text-secondary uppercase tracking-widest mb-6">{t.tbilisiTag}</p>
              <p className="font-body text-inverse-on-surface/80 text-sm leading-relaxed">{t.tbilisiBody}</p>
            </div>
            <div className="bg-primary p-10 hover:bg-primary-container transition-colors duration-300">
              <h3 className="font-headline text-2xl text-surface mb-2">{t.hualingTitle}</h3>
              <p className="font-body text-xs text-secondary uppercase tracking-widest mb-6">{t.hualingTag}</p>
              <p className="font-body text-inverse-on-surface/80 text-sm leading-relaxed">{t.hualingBody}</p>
            </div>
            <div className="bg-primary p-10 hover:bg-primary-container transition-colors duration-300">
              <h3 className="font-headline text-2xl text-surface mb-2">{t.kutaisiTitle}</h3>
              <p className="font-body text-xs text-secondary uppercase tracking-widest mb-6">{t.kutaisiTag}</p>
              <p className="font-body text-inverse-on-surface/80 text-sm leading-relaxed">{t.kutaisiBody}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
