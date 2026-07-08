export function generateSchema(locale: string, baseUrl: string) {
  const localUrl = `${baseUrl}/${locale}`;

  const name =
    locale === 'es'
      ? 'Cañón del Atuel'
      : locale === 'zh'
        ? '阿图埃尔峡谷（Cañón del Atuel）'
        : locale === 'it'
          ? 'Cañón del Atuel'
          : 'Cañón del Atuel';

  const description =
    locale === 'es'
      ? 'Cañón del Atuel en San Rafael, Mendoza, Argentina. Cañón hidráulico de roca ocre y cinco embalses turquesa, ideal para rafting, la ruta RP173 y miradores.'
      : locale === 'zh'
        ? '阿根廷门多萨省圣拉斐尔的阿图埃尔峡谷（Cañón del Atuel）：赭红岩壁与五座碧蓝水库交织的水利峡谷，适合漂流、RP173 自驾与观景。'
        : locale === 'it'
          ? 'Cañón del Atuel a San Rafael, Mendoza, Argentina. Cañón idraulico di roccia ocra e cinque invasi turchesi, ideale per rafting, strada RP173 e miradores.'
          : 'Cañón del Atuel in San Rafael, Mendoza, Argentina. A hydraulic canyon of ochre rock and five turquoise reservoirs, ideal for rafting, the RP173 scenic drive and viewpoints.';

  const faqByLocale = {
    zh: [
      {
        q: '阿图埃尔峡谷（Cañón del Atuel）在哪里？怎么去？',
        a: '阿图埃尔峡谷位于阿根廷门多萨省圣拉斐尔（San Rafael）以南约 40 公里处，沿 RP173 省道可达。最方便的方式是从门多萨市区（约 240 公里）自驾或乘巴士到圣拉斐尔，再包车或参加一日游前往峡谷。',
      },
      {
        q: '游览阿图埃尔峡谷需要多长时间？',
        a: '仅沿 RP173 观光、停靠主要观景台约需 4–5 小时；若结合漂流、滑索或圣拉斐尔酒庄，建议预留一整天。峡谷公路全天可通行，水上项目一般 09:00–18:00 运营。',
      },
      {
        q: '峡谷里那些碧蓝的水库是天然的吗？',
        a: '阿图埃尔河上的五座水库（Agua del Toro、Los Reyunos、Valle Grande、Tierras Blancas、El Nihuil）均为 20 世纪中叶起修建的人工水利设施，用于发电与灌溉。它们把狂野的河流塑造成今日碧蓝相连的湖泊景观，是自然与工程的共同作品。',
      },
    ],
    en: [
      {
        q: 'Where is Cañón del Atuel and how do I get there?',
        a: 'Cañón del Atuel is about 40 km south of San Rafael, Mendoza Province, reached via RP173. The easiest way is to drive or take a bus from Mendoza city (~240 km) to San Rafael, then a private transfer or day tour to the canyon.',
      },
      {
        q: 'How long does a visit take?',
        a: 'Sightseeing along RP173 with the main viewpoints takes about 4–5 hours; with rafting, zip-line or San Rafael wineries, plan a full day. The canyon road is open all day; water activities generally run 09:00–18:00.',
      },
      {
        q: 'Are the turquoise reservoirs natural?',
        a: 'The five Atuel reservoirs (Agua del Toro, Los Reyunos, Valle Grande, Tierras Blancas, El Nihuil) are artificial hydraulic works built from the mid-20th century for power and irrigation. They reshaped the wild river into today’s linked turquoise lakes — a joint work of nature and engineering.',
      },
    ],
    es: [
      {
        q: '¿Dónde está el Cañón del Atuel y cómo llego?',
        a: 'El Cañón del Atuel queda unos 40 km al sur de San Rafael, Mendoza, por RP173. Lo más fácil es manejar o tomar ómnibus desde Mendoza ciudad (~240 km) a San Rafael, y luego traslado privado o excursión al cañón.',
      },
      {
        q: '¿Cuánto dura la visita?',
        a: 'El avistamiento por RP173 con los miradores principales lleva unas 4–5 horas; con rafting, canopy o bodegas de San Rafael, planeá un día completo. La ruta del cañón está abierta todo el día; las actividades acuáticas suelen ir de 09:00 a 18:00.',
      },
      {
        q: '¿Los embalses turquesa son naturales?',
        a: 'Los cinco embalses del Atuel (Agua del Toro, Los Reyunos, Valle Grande, Tierras Blancas, El Nihuil) son obras hidráulicas artificiales construidas desde mediados del siglo XX para energía y riego. Remodelaron el río salvaje en los lagos turquesa de hoy: una obra conjunta de naturaleza e ingeniería.',
      },
    ],
    it: [
      {
        q: 'Dove si trova il Cañón del Atuel e come ci arrivo?',
        a: 'Il Cañón del Atuel si trova circa 40 km a sud di San Rafael, Mendoza, sulla RP173. Il modo più semplice è guidare o prendere un pullman da Mendoza città (~240 km) a San Rafael, poi un trasferimento privato o un tour al canyon.',
      },
      {
        q: 'Quanto dura la visita?',
        a: 'L’avvistamento su RP173 con i miradores principali richiede circa 4–5 ore; con rafting, zip-line o cantine di San Rafael, prevedi una giornata intera. La strada del canyon è aperta tutto il giorno; le attività acquatiche di solito vanno dalle 09:00 alle 18:00.',
      },
      {
        q: 'Gli invasi turchesi sono naturali?',
        a: 'I cinque invasi dell’Atuel (Agua del Toro, Los Reyunos, Valle Grande, Tierras Blancas, El Nihuil) sono opere idrauliche artificiali costruite dalla metà del XX secolo per energia e irrigazione. Hanno rimodellato il fiume selvaggio nei laghi turchesi di oggi: un’opera congiunta di natura e ingegneria.',
      },
    ],
  } as const;

  const tripByLocale = {
    zh: {
      name: '阿图埃尔峡谷 RP173 自驾与漂流路线',
      description: '沿 RP173 省道自驾观赏峡谷与五座水库，并可参加阿图埃尔河白浪漂流的半日至一日行程。',
      difficulty: '轻松–中等',
      duration: 'PT5H',
      distance: '约 40 公里（圣拉斐尔至峡谷）',
    },
    en: {
      name: 'Cañón del Atuel RP173 Drive & Rafting Route',
      description: 'A half-day to full-day route driving the RP173 past the canyon and five reservoirs, with optional Atuel river white-water rafting.',
      difficulty: 'Easy–Moderate',
      duration: 'PT5H',
      distance: 'Approx. 40 km (San Rafael to canyon)',
    },
    es: {
      name: 'Ruta RP173 y Rafting del Cañón del Atuel',
      description: 'Recorrido de medio a día completo por la RP173 junto al cañón y los cinco embalses, con rafting opcional en el río Atuel.',
      difficulty: 'Fácil–Moderada',
      duration: 'PT5H',
      distance: 'Aprox. 40 km (San Rafael al cañón)',
    },
    it: {
      name: 'Strada RP173 e Rafting del Cañón del Atuel',
      description: 'Itinerario di mezza a intera giornata sulla RP173 lungo il canyon e i cinque invasi, con rafting opzionale sul fiume Atuel.',
      difficulty: 'Facile–Moderata',
      duration: 'PT5H',
      distance: 'Circa 40 km (San Rafael al canyon)',
    },
  } as const;

  const trip = tripByLocale[locale as keyof typeof tripByLocale] || tripByLocale.en;
  const faq = faqByLocale[locale as keyof typeof faqByLocale] || faqByLocale.en;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['TouristAttraction', 'Place'],
        name,
        alternateName: ['Cañón del Atuel', 'Atuel Canyon', '阿图埃尔峡谷', 'Cañón hidráulico del Atuel'],
        description,
        url: localUrl,
        image: `${baseUrl}/gallery/canon-del-atuel-1.jpg`,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -34.617,
          longitude: -68.331,
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'RP173, Cañón del Atuel',
          addressLocality: 'San Rafael',
          addressRegion: 'Mendoza',
          addressCountry: 'AR',
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        priceRange: 'ARS',
        isAccessibleForFree: true,
        mainEntityOfPage: localUrl,
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'geoCoordinate', value: 'San Rafael, Mendoza, Argentina' },
          { '@type': 'PropertyValue', name: 'altitude', value: 'approx. 750 m' },
          { '@type': 'PropertyValue', name: 'type', value: 'Cañón hidráulico / Embalses en cascata' },
          { '@type': 'PropertyValue', name: 'reservoirs', value: '5 embalses (Agua del Toro–El Nihuil)' },
          { '@type': 'PropertyValue', name: 'scenicRoad', value: 'Ruta Provincial RP173' },
        ],
        sameAs: [
          'https://maps.app.goo.gl/HPuD1u4M1LSnEJ178',
          'https://sanrafaelturismo.gov.ar/',
          'https://mendoza.tur.ar/',
          'https://www.argentina.travel/',
          'https://www.mendoza.gov.ar/',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '7171',
          bestRating: '5',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${localUrl}#faq`,
        url: `${localUrl}#faq`,
        inLanguage:
          locale === 'es' ? 'es-AR' : locale === 'zh' ? 'zh-CN' : locale === 'it' ? 'it-IT' : 'en-US',
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
      {
        '@type': 'TouristTrip',
        '@id': `${localUrl}#trail`,
        name: trip.name,
        description: trip.description,
        touristType:
          locale === 'zh'
            ? ['自驾游客', '户外爱好者']
            : locale === 'es'
              ? ['viajeros en auto', 'amantes del aire libre']
              : locale === 'it'
                ? ['viaggiatori in auto', 'amicii dell’outdoor']
                : ['road-trippers', 'outdoor lovers'],
        itinerary: {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name:
                locale === 'zh'
                  ? '圣拉斐尔（门户）'
                  : locale === 'es'
                    ? 'San Rafael (Base)'
                    : locale === 'it'
                      ? 'San Rafael (Base)'
                      : 'San Rafael (Base)',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name:
                locale === 'zh'
                  ? 'RP173 峡谷公路'
                  : locale === 'es'
                    ? 'Ruta RP173 del Cañón'
                    : locale === 'it'
                      ? 'Strada RP173 del Cañón'
                      : 'RP173 Canyon Road',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name:
                locale === 'zh'
                  ? '水库与 El Laberinto'
                  : locale === 'es'
                    ? 'Embalses y El Laberinto'
                    : locale === 'it'
                      ? 'Invasi ed El Laberinto'
                      : 'Reservoirs & El Laberinto',
            },
          ],
        },
        provider: {
          '@type': 'Organization',
          name: 'Cañón del Atuel Guide',
        },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          priceCurrency: 'ARS',
        },
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'difficulty', value: trip.difficulty },
          { '@type': 'PropertyValue', name: 'estimatedDuration', value: trip.duration },
          { '@type': 'PropertyValue', name: 'distance', value: trip.distance },
          {
            '@type': 'PropertyValue',
            name: 'safetyFocus',
            value:
              locale === 'zh'
                ? '强日照、RP173 弯道、水上安全与无痕探访'
                : locale === 'es'
                  ? 'sol de precordillera, curvas RP173, seguridad hídrica y dejar sin rastro'
                  : locale === 'it'
                    ? 'sole di precordillera, curve RP173, sicurezza idrica e lasciare senza tracce'
                    : 'foothill sun, RP173 curves, water safety and leave-no-trace',
          },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': localUrl,
        url: localUrl,
        name,
        description,
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${localUrl}#website`,
        },
        about: {
          '@id': localUrl,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${localUrl}#website`,
        url: localUrl,
        name,
        inLanguage:
          locale === 'es' ? 'es-AR' : locale === 'zh' ? 'zh-CN' : locale === 'it' ? 'it-IT' : 'en-US',
        isAccessibleForFree: true,
        publisher: {
          '@type': 'Organization',
          name: 'Cañón del Atuel Guide',
        },
      },
    ],
  };
}