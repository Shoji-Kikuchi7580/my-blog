// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import { SITE } from './src/config';

const isDev = process.argv.includes('dev');

export default defineConfig({
  site: SITE.url,
  integrations: [sitemap(), react(), ...(isDev ? [keystatic()] : [])],
});
