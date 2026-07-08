export interface Seo {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  siteName: string;
  keywords: string[];
}

export function getSeo(locale: string): Seo {
  const map: Record<string, Seo> = {
    es: {
      title: 'Cañón del Atuel — Maravilla Natural e Hidráulica en Mendoza, Argentina',
      description:
        'Guía de viaje y contexto del Cañón del Atuel en San Rafael, Mendoza. Descubrí el cañón hidráulico de cinco embalses, la ruta RP173 y el rafting en el río Atuel.',
      ogTitle: 'Cañón del Atuel — Maravilla Natural e Hidráulica en Mendoza, Argentina',
      ogDescription:
        'Guía del Cañón del Atuel: un cañón de roca ocre y embalses turquesa en San Rafael, Mendoza.',
      siteName: 'Guía del Cañón del Atuel',
      keywords: [
        'Cañón del Atuel',
        'San Rafael',
        'Mendoza tourism',
        'Argentina tourism',
        'Río Atuel',
        'embalses',
        'RP173',
        'rafting Mendoza',
        '阿图埃尔峡谷',
        '门多萨旅游',
        'cañón hidráulico',
        'turismo Mendoza',
      ],
    },
    en: {
      title: 'Cañón del Atuel — Natural & Hydraulic Wonder in Mendoza, Argentina',
      description:
        'A travel guide to Cañón del Atuel in San Rafael, Mendoza. Explore the five linked reservoirs, the RP173 scenic drive and Atuel river rafting.',
      ogTitle: 'Cañón del Atuel — Natural & Hydraulic Wonder in Mendoza, Argentina',
      ogDescription: 'A guide to Cañón del Atuel: ochre rock and turquoise reservoirs in San Rafael, Mendoza.',
      siteName: 'Cañón del Atuel Travel Guide',
      keywords: [
        'Cañón del Atuel',
        'San Rafael',
        'Mendoza tourism',
        'Argentina tourism',
        'Río Atuel',
        'reservoirs',
        'RP173',
        'rafting Mendoza',
        '阿图埃尔峡谷',
        '门多萨旅游',
        'hydraulic canyon',
        'Mendoza travel',
      ],
    },
    zh: {
      title: '阿图埃尔峡谷（Cañón del Atuel）— 阿根廷门多萨省自然与水利奇观',
      description:
        '阿图埃尔峡谷旅行指南，位于阿根廷门多萨省圣拉斐尔。探索五座连环水库、RP173 峡谷自驾公路与阿图埃尔河白浪漂流。',
      ogTitle: '阿图埃尔峡谷（Cañón del Atuel）— 阿根廷门多萨省自然与水利奇观',
      ogDescription: '阿图埃尔峡谷旅行指南——圣拉斐尔赭红岩壁与碧蓝水库交织的水利峡谷。',
      siteName: '阿图埃尔峡谷旅行指南',
      keywords: [
        'Cañón del Atuel',
        '阿图埃尔峡谷',
        '圣拉斐尔',
        '门多萨旅游',
        '阿根廷旅游',
        'Río Atuel',
        '水库',
        'RP173',
        '门多萨漂流',
        'cañón hidráulico',
        'Mendoza travel',
      ],
    },
    it: {
      title: 'Cañón del Atuel — Meraviglia Naturale e Idraulica a Mendoza, Argentina',
      description:
        'Guida di viaggio al Cañón del Atuel a San Rafael, Mendoza. Esplora i cinque invasi, la strada panoramica RP173 e il rafting sul fiume Atuel.',
      ogTitle: 'Cañón del Atuel — Meraviglia Naturale e Idraulica a Mendoza, Argentina',
      ogDescription: 'Guida al Cañón del Atuel: roccia ocra e invasi turchesi a San Rafael, Mendoza.',
      siteName: 'Guida del Cañón del Atuel',
      keywords: [
        'Cañón del Atuel',
        'San Rafael',
        'Mendoza tourism',
        'Argentina tourism',
        'Río Atuel',
        'invasi',
        'RP173',
        'rafting Mendoza',
        '阿图埃尔峡谷',
        'turismo Mendoza',
        'cañón idraulico',
      ],
    },
  };
  return map[locale] || map.es;
}