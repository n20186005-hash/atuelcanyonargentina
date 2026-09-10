import type { Locale } from './config';

// ─────────────────────────────────────────────────────────────
// 内容深度模块：周边景点 / 户外活动与游览团 / RP173 路线
//
// 立项依据（GSC）：
//  - `Lago Atuel`、`Volcón Overo` 曾出现在搜索词中，但站点此前完全没有覆盖；
//  - 首页缺少「Top Attractions」「Outdoor Activities & Tours」这两个
//    用户意图最强的 H2 板块，导致长尾词无落点。
//
// 事实口径：所有地名均取自本站在 FAQ 中已确认的公开信息
// （五座梯级水库、RP173、El Laberinto、El Nihuil）。
// 距离与开放情况一律使用「约 / 以现场公告为准」措辞，不做精确承诺。
// ─────────────────────────────────────────────────────────────

export interface AttractionItem {
  key: string;
  name: string;
  tag: string;
  desc: string;
  tip: string;
}

export interface ActivityItem {
  key: string;
  name: string;
  desc: string;
  meta: string;
}

export interface TourOption {
  name: string;
  desc: string;
  meta: string;
}

export interface RouteStop {
  name: string;
  dist: string;
  desc: string;
}

export interface AttractionsContent {
  attractionsTitle: string;
  attractionsIntro: string;
  attractions: AttractionItem[];
  activitiesTitle: string;
  activitiesIntro: string;
  activities: ActivityItem[];
  toursTitle: string;
  toursIntro: string;
  tours: TourOption[];
  routeTitle: string;
  routeIntro: string;
  routeStops: RouteStop[];
  routeNotesTitle: string;
  routeNotes: string[];
  /** 内部锚文本，用于子页面之间互相传递权重 */
  internalLinks: { tours: string; route: string; lake: string };
}

export const ATTRACTIONS: Record<Locale, AttractionsContent> = {
  zh: {
    attractionsTitle: '阿图埃尔峡谷必看景点',
    attractionsIntro:
      '峡谷本身只是舞台，真正构成行程的是沿 RP173 依次展开的湖面、岩林与火山地貌。以下六个地点按顺路顺序排列，可据此安排停靠优先级。',
    attractions: [
      {
        key: 'lago-atuel',
        name: 'Lago Atuel（阿图埃尔湖）',
        tag: '水上活动核心区',
        desc: '阿图埃尔河被 El Nihuil 大坝蓄水后形成的湖面，也是湖畔小聚落的名字。这里水色碧蓝、岸线开阔，是峡谷内漂流、皮划艇、快艇与湖滨戏水最集中的区域。',
        tip: '水上项目集中在上午至傍晚，建议先确认当天开船情况再决定行程顺序。',
      },
      {
        key: 'el-nihuil',
        name: 'Embalse El Nihuil（埃尔尼维尔水库）',
        tag: '峡谷下游终点',
        desc: '五座梯级水库中最下游、也最容易亲近的一座，水面平静开阔，常年适合帆船与风帆运动。湖畔的 El Nihuil 村有餐饮、露营与补给点，是峡谷行程的自然终点。',
        tip: '把这里安排在行程后半段，回程前在此补给与休整最省时间。',
      },
      {
        key: 'overo',
        name: 'Volcán Overo（奥韦罗火山）',
        tag: '火山地貌',
        desc: 'El Nihuil 附近的小型火山锥，是本区域少见的火山地貌景观。登临后可俯瞰水库与周围的火山岩台地，与峡谷的沉积岩壁形成强烈反差，是摄影者偏爱的取景点。',
        tip: '通往火山锥的多为土路岔道，路况随季节变化，建议使用高底盘车辆并事先向当地旅游机构确认通行情况。',
      },
      {
        key: 'laberinto',
        name: 'El Laberinto（迷宫石林）',
        tag: '徒步与摄影',
        desc: '风与水在岩层上雕出的红色岩柱群，形态奇诡、通道交错，因此得名「迷宫」。可以下车步行穿行其间，近距离观察岩壁的层理与侵蚀痕迹。',
        tip: '岩面松散、遮荫极少，请穿防滑鞋并避开正午强晒时段。',
      },
      {
        key: 'valle-grande',
        name: 'Embalse Valle Grande（大谷水库）',
        tag: '第一个观景台',
        desc: '从圣拉斐尔方向进入峡谷后遇到的第一座水库，碧蓝湖水与赭红岩壁在此正面相撞，是全程最具代表性的一幅画面，也是多数行程的第一个停靠点。',
        tip: '清晨与傍晚的侧光最能压出岩壁层次，摄影建议把这里排在光线最好的时段。',
      },
      {
        key: 'los-reyunos',
        name: 'Embalse Los Reyunos（洛斯雷尤诺斯水库）',
        tag: '侧线行程',
        desc: '阿图埃尔河梯级水库中靠近圣拉斐尔的一座，湖湾曲折、水色明亮，周边设有水上运动与休闲设施，适合作为半日的侧线安排。',
        tip: '与本线峡谷公路不同方向进入，需单独规划半天，不要与 RP173 主线混排在同一天。',
      },
    ],
    activitiesTitle: '户外活动与游览团',
    activitiesIntro:
      '峡谷的活动大致分为「水」与「陆」两类：水上项目集中在 Lago Atuel 与各水库，陆上项目则以 RP173 自驾、岩林徒步与火山观景为主。多数项目需提前预约。',
    activities: [
      {
        key: 'rafting',
        name: '阿图埃尔河漂流',
        desc: '峡谷内最具代表性的项目。河段难度随水库放水量变化，出发前由运营方评估并配发头盔与救生衣，通常包含接驳与教练。',
        meta: '约 2–4 小时 · 需预约 · 视水情开放',
      },
      {
        key: 'kayak',
        name: '皮划艇与桨板',
        desc: '在 Lago Atuel 与 El Nihuil 等水面较平静的湖段进行，适合想自己掌控节奏、又不想错过湖景的游客。',
        meta: '约 1–2 小时 · 适合初学者',
      },
      {
        key: 'boat',
        name: '湖上快艇与垂钓',
        desc: '水库区提供游船与垂钓服务，湖面开阔、风小的时候体验最佳，适合家庭与不想下水的游客。',
        meta: '约 1 小时 · 现场或预约',
      },
      {
        key: 'hiking',
        name: '岩林徒步与观景台',
        desc: '以 El Laberinto 与沿线观景台为主，步行强度不高，重点是近距离观察岩层层理与峡谷剖面。',
        meta: '1–3 小时 · 无需专业装备',
      },
      {
        key: 'offroad',
        name: '4x4 越野与火山线路',
        desc: '前往 Volcán Overo 及周边土路岔道的越野行程，由当地运营方带路，比自己摸索更稳妥。',
        meta: '半日 · 建议跟随向导',
      },
      {
        key: 'photo',
        name: '摄影与星空',
        desc: '峡谷属干旱气候、空气通透，清晨侧光适合拍岩壁层理，入夜后远离城镇光害，是拍摄星空的理想环境。',
        meta: '日出 / 日落 / 夜间',
      },
    ],
    toursTitle: '从圣拉斐尔出发的游览方式',
    toursIntro:
      '峡谷没有公共交通直达观景台，实际落地方式只有三种。旺季与节假日建议提前一天以上确认名额。',
    tours: [
      {
        name: '自驾或租车（最自由）',
        desc: '沿 RP173 自行安排停靠节奏，适合想控制时间、拍摄日出的游客。进山前请在圣拉斐尔加满油并下载离线地图。',
        meta: '约 40 公里 · 半天至一天',
      },
      {
        name: '当地一日游 / 半日游',
        desc: '由圣拉斐尔当地旅行社运营，含车辆、司机与主要观景台停靠，部分线路可加订漂流或游船。',
        meta: '半天或全天 · 建议提前预约',
      },
      {
        name: '包车与私人接送',
        desc: '适合家庭、小团体或携带摄影器材的游客，可自定义停靠点与停留时长，行程弹性最大。',
        meta: '按车计价 · 全天可选',
      },
    ],
    routeTitle: 'RP173 峡谷公路路线',
    routeIntro:
      'RP173 是贴着峡谷崖壁蜿蜒的省级景观公路，从圣拉斐尔一路向南贯穿峡谷，是串联所有景点的唯一主线。下列顺序即为最省时的顺路走法。',
    routeStops: [
      { name: '圣拉斐尔（出发点）', dist: '0 km', desc: '补给、加油、租车与旅游信息中心所在地，进山前的最后集结点。' },
      { name: '峡谷入口 / RP173 起点', dist: '约 25 km', desc: '景观公路由此开始，路况转为弯多坡陡，建议在此降低车速。' },
      { name: 'Embalse Valle Grande', dist: '约 40 km', desc: '第一座水库与主要观景台，碧蓝湖面与红色岩壁的经典构图。' },
      { name: 'El Laberinto 迷宫石林', dist: '约 45 km', desc: '下车徒步穿行红色岩柱群，是全程唯一的短程步行点。' },
      { name: 'Lago Atuel 湖岸段', dist: '约 55 km', desc: '水上活动最集中的湖段，漂流、皮划艇与游船多在此上下水。' },
      { name: 'El Nihuil 村', dist: '约 70 km', desc: '下游水库与村落，有餐饮、露营与补给，可作为行程终点。' },
      { name: 'Volcán Overo 岔路', dist: '约 80 km', desc: '由此转入土路前往火山锥，路况随季节变化，需确认通行情况。' },
    ],
    routeNotesTitle: '自驾注意事项',
    routeNotes: [
      'RP173 弯道密集且部分路段临崖，请控制车速、避免夜间行车。',
      '峡谷内手机信号不稳定，出发前请下载离线地图并告知同行人行程。',
      '加油站集中在圣拉斐尔市区，峡谷沿线几乎没有，进山前务必加满。',
      '雨季注意落石，大风天气临崖路段侧风明显，双手稳握方向盘。',
      '沿途观景台停车带容量有限，旺季上午容易停满，请勿在弯道或应急通道停车。',
    ],
    internalLinks: {
      tours: '圣拉斐尔出发的峡谷游览团',
      route: 'RP173 自驾路线完整攻略',
      lake: 'Lago Atuel 水上活动指南',
    },
  },

  en: {
    attractionsTitle: 'Top Attractions in Atuel Canyon',
    attractionsIntro:
      'The canyon itself is only the stage. What actually shapes a visit is the chain of lakes, rock formations and volcanic terrain unfolding along RP173. The six places below are listed in driving order so you can prioritise your stops.',
    attractions: [
      {
        key: 'lago-atuel',
        name: 'Lago Atuel',
        tag: 'Water activities hub',
        desc: 'The lake created where the Atuel river is held back by the El Nihuil dam — and the name of the small settlement on its shore. Turquoise water, wide banks and the highest concentration of rafting, kayaking, speedboat rides and swimming in the canyon.',
        tip: 'Water activities run from morning to late afternoon — confirm departures for the day before deciding your stop order.',
      },
      {
        key: 'el-nihuil',
        name: 'El Nihuil Reservoir (Embalse El Nihuil)',
        tag: 'Downstream end of the canyon',
        desc: 'The lowest and most accessible of the five cascading reservoirs, with calm open water used year-round for sailing and windsurfing. El Nihuil village on its shore has food, camping and supplies — a natural finish to the drive.',
        tip: 'Save it for the second half of your day so you can refuel and rest here before heading back.',
      },
      {
        key: 'overo',
        name: 'Volcán Overo',
        tag: 'Volcanic terrain',
        desc: 'A small volcanic cone near El Nihuil and one of the few volcanic landforms in the area. From the top you look out over the reservoir and the surrounding lava plateau — a striking contrast with the sedimentary canyon walls, and a favourite stop for photographers.',
        tip: 'The approach is mostly dirt side-road and conditions change with the season — use a high-clearance vehicle and confirm access with the local tourism office beforehand.',
      },
      {
        key: 'laberinto',
        name: 'El Laberinto (Rock Labyrinth)',
        tag: 'Hiking & photography',
        desc: 'Red rock pillars carved by wind and water into an interlocking maze of passages — hence the name. You can park and walk among them to see the bedding planes and erosion up close.',
        tip: 'The rock is loose and there is almost no shade — wear grippy shoes and avoid the midday sun.',
      },
      {
        key: 'valle-grande',
        name: 'Valle Grande Reservoir',
        tag: 'First viewpoint',
        desc: 'The first reservoir you reach on entering the canyon from San Rafael. Turquoise water meets ochre cliffs head-on here — the most iconic single view of the whole drive, and the first stop on most itineraries.',
        tip: 'Early-morning and late-afternoon side-light brings out the rock strata best — schedule this one for the best light you have.',
      },
      {
        key: 'los-reyunos',
        name: 'Los Reyunos Reservoir',
        tag: 'Side trip',
        desc: 'One of the Atuel’s cascading reservoirs closest to San Rafael, with winding bays, bright water and water-sports facilities around it — a good half-day side trip.',
        tip: 'It is reached from a different direction than the canyon road, so plan it as a separate half day rather than mixing it into an RP173 day.',
      },
    ],
    activitiesTitle: 'Outdoor Activities & Tours',
    activitiesIntro:
      'Things to do here split into water and land: water activities cluster around Lago Atuel and the reservoirs, while land activities mean driving RP173, hiking the rock formations and visiting the volcanic cone. Most activities need booking ahead.',
    activities: [
      {
        key: 'rafting',
        name: 'Atuel River rafting',
        desc: 'The signature activity of the canyon. Difficulty varies with how much water is released from the dams; operators assess conditions and provide helmets and life jackets, usually including transfers and a guide.',
        meta: '2–4 hrs · Booking required · Subject to water levels',
      },
      {
        key: 'kayak',
        name: 'Kayaking & paddleboarding',
        desc: 'Done on the calmer stretches such as Lago Atuel and El Nihuil — ideal if you want to set your own pace without missing the lake scenery.',
        meta: '1–2 hrs · Beginner friendly',
      },
      {
        key: 'boat',
        name: 'Boat rides & fishing',
        desc: 'The reservoir areas offer boat trips and fishing. Best on calm, low-wind days and a good option for families or anyone who would rather stay dry.',
        meta: '~1 hr · On site or booked',
      },
      {
        key: 'hiking',
        name: 'Rock labyrinth walks & viewpoints',
        desc: 'Mainly El Laberinto and the roadside viewpoints. Low intensity walking, focused on seeing the rock strata and the canyon cross-section up close.',
        meta: '1–3 hrs · No specialist gear',
      },
      {
        key: 'offroad',
        name: '4x4 & volcano routes',
        desc: 'Off-road trips out to Volcán Overo and the surrounding dirt tracks, led by local operators — far more reliable than working out the access yourself.',
        meta: 'Half day · Guide recommended',
      },
      {
        key: 'photo',
        name: 'Photography & stargazing',
        desc: 'The canyon has an arid, very clear atmosphere. Side-light at dawn is best for the rock strata, and once night falls you are far from town light pollution — excellent for astrophotography.',
        meta: 'Sunrise / sunset / night',
      },
    ],
    toursTitle: 'Ways to Visit from San Rafael',
    toursIntro:
      'There is no public transport that drops you at the viewpoints, so in practice there are three ways to do this. In peak season and on public holidays, confirm availability at least a day ahead.',
    tours: [
      {
        name: 'Self-drive or rental (most freedom)',
        desc: 'Set your own pace along RP173 — best if you want to control timing or shoot the sunrise. Fill the tank in San Rafael and download offline maps before you enter.',
        meta: '~40 km · Half day to full day',
      },
      {
        name: 'Local day tour / half-day tour',
        desc: 'Run by San Rafael agencies and including vehicle, driver and stops at the main viewpoints; some itineraries can add rafting or a boat ride.',
        meta: 'Half or full day · Book ahead',
      },
      {
        name: 'Private transfer & driver',
        desc: 'Best for families, small groups or anyone carrying camera gear. You choose the stops and the time spent at each — the most flexible option.',
        meta: 'Priced per vehicle · Full day available',
      },
    ],
    routeTitle: 'The RP173 Canyon Road',
    routeIntro:
      'RP173 is the provincial scenic road that hugs the canyon wall and runs south from San Rafael right through the canyon. It is the only spine connecting every attraction. The order below is the most efficient way to drive it.',
    routeStops: [
      { name: 'San Rafael (start)', dist: '0 km', desc: 'Where you stock up, refuel, rent a car and visit the tourist information centre — the last staging point before the canyon.' },
      { name: 'Canyon entrance / start of RP173', dist: '~25 km', desc: 'The scenic road begins here and turns into tight curves and gradients — a good place to slow down.' },
      { name: 'Valle Grande Reservoir', dist: '~40 km', desc: 'First reservoir and main viewpoint — the classic composition of turquoise water against red rock.' },
      { name: 'El Laberinto rock labyrinth', dist: '~45 km', desc: 'Park and walk among the red pillars; the only short walking stop on the whole drive.' },
      { name: 'Lago Atuel shoreline', dist: '~55 km', desc: 'The busiest stretch of water — most rafting, kayaking and boat trips launch and land here.' },
      { name: 'El Nihuil village', dist: '~70 km', desc: 'Downstream reservoir and village with food, camping and supplies — a natural end point.' },
      { name: 'Volcán Overo turn-off', dist: '~80 km', desc: 'Turn onto the dirt road here for the volcanic cone. Conditions change with the season — confirm access.' },
    ],
    routeNotesTitle: 'Driving notes',
    routeNotes: [
      'RP173 has dense curves and some cliff-edge sections — control your speed and avoid driving at night.',
      'Mobile signal is unreliable inside the canyon: download offline maps and tell someone your plan.',
      'Fuel stations are concentrated in San Rafael city and almost absent along the canyon — fill up before entering.',
      'Watch for rockfall in the rainy season; in strong wind the cliff-edge sections get noticeable crosswinds, so keep both hands on the wheel.',
      'Viewpoint parking bays are limited and fill up in the morning during peak season. Never park on curves or emergency lanes.',
    ],
    internalLinks: {
      tours: 'Atuel Canyon tours from San Rafael',
      route: 'full RP173 road trip guide',
      lake: 'Lago Atuel activities guide',
    },
  },

  es: {
    attractionsTitle: 'Qué ver en el Cañón del Atuel',
    attractionsIntro:
      'El cañón es solo el escenario: lo que realmente arma el viaje es la cadena de lagos, formaciones rocosas y terreno volcánico que aparece a lo largo de la RP173. Los seis lugares están ordenados según el recorrido, para que puedas priorizar las paradas.',
    attractions: [
      {
        key: 'lago-atuel',
        name: 'Lago Atuel',
        tag: 'Centro de actividades acuáticas',
        desc: 'El lago que se forma donde el río Atuel queda contenido por la presa de El Nihuil, y también el nombre del pequeño paraje en su orilla. Agua turquesa, costas amplias y la mayor concentración de rafting, kayak, lanchas y baño de todo el cañón.',
        tip: 'Las actividades acuáticas van de la mañana al atardecer: confirmá las salidas del día antes de decidir el orden de las paradas.',
      },
      {
        key: 'el-nihuil',
        name: 'Embalse El Nihuil',
        tag: 'Final del cañón aguas abajo',
        desc: 'El más bajo y accesible de los cinco embalses en cascata, con aguas calmas y amplias que se usan todo el año para vela y windsurf. El paraje El Nihuil en su orilla tiene gastronomía, camping y aprovisionamiento: el cierre natural del recorrido.',
        tip: 'Dejalo para la segunda mitad del día, así podés reaprovisionar y descansar antes de volver.',
      },
      {
        key: 'overo',
        name: 'Volcán Overo',
        tag: 'Terreno volcánico',
        desc: 'Un pequeño cono volcánico cerca de El Nihuil y una de las pocas formas volcánicas de la zona. Desde arriba se domina el embalse y la meseta de lava que lo rodea: un contraste fuerte con las paredes sedimentarias del cañón y una parada preferida por fotógrafos.',
        tip: 'El acceso es mayormente por camino de tierra y cambia según la temporada: usá vehículo alto y confirmá la transitabilidad con la oficina de turismo local antes de ir.',
      },
      {
        key: 'laberinto',
        name: 'El Laberinto',
        tag: 'Caminata y fotografía',
        desc: 'Columnas de roca roja talladas por el viento y el agua hasta formar un laberinto de pasajes entrelazados, de ahí el nombre. Se puede estacionar y caminar entre ellas para ver de cerca los estratos y la erosión.',
        tip: 'La roca es suelta y casi no hay sombra: llevá calzado con agarre y evitá el sol del mediodía.',
      },
      {
        key: 'valle-grande',
        name: 'Embalse Valle Grande',
        tag: 'Primer mirador',
        desc: 'El primer embalse que aparece al entrar al cañón desde San Rafael. Acá el agua turquesa choca de frente con los acantilados ocres: la imagen más representativa de todo el recorrido y la primera parada de casi todos los itinerarios.',
        tip: 'La luz lateral de la mañana y del atardecer es la que mejor marca los estratos: programá esta parada para el mejor momento de luz que tengas.',
      },
      {
        key: 'los-reyunos',
        name: 'Embalse Los Reyunos',
        tag: 'Escapada lateral',
        desc: 'Uno de los embalses en cascata del Atuel más cercano a San Rafael, con bahías sinuosas, agua luminosa y servicios náuticos alrededor: una buena salida de medio día.',
        tip: 'Se llega desde otro acceso distinto al de la ruta del cañón, así que planificalo como medio día aparte en vez de mezclarlo con el recorrido por la RP173.',
      },
    ],
    activitiesTitle: 'Actividades al aire libre y excursiones',
    activitiesIntro:
      'Las actividades se dividen en agua y tierra: lo acuático se concentra en el Lago Atuel y los embalses, y lo terrestre pasa por manejar la RP173, caminar las formaciones rocosas y visitar el cono volcánico. La mayoría requiere reserva previa.',
    activities: [
      {
        key: 'rafting',
        name: 'Rafting en el río Atuel',
        desc: 'La actividad insignia del cañón. La dificultad varía según el agua que liberen las presas; los operadores evalúan las condiciones y entregan casco y chaleco, normalmente con traslado y guía incluidos.',
        meta: '2–4 h · Requiere reserva · Sujeto al caudal',
      },
      {
        key: 'kayak',
        name: 'Kayak y stand up paddle',
        desc: 'Se practica en los tramos más calmos, como el Lago Atuel y El Nihuil: ideal si querés marcar tu propio ritmo sin perder el paisaje de los lagos.',
        meta: '1–2 h · Apto principiantes',
      },
      {
        key: 'boat',
        name: 'Paseos en lancha y pesca',
        desc: 'Las áreas de embalse ofrecen paseos en lancha y pesca. Mejor en días calmos y con poco viento, y buena opción para familias o para quien prefiera no mojarse.',
        meta: '~1 h · En el lugar o reservado',
      },
      {
        key: 'hiking',
        name: 'Caminatas por El Laberinto y miradores',
        desc: 'Principalmente El Laberinto y los miradores de la ruta. Caminata de baja intensidad, enfocada en ver de cerca los estratos y el corte del cañón.',
        meta: '1–3 h · Sin equipo especial',
      },
      {
        key: 'offroad',
        name: '4x4 y circuitos al volcán',
        desc: 'Salidas off-road al Volcán Overo y a los caminos de tierra de la zona, guiadas por operadores locales: mucho más confiable que resolver el acceso por tu cuenta.',
        meta: 'Medio día · Guía recomendado',
      },
      {
        key: 'photo',
        name: 'Fotografía y cielo nocturno',
        desc: 'El cañón tiene clima árido y atmósfera muy transparente. La luz rasante del amanecer es la mejor para los estratos, y de noche estás lejos de la contaminación lumínica de la ciudad: excelente para astrofotografía.',
        meta: 'Amanecer / atardecer / noche',
      },
    ],
    toursTitle: 'Cómo visitarlo desde San Rafael',
    toursIntro:
      'No hay transporte público que te deje en los miradores, así que en la práctica hay tres formas de hacerlo. En temporada alta y feriados, confirmá disponibilidad con al menos un día de anticipación.',
    tours: [
      {
        name: 'Auto propio o alquiler (mayor libertad)',
        desc: 'Marcás tu propio ritmo por la RP173: lo mejor si querés controlar los tiempos o fotografiar el amanecer. Llená el tanque en San Rafael y descargá mapas offline antes de entrar.',
        meta: '~40 km · Medio día a día completo',
      },
      {
        name: 'Excursión local de día completo o medio día',
        desc: 'Operadas por agencias de San Rafael, incluyen vehículo, chofer y paradas en los miradores principales; algunos itinerarios permiten sumar rafting o paseo en lancha.',
        meta: 'Medio o día completo · Reservar antes',
      },
      {
        name: 'Traslado privado con chofer',
        desc: 'Lo mejor para familias, grupos chicos o quien viaja con equipo fotográfico. Vos elegís las paradas y el tiempo en cada una: la opción más flexible.',
        meta: 'Por vehículo · Día completo disponible',
      },
    ],
    routeTitle: 'La ruta RP173 del cañón',
    routeIntro:
      'La RP173 es la ruta escénica provincial que va pegada a la pared del cañón y baja desde San Rafael atravesándolo de norte a sur. Es el único eje que conecta todos los atractivos. El orden de abajo es la forma más eficiente de recorrerla.',
    routeStops: [
      { name: 'San Rafael (inicio)', dist: '0 km', desc: 'Donde se compra lo necesario, se carga combustible, se alquila auto y está la oficina de informes: el último punto de organización antes del cañón.' },
      { name: 'Entrada al cañón / inicio de RP173', dist: '~25 km', desc: 'Acá empieza la ruta escénica y el camino se vuelve de curvas cerradas y pendientes: buen lugar para bajar la velocidad.' },
      { name: 'Embalse Valle Grande', dist: '~40 km', desc: 'Primer embalse y mirador principal: la composición clásica de agua turquesa contra roca roja.' },
      { name: 'El Laberinto', dist: '~45 km', desc: 'Estacioná y caminá entre las columnas rojas: la única parada de caminata corta de todo el recorrido.' },
      { name: 'Costa del Lago Atuel', dist: '~55 km', desc: 'El tramo de agua más concurrido: acá salen y llegan la mayoría de los rafting, kayak y paseos en lancha.' },
      { name: 'Paraje El Nihuil', dist: '~70 km', desc: 'Embalse y pueblo aguas abajo, con gastronomía, camping y aprovisionamiento: un final natural.' },
      { name: 'Desvío al Volcán Overo', dist: '~80 km', desc: 'Desde acá se toma el camino de tierra hacia el cono volcánico. Cambia según la temporada: confirmá la transitabilidad.' },
    ],
    routeNotesTitle: 'Notas para manejar',
    routeNotes: [
      'La RP173 tiene curvas muy seguidas y algunos tramos al borde del acantilado: controlá la velocidad y evitá manejar de noche.',
      'La señal de celular es inestable dentro del cañón: descargá mapas offline y avisale a alguien tu plan.',
      'Las estaciones de servicio se concentran en la ciudad de San Rafael y casi no hay sobre el cañón: cargá combustible antes de entrar.',
      'Atención a los derrumbes en temporada de lluvias; con viento fuerte los tramos al borde reciben viento lateral, sostené el volante con ambas manos.',
      'Las banquinas de los miradores son limitadas y en temporada alta se llenan por la mañana. Nunca estaciones en curvas ni en banquinas de emergencia.',
    ],
    internalLinks: {
      tours: 'excursiones al Cañón del Atuel desde San Rafael',
      route: 'guía completa del viaje por la RP173',
      lake: 'guía de actividades en el Lago Atuel',
    },
  },

  it: {
    attractionsTitle: 'Cosa vedere nel Cañón del Atuel',
    attractionsIntro:
      'Il canyon è solo la scena: ciò che costruisce davvero la visita è la catena di laghi, formazioni rocciose e terreno vulcanico che si susseguono lungo la RP173. I sei luoghi sono in ordine di percorrenza, così puoi decidere le priorità.',
    attractions: [
      {
        key: 'lago-atuel',
        name: 'Lago Atuel',
        tag: 'Base delle attività acquatiche',
        desc: 'Il lago che si forma dove il fiume Atuel è trattenuto dalla diga di El Nihuil, e anche il nome del piccolo abitato sulla riva. Acqua turchese, sponde ampie e la maggiore concentrazione di rafting, kayak, motoscafi e balneazione di tutto il canyon.',
        tip: 'Le attività acquatiche vanno dal mattino al tardo pomeriggio: verifica le partenze del giorno prima di decidere l’ordine delle tappe.',
      },
      {
        key: 'el-nihuil',
        name: 'Invaso El Nihuil',
        tag: 'Fine del canyon a valle',
        desc: 'Il più basso e accessibile dei cinque invasi a cascata, con acque calme e ampie usate tutto l’anno per vela e windsurf. L’abitato di El Nihuil sulla riva offre ristorazione, campeggio e rifornimenti: la chiusura naturale del percorso.',
        tip: 'Lascialo per la seconda metà della giornata, così puoi rifornirti e riposare prima di rientrare.',
      },
      {
        key: 'overo',
        name: 'Volcán Overo',
        tag: 'Terreno vulcanico',
        desc: 'Un piccolo cono vulcanico vicino a El Nihuil e una delle poche forme vulcaniche della zona. Dall’alto si dominano l’invaso e l’altopiano lavico circostante: un contrasto netto con le pareti sedimentarie del canyon e una tappa preferita dai fotografi.',
        tip: 'L’accesso è in gran parte su sterrato e cambia con la stagione: usa un veicolo alto e verifica la percorribilità con l’ufficio turistico locale prima di andare.',
      },
      {
        key: 'laberinto',
        name: 'El Laberinto',
        tag: 'Escursioni e fotografia',
        desc: 'Colonne di roccia rossa scolpite da vento e acqua fino a formare un labirinto di passaggi intrecciati, da cui il nome. Si parcheggia e si cammina in mezzo per osservare da vicino gli strati e l’erosione.',
        tip: 'La roccia è friabile e non c’è quasi ombra: porta scarpe con grip ed evita il sole di mezzogiorno.',
      },
      {
        key: 'valle-grande',
        name: 'Invaso Valle Grande',
        tag: 'Primo mirador',
        desc: 'Il primo invaso che si incontra entrando nel canyon da San Rafael. Qui l’acqua turchese incontra frontalmente le scogliere ocra: l’immagine più rappresentativa di tutto il percorso e la prima tappa di quasi tutti gli itinerari.',
        tip: 'La luce radente del mattino e del tramonto esalta meglio gli strati: programma questa tappa nel momento di luce migliore.',
      },
      {
        key: 'los-reyunos',
        name: 'Invaso Los Reyunos',
        tag: 'Escursione laterale',
        desc: 'Uno degli invasi a cascata dell’Atuel più vicini a San Rafael, con insenature sinuose, acqua luminosa e servizi nautici intorno: una buona uscita di mezza giornata.',
        tip: 'Si raggiunge da un accesso diverso da quello della strada del canyon: pianificalo come mezza giornata a sé, non insieme al percorso sulla RP173.',
      },
    ],
    activitiesTitle: 'Attività all’aperto ed escursioni',
    activitiesIntro:
      'Le attività si dividono tra acqua e terra: quelle acquatiche si concentrano sul Lago Atuel e sugli invasi, quelle terrestri significano guidare la RP173, camminare tra le formazioni rocciose e visitare il cono vulcanico. La maggior parte richiede prenotazione.',
    activities: [
      {
        key: 'rafting',
        name: 'Rafting sul fiume Atuel',
        desc: 'L’attività simbolo del canyon. La difficoltà varia con l’acqua rilasciata dalle dighe; gli operatori valutano le condizioni e forniscono casco e giubbotto, di norma con transfer e guida inclusi.',
        meta: '2–4 h · Prenotazione obbligatoria · Dipende dalla portata',
      },
      {
        key: 'kayak',
        name: 'Kayak e stand up paddle',
        desc: 'Si pratica nei tratti più calmi come il Lago Atuel e El Nihuil: ideale se vuoi gestire il tuo ritmo senza perdere il paesaggio dei laghi.',
        meta: '1–2 h · Adatto ai principianti',
      },
      {
        key: 'boat',
        name: 'Gite in barca e pesca',
        desc: 'Le aree degli invasi offrono gite in barca e pesca. Meglio nelle giornate calme e con poco vento, e buona opzione per famiglie o per chi preferisce non bagnarsi.',
        meta: '~1 h · Sul posto o su prenotazione',
      },
      {
        key: 'hiking',
        name: 'Passeggiate a El Laberinto e ai miradores',
        desc: 'Soprattutto El Laberinto e i miradores lungo la strada. Camminata di bassa intensità, per vedere da vicino gli strati e la sezione del canyon.',
        meta: '1–3 h · Nessuna attrezzatura speciale',
      },
      {
        key: 'offroad',
        name: '4x4 e itinerari al vulcano',
        desc: 'Uscite off-road verso il Volcán Overo e gli sterrati della zona, guidate da operatori locali: molto più affidabile che risolvere l’accesso da soli.',
        meta: 'Mezza giornata · Guida consigliata',
      },
      {
        key: 'photo',
        name: 'Fotografia e cielo notturno',
        desc: 'Il canyon ha clima arido e atmosfera molto trasparente. La luce radente dell’alba è la migliore per gli strati, e di notte sei lontano dall’inquinamento luminoso della città: ottimo per l’astrofotografia.',
        meta: 'Alba / tramonto / notte',
      },
    ],
    toursTitle: 'Come visitarlo da San Rafael',
    toursIntro:
      'Non esiste un mezzo pubblico che ti lasci ai miradores, quindi in pratica ci sono tre modi. In alta stagione e nei giorni festivi verifica la disponibilità almeno un giorno prima.',
    tours: [
      {
        name: 'Auto propria o a noleggio (massima libertà)',
        desc: 'Decidi tu il ritmo lungo la RP173: la scelta migliore se vuoi controllare i tempi o fotografare l’alba. Fai il pieno a San Rafael e scarica le mappe offline prima di entrare.',
        meta: '~40 km · Mezza giornata o giornata intera',
      },
      {
        name: 'Escursione locale di mezza o intera giornata',
        desc: 'Organizzate dalle agenzie di San Rafael, includono veicolo, autista e soste ai miradores principali; alcuni itinerari permettono di aggiungere rafting o giro in barca.',
        meta: 'Mezza o intera giornata · Prenota prima',
      },
      {
        name: 'Transfer privato con autista',
        desc: 'La soluzione migliore per famiglie, piccoli gruppi o chi viaggia con attrezzatura fotografica. Scegli tu le soste e il tempo in ciascuna: l’opzione più flessibile.',
        meta: 'A veicolo · Giornata intera disponibile',
      },
    ],
    routeTitle: 'La strada RP173 del canyon',
    routeIntro:
      'La RP173 è la strada panoramica provinciale che corre a ridosso della parete del canyon e scende da San Rafael attraversandolo da nord a sud. È l’unico asse che collega tutte le attrazioni. L’ordine sotto è il modo più efficiente di percorrerla.',
    routeStops: [
      { name: 'San Rafael (partenza)', dist: '0 km', desc: 'Dove si fanno provviste, rifornimento, noleggio auto e si trova l’ufficio informazioni: l’ultimo punto di organizzazione prima del canyon.' },
      { name: 'Ingresso del canyon / inizio RP173', dist: '~25 km', desc: 'Qui inizia la strada panoramica e il tracciato diventa di curve strette e pendenze: buon punto per rallentare.' },
      { name: 'Invaso Valle Grande', dist: '~40 km', desc: 'Primo invaso e mirador principale: la composizione classica di acqua turchese contro roccia rossa.' },
      { name: 'El Laberinto', dist: '~45 km', desc: 'Parcheggia e cammina tra le colonne rosse: l’unica sosta a piedi breve di tutto il percorso.' },
      { name: 'Riva del Lago Atuel', dist: '~55 km', desc: 'Il tratto d’acqua più frequentato: qui partono e rientrano la maggior parte di rafting, kayak e gite in barca.' },
      { name: 'Abitato di El Nihuil', dist: '~70 km', desc: 'Invaso e villaggio a valle, con ristorazione, campeggio e rifornimenti: un finale naturale.' },
      { name: 'Bivio per il Volcán Overo', dist: '~80 km', desc: 'Da qui si prende lo sterrato verso il cono vulcanico. Cambia con la stagione: verifica la percorribilità.' },
    ],
    routeNotesTitle: 'Note di guida',
    routeNotes: [
      'La RP173 ha curve molto ravvicinate e alcuni tratti a picco: controlla la velocità ed evita di guidare di notte.',
      'Il segnale cellulare è instabile dentro il canyon: scarica mappe offline e avvisa qualcuno del tuo programma.',
      'I distributori sono concentrati nella città di San Rafael e quasi assenti lungo il canyon: fai il pieno prima di entrare.',
      'Attenzione alle cadute massi nella stagione delle piogge; con vento forte i tratti a picco ricevono vento laterale, tieni entrambe le mani sul volante.',
      'Le piazzole dei miradores sono limitate e in alta stagione si riempiono al mattino. Non sostare mai su curve o corsie di emergenza.',
    ],
    internalLinks: {
      tours: 'escursioni al Cañón del Atuel da San Rafael',
      route: 'guida completa al viaggio sulla RP173',
      lake: 'guida alle attività sul Lago Atuel',
    },
  },
};
