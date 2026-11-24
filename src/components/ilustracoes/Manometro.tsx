/**
 * Manômetro do "Como funciona": os números do mostrador são as 4 etapas do atendimento.
 * O ponteiro avança com a rolagem (Movimento → [data-ponteiro-etapas]). Sem JS, aponta para a etapa 1.
 */
export const angulosEtapas = [-105, -35, 35, 105];

export function Manometro({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 320" className={className} fill="none" aria-hidden="true">
      {/* aro de cobre (camadas = volume) */}
      <circle cx="160" cy="160" r="150" fill="#3d1b0b" />
      <circle cx="160" cy="160" r="146" fill="#7c3d1c" />
      <circle cx="160" cy="160" r="140" fill="#cf8556" />
      <circle cx="160" cy="160" r="134" fill="#a95c33" />
      <path d="M58 92a124 124 0 0 1 60-50" stroke="#f4c8a2" strokeWidth="3" strokeLinecap="round" opacity=".7" />
      {/* mostrador */}
      <circle cx="160" cy="160" r="124" fill="#faf7f2" />
      <circle cx="160" cy="160" r="124" stroke="#ddd3c5" strokeWidth="2" />
      {/* faixa de "pressão ok" */}
      <path d="M71.6 211a102 102 0 0 1 0-102" stroke="#ddd3c5" strokeWidth="10" strokeLinecap="round" />
      <path d="M248.4 109a102 102 0 0 1 0 102" stroke="#8fc1b5" strokeWidth="10" strokeLinecap="round" />
      <g stroke="#1b2321" strokeLinecap="round">
        {Array.from({ length: 22 }, (_, i) => -126 + i * 12).map((a, i) => (
          <path key={a} d={i % 3 === 0 ? "M160 46v16" : "M160 46v9"} strokeWidth={i % 3 === 0 ? 2.5 : 1.2} transform={`rotate(${a} 160 160)`} />
        ))}
      </g>
      <g fontFamily="var(--font-serif), serif" fontStyle="italic" fontSize="30" fill="#1b2321" textAnchor="middle">
        {angulosEtapas.map((a, i) => {
          const r = (a - 90) * (Math.PI / 180);
          return (
            <text key={a} x={160 + Math.cos(r) * 80} y={160 + Math.sin(r) * 80 + 10}>
              {i + 1}
            </text>
          );
        })}
      </g>
      <text x="160" y="226" textAnchor="middle" fontFamily="var(--font-geist-mono), monospace" fontSize="10" letterSpacing="3" fill="#55625d">
        ETAPA
      </text>
      <g data-ponteiro-etapas transform={`rotate(${angulosEtapas[0]} 160 160)`}>
        <path d="M160 172V58" stroke="#a4562f" strokeWidth="4" strokeLinecap="round" />
        <path d="M160 160v26" stroke="#1b2321" strokeWidth="6" strokeLinecap="round" />
      </g>
      <circle cx="160" cy="160" r="11" fill="#1b2321" />
      <circle cx="160" cy="160" r="4" fill="#cf8556" />
    </svg>
  );
}
