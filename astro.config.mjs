import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://atuelcanyonargentina.com',
  // 强制所有 URL 以斜杠结尾，消除 /es 与 /es/ 的重复收录风险（canonical/hreflang 同步带尾斜杠）。
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en', 'zh', 'it'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    '/': '/es/',
  },
  integrations: [
    sitemap({
      // 法律页（隐私/条款/Cookie）已 noindex，且从 sitemap 排除，避免向搜索引擎提交不应收录的 URL。
      filter: (page) => !/privacy|terms|cookies/.test(page),
      i18n: {
        defaultLocale: 'es',
        // hreflang 使用连字符格式（es-AR），下划线（es_AR）是 Open Graph 格式，
        // 且会被 @astrojs/sitemap 的 schema 校验拒绝导致 sitemap 完全不生成。
        // 这些值必须与 src/i18n/config.ts 中的 `hreflang` 映射保持一致。
        locales: {
          es: 'es-AR',
          en: 'en-US',
          zh: 'zh-CN',
          it: 'it-IT',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
