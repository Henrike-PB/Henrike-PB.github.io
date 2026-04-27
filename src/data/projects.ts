import type { ImageMetadata } from 'astro';

export type ProjectCategory = 'web' | 'fullstack' | 'data' | 'game';

export type Project = {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  image?: ImageMetadata;
  icon?: string;
  liveUrl?: string;
  repoUrl?: string;
  partner?: string;
  featured?: boolean;
  note?: string;
};

const images = import.meta.glob<ImageMetadata>('/src/assets/projects/*.png', {
  eager: true,
  import: 'default',
});

function img(name: string): ImageMetadata | undefined {
  return images[`/src/assets/projects/${name}.png`];
}

export const projects: Project[] = [
  {
    id: 'analise-desempenho-academico',
    name: 'Análise de Desempenho Acadêmico com Machine Learning',
    description:
      'Desafio final do Geração Caldeira 2024: análise de dados educacionais e previsão do GPA de estudantes do ensino médio com regressão linear, identificando fatores que influenciam o desempenho. Pré-processamento, modelagem com scikit-learn, avaliação com MSE/R² e visualizações com matplotlib e seaborn.',
    category: 'data',
    tech: ['Python', 'pandas', 'scikit-learn', 'matplotlib', 'seaborn'],
    icon: 'lucide:line-chart',
    partner: 'Dafni Rosa, Raul Rotilli, João Vitor, Monique de Leon',
    featured: true,
    note: 'Repositório privado.',
  },
  {
    id: 'pizzaria-code',
    name: 'Pizzaria Code',
    description:
      'Pizzaria com sabores inspirados em linguagens de programação. Landing page com cardápio dinâmico em PHP + MySQL, design UX/UI mobile first.',
    category: 'fullstack',
    tech: ['PHP', 'MySQL', 'JavaScript', 'CSS'],
    image: img('pizza'),
    liveUrl: 'https://pizzaria-code.000webhostapp.com/',
    repoUrl: 'https://github.com/Henrike-PB/pizzaria-code',
    partner: 'Gabriel Mendes',
    featured: true,
  },
  {
    id: 'innova',
    name: 'INNOVA',
    description:
      'Projeto colaborativo do Instituto da Oportunidade Social ("Projeto Família"), com foco em soluções inovadoras para desafios sociais.',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: img('innova'),
    liveUrl: 'https://henrike-pb.github.io/projeto-final/',
    repoUrl: 'https://github.com/Henrike-PB/projeto-final',
    featured: true,
  },
  {
    id: 'caps-letters',
    name: "CAP'S LETTERS",
    description:
      'Página de debate sobre o futuro da programação, com tema de IA e o impacto no mercado de trabalho dos desenvolvedores.',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: img('cap'),
    liveUrl: 'https://henrike-pb.github.io/CAPS-LETTERS/',
    repoUrl: 'https://github.com/Henrike-PB/CAPS-LETTERS',
  },
  {
    id: 'cafeteria-ios',
    name: 'Cafeteria IOS',
    description:
      'Landing page imersiva sobre café usando técnicas avançadas de parallax para criar uma narrativa visual sensorial.',
    category: 'web',
    tech: ['HTML', 'CSS'],
    image: img('cafe'),
    liveUrl: 'https://henrike-pb.github.io/parallax-text2/',
    repoUrl: 'https://github.com/Henrike-PB/parallax-text2',
  },
  {
    id: 'sistema-solar',
    name: 'Sistema Solar',
    description:
      'Landing page imersiva sobre astronomia com efeitos de parallax que conduzem o visitante por uma viagem visual pelo Sistema Solar.',
    category: 'web',
    tech: ['HTML', 'CSS'],
    image: img('space'),
    liveUrl: 'https://henrike-pb.github.io/SOLAR356/',
    repoUrl: 'https://github.com/Henrike-PB/SOLAR356',
  },
  {
    id: 'vincents-calculator',
    name: "Vincent's Calculator",
    description:
      'Calculadora em JavaScript inspirada nas obras de Van Gogh, somando cálculo, arte e identidade visual.',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: img('calc'),
    liveUrl: 'https://henrike-pb.github.io/vincents-calculator/',
    repoUrl: 'https://github.com/Henrike-PB/vincents-calculator',
  },
  {
    id: 'imc',
    name: 'Calcule seu IMC',
    description:
      'Landing page que vai além do cálculo simples de IMC, apresentando informações sobre saúde e bem-estar associadas ao resultado.',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: img('imc'),
    liveUrl: 'https://henrike-pb.github.io/calculadora-IMC/',
    repoUrl: 'https://github.com/Henrike-PB/calculadora-IMC',
  },
  {
    id: 'todo',
    name: 'To-Do List',
    description:
      'Lista de tarefas com lógica de persistência e funcionalidades dinâmicas para gerenciar e acompanhar o progresso das atividades.',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: img('todo'),
    liveUrl: 'https://henrike-pb.github.io/to-do-list-js/',
    repoUrl: 'https://github.com/Henrike-PB/to-do-list-js',
  },
  {
    id: 'tabuada',
    name: 'Gerador de Tabuada',
    description:
      'Ferramenta educacional voltada ao público infantil com abordagem lúdica e interativa para aprender matemática.',
    category: 'web',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: img('tabuada'),
    liveUrl: 'https://henrike-pb.github.io/tabuada-js/',
    repoUrl: 'https://github.com/Henrike-PB/tabuada-js',
  },
  {
    id: 'game-of-old-lady',
    name: 'Game of Old Lady',
    description:
      'Jogo da velha em JavaScript com personalização do tema da partida, oferecendo uma experiência única a cada rodada.',
    category: 'game',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: img('gol'),
    liveUrl: 'https://henrike-pb.github.io/game-of-oldLady/',
    repoUrl: 'https://github.com/Henrike-PB/game-of-oldLady',
  },
  {
    id: 'quiz-soulslike',
    name: 'Quiz Soulslike',
    description:
      'Quiz interativo com tema do gênero de video game "Soulslike", feito em JavaScript puro.',
    category: 'game',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: img('souls'),
    liveUrl: 'https://henrike-pb.github.io/quiz-soulslike/',
    repoUrl: 'https://github.com/Henrike-PB/quiz-soulslike',
  },
  {
    id: 'mugiwara-jump',
    name: 'Mugiwara Jump',
    description:
      'Jogo de plataforma simples inspirado no universo de One Piece. Explore e salte obstáculos no mundo pirata.',
    category: 'game',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: img('mugiwara'),
    liveUrl: 'https://henrike-pb.github.io/Mugiwara-Jump/',
    repoUrl: 'https://github.com/Henrike-PB/Mugiwara-Jump',
  },
  {
    id: 'kiko-clicker',
    name: 'Kiko Clicker',
    description:
      'Jogo de clicker viciante: mecânica simples, competição por pontuações mais altas.',
    category: 'game',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: img('kiko'),
    liveUrl: 'https://cbrms1.github.io/Kiko_Clicker/',
    repoUrl: 'https://github.com/Henrike-PB/Kiko_Clicker',
    partner: 'Cauber Streck',
  },
];

export const projectCategories: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'web', label: 'Web' },
  { id: 'game', label: 'Jogos' },
  { id: 'data', label: 'Dados' },
];
