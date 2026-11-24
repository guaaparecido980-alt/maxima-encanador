import Link from "next/link";
import type { Metadata } from "next";
import { empresa, listaCidades } from "@/config/empresa";
import { servicos } from "@/content/servicos";
import { etapasAtendimento, faqGeral, sintomas } from "@/content/geral";
import { meta, schemaFaq, schemaPagina } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Titulo } from "@/components/ui/Titulo";
import { BotaoWhats, BotaoLigar, Seta } from "@/components/ui/Botoes";
import { CabecaSecao, ListaFaq, ChamadaFinal } from "@/components/ui/Blocos";
import { CanoHero } from "@/components/ilustracoes/CanoHero";
import { Manometro, angulosEtapas } from "@/components/ilustracoes/Manometro";
import { IconeServico } from "@/components/ilustracoes/Icones";

const descricao =
  "Encanador em Curitiba e região, 24 horas: vazamentos, reparos hidráulicos, desentupimento, caixa de gordura e hidrojateamento. Preço combinado antes do serviço.";

export const metadata: Metadata = meta({
  titulo: `Encanador em Curitiba 24 horas | ${empresa.nome}`,
  descricao,
  caminho: "/",
  semSufixo: true,
});

function Gota({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 22" className={className} aria-hidden="true">
      <path d="M8 1C3.5 7.3 1 11 1 14a7 7 0 0 0 14 0c0-3-2.5-6.7-7-13Z" fill="currentColor" />
    </svg>
  );
}

export default function Inicio() {
  return (
    <>
      <JsonLd data={[schemaPagina(`${empresa.nome} · Encanador em Curitiba`, "/", descricao), schemaFaq(faqGeral)]} />

      {/* ───────── Abertura ───────── */}
      <section className="escuro brilho grao relative overflow-hidden" aria-labelledby="titulo-inicio">
        <div className="wrap grid min-h-[100svh] items-center gap-6 pb-14 pt-28 md:pt-32 lg:grid-cols-12 lg:gap-10 lg:pb-20">
          <div className="lg:col-span-7">
            <p className="rotulo entra" style={{ ["--d" as string]: "0.05s" }}>
              Encanador · {empresa.cidadePrincipal.nome} e região{empresa.atende24h ? " · 24 horas" : ""}
            </p>
            <Titulo
              as="h1"
              id="titulo-inicio"
              imediato
              texto="Encanador em Curitiba, a qualquer hora."
              destaque="a qualquer hora."
              className="display mt-7 text-[clamp(3.3rem,10.5vw,8.6rem)]"
            />
            <p className="lead entra mt-8 max-w-xl text-nevoa" style={{ ["--d" as string]: "0.55s" }}>
              Vazamento, cano estourado, torneira pingando ou entupimento. A Máxima acha a causa, passa o preço antes e só
              vai embora com a água correndo no lugar certo.
            </p>
            <div className="entra mt-10 flex flex-col gap-3 xs:flex-row xs:flex-wrap" style={{ ["--d" as string]: "0.75s" }}>
              <BotaoWhats local="hero" variante="claro" />
              <BotaoLigar local="hero" className="text-osso" />
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <CanoHero className="mx-auto w-[min(100%,26rem)] lg:w-full lg:max-w-[34rem]" />
          </div>
        </div>
        <div className="border-t border-linha-escura">
          <ul className="wrap grid gap-x-8 gap-y-3 py-6 font-mono text-[0.78rem] uppercase tracking-[0.12em] text-nevoa sm:grid-cols-3">
            {empresa.atende24h && (
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-agua" aria-hidden="true" /> Atende 24h, todos os dias
              </li>
            )}
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-cobre-claro" aria-hidden="true" /> Preço antes de começar
            </li>
            <li className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-patina-clara" aria-hidden="true" /> {empresa.cidadesAtendidas.length} cidades
              atendidas
            </li>
          </ul>
        </div>
      </section>

      {/* ───────── Sintomas (faixa em movimento) ───────── */}
      <section aria-labelledby="titulo-sintomas" className="faixa-pai overflow-hidden border-b border-linha py-14 md:py-20">
        <div className="wrap">
          <h2 id="titulo-sintomas" className="rotulo">
            Reconhece algum destes?
          </h2>
        </div>
        <div className="mt-8 overflow-hidden">
          <ul className="faixa items-center">
            {[0, 1].map((copia) =>
              sintomas.map((s) => (
                <li
                  key={`${copia}-${s}`}
                  className={`flex items-center gap-8 pr-8 font-display text-[clamp(2.4rem,6vw,5rem)] italic leading-none text-tinta ${copia ? "copia" : ""}`}
                  aria-hidden={copia ? true : undefined}
                >
                  {s}
                  <Gota className="h-6 w-5 shrink-0 text-cobre md:h-8 md:w-6" />
                </li>
              )),
            )}
          </ul>
        </div>
      </section>

      {/* ───────── Serviços (trilho horizontal no desktop, pilha no celular) ───────── */}
      <section data-trilho aria-labelledby="titulo-servicos" className="escuro grao relative overflow-clip bg-patina-escura">
        <div className="wrap flex min-h-[100svh] flex-col justify-center py-20 lg:py-14">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <CabecaSecao rotulo="Serviços" id="titulo-servicos" titulo="O que a Máxima resolve" destaque="resolve" className="max-w-2xl" />
            <Link href="/servicos" className="link-seta inline-flex items-center gap-3 font-semibold text-cobre-claro">
              Ver todos os serviços <Seta />
            </Link>
          </div>
          <ul data-trilho-faixa className="pilha mt-12 grid gap-4 lg:mt-14 lg:flex lg:w-max lg:gap-6">
            {servicos.map((s, i) => (
              <li key={s.slug} style={{ ["--i" as string]: i }} className="lg:static lg:w-[27rem]">
                <Link
                  href={`/servicos/${s.slug}`}
                  className="group flex h-full min-h-[17rem] flex-col lg:min-h-[22rem] rounded-[2rem] border border-white/8 bg-osso p-7 text-grafite shadow-[0_30px_60px_-30px_rgb(0_0_0/0.6)] transition-transform duration-700 ease-[var(--ease-fluxo)] hover:-translate-y-2 sm:p-9"
                >
                  <div className="flex items-start justify-between">
                    <IconeServico icone={s.icone} className="h-14 w-14 text-cobre" />
                    <span className="font-mono text-sm text-musgo">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="h3 mt-auto pt-10 text-tinta">{s.nomeCurto}</h3>
                  <p className="mt-3 text-musgo">{s.resumo}</p>
                  <span className="mt-6 inline-flex items-center gap-3 font-semibold text-cobre-escuro">
                    Ver serviço <Seta className="transition-transform duration-500 group-hover:translate-x-1" />
                  </span>
                </Link>
              </li>
            ))}
            <li style={{ ["--i" as string]: servicos.length }} className="lg:static lg:w-[24rem]">
              <div className="flex h-full min-h-[16rem] flex-col justify-between rounded-[2rem] bg-cobre-forte lg:min-h-[22rem] p-7 text-white sm:p-9">
                <p className="font-display text-[2.2rem] leading-[1.05]">
                  Não achou o seu problema aqui? <em>Manda uma foto.</em>
                </p>
                <BotaoWhats
                  local="trilho-servicos"
                  variante="tinta"
                  rotulo="Mandar foto no WhatsApp"
                  mensagem="Olá! Vou mandar uma foto do problema para vocês avaliarem."
                  className="mt-8 self-start"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ───────── Compromissos ───────── */}
      <section aria-labelledby="titulo-compromissos" className="py-24 md:py-36">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <CabecaSecao rotulo="Como a Máxima trabalha" id="titulo-compromissos" titulo="Combinado antes, cumprido depois" destaque="cumprido depois">
                <p className="lead mt-7 max-w-md text-musgo">
                  Quatro regras que valem em qualquer chamado, do registro pingando à rede do condomínio.
                </p>
              </CabecaSecao>
            </div>
          </div>
          <div className="relative lg:col-span-6 lg:col-start-7">
            <span className="tubo absolute bottom-0 left-0 top-0 hidden opacity-25 md:block" aria-hidden="true" />
            <span data-tubo className="tubo absolute bottom-0 left-0 top-0 hidden md:block" aria-hidden="true" />
            <ol className="md:pl-14">
              {empresa.compromissos.map((c, i) => (
                <li key={c.titulo} className="border-b border-linha py-9 first:pt-0" data-surge>
                  <span className="font-display text-[3.4rem] italic leading-none text-cobre">{i + 1}.</span>
                  <h3 className="h3 mt-4 text-tinta">{c.titulo}</h3>
                  <p className="mt-3 max-w-lg text-musgo">{c.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────── Como funciona (manômetro) ───────── */}
      <section data-manometro aria-labelledby="titulo-como" className="escuro brilho grao">
        <div className="wrap py-24 md:py-36">
          <CabecaSecao rotulo="Do chamado ao teste" id="titulo-como" titulo="Quatro etapas, nenhuma surpresa" destaque="nenhuma surpresa" className="max-w-3xl" />
          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="sticky top-[4.75rem] z-10 -mx-[var(--gutter)] bg-tinta/85 px-[var(--gutter)] py-4 backdrop-blur lg:top-32 lg:col-span-5 lg:mx-0 lg:self-start lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
              <div data-angulos={angulosEtapas.join(",")}>
                <Manometro className="mx-auto w-36 sm:w-44 lg:w-full lg:max-w-[24rem]" />
              </div>
            </div>
            <ol className="lg:col-span-7">
              {etapasAtendimento.map((e, i) => (
                <li key={e.titulo} data-etapa className="border-t border-linha-escura py-10 lg:min-h-[42vh] lg:py-14">
                  <span className="font-mono text-sm text-cobre-claro">Etapa {i + 1}</span>
                  <h3 className="h3 mt-3 text-[clamp(2rem,4vw,3.2rem)]">{e.titulo}</h3>
                  <p className="lead mt-4 max-w-lg text-nevoa">{e.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────── Onde atendemos ───────── */}
      <section aria-labelledby="titulo-area" className="border-b border-linha py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <CabecaSecao rotulo="Onde atendemos" id="titulo-area" titulo="Curitiba e mais sete cidades" destaque="mais sete cidades" className="lg:col-span-5">
            <p className="mt-7 max-w-md text-musgo">
              O técnico vai até você. Atendimento em {listaCidades()}.
            </p>
            <Link href="/area-de-atendimento" className="link-seta mt-8 inline-flex items-center gap-3 font-semibold text-cobre-escuro">
              Ver área de atendimento <Seta />
            </Link>
          </CabecaSecao>
          <ul className="lg:col-span-7 lg:col-start-6">
            {empresa.cidadesAtendidas.map((c, i) => (
              <li
                key={c}
                data-surge
                className="group flex items-baseline justify-between gap-4 border-b border-linha py-4 first:border-t"
              >
                <span
                  className={`font-display leading-none transition-colors duration-500 group-hover:text-cobre-escuro ${
                    i === 0 ? "text-[clamp(2.6rem,6vw,4.4rem)] italic" : "text-[clamp(1.9rem,4vw,2.8rem)]"
                  }`}
                >
                  {c}
                </span>
                <span className="font-mono text-xs text-musgo">PR</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── Perguntas ───────── */}
      <section aria-labelledby="titulo-faq" className="papel py-24 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <CabecaSecao rotulo="Perguntas frequentes" id="titulo-faq" titulo="Antes de chamar" destaque="chamar" className="lg:col-span-4" />
          <div className="lg:col-span-8">
            <ListaFaq perguntas={faqGeral} />
          </div>
        </div>
      </section>

      <ChamadaFinal />
    </>
  );
}
