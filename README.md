# Máxima Encanador — site

Site institucional da Máxima Encanador (Curitiba/PR). Next.js 16 (exportação estática para o GitHub Pages) + React 19 + Tailwind 4 + GSAP + Lenis + Playwright.

- `npm run dev` → http://localhost:3300
- `npm run build` → `out/` · `npx serve out -l 3301`
- `npx playwright test`

Onde mexer: dados da empresa em `src/config/empresa.ts`; textos dos serviços em `src/content/servicos.ts`; textos gerais em `src/content/geral.ts`; visual em `src/app/globals.css` e `docs/DESIGN.md`.

Documentos: `docs/DESIGN.md`, `docs/PENDENCIAS-E-PUBLICACAO.md`.
