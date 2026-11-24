import Link from "next/link";
import type { Metadata } from "next";
import { empresa } from "@/config/empresa";
import { servicos } from "@/content/servicos";
import { meta, schemaBreadcrumb, schemaPagina } from "@/lib/seo";
import { siteUrl } from "@/config/empresa";
import { JsonLd } from "@/components/seo/JsonLd";
import { Titulo } from "@/components/ui/Titulo";
import { Migalhas, ChamadaFinal } from "@/components/ui/Blocos";
import { Seta } from "@/components/ui/Botoes";
import { IconeServico } from "@/components/ilustracoes/Icones";

const descricao =
  "Serviços da Máxima Encanador em Curitiba e região: vazamentos, reparos hidráulicos, desentupimento, limpeza de caixa de gordura e hidrojateamento. 24h.";

export const metadata: Metadata = meta({ titulo: "Serviços de encanador em Curitiba", descricao, caminho: "/servicos" });

const migalhas = [
  { nome: "Início", caminho: "/" },
  { nome: "Serviços", caminho: "/servicos" },
];

export default function Servicos() {
  return (
    <>
      <JsonLd
        data={[
          schemaPagina(`Serviços · ${empresa.nome}`, "/servicos", descricao),
          schemaBreadcrumb(migalhas),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: servicos.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: s.nome,
              url: `${siteUrl}/servicos/${s.slug}`,
            })),
          },
        ]}
      />

      <section className="escuro brilho grao overflow-hidden" aria-labelledby="titulo-pagina">
        <div className="wrap pb-20 pt-32 md:pb-28 md:pt-40">
          <Migalhas itens={migalhas} claro />
          <p className="rotulo entra mt-10" style={{ ["--d" as string]: "0.05s" }}>
            {servicos.length} serviços · {empresa.cidadePrincipal.nome} e região
          </p>
          <Titulo
            as="h1"
            id="titulo-pagina"
            imediato
            texto="Do pingo na torneira à rede do prédio."
            destaque="à rede do prédio."
            className="display mt-6 max-w-5xl text-[clamp(3rem,8.4vw,7rem)]"
          />
          <p className="lead entra mt-8 max-w-2xl text-nevoa" style={{ ["--d" as string]: "0.5s" }}>
            Cada serviço tem uma página com os sinais do problema, como a Máxima trabalha e as dúvidas mais comuns. Escolha o
            seu.
          </p>
        </div>
      </section>

      <section aria-label="Lista de serviços" className="py-16 md:py-24">
        <ol className="wrap">
          {servicos.map((s, i) => (
            <li key={s.slug} data-surge className="border-b border-linha first:border-t">
              <Link href={`/servicos/${s.slug}`} className="group grid items-center gap-6 py-10 md:grid-cols-12 md:py-12">
                <span className="font-mono text-sm text-musgo md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <span className="md:col-span-6">
                  <h2 className="font-display text-[clamp(2.3rem,5vw,4rem)] leading-none text-tinta transition-colors duration-500 group-hover:text-cobre-escuro">
                    {s.nomeCurto}
                  </h2>
                  <span className="mt-3 block max-w-xl text-musgo">{s.resumo}</span>
                </span>
                <span className="hidden md:col-span-3 md:flex md:justify-center">
                  <IconeServico
                    icone={s.icone}
                    className="h-20 w-20 text-cobre transition-transform duration-700 ease-[var(--ease-fluxo)] group-hover:-rotate-6 group-hover:scale-110"
                  />
                </span>
                <span className="flex items-center gap-3 font-semibold text-cobre-escuro md:col-span-2 md:justify-end">
                  Ver serviço
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-linha transition-colors duration-500 group-hover:border-cobre group-hover:bg-cobre-forte group-hover:text-white">
                    <Seta />
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <ChamadaFinal />
    </>
  );
}
