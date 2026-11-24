import Link from "next/link";
import type { Metadata } from "next";
import { empresa, listaCidades } from "@/config/empresa";
import { etapasAtendimento } from "@/content/geral";
import { meta, schemaBreadcrumb, schemaPagina } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Titulo } from "@/components/ui/Titulo";
import { Migalhas, CabecaSecao, ChamadaFinal } from "@/components/ui/Blocos";
import { Seta } from "@/components/ui/Botoes";
import { Monograma } from "@/components/marca/Marca";

const descricao =
  "Como a Máxima Encanador trabalha em Curitiba e região: causa antes do conserto, preço antes do serviço, piso inteiro sempre que der e garantia por escrito.";

export const metadata: Metadata = meta({ titulo: "Como trabalhamos", descricao, caminho: "/sobre" });

const migalhas = [
  { nome: "Início", caminho: "/" },
  { nome: "Como trabalhamos", caminho: "/sobre" },
];

export default function Sobre() {
  return (
    <>
      <JsonLd data={[{ ...schemaPagina(`Como trabalhamos · ${empresa.nome}`, "/sobre", descricao), "@type": "AboutPage" }, schemaBreadcrumb(migalhas)]} />

      <section className="escuro brilho grao overflow-hidden" aria-labelledby="titulo-pagina">
        <div className="wrap grid gap-12 pb-20 pt-32 md:pb-28 md:pt-40 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Migalhas itens={migalhas} claro />
            <p className="rotulo entra mt-10" style={{ ["--d" as string]: "0.05s" }}>
              A Máxima Encanador
            </p>
            <Titulo
              as="h1"
              id="titulo-pagina"
              imediato
              texto="Resolver na causa, não no sintoma."
              destaque="não no sintoma."
              className="display mt-6 text-[clamp(3rem,8.4vw,7rem)]"
            />
          </div>
          <div className="hidden lg:col-span-3 lg:col-start-10 lg:block">
            <Monograma className="entra w-full max-w-[14rem]" />
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-quem" className="py-20 md:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <CabecaSecao rotulo="Quem somos" id="titulo-quem" titulo="Encanamento é o nosso ofício" destaque="ofício" className="lg:col-span-5" />
          <div className="texto-corrido lead text-musgo lg:col-span-6 lg:col-start-7">
            <p>
              A Máxima Encanador atende casas, apartamentos, condomínios e comércios de {listaCidades()}. O trabalho cobre a
              parte hidráulica inteira: localização e conserto de vazamentos, troca de peças, reparos, desentupimento,
              limpeza de caixa de gordura e hidrojateamento.
            </p>
            <p>
              Todo problema hidráulico tem uma origem. A torneira pinga porque uma peça gastou; a parede mancha porque uma
              conexão cedeu; a pia volta porque a gordura fechou o cano. Tratar só o que aparece faz o problema voltar.
              Por isso o atendimento começa procurando a causa.
            </p>
            {empresa.atende24h && (
              <p>O atendimento funciona 24 horas, todos os dias. Cano estourado não marca horário.</p>
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-regras" className="papel border-y border-linha py-20 md:py-32">
        <div className="wrap">
          <CabecaSecao rotulo="Compromissos" id="titulo-regras" titulo="O que você pode cobrar da gente" destaque="cobrar" className="max-w-3xl" />
          <ul className="mt-14 grid gap-4 md:grid-cols-2">
            {empresa.compromissos.map((c, i) => (
              <li key={c.titulo} className="cartao p-8 sm:p-10" data-surge>
                <span className="font-display text-[3rem] italic leading-none text-cobre">{i + 1}.</span>
                <h3 className="h3 mt-5 text-tinta">{c.titulo}</h3>
                <p className="mt-3 text-musgo">{c.texto}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="titulo-etapas" className="py-20 md:py-32">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <CabecaSecao rotulo="Atendimento" id="titulo-etapas" titulo="Do chamado ao teste final" destaque="teste final" className="lg:col-span-5" />
          <ol className="lg:col-span-7">
            {etapasAtendimento.map((e, i) => (
              <li key={e.titulo} data-surge className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-linha py-8">
                <span className="font-display text-[2.4rem] italic leading-none text-cobre">{i + 1}</span>
                <div>
                  <h3 className="h3 text-tinta">{e.titulo}</h3>
                  <p className="mt-2 text-musgo">{e.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="wrap mt-6">
          <Link href="/servicos" className="link-seta inline-flex items-center gap-3 py-2 font-semibold text-cobre-escuro">
            Conhecer os serviços <Seta />
          </Link>
        </div>
      </section>

      <ChamadaFinal />
    </>
  );
}
