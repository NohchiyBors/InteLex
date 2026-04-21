import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRightIcon, BankIcon, BuildingIcon, HandshakeIcon } from "@/components/ui/icons";
import { getLocale } from "@/lib/i18n/server";
import { kzMeta, kzMessages } from "@/lib/i18n/messages/kz";
import { getInvestmentProjects } from "@/lib/projects";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return kzMeta[locale];
}

export default async function KazakhstanPage() {
  const locale = await getLocale();
  const t = kzMessages[locale];
  const investmentProjects = getInvestmentProjects(locale, "kz");
  const investorCopy =
    locale === "ru" || locale === "kk"
      ? {
          title: "Инвестиционные проекты Казахстана",
          lead:
            "Из локального `docs/spec` для Казахстана явно выделены investor-entry задачи: преференции, GR, резидентство и институциональный вход в проект.",
          tracks: "Треки",
          outcome: "Результат",
          cta: "Смотреть investor support",
          projectsCta: "Все проекты",
        }
      : {
          title: "Kazakhstan investment projects",
          lead:
            "The local `docs/spec` explicitly positions Kazakhstan around investor-entry work: incentives, GR, residency, and institutional project entry.",
          tracks: "Tracks",
          outcome: "Outcome",
          cta: "View investor support",
          projectsCta: "All projects",
        };

  return (
    <main className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-12 mb-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 pb-12 z-10 relative">
            <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-primary leading-tight mb-8">
              {t.heroTitle1} <br />
              {t.heroTitle2}
            </h1>
            <p className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed">{t.heroLead}</p>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] bg-surface-container-low shadow-[0_30px_60px_-15px_rgba(25,28,30,0.1)] relative overflow-hidden">
              <Image
                alt=""
                className="object-cover w-full h-full opacity-90"
                fill
                priority
                sizes="(min-width: 1024px) 34vw, 100vw"
                src="/images/hero/kazakhstan-hero.jpg"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-12 mb-32 bg-surface-container-low py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div>
            <h2 className="font-headline text-4xl text-primary font-medium tracking-tight mb-8 drop-cap">01</h2>
            <h3 className="font-body text-lg font-semibold text-primary mb-4">{t.adv1Title}</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">{t.adv1Body}</p>
          </div>
          <div>
            <h2 className="font-headline text-4xl text-primary font-medium tracking-tight mb-8 drop-cap">02</h2>
            <h3 className="font-body text-lg font-semibold text-primary mb-4">{t.adv2Title}</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">{t.adv2Body}</p>
          </div>
          <div>
            <h2 className="font-headline text-4xl text-primary font-medium tracking-tight mb-8 drop-cap">03</h2>
            <h3 className="font-body text-lg font-semibold text-primary mb-4">{t.adv3Title}</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">{t.adv3Body}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-12 mb-32">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-outline-variant/20 pb-6">
          <h2 className="font-headline text-4xl text-primary font-medium tracking-tight">{t.coreTitle}</h2>
          <Link
            className="font-body text-sm text-primary border-b-2 border-secondary hover:text-secondary transition-colors py-1"
            href="/services"
          >
            {t.viewAll}
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-24">
          <div className="flex gap-6">
            <BuildingIcon className="h-8 w-8 text-secondary" />
            <div>
              <h3 className="font-headline text-2xl text-primary mb-4">{t.svc1Title}</h3>
              <p className="font-body text-on-surface-variant mb-6 leading-relaxed">{t.svc1Body}</p>
              <button className="bg-primary text-on-primary px-6 py-3 font-body text-sm tracking-wide hover:bg-primary/90 transition-colors rounded">
                {t.svc1Cta}
              </button>
            </div>
          </div>
          <div className="flex gap-6">
            <BankIcon className="h-8 w-8 text-secondary" />
            <div>
              <h3 className="font-headline text-2xl text-primary mb-4">{t.svc2Title}</h3>
              <p className="font-body text-on-surface-variant mb-6 leading-relaxed">{t.svc2Body}</p>
              <button className="bg-primary text-on-primary px-6 py-3 font-body text-sm tracking-wide hover:bg-primary/90 transition-colors rounded">
                {t.svc2Cta}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-12 mb-32">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-16 border-b border-outline-variant/20 pb-6">
          <div className="max-w-3xl">
            <h2 className="font-headline text-4xl text-primary font-medium tracking-tight mb-4">{investorCopy.title}</h2>
            <p className="font-body text-on-surface-variant leading-relaxed">{investorCopy.lead}</p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              className="font-body text-sm text-primary border-b-2 border-secondary hover:text-secondary transition-colors py-1 inline-flex items-center gap-2"
              href="/projects"
            >
              {investorCopy.projectsCta} <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              className="font-body text-sm text-primary border-b-2 border-secondary hover:text-secondary transition-colors py-1 inline-flex items-center gap-2"
              href="/services/investor-gr"
            >
              {investorCopy.cta} <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {investmentProjects.map((project) => (
            <article key={project.title} className="bg-surface-container-low p-10 border border-outline-variant/15">
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
                    <span key={track} className="px-3 py-1.5 bg-surface text-sm text-on-surface-variant border border-outline-variant/10">
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
      </section>

      <section className="max-w-7xl mx-auto px-12">
        <h2 className="font-headline text-4xl text-primary font-medium tracking-tight mb-12">{t.zonesTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8 bg-surface-container-lowest p-12 shadow-[0_20px_40px_-20px_rgba(25,28,30,0.08)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-surface-container-low rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-105 duration-700"></div>
            <div className="relative z-10">
              <span className="font-body text-xs tracking-widest uppercase text-secondary mb-4 block">{t.aifcTag}</span>
              <h3 className="font-headline text-3xl text-primary mb-6">{t.aifcTitle}</h3>
              <p className="font-body text-on-surface-variant mb-8 max-w-lg leading-relaxed">{t.aifcBody}</p>
              <div className="flex gap-4 flex-wrap">
                <span className="px-3 py-1 bg-surface-container text-xs font-body text-on-surface-variant">{t.tagFintech}</span>
                <span className="px-3 py-1 bg-surface-container text-xs font-body text-on-surface-variant">{t.tagAsset}</span>
                <span className="px-3 py-1 bg-surface-container text-xs font-body text-on-surface-variant">{t.tagIslamic}</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-8">
            <div className="bg-surface-container-low p-8 h-full">
              <h4 className="font-headline text-xl text-primary mb-3">{t.khTitle}</h4>
              <p className="font-body text-sm text-on-surface-variant mb-4">{t.khBody}</p>
              <span className="font-body text-xs text-primary border-b border-secondary inline-block">{t.khLink}</span>
            </div>
            <div className="bg-surface-container-low p-8 h-full">
              <h4 className="font-headline text-xl text-primary mb-3">{t.pitTitle}</h4>
              <p className="font-body text-sm text-on-surface-variant mb-4">{t.pitBody}</p>
              <span className="font-body text-xs text-primary border-b border-secondary inline-block">{t.pitLink}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
