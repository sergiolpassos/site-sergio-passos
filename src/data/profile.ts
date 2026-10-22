// =====================================================================
// CONTEÚDO DO SITE
// Todo o texto do site está neste arquivo. Para atualizar uma informação,
// altere aqui e publique de novo; não é preciso mexer nas páginas.
// =====================================================================

export const profile = {
  name: "Sérgio Passos",
  role: "Agile Coach | Especialista em Transformação Ágil",
  location: "Florianópolis/SC, Brasil",
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
    "Ajudo áreas de tecnologia a entregar com previsibilidade, conectando estratégia, produto e execução.",

  // Resumo profissional completo (página Sobre), com palavras-chave para ATS
  summary: [
    "Agile Coach e Especialista em Transformação Ágil, com mais de 30 anos em tecnologia. Ajudo áreas de tecnologia a sair do modelo projetizado para a gestão por produtos, com métricas de fluxo, OKRs conectados à execução e entregas que o negócio consegue planejar.",
    "Sou engenheiro eletricista e passei por telecomunicações, indústria e varejo (Dígitro, Intelbras, Riachuelo e Pernambucanas) antes de me dedicar à agilidade. Essa base técnica me ajuda a conversar com engenharia, produto e negócio na mesma língua.",
  ],

  facts: [
    { value: "30+", label: "anos em tecnologia, desde 1994" },
    { value: "12", label: "anos de inglês no dia a dia, com EUA, Índia e China" },
    { value: "3", label: "empresas com Kanban Maturity Model implantado" },
    { value: "-66,7%", label: "no lead time de features na Riachuelo (30 para 10 dias)" },
  ],
}

export const pillars = [
  { icon: "workflow", title: "Transformação ágil", text: "Do diagnóstico ao playbook, até a cultura dos times." },
  { icon: "gauge", title: "Gestão por fluxo", text: "Lead Time, Throughput e Aging guiando decisões." },
  { icon: "target", title: "Estratégia na execução", text: "OKRs desdobrados até o item de trabalho." },
  { icon: "boxes", title: "Produto antes de projeto", text: "Times contínuos e ciclo de vida do produto." },
  { icon: "cpu", title: "Base de engenharia", text: "20 anos em hardware, firmware e qualidade." },
  { icon: "globe", title: "Atuação internacional", text: "Projetos em inglês com EUA, Índia e China." },
] as const

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

// Para incluir a foto de quem recomendou: salve a imagem em src/assets/people/ e preencha "photo" com o nome do arquivo.
export const recommendations: { text: string; author: string; role: string; photo?: string }[] = [
  {
    author: "Aluísio Maykot Serafim",
    photo: "aluisio-serafim.webp",
    role: "Diretor de Produtos, supervisionou Sérgio diretamente",
    text: "O Sérgio é líder nato, que puxa o time, ouve cada um e faz gestão de verdade, com delegação e empoderamento. Além de tudo, é excelente na interação com outras áreas, pois sabe ouvir e é atencioso. Organizado, domina seus processos rapidamente, mesmo diante de novos e grandes desafios.",
  },
  {
    author: "Alexandre Jun Onoda",
    photo: "alexandre-onoda.webp",
    role: "Product Manager, Supply Chain e Abastecimento",
    text: "O trabalho do Sérgio em nosso time de abastecimento foi primordial para estruturação e padronização de processos, o que trouxe estabilidade para nossos desenvolvimentos; visibilidade da cadência de entregas, garantindo que desde PMs até Tech Leads olhassem para todo o nosso ciclo de desenvolvimento, com fluidez e antecipando possíveis gargalos; e visibilidade das entregas, com dashboards que trouxeram mais embasamento a todas as nossas discussões de planejamento e retrospectivas. Sempre atento e aberto a novas ideias, conseguimos discutir, equilibrar e conciliar as diferentes necessidades do time.",
  },
  {
    author: "Fábio Ignácio da Rosa",
    photo: "fabio-rosa.webp",
    role: "Head of R&D & Product, Hardware, Telecom e IoT",
    text: "O Sérgio é um profissional com foco nos objetivos do time. Um dos seus pontos fortes é sua visão sistêmica, o que garante o excelente resultado do grupo.",
  },
  {
    author: "João Muller",
    photo: "joao-muller.webp",
    role: "Head de Produtos e Negócios",
    text: "Sérgio é um profissional com uma excelente visão sistêmica, consegue gerenciar bem situações difíceis e com diferentes stakeholders.",
  },
  {
    author: "Marcus Vinícius Bez Batti",
    photo: "marcus-batti.webp",
    role: "Produtos e Negócios, Pricing e Portfólio",
    text: "O Sérgio é uma pessoa diferenciada e comprometida. Durante a construção do segmento em que atuou, acumulou por diversas vezes papéis a mais para garantir o sucesso do negócio, tudo isso mantendo um ótimo relacionamento interpessoal com colegas e áreas de apoio.",
  },
  {
    author: "Guilherme Costa",
    photo: "guilherme-costa.webp",
    role: "Gerente da Operação de Energia Solar",
    text: "O Sérgio é um profissional extremamente dedicado e comprometido. Tem um grande foco em resultado e excelente relacionamento interpessoal. Tivemos grandes resultados quando trabalhávamos juntos no projeto do DVR mobile Intelbras.",
  },
  {
    author: "Israel Simas",
    photo: "israel-simas.webp",
    role: "Engineering Manager, Search e Generative AI",
    text: "Sérgio é um profissional aplicado, dedicado e centrado nas soluções técnicas mais robustas, seguras e eficientes, com foco em construir um produto de excelência. A busca contínua por melhorias, a rápida integração nas equipes em que trabalha e a autonomia nas decisões diárias são atributos nos quais sempre me inspiro no Sérgio Passos.",
  },
  {
    author: "Marco Antonio Vargas",
    photo: "marco-vargas.webp",
    role: "Software Engineer",
    text: "O Sérgio possui fortes competências técnicas e veste a camisa da empresa. Sempre focado nas atividades e preocupado com o negócio da empresa em que trabalha. Possui também qualidades pessoais fundamentais em qualquer organização, como força, resiliência, empatia, simpatia e excelente capacidade de comunicação. Trabalhamos juntos vários anos e considero que o Sérgio tem todas as condições para evoluir rapidamente em qualquer área, uma característica valiosa para qualquer empresa.",
  },
  {
    author: "Leandro Otranto dos Santos",
    photo: "leandro-santos.webp",
    role: "Analista de Desenvolvimento de Produtos, Intelbras",
    text: "Sérgio é o tipo de profissional que impulsiona: seu comprometimento, dedicação e garra elevam produtos e negócios. Com sua capacidade multidisciplinar e gestão sistêmica, traz o diferencial para o time em que atua, além da sensibilidade e do respeito humano aos colegas. Sem dúvida, fez e fará a diferença com sua bagagem profissional e capacidade de desenvolvimento para novos desafios.",
  },
]
