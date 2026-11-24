import Link from "next/link";
import type { Metadata } from "next";
import { empresa } from "@/config/empresa";
import { meta, schemaBreadcrumb } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Migalhas } from "@/components/ui/Blocos";

export const metadata: Metadata = meta({
  titulo: "Política de privacidade",
  descricao: "Como o site da Máxima Encanador trata os dados de quem entra em contato, conforme a LGPD.",
  caminho: "/politica-de-privacidade",
});

const migalhas = [
  { nome: "Início", caminho: "/" },
  { nome: "Política de privacidade", caminho: "/politica-de-privacidade" },
];

/** Atualize a data sempre que o texto mudar. */
const atualizadaEm = "24 de novembro de 2026";

export default function Privacidade() {
  const temAnalytics = Boolean(process.env.NEXT_PUBLIC_GA_ID);
  return (
    <>
      <JsonLd data={schemaBreadcrumb(migalhas)} />
      <section className="escuro brilho grao" aria-labelledby="titulo-pagina">
        <div className="wrap pb-16 pt-32 md:pt-40">
          <Migalhas itens={migalhas} claro />
          <h1 id="titulo-pagina" className="display mt-10 text-[clamp(2.8rem,7vw,5.5rem)]">
            Política de <em>privacidade</em>
          </h1>
          <p className="mt-5 font-mono text-[0.75rem] uppercase tracking-[0.12em] text-nevoa">Atualizada em {atualizadaEm}</p>
        </div>
      </section>

      <article className="wrap max-w-3xl py-16 md:py-24">
        <div className="space-y-12 [&_a]:text-cobre-escuro [&_a]:underline [&_h2]:h3 [&_h2]:text-tinta [&_p]:mt-3 [&_p]:text-musgo [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_ul]:text-musgo">
          <section>
            <h2>1. A quem pertence este site</h2>
            <p>
              Este site é da {empresa.nome}
              {empresa.cnpj ? `, CNPJ ${empresa.cnpj}` : ""}, que presta serviços de encanador, desentupimento e
              hidrojateamento em Curitiba e região. Aqui explicamos que dados o site recebe e o que acontece com eles, de
              acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2>2. O formulário não guarda nada</h2>
            <p>
              O formulário da página de <Link href="/contato">contato</Link> não envia seus dados para nenhum servidor do site.
              Ele só junta o que você escreveu (nome, telefone, serviço, cidade e descrição) numa mensagem e abre o WhatsApp
              para que você mesmo decida enviar.
            </p>
            <p>
              Depois disso, a conversa segue no WhatsApp, que tem regras de privacidade próprias. A Máxima usa essas
              informações apenas para responder, agendar e realizar o serviço pedido.
            </p>
          </section>

          <section>
            <h2>3. Cookies e estatísticas de visita</h2>
            {temAnalytics ? (
              <p>
                O site pode usar o Google Analytics 4 para contar visitas e saber quais botões de contato são usados, sempre
                de forma agregada. Ele só carrega se você clicar em “Aceitar” no aviso de cookies; recusando, nenhum cookie de
                medição é criado. Durante a visita, o site anota de onde você veio (por exemplo, uma busca no Google) e a
                primeira página aberta. Isso só vai para o Analytics com o seu aceite e não identifica você.
              </p>
            ) : null}
            {temAnalytics && (
              <p>
                Com o mesmo aceite, o site também usa a tag do Google Ads para saber se um clique no WhatsApp ou no botão de
                ligar veio de um anúncio da Máxima. Isso cria o cookie <code>_gcl_au</code> (até 90 dias) e serve só para
                medir os anúncios. Recusando, ele não é criado.
              </p>
            )}
            {!temAnalytics && (
              <p>
                Hoje o site não usa cookies de medição nem de publicidade. Se isso mudar, um aviso vai pedir a sua permissão
                antes de qualquer cookie que não seja essencial.
              </p>
            )}
            <p>No seu navegador fica salvo apenas o que é técnico, como a sua resposta ao aviso de cookies.</p>
          </section>

          <section>
            <h2>4. Com quem os dados são compartilhados</h2>
            <p>
              Com ninguém, para fins comerciais. A Máxima não vende nem repassa dados pessoais. O compartilhamento só acontece
              quando for necessário para executar o serviço ou por obrigação legal.
            </p>
          </section>

          <section>
            <h2>5. Seus direitos</h2>
            <p>Você pode pedir a qualquer momento:</p>
            <ul>
              <li>para saber se temos dados seus e quais são;</li>
              <li>a correção do que estiver errado ou desatualizado;</li>
              <li>a exclusão dos dados tratados com base no seu consentimento;</li>
              <li>a lista de com quem eles foram compartilhados, se foram.</li>
            </ul>
            <p>
              Para isso, use os canais da página de <Link href="/contato">contato</Link>
              {empresa.email ? ` ou o e-mail ${empresa.email}` : ""}.
            </p>
          </section>

          <section>
            <h2>6. Mudanças nesta política</h2>
            <p>O texto pode ser atualizado. A data no topo mostra a versão que vale.</p>
          </section>
        </div>
      </article>
    </>
  );
}
