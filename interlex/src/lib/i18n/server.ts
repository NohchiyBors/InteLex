import { cookies, headers } from "next/headers";
import { getDomainDefaultLocale, normalizeLocale, type Locale } from "@/lib/i18n";

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  const savedLocale = jar.get("interlex_locale")?.value;
  if (savedLocale) return normalizeLocale(savedLocale);

  const headerStore = await headers();
  const forwarded = headerStore.get("x-forwarded-host");
  const hostFromProxy = forwarded?.split(",")[0]?.trim();
  const host = hostFromProxy || headerStore.get("host");
  return getDomainDefaultLocale(host);
}
