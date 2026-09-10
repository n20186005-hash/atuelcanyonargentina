// ─────────────────────────────────────────────────────────────
// 单景点 SEO 实体绑定配置（Single-attraction entity config）
// 所有 SEO / Schema / 语义文案均从这里的变量派生，便于替换景点数据。
// ─────────────────────────────────────────────────────────────

export const SITE = {
  domain: 'atuelcanyonargentina.com',
  baseUrl: 'https://atuelcanyonargentina.com',
  defaultLocale: 'es',
  locales: ['es', 'en', 'zh', 'it'] as const,
  ga4Id: 'G-HXM22WWPKP',
  themeColor: '#c47a3a',
  backgroundColor: '#faf7f2',
} as const;

export const ATTRACTION = {
  /** 景点官方全称 */
  fullName: 'Cañón del Atuel',
  /** 域名含义对应的常用俗称 */
  shortName: 'Atuel Canyon',
  /** 中文常用名 */
  fullNameZh: '阿图埃尔峡谷（Cañón del Atuel）',
  city: 'San Rafael',
  state: 'Mendoza',
  country: 'Argentina',
  countryCode: 'AR',
  postalCode: '5600',
  streetAddress: 'RP173, Cañón del Atuel',
  latitude: -34.8393846,
  longitude: -68.5191883,
  ratingValue: '4.8',
  reviewCount: '7396',
  mapsShareUrl: 'https://maps.app.goo.gl/HPuD1u4M1LSnEJ178',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11640.429103543722!2d-68.5191883!3d-34.8393846!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9679bd683f8f7881%3A0xdfa13148a0b79300!2zQ2HDscOzbiBkZWwgQXR1ZWw!5e1!3m2!1szh-CN!2s!4v1789006161414!5m2!1szh-CN!2s',
  nearbyLandmark1: 'El Laberinto (Rock Labyrinth)',
  nearbyLandmark2: 'Valle Grande Reservoir',
  govtTourismUrl: 'https://sanrafaelturismo.gov.ar/',
} as const;

/** 权威出站链接（.gob / .org / 官方旅游局），用于 E-E-A-T 与 sameAs */
export const AUTHORITY_SOURCES: { name: string; url: string; desc: Record<string, string> }[] = [
  {
    name: 'Dirección de Turismo de San Rafael',
    url: 'https://sanrafaelturismo.gov.ar/',
    desc: {
      es: 'Dirección de Turismo del municipio de San Rafael: información oficial sobre el Cañón del Atuel, la RP173 y los embalses.',
      en: 'San Rafael municipal tourism board — official information on Cañón del Atuel, the RP173 road and the reservoirs.',
      zh: '圣拉斐尔市官方旅游局：阿图埃尔峡谷、RP173 公路与水库群的权威信息。',
      it: 'Ufficio turistico del comune di San Rafael — informazioni ufficiali su Cañón del Atuel, la RP173 e gli invasi.',
    },
  },
  {
    name: 'Turismo Mendoza',
    url: 'https://mendoza.tur.ar/',
    desc: {
      es: 'Portal oficial de turismo de la Provincia de Mendoza, con la ficha del Cañón del Atuel.',
      en: 'Official tourism portal of Mendoza Province, including the Cañón del Atuel listing.',
      zh: '门多萨省官方旅游门户，收录阿图埃尔峡谷官方介绍。',
      it: 'Portale turistico ufficiale della Provincia di Mendoza, con la scheda del Cañón del Atuel.',
    },
  },
  {
    name: 'Argentina.travel',
    url: 'https://www.argentina.travel/',
    desc: {
      es: 'Sitio oficial de turismo de la Nación Argentina.',
      en: 'Official national tourism website of Argentina.',
      zh: '阿根廷国家官方旅游网站。',
      it: 'Sito turistico ufficiale nazionale dell’Argentina.',
    },
  },
  {
    name: 'Gobierno de Mendoza',
    url: 'https://www.mendoza.gov.ar/',
    desc: {
      es: 'Gobierno de la Provincia de Mendoza: información hidráulica y de embalses del río Atuel.',
      en: 'Government of Mendoza Province — hydraulic and reservoir information for the Atuel River.',
      zh: '门多萨省政府：阿图埃尔河水利与水库官方信息。',
      it: 'Governo della Provincia di Mendoza — informazioni idrauliche e sugli invasi del fiume Atuel.',
    },
  },
  {
    name: 'Google Maps — Cañón del Atuel',
    url: ATTRACTION.mapsShareUrl,
    desc: {
      es: 'Ficha y reseñas del Cañón del Atuel en Google Maps (4.8 ★).',
      en: 'Cañón del Atuel listing and reviews on Google Maps (4.8 ★).',
      zh: '阿图埃尔峡谷在 Google 地图上的地点资料与评分（4.8 ★）。',
      it: 'Scheda e recensioni del Cañón del Atuel su Google Maps (4.8 ★).',
    },
  },
];

export function attractionName(locale: string): string {
  return locale === 'zh' ? ATTRACTION.fullNameZh : ATTRACTION.fullName;
}

export function canonicalFor(locale: string): string {
  return `${SITE.baseUrl}/${locale}`;
}
