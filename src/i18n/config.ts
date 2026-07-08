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

export function getLangConfig(l: string): { htmlLang: string; ogLocale: string } {
  return localeConfig[(l as Locale)] || localeConfig.es;
}
