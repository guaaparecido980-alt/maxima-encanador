/**
 * Logo da Máxima Encanador: um "M" feito de cano de cobre (duas curvas),
 * com a perna do meio terminando numa gota. O volume do cano vem de traços
 * sobrepostos (escuro → claro → brilho), que funcionam em qualquer curva.
 */
const M = "M9 54V24a11.5 11.5 0 0 1 23 0a11.5 11.5 0 0 1 23 0v30";
const MEIO = "M32 24v15";

export function Monograma({ className = "", titulo }: { className?: string; titulo?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role={titulo ? "img" : undefined}
      aria-label={titulo}
      aria-hidden={titulo ? undefined : true}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {[M, MEIO].map((d) => (
        <g key={d}>
          <path d={d} stroke="#4a2210" strokeWidth="9.5" />
          <path d={d} stroke="#9a5128" strokeWidth="7.5" />
          <path d={d} stroke="#cf8352" strokeWidth="4.6" />
          <path d={d} stroke="#f6cfae" strokeWidth="1.5" opacity=".85" />
        </g>
      ))}
      {/* anéis de conexão */}
      <rect x="4.5" y="47" width="9" height="4" rx="1.2" fill="#6b3317" />
      <rect x="50.5" y="47" width="9" height="4" rx="1.2" fill="#6b3317" />
      <path d="M32 44.5c-2.3 3-3.4 4.9-3.4 6.4a3.4 3.4 0 0 0 6.8 0c0-1.5-1.1-3.4-3.4-6.4Z" fill="#8fc1b5" />
    </svg>
  );
}

/** Assinatura completa (monograma + nome). `claro` = sobre fundo escuro. */
export function Marca({ claro = false }: { claro?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <Monograma className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.65rem] italic tracking-[-0.01em] ${claro ? "text-osso" : "text-tinta"}`}>
          Máxima
        </span>
        <span
          className={`mt-1 font-mono text-[0.6rem] font-medium uppercase tracking-[0.32em] ${claro ? "text-cobre-claro" : "text-cobre-escuro"}`}
        >
          Encanador
        </span>
      </span>
    </span>
  );
}
