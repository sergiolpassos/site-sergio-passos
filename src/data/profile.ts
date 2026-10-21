// =====================================================================
// CONTEÚDO DO SITE
// Todo o texto do site está neste arquivo. Para atualizar uma informação,
// altere aqui e publique de novo; não é preciso mexer nas páginas.
// =====================================================================

export const profile = {
  name: "Sérgio Passos",
  role: "Agile Coach | Especialista em Transformação Ágil",
  location: "São José/SC, Brasil",
  email: "sergio.passos@gmail.com",
  phoneDisplay: "(48) 98433-3618",
  whatsapp: "https://wa.me/5548984333618",
  linkedin: "https://www.linkedin.com/in/sergiopassosjr",
  linkedinDisplay: "linkedin.com/in/sergiopassosjr",
  cv: "/curriculo-sergio-passos.pdf",

  headline: "Times que entregam com previsibilidade.",
  subheadline:
    "Agile Coach e Especialista em Transformação Ágil. Mais de 30 anos em tecnologia, da engenharia de produto à gestão de produtos digitais.",

  // Texto curto da home
  intro:
    "Engenheiro eletricista de formação, passei por telecomunicações, indústria e varejo antes de me dedicar à transformação ágil. Hoje ajudo áreas de tecnologia a sair do modelo projetizado para a gestão por produtos, com fluxo medido, OKRs conectados à execução e entregas que o negócio consegue planejar.",

  // Resumo profissional completo (página Sobre), com palavras-chave para ATS
  summary: [
    "Agile Coach e Especialista em Transformação Ágil com mais de 30 anos em tecnologia. Conduzo transformação digital, implantação de modelos operacionais ágeis e a evolução do modelo projetizado para a gestão orientada a produtos, conectando estratégia corporativa, OKRs e execução técnica.",
    "Minha trajetória combina engenharia de produto, coordenação de times técnicos, liderança de squads multidisciplinares e gestão do ciclo de vida de sistemas e produtos, de ambientes legados a arquiteturas modernas, nos setores de varejo, telecomunicações, segurança eletrônica, indústria e produtos digitais.",
    "Estruturo governança tecnológica e gestão orientada a dados com métricas de fluxo (Lead Time, Cycle Time, Throughput e Aging), Kanban (STATIK e Kanban Maturity Model) e dashboards estratégicos, táticos e operacionais em Jira e Power BI, apoiando priorização, previsibilidade e tomada de decisão.",
    "Atuo próximo à diretoria, lideranças de Produto e Operações, Product Owners e Squad Leads na gestão de backlog, OKRs, qualidade de entregas, integrações e sustentação de sistemas críticos. O foco é valor concreto para o negócio: eficiência operacional, redução de desperdícios, estabilidade, transparência entre tecnologia e áreas de negócio e entrega consistente de resultados.",
  ],

  facts: [
    { value: "30+", label: "anos em tecnologia, desde 1994" },
    { value: "12", label: "anos de inglês no dia a dia, com EUA, Índia e China" },
    { value: "3", label: "empresas com Kanban Maturity Model implantado" },
    { value: "-66,7%", label: "no lead time de features na Riachuelo (30 para 10 dias)" },
  ],
}

export const pillars = [
  {
    title: "Transformação ágil de ponta a ponta",
    text: "Do diagnóstico com STATIK ao playbook do modelo de trabalho e à consolidação cultural nos times.",
  },
  {
    title: "Gestão orientada a fluxo",
    text: "Lead Time, Cycle Time, Throughput e Aging como base para priorizar, prever e decidir.",
  },
  {
    title: "Estratégia ligada à execução",
    text: "OKRs desdobrados em iniciativas, épicos e itens de trabalho rastreáveis no Jira.",
  },
  {
    title: "Produto antes de projeto",
    text: "Transição do modelo projetizado para times contínuos, com gestão do ciclo de vida do produto.",
  },
  {
    title: "Base de engenharia",
    text: "Duas décadas em hardware, firmware, software, qualidade e homologação antes da agilidade.",
  },
  {
    title: "Atuação internacional",
    text: "Projetos em inglês com engenheiros e times comerciais nos EUA, Índia e China.",
  },
]

// ---------------------------------------------------------------------
// Linha do tempo (anos decimais: 2010.5 = meio de 2010)
// phase 1 = indústria e serviços, 2 = telecom e engenharia de produto, 3 = produto e agilidade
// ---------------------------------------------------------------------
export const timeline = [
  { company: "Equisul (hoje WEG)", start: 1994.75, end: 1998.34, phase: 1 },
  { company: "Orcali", start: 1998.36, end: 2001.13, phase: 1 },
  { company: "Dígitro Tecnologia", start: 2001.14, end: 2010.44, phase: 2 },
  { company: "Intelbras", start: 2010.45, end: 2022.26, phase: 2 },
  { company: "Emovel", start: 2022.26, end: 2022.54, phase: 3 },
  { company: "Riachuelo", start: 2022.55, end: 2025.94, phase: 3 },
  { company: "Pernambucanas", start: 2026.17, end: 2026.79, phase: 3, labelAbove: true },
] as { company: string; start: number; end: number; phase: 1 | 2 | 3; labelAbove?: boolean }[]

export const teaching = [
  { company: "IFSC", start: 2011.16, end: 2013.19 },
  { company: "Senai", start: 2013.29, end: 2017.71 },
] as const

export const phases = {
  1: "Indústria e serviços",
  2: "Telecom e engenharia de produto",
  3: "Produto e agilidade",
} as const

// ---------------------------------------------------------------------
// Experiência profissional
// ---------------------------------------------------------------------
export const experience = [
  {
    role: "Líder de Agilidade em Varejo, Lojas e Comercial",
    company: "Grupo Pernambucanas",
    period: "03/2026 - 10/2026",
    bullets: [
      "Construção, desde o zero, do modelo operacional ágil da Tecnologia, com transição do modelo projetizado para a gestão orientada a produtos.",
      "Desdobramento de OKRs em iniciativas, PITs, épicos e funcionalidades, com hierarquia de work items e métricas de fluxo no Jira.",
      "Desenvolvimento de POs e Squad Leads em backlog, discovery, priorização, roadmap e planejamento.",
      "Atuação direta em squads de Supply Chain e Inteligência Artificial; facilitação de Lean Inception e apoio à estruturação da nova Área de Produtos.",
    ],
  },
  {
    role: "Especialista em Agilidade",
    company: "Riachuelo",
    period: "01/2024 - 12/2025",
    bullets: [
      "Condução da transformação digital da área de tecnologia, do desenho do modelo ágil à consolidação cultural em múltiplos times.",
      "Gestão de performance orientada a dados, com dashboards em Power BI integrando KPIs de fluxo, qualidade e eficiência.",
      "Mapeamento de Value Stream e governança de OKRs junto à diretoria.",
      "Lead time de features reduzido de 30 para 10 dias.",
    ],
  },
  {
    role: "Squad Lead, Ecossistema de Logística",
    company: "Riachuelo",
    period: "07/2022 - 12/2023",
    bullets: [
      "Liderança de squads de Logística durante a transformação digital, com rituais, papéis e fluxos ágeis.",
      "Atuação na atualização do WMS para SAP S/4HANA e nas evoluções do Millennium (Linx).",
      "Ciclo completo de OKRs, com atingimento aproximado de 80% e visibilidade executiva do progresso.",
      "Dashboards em Power BI e Azure DevOps; liderança de pessoas com feedback contínuo e PDIs.",
    ],
  },
  {
    role: "Product Manager",
    company: "Emovel Inteligência Imobiliária",
    period: "02/2022 - 07/2022",
    bullets: [
      "Gestão de produto para o agronegócio: aplicação para identificação de silos de armazenamento.",
      "Product Discovery com entrevistas com clientes potenciais, validação de hipóteses e priorização por valor e esforço.",
      "Governança de OKRs e acompanhamento de KPIs em Power BI.",
    ],
  },
  {
    role: "Quality Squad Lead",
    company: "Intelbras",
    period: "08/2020 - 02/2022",
    bullets: [
      "Criação, do zero, da qualidade dentro da squad responsável pelos lançamentos de produtos.",
      "Implantação de testes automatizados executados pelo próprio time para validação de software.",
      "Atuação integrada com Produção e Suporte, com redução de retrabalho e custos de não qualidade.",
    ],
  },
  {
    role: "Engenheiro Líder de Desenvolvimento de Projetos e Produtos",
    company: "Intelbras",
    period: "05/2013 - 07/2020",
    bullets: [
      "Ciclo de vida completo de produtos OEM/ODM (hardware, firmware e software), do conceito à produção em escala.",
      "Projetos internacionais com fabricantes chineses, incluindo imersão técnica em Shenzhen.",
      "Linha de segurança veicular que evoluiu de iniciativa embrionária para unidade de negócios.",
    ],
  },
  {
    role: "Engenheiro de Qualidade e Confiabilidade OEM",
    company: "Intelbras",
    period: "07/2010 - 04/2013",
    bullets: [
      "Tropicalização e homologação de produtos corporativos OEM para o mercado brasileiro.",
      "Integração dos telefones IP Intelbras à central Cisco Business Edition 3000, em parceria com times dos EUA e da Índia.",
    ],
  },
  {
    role: "Coordenador de Customer Success",
    company: "Dígitro Tecnologia",
    period: "02/2001 - 06/2010",
    bullets: [
      "Integração entre P&D, Testes, Validação e Pós-venda; implantação e onboarding de clientes corporativos.",
      "Implantação de centrais telefônicas em operadoras e de centrais de segurança pública.",
      "Resolução de incidentes críticos em Redes, VoIP, Linux e SIP.",
    ],
  },
  {
    role: "Início de carreira",
    company: "Equisul (hoje WEG) e Orcali",
    period: "1994 - 2001",
    bullets: [],
  },
]

export const teachingNote =
  "Em paralelo, fui professor de cursos técnicos noturnos no IFSC (2011 a 2013) e no Senai (2013 a 2017)."

export const education = [
  { title: "MBA em Gestão de Projetos e Metodologias Ágeis", school: "Faculdade Descomplica", year: "2022" },
  { title: "Bacharelado em Engenharia Elétrica", school: "UNISUL, Universidade do Sul de Santa Catarina", year: "2010" },
  { title: "Técnico em Telecomunicações", school: "IFSC, Instituto Federal de Santa Catarina", year: "1999" },
]

export const certifications = [
  { title: "Kanban Management Professional (KMP: KSD + KSI)", school: "Kanban University", year: "2024" },
  { title: "Kanban Coaching Professional (KCP: KMM + KC)", school: "Kanban University", year: "2024" },
  { title: "Formação Product Analytics", school: "PM3", year: "2025" },
  { title: "Formação Product Leadership", school: "PM3", year: "2025" },
  { title: "Formação Product Marketing", school: "PM3", year: "2024" },
  { title: "Formação Product Growth", school: "PM3", year: "2024" },
  { title: "Formação Product Management", school: "PM3", year: "2024" },
  { title: "Formação Product Discovery", school: "PM3", year: "2024" },
  { title: "Foundation Workshop Management 3.0", school: "Management 3.0", year: "2023" },
  { title: "Bootcamp Agile Expert", school: "Faculdade XP", year: "2021" },
]

export const english = {
  level: "Inglês avançado",
  text: "Desde 2010 o inglês faz parte da rotina de trabalho. Na Intelbras, até 2022, conduzi projetos com reuniões, e-mails, chats, negociações e documentação técnica em inglês: desenvolvimento com os engenheiros de P&D da Cisco na Índia, alinhamento comercial e de marketing com a Cisco em San Francisco (EUA) e desenvolvimento conjunto com a Streamax em Shenzhen (China), onde atuei presencialmente junto ao P&D do parceiro.",
  points: ["Cisco: P&D na Índia e marketing em San Francisco", "Streamax: P&D em Shenzhen, China", "Uso diário de 2010 a 2022"],
}

export const skills = {
  Agilidade: ["Transformação Ágil", "Agile Coaching", "Kanban", "STATIK", "Kanban Maturity Model", "Scrum", "Management 3.0", "Lean Inception", "Kaizen", "Melhoria Contínua", "Facilitação de Workshops"],
  Produto: ["Product Management", "Product Discovery", "Roadmap", "Backlog", "User Stories", "Priorização", "Product Analytics", "Product Growth"],
  Gestão: ["OKRs", "KPIs", "Lead Time", "Cycle Time", "Throughput", "Value Stream Mapping", "Governança", "Gestão de Riscos e Dependências", "Gestão de Stakeholders", "Liderança de Pessoas", "Qualidade (QA)"],
  Ferramentas: ["Jira", "Jira Rovo", "Azure DevOps", "Power BI", "Confluence", "Miro", "MS Project"],
}

// Cole aqui as recomendações do LinkedIn. Enquanto a lista estiver vazia, a seção não aparece no site.
export const recommendations: { text: string; author: string; role: string }[] = [
  {
    author: "Aluísio Maykot Serafim",
    role: "Diretor de Produtos, supervisionou Sérgio diretamente",
    text: "O Sérgio é líder nato, que puxa o time, ouve cada um e faz gestão de verdade, com delegação e empoderamento. Além de tudo, é excelente na interação com outras áreas, pois sabe ouvir e é atencioso. Organizado, domina seus processos rapidamente, mesmo diante de novos e grandes desafios.",
  },
  {
    author: "Alexandre Jun Onoda",
    role: "Product Manager, Supply Chain e Abastecimento",
    text: "O trabalho do Sérgio em nosso time de abastecimento foi primordial para estruturação e padronização de processos, o que trouxe estabilidade para nossos desenvolvimentos; visibilidade da cadência de entregas, garantindo que desde PMs até Tech Leads olhassem para todo o nosso ciclo de desenvolvimento, com fluidez e antecipando possíveis gargalos; e visibilidade das entregas, com dashboards que trouxeram mais embasamento a todas as nossas discussões de planejamento e retrospectivas. Sempre atento e aberto a novas ideias, conseguimos discutir, equilibrar e conciliar as diferentes necessidades do time.",
  },
  {
    author: "Fábio Ignácio da Rosa",
    role: "Head of R&D & Product, Hardware, Telecom e IoT",
    text: "O Sérgio é um profissional com foco nos objetivos do time. Um dos seus pontos fortes é sua visão sistêmica, o que garante o excelente resultado do grupo.",
  },
  {
    author: "João Muller",
    role: "Head de Produtos e Negócios",
    text: "Sérgio é um profissional com uma excelente visão sistêmica, consegue gerenciar bem situações difíceis e com diferentes stakeholders.",
  },
  {
    author: "Marcus Vinícius Bez Batti",
    role: "Produtos e Negócios, Pricing e Portfólio",
    text: "O Sérgio é uma pessoa diferenciada e comprometida. Durante a construção do segmento em que atuou, acumulou por diversas vezes papéis a mais para garantir o sucesso do negócio, tudo isso mantendo um ótimo relacionamento interpessoal com colegas e áreas de apoio.",
  },
  {
    author: "Guilherme Costa",
    role: "Gerente da Operação de Energia Solar",
    text: "O Sérgio é um profissional extremamente dedicado e comprometido. Tem um grande foco em resultado e excelente relacionamento interpessoal. Tivemos grandes resultados quando trabalhávamos juntos no projeto do DVR mobile Intelbras.",
  },
  {
    author: "Israel Simas",
    role: "Engineering Manager, Search e Generative AI",
    text: "Sérgio é um profissional aplicado, dedicado e centrado nas soluções técnicas mais robustas, seguras e eficientes, com foco em construir um produto de excelência. A busca contínua por melhorias, a rápida integração nas equipes em que trabalha e a autonomia nas decisões diárias são atributos nos quais sempre me inspiro no Sérgio Passos.",
  },
  {
    author: "Marco Antonio Vargas",
    role: "Software Engineer",
    text: "O Sérgio possui fortes competências técnicas e veste a camisa da empresa. Sempre focado nas atividades e preocupado com o negócio da empresa em que trabalha. Possui também qualidades pessoais fundamentais em qualquer organização, como força, resiliência, empatia, simpatia e excelente capacidade de comunicação. Trabalhamos juntos vários anos e considero que o Sérgio tem todas as condições para evoluir rapidamente em qualquer área, uma característica valiosa para qualquer empresa.",
  },
  {
    author: "Leandro Otranto dos Santos",
    role: "Analista de Desenvolvimento de Produtos, Intelbras",
    text: "Sérgio é o tipo de profissional que impulsiona: seu comprometimento, dedicação e garra elevam produtos e negócios. Com sua capacidade multidisciplinar e gestão sistêmica, traz o diferencial para o time em que atua, além da sensibilidade e do respeito humano aos colegas. Sem dúvida, fez e fará a diferença com sua bagagem profissional e capacidade de desenvolvimento para novos desafios.",
  },
]

// ---------------------------------------------------------------------
// Projetos (cases)
// ---------------------------------------------------------------------
export type Project = {
  slug: string
  title: string
  tagline: string
  summary: string
  company: string
  period: string
  sector: string
  role: string
  partners?: string
  highlight?: { before: string; after: string; label: string }
  impact: string[]
  context: string[]
  steps: { title: string; text: string }[]
  results: string[]
  keywords: string[]
  link?: { href: string; label: string }
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: "modelo-operacional-agil-pernambucanas",
    title: "Modelo operacional ágil para a Tecnologia",
    tagline: "Da gestão projetizada para a gestão por produtos",
    summary:
      "Construção, desde o zero, do modelo de trabalho ágil da Tecnologia do Grupo Pernambucanas, conectando estratégia, OKRs e execução das squads.",
    company: "Grupo Pernambucanas",
    period: "2026",
    sector: "Varejo",
    role: "Líder de Agilidade e Agile Coach",
    impact: ["Base de métricas de entrega criada do zero", "PITs com horizonte de até 3 meses"],
    context: [
      "A Tecnologia operava em modelo projetizado, sem histórico estruturado de tempos de entrega e com pouca rastreabilidade entre os objetivos estratégicos e o trabalho das equipes.",
      "O desafio era desenhar e implantar um modelo operacional que permitisse planejar em ciclos trimestrais, acompanhar a execução com dados e dar continuidade aos produtos em vez de encerrar projetos.",
    ],
    steps: [
      { title: "Framework de trabalho", text: "Desenho do modelo operacional da Tecnologia: processos, ritos, priorização, acompanhamento, governança e mecanismos de melhoria contínua." },
      { title: "Gestão de Produtos", text: "Apoio à transição para times contínuos por produto, com papéis, responsabilidades e interfaces formalizados entre Produto, Tecnologia e Negócio." },
      { title: "OKRs até o item de trabalho", text: "Hierarquia de work items no Jira ligando objetivos estratégicos, iniciativas, PITs, épicos, funcionalidades e itens de execução." },
      { title: "Métricas e acompanhamento", text: "Implantação de indicadores de fluxo no Jira e planejamento dos PITs alinhado ao ciclo trimestral de OKRs." },
      { title: "Playbook e capacitação", text: "Elaboração integral do Playbook de Tecnologia e disseminação das práticas com POs, Squad Leads e lideranças." },
    ],
    results: [
      "Base de mensuração do desempenho da Tecnologia, saindo de um cenário sem histórico de tempos de entrega.",
      "Horizonte de até três meses para entrega dos PITs, alinhado ao planejamento trimestral de OKRs.",
      "Rastreabilidade entre prioridades estratégicas e itens de trabalho das equipes.",
      "Modelo de trabalho padronizado por meio do framework e do Playbook de Tecnologia.",
      "Fundamentos para gestão do ciclo de vida dos produtos e priorização recorrente com o negócio.",
    ],
    keywords: ["Transformação Ágil", "Gestão de Produtos", "OKRs", "Jira", "Governança", "Playbook", "Métricas de Fluxo"],
    featured: false,
  },
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
    highlight: { before: "30 dias", after: "10 dias", label: "lead time de features" },
    impact: ["-66,7% no lead time de features", "Dashboards estratégicos, táticos e operacionais"],
    context: [
      "As equipes tinham pouca visibilidade sobre a própria capacidade de entrega e sobre o valor gerado. Liderança e times não compartilhavam uma leitura comum do andamento das iniciativas, e riscos apareciam tarde.",
      "O objetivo era estabelecer um modelo de trabalho ágil, transparente e orientado a resultados, ampliando previsibilidade e a integração entre pessoas, processos, tecnologia e estratégia.",
    ],
    steps: [
      { title: "Diagnóstico com STATIK", text: "Entendimento do sistema de trabalho, mapeamento do fluxo de valor e identificação de gargalos, bloqueios e oportunidades." },
      { title: "Priorização das dores", text: "Levantamento dos principais desafios operacionais e organizacionais e estruturação de planos de ação." },
      { title: "Práticas e gestão do fluxo", text: "Gestão visual, priorização de demandas, gestão de impedimentos e acompanhamento de aging, lead time e cycle time." },
      { title: "Dashboards em três níveis", text: "Painéis estratégicos, táticos e operacionais com percentual de conclusão, itens planejados e não concluídos, bloqueios e tempos de fluxo." },
      { title: "Playbook e capacitação", text: "Playbook do Modelo de Trabalho, treinamentos e workshops sobre papéis, práticas e melhoria contínua." },
    ],
    results: [
      "Lead time das features reduzido de 30 para 10 dias, uma redução aproximada de 66,7%.",
      "Transparência sobre andamento, conclusão, pendências, impedimentos e bloqueios.",
      "Atuação preventiva sobre riscos, atrasos e itens de trabalho parados.",
      "Gestão orientada a métricas, com acompanhamento contínuo de lead time, cycle time e aging.",
      "Execução operacional mais alinhada aos objetivos estratégicos.",
    ],
    keywords: ["STATIK", "Kanban", "Lead Time", "Cycle Time", "Aging", "Power BI", "Value Stream", "Playbook"],
    featured: true,
  },
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
    impact: ["Time interno virou unidade de negócios", "Solução no portfólio até hoje"],
    context: [
      "A Intelbras queria entrar no mercado de segurança veicular com DVRs embarcados, transmissão de imagens em tempo real, alarmes e detecção de fadiga, a partir de produtos de um parceiro chinês que precisavam ser adaptados ao Brasil.",
      "Toda a linha precisava passar pelos testes de qualidade da Intelbras, e a integração entre firmware e software de front-end apresentou problemas recorrentes ao longo de mais de dois anos.",
    ],
    steps: [
      { title: "Plano de negócios e tropicalização", text: "Adaptação de hardware, firmware e software ao mercado brasileiro, incluindo tradução e operação local." },
      { title: "Validação e qualidade", text: "Testes de software, validações de campo e trabalho próximo ao parceiro até a linha atender aos critérios de qualidade da empresa." },
      { title: "Imersão em Shenzhen", text: "Seis meses junto ao P&D da Streamax para acelerar a conclusão do projeto, com toda a interação em inglês." },
      { title: "Mercado e clientes", text: "Apresentações, provas de conceito, suporte técnico e projetos customizados para empresas de ônibus e transportadoras." },
    ],
    results: [
      "A iniciativa começou como um time dentro do segmento de segurança eletrônica e, em cerca de 4 anos, tornou-se uma unidade de negócios independente.",
      "Faturamento na casa dos milhões de reais para o segmento.",
      "A solução segue no portfólio de produtos e serviços da Intelbras.",
    ],
    keywords: ["OEM/ODM", "Hardware", "Firmware", "Tropicalização", "Qualidade", "PoC", "Inglês", "Projetos Internacionais"],
    link: { href: "https://www.intelbras.com/pt-br/seguranca-eletronica/monitoramento-veicular", label: "Ver a solução no site da Intelbras" },
    featured: true,
  },
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
    context: [
      "Foi a primeira vez que a Cisco disponibilizou seu protocolo de comunicação para que telefones IP de outra marca se registrassem em suas centrais.",
      "O projeto exigia validar a central completa para o mercado brasileiro e garantir a operação totalmente integrada do telefone Intelbras.",
    ],
    steps: [
      { title: "Desenvolvimento conjunto", text: "Integração e desenvolvimento das aplicações com os engenheiros de P&D da Cisco na Índia, e alinhamento comercial e de marketing com a Cisco em San Francisco." },
      { title: "Validação de aplicações", text: "Validação das aplicações de alto nível, solução de tarifação e troncos analógicos a partir de gateways Intelbras." },
      { title: "Homologação e campo", text: "Homologação e testes de campo da central e da operação do telefone IP TIP 100." },
    ],
    results: [
      "Aumento de cerca de 30% nas vendas anuais dos telefones TIP 100 após o lançamento.",
      "Mais de 200 centrais Cisco vendidas.",
      "Aumento aproximado de 10% no faturamento do segmento.",
      "Padrão de interoperabilidade usado como referência em projetos futuros.",
    ],
    keywords: ["VoIP", "PABX IP", "Interoperabilidade", "Homologação", "Gestão de Projetos", "Inglês", "Cisco"],
    featured: false,
  },
]
