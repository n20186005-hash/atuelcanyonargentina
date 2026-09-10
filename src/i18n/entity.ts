import type { Locale } from './config';

// ─────────────────────────────────────────────────────────────
// 单景点「实体语义绑定」文案
// 将域名含义（Atuel Canyon）与官方全称（Cañón del Atuel）
// 在语义层面等同，并补充面包屑、周边语义集群与资料来源。
// ─────────────────────────────────────────────────────────────

export interface EntityContent {
  breadcrumbLabel: string;
  /** 4.1 首段等位声明（支持 **加粗**） */
  welcome: string;
  /** H2 */
  aboutTitle: string;
  locationTitle: string;
  landmarksTitle: string;
  historyTitle: string;
  /** 4.3 周边语义集群描述（支持 **加粗**） */
  landmarksIntro: string;
  landmarks: { name: string; desc: string }[];
  locationIntro: string;
  historyIntro: string;
  /** 面包屑层级 4.2 */
  breadcrumb: string[];
  /** 资料来源板块 */
  sourcesTitle: string;
  sourcesIntro: string;
  officialLabel: string;
  /** NAP 一致性 */
  napTitle: string;
  napName: string;
  napAddress: string;
  napPhone: string;
  napHours: string;
  /** 图片产权声明 */
  imageCreditsTitle: string;
  imageCredits: string;
}

export const ENTITY_CONTENT: Record<Locale, EntityContent> = {
  zh: {
    breadcrumbLabel: '位置层级',
    aboutTitle: '关于阿图埃尔峡谷',
    welcome:
      '欢迎来到 **Cañón del Atuel**（阿图埃尔峡谷），人们也常以 **Atuel Canyon** 称呼它。它位于阿根廷 **门多萨省** **圣拉斐尔**的核心地带，是到访该地区旅行者的主要目的地与集散枢纽。',
    locationTitle: '位置与如何前往圣拉斐尔的阿图埃尔峡谷',
    landmarksTitle: '阿图埃尔峡谷周边的地标与景点',
    historyTitle: '阿图埃尔峡谷的历史与意义',
    landmarksIntro:
      '在游览 **Cañón del Atuel** 时，游客可以轻松探索周边的历史地标与兴趣点，包括 **El Laberinto（迷宫石林）** 与 **Valle Grande 水库**。',
    landmarks: [
      { name: 'El Laberinto（迷宫石林）', desc: '风与水雕琢出的红色岩柱群，形态奇诡，宛如大自然的雕塑公园，适合徒步与摄影。' },
      { name: 'Valle Grande 水库', desc: '阿图埃尔河梯级水库之一，碧蓝湖水映衬赭红岩壁，可租船、垂钓与休闲。' },
      { name: 'El Nihuil 水库', desc: '峡谷下游的开阔水库，水面平静，是帆船、滑水与湖滨露营的热门目的地。' },
    ],
    locationIntro:
      '阿图埃尔峡谷沿 RP173 省道展开，位于圣拉斐尔以南约 40 公里处。下方地图标注了景点的精确坐标，可据此规划自驾或包车路线。',
    historyIntro:
      '从胡阿尔佩人眼中的“像箭一样的水”，到 20 世纪五座梯级水库的落成，阿图埃尔峡谷的历史既是地质史，也是门多萨水利与绿洲文明的历史。',
    breadcrumb: ['阿图埃尔峡谷', '圣拉斐尔', '门多萨省', '阿根廷'],
    sourcesTitle: '资料来源与权威链接',
    sourcesIntro:
      '本页面信息整理自以下官方与权威来源，用于进一步查证与规划行程。所有出站链接均指向政府（.gob.ar）或官方旅游机构网站。',
    officialLabel: '阿根廷 / 门多萨省官方旅游局',
    napTitle: '地点信息（名称 · 地址）',
    napName: '景点全称：Cañón del Atuel（阿图埃尔峡谷）',
    napAddress: '地址：RP173, San Rafael, Mendoza, Argentina（邮政编码 5600）',
    napPhone: '旅游咨询：圣拉斐尔市旅游局（Dirección de Turismo de San Rafael）',
    napHours: '开放时间：峡谷公路全天可通行；水上项目一般 09:00–18:00',
    imageCreditsTitle: '图片版权声明',
    imageCredits: '本网站所展示的所有图片产权及版权均归原摄影者所有。',
  },
  en: {
    breadcrumbLabel: 'Location hierarchy',
    aboutTitle: 'About Cañón del Atuel',
    welcome:
      'Welcome to **Cañón del Atuel**, widely recognized as the central **Atuel Canyon**. Located in the heart of **San Rafael**, **Mendoza**, **Argentina**, this destination serves as a primary hub for travelers visiting the region.',
    locationTitle: 'Location & How to Visit Atuel Canyon in San Rafael',
    landmarksTitle: 'Landmarks & Attractions Around Atuel Canyon',
    historyTitle: 'History & Significance of Cañón del Atuel',
    landmarksIntro:
      'When visiting **Cañón del Atuel**, visitors can easily explore surrounding historical landmarks and points of interest, including **El Laberinto (Rock Labyrinth)** and **Valle Grande Reservoir**.',
    landmarks: [
      { name: 'El Laberinto (Rock Labyrinth)', desc: 'Red rock pillars sculpted by wind and water — bizarre in shape like nature’s sculpture park, great for hiking and photos.' },
      { name: 'Valle Grande Reservoir', desc: 'One of the Atuel’s cascading reservoirs; turquoise water against ochre cliffs, with boat rental, fishing and leisure.' },
      { name: 'El Nihuil Reservoir', desc: 'A broad downstream reservoir with calm water — popular for sailing, water-skiing and lakeside camping.' },
    ],
    locationIntro:
      'Cañón del Atuel unfolds along the RP173 provincial road, about 40 km south of San Rafael. The map below marks the exact coordinates of the attraction, so you can plan a self-drive or private-transfer route.',
    historyIntro:
      'From the Huarpe vision of “water like an arrow” to the completion of five cascading reservoirs in the 20th century, the history of Cañón del Atuel is at once geological and the story of Mendoza’s hydraulic works and oasis civilisation.',
    breadcrumb: ['Cañón del Atuel', 'San Rafael', 'Mendoza', 'Argentina'],
    sourcesTitle: 'Sources & Official Links',
    sourcesIntro:
      'The information on this page is compiled from the following official and authoritative sources for further verification and trip planning. All outbound links point to government (.gob.ar) or official tourism bodies.',
    officialLabel: 'Argentina / Mendoza Province Official Tourism Portal',
    napTitle: 'Place Information (Name · Address)',
    napName: 'Official name: Cañón del Atuel (Atuel Canyon)',
    napAddress: 'Address: RP173, San Rafael, Mendoza, Argentina (postal code 5600)',
    napPhone: 'Visitor info: San Rafael Tourism Board (Dirección de Turismo de San Rafael)',
    napHours: 'Hours: canyon road open all day; water activities generally 09:00–18:00',
    imageCreditsTitle: 'Image Credits',
    imageCredits:
      'The ownership and copyright of all images displayed on this website belong to their original photographers.',
  },
  es: {
    breadcrumbLabel: 'Jerarquía de ubicación',
    aboutTitle: 'Sobre el Cañón del Atuel',
    welcome:
      'Bienvenido al **Cañón del Atuel**, reconocido ampliamente como el **Atuel Canyon** central. Ubicado en el corazón de **San Rafael**, **Mendoza**, **Argentina**, este destino es el punto de partida principal para los viajeros que visitan la región.',
    locationTitle: 'Ubicación y cómo visitar el Atuel Canyon en San Rafael',
    landmarksTitle: 'Atractivos y puntos de interés alrededor del Atuel Canyon',
    historyTitle: 'Historia y significado del Cañón del Atuel',
    landmarksIntro:
      'Al visitar el **Cañón del Atuel**, los viajeros pueden explorar fácilmente atractivos históricos y puntos de interés cercanos, como **El Laberinto** y el **embalse Valle Grande**.',
    landmarks: [
      { name: 'El Laberinto', desc: 'Columnas de roca roja esculpidas por el viento y el agua: un parque de esculturas naturales, ideal para caminatas y fotografía.' },
      { name: 'Embalse Valle Grande', desc: 'Uno de los embalses en cascata del Atuel; agua turquesa contra acantilados ocres, con alquiler de embarcaciones, pesca y recreación.' },
      { name: 'Embalse El Nihuil', desc: 'Un embalse amplio aguas abajo, de superficie calma: popular para vela, esquí acuático y camping junto al lago.' },
    ],
    locationIntro:
      'El Cañón del Atuel se despliega a lo largo de la RP173, a unos 40 km al sur de San Rafael. El mapa siguiente marca las coordenadas exactas del atractivo para planificar el viaje en auto o con traslado privado.',
    historyIntro:
      'Desde la visión huare de “agua como una flecha” hasta la construcción de cinco embalses en cascata en el siglo XX, la historia del Cañón del Atuel es a la vez geológica y la historia de la obra hidráulica y del oasis de Mendoza.',
    breadcrumb: ['Cañón del Atuel', 'San Rafael', 'Mendoza', 'Argentina'],
    sourcesTitle: 'Fuentes y enlaces oficiales',
    sourcesIntro:
      'La información de esta página se recopila de las siguientes fuentes oficiales y autorizadas para su verificación y planificación. Todos los enlaces externos apuntan a sitios de gobierno (.gob.ar) o de turismo oficial.',
    officialLabel: 'Portal Oficial de Turismo de Argentina / Provincia de Mendoza',
    napTitle: 'Información del lugar (Nombre · Dirección)',
    napName: 'Nombre oficial: Cañón del Atuel',
    napAddress: 'Dirección: RP173, San Rafael, Mendoza, Argentina (código postal 5600)',
    napPhone: 'Información: Dirección de Turismo de San Rafael',
    napHours: 'Horario: la ruta del cañón está abierta todo el día; actividades acuáticas 09:00–18:00',
    imageCreditsTitle: 'Créditos de imágenes',
    imageCredits:
      'La propiedad y los derechos de autor de todas las imágenes mostradas en este sitio pertenecen a sus fotógrafos originales.',
  },
  it: {
    breadcrumbLabel: 'Gerarchia di localizzazione',
    aboutTitle: 'Informazioni sul Cañón del Atuel',
    welcome:
      'Benvenuti al **Cañón del Atuel**, ampiamente riconosciuto come il centrale **Atuel Canyon**. Situato nel cuore di **San Rafael**, **Mendoza**, **Argentina**, questo luogo è il punto di riferimento principale per i viaggiatori della regione.',
    locationTitle: 'Posizione e come visitare l’Atuel Canyon a San Rafael',
    landmarksTitle: 'Attrazioni e punti d’interesse intorno all’Atuel Canyon',
    historyTitle: 'Storia e significato del Cañón del Atuel',
    landmarksIntro:
      'Visitando il **Cañón del Atuel**, i viaggiatori possono esplorare facilmente attrazioni storiche e punti d’interesse vicini, tra cui **El Laberinto** e l’**invaso Valle Grande**.',
    landmarks: [
      { name: 'El Laberinto', desc: 'Colonne di roccia rossa scolpite da vento e acqua: un parco di sculture naturali, ideale per escursioni e fotografia.' },
      { name: 'Invaso Valle Grande', desc: 'Uno degli invasi a cascata dell’Atuel; acqua turchese contro scogliere ocra, con noleggio barche, pesca e svago.' },
      { name: 'Invaso El Nihuil', desc: 'Un ampio invaso a valle con acque calme: popolare per vela, sci nautico e campeggio sul lago.' },
    ],
    locationIntro:
      'Il Cañón del Atuel si estende lungo la RP173, circa 40 km a sud di San Rafael. La mappa sottostante indica le coordinate esatte dell’attrazione per pianificare il viaggio in auto o con transfer privato.',
    historyIntro:
      'Dalla visione huarpe dell’“acqua come una freccia” alla costruzione di cinque invasi a cascata nel XX secolo, la storia del Cañón del Atuel è al tempo stesso geologica e la storia dell’opera idraulica e dell’oasi di Mendoza.',
    breadcrumb: ['Cañón del Atuel', 'San Rafael', 'Mendoza', 'Argentina'],
    sourcesTitle: 'Fonti e link ufficiali',
    sourcesIntro:
      'Le informazioni di questa pagina sono raccolte dalle seguenti fonti ufficiali e autorevoli per ulteriori verifiche e pianificazione. Tutti i link esterni puntano a siti governativi (.gob.ar) o di turismo ufficiale.',
    officialLabel: 'Portale Turistico Ufficiale dell’Argentina / Provincia di Mendoza',
    napTitle: 'Informazioni sul luogo (Nome · Indirizzo)',
    napName: 'Nome ufficiale: Cañón del Atuel',
    napAddress: 'Indirizzo: RP173, San Rafael, Mendoza, Argentina (codice postale 5600)',
    napPhone: 'Informazioni: Assessorato al Turismo di San Rafael',
    napHours: 'Orari: la strada del canyon è aperta tutto il giorno; attività acquatiche 09:00–18:00',
    imageCreditsTitle: 'Crediti fotografici',
    imageCredits:
      'La proprietà e il copyright di tutte le immagini mostrate in questo sito appartengono ai rispettivi fotografi originali.',
  },
};
