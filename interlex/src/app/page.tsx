import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import { HomeContactForm } from "@/components/forms/HomeContactForm";
import { getLocale } from "@/lib/i18n/server";
import { homeFormLabels } from "@/lib/i18n/messages/forms";
import { homeMeta, homeMessages } from "@/lib/i18n/messages/home";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return homeMeta[locale];
}

export default async function Home() {
  const locale = await getLocale();
  const t = homeMessages[locale];
  const form = homeFormLabels[locale];

  return (
    <>
      <main className="pt-28">
        <section className="relative min-h-[751px] flex items-center bg-surface-container-low overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              alt=""
              className="w-full h-full object-cover opacity-20 mix-blend-multiply"
              fill
              priority
              sizes="100vw"
              src="/images/hero/home-hero.jpg"
            />
          </div>
          <div className="max-w-7xl mx-auto px-12 relative z-10 w-full">
            <div className="max-w-3xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="h-[1px] w-12 bg-secondary"></div>
                <span className="font-label text-sm tracking-widest text-secondary font-medium uppercase">
                  {t.heroEyebrow}
                </span>
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-medium tracking-tight text-primary leading-tight mb-8">
                {t.heroTitle1} <br />
                <span className="text-on-surface-variant">{t.heroTitle2}</span>
              </h1>
              <p className="font-body text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">{t.heroLead}</p>
              <div className="flex flex-col sm:flex-row gap-6">
                <button className="bg-primary text-on-primary px-8 py-4 font-label text-sm uppercase tracking-wider hover:bg-on-primary-fixed transition-colors">
                  {t.ctaEngage}
                </button>
                <button className="text-primary border-b border-secondary pb-1 font-label text-sm uppercase tracking-wider hover:text-secondary transition-colors inline-flex items-center gap-2">
                  {t.ctaExplore} <ArrowRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-outline-variant/20 py-12">
              <div className="flex flex-col">
                <span className="font-headline text-4xl text-primary mb-2">12+</span>
                <span className="font-label text-sm text-on-surface-variant uppercase tracking-wider">{t.mPractice}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-4xl text-primary mb-2">$2B+</span>
                <span className="font-label text-sm text-on-surface-variant uppercase tracking-wider">{t.mMa}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-4xl text-primary mb-2">350+</span>
                <span className="font-label text-sm text-on-surface-variant uppercase tracking-wider">{t.mEntities}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-4xl text-primary mb-2">2</span>
                <span className="font-label text-sm text-on-surface-variant uppercase tracking-wider">{t.mJur}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-12">
            <div className="grid md:grid-cols-12 gap-16">
              <div className="md:col-span-4">
                <h2 className="font-headline text-4xl text-primary tracking-tight mb-6">
                  {t.disciplinesLine1}
                  {t.disciplinesLine2 ? (
                    <>
                      <br />
                      {t.disciplinesLine2}
                    </>
                  ) : null}
                </h2>
                <p className="font-body text-on-surface-variant mb-8">{t.disciplinesLead}</p>
              </div>
              <div className="md:col-span-8 flex flex-col gap-12">
                <div className="flex gap-8 group">
                  <div className="font-headline text-3xl text-secondary opacity-50 font-light">01</div>
                  <div>
                    <h3 className="font-headline text-2xl text-primary mb-4 group-hover:text-secondary transition-colors">
                      {t.d1Title}
                    </h3>
                    <p className="font-body text-on-surface-variant max-w-xl">{t.d1Body}</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="font-headline text-3xl text-secondary opacity-50 font-light">02</div>
                  <div>
                    <h3 className="font-headline text-2xl text-primary mb-4 group-hover:text-secondary transition-colors">
                      {t.d2Title}
                    </h3>
                    <p className="font-body text-on-surface-variant max-w-xl">{t.d2Body}</p>
                  </div>
                </div>
                <div className="flex gap-8 group">
                  <div className="font-headline text-3xl text-secondary opacity-50 font-light">03</div>
                  <div>
                    <h3 className="font-headline text-2xl text-primary mb-4 group-hover:text-secondary transition-colors">
                      {t.d3Title}
                    </h3>
                    <p className="font-body text-on-surface-variant max-w-xl">{t.d3Body}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface">
          <div className="max-w-7xl mx-auto px-12">
            <div className="mb-16">
              <h2 className="font-headline text-4xl text-primary tracking-tight">{t.jurSection}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-surface-container-lowest p-12 border border-outline-variant/15 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-surface-container-high rounded-full -translate-y-1/2 translate-x-1/2 opacity-20"></div>
                <h3 className="font-headline text-3xl text-primary mb-6">{t.kzCardTitle}</h3>
                <p className="font-label text-sm text-secondary uppercase tracking-widest mb-8">{t.kzTag}</p>
                <ul className="space-y-6 font-body text-on-surface-variant">
                  <li className="flex items-start gap-4">
                    <CheckIcon className="mt-1 h-4 w-4 text-secondary" />
                    <span>{t.kzB1}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckIcon className="mt-1 h-4 w-4 text-secondary" />
                    <span>{t.kzB2}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckIcon className="mt-1 h-4 w-4 text-secondary" />
                    <span>{t.kzB3}</span>
                  </li>
                </ul>
              </div>
              <div className="bg-primary text-on-primary p-12 relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary-container rounded-full translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <h3 className="font-headline text-3xl text-surface mb-6">{t.geCardTitle}</h3>
                <p className="font-label text-sm text-secondary-container uppercase tracking-widest mb-8">{t.geTag}</p>
                <ul className="space-y-6 font-body text-on-primary/80">
                  <li className="flex items-start gap-4">
                    <CheckIcon className="mt-1 h-4 w-4 text-secondary-container" />
                    <span>{t.geB1}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckIcon className="mt-1 h-4 w-4 text-secondary-container" />
                    <span>{t.geB2}</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <CheckIcon className="mt-1 h-4 w-4 text-secondary-container" />
                    <span>{t.geB3}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 bg-surface-container-high border-t border-outline-variant/10">
          <div className="max-w-4xl mx-auto px-12">
            <div className="text-center mb-16">
              <h2 className="font-headline text-4xl text-primary tracking-tight mb-4">{t.consultTitle}</h2>
              <p className="font-body text-on-surface-variant">{t.consultLead}</p>
            </div>
            <HomeContactForm locale={locale} labels={form} />
          </div>
        </section>
      </main>
    </>
  );
}
