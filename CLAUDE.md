@AGENTS.md

# Máxima Encanador — site institucional

Dono do projeto: Gustavo (português simples, sem jargão). Cliente: o mesmo dono da Máxima Desentupidora e da Monaliza Desentupidora (Curitiba/PR).
Projeto irmão: `C:\Users\User\Projetos\monaliza-desentupidora` (monalizadesentupidora.com.br). Os dois são tratados na mesma conversa do Claude.

## Regras inegociáveis
- **Texto 100% original.** Os sites do mesmo dono competem na mesma cidade: nunca copiar frases da Monaliza nem da Máxima Desentupidora.
- **Visual próprio** ("Cobre & Pátina", ver `docs/DESIGN.md`). Não reaproveitar o visual da Monaliza (marinho, pranchas técnicas, Barlow).
- **Não inventar**: anos, nº de clientes, garantias com prazo, tempo de chegada, preços, endereço, CNPJ, avaliações, equipamentos não confirmados. Dado pendente = `null` em `src/config/empresa.ts` e o componente some.
- Sem `AggregateRating`/`Review` sem avaliações reais. GA4/Search Console só por variável de ambiente; GA só com consentimento.
- Respeitar `prefers-reduced-motion`; o texto está todo no HTML (a animação só revela).
- Next.js 16 (App Router, `output: "export"`), React 19, Tailwind 4, GSAP + Lenis, Playwright. Ler `node_modules/next/dist/docs/` antes de usar API do Next.

## Fatos
- Telefone/WhatsApp **provisório**: (41) 99599-6771 (número antigo da Máxima, "vai mudar"). Trocar só em `src/config/empresa.ts`.
- Área: 8 cidades (mesma da Máxima). 24h confirmado. Serviços: os mesmos da Máxima, agrupados em 5 páginas (vazamentos, reparos hidráulicos, desentupimento, caixa de gordura, hidrojateamento).
- Domínio: **maximaencanador.com** (comprado, confirmado em 24/11/2026). Publicado direto nele via GitHub Pages (`public/CNAME`). Ver `docs/PENDENCIAS-E-PUBLICACAO.md`.

## Comandos
- `npm run dev` → http://localhost:3300
- `npm run build` → gera `out/`; `npx serve out -l 3301` para ver igual ao GitHub Pages
- `npx playwright test` (sobe o `out/` sozinho na 3301)
- `node scripts/screenshots.mjs / /contato` (no Git Bash: `MSYS_NO_PATHCONV=1`; `BASE_URL=http://localhost:3301`)
- Ciclo: construir → prints nas 10 larguras → corrigir → repetir; Lighthouse antes de dizer que está pronto.
- Git: commits pequenos em português; nunca commitar `.env*`.
