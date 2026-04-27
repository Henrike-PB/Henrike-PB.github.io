# Portfólio · Henrike Pajares Braga

Portfólio pessoal de **Henrike Pajares Braga**, Engenheiro de Dados em Porto Alegre.

🔗 **Online em:** [henrike-pb.github.io](https://henrike-pb.github.io)

## Stack

- [Astro 5](https://astro.build) (static-first, zero-JS por padrão)
- TypeScript estrito
- [Tailwind CSS 4](https://tailwindcss.com)
- [astro-icon](https://github.com/natemoo-re/astro-icon) com Lucide e Simple Icons
- Otimização de imagens via [Sharp](https://sharp.pixelplumbing.com)

## Rodando localmente

```bash
npm install
npm run dev          # http://localhost:4321
npm run build        # gera dist/
npm run preview      # serve dist/ pra checar
```

## Estrutura

```
src/
├── data/           dados (personal, experience, projects, tech, education, volunteer)
├── lib/            helpers (idade, ano, ordenação)
├── components/     Hero, About, Timeline, TechStack, Projects, Volunteer, Education, Contact, Header, Footer
├── layouts/        Base.astro
├── pages/          index.astro
├── styles/         global.css (tokens + Tailwind)
└── assets/         imagens otimizadas em build (profile, projects, volunteer)
```

## Deploy

Deploy automático para GitHub Pages via GitHub Actions a cada push em `main`. Ver [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## Contato

- Email: pajaresbragahenrike@gmail.com
- LinkedIn: [henrikebraga](https://www.linkedin.com/in/henrikebraga/)
- GitHub: [@Henrike-PB](https://github.com/Henrike-PB)

## Licença

MIT — ver [LICENSE](LICENSE).
