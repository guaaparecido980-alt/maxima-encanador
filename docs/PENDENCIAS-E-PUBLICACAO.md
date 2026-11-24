# Pendências e publicação

## Dados que faltam (tudo em `src/config/empresa.ts`)
| Dado | Campo | Situação |
|---|---|---|
| Número definitivo de WhatsApp/ligação | `whatsapp`, `telefone` | Provisório: (41) 99599-6771 (antigo da Máxima) |
| Domínio maximaencanador.com | `dominio` + passos abaixo | Pendente |
| E-mail, Instagram, Facebook | `email`, `redes` | Pendente |
| Perfil da Empresa no Google + link de avaliações | `perfilGoogle`, `linkAvaliacoes` | Pendente. Não usar o mesmo telefone nem as mesmas fotos dos perfis da Máxima Desentupidora e da Monaliza |
| CNPJ, ano de fundação, prazo de garantia | `cnpj`, `fundacao`, `compromissos` | Pendente (nada inventado no site) |
| Fotos reais (equipe, veículo, serviços) | `public/fotos/` | Pendente |

## Publicação atual (provisória)
- Repo `guaaparecido980-alt/maxima-encanador` → GitHub Actions → GitHub Pages.
- Endereço: https://guaaparecido980-alt.github.io/maxima-encanador/
- Variáveis do repositório (Settings → Secrets and variables → Actions → Variables): `NEXT_PUBLIC_BASE_PATH=/maxima-encanador`, `NEXT_PUBLIC_SITE_URL=https://guaaparecido980-alt.github.io/maxima-encanador`, `NEXT_PUBLIC_NOINDEX=1` (não indexar o endereço provisório).

## Para ligar o domínio maximaencanador.com
1. DNS na Hostinger: A `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; CNAME `www` → `guaaparecido980-alt.github.io`.
2. Criar `public/CNAME` com `maximaencanador.com`.
3. Apagar as 3 variáveis acima no GitHub (o site passa a usar o domínio e a ser indexado).
4. GitHub → Settings → Pages: domínio `maximaencanador.com` e "Enforce HTTPS".
5. Search Console e sitemap: mesmo passo a passo da Monaliza (`monaliza-desentupidora/docs/SEARCH-CONSOLE.md`).

## Medições (24/11/2026, build local)
- Playwright: 42 testes passando (desktop + celular), 2 pulados de propósito.
- Prints: 11 páginas × 10 larguras (320–1920) sem rolagem lateral e sem erro de console; também com movimento reduzido.
- Lighthouse celular (3 rodadas na home): Performance 95–96, Acessibilidade 100, Boas práticas 100, SEO 100, CLS 0. Serviço: 96.
