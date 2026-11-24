import Link from "next/link";
import type { Metadata } from "next";
import { empresa } from "@/config/empresa";
import { servicos } from "@/content/servicos";
import { meta, schemaBreadcrumb, schemaPagina } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Titulo } from "@/components/ui/Titulo";
import { Migalhas, CabecaSecao, ChamadaFinal } from "@/components/ui/Blocos";

const descricao =
  "A Máxima Encanador atende Curitiba, São José dos Pinhais, Pinhais, Colombo, Araucária, Almirante Tamandaré, Fazenda Rio Grande e Campo Largo, 24 horas.";

export const metadata: Metadata = meta({ titulo: "Encanador em Curitiba e região metropolitana", descricao, caminho: "/area-de-atendimento" });

const migalhas = [
  { nome: "Início", caminho: "/" },
  { nome: "Onde atendemos", caminho: "/area-de-atendimento" },
];

export default function Area() {
  const [principal, ...outras] = empresa.cidadesAtendidas;
  return (
    <>
      <JsonLd data={[schemaPagina(`Área de atendimento · ${empresa.nome}`, "/area-de-atendimento", descricao), schemaBreadcrumb(migalhas)]} />

      <section className="escuro brilho grao overflow-hidden" aria-labelledby="titulo-pagina">
        <div className="wrap pb-20 pt-32 md:pb-28 md:pt-40">
          <Migalhas itens={migalhas} claro />
          <p className="rotulo entra mt-10" style={{ ["--d" as string]: "0.05s" }}>
            {empresa.cidadesAtendidas.length} cidades · atendimento no local
          </p>
          <Titulo
            as="h1"
            id="titulo-pagina"
            imediato
            texto="Encanador em Curitiba e região metropolitana."
            destaque="região metropolitana."
            className="display mt-6 max-w-5xl text-[clamp(3rem,8.4vw,7rem)]"
          />
          <p className="lead entra mt-8 max-w-2xl text-nevoa" style={{ ["--d" as string]: "0.5s" }}>
            A Máxima vai até a sua casa, condomínio ou empresa{empresa.atende24h ? ", a qualquer hora do dia ou da noite" : ""}.
            Não existe loja para levar peça: o atendimento é sempre no local do serviço.
          </p>
        </div>
      </section>

      <section aria-labelledby="titulo-cidades" className="py-20 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <CabecaSecao rotulo="Cidades atendidas" id="titulo-cidades" titulo="Onde a Máxima chega" destaque="chega" className="lg:col-span-4" />
          <div className="lg:col-span-8">
            <p className="font-display text-[clamp(3.4rem,10vw,7.5rem)] italic leading-none text-cobre-escuro" data-surge>
              {principal}
            </p>
            <ul className="mt-8 grid border-t border-linha sm:grid-cols-2">
              {outras.map((c) => (
                <li key={c} data-surge className="flex items-baseline justify-between border-b border-linha py-5 sm:odd:pr-8 sm:even:pl-8">
                  <span className="font-display text-[clamp(1.8rem,3.6vw,2.6rem)] leading-none">{c}</span>
                  <span className="font-mono text-xs text-musgo">PR</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-servicos-area" className="papel border-t border-linha py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <CabecaSecao rotulo="Em todas elas" id="titulo-servicos-area" titulo="Os mesmos serviços" className="lg:col-span-4">
            <p className="mt-6 text-musgo">Todos os serviços valem para todas as cidades da lista.</p>
          </CabecaSecao>
          <ul className="flex flex-wrap content-start gap-3 lg:col-span-8">
            {servicos.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicos/${s.slug}`}
                  className="inline-flex min-h-12 items-center rounded-full border border-linha bg-osso px-6 font-medium transition-colors hover:border-cobre hover:text-cobre-escuro"
                >
                  {s.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ChamadaFinal />
    </>
  );
}
