import path from "path";
import { fileURLToPath } from "url";
import type { NextConfig } from "next";

/** Каталог приложения (`interlex/`): фиксирует корень Turbopack при втором `package-lock.json` в монорепо. */
const turbopackRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  output: "standalone",
  poweredByHeader: false,
  turbopack: {
    root: turbopackRoot,
  },
};

export default nextConfig;
