export const personal = {
  name: 'Henrike Pajares Braga',
  shortName: 'Henrike',
  birthDate: '2001-09-01T16:00:00-03:00',
  location: 'Porto Alegre, RS, Brasil',

  tagline: 'Engenheiro de Dados | Python · SQL · AWS · ETL · Airflow',

  bio: [
    'Acredito que com boas ideias e tecnologia podemos mudar a nossa realidade. Hoje sou Engenheiro de Dados I na Appmax, onde construo pipelines de ETL que servem como base para análise e modelos de dados. Em paralelo, automatizo documentos jurídicos no-code na aDoc.',
    'Tudo começou no Instituto da Oportunidade Social (IOS), onde fiz o curso de Desenvolvimento Web Full Stack. Sem ele, eu não estaria onde cheguei. De lá, a trajetória passou por suporte técnico, estágio em Salesforce e o Geração Caldeira 2024 na trilha de Python, até encontrar em dados o lugar onde quero crescer. Pelo caminho, sigo voluntariando no grupo de programação da ONG COMQ.',
    'Gosto muito de música, fotografia, programação e arte. Tento enxergar a vida sempre com um olhar a mais por conta disso. Levo comigo os pilares do jiu-jitsu que meu pai me ensinou: disciplina, resiliência e persistência aplicados em todas as áreas. Não me conformo em ficar parado, quero sempre agregar onde estiver.',
  ],

  contacts: {
    email: 'pajaresbragahenrike@gmail.com',
    phone: '+55 51 99573-1738',
    linkedin: 'https://www.linkedin.com/in/henrikebraga/',
    github: 'https://github.com/Henrike-PB',
    instagram: 'https://www.instagram.com/dev_henrike/',
    photographyPortfolio: 'https://henrike-pb.github.io/photography-portfolio/',
  },

  formSubmitEndpoint: 'https://formsubmit.co/pajaresbragahenrike@gmail.com',
} as const;

export type PersonalInfo = typeof personal;
