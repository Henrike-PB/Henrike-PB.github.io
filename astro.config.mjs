import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

const SITE = 'https://henrike-pb.github.io';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    build: {
      sourcemap: false,
      cssCodeSplit: true,
      minify: 'esbuild',
    },
  },
  integrations: [
    sitemap(),
    icon({
      include: {
        lucide: [
          'arrow-right',
          'arrow-up',
          'award',
          'camera',
          'check',
          'database',
          'external-link',
          'graduation-cap',
          'heart-handshake',
          'layers',
          'lightbulb',
          'line-chart',
          'mail',
          'moon',
          'paw-print',
          'scale',
          'send',
          'sun',
          'terminal',
          'users',
          'workflow',
        ],
        'simple-icons': [
          'amazonaws',
          'amazondynamodb',
          'amazonredshift',
          'apacheairflow',
          'apachespark',
          'css3',
          'databricks',
          'docker',
          'fastapi',
          'git',
          'github',
          'html5',
          'instagram',
          'javascript',
          'linkedin',
          'mysql',
          'php',
          'python',
          'salesforce',
        ],
      },
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
