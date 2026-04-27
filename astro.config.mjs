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
        lucide: ['*'],
        'simple-icons': [
          'python', 'fastapi', 'docker',
          'apacheairflow', 'apachespark', 'databricks',
          'amazonaws', 'amazonredshift', 'amazondynamodb',
          'postgresql', 'mysql',
          'javascript', 'typescript', 'react', 'astro',
          'html5', 'css3', 'php', 'git', 'github', 'linkedin',
          'instagram', 'salesforce',
        ],
      },
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
