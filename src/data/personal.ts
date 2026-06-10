import type { Localized } from '@/lib/i18n';

export const personal = {
  name: 'Henrike Pajares Braga',
  shortName: 'Henrike',
  birthDate: '2001-09-01T16:00:00-03:00',
  location: {
    'pt-BR': 'Porto Alegre, RS, Brasil',
    en: 'Porto Alegre, Brazil',
  } satisfies Localized<string>,

  tagline: {
    'pt-BR': 'Engenheiro de Dados | Python · SQL · AWS · ETL · Airflow',
    en: 'Data Engineer | Python · SQL · AWS · ETL · Airflow',
  } satisfies Localized<string>,

  jobTitle: {
    'pt-BR': 'Engenheiro de Dados',
    en: 'Data Engineer',
  } satisfies Localized<string>,

  bio: {
    heroIntro: {
      'pt-BR':
        'Acredito que com boas ideias e tecnologia podemos mudar a nossa realidade. Hoje sou Engenheiro de Dados I na Appmax, onde construo pipelines de ETL que servem como base para análise e modelos de dados.',
      en: 'I believe good ideas and technology can change our reality. Today I am a Data Engineer I at Appmax, where I build ETL pipelines that serve as the foundation for analytics and data models.',
    } satisfies Localized<string>,
    paragraphs: {
      'pt-BR': [
        'Tudo começou no Instituto da Oportunidade Social (IOS), onde fiz o curso de Desenvolvimento Web Full Stack. Sem ele, eu não estaria onde cheguei. De lá, a trajetória passou por suporte técnico, estágio em Salesforce e o Geração Caldeira 2024 na trilha de Python, até encontrar em dados o lugar onde quero crescer. Pelo caminho, sigo voluntariando no grupo de programação da ONG COMQ.',
        'Gosto muito de música, fotografia, programação e arte. Tento enxergar a vida sempre com um olhar a mais por conta disso. Levo comigo os pilares do jiu-jitsu que meu pai me ensinou: disciplina, resiliência e persistência aplicados em todas as áreas. Não me conformo em ficar parado, quero sempre agregar onde estiver.',
      ],
      en: [
        'It all started at Instituto da Oportunidade Social (IOS), where I took the Full Stack Web Development course. Without it, I would not be where I am. From there, the path went through technical support, a Salesforce internship and the 2024 Geração Caldeira Python track, until I found in data the place where I want to grow. Along the way, I keep volunteering at the programming group of NGO COMQ.',
        'I love music, photography, programming and art. They make me look at life with an extra layer. I carry the pillars of jiu-jitsu my father taught me: discipline, resilience and persistence applied to every area. I do not settle for standing still — I want to add value wherever I am.',
      ],
    } satisfies Localized<string[]>,
  },

  contacts: {
    email: 'pajaresbragahenrike@gmail.com',
    linkedin: 'https://www.linkedin.com/in/henrikebraga/',
    github: 'https://github.com/Henrike-PB',
    instagram: 'https://www.instagram.com/dev_henrike/',
    photographyPortfolio: 'https://henrike-pb.github.io/photography-portfolio/',
  },

  // Alias público do FormSubmit (substitui o email no HTML para evitar scraping).
  formSubmitEndpoint: 'https://formsubmit.co/ajax/b8f4651070a2e5ae888a53872229323f',
} as const;

export type PersonalInfo = typeof personal;
