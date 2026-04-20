import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getLocale } from "@/lib/i18n/server";
import { getServiceBySlug, getServiceBySlugAnyLocale } from "@/lib/services";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const services = [
    "business-registration",
    "free-zones",
    "accounting-legal",
    "corporate-management",
    "turnkey-company",
    "banking-support",
    "investor-gr",
    "ma-advisory",
    "due-diligence",
  ];

  return services.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlugAnyLocale(slug);

  if (!service) {
    return {
      title: "Service | InterLex",
    };
  }

  return {
    title: `${service.title} | InterLex`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const locale = await getLocale();
  const { slug } = await params;
  const service = getServiceBySlug(locale, slug);

  if (!service) notFound();

  const chrome =
    locale === "ru"
      ? {
          back: "Каталог услуг",
          audience: "Для кого подходит",
          included: "Что входит",
          process: "Как мы работаем",
        }
      : locale === "zh"
        ? {
            back: "服务目录",
            audience: "适用对象",
            included: "服务内容",
            process: "工作流程",
          }
        : {
            back: "Services Catalog",
            audience: "Who it is for",
            included: "What is included",
            process: "How we work",
          };

  return (
    <main className="pt-32 pb-24">
      <section className="max-w-6xl mx-auto px-6 md:px-12 pt-12 pb-20">
        <div className="mb-6">
          <Link href="/services" className="text-sm uppercase tracking-[0.24em] text-secondary hover:text-primary transition-colors">
            {chrome.back}
          </Link>
        </div>
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-secondary mb-4">{service.category}</p>
          <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-tight mb-6">{service.title}</h1>
          <p className="text-lg md:text-xl text-on-surface-variant leading-relaxed">{service.summary}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-20">
        <div className="grid gap-8 md:grid-cols-3">
          <article className="bg-surface-container-low p-8 rounded border border-outline-variant/15">
            <h2 className="font-headline text-2xl text-primary mb-5">{chrome.audience}</h2>
            <ul className="space-y-4 text-on-surface-variant">
              {service.forWhom.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5">check</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="bg-surface-container-low p-8 rounded border border-outline-variant/15">
            <h2 className="font-headline text-2xl text-primary mb-5">{chrome.included}</h2>
            <ul className="space-y-4 text-on-surface-variant">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="material-symbols-outlined text-secondary text-base mt-0.5">inventory_2</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="bg-primary p-8 rounded text-on-primary">
            <h2 className="font-headline text-2xl mb-5">{chrome.process}</h2>
            <ol className="space-y-5">
              {service.process.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="font-headline text-secondary-container text-2xl">{String(index + 1).padStart(2, "0")}</span>
                  <span className="text-on-primary/85">{item}</span>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </section>
    </main>
  );
}
