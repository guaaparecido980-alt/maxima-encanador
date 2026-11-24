/**
 * Ilustração da abertura: linha de cobre com registro, manômetro e saída pingando.
 * Desenho de servidor (zero JS). O AnimaHero monta o cano ao carregar.
 * Volume do cano = traços sobrepostos do escuro ao brilho (funciona nas curvas).
 */
const CANO =
  "M560 112H372a52 52 0 0 0-52 52v168a48 48 0 0 1-48 48H178a44 44 0 0 0-44 44v30";
const camadas = [
  { cor: "#3d1b0b", largura: 36 },
  { cor: "#7c3d1c", largura: 31 },
  { cor: "#a95c33", largura: 25 },
  { cor: "#cf8556", largura: 15 },
  { cor: "#f4c8a2", largura: 4, opacidade: 0.9 },
];

function Anel({ x, y, vertical = false }: { x: number; y: number; vertical?: boolean }) {
  return vertical ? (
    <rect data-peca x={x - 23} y={y - 7} width="46" height="14" rx="4" fill="#6b3317" stroke="#3d1b0b" strokeWidth="1.5" />
  ) : (
    <rect data-peca x={x - 7} y={y - 23} width="14" height="46" rx="4" fill="#6b3317" stroke="#3d1b0b" strokeWidth="1.5" />
  );
}

export function CanoHero({ id = "cano-hero", className = "" }: { id?: string; className?: string }) {
  return (
    <svg id={id} viewBox="0 0 560 600" className={className} fill="none" aria-hidden="true">
      {/* grade de projeto ao fundo */}
      <g stroke="#8fc1b5" strokeOpacity=".16">
        <circle cx="300" cy="300" r="250" />
        <circle cx="300" cy="300" r="180" strokeDasharray="2 8" />
        <path d="M300 30v540M30 300h540" strokeDasharray="1 7" />
      </g>

      {/* manômetro no ramal de cima */}
      <g data-peca>
        <path d="M470 112V78" stroke="#7c3d1c" strokeWidth="10" />
        <circle cx="470" cy="48" r="34" fill="#faf7f2" stroke="#a95c33" strokeWidth="5" />
        <g stroke="#1b2321" strokeWidth="1.5" strokeLinecap="round">
          {[-120, -80, -40, 0, 40, 80, 120].map((a) => (
            <path key={a} d="M470 22v6" transform={`rotate(${a} 470 48)`} />
          ))}
        </g>
        <path d="M447 66a30 30 0 0 1 46 0" stroke="#8fc1b5" strokeWidth="3" strokeLinecap="round" />
        <g data-ponteiro style={{ transformOrigin: "470px 48px", transform: "rotate(35deg)" }}>
          <path d="M470 48V24" stroke="#a4562f" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <circle cx="470" cy="48" r="4" fill="#1b2321" />
      </g>

      {/* cano principal */}
      {camadas.map((c) => (
        <path
          key={c.cor}
          data-linha
          pathLength={1}
          d={CANO}
          stroke={c.cor}
          strokeWidth={c.largura}
          strokeOpacity={c.opacidade}
          strokeLinecap="butt"
        />
      ))}

      <Anel x={372} y={112} />
      <Anel x={320} y={164} vertical />
      <Anel x={320} y={332} vertical />
      <Anel x={178} y={380} />

      {/* registro (volante) */}
      <g data-peca>
        <path d="M338 246h40" stroke="#7c3d1c" strokeWidth="12" />
        <g data-volante style={{ transformOrigin: "404px 246px" }}>
          <circle cx="404" cy="246" r="30" stroke="#d29a55" strokeWidth="7" />
          <path d="M404 216v60M374 246h60M383 225l42 42M425 225l-42 42" stroke="#b8803e" strokeWidth="4" strokeLinecap="round" />
          <circle cx="404" cy="246" r="8" fill="#8a5a22" />
        </g>
      </g>

      {/* bico de saída + gota */}
      <rect data-peca x="112" y="452" width="44" height="22" rx="6" fill="#7c3d1c" stroke="#3d1b0b" strokeWidth="1.5" />
      <path
        className="gota-cai"
        style={{ ["--queda" as string]: "78px" }}
        d="M134 478c-5 7-8 11-8 15a8 8 0 0 0 16 0c0-4-3-8-8-15Z"
        fill="#9fe0d4"
      />
      <ellipse className="onda" cx="134" cy="576" rx="26" ry="5" stroke="#9fe0d4" strokeWidth="2" />

      {/* anotações de projeto */}
      <g fontFamily="var(--font-geist-mono), monospace" fontSize="11" letterSpacing="1.5" fill="#b7c6c0">
        <text data-peca x="482" y="150">
          ENTRADA
        </text>
        <text data-peca x="444" y="282">
          REGISTRO
        </text>
        <text data-peca x="176" y="490">
          SAÍDA
        </text>
      </g>
    </svg>
  );
}
