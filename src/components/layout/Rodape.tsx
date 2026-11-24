import Link from "next/link";
import { empresa, linkWhatsApp, linkTelefone, telefoneFormatado, listaCidades } from "@/config/empresa";
import { servicos } from "@/content/servicos";
import { Marca } from "@/components/marca/Marca";
import { navegacao } from "@/components/layout/navegacao";

export function Rodape() {
  const wa = linkWhatsApp();
  const tel = linkTelefone();
  const ano = new Date().getFullYear();
  return (
    <footer className="escuro grao overflow-hidden">
      <div className="wrap grid gap-14 pb-14 pt-20 md:grid-cols-12 md:pt-24">
        <div className="md:col-span-5">
          <Marca claro />
          <p className="mt-6 max-w-sm text-nevoa">
            Encanador em {empresa.cidadePrincipal.nome} e região metropolitana. Vazamentos, reparos, desentupimento e
            hidrojateamento{empresa.atende24h ? ", 24 horas por dia" : ""}.
          </p>
        </div>

        <nav aria-label="Serviços" className="md:col-span-3">
          <p className="rotulo">Serviços</p>
          <ul className="mt-5 space-y-2.5">
            {servicos.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicos/${s.slug}`} className="link-sub text-osso/90">
                  {s.nomeCurto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="rotulo">Contato</p>
          <ul className="mt-5 space-y-2.5">
            {wa && (
              <li>
                <a href={wa} target="_blank" rel="noopener noreferrer" data-evento="whatsapp_click" data-local="rodape" className="link-sub">
                  WhatsApp {telefoneFormatado(empresa.whatsapp)}
                </a>
              </li>
            )}
            {tel && (
              <li>
                <a href={tel} data-evento="telefone_click" data-local="rodape" className="link-sub">
                  Ligar {telefoneFormatado(empresa.telefone)}
                </a>
              </li>
            )}
            {empresa.email && (
              <li>
                <a href={`mailto:${empresa.email}`} className="link-sub">
                  {empresa.email}
                </a>
              </li>
            )}
            {empresa.perfilGoogle && (
              <li>
                <a href={empresa.perfilGoogle} target="_blank" rel="noopener noreferrer" data-evento="perfil_google_click" data-local="rodape" className="link-sub">
                  Ver no Google
                </a>
              </li>
            )}
            {empresa.linkAvaliacoes && (
              <li>
                <a href={empresa.linkAvaliacoes} target="_blank" rel="noopener noreferrer" data-evento="avaliacao_click" data-local="rodape" className="link-sub">
                  Avaliar no Google
                </a>
              </li>
            )}
            {empresa.horario && <li className="text-nevoa">{empresa.horario}</li>}
            <li className="text-nevoa">Atendemos {listaCidades()}.</li>
          </ul>
        </div>
      </div>

      {/* Nome gigante que "sai do cano" */}
      <div className="wrap" aria-hidden="true">
        <p className="select-none font-display text-[clamp(4.5rem,21vw,19rem)] italic leading-[0.8] tracking-[-0.04em] text-osso/[0.06]">
          Máxima
        </p>
      </div>

      <div className="border-t border-linha-escura">
        <div className="wrap flex flex-col gap-3 py-6 text-[0.85rem] text-nevoa sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {ano} {empresa.nome}
            {empresa.cnpj && ` · CNPJ ${empresa.cnpj}`}
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1">
            {navegacao.map((n) => (
              <li key={n.caminho}>
                <Link href={n.caminho} className="link-sub">
                  {n.nome}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/politica-de-privacidade" className="link-sub">
                Privacidade
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
