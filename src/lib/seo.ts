import { ATTRACTION } from './site-config';

export interface Seo {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImageAlt: string;
  siteName: string;
  keywords: string[];
}

/**
 * 首页 TDK。
 *
 * 排序与写法原则（针对「排名 6–15 但 CTR 为 0」的问题）：
 * 1. 主关键词前置。英文页首要覆盖 `atuel canyon`（GSC 展现量最高），
 *    因此标题以 "Atuel Canyon" 开头，西语全称紧随其后括注，两种拼写同时命中。
 * 2. 标题补入具象需求词（Map / Tours / Tips / RP173 / Excursiones），
 *    让用户在 SERP 上一眼看到「这里有我要的东西」。
 * 3. 描述写成一个可执行的动作清单，并给出年份与具体地名（San Rafael、Lago Atuel），
 *    提升「点击收益」感知。长度控制在 150–160 字符，避免被截断。
 */
export function getSeo(locale: string): Seo {
  const map: Record<string, Seo> = {
    es: {
      title: 'Cañón del Atuel (Mendoza): Mapa, RP173 y Excursiones',
      description:
        'Planificá tu visita al Cañón del Atuel en San Rafael, Mendoza: mapa de la RP173, excursiones y rafting, Lago Atuel, el Volcán Overo, horarios y clima actualizado antes de salir.',
      ogTitle: 'Cañón del Atuel (San Rafael, Mendoza) — Guía de Viaje',
      ogDescription:
        'Guía del visitante al Cañón del Atuel: mapa de la ruta RP173, cinco embalses turquesa, excursiones desde San Rafael, Lago Atuel y clima en vivo.',
      ogImageAlt: 'Cañón del Atuel en San Rafael, Mendoza, Argentina',
      siteName: 'Guía del Cañón del Atuel',
      keywords: [
        'Cañón del Atuel',
        'Atuel Canyon',
        'canyon del atuel',
        'canon del atuel argentina',
        'Cañón del Atuel San Rafael',
        'Lago Atuel',
        'Volcán Overo',
        'Embalse El Nihuil',
        'RP173',
        'excursiones Cañón del Atuel',
        'rafting Mendoza',
        'turismo San Rafael',
        '阿图埃尔峡谷',
      ],
    },
    en: {
      title: 'Atuel Canyon (Cañón del Atuel) Guide: Map, Tours & Tips',
      description:
        'Plan your visit to Atuel Canyon (Cañón del Atuel) in San Rafael, Mendoza: RP173 route map, tours from San Rafael, rafting, Lago Atuel, Volcán Overo and live weather tips.',
      ogTitle: 'Atuel Canyon (Cañón del Atuel) — Complete Travel Guide',
      ogDescription:
        'Visitor guide to Atuel Canyon: the RP173 scenic drive, five turquoise reservoirs, tours from San Rafael, rafting and Lago Atuel activities.',
      ogImageAlt: 'Atuel Canyon (Cañón del Atuel) in San Rafael, Mendoza, Argentina',
      siteName: 'Atuel Canyon Travel Guide',
      keywords: [
        'Atuel Canyon',
        'atuel canyon argentina',
        'Cañón del Atuel',
        'canyon del atuel',
        'Atuel Canyon tours',
        'Lago Atuel',
        'Volcán Overo',
        'El Nihuil Reservoir',
        'RP173',
        'San Rafael Mendoza',
        'rafting Mendoza',
        '阿图埃尔峡谷',
      ],
    },
    zh: {
      title: '阿图埃尔峡谷 Cañón del Atuel：地图、RP173 路线与游玩攻略',
      description:
        '阿图埃尔峡谷（Cañón del Atuel / Atuel Canyon）完整游览指南：RP173 自驾路线图、圣拉斐尔出发的游览团与漂流、Lago Atuel 与 Volcán Overo 周边景点，以及实时天气与 7 天预报。',
      ogTitle: '阿图埃尔峡谷 Cañón del Atuel（圣拉斐尔）— 完整游览指南',
      ogDescription:
        '阿图埃尔峡谷参观指南：RP173 峡谷自驾公路、五座碧蓝水库、圣拉斐尔出发的一日游与漂流、Lago Atuel 水上活动与实时天气。',
      ogImageAlt: '阿根廷门多萨省圣拉斐尔阿图埃尔峡谷',
      siteName: '阿图埃尔峡谷旅行指南',
      keywords: [
        'Cañón del Atuel',
        'Atuel Canyon',
        '阿图埃尔峡谷',
        'canyon del atuel',
        'Lago Atuel',
        'Volcán Overo',
        'El Nihuil 水库',
        'RP173',
        '圣拉斐尔',
        '门多萨旅游',
        '阿根廷旅游',
        '漂流',
      ],
    },
    it: {
      title: 'Cañón del Atuel (Mendoza): Mappa, RP173 ed Escursioni',
      description:
        'Organizza la visita al Cañón del Atuel a San Rafael, Mendoza: mappa della RP173, escursioni e rafting, Lago Atuel, Volcán Overo, orari e meteo aggiornato prima di partire.',
      ogTitle: 'Cañón del Atuel (San Rafael, Mendoza) — Guida di Viaggio',
      ogDescription:
        'Guida per il visitatore al Cañón del Atuel: mappa della RP173, cinque invasi turchesi, escursioni da San Rafael, rafting e attività sul Lago Atuel.',
      ogImageAlt: 'Cañón del Atuel a San Rafael, Mendoza, Argentina',
      siteName: 'Guida del Cañón del Atuel',
      keywords: [
        'Cañón del Atuel',
        'Atuel Canyon',
        'canyon del atuel',
        'Lago Atuel',
        'Volcán Overo',
        'Invaso El Nihuil',
        'RP173',
        'San Rafael Mendoza',
        'escursioni Mendoza',
        'rafting Mendoza',
        '阿图埃尔峡谷',
      ],
    },
  };
  return map[locale] || map.es;
}

/**
 * H1：在保留「全称 + 城市」实体绑定的前提下补入 Guide/Guía 意图词，
 * 让搜索引擎与用户都能立刻判断这是「指南类」页面而非零散信息页。
 */
export function h1For(locale: string): string {
  const map: Record<string, string> = {
    es: `${ATTRACTION.fullName}, ${ATTRACTION.city} — Guía Completa del Visitante`,
    en: `${ATTRACTION.fullName} (${ATTRACTION.shortName}), ${ATTRACTION.city} — Complete Visitor Guide`,
    zh: `阿图埃尔峡谷 Cañón del Atuel（圣拉斐尔）— 完整游览指南`,
    it: `${ATTRACTION.fullName}, ${ATTRACTION.city} — Guida Completa per il Visitatore`,
  };
  return map[locale] || map.es;
}
