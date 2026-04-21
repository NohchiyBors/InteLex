import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getHtmlLang } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import { isStagingHost, resolveRequestHost } from "@/lib/staging";
import "./globals.css";

function getMetadataBase() {
  const rawUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://interlex.kz";

  try {
    return new URL(rawUrl);
  } catch {
    return new URL("https://interlex.kz");
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const host = resolveRequestHost(headerStore);

  const base: Metadata = {
    title: {
      default: "InterLex",
      template: "%s",
    },
    applicationName: "InterLex",
    description: "Cross-border legal and business advisory in Kazakhstan and Georgia.",
    metadataBase: getMetadataBase(),
  };

  if (isStagingHost(host)) {
    return {
      ...base,
      robots: {
        index: false,
        follow: false,
        googleBot: { index: false, follow: false },
      },
    };
  }

  return base;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const host = resolveRequestHost(headerStore);
  const isKzProductionHost = host === "interlex.kz";
  const locale = await getLocale();

  return (
    <html lang={getHtmlLang(locale)} className="antialiased light">
      <body className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex flex-col">
        {isKzProductionHost ? (
          <>
            <Script
              id="google-analytics-kz-loader"
              src="https://www.googletagmanager.com/gtag/js?id=G-0PB5VDR3F9"
              strategy="beforeInteractive"
            />
            <Script id="google-analytics-kz" strategy="beforeInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-0PB5VDR3F9');`}
            </Script>
          </>
        ) : null}
        <Header locale={locale} />
        <div className="flex-grow">{children}</div>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
