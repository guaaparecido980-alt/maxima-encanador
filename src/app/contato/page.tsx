import type { Metadata } from "next";
import { empresa, listaCidades } from "@/config/empresa";
import { servicos } from "@/content/servicos";
import { faqGeral } from "@/content/geral";
import { meta, schemaBreadcrumb, schemaPagina } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Titulo } from "@/components/ui/Titulo";
import { Migalhas, ListaFaq, CabecaSecao } from "@/components/ui/Blocos";
import { BotaoWhats, BotaoLigar } from "@/components/ui/Botoes";
import { FormularioAtendimento } from "@/components/formulario/FormularioAtendimento";

const descricao =
  "Chame a Máxima Encanador pelo WhatsApp, por ligação ou pelo formulário. Atendimento 24 horas em Curitiba e região, com preço combinado antes do serviço.";

export const metadata: Metadata = meta({ titulo: "Contato: chame um encanador", descricao, caminho: "/contato" });

const migalhas = [
  { nome: "Início", caminho: "/" },
  { nome: "Contato", caminho: "/contato" },
];

export default function Contato() {
  return (
    <>
      <JsonLd data={[{ ...schemaPagina("Contato", "/contato", descricao), "@type": "ContactPage" }, schemaBreadcrumb(migalhas)]} />

      <section className="escuro brilho grao overflow-hidden" aria-labelledby="titulo-pagina">
        <div className="wrap grid gap-12 pb-20 pt-32 md:pb-24 md:pt-40 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Migalhas itens={migalhas} claro />
            <p className="rotulo entra mt-10" style={{ ["--d" as string]: "0.05s" }}>
              {empresa.atende24h ? "24 horas · todos os dias" : "Contato"}
            </p>
            <Titulo
              as="h1"
              id="titulo-pagina"
              imediato
              texto="Conta pra gente o que está acontecendo."
              destaque="o que está acontecendo."
              className="display mt-6 text-[clamp(3rem,8vw,6.8rem)]"
            />
          </div>
          <div className="entra flex flex-col gap-3 lg:col-span-4 lg:col-start-9" style={{ ["--d" as string]: "0.5s" }}>
            <BotaoWhats local="contato-topo" variante="claro" className="w-full justify-between" />
            <BotaoLigar local="contato-topo" className="w-full justify-between text-osso" />
            <dl className="mt-4 grid gap-3 border-t border-linha-escura pt-5 text-[0.95rem]">
              {empresa.horario && (
                <div className="flex justify-between gap-4">
                  <dt className="text-nevoa">Horário</dt>
                  <dd className="text-right">{empresa.horario}</dd>
                </div>
              )}
              <div className="flex justify-between gap-4">
                <dt className="text-nevoa">Atendimento</dt>
                <dd className="text-right">No local do serviço</dd>
              </div>
              {empresa.email && (
                <div className="flex justify-between gap-4">
                  <dt className="text-nevoa">E-mail</dt>
                  <dd className="text-right">
                    <a href={`mailto:${empresa.email}`} className="underline">
                      {empresa.email}
                    </a>
                  </dd>
                </div>
              )}
              {(empresa.perfilGoogle || empresa.linkAvaliacoes) && (
                <div className="flex justify-between gap-4">
                  <dt className="text-nevoa">Google</dt>
                  <dd className="flex flex-wrap justify-end gap-x-4 text-right">
                    {empresa.perfilGoogle && (
                      <a href={empresa.perfilGoogle} target="_blank" rel="noopener noreferrer" data-evento="perfil_google_click" data-local="contato" className="underline">
                        Ver no Google
                      </a>
                    )}
                    {empresa.linkAvaliacoes && (
                      <a href={empresa.linkAvaliacoes} target="_blank" rel="noopener noreferrer" data-evento="avaliacao_click" data-local="contato" className="underline">
                        Avaliar no Google
                      </a>
                    )}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </section>

      <section id="formulario" aria-labelledby="titulo-form" className="scroll-mt-24">
        <div className="wrap grid gap-12 py-20 md:py-28 lg:grid-cols-12">
          <CabecaSecao rotulo="Prefere escrever?" id="titulo-form" titulo="Formulário" className="lg:col-span-4">
            <p className="mt-6 text-musgo">
              Preencha e a mensagem sai pronta no WhatsApp da Máxima. Você só confirma o envio. O técnico responde, entende o
              caso e combina o atendimento.
            </p>
            <p className="mt-4 text-[0.95rem] text-musgo">
              <strong className="text-grafite">Atendemos:</strong> {listaCidades()}.
            </p>
          </CabecaSecao>
          <div className="relative min-w-0 rounded-[2rem] border border-linha bg-osso p-5 shadow-[0_30px_60px_-40px_rgb(13_23_20/0.5)] sm:p-10 lg:col-span-8">
            <FormularioAtendimento servicos={servicos.map((s) => ({ slug: s.slug, nome: s.nome }))} />
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-faq" className="papel border-t border-linha py-20 md:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <CabecaSecao rotulo="Antes de chamar" id="titulo-faq" titulo="Dúvidas comuns" className="lg:col-span-4" />
          <div className="lg:col-span-8">
            <ListaFaq perguntas={faqGeral.slice(0, 4)} />
          </div>
        </div>
      </section>
    </>
  );
}
