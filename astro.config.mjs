import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://atuelcanyonargentina.com',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'zh', 'it'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    '/': '/es',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es_AR',
          en: 'en_US',
          zh: 'zh_CN',
          it: 'it_IT',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
