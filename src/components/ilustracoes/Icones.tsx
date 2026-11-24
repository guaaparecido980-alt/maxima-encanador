import type { Icone } from "@/content/servicos";

/** Ícones de traço dos serviços (cobre). data-desenha = traços que se desenham ao entrar na tela. */
const caminhos: Record<Icone, string[]> = {
  gota: [
    "M32 8c-9 12-14 20-14 27a14 14 0 0 0 28 0c0-7-5-15-14-27Z",
    "M25 37a7 7 0 0 0 7 7",
    "M10 56h12M42 56h12M26 56h12",
  ],
  chave: [
    "M41 9a11 11 0 0 0-10 15L10 45a4.2 4.2 0 0 0 6 6l21-21a11 11 0 0 0 15-10l-6 2-5-5 2-6Z",
    "M14 47l2 2",
  ],
  ralo: [
    "M32 8a24 24 0 1 1 0 48a24 24 0 0 1 0-48Z",
    "M32 18a14 14 0 1 1 0 28a14 14 0 0 1 0-28Z",
    "M20 32h24M32 20v24M24 24l16 16M40 24 24 40",
  ],
  caixa: ["M10 18h44v34a4 4 0 0 1-4 4H14a4 4 0 0 1-4-4Z", "M10 28h44", "M4 22h6M54 46h6", "M16 42c4-3 8 3 12 0s8 3 12 0 6 2 8 0"],
  jato: ["M6 28h22v8H6Z", "M28 26h8l4 6-4 6h-8Z", "M44 32h14M44 24l12-6M44 40l12 6M46 28l10-2M46 36l10 2"],
};

export function IconeServico({ icone, className = "" }: { icone: Icone; className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      data-desenha
    >
      {caminhos[icone].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
