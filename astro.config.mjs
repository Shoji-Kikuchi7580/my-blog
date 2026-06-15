// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import { SITE } from './src/config';

export default defineConfig({
  site: SITE.url,
  adapter: netlify(),
  integrations: [sitemap(), react(), keystatic()],
});
