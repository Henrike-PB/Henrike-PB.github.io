import type { ImageMetadata } from 'astro';
import type { Localized } from '@/lib/i18n';

export type VolunteerActivity = {
  id: string;
  org: string;
  fullName?: string;
  role: Localized<string>;
  since: string;
  current: boolean;
  description: Localized<string>;
  url?: string;
  logoFile?: string;
  fallbackIcon: string;
  brandColor: string;
  honor?: Localized<string>;
};

const logos = import.meta.glob<ImageMetadata>('/src/assets/volunteer/*.{png,jpg,jpeg,svg,webp}', {
  eager: true,
  import: 'default',
});

export function getLogo(filename: string | undefined): ImageMetadata | undefined {
  if (!filename) return undefined;
  return logos[`/src/assets/volunteer/${filename}`];
}

export const volunteerActivities: VolunteerActivity[] = [
  {
    id: 'comq',
    org: 'COMQ',
    fullName: 'Centro de Oportunidades Mário Quintana',
    role: {
      'pt-BR': 'Voluntário · GT Programação',
      en: 'Volunteer · Programming Working Group',
    },
    since: 'jun/2024',
    current: true,
    description: {
      'pt-BR':
        'Voluntário no grupo de trabalho de programação e desenvolvimento de tecnologias da ONG, contribuindo em projetos com foco em impacto social. Entre jun/2024 e jul/2025, liderei o grupo organizando reuniões quinzenais com metodologias ágeis.',
      en: 'Volunteer in the programming and technology working group of the NGO, contributing to projects focused on social impact. Between Jun/2024 and Jul/2025 I led the group, organizing biweekly meetings with agile practices.',
    },
    fallbackIcon: 'lucide:lightbulb',
    brandColor: '#2f726b',
    honor: { 'pt-BR': 'Voluntário Destaque 2024', en: 'Featured Volunteer 2024' },
  },
  {
    id: 'juntas-por-eles',
    org: 'Juntas por Eles',
    role: { 'pt-BR': 'Associado', en: 'Associate' },
    since: 'mar/2022',
    current: true,
    description: {
      'pt-BR':
        'Auxilio sempre que possível esse projeto fantástico que busca ajudar animais em situação de rua.',
      en: 'I help whenever possible this fantastic project that supports street animals.',
    },
    fallbackIcon: 'lucide:paw-print',
    brandColor: '#3fe1d1',
  },
];
