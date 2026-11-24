/**
 * Serviços da Máxima Encanador. Cada página de serviço é gerada a partir daqui.
 * Texto 100% original: não reaproveitar frases da Monaliza nem da Máxima Desentupidora
 * (os sites competem na mesma cidade).
 * Equipamentos citados: só os confirmados (hidrojateadora). Sem prazos, preços ou números inventados.
 */
export type Icone = "gota" | "chave" | "ralo" | "caixa" | "jato";

export type Servico = {
  slug: string;
  nome: string;
  nomeCurto: string;
  icone: Icone;
  tituloSeo: string;
  descricaoSeo: string;
  h1: string;
  /** Parte do H1 em itálico cobre (precisa existir dentro do h1). */
  destaque: string;
  chamada: string;
  resumo: string;
  sinais: string[];
  secoes: { titulo: string; texto: string }[];
  frentes?: { nome: string; texto: string }[];
  etapas: { titulo: string; texto: string }[];
  faq: { pergunta: string; resposta: string }[];
  mensagem: string;
  relacionados: string[];
};

export const servicos: Servico[] = [
  {
    slug: "vazamentos",
    nome: "Conserto e localização de vazamentos",
    nomeCurto: "Vazamentos",
    icone: "gota",
    tituloSeo: "Encanador para vazamento em Curitiba: localização e conserto",
    descricaoSeo:
      "Conta de água subindo, mancha na parede ou piso úmido? A Máxima Encanador localiza o vazamento por etapas e conserta abrindo só o necessário. Curitiba, 24h.",
    h1: "Vazamento achado na origem, não no chute",
    destaque: "na origem",
    chamada:
      "Água que some sem aparecer é dinheiro escoando e estrutura estragando. O trabalho começa por descobrir onde ela está saindo, antes de qualquer quebra.",
    resumo: "Conta alta, mancha, umidade ou barulho de água correndo. Localizamos o ponto e consertamos abrindo o mínimo.",
    sinais: [
      "Conta de água maior sem mudança de hábito",
      "Hidrômetro girando com tudo fechado",
      "Mancha, bolha ou mofo na parede",
      "Piso frio, úmido ou com rejunte escurecendo",
      "Barulho de água correndo de madrugada",
      "Caixa d'água enchendo sem parar",
    ],
    secoes: [
      {
        titulo: "Por que não sair quebrando",
        texto:
          "A água anda dentro da parede e aparece longe do furo. A mancha no quarto pode vir do banheiro ao lado; a umidade no térreo pode descer do andar de cima. Quebrar onde a água aparece costuma abrir o lugar errado e dobrar a reforma.",
      },
      {
        titulo: "Como o ponto é isolado",
        texto:
          "A rede é dividida em trechos: fria e quente, entrada da rua e saída da caixa, cada banheiro, a cozinha. Fechando registros e observando o hidrômetro e os pontos de consumo, o encanador elimina trecho por trecho até sobrar um só. É ali que se abre, e só ali.",
      },
      {
        titulo: "Depois do conserto",
        texto:
          "O trecho é testado com a água aberta antes de fechar a parede ou o piso. Você vê o hidrômetro parado e a peça trocada. O acabamento (azulejo, massa, pintura) fica combinado no orçamento: se a Máxima faz ou se fica por sua conta.",
      },
    ],
    etapas: [
      { titulo: "Conversa e leitura do hidrômetro", texto: "Você conta o que notou; o técnico confere se há consumo com tudo fechado." },
      { titulo: "Isolamento por trechos", texto: "Registro por registro, até restar o trecho onde a água está escapando." },
      { titulo: "Valor antes de abrir", texto: "Com o ponto definido, você recebe o preço do conserto e decide." },
      { titulo: "Conserto e teste", texto: "Troca da conexão ou do tubo danificado e teste com a água aberta." },
    ],
    faq: [
      {
        pergunta: "Como saber se o vazamento é dentro de casa ou na rua?",
        resposta:
          "Feche todas as torneiras e o registro geral e olhe o hidrômetro. Se ele continua girando com o registro geral fechado, o problema está entre o hidrômetro e o registro. Se para com o geral fechado e volta a girar quando você abre, o vazamento está na rede da casa.",
      },
      {
        pergunta: "Vai precisar quebrar parede ou piso?",
        resposta:
          "Se o tubo danificado estiver embutido, sim, mas só no ponto encontrado. Por isso o tempo gasto localizando vale a pena: abre-se um trecho pequeno em vez de vários palpites.",
      },
      {
        pergunta: "Vocês atendem vazamento no fim de semana e à noite?",
        resposta:
          "Sim. O atendimento é 24 horas, todos os dias. Em vazamento forte, feche o registro geral enquanto espera o técnico.",
      },
      {
        pergunta: "O conserto tem garantia?",
        resposta:
          "Tem. O que ela cobre e o prazo ficam escritos no orçamento, antes de o serviço começar.",
      },
    ],
    mensagem: "Olá! Acho que tenho um vazamento e preciso de um encanador para localizar.",
    relacionados: ["reparos-hidraulicos", "desentupimento"],
  },
  {
    slug: "reparos-hidraulicos",
    nome: "Reparos e instalações hidráulicas",
    nomeCurto: "Reparos hidráulicos",
    icone: "chave",
    tituloSeo: "Encanador em Curitiba para reparos hidráulicos, 24 horas",
    descricaoSeo:
      "Torneira pingando, registro travado, descarga que não para, cano estourado ou peça para trocar. Encanador da Máxima em Curitiba e região, a qualquer hora.",
    h1: "O conserto pequeno que não pode esperar",
    destaque: "não pode esperar",
    chamada:
      "Torneira que pinga, descarga que não desliga, registro que não fecha. Parece pouco, mas é água correndo o dia inteiro e um problema que cresce.",
    resumo: "Torneiras, registros, válvulas de descarga, sifões, engates e canos rompidos. Troca de peça com teste na hora.",
    sinais: [
      "Torneira ou chuveiro pingando fechado",
      "Descarga que não para de correr",
      "Registro duro, travado ou vazando pela haste",
      "Engate ou sifão molhando o gabinete",
      "Cano estourado ou conexão soltando água",
      "Pressão fraca em um ponto só da casa",
    ],
    secoes: [
      {
        titulo: "Consertar ou trocar",
        texto:
          "Nem toda torneira pingando precisa ser trocada: muitas vezes é o reparo interno (vedante ou mecanismo) que gastou. O encanador mostra a peça desgastada e explica as duas opções com o preço de cada uma. Você escolhe.",
      },
      {
        titulo: "Peça compatível com o que já existe",
        texto:
          "Reparo de registro, mecanismo de caixa acoplada e válvula de descarga variam de fabricante para fabricante. A peça é escolhida pelo modelo instalado na sua casa, para não virar uma troca de acabamento que você não pediu.",
      },
      {
        titulo: "Emergência: o que fazer até o técnico chegar",
        texto:
          "Cano estourado: feche o registro do ambiente ou o geral (perto do hidrômetro ou na saída da caixa d'água). Se houver água perto de tomadas, desligue o disjuntor daquele circuito. Tire o que puder do chão e chame.",
      },
    ],
    etapas: [
      { titulo: "Você descreve ou manda foto", texto: "Pelo WhatsApp já dá para entender o tipo de peça e o que levar." },
      { titulo: "Diagnóstico no local", texto: "O técnico confirma a causa e mostra o que está gasto ou quebrado." },
      { titulo: "Preço e escolha", texto: "Consertar ou trocar: você decide com os valores na mão." },
      { titulo: "Execução e teste", texto: "Peça instalada, vedação conferida e água aberta para testar." },
    ],
    faq: [
      {
        pergunta: "Posso mandar foto antes para adiantar?",
        resposta:
          "Pode e ajuda. Foto da peça, da etiqueta do registro ou do vaso e um vídeo curto do vazamento deixam o atendimento mais rápido.",
      },
      {
        pergunta: "Vocês trazem a peça ou eu compro?",
        resposta:
          "Os dois jeitos funcionam. Combine na conversa: o técnico pode levar a peça e incluir no orçamento, ou instalar a que você já comprou.",
      },
      {
        pergunta: "Atendem apartamento e comércio?",
        resposta:
          "Sim: casas, apartamentos, condomínios, lojas e restaurantes em Curitiba e região metropolitana.",
      },
      {
        pergunta: "A descarga não para de correr. É urgente?",
        resposta:
          "Não é perigoso, mas gasta muita água. Feche o registro do vaso (atrás ou ao lado dele) e use a descarga só quando precisar, até o conserto.",
      },
    ],
    mensagem: "Olá! Preciso de um encanador para um reparo hidráulico.",
    relacionados: ["vazamentos", "desentupimento"],
  },
  {
    slug: "desentupimento",
    nome: "Desentupimento de pia, vaso, ralo e esgoto",
    nomeCurto: "Desentupimento",
    icone: "ralo",
    tituloSeo: "Desentupimento em Curitiba: pia, vaso, ralo e esgoto, 24h",
    descricaoSeo:
      "Pia parada, vaso transbordando, ralo com água ou esgoto voltando? A Máxima Encanador desentope pelo próprio encanamento, sem quebrar. Curitiba e região, 24h.",
    h1: "A água voltou a descer. E ficou tudo limpo",
    destaque: "voltou a descer",
    chamada:
      "Entupimento tem causa: gordura, cabelo, objeto, raiz, cano com caimento errado. Achar a causa é o que separa resolver hoje de chamar de novo no mês que vem.",
    resumo: "Pia, vaso sanitário, ralo e rede de esgoto. Desobstrução pelo próprio encanamento, sem quebra.",
    sinais: [
      "Água descendo devagar ou parada",
      "Barulho de borbulho no ralo ou no vaso",
      "Cheiro de esgoto subindo",
      "Água voltando em outro ponto da casa",
      "Caixa de inspeção cheia ou transbordando",
      "Mais de um ponto entupido ao mesmo tempo",
    ],
    secoes: [
      {
        titulo: "Um ponto entupido ou a rede toda?",
        texto:
          "Se só a pia da cozinha está lenta, o problema costuma estar no sifão ou no ramal dela. Se o vaso, o ralo do box e a área de serviço reclamam juntos, a obstrução está mais adiante, na rede que junta tudo. Essa leitura define por onde começar e evita mexer onde não precisa.",
      },
      {
        titulo: "Por que produto de mercado nem sempre resolve",
        texto:
          "Soda e desentupidor químico abrem um furo na gordura, mas não tiram o que está grudado na parede do cano; o entupimento volta. Em tubos antigos, o produto ainda ataca as conexões. A desobstrução mecânica remove o material de verdade.",
      },
    ],
    frentes: [
      {
        nome: "Pia de cozinha e banheiro",
        texto:
          "Na cozinha, quase sempre é gordura que esfria e endurece no cano, prendendo resto de comida. No banheiro, cabelo e sabão. O trabalho começa pelo sifão e segue pelo ramal até a caixa.",
      },
      {
        nome: "Vaso sanitário",
        texto:
          "Objeto, excesso de papel ou lenço umedecido. Sempre que dá, o vaso é desentupido sem ser retirado do lugar; quando precisa sair, a vedação é refeita na recolocação.",
      },
      {
        nome: "Ralos de box, área e quintal",
        texto:
          "Cabelo, areia, folhas e sabão formam uma massa no ralo e na caixa sifonada. Limpeza dos dois, com teste de escoamento no fim.",
      },
      {
        nome: "Rede de esgoto",
        texto:
          "Esgoto voltando ou caixa transbordando indica obstrução no trecho entre as caixas de inspeção ou até a rede da rua. A desobstrução é feita pelas caixas, sem abrir o piso.",
      },
    ],
    etapas: [
      { titulo: "Onde e desde quando", texto: "Quais pontos estão lentos e o que mudou ajudam a localizar a obstrução." },
      { titulo: "Teste dos pontos", texto: "O técnico confere cada ralo e caixa para saber se é local ou da rede." },
      { titulo: "Preço antes", texto: "Você recebe o valor do serviço e aprova." },
      { titulo: "Desobstrução e prova", texto: "Água corrente em todos os pontos afetados, com você vendo, e área limpa." },
    ],
    faq: [
      {
        pergunta: "Precisa quebrar piso para desentupir?",
        resposta:
          "Na grande maioria dos casos, não. O acesso é feito pelo sifão, pelo ralo, pelas caixas de inspeção ou pelo próprio vaso. Quebra só se o cano estiver rompido ou afundado, e isso é conversado antes.",
      },
      {
        pergunta: "O entupimento voltou depois de poucos dias. Por quê?",
        resposta:
          "Normalmente porque só se abriu passagem e a gordura continuou presa no cano, ou porque existe um defeito (cano com caimento errado, raiz, peça quebrada). Nesses casos o técnico explica a causa e as opções, inclusive hidrojateamento.",
      },
      {
        pergunta: "Atendem esgoto de condomínio?",
        resposta:
          "Sim. Colunas, ramais e redes de condomínio, com horário combinado com o síndico ou a administração.",
      },
      {
        pergunta: "Atendem de madrugada?",
        resposta: "Sim, 24 horas, todos os dias, em Curitiba e região metropolitana.",
      },
    ],
    mensagem: "Olá! Estou com um entupimento e preciso de atendimento.",
    relacionados: ["caixa-de-gordura", "hidrojateamento"],
  },
  {
    slug: "caixa-de-gordura",
    nome: "Limpeza de caixa de gordura",
    nomeCurto: "Caixa de gordura",
    icone: "caixa",
    tituloSeo: "Limpeza de caixa de gordura em Curitiba: casa e restaurante",
    descricaoSeo:
      "Caixa de gordura cheia, com cheiro ou voltando na pia? Limpeza completa para casas, condomínios e cozinhas comerciais em Curitiba e região. Atendimento 24h.",
    h1: "Cozinha funcionando, quintal sem cheiro",
    destaque: "sem cheiro",
    chamada:
      "A caixa de gordura existe para segurar o que não pode ir para o esgoto. Quando enche, ela devolve: cheiro no quintal, pia lenta e, no pior caso, transbordo.",
    resumo: "Retirada da gordura e dos resíduos, limpeza das paredes e conferência de entrada e saída.",
    sinais: [
      "Cheiro forte perto da caixa ou do ralo da cozinha",
      "Pia da cozinha escoando devagar",
      "Crosta grossa de gordura na superfície da caixa",
      "Água suja saindo pela tampa",
      "Moscas e insetos em volta da caixa",
    ],
    secoes: [
      {
        titulo: "De quanto em quanto tempo limpar",
        texto:
          "Depende do tamanho da caixa e de quanto se cozinha. Uma casa com pouca fritura aguenta bem mais tempo que um restaurante que frita o dia todo. O sinal prático é a camada de gordura: quando ela ocupa boa parte da caixa, passou da hora. O técnico pode olhar a sua caixa e sugerir uma frequência para o seu caso.",
      },
      {
        titulo: "Cozinha comercial",
        texto:
          "Em restaurante, lanchonete e padaria, caixa cheia pode parar a cozinha. A limpeza pode ser agendada para antes ou depois do expediente. O material retirado é acondicionado e o local fica limpo para voltar a operar.",
      },
      {
        titulo: "Para durar mais",
        texto:
          "Óleo de fritura vai em garrafa para o ponto de coleta, nunca na pia. Raspe pratos e panelas no lixo antes de lavar e use ralo com peneira na cuba. Isso diminui muito a gordura que chega na caixa.",
      },
    ],
    etapas: [
      { titulo: "Abertura e avaliação", texto: "O técnico vê o nível de gordura e o estado da caixa." },
      { titulo: "Preço antes", texto: "Valor combinado com você antes de começar." },
      { titulo: "Retirada e limpeza", texto: "Gordura e resíduos retirados, paredes e fundo limpos." },
      { titulo: "Teste e fechamento", texto: "Água corrente pela pia até a saída da caixa; tampa fechada e área limpa." },
    ],
    faq: [
      {
        pergunta: "A limpeza da caixa resolve a pia lenta?",
        resposta:
          "Se a caixa cheia for a causa, sim. Se o cano entre a pia e a caixa também estiver com gordura, o técnico avisa e o desentupimento desse trecho entra no orçamento.",
      },
      {
        pergunta: "Atendem fora do horário do restaurante?",
        resposta: "Sim. O atendimento é 24 horas, então dá para limpar antes de abrir ou depois de fechar.",
      },
      {
        pergunta: "Atendem condomínio com caixa coletiva?",
        resposta: "Sim. O horário é combinado com o síndico ou a administração para não atrapalhar os moradores.",
      },
    ],
    mensagem: "Olá! Preciso de limpeza de caixa de gordura.",
    relacionados: ["desentupimento", "hidrojateamento"],
  },
  {
    slug: "hidrojateamento",
    nome: "Hidrojateamento de tubulações",
    nomeCurto: "Hidrojateamento",
    icone: "jato",
    tituloSeo: "Hidrojateamento em Curitiba: limpeza de tubulação e esgoto",
    descricaoSeo:
      "Hidrojateamento para tirar gordura endurecida, crosta e resíduos da tubulação de casas, condomínios e empresas em Curitiba e região. Corretivo e preventivo.",
    h1: "Cano limpo por dentro, de ponta a ponta",
    destaque: "por dentro",
    chamada:
      "Quando o entupimento volta sempre, o problema não é o ponto: é o cano inteiro forrado de gordura e crosta. O jato de água em alta pressão raspa a parede do tubo e devolve o diâmetro.",
    resumo: "Jato de água em alta pressão que remove gordura, crosta e resíduos das paredes da tubulação.",
    sinais: [
      "Entupimento que volta pouco tempo depois",
      "Vários pontos lentos ao mesmo tempo",
      "Rede de condomínio com histórico de transbordo",
      "Cozinha comercial com muita gordura na rede",
      "Cano antigo com escoamento cada vez mais fraco",
    ],
    secoes: [
      {
        titulo: "Diferença para o desentupimento comum",
        texto:
          "O desentupimento abre passagem. O hidrojateamento limpa a tubulação inteira: o bico entra pelo acesso da rede, solta jatos para trás e para os lados e vai raspando a gordura e a crosta enquanto avança. O que sai é levado pela própria água.",
      },
      {
        titulo: "Corretivo ou preventivo",
        texto:
          "Corretivo, quando já existe obstrução ou escoamento ruim. Preventivo, para redes que entopem com frequência (condomínios, restaurantes, indústrias): uma limpeza programada evita a emergência e o transbordo em hora ruim.",
      },
      {
        titulo: "Sem obra",
        texto:
          "A máquina trabalha pelas caixas de inspeção e pelos acessos que a rede já tem. Não é preciso abrir piso para hidrojatear.",
      },
    ],
    etapas: [
      { titulo: "Mapa dos acessos", texto: "Identificação das caixas e dos trechos que serão limpos." },
      { titulo: "Preço antes", texto: "Valor fechado conforme a extensão e o estado da rede." },
      { titulo: "Jateamento por trecho", texto: "Limpeza caixa a caixa, de montante a jusante." },
      { titulo: "Teste de vazão", texto: "Água corrente em toda a rede limpa e caixas fechadas." },
    ],
    faq: [
      {
        pergunta: "Hidrojateamento danifica o cano?",
        resposta:
          "Em tubulação em bom estado, não: a pressão e o bico são escolhidos conforme o material e o diâmetro do cano. Se a rede estiver muito comprometida, isso é avisado antes.",
      },
      {
        pergunta: "Precisa quebrar alguma coisa?",
        resposta: "Não. O serviço é feito pelas caixas de inspeção e acessos existentes.",
      },
      {
        pergunta: "Fazem hidrojateamento preventivo em condomínio?",
        resposta:
          "Sim. A frequência é combinada com o síndico conforme o histórico da rede, e o serviço é agendado em horário de menor uso.",
      },
    ],
    mensagem: "Olá! Gostaria de um orçamento de hidrojateamento.",
    relacionados: ["desentupimento", "caixa-de-gordura"],
  },
];

export function getServico(slug: string) {
  return servicos.find((s) => s.slug === slug);
}
