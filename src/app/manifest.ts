export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { empresa } from "@/config/empresa";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: empresa.nome,
    short_name: empresa.nomeCurto,
    description: "Encanador em Curitiba e região metropolitana, 24 horas.",
    start_url: "./",
    display: "browser",
    background_color: "#0d1714",
    theme_color: "#0d1714",
    lang: "pt-BR",
    icons: [
      { src: "icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
