import { cookies, headers } from "next/headers";
import { getDomainDefaultLocale, normalizeLocale, type Locale } from "@/lib/i18n";
import { resolveRequestHost } from "@/lib/staging";

export async function getLocale(): Promise<Locale> {
  const jar = await cookies();
  const savedLocale = jar.get("interlex_locale")?.value;
  if (savedLocale) return normalizeLocale(savedLocale);

  const headerStore = await headers();
  return getDomainDefaultLocale(resolveRequestHost(headerStore));
}
