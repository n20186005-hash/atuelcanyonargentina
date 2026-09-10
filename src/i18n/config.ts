export const locales = ['es', 'en', 'zh', 'it'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'es';

// HTML lang 属性 + Open Graph locale 映射
export const localeConfig: Record<Locale, { htmlLang: string; ogLocale: string }> = {
  es: { htmlLang: 'es', ogLocale: 'es_AR' },
  en: { htmlLang: 'en', ogLocale: 'en_US' },
  zh: { htmlLang: 'zh-CN', ogLocale: 'zh_CN' },
  it: { htmlLang: 'it', ogLocale: 'it_IT' },
};

// hreflang / sitemap 使用的「语言-地区」代码（必须是连字符格式）
// 单一数据源：BaseLayout 的 <link rel="alternate"> 与 astro.config.mjs 的 sitemap 配置
// 必须保持一致，否则同一 URL 会向 Google 发出互相冲突的 hreflang 信号。
export const hreflang: Record<Locale, string> = {
  es: 'es-AR',
  en: 'en-US',
  zh: 'zh-CN',
  it: 'it-IT',
};

export function getLangConfig(l: string): { htmlLang: string; ogLocale: string } {
  return localeConfig[(l as Locale)] || localeConfig.es;
}
