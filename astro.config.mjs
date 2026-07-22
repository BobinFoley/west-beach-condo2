import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://donnasdelight.com',
  integrations: [sitemap()],
  output: 'server',
  adapter: node({ mode: 'standalone' })
});
