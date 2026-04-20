"use server";

import { cookies } from "next/headers";
import { locales, type Locale } from "@/lib/i18n";

const COOKIE = "interlex_locale";

export async function setLocale(locale: string) {
  if (!locales.includes(locale as Locale)) return;
  const jar = await cookies();
  jar.set(COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
