export type ExperienceCategory =
  | 'data'
  | 'salesforce'
  | 'legal-tech'
  | 'training'
  | 'volunteer';

export type Role = {
  title: string;
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
  summary?: string;
  highlights?: string[];
  tech?: string[];
  honor?: string;
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
      { title: 'Engenheiro de Dados I', since: 'mar/2026' },
      { title: 'Assistente de Engenharia de Dados', since: 'ago/2025' },
    ],
    summary:
      'Construo e mantenho pipelines de ETL e APIs internas que servem como base de dados confiáveis para Analytics, Data Science e times consumidores.',
    highlights: [
      'Desenvolvimento e evolução de pipelines de ETL com PySpark, em arquitetura medallion (staging → bronze → silver) com particionamento e deduplicação',
      'Construção de APIs REST em FastAPI para entrega de dados a sistemas internos e times consumidores',
      'Integração com a API da Meta para ingestão de dados de marketing',
      'Sustentação e monitoramento de DAGs no Airflow',
      'Modelagem e consultas em Amazon Redshift e DynamoDB',
      'Conteinerização com Docker para padronização de ambientes',
      'Apoio direto a Analytics e Data Science com dados confiáveis para análises e modelos',
    ],
    tech: ['Python', 'PySpark', 'FastAPI', 'Airflow', 'Docker', 'AWS', 'Redshift', 'DynamoDB', 'SQL'],
  },
  {
    id: 'adoc',
    company: 'aDoc',
    startYear: 2025,
    current: true,
    category: 'legal-tech',
    roles: [{ title: 'Engenheiro Jurídico', since: 'mar/2025' }],
    summary:
      'Trabalho com automação e formatação de documentos jurídicos na plataforma no-code Avvoka. Configuro variáveis, condições e lógica para geração automatizada de modelos.',
    highlights: [
      'Automação de modelos jurídicos no Avvoka (lógica condicional e variáveis)',
      'Personalização e ajustes de layout em Microsoft Word',
    ],
    tech: ['Avvoka', 'Microsoft Word'],
  },
  {
    id: 'sr-consulting',
    company: 'SR Consulting',
    startYear: 2025,
    endYear: 2025,
    current: false,
    category: 'salesforce',
    roles: [{ title: 'Estagiário de Desenvolvimento Salesforce', since: 'mar/2025' }],
    summary:
      'Atuei no desenvolvimento e customização de soluções na plataforma Salesforce para clientes de diversos setores, com foco em CRM e automação de processos.',
    highlights: [
      'Criação de objetos personalizados e automações com Flow Builder',
      'Desenvolvimento em Apex e participação em sprints ágeis',
      'Implementação de componentes Lightning (Aura e LWC)',
      'Consultas com SOQL e ajustes em layouts',
    ],
    tech: ['Salesforce', 'Apex', 'LWC', 'Aura', 'SOQL'],
  },
  {
    id: 'pao-dos-pobres',
    company: 'Fundação O Pão dos Pobres',
    startYear: 2024,
    endYear: 2025,
    current: false,
    category: 'training',
    roles: [{ title: 'Curso de Aprendizagem Profissional · Manutenção de Computadores', since: 'ago/2024' }],
    summary:
      'Curso de aprendizagem profissional em Suporte de TI: montagem e manutenção de hardware, instalação de sistemas operacionais e diagnóstico de problemas de software.',
    tech: ['Windows', 'Linux', 'Hardware', 'Suporte TI'],
  },
  {
    id: 'geracao-caldeira',
    company: 'Geração Caldeira',
    url: 'https://geracaocaldeira.org.br',
    startYear: 2024,
    endYear: 2024,
    current: false,
    category: 'training',
    roles: [{ title: 'Aluno · Trilha Programação Python', since: 'set/2024' }],
    summary:
      'Programa de capacitação em programação Python: quatro meses imersos em fundamentos, estruturas de dados e prática orientada a projetos. Encerrei com o desafio final em Machine Learning aplicado à educação.',
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
    roles: [{ title: 'Aluno · Desenvolvimento Web Full Stack', since: 'jul/2023' }],
    summary:
      'Curso completo de Desenvolvimento Web Full Stack: fundamentos de HTML, CSS, JavaScript, PHP e bancos de dados relacionais. Em dez/2024 voltei como pré-banca avaliadora dos trabalhos de conclusão de curso, ajudando a turma seguinte a preparar seus projetos.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
];
