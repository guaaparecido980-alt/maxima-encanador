"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { navegacao } from "@/components/layout/navegacao";

type Props = {
  logoClaro: ReactNode;
  logoEscuro: ReactNode;
  servicos: { slug: string; nomeCurto: string }[];
  whats: string | null;
  tel: string | null;
  telTexto: string | null;
};

/**
 * Cabeçalho fixo. No topo fica transparente sobre a abertura escura; ao rolar ganha fundo creme.
 * A linha de baixo é um cano que "enche de água" conforme a leitura avança.
 * O menu do celular fica FORA do <header> (o desfoque do header prenderia o position: fixed).
 */
export function Cabecalho({ logoClaro, logoEscuro, servicos, whats, tel, telTexto }: Props) {
  const pathname = usePathname();
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);
  const agua = useRef<HTMLSpanElement>(null);
  const botao = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let raf = 0;
    const medir = () => {
      raf = 0;
      const y = window.scrollY;
      setRolou(y > 24);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (agua.current) agua.current.style.transform = `scaleX(${total > 0 ? Math.min(1, y / total) : 0})`;
    };
    const aoRolar = () => {
      if (!raf) raf = requestAnimationFrame(medir);
    };
    medir();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);
    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Fecha o menu ao trocar de página
  const [rotaAnterior, setRotaAnterior] = useState(pathname);
  if (rotaAnterior !== pathname) {
    setRotaAnterior(pathname);
    setAberto(false);
  }

  useEffect(() => {
    document.documentElement.style.overflow = aberto ? "hidden" : "";
    if (!aberto) return;
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAberto(false);
        botao.current?.focus();
      }
    };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [aberto]);

  const solido = rolou && !aberto;
  const ativo = (c: string) => pathname === c || pathname.startsWith(c + "/");

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-500 ${
          solido ? "bg-creme/96 text-grafite shadow-[0_1px_0_rgb(0_0_0/0.06)] backdrop-blur-xl" : "bg-transparent text-osso"
        }`}
      >
        <div className="wrap flex h-[4.75rem] items-center justify-between gap-6">
          <Link href="/" aria-label="Máxima Encanador, página inicial" className="relative z-10">
            <span className={solido ? "block" : "hidden"}>{logoEscuro}</span>
            <span className={solido ? "hidden" : "block"}>{logoClaro}</span>
          </Link>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navegacao.map((n) => (
                <li key={n.caminho}>
                  <Link
                    href={n.caminho}
                    aria-current={ativo(n.caminho) ? "page" : undefined}
                    className={`rounded-full px-4 py-2.5 text-[0.95rem] font-medium transition-colors ${
                      ativo(n.caminho)
                        ? solido
                          ? "bg-tinta text-osso"
                          : "bg-white/12 text-osso"
                        : solido
                          ? "hover:bg-black/5"
                          : "hover:bg-white/10"
                    }`}
                  >
                    {n.nome}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {tel && (
              <a
                href={tel}
                data-evento="telefone_click"
                data-local="cabecalho"
                className="hidden font-mono text-sm tracking-wide xl:inline-block xl:px-3"
              >
                {telTexto}
              </a>
            )}
            {whats && (
              <a
                href={whats}
                target="_blank"
                rel="noopener noreferrer"
                data-evento="whatsapp_click"
                data-local="cabecalho"
                className={`hidden min-h-11 items-center rounded-full px-5 text-[0.95rem] font-semibold sm:inline-flex ${
                  solido ? "bg-cobre-forte text-white" : "bg-cobre-claro text-tinta"
                }`}
              >
                WhatsApp
              </a>
            )}
            <button
              ref={botao}
              type="button"
              className="relative z-[70] grid h-12 w-12 place-items-center rounded-full lg:hidden"
              aria-expanded={aberto}
              aria-controls="menu-movel"
              aria-label={aberto ? "Fechar menu" : "Abrir menu"}
              onClick={() => setAberto((v) => !v)}
            >
              <span className={`relative block h-3.5 w-7 ${aberto ? "text-osso" : ""}`} aria-hidden="true">
                <span
                  className={`absolute left-0 h-[2px] w-full rounded bg-current transition-transform duration-500 ${aberto ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 h-[2px] rounded bg-current transition-all duration-500 ${aberto ? "top-1.5 w-full -rotate-45" : "top-3 w-4/6"}`}
                />
              </span>
            </button>
          </div>
        </div>
        {/* cano de progresso */}
        <span className={`absolute inset-x-0 bottom-0 h-[3px] ${solido ? "bg-linha" : "bg-white/10"}`} aria-hidden="true">
          <span ref={agua} className="block h-full origin-left scale-x-0 bg-gradient-to-r from-patina-clara to-agua" />
        </span>
      </header>

      <div
        id="menu-movel"
        className={`escuro brilho fixed inset-0 z-[60] flex flex-col overflow-y-auto pt-[5.5rem] transition-[opacity,visibility] duration-500 lg:hidden ${
          aberto ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!aberto}
        inert={!aberto}
      >
        <nav aria-label="Menu" className="wrap flex-1 pb-[calc(var(--barra-mobile)+2rem)]">
          <ul className="border-t border-linha-escura">
            {[{ nome: "Início", caminho: "/" }, ...navegacao].map((n, i) => (
              <li
                key={n.caminho}
                className="border-b border-linha-escura transition-[transform,opacity] duration-700 ease-[var(--ease-fluxo)]"
                style={{
                  transitionDelay: aberto ? `${80 + i * 55}ms` : "0ms",
                  transform: aberto ? "none" : "translateY(18px)",
                  opacity: aberto ? 1 : 0,
                }}
              >
                <Link
                  href={n.caminho}
                  aria-current={pathname === n.caminho ? "page" : undefined}
                  className="flex items-baseline justify-between py-4 font-display text-[2.4rem] leading-none text-osso"
                >
                  {n.nome}
                  <span className="font-mono text-xs text-cobre-claro">{String(i + 1).padStart(2, "0")}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="rotulo mt-10">Serviços</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {servicos.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/servicos/${s.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border border-linha-escura px-4 text-sm text-nevoa"
                >
                  {s.nomeCurto}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
