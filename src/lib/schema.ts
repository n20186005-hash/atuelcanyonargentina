import { ATTRACTION, SITE, AUTHORITY_SOURCES } from './site-config';

// ─────────────────────────────────────────────────────────────
// JSON-LD 结构化数据（Schema.org）
// 向 Google 明确定义站点对应的地理实体、坐标与物理属性，
// 并补充 @id / image / hasMap，帮助搜索引擎在知识图谱中精确锚定节点。
// ─────────────────────────────────────────────────────────────

export type Faq = { q: string; a: string };

// 同一份数据既用于 FAQPage 结构化数据，也用于页面可见 FAQ 区块，
// 保证「结构化数据中的内容在页面上真实可见」。
//
// 注意：FAQ 数据必须与页面上真实渲染出来的问答一致，
// 否则会被判定为「结构化数据与可见内容不符」而失去富媒体摘要资格。
export const FAQ_BY_LOCALE: Record<string, Faq[]> = {
  zh: [
    {
      q: '阿图埃尔峡谷（Cañón del Atuel）在哪里？',
      a: '阿图埃尔峡谷（Cañón del Atuel）位于阿根廷门多萨省圣拉斐尔（San Rafael）以南约 40 公里处，地址为 RP173, San Rafael, Mendoza, Argentina，邮政编码 5600。',
    },
    {
      q: '怎么去阿图埃尔峡谷？',
      a: '最方便的方式是从门多萨市区（约 240 公里）自驾或乘巴士到圣拉斐尔，再沿 RP173 省道行驶约 40 公里抵达峡谷；也可从圣拉斐尔包车或参加当地一日游。',
    },
    {
      q: '阿图埃尔峡谷是免费参观的吗？',
      a: '是的，峡谷观光公路（RP173）与沿途观景台免费开放，全年可通行。漂流、皮划艇、滑索、租船等项目单独收费，价格以现场或运营商公布为准。',
    },
    {
      q: '游览阿图埃尔峡谷需要多长时间？',
      a: '仅沿 RP173 观光、停靠主要观景台约需 4–5 小时；若结合漂流、滑索或圣拉斐尔酒庄，建议预留一整天。峡谷公路全天可通行，水上项目一般 09:00–18:00 运营。',
    },
    {
      q: '峡谷里那些碧蓝的水库是天然的吗？',
      a: '阿图埃尔河上的五座水库（Agua del Toro、Los Reyunos、Valle Grande、Tierras Blancas、El Nihuil）均为 20 世纪中叶起修建的人工水利设施，用于发电与灌溉。它们把狂野的河流塑造成今日碧蓝相连的湖泊景观，是自然与工程的共同作品。',
    },
    {
      q: '阿图埃尔峡谷适合带小孩或家庭出游吗？',
      a: '非常适合。观景台与水库区域轻松安全，适合家庭与摄影；漂流与滑索等项目有专业安全装备，但需根据儿童年龄选择难度。请全程看护儿童，远离涨水河段。',
    },
    {
      q: '自驾 RP173 需要注意什么？',
      a: 'RP173 是贴着峡谷崖壁蜿蜒的景观公路，弯道多、部分路段临崖。请控制车速、避免夜间行车、进山前加满油，并留意雨季落石与突发的强风。建议下载离线地图，因为峡谷内手机信号不稳定。',
    },
    {
      q: '阿图埃尔峡谷周边还有哪些值得一游的景点？',
      a: '周边可顺道造访 El Laberinto（迷宫石林）、Valle Grande 水库、El Nihuil 水库，以及圣拉斐尔葡萄酒之路（Ruta del Vino）。',
    },
    {
      q: '阿图埃尔峡谷有卫生间和停车位吗？',
      a: '有。沿线主要观景台与水库服务点设有公共卫生间与免费路侧停车带，但容量有限，旺季上午容易停满。峡谷深处路段与临崖观景台通常没有固定卫生间，建议在圣拉斐尔市区或 El Nihuil 出发前使用。请勿在应急通道、弯道或临崖路段停车。',
    },
    {
      q: '峡谷沿线有餐饮、住宿和加油补给吗？',
      a: '水库休闲区与部分观景台有餐饮服务点，圣拉斐尔市区的选择最丰富；峡谷内没有住宿，住宿集中在圣拉斐尔市区与水库周边（露营与度假小屋类型）。加油站以圣拉斐尔市区最密集，峡谷沿线几乎没有，电动车公共充电桩也集中在圣拉斐尔市区。',
    },
    {
      q: '什么季节和天气最适合游览阿图埃尔峡谷？',
      a: '峡谷全年可游览。春秋气温舒适、光线好；夏季炎热且紫外线极强，建议清晨出发并做好防晒；冬季昼夜温差大，需携带保暖外套。峡谷属干旱气候，降水少但集中，雨后水位上涨时请勿下水，出发前请查看实时天气与 7 天预报。',
    },
  ],
  en: [
    {
      q: 'Where is Cañón del Atuel located?',
      a: 'Cañón del Atuel is located about 40 km south of San Rafael, Mendoza Province, Argentina, at RP173, San Rafael, Mendoza, postal code 5600.',
    },
    {
      q: 'How do I get to Cañón del Atuel?',
      a: 'The easiest way is to drive or take a bus from Mendoza city (~240 km) to San Rafael, then follow the RP173 provincial road for about 40 km to the canyon. From San Rafael you can also hire a private transfer or join a local day tour.',
    },
    {
      q: 'Is Cañón del Atuel free to visit?',
      a: 'Yes. The canyon scenic road (RP173) and its viewpoints are a public space and are free to visit year-round. Rafting, kayaking, zip-line and boat rental are charged separately by operators.',
    },
    {
      q: 'How long does a visit take?',
      a: 'Sightseeing along RP173 with the main viewpoints takes about 4–5 hours; with rafting, zip-line or San Rafael wineries, plan a full day. The canyon road is open all day; water activities generally run 09:00–18:00.',
    },
    {
      q: 'Are the turquoise reservoirs natural?',
      a: 'The five Atuel reservoirs (Agua del Toro, Los Reyunos, Valle Grande, Tierras Blancas, El Nihuil) are artificial hydraulic works built from the mid-20th century for power and irrigation. They reshaped the wild river into today’s linked turquoise lakes — a joint work of nature and engineering.',
    },
    {
      q: 'Is Cañón del Atuel suitable for families with children?',
      a: 'Very much so. Viewpoints and reservoir areas are easy and safe for families and photography; rafting and zip-line provide professional safety gear but choose difficulty by the child’s age. Supervise children and keep clear of swollen water.',
    },
    {
      q: 'What should I know about driving RP173?',
      a: 'RP173 is a scenic road hugging the canyon wall with many curves and some cliff-edge sections. Control your speed, avoid night driving, fill the tank before entering, and watch for rockfall and sudden strong winds in the rainy season. Download offline maps as mobile signal is weak in the canyon.',
    },
    {
      q: 'What landmarks are near Cañón del Atuel?',
      a: 'Nearby you can easily visit El Laberinto (Rock Labyrinth), Valle Grande Reservoir, El Nihuil Reservoir and the San Rafael Wine Route (Ruta del Vino).',
    },
    {
      q: 'Are there restrooms and parking at Cañón del Atuel?',
      a: 'Yes. Public restrooms and free roadside parking bays are available at the main viewpoints and reservoir service areas, but capacity is limited and bays fill up in the morning during peak season. Deeper sections and cliff-edge viewpoints generally have no fixed restrooms — go before leaving San Rafael city or El Nihuil, and never park on emergency lanes, curves or cliff-edge sections.',
    },
    {
      q: 'Is there food, accommodation and fuel along the canyon?',
      a: 'There are dining points at reservoir leisure areas and some viewpoints, with the widest choice in San Rafael city. There is no lodging inside the canyon; accommodation is concentrated in San Rafael city and around the reservoirs (camping and cabin types). Fuel stations are densest in San Rafael city and almost absent along the canyon road; public EV charging is also concentrated in San Rafael city.',
    },
    {
      q: 'What is the best season and weather for visiting Cañón del Atuel?',
      a: 'The canyon is visitable year-round. Spring and autumn offer comfortable temperatures and good light; summer is hot with extreme UV, so start early and use sun protection; winter brings a wide day–night temperature range, so bring a warm jacket. The climate is arid with scarce but concentrated rainfall — do not enter the water after rain, and check the live weather and 7-day forecast before you set out.',
    },
  ],
  es: [
    {
      q: '¿Dónde está el Cañón del Atuel?',
      a: 'El Cañón del Atuel se encuentra a unos 40 km al sur de San Rafael, provincia de Mendoza, Argentina, en RP173, San Rafael, Mendoza, código postal 5600.',
    },
    {
      q: '¿Cómo llego al Cañón del Atuel?',
      a: 'Lo más fácil es manejar o tomar un ómnibus desde Mendoza ciudad (~240 km) hasta San Rafael y luego seguir la RP173 unos 40 km hasta el cañón. Desde San Rafael también podés contratar un traslado privado o una excursión.',
    },
    {
      q: '¿El Cañón del Atuel es gratis?',
      a: 'Sí. La ruta escénica del cañón (RP173) y sus miradores son un espacio público y se pueden visitar gratis todo el año. El rafting, kayak, canopy y alquiler de embarcaciones se cobran por separado.',
    },
    {
      q: '¿Cuánto dura la visita?',
      a: 'El avistamiento por RP173 con los miradores principales lleva unas 4–5 horas; con rafting, canopy o bodegas de San Rafael, planeá un día completo. La ruta del cañón está abierta todo el día; las actividades acuáticas suelen ir de 09:00 a 18:00.',
    },
    {
      q: '¿Los embalses turquesa son naturales?',
      a: 'Los cinco embalses del Atuel (Agua del Toro, Los Reyunos, Valle Grande, Tierras Blancas, El Nihuil) son obras hidráulicas artificiales construidas desde mediados del siglo XX para energía y riego. Remodelaron el río salvaje en los lagos turquesa de hoy: una obra conjunta de naturaleza e ingeniería.',
    },
    {
      q: '¿Es apto para familias con niños?',
      a: 'Sí, mucho. Los miradores y las zonas de embalse son cómodos y seguros para familias y fotografía; el rafting y el canopy incluyen equipo de seguridad profesional, pero elegí la dificultad según la edad del niño. Supervisá a los chicos y mantenete lejos de las aguas crecidas.',
    },
    {
      q: '¿Qué debo saber para manejar por la RP173?',
      a: 'La RP173 es una ruta escénica pegada al acantilado, con muchas curvas y tramos al borde. Controlá la velocidad, evitá manejar de noche, llená el tanque antes de entrar y atención a derrumbes y vientos fuertes en temporada de lluvias. Descargá mapas offline: la señal es débil en el cañón.',
    },
    {
      q: '¿Qué lugares hay cerca del Cañón del Atuel?',
      a: 'Cerca podés visitar El Laberinto (laberinto de roca), el embalse Valle Grande, el embalse El Nihuil y la Ruta del Vino de San Rafael.',
    },
    {
      q: '¿Hay baños y estacionamiento en el Cañón del Atuel?',
      a: 'Sí. Hay baños públicos y banquinas gratuitas en los miradores principales y en las áreas de servicio de los embalses, pero la capacidad es limitada y por la mañana en temporada alta se llenan. Los tramos profundos y los miradores al borde del acantilado no suelen tener baños fijos: conviene ir antes de salir de San Rafael o de El Nihuil. No estacione en banquinas de emergencia, curvas ni tramos al borde.',
    },
    {
      q: '¿Hay gastronomía, alojamiento y combustible en el cañón?',
      a: 'Hay puntos de comida en las áreas recreativas de los embalses y en algunos miradores, con la mayor variedad en la ciudad de San Rafael. No hay alojamiento dentro del cañón: se concentra en San Rafael y en los alrededores de los embalses (camping y cabañas). Las estaciones de servicio se concentran en San Rafael y casi no hay sobre la ruta del cañón; la carga eléctrica pública también se concentra en San Rafael.',
    },
    {
      q: '¿Cuál es la mejor temporada y clima para visitar el Cañón del Atuel?',
      a: 'Se puede visitar todo el año. Primavera y otoño ofrecen temperaturas agradables y buena luz; el verano es caluroso con UV extremo, conviene salir temprano y protegerse del sol; el invierno tiene gran amplitud térmica, lleve abrigo. El clima es árido, con lluvias escasas pero concentradas: no entre al agua después de llover y consulte el clima en vivo y el pronóstico de 7 días antes de salir.',
    },
  ],
  it: [
    {
      q: 'Dove si trova il Cañón del Atuel?',
      a: 'Il Cañón del Atuel si trova circa 40 km a sud di San Rafael, provincia di Mendoza, Argentina, in RP173, San Rafael, Mendoza, codice postale 5600.',
    },
    {
      q: 'Come ci arrivo?',
      a: 'Il modo più semplice è guidare o prendere un pullman da Mendoza città (~240 km) fino a San Rafael, poi seguire la RP173 per circa 40 km fino al canyon. Da San Rafael puoi anche prenotare un transfer privato o un tour locale.',
    },
    {
      q: 'Il Cañón del Atuel è gratuito?',
      a: 'Sì. La strada panoramica del canyon (RP173) e i suoi miradores sono uno spazio pubblico e si visitano gratis tutto l’anno. Rafting, kayak, zip-line e noleggio imbarcazioni sono a pagamento.',
    },
    {
      q: 'Quanto dura la visita?',
      a: 'L’avvistamento su RP173 con i miradores principali richiede circa 4–5 ore; con rafting, zip-line o cantine di San Rafael, prevedi una giornata intera. La strada del canyon è aperta tutto il giorno; le attività acquatiche di solito vanno dalle 09:00 alle 18:00.',
    },
    {
      q: 'Gli invasi turchesi sono naturali?',
      a: 'I cinque invasi dell’Atuel (Agua del Toro, Los Reyunos, Valle Grande, Tierras Blancas, El Nihuil) sono opere idrauliche artificiali costruite dalla metà del XX secolo per energia e irrigazione. Hanno rimodellato il fiume selvaggio nei laghi turchesi di oggi: un’opera congiunta di natura e ingegneria.',
    },
    {
      q: 'È adatto alle famiglie con bambini?',
      a: 'Sì, molto. I miradores e le zone degli invasi sono comodi e sicuri per famiglie e fotografia; rafting e zip-line forniscono attrezzatura di sicurezza professionale, ma scegli la difficoltà in base all’età del bambino. Sorveglia i bambini e stai lontano dalle acque ingrossate.',
    },
    {
      q: 'Cosa devo sapere per guidare sulla RP173?',
      a: 'La RP173 è una strada panoramica a ridosso della scogliera, con molte curve e tratti a picco. Controlla la velocità, evita di guidare di notte, fai il pieno prima di entrare e attenzione a cadute massi e venti forti nella stagione delle piogge. Scarica mappe offline: il segnale è debole nel canyon.',
    },
    {
      q: 'Quali luoghi ci sono vicino al Cañón del Atuel?',
      a: 'Nelle vicinanze puoi visitare El Laberinto (labirinto di roccia), l’invaso Valle Grande, l’invaso El Nihuil e la Ruta del Vino di San Rafael.',
    },
    {
      q: 'Ci sono bagni e parcheggio al Cañón del Atuel?',
      a: 'Sì. Nei miradores principali e nelle aree di servizio degli invasi ci sono bagni pubblici e piazzole gratuite, ma la capacità è limitata e in alta stagione al mattino si riempiono. I tratti interni e i miradores a picco non hanno bagni fissi: conviene andare prima di lasciare San Rafael o El Nihuil. Non sostare su corsie di emergenza, curve o tratti a picco.',
    },
    {
      q: 'Ci sono ristorazione, alloggio e carburante lungo il canyon?',
      a: 'Ci sono punti ristoro nelle aree ricreative degli invasi e in alcuni miradores, con la scelta più ampia nella città di San Rafael. Non ci sono alloggi dentro il canyon: si concentrano a San Rafael e intorno agli invasi (campeggi e cabin). I distributori sono più densi a San Rafael e quasi assenti lungo la strada del canyon; anche la ricarica elettrica pubblica si concentra a San Rafael.',
    },
    {
      q: 'Qual è la stagione e il clima migliori per visitare il Cañón del Atuel?',
      a: 'Si può visitare tutto l’anno. Primavera e autunno offrono temperature piacevoli e buona luce; l’estate è calda con UV estremo, meglio partire presto e proteggersi dal sole; l’inverno ha una forte escursione termica, porta una giacca calda. Il clima è arido, con piogge scarse ma concentrate: non entrare in acqua dopo la pioggia e controlla meteo in tempo reale e previsioni a 7 giorni prima di partire.',
    },
  ],
};

const TRIP_BY_LOCALE: Record<string, { name: string; description: string; difficulty: string; duration: string; distance: string }> = {
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
};

const LANDMARK_BY_LOCALE: Record<string, { region: string; breadcrumb: string[] }> = {
  zh: { region: '门多萨省', breadcrumb: ['阿图埃尔峡谷', '圣拉斐尔', '门多萨省', '阿根廷'] },
  en: { region: 'Mendoza Province', breadcrumb: ['Cañón del Atuel', 'San Rafael', 'Mendoza', 'Argentina'] },
  es: { region: 'Provincia de Mendoza', breadcrumb: ['Cañón del Atuel', 'San Rafael', 'Mendoza', 'Argentina'] },
  it: { region: 'Provincia di Mendoza', breadcrumb: ['Cañón del Atuel', 'San Rafael', 'Mendoza', 'Argentina'] },
};

// 设施可用性（LocationFeatureSpecification）。
// 只描述设施「类型」是否可用，不涉及任何具体商户。
const AMENITY_BY_LOCALE: Record<string, { name: string; value: boolean }[]> = {
  zh: [
    { name: '公共卫生间（主要观景台与水库服务点）', value: true },
    { name: '免费停车（观景台路侧停车带）', value: true },
    { name: '餐饮服务点（水库区与部分观景台）', value: true },
    { name: '露营区（水库周边）', value: true },
    { name: '饮用水补给（需自备）', value: false },
    { name: '公共电动车充电设施', value: false },
    { name: '移动网络信号（峡谷内不稳定）', value: false },
    { name: '加油站（邻近城镇）', value: true },
  ],
  en: [
    { name: 'Public restrooms (main viewpoints & reservoir service areas)', value: true },
    { name: 'Free parking (roadside bays at viewpoints)', value: true },
    { name: 'Food and drink services (reservoir areas & some viewpoints)', value: true },
    { name: 'Camping areas (around the reservoirs)', value: true },
    { name: 'Drinking water supply (bring your own)', value: false },
    { name: 'Public EV charging facilities', value: false },
    { name: 'Mobile phone coverage (unreliable in the canyon)', value: false },
    { name: 'Fuel station (nearby town)', value: true },
  ],
  es: [
    { name: 'Baños públicos (miradores principales y áreas de servicio)', value: true },
    { name: 'Estacionamiento gratuito (banquinas en los miradores)', value: true },
    { name: 'Servicios de comida y bebida (áreas de embalse y algunos miradores)', value: true },
    { name: 'Zonas de camping (alrededores de los embalses)', value: true },
    { name: 'Suministro de agua potable (traer la propia)', value: false },
    { name: 'Carga eléctrica pública', value: false },
    { name: 'Cobertura de celular (inestable en el cañón)', value: false },
    { name: 'Estación de servicio (localidad cercana)', value: true },
  ],
  it: [
    { name: 'Bagni pubblici (miradores principali e aree di servizio)', value: true },
    { name: 'Parcheggio gratuito (piazzole lungo la strada ai miradores)', value: true },
    { name: 'Servizi di ristorazione (aree degli invasi e alcuni miradores)', value: true },
    { name: 'Aree campeggio (intorno agli invasi)', value: true },
    { name: 'Fornitura di acqua potabile (portare la propria)', value: false },
    { name: 'Ricarica elettrica pubblica', value: false },
    { name: 'Copertura cellulare (instabile nel canyon)', value: false },
    { name: 'Distributore di carburante (paese vicino)', value: true },
  ],
};

const DESC_BY_LOCALE: Record<string, string> = {
  zh: '阿根廷门多萨省圣拉斐尔的阿图埃尔峡谷（Cañón del Atuel）：赭红岩壁与五座碧蓝水库交织的水利峡谷，适合漂流、RP173 自驾与观景。',
  en: 'Cañón del Atuel in San Rafael, Mendoza, Argentina. A hydraulic canyon of ochre rock and five turquoise reservoirs, ideal for rafting, the RP173 scenic drive and viewpoints.',
  es: 'Cañón del Atuel en San Rafael, Mendoza, Argentina. Cañón hidráulico de roca ocre y cinco embalses turquesa, ideal para rafting, la ruta RP173 y miradores.',
  it: 'Cañón del Atuel a San Rafael, Mendoza, Argentina. Cañón idraulico di roccia ocra e cinque invasi turchesi, ideale per rafting, strada RP173 e miradores.',
};

export function generateSchema(locale: string, baseUrl: string) {
  const localUrl = `${baseUrl}/${locale}`;
  const attractionId = `${baseUrl}/#attraction`;
  const siteId = `${baseUrl}/#website`;
  const orgId = `${baseUrl}/#organization`;

  const name = locale === 'zh' ? ATTRACTION.fullNameZh : ATTRACTION.fullName;
  const description = DESC_BY_LOCALE[locale] || DESC_BY_LOCALE.en;
  const faq = FAQ_BY_LOCALE[locale] || FAQ_BY_LOCALE.en;
  const trip = TRIP_BY_LOCALE[locale] || TRIP_BY_LOCALE.en;
  const landmark = LANDMARK_BY_LOCALE[locale] || LANDMARK_BY_LOCALE.en;
  const amenities = AMENITY_BY_LOCALE[locale] || AMENITY_BY_LOCALE.en;

  const inLanguage = locale === 'es' ? 'es-AR' : locale === 'zh' ? 'zh-CN' : locale === 'it' ? 'it-IT' : 'en-US';

  const heroImage = `${baseUrl}/img/canon-del-atuel-1-1600.jpg`;
  const images = [
    heroImage,
    `${baseUrl}/img/canon-del-atuel-5-1600.jpg`,
    `${baseUrl}/img/canon-del-atuel-9-1600.jpg`,
    `${baseUrl}/img/canon-del-atuel-13-1600.jpg`,
  ];

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['TouristAttraction', 'Place'],
        '@id': attractionId,
        name,
        alternateName: [
          ATTRACTION.fullName,
          ATTRACTION.shortName,
          'Atuel Canyon Argentina',
          '阿图埃尔峡谷',
          `${ATTRACTION.city} ${ATTRACTION.fullName}`,
        ],
        description,
        url: `${baseUrl}/`,
        mainEntityOfPage: localUrl,
        image: images,
        isAccessibleForFree: true,
        publicAccess: true,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ATTRACTION.streetAddress,
          addressLocality: ATTRACTION.city,
          addressRegion: ATTRACTION.state,
          postalCode: ATTRACTION.postalCode,
          addressCountry: ATTRACTION.countryCode,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: ATTRACTION.latitude,
          longitude: ATTRACTION.longitude,
        },
        hasMap: ATTRACTION.mapsShareUrl,
        containedInPlace: {
          '@type': 'AdministrativeArea',
          name: landmark.region,
          containedInPlace: { '@type': 'Country', name: ATTRACTION.country },
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
        priceRange: 'ARS',
        amenityFeature: amenities.map((a) => ({
          '@type': 'LocationFeatureSpecification',
          name: a.name,
          value: a.value,
        })),
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'geoCoordinate', value: 'San Rafael, Mendoza, Argentina' },
          { '@type': 'PropertyValue', name: 'altitude', value: 'approx. 750 m' },
          { '@type': 'PropertyValue', name: 'type', value: 'Cañón hidráulico / Embalses en cascata' },
          { '@type': 'PropertyValue', name: 'reservoirs', value: '5 embalses (Agua del Toro–El Nihuil)' },
          { '@type': 'PropertyValue', name: 'scenicRoad', value: 'Ruta Provincial RP173' },
        ],
        sameAs: [ATTRACTION.mapsShareUrl, ...AUTHORITY_SOURCES.map((s) => s.url).filter((u) => u !== ATTRACTION.mapsShareUrl)],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: ATTRACTION.ratingValue,
          reviewCount: ATTRACTION.reviewCount,
          bestRating: '5',
          worstRating: '1',
        },
        isPartOf: { '@id': siteId },
        provider: { '@id': orgId },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${localUrl}#breadcrumb`,
        itemListElement: landmark.breadcrumb.map((label, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: label,
          item: i === 0 ? localUrl : `${baseUrl}/`,
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${localUrl}#faq`,
        url: `${localUrl}#faq`,
        inLanguage,
        isPartOf: { '@id': siteId },
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
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
                ? ['viaggiatori in auto', 'amanti dell’outdoor']
                : ['road-trippers', 'outdoor lovers'],
        itinerary: {
          '@type': 'ItemList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: locale === 'zh' ? '圣拉斐尔（门户）' : locale === 'es' ? 'San Rafael (Base)' : locale === 'it' ? 'San Rafael (Base)' : 'San Rafael (Base)',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: locale === 'zh' ? 'RP173 峡谷公路' : locale === 'es' ? 'Ruta RP173 del Cañón' : locale === 'it' ? 'Strada RP173 del Cañón' : 'RP173 Canyon Road',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: locale === 'zh' ? '水库与 El Laberinto' : locale === 'es' ? 'Embalses y El Laberinto' : locale === 'it' ? 'Invasi ed El Laberinto' : 'Reservoirs & El Laberinto',
            },
          ],
        },
        provider: { '@id': orgId },
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock', priceCurrency: 'ARS' },
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'difficulty', value: trip.difficulty },
          { '@type': 'PropertyValue', name: 'estimatedDuration', value: trip.duration },
          { '@type': 'PropertyValue', name: 'distance', value: trip.distance },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': localUrl,
        url: localUrl,
        name,
        description,
        inLanguage,
        isPartOf: { '@id': siteId },
        about: { '@id': attractionId },
        breadcrumb: { '@id': `${localUrl}#breadcrumb` },
        primaryImageOfPage: { '@type': 'ImageObject', url: heroImage },
      },
      {
        '@type': 'WebSite',
        '@id': siteId,
        url: `${baseUrl}/`,
        name: locale === 'zh' ? '阿图埃尔峡谷旅行指南' : 'Cañón del Atuel Travel Guide',
        alternateName: SITE.domain,
        inLanguage,
        isAccessibleForFree: true,
        publisher: { '@id': orgId },
        about: { '@id': attractionId },
      },
      {
        '@type': 'Organization',
        '@id': orgId,
        name: 'Cañón del Atuel Guide',
        url: `${baseUrl}/`,
        logo: { '@type': 'ImageObject', url: `${baseUrl}/icon-512.png` },
        sameAs: AUTHORITY_SOURCES.map((s) => s.url),
      },
    ],
  };
}

// ─────────────────────────────────────────────────────────────
// 子页面（Cluster Content）结构化数据
//
// 每个子页面只输出与自身相关的节点：WebPage + BreadcrumbList + FAQPage，
// 并通过 about 指回首页的 TouristAttraction 实体（@id 复用），
// 让 Google 理解「这些页面是同一景点的深入内容」而不是互相竞争的独立页面。
//
// 同时刻意不重复输出 TouristAttraction 主体，避免多页面对同一实体
// 产生冲突信号（实体只应有一个规范声明，即首页）。
// ─────────────────────────────────────────────────────────────

const CRUMB_HOME: Record<string, string> = {
  zh: '阿图埃尔峡谷',
  en: 'Cañón del Atuel',
  es: 'Cañón del Atuel',
  it: 'Cañón del Atuel',
};

const IN_LANGUAGE: Record<string, string> = {
  zh: 'zh-CN',
  en: 'en-US',
  es: 'es-AR',
  it: 'it-IT',
};

export function generateClusterSchema(
  locale: string,
  baseUrl: string,
  slug: string,
  h1: string,
  description: string,
  faq: Faq[]
) {
  const pageUrl = `${baseUrl}/${locale}/${slug}`;
  const homeUrl = `${baseUrl}/${locale}`;
  const siteId = `${baseUrl}/#website`;
  const attractionId = `${baseUrl}/#attraction`;
  const inLanguage = IN_LANGUAGE[locale] || 'en-US';
  const heroImage = `${baseUrl}/img/canon-del-atuel-1-1600.jpg`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': pageUrl,
        url: pageUrl,
        name: h1,
        description,
        inLanguage,
        isPartOf: { '@id': siteId },
        about: { '@id': attractionId },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
        primaryImageOfPage: { '@type': 'ImageObject', url: heroImage },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: CRUMB_HOME[locale] || CRUMB_HOME.en,
            item: homeUrl,
          },
          { '@type': 'ListItem', position: 2, name: h1, item: pageUrl },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        url: `${pageUrl}#faq`,
        inLanguage,
        isPartOf: { '@id': siteId },
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ],
  };
}
