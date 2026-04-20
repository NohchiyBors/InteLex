import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getHtmlLang } from "@/lib/i18n";
import { getLocale } from "@/lib/i18n/server";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "InterLex",
    template: "%s",
  },
  applicationName: "InterLex",
  description: "Cross-border legal and business advisory in Kazakhstan and Georgia.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={getHtmlLang(locale)} className="antialiased light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body selection:bg-secondary-container selection:text-on-secondary-container min-h-screen flex flex-col">
        <Header locale={locale} />
        <div className="flex-grow">{children}</div>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
