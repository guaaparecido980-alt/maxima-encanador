/**
 * Configuração central da Máxima Encanador. TODO dado de contato/negócio sai daqui.
 * `null` = ainda não confirmado → o componente correspondente não aparece.
 * Nunca preencher com dado inventado (ano, garantia, preço, endereço, avaliações).
 */
export const empresa = {
  nome: "Máxima Encanador",
  nomeCurto: "Máxima",
  fundacao: null as number | null,
  /**
   * Somente dígitos, com DDI e DDD. PROVISÓRIO: número antigo da Máxima,
   * confirmado pelo Gustavo em 24/11/2026 ("vai mudar"). Trocar só aqui.
   */
  whatsapp: "5541995996771" as string | null,
  telefone: "5541995996771" as string | null,
  email: null as string | null,
  /** Domínio de produção, sem barra no fim. NEXT_PUBLIC_SITE_URL tem prioridade (endereço provisório). */
  dominio: "https://maximaencanador.com" as string | null,
  cidadePrincipal: { nome: "Curitiba", uf: "PR" },
  /** Mesma área da Máxima Desentupidora (confirmado pelo dono). */
  cidadesAtendidas: [
    "Curitiba",
    "São José dos Pinhais",
    "Pinhais",
    "Colombo",
    "Araucária",
    "Almirante Tamandaré",
    "Fazenda Rio Grande",
    "Campo Largo",
  ] as string[],
  atende24h: true as boolean | null,
  horario: "24 horas, todos os dias" as string | null,
  endereco: null as null | { rua: string; bairro: string; cidade: string; uf: string; cep: string },
  cnpj: null as string | null,
  redes: { instagram: null as string | null, facebook: null as string | null },
  /** Link do Perfil da Empresa no Google. PENDENTE. */
  perfilGoogle: null as string | null,
  /** Link "pedir avaliação" do Perfil no Google. PENDENTE. Nunca estrelas sem avaliações reais. */
  linkAvaliacoes: null as string | null,
  /**
   * Compromissos confirmados ("é tudo igual à Máxima"). Sem números:
   * prazo de garantia e tempo de chegada NÃO foram informados.
   */
  compromissos: [
    {
      titulo: "Preço fechado antes da ferramenta sair da caixa",
      texto: "Primeiro o diagnóstico, depois o valor. Você aprova e só então o serviço começa. Nada aparece na conta no fim.",
    },
    {
      titulo: "Piso inteiro sempre que existir outro caminho",
      texto: "A causa é procurada pelos acessos que a casa já tem. Abrir parede ou piso é a última opção, e a decisão é sua.",
    },
    {
      titulo: "Profissional identificado na porta",
      texto: "Quem chega se apresenta pela Máxima. Você sabe quem está entrando na sua casa, no seu prédio ou na sua loja.",
    },
    {
      titulo: "Garantia combinada por escrito",
      texto: "O que a garantia cobre e por quanto tempo fica registrado junto com o orçamento, antes do serviço.",
    },
  ],
  mensagemWhatsApp: "Olá! Vi o site da Máxima Encanador e preciso de um encanador.",
} as const;

/** URL base do site (canonical, sitemap, Open Graph). Inclui o caminho no endereço provisório do GitHub. */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  empresa.dominio ||
  "http://localhost:3300"
).replace(/\/$/, "");

/** Caminho base quando publicado em subpasta (endereço provisório guaaparecido980-alt.github.io/maxima-encanador). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefixa arquivos da pasta public/ (imagens, svg) com o caminho base. */
export const arquivo = (caminho: string) => `${basePath}${caminho}`;

export function linkWhatsApp(mensagem: string = empresa.mensagemWhatsApp) {
  if (!empresa.whatsapp) return null;
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export function linkTelefone() {
  if (!empresa.telefone) return null;
  return `tel:+${empresa.telefone}`;
}

/** "5541995996771" → "(41) 99599-6771". */
export function telefoneFormatado(digitos: string | null) {
  if (!digitos) return null;
  const d = digitos.replace(/^55/, "");
  if (d.length === 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  if (d.length === 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return digitos;
}

export function listaCidades() {
  const c = empresa.cidadesAtendidas;
  return c.length > 1 ? `${c.slice(0, -1).join(", ")} e ${c[c.length - 1]}` : c[0];
}
