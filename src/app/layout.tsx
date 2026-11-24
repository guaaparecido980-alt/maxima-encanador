import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { empresa, siteUrl, linkWhatsApp, linkTelefone, telefoneFormatado } from "@/config/empresa";
import { Cabecalho } from "@/components/layout/Cabecalho";
import { Rodape } from "@/components/layout/Rodape";
import { BarraContato } from "@/components/layout/BarraContato";
import { JsonLd } from "@/components/seo/JsonLd";
import { schemaEmpresa, schemaWebsite } from "@/lib/seo";
import { Rastreamento } from "@/components/analytics/Rastreamento";
import { Consentimento } from "@/components/analytics/Consentimento";
import { Movimento } from "@/components/movimento/Movimento";
import { servicos } from "@/content/servicos";
import { Marca } from "@/components/marca/Marca";

/** Site 100% estático (output: "export"): HTML pronto gerado no build. */

const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"], // "latin" já cobre os acentos do português
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  // "optional": se não chegar rápido, usa a reserva ajustada (sem atrasar a pintura)
  display: "optional",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

/** Endereço provisório (github.io) não deve ser indexado: o site oficial será o domínio próprio. */
const indexar = process.env.NEXT_PUBLIC_NOINDEX !== "1";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl + "/"),
  title: {
    default: `Encanador em Curitiba 24 horas | ${empresa.nome}`,
    template: `%s | ${empresa.nome}`,
  },
  description:
    "Encanador em Curitiba e região: vazamentos, reparos hidráulicos, desentupimento, caixa de gordura e hidrojateamento. Atendimento 24h com preço antes do serviço.",
  applicationName: empresa.nome,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: { locale: "pt_BR", type: "website", siteName: empresa.nome },
  robots: indexar ? { index: true, follow: true } : { index: false, follow: false },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#0d1714",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

/** Marca o <html> com .mov antes da pintura quando o movimento é permitido. */
const scriptMovimento = `try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('mov')}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: scriptMovimento }} />
      </head>
      <body className="antialiased">
        <a href="#conteudo" className="sr-only-focusable fixed left-3 top-3 z-[100] rounded-full bg-cobre-claro px-5 py-3 font-semibold text-tinta">
          Pular para o conteúdo
        </a>
        <Cabecalho
          logoClaro={<Marca claro />}
          logoEscuro={<Marca />}
          servicos={servicos.map((s) => ({ slug: s.slug, nomeCurto: s.nomeCurto }))}
          whats={linkWhatsApp()}
          tel={linkTelefone()}
          telTexto={telefoneFormatado(empresa.telefone)}
        />
        <main id="conteudo">{children}</main>
        <Rodape />
        <BarraContato />
        <JsonLd data={[schemaEmpresa(), schemaWebsite()]} />
        <Movimento />
        <Rastreamento />
        <Consentimento />
      </body>
    </html>
  );
}
