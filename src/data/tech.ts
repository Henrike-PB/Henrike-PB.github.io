export type TechItem = {
  name: string;
  icon?: string;
};

export type TechGroup = {
  id: string;
  title: string;
  description: string;
  items: TechItem[];
};

export const techStack: TechGroup[] = [
  {
    id: 'data',
    title: 'Engenharia de Dados',
    description:
      'Stack do dia a dia: pipelines de ETL, orquestração, APIs internas e processamento em escala.',
    items: [
      { name: 'Python', icon: 'simple-icons:python' },
      { name: 'PySpark', icon: 'simple-icons:apachespark' },
      { name: 'FastAPI', icon: 'simple-icons:fastapi' },
      { name: 'Airflow', icon: 'simple-icons:apacheairflow' },
      { name: 'Databricks', icon: 'simple-icons:databricks' },
      { name: 'AWS', icon: 'simple-icons:amazonaws' },
      { name: 'Amazon Redshift', icon: 'simple-icons:amazonredshift' },
      { name: 'DynamoDB', icon: 'simple-icons:amazondynamodb' },
      { name: 'SQL', icon: 'lucide:database' },
      { name: 'ETL', icon: 'lucide:workflow' },
    ],
  },
  {
    id: 'languages',
    title: 'Linguagens',
    description:
      'Linguagens que uso para escrever código profissionalmente. Python é hoje minha principal.',
    items: [
      { name: 'Python', icon: 'simple-icons:python' },
      { name: 'SQL', icon: 'lucide:database' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'Apex', icon: 'simple-icons:salesforce' },
    ],
  },
  {
    id: 'web',
    title: 'Web',
    description:
      'Bagagem do desenvolvimento web full stack adquirida no IOS. Fundamentos que continuam relevantes.',
    items: [
      { name: 'HTML', icon: 'simple-icons:html5' },
      { name: 'CSS', icon: 'simple-icons:css3' },
      { name: 'JavaScript', icon: 'simple-icons:javascript' },
      { name: 'PHP', icon: 'simple-icons:php' },
      { name: 'MySQL', icon: 'simple-icons:mysql' },
    ],
  },
  {
    id: 'tools',
    title: 'Ferramentas & Plataformas',
    description:
      'Ferramentas de versionamento, conteinerização, sistemas operacionais e plataformas de trabalho.',
    items: [
      { name: 'Git', icon: 'simple-icons:git' },
      { name: 'GitHub', icon: 'simple-icons:github' },
      { name: 'Docker', icon: 'simple-icons:docker' },
      { name: 'Salesforce', icon: 'simple-icons:salesforce' },
      { name: 'Linux', icon: 'lucide:terminal' },
    ],
  },
];
