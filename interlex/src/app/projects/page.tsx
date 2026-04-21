import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRightIcon, HandshakeIcon } from "@/components/ui/icons";
import { getLocale } from "@/lib/i18n/server";
import { getInvestmentProjects, getProjects } from "@/lib/projects";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  if (locale === "ru" || locale === "kk") {
    return {
      title: "Проекты | InterLex",
      description:
        "Representative projects and deal tracks InterLex across Kazakhstan and Georgia, including cross-border, investment, and investor-entry mandates.",
    };
  }

  return {
    title: "Projects | InterLex",
    description:
      "Representative projects and deal tracks InterLex delivers across Kazakhstan and Georgia, including cross-border, investment, and investor-entry mandates.",
  };
}

export default async function ProjectsPage() {
  const locale = await getLocale();
  const projects = getProjects(locale);
  const kzProjects = getInvestmentProjects(locale, "kz");
  const geProjects = getInvestmentProjects(locale, "ge");

  const t =
    locale === "ru" || locale === "kk"
      ? {
          eyebrow: "Проекты",
          title: "Representative projects and deal tracks",
          lead:
            "Здесь собраны типовые проектные треки InterLex по Казахстану и Грузии: cross-border structuring, запуск операционной модели, investor-entry, special regimes и transaction support.",
          services: "Услуги",
          outcome: "Результат",
          investorTitle: "Инвестиционные проекты",
          investorLead:
            "Ниже отдельно показаны инвестиционные треки Казахстана и Грузии, где проект строится вокруг льгот, режима, GR, банковского контура и структуры присутствия.",
          kazakhstan: "Казахстан",
          georgia: "Грузия",
          tracks: "Треки",
          investorCta: "Investor & GR",
          countryCta: "Страница юрисдикции",
        }
      : {
          eyebrow: "Projects",
          title: "Representative projects and deal tracks",
          lead:
            "This page gathers representative InterLex project tracks across Kazakhstan and Georgia: cross-border structuring, operating-model launch, investor entry, special regimes, and transaction support.",
          services: "Services",
          outcome: "Outcome",
          investorTitle: "Investment projects",
          investorLead:
            "The Kazakhstan and Georgia investment tracks are separated out below, where the mandate starts with incentives, regime screening, GR, banking, and presence structuring.",
          kazakhstan: "Kazakhstan",
          georgia: "Georgia",
          tracks: "Tracks",
          investorCta: "Investor & GR",
          countryCta: "Jurisdiction page",
        };

  return (
    <main className="pt-28">
      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-12">
          <div className="max-w-4xl">
            <p className="font-label text-sm tracking-[0.22em] text-secondary uppercase mb-4">{t.eyebrow}</p>
            <h1 className="font-headline text-5xl text-primary tracking-tight mb-6">{t.title}</h1>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed">{t.lead}</p>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <article key={project.slug} className="bg-surface p-10 border border-outline-variant/15">
                <p className="font-label text-xs tracking-[0.24em] text-secondary uppercase mb-4">{project.tag}</p>
                <h2 className="font-headline text-3xl text-primary tracking-tight mb-4">{project.title}</h2>
                <p className="font-body text-on-surface-variant leading-relaxed mb-8">{project.summary}</p>
                <div className="mb-6">
                  <p className="font-label text-xs tracking-[0.22em] text-primary uppercase mb-3">{t.services}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.services.map((service) => (
                      <span key={service} className="px-3 py-2 bg-surface-container-low text-sm text-on-surface-variant border border-outline-variant/10">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="border-t border-outline-variant/15 pt-6">
                  <p className="font-label text-xs tracking-[0.22em] text-primary uppercase mb-3">{t.outcome}</p>
                  <p className="font-body text-on-surface-variant leading-relaxed">{project.outcome}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-12">
          <div className="max-w-4xl mb-14">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary mb-6">
              <HandshakeIcon className="h-6 w-6" />
            </div>
            <h2 className="font-headline text-4xl text-primary tracking-tight mb-6">{t.investorTitle}</h2>
            <p className="font-body text-on-surface-variant leading-relaxed">{t.investorLead}</p>
          </div>

          <div className="grid xl:grid-cols-2 gap-10">
            <div className="bg-surface-container-low p-10 border border-outline-variant/15">
              <h3 className="font-headline text-3xl text-primary mb-8">{t.kazakhstan}</h3>
              <div className="space-y-6">
                {kzProjects.map((project) => (
                  <article key={`${project.country}-${project.title}`} className="border-b border-outline-variant/15 pb-6 last:border-b-0 last:pb-0">
                    <p className="font-label text-xs tracking-[0.24em] text-secondary uppercase mb-3">{project.tag}</p>
                    <h4 className="font-headline text-2xl text-primary mb-3">{project.title}</h4>
                    <p className="font-body text-on-surface-variant leading-relaxed mb-5">{project.summary}</p>
                    <p className="font-label text-xs tracking-[0.22em] text-primary uppercase mb-3">{t.tracks}</p>
                    <div className="flex flex-wrap gap-3 mb-5">
                      {project.tracks.map((track) => (
                        <span key={track} className="px-3 py-2 bg-surface text-sm text-on-surface-variant border border-outline-variant/10">
                          {track}
                        </span>
                      ))}
                    </div>
                    <p className="font-body text-on-surface-variant leading-relaxed">{project.outcome}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/kz"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-primary"
                >
                  {t.countryCta} <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-primary p-10 text-on-primary">
              <h3 className="font-headline text-3xl text-surface mb-8">{t.georgia}</h3>
              <div className="space-y-6">
                {geProjects.map((project) => (
                  <article key={`${project.country}-${project.title}`} className="border-b border-white/15 pb-6 last:border-b-0 last:pb-0">
                    <p className="font-label text-xs tracking-[0.24em] text-secondary-container uppercase mb-3">{project.tag}</p>
                    <h4 className="font-headline text-2xl text-surface mb-3">{project.title}</h4>
                    <p className="font-body text-on-primary/80 leading-relaxed mb-5">{project.summary}</p>
                    <p className="font-label text-xs tracking-[0.22em] text-secondary-container uppercase mb-3">{t.tracks}</p>
                    <div className="flex flex-wrap gap-3 mb-5">
                      {project.tracks.map((track) => (
                        <span key={track} className="px-3 py-2 bg-white/10 text-sm text-on-primary border border-white/10">
                          {track}
                        </span>
                      ))}
                    </div>
                    <p className="font-body text-on-primary/80 leading-relaxed">{project.outcome}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/ge"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-secondary-container"
                >
                  {t.countryCta} <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link
              href="/services/investor-gr"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-primary"
            >
              {t.investorCta} <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
