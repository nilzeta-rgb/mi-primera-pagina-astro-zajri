import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server', // o 'hybrid' si prefieres
  adapter: netlify(),
});