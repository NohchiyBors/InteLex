import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { resolveRequestHost, isStagingHost } from "@/lib/staging";
import { getServices } from "@/lib/services";

export const dynamic = "force-dynamic";

const DEFAULT_BASE_URL = "https://interlex.kz";
const PRODUCTION_HOSTS = ["interlex.kz", "interlex.ge"] as const;

type SupportedHost = (typeof PRODUCTION_HOSTS)[number];

type RouteConfig = {
  path: string;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
  priority: number;
};

const STATIC_ROUTES: RouteConfig[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/services", changeFrequency: "weekly", priority: 0.95 },
  { path: "/packages", changeFrequency: "monthly", priority: 0.8 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.85 },
  { path: "/contacts", changeFrequency: "monthly", priority: 0.7 },
  { path: "/kz", changeFrequency: "weekly", priority: 0.9 },
  { path: "/ge", changeFrequency: "weekly", priority: 0.9 },
];

function isProductionHost(host: string): host is SupportedHost {
  return PRODUCTION_HOSTS.includes(host as SupportedHost);
}

function getBaseUrl(host: string) {
  if (isProductionHost(host)) {
    return `https://${host}`;
  }

  const configured =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    DEFAULT_BASE_URL;

  try {
    return new URL(configured).origin;
  } catch {
    return DEFAULT_BASE_URL;
  }
}

function joinUrl(baseUrl: string, path: string) {
  return path === "/" ? baseUrl : `${baseUrl}${path}`;
}

function getAlternateLanguageUrls(path: string) {
  return {
    ru: joinUrl("https://interlex.kz", path),
    en: joinUrl("https://interlex.ge", path),
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headerStore = await headers();
  const host = resolveRequestHost(headerStore);

  if (isStagingHost(host)) {
    return [];
  }

  const baseUrl = getBaseUrl(host);
  const lastModified = new Date();
  const serviceRoutes: RouteConfig[] = getServices("en").map((service) => ({
    path: `/services/${service.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...STATIC_ROUTES, ...serviceRoutes].map((route) => ({
    url: joinUrl(baseUrl, route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: getAlternateLanguageUrls(route.path),
    },
  }));
}
