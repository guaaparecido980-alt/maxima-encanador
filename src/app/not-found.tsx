import Link from "next/link";
import type { Metadata } from "next";
import { servicos } from "@/content/servicos";
import { BotaoWhats, Seta } from "@/components/ui/Botoes";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: true },
};

export default function NaoEncontrada() {
  return (
    <section className="escuro brilho grao min-h-[80svh]" aria-labelledby="titulo-404">
      <div className="wrap pb-24 pt-36 md:pt-44">
        <p className="rotulo">Erro 404</p>
        <h1 id="titulo-404" className="display mt-6 max-w-4xl text-[clamp(3rem,9vw,7.5rem)]">
          Esse cano não leva a <em>lugar nenhum.</em>
        </h1>
        <p className="lead mt-8 max-w-xl text-nevoa">
          A página que você procurou não existe ou mudou de endereço. Talvez seja uma destas:
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          <li>
            <Link href="/" className="inline-flex min-h-12 items-center rounded-full border border-linha-escura px-5 hover:border-cobre-claro">
              Página inicial
            </Link>
          </li>
          {servicos.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/servicos/${s.slug}`}
                className="inline-flex min-h-12 items-center rounded-full border border-linha-escura px-5 hover:border-cobre-claro"
              >
                {s.nomeCurto}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col gap-3 xs:flex-row">
          <BotaoWhats local="404" variante="claro" />
          <Link href="/contato" className="btn btn-linha text-osso">
            Ir para contato <Seta />
          </Link>
        </div>
      </div>
    </section>
  );
}
