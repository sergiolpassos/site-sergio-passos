// =====================================================================
// BLOG
// Para publicar um texto novo, copie um bloco abaixo e preencha os campos.
// - date: no formato "AAAA-MM-DD"
// - linkedin: link do post original (opcional)
// - body: o texto. Separe parágrafos com uma linha em branco.
//   "## " no início da linha vira subtítulo e "- " vira item de lista.
//   "![legenda](imagem)" insere uma imagem (use a chave de images abaixo).
// Os posts aparecem do mais recente para o mais antigo.
// =====================================================================

import casa from "@/assets/cases/riachuelo-work-items-casa.webp"

export const blogImages: Record<string, string> = {
  casa,
}

export type Post = {
  slug: string
  title: string
  summary: string
  date: string
  linkedin?: string
  body: string
}

export const posts: Post[] = [
  {
    slug: "pdca-e-sdca-melhorar-e-proteger-o-ganho",
    title: "PDCA e SDCA: melhorar um processo e proteger o ganho",
    summary: "Dois ciclos da gestão da qualidade que raramente aparecem sozinhos, e por que um sem o outro faz o time regredir.",
    date: "2026-10-21",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7518627407453401088/",
    body: "Melhorar um processo sem proteger o ganho depois é como empurrar uma pedra ladeira acima e soltar a mão. Ela volta.\n\nNo nono episódio do Minuto Ágil eu trouxe dois ciclos da gestão da qualidade que raramente aparecem sozinhos:\n\n- PDCA (Plan, Do, Check, Act): testa mudanças e melhora processos que ainda não funcionam bem o suficiente.\n- SDCA (Standardize, Do, Check, Act): padroniza e protege o que já funciona, para ninguém regredir.\n\nA pergunta que cada um responde é diferente. O PDCA pergunta \"como eu faço isso funcionar melhor?\". O SDCA pergunta \"como eu garanto que isso continue funcionando sempre?\".\n\n## Um exemplo\n\nUm time de suporte usou o PDCA para testar uma triagem automática e reduziu o tempo de resposta de 24 horas para 4 horas. Só depois disso o SDCA entrou para documentar o novo fluxo como padrão e monitorar se as 4 horas continuam sendo cumpridas. E só então veio o próximo PDCA.\n\nSeu time já usa os dois ciclos?",
  },
  {
    slug: "gente-nao-e-receita-de-bolo-e-time-tambem-nao",
    title: "Gente não é receita de bolo. E time também não",
    summary: "Mesmo framework, resultados opostos: por que copiar o modelo de outra empresa não traz a cultura junto.",
    date: "2026-10-16",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7516958671633903616/",
    body: "Se você pegasse todos os elementos químicos do seu corpo e misturasse numa tigela, não teria uma pessoa.\n\nBiologicamente, somos feitos de quase nada: oxigênio, carbono, hidrogênio, nitrogênio e muita água. Os mesmos ingredientes em praticamente todo ser humano. E mesmo assim, ninguém é igual a ninguém.\n\nPorque gente não é receita de bolo. E time também não.\n\n- Mesmo framework, resultados opostos: dois times rodando Scrum \"by the book\" podem ter destinos completamente diferentes.\n- Copiar o modelo de outra empresa não traz a cultura junto: você importa os rituais, não o contexto que os fez funcionar.\n- O valor está nas conexões, não nas peças: confiança, conversas difíceis e aprendizado acumulado não cabem num template.\n- Medir só os ingredientes engana: ter PO, SM, daily e retro não significa que existe um time de verdade.\n\n## O insight\n\nFrameworks são ponto de partida, não receita. O que transforma um grupo de pessoas em time é o que acontece entre elas, e isso não se compra pronto nem se replica com copiar e colar.\n\nNa sua experiência, qual foi a receita que mais viu falhar quando foi aplicada sem considerar o contexto?",
  },
  {
    slug: "output-vs-outcome",
    title: "Output ou outcome: o que o seu time está medindo?",
    summary: "Entregar tudo no prazo e não mudar nada para o negócio: a diferença entre o que você faz e o que acontece por causa disso.",
    date: "2026-10-14",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7516098003640844289/",
    body: "Seu time pode entregar tudo dentro do prazo e mesmo assim não mudar absolutamente nada para o negócio.\n\nIsso acontece quando se confunde output com outcome.\n\n- Output é aquilo que você faz: a feature, a entrega, a saída do processo.\n- Outcome é o que acontece por causa disso: o resultado real gerado.\n- Os dois nascem de lugares diferentes: um das iniciativas, o outro dos objetivos de negócio.\n- Os dois se medem de formas diferentes: performance de execução de um lado, sucesso de mercado do outro.\n\n## Um jeito simples de lembrar\n\nOutputs existem para suportar e entregar outcomes. Lançar o checkout novo em 2 semanas é output. A taxa de abandono de carrinho cair é outcome. Só o segundo prova que valeu a pena.\n\nSua equipe mede outputs, outcomes ou só entregas?",
  },
  {
    slug: "contexto-muda-a-resposta-da-ia",
    title: "Mesma pergunta, mesma IA, respostas diferentes: o contexto",
    summary: "Um exemplo com batimentos cardíacos, outro do dia a dia de produto e o checklist que uso antes de cada pedido.",
    date: "2026-10-09",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7514301234573369344/",
    body: "Mesma pergunta. Mesma IA. Respostas completamente diferentes.\n\nA diferença não estava na ferramenta. Estava no contexto.\n\n## Um exemplo fora do trabalho\n\nPergunte para uma IA: \"Minha frequência cardíaca em repouso é 52 bpm. Está normal?\"\n\nSem contexto, a resposta tende a ser genérica: está abaixo do comum, pode ser bradicardia, procure um médico.\n\nAgora acrescente: \"Tenho 45 anos, corro 30 km por semana há 5 anos, sem histórico cardíaco e sem sintomas.\" O mesmo 52 bpm passa a ser compatível com bom condicionamento físico.\n\nSe fosse: \"Sou sedentário, uso remédio para pressão e sinto tontura ao levantar.\" O mesmo número agora merece atenção médica.\n\nO dado era igual. O contexto mudou tudo.\n\n## No trabalho, é igual\n\nSem contexto: \"Crie histórias de usuário para um app de delivery.\" Resultado: histórias genéricas, que servem para qualquer empresa e para nenhuma.\n\nCom contexto: delivery de farmácia, público acima de 60 anos, abandono de 40% no checkout, medicamento controlado exige receita, critérios de aceite em Gherkin. Resultado: um ponto de partida real para o refinamento.\n\nA qualidade da resposta da IA é proporcional à qualidade do contexto que você entrega. Ninguém espera que um time entregue valor com uma demanda de uma linha, sem objetivo e sem critério de pronto. Com a IA, vale a mesma regra.\n\n## O checklist antes de cada pedido\n\n- Qual o cenário ou público?\n- Qual problema quero resolver?\n- Quais regras e restrições existem?\n- Como quero receber a resposta?",
  },
  {
    slug: "moscow-priorizacao-quando-nao-cabe-num-numero",
    title: "MoSCoW: quando a priorização não cabe num número",
    summary: "Must, Should, Could e Won't: organizar o backlog quando os critérios de decisão são variados demais para uma fórmula.",
    date: "2026-09-30",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7511032660723474432/",
    body: "Nem toda priorização cabe num número. Às vezes os critérios de decisão são variados demais para virar uma fórmula, e aí entra o MoSCoW.\n\nNo sexto episódio do Minuto Ágil eu trouxe esse framework que organiza o backlog em 4 categorias:\n\n- Must Have: crítico, o produto não funciona sem isso.\n- Should Have: importante, mas pode esperar um pouco.\n- Could Have: bom ter, nada crítico se ficar de fora.\n- Won't Have: não agora, mas prioridades mudam.\n\nNo episódio, mostro o exemplo de uma plataforma de cursos com 4 funcionalidades candidatas ao próximo ciclo, e como o time chegou à ordem final depois de um brainstorming em grupo, comparando o impacto de não fazer cada uma.\n\nUm ponto importante antes de aplicar: framework nenhum é receita de bolo. Você vai correr risco, vai errar a mão às vezes e vai precisar envolver mais gente na decisão.\n\nSua equipe já usa MoSCoW ou prioriza mais no feeling?",
  },
  {
    slug: "o-dilema-do-fim-da-agilidade",
    title: "O dilema do fim da Agilidade",
    summary: "Agile não morreu. O que está morrendo é uma visão de Agilidade baseada em cerimônias, ferramentas e processos.",
    date: "2026-09-25",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7509205228974551040/",
    body: "\"Scrum não funciona mais.\" \"Agile morreu.\" \"As empresas estão abandonando a Agilidade.\"\n\nSinceramente? Eu não acho que a Agilidade morreu. Acho que estamos começando a abandonar algumas formas ruins de fazer Agilidade.\n\nDepois de muitos anos trabalhando com Tecnologia, Projetos, Produto e Agilidade, uma coisa ficou muito clara para mim: Agilidade nunca foi sobre fazer mais reuniões. Nunca foi sobre quantidade de story points. Nunca foi sobre ter um quadro bonito no Jira. E muito menos sobre seguir um framework como uma receita de bolo.\n\nAgilidade deveria servir para algo muito mais simples: entregar valor, aprender rápido e se adaptar.\n\n## Confundimos o meio com o fim\n\n- Daily virou reunião de status.\n- Sprint virou uma corrida para fechar pontos.\n- Velocidade virou indicador de produtividade.\n- O backlog virou uma lista interminável de tarefas.\n\nE algumas perguntas importantes ficaram para trás. Estamos resolvendo o problema certo? O cliente percebe valor? O negócio está melhorando? Estamos aprendendo? Estamos entregando resultado ou apenas entregáveis?\n\n## De volta ao problema, ao cliente e ao resultado\n\nUm time não deveria ser reconhecido porque entregou 80 pontos. Deveria ser reconhecido porque resolveu um problema relevante. Um Product Owner não deveria ser avaliado pelo tamanho do backlog, e sim pela qualidade das decisões. E um Scrum Master não deveria existir apenas para garantir que todas as cerimônias aconteçam.\n\nTalvez a grande pergunta seja: estamos sendo ágeis ou apenas fazendo Agile?\n\nAgilidade não morreu. Talvez ela esteja apenas voltando a ser aquilo que sempre deveria ter sido: uma forma melhor de gerar valor.",
  },
  {
    slug: "matriz-rice-priorizacao-de-backlog",
    title: "Matriz RICE: alcance grande não significa prioridade alta",
    summary: "Reach, Impact, Confidence e Effort numa fração simples para priorizar o backlog com menos achismo.",
    date: "2026-09-23",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7508480842092961792/",
    body: "Alcance grande não significa prioridade alta. Isso só fica claro quando você faz a conta certa.\n\nNo quinto episódio do Minuto Ágil eu trouxe a Matriz RICE, um framework de priorização de backlog que cruza 4 critérios:\n\n- Reach: quantas pessoas serão impactadas.\n- Impact: o tamanho do efeito, numa escala de 0,25 a 3.\n- Confidence: quão confiante você está no resultado.\n- Effort: quão complexo é executar.\n\nA conta é (Reach x Impact x Confidence) dividido por Effort.\n\nNo exemplo do episódio, um app de saúde para idosos tinha 3 iniciativas na mesa. A que tinha o maior alcance nem foi a vencedora, porque impacto e confiança pesaram mais na conta final.\n\nSua empresa já usa RICE, ICE ou ainda decide no feeling?",
  },
  {
    slug: "os-5-porques-causa-raiz",
    title: "Os 5 porquês: pare de resolver o sintoma",
    summary: "Uma técnica simples de análise de causa raiz, e por que nem sempre são exatamente cinco perguntas.",
    date: "2026-09-09",
    linkedin: "https://www.linkedin.com/feed/update/urn:li:activity:7503406935451463680/",
    body: "Toda vez que você resolve o sintoma e não a causa, o problema volta. Só muda a roupa.\n\nNo terceiro episódio do Minuto Ágil eu trouxe a técnica dos 5 porquês, um método simples de análise de causa raiz que Simon Sinek já citava em Comece pelo Porquê:\n\n- Por que o \"por quê\" gera mais conexão do que o \"o quê\" ou o \"como\".\n- A diferença entre atacar o efeito e resolver de fato a causa raiz.\n- Situações onde a técnica funciona, muito além de bug de sistema.\n- Um caso real, passo a passo, mostrando como cada resposta abre a próxima pergunta.\n\nNo exemplo do episódio, bastaram 4 porquês para chegar à causa raiz. A regra não é o número, é parar só quando você encontrar a origem de verdade.\n\nQual foi a última vez que você resolveu um sintoma achando que tinha resolvido o problema?",
  },
]

export function sortedPosts() {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date))
}

export function formatDate(iso: string, opts: Intl.DateTimeFormatOptions = { day: "2-digit", month: "short" }) {
  const [y, m, d] = iso.split("-").map(Number)
  return new Date(y, m - 1, d).toLocaleDateString("pt-BR", opts).replace(".", "")
}

export function readingMinutes(body: string) {
  return Math.max(1, Math.round(body.split(/\s+/).length / 200))
}
