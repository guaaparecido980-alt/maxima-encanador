# Design DNA — "Cobre & Pátina"

**Conceito:** o cobre é o material do encanador; a pátina é o verde que o cobre ganha com o tempo. Site editorial e calmo, com o cano de cobre como fio condutor. Escolhido para ser o oposto da Monaliza (marinho técnico, cantos chanfrados, fonte condensada).

## Paleta (contraste medido, WCAG AA)
| Token | Cor | Uso |
|---|---|---|
| tinta | #0d1714 | fundos escuros, texto forte |
| patina-escura / patina / patina-clara | #143029 / #1f5247 / #8fc1b5 | seções escuras, detalhes |
| agua | #9fe0d4 | gota, barra de progresso |
| cobre-forte | #a4562f | botão com texto branco (5,1:1) |
| cobre-escuro | #8a4622 | texto/itálico sobre creme (6,1:1) |
| cobre-claro | #e8a57a | itálico e botões sobre tinta (8,9:1) |
| creme / osso | #f3ede3 / #faf7f2 | fundos claros |
| musgo | #55625d | texto secundário sobre creme (5,6:1) |
| nevoa | #b7c6c0 | texto secundário sobre tinta |

## Tipografia
- **Instrument Serif**: títulos, com o trecho-chave em itálico cobre.
- **Geist**: texto. **Geist Mono**: rótulos em caixa alta, com um "cano" antes.

## Formas
Cápsulas e cantos de 1,75 a 2rem (como cano), nunca chanfro. Textura de grão leve nas seções escuras.

## Assinatura
- Logo: "M" feito de cano de cobre com a perna do meio pingando (`src/components/marca/Marca.tsx`).
- Cano com volume feito de traços sobrepostos (escuro → brilho), usado na abertura, no rótulo das seções e na guia vertical.

## Movimento
| Onde | O quê | Como |
|---|---|---|
| Abertura de toda página | palavras do título sobem; na home o cano se monta, o registro gira, o manômetro balança e a gota cai | CSS puro (começa na 1ª pintura, zero JS) |
| Cabeçalho | cano de progresso enche de água com a rolagem | rAF passivo |
| Sintomas | faixa infinita em itálico | CSS |
| Serviços (desktop) | seção fica presa e os cartões passam na horizontal | GSAP ScrollTrigger (pin) |
| Serviços (celular) | cartões empilham | CSS sticky |
| Compromissos / Entenda | cano vertical enche com a rolagem | GSAP scrub |
| Como funciona | ponteiro do manômetro aponta a etapa do centro da tela | GSAP |
| Títulos e blocos | máscara de palavras / surgir | GSAP |
| Botões (mouse) | efeito magnético | GSAP quickTo |
| Desktop | rolagem suave | Lenis (só com mouse) |

GSAP e Lenis carregam depois do load, em etapas curtas. Com "reduzir movimento" tudo fica parado e visível.
