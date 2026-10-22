// =====================================================================
// PROJETOS (CASES)
// Cada projeto tem as seções: desafio, papel, como foi feito, decisões e resultados.
// Números usados aqui vêm dos materiais dos projetos. Ao incluir um número novo,
// use apenas dados que você consegue comprovar numa entrevista.
// =====================================================================

import casa from "@/assets/cases/riachuelo-work-items-casa.webp"
import cicloDemanda from "@/assets/cases/riachuelo-ciclo-demanda.webp"
import workflowFeatures from "@/assets/cases/riachuelo-workflow-features.webp"
import dash3Niveis from "@/assets/cases/riachuelo-dash-painel-indicadores-3-niveis.webp"
import dashThroughput from "@/assets/cases/riachuelo-dash-features-throughput-lead-time.webp"
import dashAging from "@/assets/cases/riachuelo-dash-features-aging.webp"
import dashWip from "@/assets/cases/riachuelo-dash-features-wip.webp"
import dashIncidentes from "@/assets/cases/riachuelo-dash-incidentes-metricas-fluxo.webp"
import dashBugs from "@/assets/cases/riachuelo-dash-bugs-metricas-qualidade.webp"
import bloqueios from "@/assets/cases/riachuelo-gestao-bloqueios.webp"
import niveisVoo from "@/assets/cases/pernambucanas-niveis-de-voo.webp"
import jeitoEntregar from "@/assets/cases/pernambucanas-jeito-de-entregar-valor.webp"
import cadencias from "@/assets/cases/pernambucanas-cadencias-kanban.webp"
import reguaMaturidade from "@/assets/cases/pernambucanas-regua-maturidade.webp"
import radarMaturidade from "@/assets/cases/pernambucanas-radar-maturidade.webp"

export type Metric = { value: string; label: string; detail?: string }
export type Figure = { src: string; alt: string; caption: string }

export type Project = {
  slug: string
  title: string
  tagline: string
  summary: string
  company: string
  period: string
  sector: string
  role: string
  scope?: string
  partners?: string
  featured?: boolean
  /** Etiquetas curtas exibidas na lista de projetos */
  impact: string[]
  /** Números de destaque (cards no topo e no fim do case) */
  metrics: Metric[]
  /** Antes e depois em barras (opcional) */
  beforeAfter?: { before: number; after: number; unit: string; label: string }
  challenge: { problem: string; why: string; approach: string }
  objective?: string
  roleText: string
  collaborators: string[]
  steps: { title: string; text: string; figure?: Figure; matrix?: boolean }[]
  decisions: { title: string; text: string }[]
  diagnostic?: {
    title: string
    note: string
    strengths: { pct: number; label: string }[]
    gaps: { pct: number; label: string }[]
  }
  /** Distribuição de squads por nível de maturidade, antes e depois */
  maturityShift?: {
    title: string
    note: string
    before: { label: string; avg: number; counts: number[] }
    after: { label: string; avg: number; counts: number[] }
    levels: string[]
    highlights: string[]
  }
  /** Pesquisa de satisfação dos times */
  survey?: {
    title: string
    note: string
    score: string
    scale: string
    breakdown: { label: string; pct: number }[]
    quotes: string[]
  }
  /** Galeria de dashboards com leitura dos números */
  dashboards?: { figure: Figure; reading: string }[]
  results: { area: string; text: string }[]
  keywords: string[]
  link?: { href: string; label: string }
}

export const projects: Project[] = [
  // -------------------------------------------------------------------
  {
    slug: "modelo-operacional-agil-pernambucanas",
    title: "Modelo operacional ágil para a Tecnologia",
    tagline: "Maturidade média das squads de 0,75 para 1,56 em um ciclo",
    summary:
      "Assessment de maturidade baseado no Kanban Maturity Model, framework em três níveis de voo e playbook do modelo de trabalho da Tecnologia do Grupo Pernambucanas.",
    company: "Grupo Pernambucanas",
    period: "2026",
    sector: "Varejo e serviços financeiros",
    role: "Líder de Agilidade e Agile Coach",
    scope: "Diretoria de Tecnologia, 29 squads de 8 alianças",
    featured: true,
    impact: ["Maturidade média +108% em um ciclo", "Satisfação dos times 4,38 de 5"],
    metrics: [
      { value: "+108%", label: "na maturidade média", detail: "de 0,75 para 1,56 (escala 0 a 3) entre o 1º e o 2º ciclo" },
      { value: "63%", label: "das squads evoluíram", detail: "17 de 27 squads subiram de nível" },
      { value: "-85,7%", label: "squads no nível inicial", detail: "de 7 para 1 squad em M0" },
      { value: "4,38/5", label: "satisfação dos times", detail: "com o apoio de Agilidade, 90,5% de avaliações positivas" },
    ],
    challenge: {
      problem:
        "A Tecnologia operava em modelo projetizado, sem histórico de tempos de entrega. O portfólio tinha as dores clássicas: projetos ativos demais ao mesmo tempo, iniciativas desalinhadas dos objetivos estratégicos, dependências invisíveis na hora de priorizar e decisões sem indicadores.",
      why:
        "A maturidade das squads é um habilitador direto da estratégia da empresa: ela define a capacidade de executar prioridades com velocidade, qualidade e previsibilidade. Sem medir, não havia como saber onde investir esforço nem validar as hipóteses sobre por que algumas squads entregavam melhor que outras.",
      approach:
        "Medir antes de mudar. Primeiro um assessment de maturidade baseado no Kanban Maturity Model (KMM), depois um modelo de trabalho escalado em três frentes, consolidado em um playbook e sustentado por métricas de fluxo no Jira.",
    },
    objective:
      "Construir e implementar um modelo de trabalho ágil que estabeleça as fundações para a previsibilidade, a medição de valor e a melhoria contínua em todos os times.",
    roleText:
      "Conduzi a jornada de maturidade do início ao fim (apresentação aos times, facilitação das autoavaliações, consolidação e plano de ação), desenhei o framework de trabalho e escrevi o playbook. Trabalhei lado a lado com a diretoria e as lideranças de Tecnologia, levando o diagnóstico para o off-site de lideranças, e com POs e Squad Leads na adoção do modelo em cada squad.",
    collaborators: [
      "Diretoria e lideranças de Tecnologia",
      "Líderes de aliança e tribo",
      "Product Owners e Product Managers",
      "Squad Leads e Tech Leads",
      "29 squads de 8 alianças",
      "Governança e Operações",
    ],
    steps: [
      {
        title: "Jornada de maturidade com KMM",
        text: "Apresentei a jornada aos times e cada squad fez uma autoavaliação facilitada pelo time de Agilidade, com respostas construídas por consenso e sem avaliação individual. A régua classifica práticas e valores em quatro níveis, de 0 (inicial) a 3 (avançado), com fases de transição e consolidação entre eles.",
        figure: {
          src: reguaMaturidade,
          alt: "Régua de maturidade com níveis 0 a 3, valores e práticas esperadas em cada nível",
          caption: "Régua de maturidade usada no assessment: valores e práticas esperadas em cada nível.",
        },
      },
      {
        title: "Diagnóstico e plano em três missões",
        text: "No 1º ciclo, os dados das 29 squads mostraram bases sólidas (gestão visual, qualidade e gestão de incidentes) e três lacunas sistêmicas: disciplina do fluxo, cultura de métricas e conexão com o cliente. O plano de ação virou três missões: fundações do fluxo contínuo e previsibilidade, conexão com o cliente e a estratégia, e formalização do modelo no playbook.",
      },
      {
        title: "Framework em três níveis de voo",
        text: "Organizei o trabalho em Flight Levels: no nível estratégico, o portfólio de TI (PITs) em ciclo trimestral; no tático, as funcionalidades em ciclo mensal; no operacional, os work items em ciclo semanal. Cada nível tem seu quadro Kanban, suas métricas e suas cadências, e o que sai de um nível alimenta o seguinte.",
        figure: {
          src: niveisVoo,
          alt: "Framework de níveis de voo com portfólio, funcionalidades e operação",
          caption: "Níveis de voo: portfólio trimestral, funcionalidades mensais e work items semanais.",
        },
      },
      {
        title: "Fluxo de valor de ponta a ponta",
        text: "Desenhei os workflows de cada nível e como eles se conectam: planejamento, OKRs e priorização por diretoria no estratégico; ciclo do trimestre, roadmap e gestão de dependências no tático; capacidade do time, refinamento e gestão de impedimentos, bugs e riscos no operacional.",
        figure: {
          src: jeitoEntregar,
          alt: "Diagrama do jeito de entregar valor com quadros Kanban estratégico, tático e operacional",
          caption: "O jeito de entregar valor: Kanban de portfólio, de features e de work items conectados.",
        },
      },
      {
        title: "Hierarquia de work items no Jira",
        text: "Defini a taxonomia que liga a estratégia ao dia a dia: Iniciativa, Portfolio Epic (PIT), Portfolio Feature e, abaixo dela, Histórias, Tarefas e Falhas. Cada tipo ganhou definição, campos obrigatórios, critérios de uso, regras de estimativa por tamanho e acordos de Definition of Ready e Definition of Done.",
      },
      {
        title: "Cadências Kanban e planejamento trimestral",
        text: "Cada squad passou a ter seis cadências, quatro obrigatórias (Daily, Refinamento, Reabastecimento e Revisão de Fluxo) e duas recomendadas (Planejamento de Entrega e Revisão de Riscos). Nos níveis tático e estratégico, revisões de serviço, operação e estratégia. O planejamento do trimestre começa cerca de 45 dias antes, passando por direcionamento, discovery e compromisso.",
        figure: {
          src: cadencias,
          alt: "Visão geral das cadências Kanban para squads de tecnologia",
          caption: "As seis cadências Kanban definidas para as squads.",
        },
      },
      {
        title: "Métricas de fluxo e radar de maturidade",
        text: "As quatro métricas essenciais (Lead Time, WIP, Throughput e Work Item Age) passaram a vir direto do Jira pelo Actionable Agile Analytics, para que cada time enxergasse a própria performance sem depender de terceiros. Para os próximos ciclos, estruturei o Radar de Maturidade Organizacional de Tecnologia, com cinco raias: Fluxo e Eficiência, Cultura e Liderança, Produto e Valor, Operação e Resiliência e Arquitetura Sustentável.",
        figure: {
          src: radarMaturidade,
          alt: "Radar de maturidade organizacional de tecnologia com cinco raias",
          caption: "Radar de Maturidade Organizacional de Tecnologia (MOT), com pesos por pilar e níveis M0 a M3.",
        },
      },
      {
        title: "2º ciclo de maturidade e pesquisa com os times",
        text: "No 2º ciclo, reavaliei 27 squads em 6 alianças com a mesma régua, agora acompanhando também os postmortems vencidos de cada squad. Em paralelo, os times avaliaram o apoio do time de Agilidade em uma pesquisa de satisfação. Os dois resultados alimentaram o plano do 3º ciclo: zerar postmortems vencidos, auditar limites de WIP, workshops de métricas de fluxo e pesquisas de CSAT com os clientes internos.",
      },
      {
        title: "Playbook do modelo de trabalho",
        text: "Consolidei tudo em um playbook de 205 slides: propósito e princípios, estrutura organizacional, framework e workflows, hierarquia de work items, gestão de bloqueios, cadências, papéis e responsabilidades, dúvidas comuns e guia de métricas. Um documento vivo, revisado nas próprias cadências.",
      },
    ],
    decisions: [
      {
        title: "Medir antes de impor processo",
        text: "A autoavaliação por consenso transformou o diagnóstico em algo do time, não em uma auditoria. Isso reduziu a resistência e deu dados para priorizar.",
      },
      {
        title: "Ciclo trimestral em vez de plano anual",
        text: "Dá visibilidade das próximas entregas aos stakeholders, reduz o risco por trabalhar em períodos menores e mantém a flexibilidade para mudar a rota.",
      },
      {
        title: "Kanban e níveis de voo para escalar",
        text: "Em vez de impor um framework novo, o modelo parte do processo atual e conecta os níveis, respeitando papéis e responsabilidades existentes.",
      },
      {
        title: "Métricas nas mãos de cada time",
        text: "Com 61% dos times sem visibilidade da própria performance, a decisão foi trazer as métricas para dentro do Jira, onde o time já trabalha.",
      },
      {
        title: "Satisfação do cliente como indicador de todos",
        text: "A missão de conexão com o cliente trata satisfação como responsabilidade de toda a squad, não só da área de negócio.",
      },
    ],
    diagnostic: {
      title: "O que o diagnóstico de 29 squads revelou",
      note: "Percentual de times em cada afirmação, no 1º ciclo de avaliação.",
      strengths: [
        { pct: 89, label: "já usam alguma forma de gestão visual" },
        { pct: 86, label: "fazem inspeção ou validação antes da entrega" },
        { pct: 82, label: "têm gestão de chamados e incidentes" },
        { pct: 79, label: "têm processo para tratar impedimentos" },
        { pct: 75, label: "analisam o que não funciona e criam melhorias" },
      ],
      gaps: [
        { pct: 75, label: "não sabem se os clientes estão satisfeitos" },
        { pct: 68, label: "não sabem como está o próprio Lead Time" },
        { pct: 61, label: "não veem métricas ou não sabem sua performance" },
        { pct: 47, label: "têm políticas definidas, mas não visíveis" },
        { pct: 44, label: "têm limite de WIP que não é respeitado" },
      ],
    },
    maturityShift: {
      title: "Evolução da maturidade entre o 1º e o 2º ciclo",
      note: "Distribuição das 27 squads avaliadas nos dois ciclos, por nível de maturidade (M0 a M3).",
      levels: ["M0 Inicial", "M1 Básico e fluxo", "M2 Métricas e WIP", "M3 Valor e negócio"],
      before: { label: "1º ciclo", avg: 0.75, counts: [7, 20, 0, 0] },
      after: { label: "2º ciclo", avg: 1.56, counts: [1, 11, 13, 2] },
      highlights: [
        "55,5% das squads chegaram a M2 ou M3, faixa que não existia no 1º ciclo.",
        "A squad de Arquitetura saltou três níveis, de M0 para M3.",
        "100% das squads da aliança de Lojas estão em M2 ou M3.",
        "Meta do 3º ciclo: média geral 2,00.",
      ],
    },
    survey: {
      title: "Como os times avaliaram o apoio de Agilidade",
      note: "Pesquisa de satisfação com as squads atendidas pelo time de Agilidade e Performance, 21 respondentes.",
      score: "4,38",
      scale: "de 5, nota média de eficácia",
      breakdown: [
        { label: "Superou as expectativas", pct: 42.9 },
        { label: "Atendeu plenamente", pct: 47.6 },
        { label: "Atendeu parcialmente", pct: 4.8 },
      ],
      quotes: [
        "Amplamente reconhecido pela dedicação, atenção e paciência com as squads.",
        "Destaca-se pelo profundo conhecimento técnico e prático.",
        "Excelente capacidade de ouvir e adaptar a abordagem metodológica.",
        "Visto como um verdadeiro parceiro na evolução dos processos.",
      ],
    },
    results: [
      { area: "Maturidade", text: "Média geral de 0,75 para 1,56 em um ciclo, com 63% das squads evoluindo e o nível inicial (M0) caindo de 7 para 1 squad." },
      { area: "Satisfação dos times", text: "Nota 4,38 de 5 e 90,5% de avaliações positivas para o apoio de Agilidade, segundo 21 respondentes." },
      { area: "Visibilidade", text: "Linha de base de maturidade de 29 squads em 8 alianças, com forças e lacunas medidas para orientar investimento." },
      { area: "Previsibilidade", text: "PITs com horizonte de até três meses, alinhados ao ciclo trimestral de OKRs." },
      { area: "Estratégia na execução", text: "Rastreabilidade de objetivos estratégicos até os itens de trabalho das squads no Jira." },
      { area: "Gestão por dados", text: "Métricas de fluxo disponíveis para os times no Jira, saindo de um cenário sem histórico de tempos de entrega." },
      { area: "Padronização", text: "Playbook do modelo de trabalho concluído, com framework, papéis, cadências e políticas para toda a Tecnologia." },
    ],
    keywords: ["Kanban Maturity Model", "Flight Levels", "OKRs", "Jira", "Actionable Agile", "Playbook", "Gestão de Portfólio", "Métricas de Fluxo"],
  },

  // -------------------------------------------------------------------
  {
    slug: "transformacao-agil-riachuelo",
    title: "Transformação ágil orientada a dados",
    tagline: "Lead time de features de 30 para 10 dias",
    summary:
      "Diagnóstico com STATIK, gestão de fluxo e dashboards em três níveis para dar à Tecnologia da Riachuelo visibilidade real sobre capacidade e entrega de valor.",
    company: "Riachuelo",
    period: "2023 a 2025",
    sector: "Varejo",
    role: "Especialista em Agilidade",
    scope: "Tecnologia, incluindo a tribo de Inteligência Comercial (5 squads)",
    featured: true,
    impact: ["-66,7% no lead time de features", "Throughput de features quase 2x em 2025"],
    metrics: [
      { value: "-66,7%", label: "lead time de features", detail: "de 30 para 10 dias" },
      { value: "~2x", label: "throughput de features", detail: "média de 21 por mês no 1º semestre de 2025 para 41 no 2º" },
      { value: "-70%", label: "lead time de delivery", detail: "média mensal de 66 dias (jan/2025) para 20 dias (nov/2025)" },
      { value: "2,3%", label: "de reabertura de bugs", detail: "11 de 480 bugs resolvidos em 2025, lead time médio de 8 dias" },
    ],
    beforeAfter: { before: 30, after: 10, unit: "dias", label: "lead time de features" },
    challenge: {
      problem:
        "As equipes tinham pouca visibilidade sobre a própria capacidade de entrega e sobre o valor gerado. Liderança e times não compartilhavam uma leitura comum do andamento das iniciativas, e riscos, bloqueios e dependências apareciam tarde.",
      why:
        "Sem dados de fluxo, prazos eram negociados por opinião e a priorização não conversava com a estratégia. A área precisava de previsibilidade para planejar com o negócio e de transparência para decidir onde colocar capacidade.",
      approach:
        "Kanban como método evolutivo: começar pelo processo que já existia, diagnosticar com STATIK, tornar o fluxo visível e medido, e sustentar o modelo com um playbook construído junto com quem executa.",
    },
    objective:
      "Estabelecer um modelo de trabalho ágil, transparente e orientado a resultados, ampliando a capacidade de entrega de valor, a previsibilidade operacional e a integração entre pessoas, processos, tecnologia e estratégia.",
    roleText:
      "Atuei como Especialista em Agilidade da Tecnologia: conduzi o diagnóstico, desenhei o modelo de trabalho, estruturei a gestão por métricas e os dashboards e capacitei os times. O playbook foi construído em agendas com Squad Leads e PMs, para refletir a realidade operacional de cada squad, e a governança de OKRs foi conduzida junto com a diretoria.",
    collaborators: [
      "Diretoria e lideranças de Tecnologia",
      "Tribe Leaders e GPMs",
      "Product Managers",
      "Squad Leads e Tech Leads",
      "Times de desenvolvimento e QA",
      "Áreas de negócio",
    ],
    steps: [
      {
        title: "Diagnóstico com STATIK (Systems Thinking Approach to Introducing Kanban)",
        text: "Segui os passos do STATIK: levantar as fontes de insatisfação de clientes e times, analisar a demanda (tipos de trabalho, origem e frequência), mapear o fluxo real de cada squad e entender como o trabalho chegava e saía. Os gargalos apareceram observando onde os itens acumulavam nos quadros, onde ficavam bloqueados e quanto tempo esperavam entre uma etapa e outra.",
      },
      {
        title: "Priorização das dores",
        text: "As dores levantadas foram agrupadas por tema e priorizadas por impacto no fluxo de entrega e esforço para resolver. As de alto impacto e baixo esforço viraram ações imediatas; as de alto impacto e alto esforço viraram frentes estruturantes, como os dashboards e o playbook.",
        matrix: true,
      },
      {
        title: "Do objetivo ao item de trabalho",
        text: "Estruturei o ciclo da demanda ligando missões da empresa, OKRs e iniciativas aos work items do time: Tema, Módulo, Épico, Feature e, abaixo, Stories, Débitos Técnicos e Incidentes, cada um com suas tarefas, bugs e bloqueios. Para facilitar a adoção, usei a analogia da casa: a iniciativa é a casa, os épicos são os cômodos, as features são o chuveiro e o fogão funcionando.",
        figure: {
          src: casa,
          alt: "Analogia da casa explicando iniciativas, épicos, features, stories, tasks, bugs e bloqueios",
          caption: "A analogia da casa que criei para explicar a hierarquia de work items aos times.",
        },
      },
      {
        title: "Fluxo de features com regras que geram dados confiáveis",
        text: "O workflow de features foi dividido em upstream (entender e priorizar) e downstream (desenvolver e entregar): New, Discovery, Ready for Start, On Delivery, Delivered e Closed. No board, a feature só avança para a coluna seguinte e não volta para trás, o que tornou o indicador de aging confiável.",
        figure: {
          src: workflowFeatures,
          alt: "Workflow de features com etapas de upstream e downstream",
          caption: "Workflow de features: do recebimento da necessidade até a solução em produção.",
        },
      },
      {
        title: "Bloqueios e dependências como dado",
        text: "Cada bloqueio passou a ser registrado no próprio item, com motivo e datas, e as dependências entre features passaram a ser marcadas e acompanhadas em um painel no Power BI. Assim ficou possível ver o tempo parado por tipo de bloqueio e atacar as causas recorrentes.",
        figure: {
          src: bloqueios,
          alt: "Painel de gestão de bloqueios em Power BI com gráficos por tipo, status e mês",
          caption: "Painel de gestão de bloqueios no Power BI (dados detalhados ocultos).",
        },
      },
      {
        title: "Dashboards em três níveis",
        text: "Criei os painéis de acompanhamento por nível de decisão: estratégico (OKRs e iniciativas), tático (portfólio de features com WIP, aging, throughput e lead time) e operacional (stories, débitos técnicos, tarefas e bugs), além de visões de sustentação, dependências e bloqueios.",
        figure: {
          src: dash3Niveis,
          alt: "Painel inicial dos indicadores e métricas de desempenho em três níveis",
          caption: "Painel inicial que criei no Power BI: estratégico, tático e operacional, mais sustentação, dependências e bloqueios.",
        },
      },
      {
        title: "Playbook e capacitação",
        text: "Escrevi o playbook de trabalho da tribo de Inteligência Comercial, com estrutura organizacional, fluxo de trabalho, estrutura no Azure Boards, gestão de work items, dependências e bloqueios, itens de qualidade, papéis, cerimônias e métricas. Os times passaram por treinamento prático de uso dos dashboards.",
        figure: {
          src: cicloDemanda,
          alt: "Ciclo de uma demanda das missões da empresa até os work items do time",
          caption: "Ciclo de uma demanda, um dos capítulos do playbook.",
        },
      },
    ],
    decisions: [
      {
        title: "Kanban evolutivo em vez de framework imposto",
        text: "Começar pelo que os times já faziam reduziu a resistência e permitiu melhorar o fluxo sem parar as entregas.",
      },
      {
        title: "Regras de fluxo no board",
        text: "Impedir que as features pulassem ou voltassem colunas foi o que tornou aging e lead time confiáveis para decidir.",
      },
      {
        title: "Bloqueio registrado, não só conversado",
        text: "Com motivo e tempo de cada bloqueio, as discussões de retrospectiva passaram a partir de dados, não de percepção.",
      },
      {
        title: "Um painel para cada nível de decisão",
        text: "Diretoria, tribo e squad olham o mesmo dado em granularidades diferentes, o que alinha conversas de planejamento.",
      },
      {
        title: "Playbook escrito com quem executa",
        text: "A participação de Squad Leads e PMs garantiu que o documento refletisse a operação real e fosse adotado.",
      },
    ],
    dashboards: [
      {
        figure: { src: dashThroughput, alt: "Painel de throughput e lead time de features", caption: "Features: throughput e lead time" },
        reading: "329 features entregues em 2025 (média de 27,4 por mês). O lead time de delivery caiu de 66 dias em janeiro para 20 em novembro, e os percentis viraram compromisso: 85% das features ficam prontas em até 37 dias após o início do desenvolvimento.",
      },
      {
        figure: { src: dashAging, alt: "Painel de aging das features por coluna do fluxo", caption: "Features: aging por etapa" },
        reading: "Quanto tempo cada feature passa em cada coluna, com farol por etapa. É aqui que aparecem os itens parados em Discovery antes de virarem atraso na entrega.",
      },
      {
        figure: { src: dashWip, alt: "Painel de features em progresso com farol de prazos", caption: "Features: trabalho em progresso" },
        reading: "Distribuição do WIP pelo fluxo e farol de dias restantes para wish date, target date e data planejada, para agir antes do prazo estourar.",
      },
      {
        figure: { src: dashIncidentes, alt: "Painel de métricas de fluxo de incidentes", caption: "Incidentes: métricas de fluxo" },
        reading: "O volume mensal de incidentes tratados caiu de 131 (mar/2024) para menos de 25 por mês em 2025, com 85% resolvidos em até 15 dias após o início do atendimento.",
      },
      {
        figure: { src: dashBugs, alt: "Painel de métricas de qualidade de bugs", caption: "Bugs: métricas de qualidade" },
        reading: "480 bugs resolvidos em 2025, lead time médio de 8 dias, só 2,3% reabertos e classificação por causa raiz para direcionar melhorias de refinamento e testes.",
      },
    ],
    results: [
      { area: "Previsibilidade", text: "Lead time das features reduzido de 30 para 10 dias, uma redução aproximada de 66,7%." },
      { area: "Vazão", text: "Throughput de features quase dobrou em 2025: média de 21 por mês no 1º semestre para 41 no 2º, com 329 entregues no ano." },
      { area: "Compromissos com base em dados", text: "Prazos passaram a ser negociados por percentil: 85% das features entregues em até 37 dias após o início do desenvolvimento." },
      { area: "Qualidade", text: "480 bugs resolvidos em 2025 com lead time médio de 8 dias e reabertura de apenas 2,3%." },
      { area: "Transparência", text: "Andamento, pendências, impedimentos e bloqueios visíveis do nível estratégico ao operacional." },
      { area: "Atuação preventiva", text: "73 bloqueios rastreados com motivo e tempo parado entre março e setembro de 2025, 77% já resolvidos." },
      { area: "Estratégia na execução", text: "OKRs e iniciativas conectados a temas, épicos e features, com execução mais alinhada às prioridades." },
      { area: "Sustentação", text: "Modelo de trabalho padronizado em 5 squads por meio do playbook e da estrutura única no Azure Boards." },
    ],
    keywords: ["STATIK", "Kanban", "Lead Time", "Aging", "Power BI", "Azure DevOps", "OKRs", "Playbook"],
  },

  // -------------------------------------------------------------------
  {
    slug: "seguranca-veicular-intelbras",
    title: "Segurança veicular: de time a unidade de negócios",
    tagline: "Hardware, firmware e software com parceiro na China",
    summary:
      "Desenvolvimento da solução de monitoramento para frotas de ônibus e caminhões da Intelbras, em parceria com a Streamax, desde o plano de negócios até o portfólio consolidado.",
    company: "Intelbras",
    period: "2014 a 2019",
    sector: "Segurança eletrônica",
    role: "Engenheiro responsável pelo desenvolvimento",
    partners: "Streamax (Shenzhen, China)",
    impact: ["70% de market share", "R$ 5 mi para R$ 15 mi em três anos"],
    metrics: [
      { value: "70%", label: "de market share", detail: "no mercado de segurança veicular" },
      { value: "R$ 15 mi", label: "de faturamento no 3º ano", detail: "R$ 5 mi no 1º ano e R$ 8 mi no 2º" },
      { value: "~30%", label: "de crescimento ao ano", detail: "a partir do 4º ano" },
      { value: "6 meses", label: "de imersão em Shenzhen", detail: "junto ao P&D do parceiro" },
    ],
    challenge: {
      problem:
        "Entrar no mercado de segurança veicular com DVRs embarcados, transmissão de imagens em tempo real, alarmes e detecção de fadiga, a partir de produtos de um parceiro chinês que precisavam ser adaptados ao Brasil.",
      why:
        "Toda a linha precisava passar pelos testes de qualidade da Intelbras, e a integração entre firmware e software de front-end apresentou problemas recorrentes por mais de dois anos.",
      approach:
        "Atuação em todas as frentes desde o plano de negócios: tropicalização, testes, validação em campo, provas de conceito com clientes e trabalho presencial com o parceiro.",
    },
    roleText:
      "Fui o engenheiro responsável pelo desenvolvimento da solução, atuando como ponte entre o P&D da Streamax, a qualidade da Intelbras e os clientes. Toda a interação com o parceiro, em reuniões, e-mails e chats, foi em inglês.",
    collaborators: ["P&D da Streamax", "Qualidade e engenharia Intelbras", "Suporte técnico", "Comercial e clientes de frotas"],
    steps: [
      { title: "Plano de negócios e tropicalização", text: "Adaptação de hardware, firmware e software ao mercado brasileiro, incluindo tradução e operação local." },
      { title: "Validação e qualidade", text: "Testes de software, validações de campo e trabalho próximo ao parceiro até a linha atender aos critérios de qualidade da empresa." },
      { title: "Imersão em Shenzhen", text: "Seis meses junto ao P&D da Streamax para acelerar a conclusão do projeto." },
      { title: "Mercado e clientes", text: "Apresentações, provas de conceito, suporte técnico e projetos customizados para empresas de ônibus e transportadoras." },
    ],
    decisions: [
      { title: "Trabalhar presencialmente com o parceiro", text: "A imersão na China encurtou ciclos de correção que, a distância, levavam semanas." },
      { title: "Não abrir mão do padrão de qualidade", text: "Aprovar a linha nos testes Intelbras foi mais lento, mas sustentou o portfólio no longo prazo." },
    ],
    results: [
      { area: "Negócio", text: "A iniciativa começou como um time dentro do segmento de segurança eletrônica e, em cerca de 4 anos, tornou-se uma unidade de negócios independente." },
      { area: "Faturamento", text: "R$ 5 milhões no primeiro ano, R$ 8 milhões no segundo e R$ 15 milhões no terceiro. A partir daí, crescimento em torno de 30% ao ano." },
      { area: "Mercado", text: "Liderança do mercado de segurança veicular, com market share de 70%." },
      { area: "Longevidade", text: "A solução segue no portfólio de produtos e serviços da Intelbras." },
    ],
    keywords: ["OEM/ODM", "Hardware", "Firmware", "Tropicalização", "Qualidade", "PoC", "Inglês", "Projetos Internacionais"],
    link: { href: "https://www.intelbras.com/pt-br/seguranca-eletronica/monitoramento-veicular", label: "Ver a solução no site da Intelbras" },
  },

  // -------------------------------------------------------------------
  {
    slug: "cisco-be3000-intelbras",
    title: "Integração Cisco BE3000 e telefones IP Intelbras",
    tagline: "A primeira abertura do protocolo Cisco para outra marca",
    summary:
      "Tropicalização da central PABX IP Cisco Business Edition 3000 e integração dos telefones IP Intelbras TIP 100 à central, na parceria Intelbras e Cisco.",
    company: "Intelbras",
    period: "2010 a 2012",
    sector: "Telecomunicações",
    role: "Gestor de Projeto e Engenheiro de Desenvolvimento e Validação",
    partners: "Cisco (P&D na Índia, marketing em San Francisco)",
    impact: ["Cerca de +30% nas vendas do TIP 100", "Mais de 200 centrais Cisco vendidas"],
    metrics: [
      { value: "+30%", label: "nas vendas anuais", detail: "dos telefones IP TIP 100" },
      { value: "200+", label: "centrais Cisco vendidas", detail: "após o lançamento" },
      { value: "~10%", label: "de aumento de faturamento", detail: "no segmento" },
    ],
    challenge: {
      problem:
        "Foi a primeira vez que a Cisco disponibilizou seu protocolo de comunicação para que telefones IP de outra marca se registrassem em suas centrais.",
      why:
        "Para vender a central no Brasil, era preciso validá-la por completo para o mercado local e garantir a operação totalmente integrada do telefone Intelbras.",
      approach:
        "Desenvolvimento conjunto com a Cisco, validação de ponta a ponta das aplicações e homologação com testes de campo.",
    },
    roleText:
      "Atuei como gestor do projeto e engenheiro de desenvolvimento e validação, coordenando o trabalho técnico com o P&D da Cisco na Índia e o alinhamento comercial e de marketing com a Cisco em San Francisco, tudo em inglês.",
    collaborators: ["P&D da Cisco (Índia)", "Marketing da Cisco (EUA)", "Engenharia Intelbras", "Comercial Intelbras"],
    steps: [
      { title: "Desenvolvimento conjunto", text: "Integração e desenvolvimento das aplicações com os engenheiros de P&D da Cisco na Índia, e alinhamento comercial e de marketing com a Cisco em San Francisco." },
      { title: "Validação de aplicações", text: "Validação das aplicações de alto nível, solução de tarifação e troncos analógicos a partir de gateways Intelbras." },
      { title: "Homologação e campo", text: "Homologação e testes de campo da central e da operação do telefone IP TIP 100." },
    ],
    decisions: [
      { title: "Validar de ponta a ponta antes de vender", text: "Testar a central completa no cenário brasileiro evitou que problemas de integração chegassem aos clientes." },
    ],
    results: [
      { area: "Vendas", text: "Aumento de cerca de 30% nas vendas anuais dos telefones TIP 100 após o lançamento." },
      { area: "Mercado", text: "Mais de 200 centrais Cisco vendidas e aumento aproximado de 10% no faturamento do segmento." },
      { area: "Engenharia", text: "Padrão de interoperabilidade usado como referência em projetos futuros." },
    ],
    keywords: ["VoIP", "PABX IP", "Interoperabilidade", "Homologação", "Gestão de Projetos", "Inglês", "Cisco"],
  },
]
