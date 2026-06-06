import type { Locale, Localized } from '@/lib/i18n';

export const ui = {
  meta: {
    title: {
      'pt-BR': 'Henrike Pajares Braga · Engenheiro de Dados em Porto Alegre',
      en: 'Henrike Pajares Braga · Data Engineer based in Porto Alegre',
    },
    description: {
      'pt-BR':
        'Portfólio de Henrike Pajares Braga, Engenheiro de Dados em Porto Alegre. Pipelines de ETL com PySpark, Airflow e AWS, APIs em FastAPI, Redshift e DynamoDB.',
      en: 'Portfolio of Henrike Pajares Braga, Data Engineer based in Porto Alegre, Brazil. ETL pipelines with PySpark, Airflow and AWS, REST APIs in FastAPI, Redshift and DynamoDB.',
    },
    ogImageAlt: {
      'pt-BR': 'Foto de Henrike Pajares Braga, Engenheiro de Dados',
      en: 'Photo of Henrike Pajares Braga, Data Engineer',
    },
    skipToContent: {
      'pt-BR': 'Pular para o conteúdo',
      en: 'Skip to content',
    },
  },

  header: {
    nav: {
      about: { 'pt-BR': 'Sobre', en: 'About' },
      experience: { 'pt-BR': 'Trajetória', en: 'Experience' },
      stack: { 'pt-BR': 'Stack', en: 'Stack' },
      projects: { 'pt-BR': 'Projetos', en: 'Projects' },
      volunteer: { 'pt-BR': 'Voluntariado', en: 'Volunteering' },
      education: { 'pt-BR': 'Formação', en: 'Education' },
      contact: { 'pt-BR': 'Contato', en: 'Contact' },
    },
    backToTop: { 'pt-BR': 'Voltar ao topo', en: 'Back to top' },
    primaryNav: { 'pt-BR': 'Navegação principal', en: 'Primary navigation' },
    mobileNav: { 'pt-BR': 'Navegação móvel', en: 'Mobile navigation' },
    openMenu: { 'pt-BR': 'Abrir menu', en: 'Open menu' },
    closeMenu: { 'pt-BR': 'Fechar menu', en: 'Close menu' },
    toggleToDark: { 'pt-BR': 'Alternar para modo escuro', en: 'Switch to dark mode' },
    toggleToLight: { 'pt-BR': 'Alternar para modo claro', en: 'Switch to light mode' },
    switchLanguageTo: {
      'pt-BR': 'Mudar idioma para inglês',
      en: 'Change language to Portuguese',
    },
  },

  hero: {
    available: {
      'pt-BR': 'Disponível para conversar · Porto Alegre, RS',
      en: 'Open to conversations · Porto Alegre, Brazil',
    },
    greeting: { 'pt-BR': 'Olá, eu sou', en: 'Hi, I am' },
    yearsSuffix: { 'pt-BR': 'anos', en: 'years old' },
    ctaContact: { 'pt-BR': 'Entrar em contato', en: 'Get in touch' },
    ctaProjects: { 'pt-BR': 'Ver projetos', en: 'See projects' },
    socialAria: { 'pt-BR': 'Redes sociais', en: 'Social networks' },
    portraitAlt: {
      'pt-BR': 'Henrike Pajares Braga, Engenheiro de Dados em Porto Alegre',
      en: 'Henrike Pajares Braga, Data Engineer based in Porto Alegre',
    },
  },

  about: {
    eyebrow: { 'pt-BR': 'Sobre mim', en: 'About me' },
    headingPrefix: { 'pt-BR': 'Carreira em', en: 'A career in' },
    headingAccent: { 'pt-BR': 'dados', en: 'data' },
    headingSuffix: { 'pt-BR': ', paixão por construir.', en: ', a passion for building.' },
    linkedinTitle: { 'pt-BR': 'LinkedIn', en: 'LinkedIn' },
    photographyTitle: { 'pt-BR': 'Portfólio de Fotografia', en: 'Photography Portfolio' },
    photographyDesc: {
      'pt-BR': 'Hobby que me acompanha. Registros da turma do Geração Caldeira 2024 e mais.',
      en: 'A hobby that walks with me. Shots of the Geração Caldeira 2024 class and beyond.',
    },
  },

  timeline: {
    eyebrow: { 'pt-BR': 'Trajetória', en: 'Experience' },
    headingPrefix: { 'pt-BR': 'Onde já', en: 'Where I have' },
    headingAccent: { 'pt-BR': 'construí', en: 'built' },
    headingSuffix: { 'pt-BR': '.', en: '.' },
    intro: {
      'pt-BR':
        'Da formação técnica no IOS ao primeiro CLT como Engenheiro de Dados, cada passo somou.',
      en: 'From the technical training at IOS to my first full-time role as a Data Engineer, every step counted.',
    },
    current: { 'pt-BR': '· atual', en: '· current' },
    category: {
      data: { 'pt-BR': 'Dados', en: 'Data' },
      'legal-tech': { 'pt-BR': 'Legal Tech', en: 'Legal Tech' },
      salesforce: { 'pt-BR': 'Salesforce', en: 'Salesforce' },
      training: { 'pt-BR': 'Formação', en: 'Training' },
      volunteer: { 'pt-BR': 'Voluntariado', en: 'Volunteering' },
    },
  },

  stack: {
    eyebrow: { 'pt-BR': 'Stack', en: 'Stack' },
    headingPrefix: { 'pt-BR': 'Tecnologias com que', en: 'Technologies I' },
    headingAccent: { 'pt-BR': 'trabalho', en: 'work with' },
    headingSuffix: { 'pt-BR': '.', en: '.' },
    intro: {
      'pt-BR': 'Stack atual e bagagem técnica acumulada, organizadas por contexto de uso.',
      en: 'Current stack and accumulated technical background, grouped by context of use.',
    },
  },

  projects: {
    eyebrow: { 'pt-BR': 'Projetos', en: 'Projects' },
    headingPrefix: { 'pt-BR': 'Projetos que', en: 'Projects I have' },
    headingAccent: { 'pt-BR': 'desenvolvi', en: 'built' },
    headingSuffix: { 'pt-BR': '.', en: '.' },
    intro: {
      'pt-BR':
        'Alguns projetos realizados durante o curso do IOS, junto com o desafio final do Geração Caldeira 2024 em Python e Machine Learning. Em breve, projetos pessoais de engenharia de dados.',
      en: 'A few projects built during the IOS course, plus the final challenge of the 2024 Geração Caldeira program in Python and Machine Learning. Personal data engineering projects coming soon.',
    },
    filterAria: {
      'pt-BR': 'Filtrar projetos por categoria',
      en: 'Filter projects by category',
    },
    listAria: { 'pt-BR': 'Lista de projetos', en: 'Projects list' },
    featured: { 'pt-BR': 'Destaque', en: 'Featured' },
    withCollaborators: { 'pt-BR': 'com', en: 'with' },
    seeProject: { 'pt-BR': 'Ver projeto', en: 'View project' },
    seeProjectAria: { 'pt-BR': 'Visitar', en: 'Visit' },
    seeRepo: { 'pt-BR': 'Repositório', en: 'Repository' },
    seeRepoAria: { 'pt-BR': 'Repositório de', en: 'Repository of' },
    altPrefix: { 'pt-BR': 'Captura do projeto', en: 'Screenshot of project' },
    category: {
      all: { 'pt-BR': 'Todos', en: 'All' },
      fullstack: { 'pt-BR': 'Full Stack', en: 'Full Stack' },
      web: { 'pt-BR': 'Web', en: 'Web' },
      game: { 'pt-BR': 'Jogos', en: 'Games' },
      data: { 'pt-BR': 'Dados', en: 'Data' },
    },
  },

  volunteer: {
    eyebrow: { 'pt-BR': 'Voluntariado', en: 'Volunteering' },
    headingPrefix: { 'pt-BR': 'Causas que me', en: 'Causes that' },
    headingAccent: { 'pt-BR': 'movem', en: 'move me' },
    headingSuffix: { 'pt-BR': '.', en: '.' },
    intro: {
      'pt-BR':
        'Tecnologia faz mais sentido quando volta para a comunidade. Esses são os projetos onde sigo contribuindo.',
      en: 'Technology means more when it returns to the community. These are the projects I keep contributing to.',
    },
    logoAlt: { 'pt-BR': 'Logo', en: 'Logo' },
  },

  education: {
    eyebrow: { 'pt-BR': 'Formação', en: 'Education' },
    headingPrefix: { 'pt-BR': 'A formação que me', en: 'The education that' },
    headingAccent: { 'pt-BR': 'trouxe até aqui', en: 'brought me here' },
    headingSuffix: { 'pt-BR': '.', en: '.' },
    intro: {
      'pt-BR': 'Os programas e cursos que construíram a base técnica e a mentalidade que carrego hoje.',
      en: 'The programs and courses that built the technical foundation and the mindset I carry today.',
    },
    ongoing: { 'pt-BR': 'cursando', en: 'ongoing' },
  },

  contact: {
    eyebrow: { 'pt-BR': 'Contato', en: 'Contact' },
    headingPrefix: { 'pt-BR': 'Vamos', en: "Let's" },
    headingAccent: { 'pt-BR': 'conversar', en: 'talk' },
    headingSuffix: { 'pt-BR': '?', en: '?' },
    intro: {
      'pt-BR': 'Aberto a oportunidades, parcerias e conversas sobre tecnologia. Respondo o quanto antes.',
      en: 'Open to opportunities, partnerships and conversations about technology. I reply as soon as possible.',
    },
    emailLabel: { 'pt-BR': 'Email', en: 'Email' },
    linkedinLabel: { 'pt-BR': 'LinkedIn', en: 'LinkedIn' },
    githubLabel: { 'pt-BR': 'GitHub', en: 'GitHub' },
    formSubject: { 'pt-BR': 'Contato via portfólio', en: 'Contact via portfolio' },
    fieldName: { 'pt-BR': 'Nome', en: 'Name' },
    fieldNamePh: { 'pt-BR': 'Como posso te chamar?', en: 'What should I call you?' },
    fieldEmail: { 'pt-BR': 'Email', en: 'Email' },
    fieldEmailPh: { 'pt-BR': 'seu@email.com', en: 'your@email.com' },
    fieldMessage: { 'pt-BR': 'Mensagem', en: 'Message' },
    fieldMessagePh: {
      'pt-BR': 'Conta o que você gostaria de propor ou perguntar...',
      en: 'Tell me what you would like to propose or ask...',
    },
    submit: { 'pt-BR': 'Enviar mensagem', en: 'Send message' },
    statusSending: { 'pt-BR': 'Enviando...', en: 'Sending...' },
    statusOk: {
      'pt-BR': 'Mensagem enviada! Te respondo assim que possível.',
      en: 'Message sent! I will reply as soon as possible.',
    },
    statusError: {
      'pt-BR': 'Algo deu errado. Tente de novo ou me chame por email.',
      en: 'Something went wrong. Please try again or reach me by email.',
    },
  },

  footer: {
    roleLocation: {
      'pt-BR': 'Engenheiro de Dados · Porto Alegre, RS',
      en: 'Data Engineer · Porto Alegre, Brazil',
    },
    socialAria: { 'pt-BR': 'Links', en: 'Links' },
    photographyAria: { 'pt-BR': 'Portfólio de fotografia', en: 'Photography portfolio' },
    emailAria: { 'pt-BR': 'Email', en: 'Email' },
    backToTop: {
      'pt-BR': 'Voltar ao topo',
      en: 'Back to top',
    },
  },
} as const satisfies Record<string, unknown>;

export type UiKey = keyof typeof ui;

export function tr(value: Localized<string>, locale: Locale): string {
  return value[locale];
}
