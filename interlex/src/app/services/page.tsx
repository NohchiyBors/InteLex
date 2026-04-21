import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  AdminPanelIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  BankIcon,
  CheckCircleIcon,
  ClipboardIcon,
  GavelIcon,
  HandshakeIcon,
  TrendingFlatIcon,
  TrendingUpIcon,
} from "@/components/ui/icons";
import { ServicesContactForm } from "@/components/forms/ServicesContactForm";
import { getLocale } from "@/lib/i18n/server";
import { servicesFormLabels } from "@/lib/i18n/messages/forms";
import { servicesMeta, servicesMessages } from "@/lib/i18n/messages/services";
import { getServices } from "@/lib/services";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return servicesMeta[locale];
}

export default async function ServicesPage() {
  const locale = await getLocale();
  const t = servicesMessages[locale];
  const formLabels = servicesFormLabels[locale];
  const services = getServices(locale);
  const directory =
    locale === "ru" || locale === "kk"
      ? {
          title: "Каталог услуг",
          lead: "Структурированный обзор коммерческих направлений InterLex с отдельными страницами по каждой ключевой услуге.",
          cta: "Подробнее",
        }
      : {
          title: "Service Directory",
          lead: "A structured overview of the InterLex advisory catalog with dedicated pages for each commercial line.",
          cta: "View service",
        };

  return (
    <main className="pt-32 pb-24">
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <h1
              className="font-headline text-5xl md:text-7xl font-semibold tracking-tight text-primary leading-tight mb-8"
              style={{ textWrap: "balance" }}
            >
              {t.heroTitle1} <br /> {t.heroTitle2}
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed mb-10 font-light">{t.heroLead}</p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                className="bg-primary text-on-primary px-8 py-4 rounded font-medium hover:bg-primary-container transition-colors duration-300 text-center inline-flex justify-center items-center gap-3"
                href="#catalog"
              >
                {t.explore} <ArrowDownIcon className="h-4 w-4" />
              </a>
              <a
                className="border border-outline text-primary px-8 py-4 rounded font-medium hover:bg-surface-container transition-colors duration-300 text-center"
                href="#consultation"
              >
                {t.consult}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="absolute inset-0 bg-secondary/10 -translate-x-4 translate-y-4 rounded-lg"></div>
            <Image
              alt={t.imgAlt}
              className="relative w-full h-[600px] object-cover rounded shadow-2xl z-0 grayscale-[20%] sepia-[10%]"
              height={600}
              priority
              sizes="(min-width: 1024px) 34vw, 100vw"
              src="/images/hero/services-hero.jpg"
              width={480}
            />
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 border-y border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="font-headline text-3xl text-primary tracking-tight mb-4">{t.trajTitle}</h2>
            <p className="text-on-surface-variant font-light max-w-xl">{t.trajLead}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-surface p-12 rounded shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden border border-outline-variant/10">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <BankIcon className="h-16 w-16 text-primary" />
              </div>
              <h3 className="font-headline text-2xl text-primary mb-4 relative z-10">{t.jurCardTitle}</h3>
              <p className="text-on-surface-variant mb-8 relative z-10">{t.jurCardBody}</p>
              <div className="flex gap-4 relative z-10">
                <Link
                  href="/kz"
                  className="px-5 py-2 bg-surface-container-highest text-on-surface text-sm rounded hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
                >
                  {t.linkKz}
                </Link>
                <Link
                  href="/ge"
                  className="px-5 py-2 bg-surface-container-highest text-on-surface text-sm rounded hover:bg-secondary-container hover:text-on-secondary-container transition-colors"
                >
                  {t.linkGe}
                </Link>
              </div>
            </div>
            <div className="bg-surface p-12 rounded shadow-sm hover:shadow-md transition-shadow group relative overflow-hidden border border-outline-variant/10">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUpIcon className="h-16 w-16 text-primary" />
              </div>
              <h3 className="font-headline text-2xl text-primary mb-4 relative z-10">{t.lifeTitle}</h3>
              <p className="text-on-surface-variant mb-8 relative z-10">{t.lifeBody}</p>
              <div className="flex gap-4 flex-wrap relative z-10">
                <Link className="px-5 py-2 bg-surface-container-highest text-on-surface text-sm rounded hover:bg-secondary-container hover:text-on-secondary-container transition-colors" href="/services/business-registration">
                  {t.btnStruct}
                </Link>
                <Link className="px-5 py-2 bg-surface-container-highest text-on-surface text-sm rounded hover:bg-secondary-container hover:text-on-secondary-container transition-colors" href="/services/free-zones">
                  {t.btnScale}
                </Link>
                <Link className="px-5 py-2 bg-surface-container-highest text-on-surface text-sm rounded hover:bg-secondary-container hover:text-on-secondary-container transition-colors" href="/services/ma-advisory">
                  {t.btnAcquire}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-24" id="catalog">
        <div className="mb-20">
          <h2 className="font-headline text-4xl text-primary tracking-tight mb-6">{t.ledgerTitle}</h2>
          <div className="w-24 h-1 bg-secondary mb-6"></div>
          <p className="text-on-surface-variant text-lg max-w-3xl font-light">{t.ledgerLead}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-min">
          <div className="md:col-span-8 bg-surface-container-lowest p-10 md:p-14 rounded shadow-sm border border-outline-variant/10 relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 opacity-5">
              <ClipboardIcon className="h-[200px] w-[200px] text-primary" />
            </div>
            <div className="flex items-start justify-between mb-12 relative z-10">
              <div>
                <span className="text-secondary font-semibold tracking-widest text-sm uppercase mb-3 block">{t.fTag}</span>
                <h3 className="font-headline text-3xl text-primary">{t.fMain}</h3>
              </div>
              <ArrowRightIcon className="h-8 w-8 text-outline transition-colors group-hover:text-secondary" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
              <div className="border-b border-outline-variant/20 pb-4">
                <h4 className="font-medium text-primary mb-2 text-lg">{t.efTitle}</h4>
                <p className="text-sm text-on-surface-variant font-light">{t.efDesc}</p>
              </div>
              <div className="border-b border-outline-variant/20 pb-4">
                <h4 className="font-medium text-primary mb-2 text-lg">{t.hsTitle}</h4>
                <p className="text-sm text-on-surface-variant font-light">{t.hsDesc}</p>
              </div>
              <div className="border-b border-outline-variant/20 pb-4">
                <h4 className="font-medium text-primary mb-2 text-lg">{t.nsTitle}</h4>
                <p className="text-sm text-on-surface-variant font-light">{t.nsDesc}</p>
              </div>
              <div className="border-b border-outline-variant/20 pb-4">
                <h4 className="font-medium text-primary mb-2 text-lg">{t.baTitle}</h4>
                <p className="text-sm text-on-surface-variant font-light">{t.baDesc}</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 bg-primary text-on-primary p-10 md:p-14 rounded shadow-md relative overflow-hidden flex flex-col group">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary-container to-primary z-0"></div>
            <div className="relative z-10 flex-grow">
              <span className="text-secondary-container font-semibold tracking-widest text-sm uppercase mb-3 block">{t.oTag}</span>
              <h3 className="font-headline text-3xl text-on-primary mb-8">{t.oMain}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-on-primary mb-1">{t.aifcTitle}</h4>
                  <p className="text-sm text-inverse-primary/80 font-light">{t.aifcDesc}</p>
                </div>
                <div>
                  <h4 className="font-medium text-on-primary mb-1">{t.htpTitle}</h4>
                  <p className="text-sm text-inverse-primary/80 font-light">{t.htpDesc}</p>
                </div>
                <div>
                  <h4 className="font-medium text-on-primary mb-1">{t.trcTitle}</h4>
                  <p className="text-sm text-inverse-primary/80 font-light">{t.trcDesc}</p>
                </div>
              </div>
            </div>
            <div className="relative z-10 mt-12 pt-8 border-t border-inverse-primary/20">
              <Link className="text-secondary-container hover:text-on-primary transition-colors text-sm font-medium flex items-center gap-2" href="/packages">
                {t.viewTax} <TrendingFlatIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="md:col-span-6 bg-surface-container-lowest p-10 rounded shadow-sm border border-outline-variant/10 group">
            <span className="text-secondary font-semibold tracking-widest text-sm uppercase mb-3 block">{t.cTag}</span>
            <h3 className="font-headline text-2xl text-primary mb-8">{t.cMain}</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <h4 className="font-medium text-primary text-sm">{t.cdTitle}</h4>
                  <p className="text-xs text-on-surface-variant mt-1">{t.cdDesc}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <h4 className="font-medium text-primary text-sm">{t.bkTitle}</h4>
                  <p className="text-xs text-on-surface-variant mt-1">{t.bkDesc}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <h4 className="font-medium text-primary text-sm">{t.raTitle}</h4>
                  <p className="text-xs text-on-surface-variant mt-1">{t.raDesc}</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:col-span-6 bg-surface-container-lowest p-10 rounded shadow-sm border border-outline-variant/10 group">
            <span className="text-secondary font-semibold tracking-widest text-sm uppercase mb-3 block">{t.gTag}</span>
            <h3 className="font-headline text-2xl text-primary mb-8">{t.gMain}</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <HandshakeIcon className="mt-0.5 h-5 w-5 shrink-0 text-outline" />
                <div>
                  <h4 className="font-medium text-primary text-sm">{t.ddTitle}</h4>
                  <p className="text-xs text-on-surface-variant mt-1">{t.ddDesc}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <GavelIcon className="mt-0.5 h-5 w-5 shrink-0 text-outline" />
                <div>
                  <h4 className="font-medium text-primary text-sm">{t.pmTitle}</h4>
                  <p className="text-xs text-on-surface-variant mt-1">{t.pmDesc}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <AdminPanelIcon className="mt-0.5 h-5 w-5 shrink-0 text-outline" />
                <div>
                  <h4 className="font-medium text-primary text-sm">{t.csTitle}</h4>
                  <p className="text-xs text-on-surface-variant mt-1">{t.csDesc}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24">
        <div className="mb-12">
          <h2 className="font-headline text-4xl text-primary tracking-tight mb-4">{directory.title}</h2>
          <p className="text-on-surface-variant max-w-3xl">{directory.lead}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="bg-surface-container-low p-8 rounded border border-outline-variant/15 hover:border-secondary/40 hover:-translate-y-0.5 transition-all"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-secondary mb-3">{service.category}</p>
              <h3 className="font-headline text-2xl text-primary mb-4">{service.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{service.summary}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary">
                {directory.cta} <ArrowRightIcon className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary-container text-on-primary-container py-24 relative overflow-hidden" id="consultation">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <svg className="w-full h-full fill-current text-white" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="0,100 100,0 100,100" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline text-4xl text-on-primary tracking-tight mb-4">{t.dialogueTitle}</h2>
            <p className="text-inverse-primary font-light text-lg">{t.dialogueLead}</p>
          </div>
          <ServicesContactForm locale={locale} labels={formLabels} />
        </div>
      </section>
    </main>
  );
}
