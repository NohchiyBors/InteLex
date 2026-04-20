import type { Metadata } from "next";
import { HomeContactForm } from "@/components/forms/HomeContactForm";
import { getLocale } from "@/lib/i18n/server";
import { homeFormLabels } from "@/lib/i18n/messages/forms";
import { contactsMeta, contactsMessages } from "@/lib/i18n/messages/contacts";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return contactsMeta[locale];
}

export default async function ContactsPage() {
  const locale = await getLocale();
  const t = contactsMessages[locale];
  const form = homeFormLabels[locale];

  return (
    <main className="pt-32 pb-24 flex-grow">
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-32">
        <div className="max-w-3xl mb-16">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-primary leading-tight mb-8">
            {t.h1Line1}
            <br />
            {t.h1Line2}
          </h1>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed">{t.lead}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="bg-surface-container-low p-10 border border-outline-variant/20 hover:-translate-y-1 transition-transform duration-500 rounded">
              <h3 className="font-headline text-2xl text-primary mb-4">{t.kzHub}</h3>
              <p className="font-label text-xs text-secondary tracking-widest uppercase mb-4">{t.kzJur}</p>
              <div className="text-on-surface-variant font-body space-y-2">
                <p>Mangilik Yel Avenue, 55/18</p>
                <p>Astana International Financial Centre</p>
                <p>010000, Astana, Kazakhstan</p>
                <div className="pt-4 mt-4 border-t border-outline-variant/20">
                  <p className="font-medium text-primary">
                    {t.emailLabel} astana@interlex.kz
                  </p>
                  <p className="font-medium text-primary">
                    {t.telLabel} +7 (7172) 123-456
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-on-primary p-10 shadow-lg hover:-translate-y-1 transition-transform duration-500 rounded relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 rounded-bl-full pointer-events-none"></div>
              <h3 className="font-headline text-2xl text-on-primary mb-4 relative z-10">{t.geHub}</h3>
              <p className="font-label text-xs text-secondary-container tracking-widest uppercase mb-4 relative z-10">{t.geNode}</p>
              <div className="text-inverse-primary/80 font-body space-y-2 relative z-10">
                <p>Rustaveli Avenue, 12</p>
                <p>Tbilisi Free Industrial Zone (HQ)</p>
                <p>0108, Tbilisi, Georgia</p>
                <div className="pt-4 mt-4 border-t border-inverse-primary/20">
                  <p className="font-medium text-surface">
                    {t.emailLabel} tbilisi@interlex.ge
                  </p>
                  <p className="font-medium text-surface">
                    {t.telLabel} +995 32 212-34-56
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-surface-container-lowest p-10 md:p-14 shadow-sm border border-outline-variant/10 rounded">
            <h2 className="font-headline text-3xl text-primary tracking-tight mb-8">{t.directTitle}</h2>
            <HomeContactForm locale={locale} labels={form} />
          </div>
        </div>
      </section>
    </main>
  );
}
