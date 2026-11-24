# Pendências e publicação

## Dados que faltam (tudo em `src/config/empresa.ts`)
| Dado | Campo | Situação |
|---|---|---|
| Número definitivo de WhatsApp/ligação | `whatsapp`, `telefone` | Provisório: (41) 99599-6771 (antigo da Máxima) |
| Domínio maximaencanador.com | `dominio` + `public/CNAME` | Comprado (confirmado 24/11). Falta apontar o DNS |
| E-mail, Instagram, Facebook | `email`, `redes` | Pendente |
| Perfil da Empresa no Google + link de avaliações | `perfilGoogle`, `linkAvaliacoes` | Pendente. Não usar o mesmo telefone nem as mesmas fotos dos perfis da Máxima Desentupidora e da Monaliza |
| CNPJ, ano de fundação, prazo de garantia | `cnpj`, `fundacao`, `compromissos` | Pendente (nada inventado no site) |
| Fotos reais (equipe, veículo, serviços) | `public/fotos/` | Pendente |

## Publicação
- Repo `guaaparecido980-alt/maxima-encanador` → GitHub Actions → GitHub Pages, direto no domínio (sem endereço provisório).
- DNS no painel onde o domínio foi comprado: A `@` → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153; CNAME `www` → `guaaparecido980-alt.github.io`. Apagar A/CNAME antigos de `@` e `www`.
- GitHub → Settings → Pages: domínio `maximaencanador.com` + "Enforce HTTPS" (o certificado sai depois que o DNS propagar).
- As variáveis `NEXT_PUBLIC_BASE_PATH`, `NEXT_PUBLIC_SITE_URL` e `NEXT_PUBLIC_NOINDEX` continuam suportadas no workflow, mas **não devem existir** com o domínio ligado.
- Depois: Search Console + sitemap (passo a passo em `monaliza-desentupidora/docs/SEARCH-CONSOLE.md`).

## Medições (24/11/2026, build local)
- Playwright: 42 testes passando (desktop + celular), 2 pulados de propósito.
- Prints: 11 páginas × 10 larguras (320–1920) sem rolagem lateral e sem erro de console; também com movimento reduzido.
- Lighthouse celular (3 rodadas na home): Performance 95–96, Acessibilidade 100, Boas práticas 100, SEO 100, CLS 0. Serviço: 96.
