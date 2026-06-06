import type { Localized } from '@/lib/i18n';

export type Education = {
  institution: string;
  degree: Localized<string>;
  startYear: number;
  endYear: number;
  current: boolean;
  url?: string;
};

export const education: Education[] = [
  {
    institution: 'UNISINOS · Universidade do Vale do Rio dos Sinos',
    degree: {
      'pt-BR': 'CST em Análise e Desenvolvimento de Sistemas',
      en: 'Associate Degree in Systems Analysis and Development',
    },
    startYear: 2024,
    endYear: 2027,
    current: true,
    url: 'https://www.unisinos.br',
  },
  {
    institution: 'Geração Caldeira',
    degree: {
      'pt-BR': 'Trilha de Programação Python · turma 2024',
      en: 'Python Programming Track · 2024 cohort',
    },
    startYear: 2024,
    endYear: 2024,
    current: false,
    url: 'https://www.geracaocaldeira.org/',
  },
  {
    institution: 'Fundação O Pão dos Pobres',
    degree: {
      'pt-BR': 'Curso de Aprendizagem Profissional · Manutenção de Computadores',
      en: 'Professional Training Course · Computer Maintenance',
    },
    startYear: 2024,
    endYear: 2025,
    current: false,
  },
  {
    institution: 'Instituto da Oportunidade Social (IOS)',
    degree: {
      'pt-BR': 'Desenvolvimento Web Full Stack',
      en: 'Full Stack Web Development',
    },
    startYear: 2023,
    endYear: 2024,
    current: false,
    url: 'https://ios.org.br',
  },
];
