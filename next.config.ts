import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estático para o GitHub Pages: `npm run build` gera a pasta out/
  output: "export",
  // Endereço provisório em subpasta (github.io/maxima-encanador). Vazio quando o domínio próprio estiver ligado.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
