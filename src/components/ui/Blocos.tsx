import Link from "next/link";
import { Titulo } from "@/components/ui/Titulo";
import { BotaoWhats, BotaoLigar } from "@/components/ui/Botoes";

/** Cabeça de seção: rótulo com "cano" + título com máscara. */
export function CabecaSecao({
  rotulo,
  titulo,
  destaque,
  id,
  className = "",
  children,
}: {
  rotulo: string;
  titulo: string;
  destaque?: string;
  id: string;
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={className}>
      <p className="rotulo">{rotulo}</p>
      <Titulo texto={titulo} destaque={destaque} id={id} className="h2 mt-5" />
      {children}
    </div>
  );
}

export function Migalhas({ itens, claro = false }: { itens: { nome: string; caminho: string }[]; claro?: boolean }) {
  return (
    <nav aria-label="Você está em" className="font-mono text-[0.72rem] uppercase tracking-[0.12em]">
      <ol className={`flex flex-wrap items-center gap-x-2 gap-y-1 ${claro ? "text-nevoa" : "text-musgo"}`}>
        {itens.map((it, i) => (
          <li key={it.caminho} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true" className="h-px w-4 bg-current opacity-50" />}
            {i < itens.length - 1 ? (
              <Link href={it.caminho} className="link-sub py-1">
                {it.nome}
              </Link>
            ) : (
              <span aria-current="page" className={claro ? "text-osso" : "text-grafite"}>
                {it.nome}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ListaFaq({ perguntas, claro = false }: { perguntas: { pergunta: string; resposta: string }[]; claro?: boolean }) {
  return (
    <div className={`border-t ${claro ? "border-linha-escura" : "border-linha"}`}>
      {perguntas.map((p) => (
        <details key={p.pergunta} className={`faq group border-b ${claro ? "border-linha-escura" : "border-linha"}`} data-surge>
          <summary className="flex items-start justify-between gap-6 py-6">
            <h3 className="h3 text-[1.35rem] sm:text-[1.6rem]">{p.pergunta}</h3>
            <span
              aria-hidden="true"
              className={`mais mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border ${claro ? "border-linha-escura text-cobre-claro" : "border-linha text-cobre-escuro"}`}
            >
              <svg width="14" height="14" viewBox="0 0 14 14">
                <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className={`max-w-2xl pb-7 ${claro ? "text-nevoa" : "text-musgo"}`}>{p.resposta}</p>
        </details>
      ))}
    </div>
  );
}

/** Fechamento de página: convite final para chamar. */
export function ChamadaFinal({
  titulo = "Água fora do lugar? Chama a Máxima.",
  destaque = "Chama a Máxima.",
  mensagem,
  servico,
}: {
  titulo?: string;
  destaque?: string;
  mensagem?: string;
  servico?: string;
}) {
  return (
    <section aria-labelledby="titulo-chamada" className="escuro brilho grao overflow-hidden">
      <div className="wrap relative py-24 md:py-36">
        <p className="rotulo">24 horas, todos os dias</p>
        <Titulo
          texto={titulo}
          destaque={destaque}
          id="titulo-chamada"
          className="display mt-6 max-w-5xl text-[clamp(3rem,9vw,8rem)]"
        />
        <div className="mt-12 flex flex-col gap-3 xs:flex-row xs:flex-wrap">
          <BotaoWhats local="chamada-final" variante="claro" mensagem={mensagem} servico={servico} />
          <BotaoLigar local="chamada-final" className="text-osso" />
        </div>
      </div>
    </section>
  );
}
