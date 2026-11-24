import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicos, getServico } from "@/content/servicos";
import { empresa, listaCidades } from "@/config/empresa";
import { meta, schemaBreadcrumb, schemaFaq, schemaPagina, schemaServico } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { VisualizacaoServico } from "@/components/analytics/VisualizacaoServico";
import { Titulo } from "@/components/ui/Titulo";
import { BotaoWhats, BotaoLigar, Seta } from "@/components/ui/Botoes";
import { CabecaSecao, Migalhas, ListaFaq, ChamadaFinal } from "@/components/ui/Blocos";
import { IconeServico } from "@/components/ilustracoes/Icones";

export function generateStaticParams() {
  return servicos.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/servicos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getServico(slug);
  if (!s) return {};
  return meta({ titulo: s.tituloSeo, descricao: s.descricaoSeo, caminho: `/servicos/${s.slug}` });
}

export default async function PaginaServico({ params }: PageProps<"/servicos/[slug]">) {
  const { slug } = await params;
  const s = getServico(slug);
  if (!s) notFound();

  const indice = servicos.findIndex((x) => x.slug === s.slug);
  const relacionados = s.relacionados.map(getServico).filter((x) => x !== undefined);
  const caminho = `/servicos/${s.slug}`;
  const migalhas = [
    { nome: "Início", caminho: "/" },
    { nome: "Serviços", caminho: "/servicos" },
    { nome: s.nomeCurto, caminho },
  ];

  return (
    <>
      <JsonLd data={[schemaPagina(s.h1, caminho, s.descricaoSeo), schemaServico(s), schemaBreadcrumb(migalhas), schemaFaq(s.faq)]} />
      <VisualizacaoServico servico={s.slug} />

      {/* Abertura */}
      <section className="escuro brilho grao relative overflow-hidden" aria-labelledby="titulo-pagina">
        <div className="wrap grid gap-12 pb-20 pt-32 md:pb-28 md:pt-40 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Migalhas itens={migalhas} claro />
            <p className="rotulo entra mt-10" style={{ ["--d" as string]: "0.05s" }}>
              {String(indice + 1).padStart(2, "0")} · {s.nome}
            </p>
            <Titulo
              as="h1"
              id="titulo-pagina"
              imediato
              texto={s.h1}
              destaque={s.destaque}
              className="display mt-6 text-[clamp(3rem,8.4vw,7rem)]"
            />
            <p className="lead entra mt-8 max-w-2xl text-nevoa" style={{ ["--d" as string]: "0.5s" }}>
              {s.chamada}
            </p>
            <div className="entra mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap" style={{ ["--d" as string]: "0.7s" }}>
              <BotaoWhats local="topo-servico" variante="claro" mensagem={s.mensagem} servico={s.slug} />
              <BotaoLigar local="topo-servico" className="text-osso" />
            </div>
          </div>
          <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
            <div className="entra grid aspect-square place-items-center rounded-full border border-linha-escura" style={{ ["--d" as string]: "0.4s" }}>
              <IconeServico icone={s.icone} className="h-1/2 w-1/2 text-cobre-claro" />
            </div>
          </div>
        </div>
      </section>

      {/* Sinais */}
      <section aria-labelledby="titulo-sinais" className="py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <CabecaSecao rotulo="Quando chamar" id="titulo-sinais" titulo="Sinais de que é hora" destaque="é hora" className="lg:col-span-4" />
          <ul className="grid gap-px overflow-hidden rounded-[2rem] border border-linha bg-linha sm:grid-cols-2 lg:col-span-8">
            {s.sinais.map((sinal, i) => (
              <li key={sinal} data-surge className="flex gap-4 bg-osso p-6 sm:p-7">
                <span className="font-mono text-sm text-cobre-escuro">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[1.05rem] text-grafite">{sinal}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Explicações */}
      <section aria-labelledby="titulo-entenda" className="papel border-y border-linha py-20 md:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <CabecaSecao rotulo="Entenda" id="titulo-entenda" titulo="O que está acontecendo" destaque="acontecendo" />
            </div>
          </div>
          <div className="relative lg:col-span-7 lg:col-start-6">
            <span className="tubo absolute bottom-0 left-0 top-0 hidden opacity-25 md:block" aria-hidden="true" />
            <span data-tubo className="tubo absolute bottom-0 left-0 top-0 hidden md:block" aria-hidden="true" />
            <div className="md:pl-14">
              {s.secoes.map((sec) => (
                <article key={sec.titulo} className="border-b border-linha py-9 first:pt-0 last:border-0" data-surge>
                  <h3 className="h3 text-tinta">{sec.titulo}</h3>
                  <p className="mt-4 max-w-2xl text-[1.08rem] text-musgo">{sec.texto}</p>
                </article>
              ))}
              {s.frentes && (
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {s.frentes.map((f) => (
                    <article key={f.nome} className="cartao p-6" data-surge>
                      <h3 className="font-display text-[1.6rem] italic leading-tight text-cobre-escuro">{f.nome}</h3>
                      <p className="mt-3 text-[0.98rem] text-musgo">{f.texto}</p>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Como fazemos */}
      <section aria-labelledby="titulo-etapas" className="py-20 md:py-28">
        <div className="wrap">
          <CabecaSecao rotulo="Como fazemos" id="titulo-etapas" titulo="Passo a passo do atendimento" destaque="atendimento" className="max-w-3xl" />
          <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {s.etapas.map((e, i) => (
              <li key={e.titulo} className="cartao relative overflow-hidden p-7" data-surge>
                <span className="font-display text-[4.2rem] italic leading-none text-cobre/25">{i + 1}</span>
                <h3 className="mt-4 text-[1.15rem] font-semibold text-tinta">{e.titulo}</h3>
                <p className="mt-2 text-[0.97rem] text-musgo">{e.texto}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
            <BotaoWhats local="meio-servico" mensagem={s.mensagem} servico={s.slug} />
            <BotaoLigar local="meio-servico" className="text-tinta" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="titulo-faq" className="papel border-t border-linha py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <CabecaSecao rotulo="Dúvidas" id="titulo-faq" titulo={`Perguntas sobre ${s.nomeCurto.toLowerCase()}`} className="lg:col-span-4" />
          <div className="lg:col-span-8">
            <ListaFaq perguntas={s.faq} />
          </div>
        </div>
      </section>

      {/* Relacionados + área */}
      <section aria-labelledby="titulo-relacionados" className="py-20 md:py-24">
        <div className="wrap">
          <h2 id="titulo-relacionados" className="rotulo">
            Também resolvemos
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {relacionados.map((r) => (
              <li key={r.slug}>
                <Link href={`/servicos/${r.slug}`} className="cartao group flex items-center gap-6 p-6 transition-colors hover:border-cobre sm:p-8">
                  <IconeServico icone={r.icone} className="h-12 w-12 shrink-0 text-cobre" />
                  <span className="flex-1">
                    <span className="h3 block text-tinta">{r.nomeCurto}</span>
                    <span className="mt-1 block text-[0.95rem] text-musgo">{r.resumo}</span>
                  </span>
                  <Seta className="shrink-0 text-cobre-escuro transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-musgo">
            {s.nome} em {listaCidades()}
            {empresa.atende24h ? ", 24 horas por dia." : "."}{" "}
            <Link href="/area-de-atendimento" className="link-sub font-semibold text-cobre-escuro">
              Ver área de atendimento
            </Link>
          </p>
        </div>
      </section>

      <ChamadaFinal mensagem={s.mensagem} servico={s.slug} />
    </>
  );
}
