/**
 * Препрод-домены вида stage.interlex.kz / stage.interlex.ge (не индексировать поиском).
 */

export function normalizeRequestHost(host: string | null | undefined): string {
  return host?.toLowerCase().split(":")[0]?.trim() ?? "";
}

/** Хост запроса с учётом x-forwarded-host (прокси / Coolify). */
export function resolveRequestHost(headerStore: { get(name: string): string | null | undefined }) {
  const forwarded = headerStore.get("x-forwarded-host");
  const first = forwarded?.split(",")[0]?.trim();
  const raw = first || headerStore.get("host") || "";
  return normalizeRequestHost(raw);
}

/** true для host вроде stage.interlex.* */
export function isStagingHost(normalizedHost: string): boolean {
  return normalizedHost.startsWith("stage.interlex.");
}
