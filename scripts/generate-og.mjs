import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const W = 1200;
const H = 630;
const BG = '#06142e';
const FG = '#f5d7db';
const ACCENT = '#f1916d';
const MUTED = '#bd83b8';

const photoSize = 420;
const photoX = W - photoSize - 80;
const photoY = (H - photoSize) / 2;

const photo = await sharp(resolve(root, 'src/assets/profile.jpg'))
  .resize(photoSize, photoSize, { fit: 'cover', position: 'top' })
  .composite([
    {
      input: Buffer.from(
        `<svg width="${photoSize}" height="${photoSize}"><rect x="0" y="0" width="${photoSize}" height="${photoSize}" rx="24" ry="24" fill="white"/></svg>`,
      ),
      blend: 'dest-in',
    },
  ])
  .png()
  .toBuffer();

const overlay = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="glow" cx="80%" cy="50%" r="60%">
      <stop offset="0%" stop-color="${ACCENT}" stop-opacity="0.18"/>
      <stop offset="60%" stop-color="${ACCENT}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <text x="80" y="240" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="600" fill="${ACCENT}" letter-spacing="6">PORTFÓLIO</text>
  <text x="80" y="330" font-family="Helvetica, Arial, sans-serif" font-size="72" font-weight="700" fill="${FG}">Henrike Pajares</text>
  <text x="80" y="410" font-family="Helvetica, Arial, sans-serif" font-size="72" font-weight="700" fill="${FG}">Braga</text>
  <text x="80" y="480" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="500" fill="${MUTED}">Engenheiro de Dados</text>
  <text x="80" y="525" font-family="Helvetica, Arial, sans-serif" font-size="26" font-weight="400" fill="${MUTED}" opacity="0.85">Porto Alegre · Python · PySpark · AWS · Airflow</text>
</svg>
`;

await sharp(Buffer.from(overlay))
  .composite([{ input: photo, top: Math.round(photoY), left: Math.round(photoX) }])
  .jpeg({ quality: 88 })
  .toFile(resolve(root, 'public/og-image.jpg'));

console.log('Generated public/og-image.jpg');
