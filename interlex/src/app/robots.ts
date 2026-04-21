import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { isStagingHost, resolveRequestHost } from "@/lib/staging";

/** Чтобы robots зависел от Host (stage vs prod). */
export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headerStore = await headers();
  const host = resolveRequestHost(headerStore);

  if (isStagingHost(host)) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: ["/"],
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  };
}
