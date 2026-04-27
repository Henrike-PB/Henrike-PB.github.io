export type Education = {
  institution: string;
  degree: string;
  startYear: number;
  endYear: number;
  current: boolean;
  url?: string;
};

export const education: Education[] = [
  {
    institution: 'UNISINOS · Universidade do Vale do Rio dos Sinos',
    degree: 'CST em Análise e Desenvolvimento de Sistemas',
    startYear: 2024,
    endYear: 2027,
    current: true,
    url: 'https://www.unisinos.br',
  },
  {
    institution: 'Geração Caldeira',
    degree: 'Trilha de Programação Python · turma 2024',
    startYear: 2024,
    endYear: 2024,
    current: false,
    url: 'https://geracaocaldeira.org.br',
  },
  {
    institution: 'Fundação O Pão dos Pobres',
    degree: 'Curso de Aprendizagem Profissional · Manutenção de Computadores',
    startYear: 2024,
    endYear: 2025,
    current: false,
  },
  {
    institution: 'Instituto da Oportunidade Social (IOS)',
    degree: 'Desenvolvimento Web Full Stack',
    startYear: 2023,
    endYear: 2024,
    current: false,
    url: 'https://ios.org.br',
  },
];
