import type { Localized } from '@/lib/i18n';

export type ExperienceCategory = 'data' | 'salesforce' | 'legal-tech' | 'training' | 'volunteer';

export type Role = {
  title: Localized<string>;
  since: string;
};

export type Experience = {
  id: string;
  company: string;
  url?: string;
  startYear: number;
  endYear?: number;
  current: boolean;
  category: ExperienceCategory;
  roles: Role[];
  summary?: Localized<string>;
  highlights?: Localized<string[]>;
  tech?: string[];
  honor?: Localized<string>;
};

export const experiences: Experience[] = [
  {
    id: 'appmax',
    company: 'Appmax',
    url: 'https://appmax.com.br',
    startYear: 2025,
    current: true,
    category: 'data',
    roles: [
      {
        title: { 'pt-BR': 'Engenheiro de Dados I', en: 'Data Engineer I' },
        since: 'mar/2026',
      },
      {
        title: {
          'pt-BR': 'Assistente de Engenharia de Dados',
          en: 'Data Engineering Assistant',
        },
        since: 'ago/2025',
      },
    ],
    summary: {
      'pt-BR':
        'Construo e mantenho pipelines de ETL e APIs internas que servem como base de dados confiáveis para Analytics, Data Science e times consumidores.',
      en: 'I build and maintain ETL pipelines and internal APIs that act as a reliable data foundation for Analytics, Data Science and consumer teams.',
    },
    highlights: {
      'pt-BR': [
        'Desenvolvimento e evolução de pipelines de ETL com PySpark, em arquitetura medallion (staging → bronze → silver) com particionamento e deduplicação',
        'Construção de APIs REST em FastAPI para entrega de dados a sistemas internos e times consumidores',
        'Integração com a API da Meta para ingestão de dados de marketing',
        'Sustentação e monitoramento de DAGs no Airflow',
        'Modelagem e consultas em Amazon Redshift e DynamoDB',
        'Conteinerização com Docker para padronização de ambientes',
        'Apoio direto a Analytics e Data Science com dados confiáveis para análises e modelos',
      ],
      en: [
        'Built and evolved ETL pipelines with PySpark in a medallion architecture (staging → bronze → silver) with partitioning and deduplication',
        'Built REST APIs in FastAPI to deliver data to internal systems and consumer teams',
        'Integrated with the Meta API for marketing data ingestion',
        'Maintained and monitored DAGs in Airflow',
        'Modeled and queried data in Amazon Redshift and DynamoDB',
        'Containerized environments with Docker for consistency',
        'Directly supported Analytics and Data Science with reliable data for analyses and models',
      ],
    },
    tech: [
      'Python',
      'PySpark',
      'FastAPI',
      'Airflow',
      'Docker',
      'AWS',
      'Redshift',
      'DynamoDB',
      'SQL',
    ],
  },
  {
    id: 'adoc',
    company: 'aDoc',
    startYear: 2025,
    endYear: 2025,
    current: false,
    category: 'legal-tech',
    roles: [
      {
        title: { 'pt-BR': 'Engenheiro Jurídico', en: 'Legal Engineer' },
        since: 'mar/2025',
      },
    ],
    summary: {
      'pt-BR':
        'Atuei na automação e formatação de documentos jurídicos na plataforma no-code Avvoka, configurando variáveis, condições e lógica para geração automatizada de modelos.',
      en: 'Worked on the automation and formatting of legal documents in the no-code Avvoka platform, configuring variables, conditions and logic for automated template generation.',
    },
    highlights: {
      'pt-BR': [
        'Automação de modelos jurídicos no Avvoka (lógica condicional e variáveis)',
        'Personalização e ajustes de layout em Microsoft Word',
      ],
      en: [
        'Automated legal templates in Avvoka (conditional logic and variables)',
        'Custom layout adjustments in Microsoft Word',
      ],
    },
    tech: ['Avvoka', 'Microsoft Word'],
  },
  {
    id: 'sr-consulting',
    company: 'SR Consulting',
    startYear: 2025,
    endYear: 2025,
    current: false,
    category: 'salesforce',
    roles: [
      {
        title: {
          'pt-BR': 'Estagiário de Desenvolvimento Salesforce',
          en: 'Salesforce Development Intern',
        },
        since: 'mar/2025',
      },
    ],
    summary: {
      'pt-BR':
        'Atuei no desenvolvimento e customização de soluções na plataforma Salesforce para clientes de diversos setores, com foco em CRM e automação de processos.',
      en: 'Worked on the development and customization of solutions on the Salesforce platform for clients across multiple industries, focused on CRM and process automation.',
    },
    highlights: {
      'pt-BR': [
        'Criação de objetos personalizados e automações com Flow Builder',
        'Desenvolvimento em Apex e participação em sprints ágeis',
        'Implementação de componentes Lightning (Aura e LWC)',
        'Consultas com SOQL e ajustes em layouts',
      ],
      en: [
        'Created custom objects and automations with Flow Builder',
        'Developed in Apex and participated in agile sprints',
        'Built Lightning components (Aura and LWC)',
        'Wrote SOQL queries and adjusted page layouts',
      ],
    },
    tech: ['Salesforce', 'Apex', 'LWC', 'Aura', 'SOQL'],
  },
  {
    id: 'pao-dos-pobres',
    company: 'Fundação O Pão dos Pobres',
    startYear: 2024,
    endYear: 2025,
    current: false,
    category: 'training',
    roles: [
      {
        title: {
          'pt-BR': 'Curso de Aprendizagem Profissional · Manutenção de Computadores',
          en: 'Professional Training Course · Computer Maintenance',
        },
        since: 'ago/2024',
      },
    ],
    summary: {
      'pt-BR':
        'Curso de aprendizagem profissional em Suporte de TI: montagem e manutenção de hardware, instalação de sistemas operacionais e diagnóstico de problemas de software.',
      en: 'Professional training course in IT support: hardware assembly and maintenance, operating system installation and software troubleshooting.',
    },
    tech: ['Windows', 'Linux', 'Hardware', 'Suporte TI'],
  },
  {
    id: 'geracao-caldeira',
    company: 'Geração Caldeira',
    url: 'https://www.geracaocaldeira.org/',
    startYear: 2024,
    endYear: 2024,
    current: false,
    category: 'training',
    roles: [
      {
        title: {
          'pt-BR': 'Aluno · Trilha Programação Python',
          en: 'Student · Python Programming Track',
        },
        since: 'set/2024',
      },
    ],
    summary: {
      'pt-BR':
        'Programa de capacitação em programação Python: quatro meses imersos em fundamentos, estruturas de dados e prática orientada a projetos. Encerrei com o desafio final em Machine Learning aplicado à educação.',
      en: 'Python programming training program: four months immersed in fundamentals, data structures and project-driven practice. Wrapped up with the final challenge on Machine Learning applied to education.',
    },
    tech: ['Python'],
  },
  {
    id: 'ios',
    company: 'Instituto da Oportunidade Social (IOS)',
    url: 'https://ios.org.br',
    startYear: 2023,
    endYear: 2024,
    current: false,
    category: 'training',
    roles: [
      {
        title: {
          'pt-BR': 'Aluno · Desenvolvimento Web Full Stack',
          en: 'Student · Full Stack Web Development',
        },
        since: 'jul/2023',
      },
    ],
    summary: {
      'pt-BR':
        'Curso completo de Desenvolvimento Web Full Stack: fundamentos de HTML, CSS, JavaScript, PHP e bancos de dados relacionais. Em dez/2024 voltei como pré-banca avaliadora dos trabalhos de conclusão de curso, ajudando a turma seguinte a preparar seus projetos.',
      en: 'Complete Full Stack Web Development course: fundamentals of HTML, CSS, JavaScript, PHP and relational databases. In December 2024 I returned as a pre-panel evaluator for the final-project submissions, helping the next cohort prepare their work.',
    },
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
];
