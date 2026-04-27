import type { ImageMetadata } from 'astro';

export type VolunteerActivity = {
  id: string;
  org: string;
  fullName?: string;
  role: string;
  since: string;
  current: boolean;
  description: string;
  url?: string;
  logoFile?: string;
  fallbackIcon: string;
  brandColor: string;
  honor?: string;
};

const logos = import.meta.glob<ImageMetadata>(
  '/src/assets/volunteer/*.{png,jpg,jpeg,svg,webp}',
  { eager: true, import: 'default' }
);

export function getLogo(filename: string | undefined): ImageMetadata | undefined {
  if (!filename) return undefined;
  return logos[`/src/assets/volunteer/${filename}`];
}

export const volunteerActivities: VolunteerActivity[] = [
  {
    id: 'comq',
    org: 'COMQ',
    fullName: 'Centro de Oportunidades Mário Quintana',
    role: 'Voluntário · GT Programação',
    since: 'desde jun/2024',
    current: true,
    description:
      'Voluntário no grupo de trabalho de programação e desenvolvimento de tecnologias da ONG, contribuindo em projetos com foco em impacto social. Entre jun/2024 e jul/2025, liderei o grupo organizando reuniões quinzenais com metodologias ágeis.',
    logoFile: 'comq.png',
    fallbackIcon: 'lucide:lightbulb',
    brandColor: '#2f726b',
    honor: 'Voluntário Destaque 2024',
  },
  {
    id: 'juntas-por-eles',
    org: 'Juntas por Eles',
    role: 'Associado',
    since: 'desde mar/2022',
    current: true,
    description:
      'Auxilio sempre que possível esse projeto fantástico que busca ajudar animais em situação de rua.',
    logoFile: 'juntas-por-eles.png',
    fallbackIcon: 'lucide:paw-print',
    brandColor: '#3fe1d1',
  },
];
