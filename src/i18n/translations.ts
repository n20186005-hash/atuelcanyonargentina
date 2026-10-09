export type Locale = `zh` | `en` | `es` | `it`;
export type LinkItem = { name: string; url: string };
export type FAQItem = { question: string; answer: string };
export type TransportOption = { name: string; time: string; price: string; steps: string[] };

export type Translations = {
  nav: { history: string; architecture: string; monuments: string; eco: string; visiting: string; transportation: string; gallery: string; reviews: string; faq: string; location: string };
  hero: { tags: string[]; tagline: string; title: string; subtitle: string; cta: string; description: { address: string; phone: string; category: string } };
  rating: { reviews: string; source: string };
  history: { title: string; intro: string };
  myths: { title: string; intro: string; items: { title: string; content: string }[] };
  curiosities: { title: string; content: string };
  eco: { title: string; intro: string; items: string[] };
  architecture: { title: string; intro: string; specs: { structure: { title: string; content: string }; design: { title: string; content: string }; optics: { title: string; content: string } }; plaque: { title: string; items: { label: string; value: string }[] } };
  monuments: { title: string; intro: string; items: { name: string; description: string }[] };
  contrast: { title: string; intro: string; before: string; after: string };
  visiting: { title: string; intro: string; hours: { title: string; content: string; note: string }; price: { title: string; content: string; note: string }; duration: { title: string; content: string; note: string }; tips: { title: string; items: string[] }; essentials: { icon: string; title: string; text: string }[] };
  transportation: { title: string; airport: { title: string; content: string; options: TransportOption[] }; publicTransport?: { title: string; content: string; options: { name: string; description: string; steps: string[] }[] }; city: { title: string; content: string; steps: string[] }; tips: { title: string; items: string[] } };
  gallery: { title: string; viewMore: string; categories: { key: string; label: string }[] };
  reviews: { title: string; subtitle: string; viewMore: string; nearbyTitle: string; nearbyIntro: string; nearbyItems: { name: string; description: string }[] };
  faq: { title: string; subtitle: string; items: FAQItem[] };
  location: { title: string; address: string; openMaps: string };
  siteMap: { title: string; intro: string; hint: string; cta: string; zones: { key: string; name: string; desc: string }[] };
  itinerary: { title: string; intro: string; steps: { time: string; title: string; text: string }[] };
  ctaBand: { title: string; subtitle: string; buttons: string[] };
  footer: { callToAction: string; text: string; made: string; linksTitle: string; links: LinkItem[] };
};

const LINK_DEFS: { url: string; names: Record<Locale, string> }[] = [
  {
    url: `https://sanrafaelturismo.gov.ar/`,
    names: {
      zh: `圣拉斐尔市官方旅游局 (Dirección de Turismo de San Rafael)`,
      en: `San Rafael Tourism Board (Dirección de Turismo de San Rafael)`,
      es: `Dirección de Turismo de San Rafael`,
      it: `Assessorato al Turismo di San Rafael`,
    },
  },
  {
    url: `https://mendoza.tur.ar/`,
    names: {
      zh: `门多萨省官方旅游局 (Turismo Mendoza)`,
      en: `Turismo Mendoza — Mendoza Province Tourism`,
      es: `Turismo Mendoza — Provincia de Mendoza`,
      it: `Turismo Mendoza — Turismo della Provincia di Mendoza`,
    },
  },
  {
    url: `https://www.argentina.travel/`,
    names: {
      zh: `阿根廷国家旅游局 (Argentina.travel)`,
      en: `Argentina.travel — National Tourism Portal`,
      es: `Argentina.travel — Turismo de Argentina`,
      it: `Argentina.travel — Turismo dell'Argentina`,
    },
  },
  {
    url: `https://www.mendoza.gov.ar/`,
    names: {
      zh: `门多萨省政府官网 (Gobierno de Mendoza)`,
      en: `Government of Mendoza (Gobierno de Mendoza)`,
      es: `Gobierno de Mendoza`,
      it: `Governo di Mendoza`,
    },
  },
];

const LINKS_BY_LOCALE: Record<Locale, LinkItem[]> = {
  zh: LINK_DEFS.map((d) => ({ name: d.names.zh, url: d.url })),
  en: LINK_DEFS.map((d) => ({ name: d.names.en, url: d.url })),
  es: LINK_DEFS.map((d) => ({ name: d.names.es, url: d.url })),
  it: LINK_DEFS.map((d) => ({ name: d.names.it, url: d.url })),
};

export const translations: Record<Locale, Translations> = {
  zh: {
    nav: { history: `峡谷概览`, architecture: `地质与水利`, monuments: `体验活动`, eco: `生态保护`, visiting: `参观信息`, transportation: `交通指南`, gallery: `照片集锦`, reviews: `游客评价`, faq: `常见问题`, location: `地图位置` },
    hero: {
      tags: [`门多萨省自然奇观`, `阿图埃尔水库群`, `RP173 峡谷自驾公路`],
      tagline: `阿根廷 · 门多萨省 · 圣拉斐尔`,
      title: `Cañón del Atuel`,
      subtitle: `阿图埃尔峡谷 · 水利峡谷 · 安第斯前山`,
      cta: `探索这座峡谷`,
      description: {
        address: `RP173, Cañón del Atuel, San Rafael, Mendoza, 阿根廷`,
        phone: `旅游咨询：圣拉斐尔市旅游局`,
        category: `自然奇观 · 峡谷与水库`
      }
    },
    rating: { reviews: `条评价`, source: `Google 评论`, verified: `核实于 2026 年 10 月 · 汇总自 Google Maps 评分` },
    history: {
      title: `安第斯前山的裂痕`,
      intro: `Cañón del Atuel（阿图埃尔峡谷）是阿根廷门多萨省最令人惊叹的自然与工程景观之一，位于圣拉斐尔（San Rafael）以南、安第斯山脉前山（Precordillera）之中。阿图埃尔河（Río Atuel）自安第斯雪峰奔涌而下，在干旱的红色岩层中切出一道深邃峡谷，并被一系列水库拦截，形成碧蓝湖水与赭红峭壁交相辉映的奇景。

峡谷的诞生
阿图埃尔河发源于门多萨省西南的安第斯山脉，全长约 185 公里。数百万年来，河流沿着地质断裂持续下切，将古老的沉积岩与火山岩切割成深邃的峡谷地貌。峡谷最窄处仅容一线天光，岩壁呈现从赭红、橙黄到灰白的层叠色彩。

水的驯服：阿图埃尔水库的传奇
20 世纪中叶起，门多萨省为开发水电与灌溉，沿阿图埃尔河梯级修建了四座水库（embalses）：Valle Grande、Tierras Blancas、Aisol 与 El Nihuil。（常一并被提及的 Agua del Toro 与 Los Reyunos 属另一水系 Río Diamante。）河流被一节节截断，在荒芜的峡谷中孕育出碧蓝相连的湖泊，使这里成为阿根廷最重要的人工水利景观之一，也为圣拉斐尔绿洲提供了电力与生命之水。

门多萨的"水银行"
今天，阿图埃尔河流域贡献了门多萨省相当一部分的水电与灌溉用水。水库群不仅是能源与农业的命脉，也缔造了漂流、滑索、湖滨休闲等独特的旅游形态——自然之力与人类工程在此达成了罕见的共生。`
    },
    myths: {
      title: `地名由来与人文传说`,
      intro: `阿图埃尔（Atuel）这个名字源自当地原住民胡阿尔佩（Huarpe / Allentiac）语言，意指像箭一样奔流而下的水。在峡谷与水库之间，流传着属于这片土地的故事。`,
      items: [
        {
          title: `Atuel：像箭一样的水`,
          content: `胡阿尔佩人是门多萨地区最古老的居民之一，他们沿河流与湖泊生息，用简洁而诗意的名字描述自然。在胡阿尔佩语中，Atuel被解读为如箭般激射而出的河水——恰如其分地描绘了阿图埃尔河在峡谷中湍急穿行的姿态。今天的圣拉斐尔绿洲，正是在这条河哺育下繁盛起来的。

尽管胡阿尔佩文化在殖民时期遭受重创，但他们的地名与对水的敬畏仍沉淀在门多萨的地理记忆里。在水库边漫步时，不妨想一想：脚下这片 turquoise 湖水，曾是原住民眼中神圣的奔流。`
        },
        {
          title: `水库的建造者之歌`,
          content: `与许多自然奇观不同，阿图埃尔峡谷的现代传说属于人。20 世纪 40 年代起，门多萨的工程师与工人沿河筑坝，把狂野的阿图埃尔河改造成一连串温润的湖泊。老一辈圣拉斐尔人仍记得，水库落成时，荒芜的峡谷第一次映出碧蓝倒影，绿洲的灯光也因水电而亮起。

这段驯水的历史，让阿图埃尔峡谷成为人类改造自然、又与自然共处的生动课堂——它提醒每一位来访者：这里的美景，一半来自大地，一半来自人的双手。`
        },
        {
          title: `峡谷中的守护精灵（民间故事）`,
          content: `在门多萨乡间的口头传统里，峡谷与水库并非全然沉默。有故事说，每当风掠过水库水面、岩壁间回荡低鸣，那是水的精灵在提醒人们尊重这条生命之河；也有老人告诫，大雨后切勿贸然进入峡谷激流，因为暴涨的河水拥有不可忽视的力量。

这些朴素的故事，与胡阿尔佩人对水的敬畏一脉相承，共同构成阿图埃尔峡谷柔和却清晰的人文底色。`
        }
      ]
    },
    curiosities: {
      title: `自然与工程趣闻`,
      content: `四湖连珠
沿阿图埃尔河自上而下，四座水库如珍珠般串联：Valle Grande、Tierras Blancas、Aisol 与 El Nihuil。从空中俯瞰，碧蓝湖水在赭红峡谷中蜿蜒，是门多萨最震撼的水利画卷。（Río Diamante 水系的 Agua del Toro 与 Los Reyunos 位于邻近的另一山谷。）

El Laberinto（迷宫石林）
在 Valle Grande 水库一带，风与水的侵蚀雕琢出一片奇诡的红色岩柱群，被形象地称为迷宫。穿行其间，宛如走进大自然的雕塑公园。

RP173：悬崖上的观光公路
连接圣拉斐尔与峡谷的 RP173 省道，是一条贴着峡谷崖壁蜿蜒的景观公路。一侧是深谷，一侧是峭壁，沿途设有多个观景台（miradores），被誉为门多萨最惊险也最美丽的自驾路线之一。

安第斯秃鹰的领空
峡谷上空的上升气流是安第斯神鹰（cóndor）的天然滑翔场。运气好的午后，常能看到这种翼展近三米的巨鸟静静盘旋。`
    },
    eco: {
      title: `生态保护（Conservación）`,
      intro: `阿图埃尔峡谷既是自然遗产，也是支撑门多萨用水与用电的敏感生态系统。作为独立的非盈利科普指南，我们倡导以最负责任的方式探访这片土地。`,
      items: [
        `沿路不越界：请行驶在指定道路与观景台，避免碾压脆弱的荒漠植被`,
        `无痕探访：带走所有垃圾，包括果皮、纸巾等可降解物`,
        `保护水源：水库是饮用水与灌溉水源，请勿向湖中丢弃任何物品或洗涤`,
        `尊重野生动植物：请勿喂食或惊扰神鹰、羊驼等野生动物`,
        `安全用水：峡谷激流在雨后暴涨，务必远离涨水河段`,
        `支持本地：优先选择本地向导与社区经营的旅游项目`
      ]
    },
    architecture: {
      title: `地质构造与水利工程`,
      intro: `阿图埃尔峡谷是自然之力与工程智慧的双重杰作。其独特的地貌不仅具有极高的观赏与科研价值，也见证了人类如何利用安第斯的水资源。`,
      specs: {
        structure: { title: `峡谷成因`, content: `阿图埃尔河沿着安第斯前山的地质断裂持续下切，形成典型的深切峡谷（garganta）。峡谷全长数十公里，岩壁高耸，最窄处几乎不容两车并行。河床在雨季暴涨、旱季细流，亿万年不变的切割塑造出今日深邃的裂缝。

峡谷岩层以古老的沉积岩与火山岩为主，记录了安第斯造山运动的漫长历史。河流的侵蚀力在岩性较软的层位尤其显著，造就了阶梯状的崖壁与壶穴。` },
        design: { title: `岩层与色彩`, content: `峡谷两侧的岩壁如同打开的地质教科书：赭红、橙黄、灰白相间，源自不同地质时期的矿物沉积——富含氧化铁呈红色，碳酸钙呈浅色条带。

在清晨与黄昏的低角度阳光下，岩壁色彩最为浓烈，与 turquoise 湖水形成强烈对比，是摄影师钟爱的题材。` },
        optics: { title: `水文与水库`, content: `阿图埃尔河年均径流有限且季节波动大。为调节水流、发电与灌溉，门多萨沿阿图埃尔河修建了四座梯级水库，把丰水期的河水储蓄起来，既防洪又供能。

水库群使原本狂野的河流变得温润可控，也创造了独特的水利峡谷景观：裸岩与碧水相邻，荒原与绿洲共生。` }
      },
      plaque: {
        title: `基本信息`,
        items: [
          { label: `名称`, value: `Cañón del Atuel（阿图埃尔峡谷）` },
          { label: `位置`, value: `圣拉斐尔以南，门多萨省，阿根廷` },
          { label: `河流`, value: `Río Atuel（全长约 185 km）` },
          { label: `水库群`, value: `4 座梯级水库（Valle Grande–El Nihuil）` },
          { label: `类型`, value: `深切峡谷 / 水利景观 / 户外运动天堂` },
          { label: `门户城镇`, value: `San Rafael（圣拉斐尔）` }
        ]
      }
    },
    monuments: {
      title: `在阿图埃尔峡谷可以体验什么`,
      intro: `阿图埃尔峡谷将峡谷观光、水上运动与安第斯前山风光融为一体。以下体验深受探险者、摄影师与家庭游客的喜爱。`,
      items: [
        { name: `白浪漂流与皮划艇`, description: `阿图埃尔河是门多萨最著名的漂流河段之一。从圣拉斐尔出发的漂流行程穿越激流与平静河段，沿途峡谷峭壁高耸，是肾上腺素与风景的双重盛宴。皮划艇爱好者也可在较平缓的水库段享受湖光山色。` },
        { name: `滑索与高空探险`, description: `在峡谷一带设有 canopy（滑索）与高空绳索项目，让游客以鸟瞰的视角掠过赭红岩壁与碧蓝湖水。这是亲子与团队活动的人气之选，安全装备由专业机构提供。` },
        { name: `RP173 自驾与观景台`, description: `沿 RP173 省道自驾是体验阿图埃尔峡谷的经典方式。公路贴着峡谷崖壁蜿蜒，沿途设有多个 miradores（观景台），可停车俯瞰水库与迷宫石林，是摄影与夕阳爱好者的天堂。` },
        { name: `徒步、骑行与摄影`, description: `峡谷周边有多条徒步与山地自行车线路，难度从休闲到挑战不等。无论是拍摄红色岩壁的纹理、等待神鹰滑翔，还是清晨在水库边静候雾气散去，这里都能满足慢旅行的期待。` }
      ]
    },
    contrast: {
      title: `裸岩与碧水：峡谷的两副面孔`,
      intro: `阿图埃尔峡谷最动人的，是自然之硬与工程之柔的对照。一侧是亿万年切割出的赭红裸岩，一侧是拦河而成、温润如玉的 turquoise 水库。两幅画面，道尽这片土地的双重性格。`,
      before: `裸岩峡谷`,
      after: `碧蓝水库`
    },
    visiting: {
      title: `实用参观指南`,
      intro: `阿图埃尔峡谷全年适宜探访，建议安排半日沿 RP173 观光，或留出一日结合水库与圣拉斐尔。以下信息可帮助您从容规划。`,
      hours: { title: `开放时间`, content: `峡谷观光公路（RP173）全天可通行；水库与户外活动（漂流、租船、滑索等）一般 09:00–18:00 运营。\n建议清晨或黄昏前往，光线最佳、气温宜人。`, note: `极端天气或水库维护时部分路段可能临时封闭，出发前请查询圣拉斐尔旅游局最新信息。` },
      price: { title: `费用信息`, content: `峡谷公路与观景台免费开放。漂流、皮划艇、滑索、租船等项目单独收费，价格以现场或运营商公布为准。\n部分项目含专业向导与安全装备。`, note: `建议携带现金（阿根廷比索），偏远区域可能不支持刷卡。` },
      duration: { title: `建议游览时长`, content: `沿 RP173 观光 + 主要观景台：约 4–5 小时。\n结合水库活动与圣拉斐尔葡萄酒庄：可安排 一整天。`, note: `可与门多萨葡萄酒之路（Ruta del Vino）、Puente del Inca 等串联，规划 2–3 日安第斯之旅。` },
      tips: { title: `游览贴士与注意事项`, items: [
        `防晒防风：前山地区日照强、午后易起风，请备高倍防晒、墨镜与外套`,
        `自驾谨慎：RP173 多弯道与临崖路段，请控制车速、避免夜间行车`,
        `水上安全：漂流与涉水务必穿戴救生衣，雨后河水暴涨时切勿下水`,
        `补水充足：半荒漠气候干燥，每人每日建议携带 1.5 升以上饮水`,
        `尊重管理区：水库与部分河段涉及设施管理区，请遵从指示牌与向导安排`,
        `提前规划：漂流等项目建议提前预约，并确认天气与水位`
      ] },
      essentials: [
        { icon: `☀️`, title: `强日照`, text: `前山日照强烈且干燥，墨镜、宽檐帽与高倍防晒霜必备。` },
        { icon: `🚗`, title: `弯道驾驶`, text: `RP173 临崖多弯，请放慢车速，避免疲劳驾驶与夜间行车。` },
        { icon: `💧`, title: `补水充足`, text: `半荒漠气候易脱水，建议每人携带至少 1.5 升饮水。` },
        { icon: `🛟`, title: `水上安全`, text: `漂流、皮划艇须穿救生衣，雨后涨水严禁下水。` }
      ]
    },
    transportation: {
      title: `精准交通指南`,
      airport: { title: `✈️ 从门多萨 / 机场出发`, content: `最近的主要国际机场是门多萨机场（Aeropuerto Internacional de Mendoza, MDZ），距圣拉斐尔约 240 公里。圣拉斐尔也拥有区域机场（Aeropuerto de San Rafael），有少量国内航班。`, options: [
        { name: `自驾 / 租车（推荐）`, price: `约 3.5–4 小时`, time: `240 公里`, steps: [`从门多萨机场沿 RN-40 或 RN-143 向南前往圣拉斐尔`, `抵达圣拉斐尔后，按路标转入 RP173 省道前往峡谷`, `沿 RP173 行驶约 40 公里，依次经过各水库与观景台`] },
        { name: `长途巴士 + 当地接驳`, price: `约 4–5 小时`, time: `MDZ → San Rafael`, steps: [`从门多萨长途车站乘巴士前往圣拉斐尔（Terminal de San Rafael）`, `抵达后预约出租车/Remís 或参加当地一日游前往峡谷`, `沿 RP173 行驶约 40 公里到达主要观景区域`] },
        { name: `区域航班 + 租车`, price: `视航班而定`, time: `至 San Rafael`, steps: [`乘国内航班抵达圣拉斐尔区域机场`, `在机场租车或预约接送`, `沿 RP173 自驾或乘车前往峡谷`] }
      ]},
      publicTransport: {
        title: `🚌 长途巴士 / 公共交通`,
        content: `不自驾的游客通常先抵达圣拉斐尔，再转乘当地交通完成最后约 40 公里到峡谷。班次以车站公告为准。`,
        options: [
          {
            name: `Mendoza → San Rafael（长途巴士）`,
            description: `从门多萨省府到圣拉斐尔的固定线路，是公共交通最常用的方式。`,
            steps: [`前往门多萨长途车站（Terminal de Mendoza）`, `购买前往圣拉斐尔的车票`, `抵达后转乘出租车/Remís 或参加当地一日游`]
          },
          {
            name: `San Rafael → 峡谷（最后一段）`,
            description: `峡谷距圣拉斐尔约 40 公里，山路弯道较多，公共交通有限。`,
            steps: [`在圣拉斐尔预约出租车/Remís 或参加当地旅行社一日游`, `沿 RP173 省道前往各水库与观景台`, `部分观景台可停车自由活动`]
          }
        ]
      },
      city: { title: `🏘️ 从圣拉斐尔出发`, content: `阿图埃尔峡谷位于圣拉斐尔以南约 40 公里处，沿 RP173 省道前往。最方便的方式是自驾、包车，或参加当地旅行社组织的一日游。`, steps: [`从圣拉斐尔市中心沿指示牌驶入 RP173 省道`, `沿峡谷公路行驶约 40 公里，途经 Valle Grande、El Nihuil 等水库`, `在各 miradores（观景台）停车游览`] },
      tips: { title: `交通与自驾小贴士`, items: [
        `门户城镇：圣拉斐尔（San Rafael）是前往峡谷的大本营，补给与住宿齐全`,
        `门多萨市区距峡谷约 240 公里，建议预留半天车程`,
        `RP173 峡谷主干路段为铺装路面但弯道多、临崖，支路多为碎石路，雨季需注意落石与湿滑`,
        `可与圣拉斐尔葡萄酒之路（Ruta del Vino San Rafael）组合一日游`,
        `加油站集中在圣拉斐尔，进山前请加满油`
      ] }
    },
    gallery: { title: `照片集锦`, viewMore: `在 Google Maps 查看更多照片`, categories: [ { key: `canyon`, label: `峡谷河段` }, { key: `reservoir`, label: `水库湖泊` }, { key: `rock`, label: `岩层与石林` }, { key: `panorama`, label: `全景远眺` } ] },
    reviews: {
      title: `游客评价与周边探索`,
      subtitle: `阿图埃尔峡谷的游客评分概览（基于 Google Maps）`,
      viewMore: `在 Google Maps 查看更多评价`,
      nearbyTitle: `周边值得一游的景点`,
      nearbyIntro: `探索完阿图埃尔峡谷后，您可顺道造访以下邻近目的地：`,
      nearbyItems: [
        { name: `El Nihuil 水库`, description: `阿图埃尔河上游的水库之一，湖面开阔、水面平静，是帆船、滑水与湖滨露营的热门去处，距圣拉斐尔约 1 小时车程。` },
        { name: `圣拉斐尔葡萄酒之路（Ruta del Vino）`, description: `圣拉斐尔是门多萨重要的葡萄酒产区，以马尔贝克（Malbec）与特浓情（Torrontés）闻名。游览峡谷后，可在附近酒庄品鉴与用餐。` },
        { name: `Cañón del Río Mendoza（波塔雷洛斯）`, description: `位于门多萨市附近的另一条著名峡谷与水库（Embalse Potrerillos），同样以漂流与登山著称，可与阿图埃尔峡谷形成对比游览。` }
      ]
    },
    faq: { title: `常见问题`, subtitle: `深入了解阿图埃尔峡谷`, items: [
      { question: `阿图埃尔峡谷（Cañón del Atuel）在哪里？怎么去？`, answer: `阿图埃尔峡谷位于阿根廷门多萨省圣拉斐尔（San Rafael）以南约 40 公里处，沿 RP173 省道可达。最方便的方式是从门多萨市区（约 240 公里）自驾或乘巴士到圣拉斐尔，再包车或参加一日游前往峡谷。` },
      { question: `游览阿图埃尔峡谷需要多长时间？`, answer: `仅沿 RP173 观光、停靠主要观景台约需 4–5 小时；若结合漂流、滑索或圣拉斐尔酒庄，建议预留一整天。峡谷公路（RP173）为公共省道，通常全天可通行，但大雨或落石后部分路段可能临时封闭——出发前请查询圣拉斐尔旅游局的实时路况。水上项目一般 09:00–18:00 运营。` },
      { question: `阿图埃尔峡谷适合带小孩或家庭出游吗？`, answer: `非常适合。观景台与水库区域轻松安全，适合家庭与摄影；漂流与滑索等项目有专业安全装备，但需根据儿童年龄选择难度。请全程看护儿童，远离涨水河段。` },
      { question: `峡谷里那些碧蓝的水库是天然的吗？`, answer: `阿图埃尔河自身的水库——Valle Grande、Tierras Blancas、Aisol 与 El Nihuil——均为 20 世纪中叶起修建的人工水利设施，用于发电与灌溉。（常一并被提及的 Agua del Toro 与 Los Reyunos 属另一水系 Río Diamante。）它们把狂野的河流塑造成今日碧蓝相连的湖泊景观，是自然与工程的共同作品。` },
      { question: `自驾 RP173 需要注意什么？`, answer: `RP173 是贴着峡谷崖壁蜿蜒的景观公路，弯道多、部分路段临崖。请控制车速、避免夜间行车、进山前加满油，并留意雨季落石与突发的强风。建议下载离线地图，因为峡谷内手机信号不稳定。` }
    ]},
    location: { title: `地图位置`, address: `RP173, Cañón del Atuel\nSan Rafael, Mendoza Province\nArgentina\n阿根廷门多萨省圣拉斐尔\n阿图埃尔峡谷`, openMaps: `在 Google Maps 查看位置` },
    footer: { callToAction: `阿图埃尔峡谷是门多萨前山中最动人心魄的自然与水利奇观，是大自然与人的双手共同写就的杰作。请与我们一同以负责任的方式探访，让赭红岩壁与碧蓝湖水长久地对话。`, text: `© 2026 阿图埃尔峡谷指南 · 保留所有权利。\n本网站是一个独立的第三方非盈利科普指南项目，致力于准确传播 Cañón del Atuel 的信息。我们与阿根廷政府或任何官方机构均无隶属关系。`, made: `本网站是一个独立的非盈利科普项目，为自然探索者、自驾游客与户外爱好者而建。`, linksTitle: `友情链接`, links: LINKS_BY_LOCALE.zh },
    siteMap: {
      title: `峡谷游览路线图`,
      intro: `将鼠标悬停（或点按）下方地图中的标记，即可探索阿图埃尔峡谷的核心游览区域。`,
      hint: `悬停查看 · 点击锁定`,
      cta: `查看完整游览地图`,
      zones: [
        { key: `entrada`, name: `圣拉斐尔（门户与补给）`, desc: `前往峡谷的必经大本营，提供住宿、餐饮、加油与旅游信息中心。建议在此做好补给与行程规划。` },
        { key: `iglesia`, name: `RP173 峡谷公路`, desc: `贴着崖壁蜿蜒的景观公路，沿途多个观景台可俯瞰峡谷与水库，是自驾爱好者的心头好。` },
        { key: `monumento`, name: `El Laberinto（迷宫石林）`, desc: `风与水雕琢出的红色岩柱群，形态奇诡，宛如大自然的雕塑公园，适合徒步与摄影。` },
        { key: `corrales`, name: `Valle Grande 水库`, desc: `阿图埃尔河梯级水库之一，碧蓝湖水映衬赭红岩壁，可租船、垂钓与休闲。` },
        { key: `necrópolis`, name: `El Nihuil 水库`, desc: `峡谷上游的开阔水库，水面平静，是帆船、滑水与湖滨露营的热门目的地。` }
      ]
    },
    itinerary: {
      title: `建议行程规划`,
      intro: `半日即可领略阿图埃尔峡谷的精华，一日则能深度体验。以下时间轴供您参考。`,
      steps: [
        { time: `08:30`, title: `从圣拉斐尔出发`, text: `加满油、备好饮水与防晒，沿 RP173 驶向峡谷，清晨光线最适合拍照。` },
        { time: `09:30`, title: `Valle Grande 水库`, text: `停驻首个观景台，俯瞰碧蓝湖水与红色岩壁的交织，拍摄水利画卷。` },
        { time: `11:00`, title: `El Laberinto 迷宫石林`, text: `下车徒步穿行红色岩柱群，感受风与水的雕塑之力。` },
        { time: `12:30`, title: `峡谷午餐 / 漂流`, text: `在水库边简餐，或参加漂流行程，体验白浪与峡谷的激情。` },
        { time: `15:00`, title: `El Nihuil 水库`, text: `继续上行至开阔湖面，享受午后宁静，可租船或静坐观鸟。` },
        { time: `17:30`, title: `返程观落日`, text: `沿 RP173 返程，在落日余晖中回望赭红峡谷，为一日画上句点。` }
      ]
    },
    ctaBand: {
      title: `计划您的阿图埃尔峡谷之旅`,
      subtitle: `从自驾路线到水上运动，让峡谷之行从容而深入。`,
      buttons: [`开放时间与费用`, `自驾安全指南`, `在地图查看位置`]
    }
  },
  en: {
    nav: { history: `Canyon Overview`, architecture: `Geology & Dams`, monuments: `Activities`, eco: `Conservation`, visiting: `Visit Info`, transportation: `Getting There`, gallery: `Gallery`, reviews: `Reviews`, faq: `FAQ`, location: `Location` },
    hero: {
      tags: [`Mendoza Natural Wonder`, `Four Atuel Reservoirs`, `RP173 Canyon Scenic Drive`],
      tagline: `Argentina · Mendoza Province · San Rafael`,
      title: `Cañón del Atuel`,
      subtitle: `Atuel Canyon · Hydraulic Canyon · Andean Precordillera`,
      cta: `Explore the Canyon`,
      description: {
        address: `RP173, Cañón del Atuel, San Rafael, Mendoza, Argentina`,
        phone: `Visitor info: San Rafael Tourism`,
        category: `Natural Wonder · Canyon & Reservoirs`
      }
    },
    rating: { reviews: `reviews`, source: `Google Reviews`, verified: `Verified October 2026 · aggregated from Google Maps ratings` },
    history: {
      title: `A Rift in the Andean Foothills`,
      intro: `Cañón del Atuel is one of Mendoza Province’s most stunning natural and engineered landscapes, set in the Precordillera of the Andes south of San Rafael. The Atuel River plunges down from the snowy Andes and has carved a deep canyon through arid, red rock — then been chained by a series of reservoirs that turn turquoise lakes and ochre cliffs into a single, unforgettable panorama.

How the Canyon Was Born
The Atuel River rises in the Andes of south-west Mendoza and runs about 185 km. For millions of years it has incised along geological faults, cutting ancient sedimentary and volcanic rock into a profound gorge. At its narrowest, only a sliver of sky shows; the walls display layered hues of red, orange and grey.

Taming the Water: the Legend of the Atuel Reservoirs
From the mid-20th century, Mendoza built a cascade of reservoirs on the Atuel — Valle Grande, Tierras Blancas, Aisol and El Nihuil — to generate hydropower and irrigate the land. (Agua del Toro and Los Reyunos, often mentioned nearby, are part of the separate Río Diamante basin.) The river was cut section by section, and in the middle of the desert canyon appeared its linked turquoise lakes, making this one of Argentina’s most remarkable hydraulic landscapes and the source of power and life for the San Rafael oasis.

Mendoza's "Water Bank"
Today the Atuel basin supplies a significant share of Mendoza’s electricity and irrigation water. The reservoir chain is both a lifeline for energy and agriculture and the stage for rafting, zip-lines and lakeside leisure — a rare symbiosis of natural force and human engineering.`
    },
    myths: {
      title: `Name, People & Legends`,
      intro: `The name Atuel comes from the Huarpe (Allentiac) language of the region’s original inhabitants, evoking water that shoots down like an arrow. Between the canyon and its reservoirs, stories of this land still live on.`,
      items: [
        {
          title: `Atuel: Water Like an Arrow`,
          content: `The Huarpe were among the oldest peoples of Mendoza, living along rivers and lakes and naming nature with simple, poetic words. In Huarpe, Atuel is read as water that bursts forth like an arrow — a perfect description of the Atuel River’s rush through the gorge. The San Rafael oasis of today flourishes precisely because of this river.

Although Huarpe culture was severely disrupted during the colonial period, their place-names and reverence for water survive in Mendoza’s geographic memory. As you walk beside a reservoir, remember: this turquoise water was once a sacred, rushing stream in Indigenous eyes.`
        },
        {
          title: `The Song of the Dam Builders`,
          content: `Unlike many natural wonders, the modern legend of Cañón del Atuel is human. From the 1940s, Mendoza’s engineers and workers dammed the river, turning the wild Atuel into a string of gentle lakes. Older residents of San Rafael still recall that when the reservoirs were completed, the barren canyon first mirrored a turquoise reflection, and the oasis lit up with hydroelectric power.

This history of taming the water makes Cañón del Atuel a vivid lesson in how humans reshape — and coexist with — nature: a reminder that here, half the beauty is from the earth, and half from human hands.`
        },
        {
          title: `The Guardian Spirit of the Canyon (folklore)`,
          content: `In the oral tradition of Mendoza’s countryside, the canyon and reservoirs are not entirely silent. One story says that when the wind brushes the reservoir surface and a low hum echoes through the rocks, it is the spirit of the water reminding people to respect this river of life. Elders also warn against entering the gorge rapids after heavy rain, for the swollen river holds formidable power.

These simple tales, continuous with the Huarpe reverence for water, form the soft yet clear human undertone of Cañón del Atuel.`
        }
      ]
    },
    curiosities: {
      title: `Nature & Engineering Trivia`,
      content: `Four Lakes of the Atuel
From upstream to downstream, the Atuel’s four reservoirs string together like pearls: Valle Grande, Tierras Blancas, Aisol and El Nihuil. Seen from above, turquoise water winds through the ochre canyon — Mendoza’s most striking hydraulic painting. (The Río Diamante basin, with Agua del Toro and Los Reyunos, lies in a separate valley nearby.)

El Laberinto (The Labyrinth)
Near the Valle Grande reservoir, wind and water have sculpted a field of bizarre red rock pillars, aptly called the Labyrinth. Wandering among them feels like stepping into nature’s sculpture park.

RP173: a Scenic Road on the Cliff
The RP173 provincial road linking San Rafael to the canyon hugs the canyon wall as it winds along. With a deep ravine on one side and cliffs on the other, and several miradores (viewpoints) along the way, it is considered one of Mendoza’s most thrilling yet beautiful drives.

Condor Airspace
The updrafts above the canyon are a natural glider runway for the Andean condor (cóndor). On lucky afternoons you may see this nearly three-metre-winged giant glide in silence.`
    },
    eco: {
      title: `Ecological Conservation`,
      intro: `Cañón del Atuel is both a natural heritage and a sensitive ecosystem that sustains Mendoza’s water and power. As an independent non-profit educational guide, we advocate visiting this land in the most responsible way.`,
      items: [
        `Stay on the road: drive only on designated routes and viewpoints; avoid crushing fragile desert vegetation`,
        `Leave no trace: take all rubbish with you, including biodegradable items like peels and tissues`,
        `Protect the water: reservoirs are sources of drinking and irrigation water — do not discard anything or wash in the lakes`,
        `Respect wildlife: do not feed or disturb condors, guanacos and other wild animals`,
        `Water safety: canyon rapids swell after rain — keep clear of flooded stretches`,
        `Support locals: prefer local guides and community-run tourism projects`
      ]
    },
    architecture: {
      title: `Geology & Hydraulic Works`,
      intro: `Cañón del Atuel is a double masterpiece of natural force and engineering wisdom. Its unique landforms are valuable for both appreciation and research, and tell the story of how humans harness Andean water.`,
      specs: {
        structure: { title: `How the Canyon Formed`, content: `The Atuel River incises along faults in the Andean Precordillera, forming a classic deep gorge (garganta). Dozens of kilometres long with towering walls, it narrows in places to barely allow two vehicles. The riverbed surges in the rainy season and trickles in the dry — relentless incision over millions of years shaped today’s deep cleft.

The canyon walls are mostly ancient sedimentary and volcanic rock, recording the long history of Andean orogeny. Erosion is especially strong where rock is softer, producing step-like cliffs and potholes.` },
        design: { title: `Rock Layers & Colours`, content: `The cliffs are an open geological textbook: red, orange and grey bands from minerals deposited in different eras — iron oxide gives the red, calcium carbonate the pale stripes.

Under the low-angle morning and evening sun, the colours are most intense, contrasting sharply with the turquoise lake — a favourite subject for photographers.` },
        optics: { title: `Hydrology & Reservoirs`, content: `The Atuel has limited annual runoff with strong seasonal swings. To regulate flow, generate power and irrigate, Mendoza built a cascade of reservoirs on the Atuel, storing flood-season water for both flood control and energy.

The reservoir chain tamed the wild river into something gentle and controllable, creating a unique hydraulic canyon: bare rock next to blue water, wilderness next to oasis.` }
      },
      plaque: {
        title: `Key Facts`,
        items: [
          { label: `Name`, value: `Cañón del Atuel` },
          { label: `Location`, value: `South of San Rafael, Mendoza, Argentina` },
          { label: `River`, value: `Río Atuel (≈185 km)` },
          { label: `Reservoirs`, value: `4 reservoirs of the Atuel (Valle Grande–El Nihuil)` },
          { label: `Type`, value: `Deep gorge / Hydraulic landscape / Outdoor paradise` },
          { label: `Gateway town`, value: `San Rafael` }
        ]
      }
    },
    monuments: {
      title: `What to Experience at Cañón del Atuel`,
      intro: `Cañón del Atuel blends canyon sightseeing, water sports and Precordillera scenery. The experiences below are loved by adventurers, photographers and families alike.`,
      items: [
        { name: `White-water Rafting & Kayaking`, description: `The Atuel is one of Mendoza’s most famous rafting rivers. Trips from San Rafael run through rapids and calm stretches beneath towering canyon walls — a double feast of adrenaline and scenery. Kayakers can also enjoy the gentler reservoir sections amid lake and mountain views.` },
        { name: `Zip-line & Aerial Adventure`, description: `Canopy (zip-line) and high-rope courses near the canyon let visitors skim above the ochre cliffs and blue lakes from a bird’s-eye view. A popular choice for families and teams, with safety gear provided by professional operators.` },
        { name: `RP173 Drive & Viewpoints`, description: `Driving the RP173 is the classic way to experience the canyon. The road winds along the cliff edge with several miradores (viewpoints) to stop and gaze over reservoirs and the rock labyrinth — a paradise for photographers and sunset lovers.` },
        { name: `Hiking, Cycling & Photography`, description: `Several hiking and mountain-bike trails of varying difficulty surround the canyon. Whether capturing the texture of red rock, waiting for a condor to glide, or watching morning mist lift off the reservoir, the canyon rewards slow travel.` }
      ]
    },
    contrast: {
      title: `Bare Rock & Blue Water: Two Faces of the Canyon`,
      intro: `What moves visitors most about Cañón del Atuel is the contrast between nature’s hardness and engineerings softness. On one side, ochre bare rock cut over millions of years; on the other, a river-dammed, jade-like turquoise reservoir. Two images that capture the canyon’s dual character.`,
      before: `Bare Rock Canyon`,
      after: `Turquoise Reservoir`
    },
    visiting: {
      title: `Plan Your Visit`,
      intro: `Cañón del Atuel can be visited year-round. A half-day along RP173 or a full day combining reservoirs and San Rafael is recommended. The following helps you plan with ease.`,
      hours: { title: `Opening Hours`, content: `The canyon scenic road (RP173) is open all day. Reservoir and outdoor activities (rafting, boat rental, zip-line, etc.) generally run 09:00–18:00.\nMornings or late afternoons offer the best light and pleasant temperatures.`, note: `Some sections may close temporarily in extreme weather or during reservoir maintenance; check the latest info from San Rafael Tourism before departure.` },
      price: { title: `Fees`, content: `The canyon road and viewpoints are free to access. Rafting, kayaking, zip-line and boat rental are charged separately — prices are set by operators on site.\nSome activities include a professional guide and safety gear.`, note: `Carry cash (Argentine pesos); card payments may not be accepted in remote areas.` },
      duration: { title: `Suggested Duration`, content: `RP173 sightseeing + main viewpoints: about 4–5 hours.\nCombining reservoir activities with San Rafael wineries: allow a full day.`, note: `Combine with Mendoza’s Ruta del Vino or Puente del Inca for a 2–3 day Andean trip.` },
      tips: { title: `Travel Tips & Notes`, items: [
        `Sun & wind protection: strong foothill sun and afternoon winds — bring high-SPF sunscreen, sunglasses and a jacket`,
        `Careful driving: RP173 has many curves and cliff-edge sections; control speed and avoid night driving`,
        `Water safety: always wear a life jacket for rafting; never enter swollen water after rain`,
        `Stay hydrated: semi-desert climate is dry; carry at least 1.5 L of water per person daily`,
        `Respect managed areas: reservoirs and some stretches involve managed facilities — follow signs and guides`,
        `Plan ahead: book rafting etc. in advance and confirm weather and water levels`
      ] },
      essentials: [
        { icon: `☀️`, title: `Strong Sun`, text: `Intense, dry foothill sun — sunglasses, wide-brim hat and high-SPF sunscreen are essential.` },
        { icon: `🚗`, title: `Winding Roads`, text: `RP173 hugs cliffs with many curves — slow down, avoid fatigue and night driving.` },
        { icon: `💧`, title: `Hydration`, text: `Semi-desert air dehydrates quickly — carry at least 1.5 L of water per person.` },
        { icon: `🛟`, title: `Water Safety`, text: `Life jackets required for rafting/kayaking; never enter swollen water after rain.` }
      ]
    },
    transportation: {
      title: `Getting There`,
      airport: { title: `✈️ From Mendoza / the Airport`, content: `The nearest major international airport is Mendoza (Aeropuerto Internacional de Mendoza, MDZ), about 240 km from San Rafael. San Rafael also has a regional airport (Aeropuerto de San Rafael) with a few domestic flights.`, options: [
        { name: `Self-drive / Rental (Recommended)`, price: `approx. 3.5–4 hrs`, time: `240 km`, steps: [`From Mendoza airport head south to San Rafael via RN-40 or RN-143`, `In San Rafael, follow signs onto RP173 towards the canyon`, `Drive ~40 km along RP173 past the reservoirs and viewpoints`] },
        { name: `Long-distance bus + local transfer`, price: `approx. 4–5 hrs`, time: `MDZ → San Rafael`, steps: [`Take a bus from Mendoza terminal to San Rafael (Terminal de San Rafael)`, `On arrival, book a taxi/Remís or join a local day tour to the canyon`, `Drive ~40 km along RP173 to the main viewpoints`] },
        { name: `Regional flight + rental`, price: `depends on flight`, time: `to San Rafael`, steps: [`Fly domestically to San Rafael regional airport`, `Rent a car or book a transfer at the airport`, `Self-drive or transfer along RP173 to the canyon`] }
      ]},
      publicTransport: {
        title: `🚌 Long-distance bus / Public transport`,
        content: `Visitors without a car usually reach San Rafael first, then transfer for the final ~40 km to the canyon. Schedules are subject to terminal notice.`,
        options: [
          {
            name: `Mendoza → San Rafael (bus)`,
            description: `A regular line from the provincial capital to San Rafael, the most common public-transport option.`,
            steps: [`Go to Mendoza bus terminal (Terminal de Mendoza)`, `Buy a ticket to San Rafael`, `On arrival, take a taxi/Remís or join a local day tour`]
          },
          {
            name: `San Rafael → Canyon (last leg)`,
            description: `The canyon is ~40 km from San Rafael; mountain road with many curves and limited public transport.`,
            steps: [`Book a taxi/Remís in San Rafael or join a local tour`, `Follow RP173 to the reservoirs and viewpoints`, `Some viewpoints allow free stopping`]
          }
        ]
      },
      city: { title: `🏘️ From San Rafael`, content: `Cañón del Atuel lies about 40 km south of San Rafael along RP173. The easiest options are self-drive, private transfer, or a local operator’s day tour.`, steps: [`From central San Rafael follow signs onto RP173`, `Drive ~40 km past Valle Grande, El Nihuil and other reservoirs`, `Stop at the miradores (viewpoints) to explore`] },
      tips: { title: `Transport & Driving Tips`, items: [
        `Gateway town: San Rafael is the base for the canyon, with full supplies and lodging`,
        `Mendoza city is ~240 km from the canyon — budget half a day of driving`,
        `The main canyon stretch of RP173 is paved but curvy; side roads are gravel — watch for rockfall and slipperiness in the rainy season`,
        `Combine with San Rafael’s Ruta del Vino (wine route) for a day trip`,
        `Fuel up in San Rafael — fill the tank before entering the mountains`
      ] }
    },
    gallery: { title: `Photo Gallery`, viewMore: `View More Photos on Google Maps`, categories: [ { key: `canyon`, label: `Canyon` }, { key: `reservoir`, label: `Reservoirs` }, { key: `rock`, label: `Rocks & Pillars` }, { key: `panorama`, label: `Panoramas` } ] },
    reviews: {
      title: `Visitor Reviews & Nearby Exploration`,
      subtitle: `A snapshot of visitor ratings for Cañón del Atuel, based on Google Maps`,
      viewMore: `View More Reviews on Google Maps`,
      nearbyTitle: `Nearby Attractions Worth Visiting`,
      nearbyIntro: `After exploring Cañón del Atuel, you can easily visit the following nearby destinations:`,
      nearbyItems: [
        { name: `El Nihuil Reservoir`, description: `One of the upstream Atuel reservoirs, with open, calm water — popular for sailing, water-skiing and lakeside camping, about an hour from San Rafael.` },
        { name: `San Rafael Wine Route (Ruta del Vino)`, description: `San Rafael is a key Mendoza wine region, famous for Malbec and Torrontés. After the canyon, taste and dine at nearby wineries.` },
        { name: `Cañón del Río Mendoza (Potrerillos)`, description: `Another famous canyon and reservoir (Embalse Potrerillos) near Mendoza city, also known for rafting and climbing — a great contrast to Cañón del Atuel.` }
      ]
    },
    faq: { title: `Frequently Asked Questions`, subtitle: `Learn More About Cañón del Atuel`, items: [
      { question: `Where is Cañón del Atuel and how do I get there?`, answer: `Cañón del Atuel is about 40 km south of San Rafael, Mendoza Province, reached via RP173. The easiest way is to drive or take a bus from Mendoza city (~240 km) to San Rafael, then a private transfer or day tour to the canyon.` },
      { question: `How long does a visit take?`, answer: `Sightseeing along RP173 with the main viewpoints takes about 4–5 hours; with rafting, zip-line or San Rafael wineries, plan a full day. The canyon road is open all day; water activities generally run 09:00–18:00.` },
      { question: `Is Cañón del Atuel suitable for families with children?`, answer: `Very much so. Viewpoints and reservoir areas are easy and safe for families and photography; rafting and zip-line provide professional safety gear but choose difficulty by the child’s age. Supervise children and keep clear of swollen water.` },
      { question: `Are the turquoise reservoirs natural?`, answer: `The Atuel’s own reservoirs — Valle Grande, Tierras Blancas, Aisol and El Nihuil — are artificial hydraulic works built from the mid-20th century for power and irrigation. (Agua del Toro and Los Reyunos, often mentioned nearby, belong to the separate Río Diamante basin.) Together they reshaped the wild river into today’s linked turquoise lakes — a joint work of nature and engineering.` },
      { question: `What should I know about driving RP173?`, answer: `RP173 is a scenic road hugging the canyon wall with many curves and some cliff-edge sections. Control your speed, avoid night driving, fill the tank before entering, and watch for rockfall and sudden strong winds in the rainy season. Download offline maps as mobile signal is weak in the canyon.` }
    ]},
    location: { title: `Map Location`, address: `RP173, Cañón del Atuel\nSan Rafael, Mendoza Province\nArgentina`, openMaps: `View on Google Maps` },
    footer: { callToAction: `Cañón del Atuel is the most breathtaking natural and hydraulic wonder of Mendoza’s foothills — a work written jointly by nature and human hands. Join us in visiting it responsibly, so the ochre cliffs and turquoise water may keep their dialogue for generations.`, text: `© 2026 Cañón del Atuel Guide · All rights reserved.\nThis website is an independent third-party non-profit educational guide dedicated to sharing accurate information about Cañón del Atuel. We are not affiliated with the Argentine government or any official authority.`, made: `This is an independent non-profit educational project, made for nature explorers, road-trippers and outdoor lovers.`, linksTitle: `Friendly Links`, links: LINKS_BY_LOCALE.en },
    siteMap: {
      title: `Canyon Trail Map`,
      intro: `Hover over (or tap) the markers on the map below to explore the key areas of Cañón del Atuel.`,
      hint: `Hover to preview · Tap to pin`,
      cta: `View the full trail map`,
      zones: [
        { key: `entrada`, name: `San Rafael (Base & Supplies)`, desc: `The must-pass base for the canyon, with lodging, food, fuel and a tourist info centre. Stock up and plan here.` },
        { key: `iglesia`, name: `RP173 Canyon Road`, desc: `A scenic road winding along the cliff, with viewpoints over the canyon and reservoirs — a favourite of drivers.` },
        { key: `monumento`, name: `El Laberinto (Rock Labyrinth)`, desc: `Red rock pillars sculpted by wind and water, bizarre in shape like nature’s sculpture park — great for hiking and photos.` },
        { key: `corrales`, name: `Valle Grande Reservoir`, desc: `One of the Atuel’s cascading reservoirs; turquoise water against ochre cliffs, with boat rental, fishing and leisure.` },
        { key: `necrópolis`, name: `El Nihuil Reservoir`, desc: `A broad upstream reservoir with calm water — popular for sailing, water-skiing and lakeside camping.` }
      ]
    },
    itinerary: {
      title: `Suggested Itinerary`,
      intro: `A half-day captures the essence of Cañón del Atuel; a full day allows deeper exploration. Use the timeline below as a reference.`,
      steps: [
        { time: `08:30`, title: `Depart San Rafael`, text: `Fill the tank, pack water and sunscreen, and head to the canyon on RP173 — morning light is best for photos.` },
        { time: `09:30`, title: `Valle Grande Reservoir`, text: `Stop at the first viewpoint to overlook the turquoise lake woven with red cliffs — the hydraulic painting.` },
        { time: `11:00`, title: `El Laberinto Rock Pillars`, text: `Get out and hike among the red pillars, feeling the sculpting force of wind and water.` },
        { time: `12:30`, title: `Canyon Lunch / Rafting`, text: `Picnic by the reservoir, or join a rafting trip for white-water thrills in the gorge.` },
        { time: `15:00`, title: `El Nihuil Reservoir`, text: `Continue upstream to the open lake; enjoy a peaceful afternoon — rent a boat or watch birds.` },
        { time: `17:30`, title: `Sunset Return`, text: `Drive back along RP173 as the setting sun gilds the ochre canyon — a perfect end to the day.` }
      ]
    },
    ctaBand: {
      title: `Plan Your Cañón del Atuel Trip`,
      subtitle: `From driving routes to water sports — make your canyon visit easy and deep.`,
      buttons: [`Hours & Fees`, `Driving Safety Guide`, `View on Map`]
    }
  },
  es: {
    nav: { history: `Visión del Cañón`, architecture: `Geología y Represas`, monuments: `Actividades`, eco: `Conservación`, visiting: `Información de Visita`, transportation: `Cómo Llegar`, gallery: `Galería`, reviews: `Opiniones`, faq: `Preguntas Frecuentes`, location: `Ubicación` },
    hero: {
      tags: [`Maravilla de Mendoza`, `Cinco embalses en cascata`, `Ruta panorámica RP173`],
      tagline: `Argentina · Provincia de Mendoza · San Rafael`,
      title: `Cañón del Atuel`,
      subtitle: `Cañón del Atuel · Cañón hidráulico · Precordillera Andina`,
      cta: `Explora el Cañón`,
      description: {
        address: `RP173, Cañón del Atuel, San Rafael, Mendoza, Argentina`,
        phone: `Info: Turismo de San Rafael`,
        category: `Maravilla natural · Cañón y embalses`
      }
    },
    rating: { reviews: `opiniones`, source: `Opiniones de Google`, verified: `Verificado octubre 2026 · agregado de valoraciones de Google Maps` },
    history: {
      title: `Una Grieta en la Precordillera Andina`,
      intro: `El Cañón del Atuel es uno de los paisajes naturales e ingenieriles más asombrosos de la provincia de Mendoza, en la Precordillera de los Andes, al sur de San Rafael. El río Atuel baja de la nieve andina y ha tallado un cañón profundo en roca roja y árida, que luego fue encadenado por una serie de embalses que convierten lagos turquesa y acantilados ocre en un mismo panorama inolvidable.

El nacimiento del cañón
El río Atuel nace en los Andes del sudoeste de Mendoza y recorre unos 185 km. Durante millones de años ha incidido a lo largo de fallas geológicas, cortando roca sedimentaria y volcánica antigua en una garganta profunda. En su parte más estrecha apenas entra un hilo de cielo; las paredes muestran tonos rojos, naranjas y grises superpuestos.

Domar el agua: la leyenda de los embalses del Atuel
Desde mediados del siglo XX, Mendoza construyó una cadena de embalses en el Atuel — Valle Grande, Tierras Blancas, Aisol y El Nihuil — para generar hidroelectricidad y regar la tierra. (Agua del Toro y Los Reyunos, que suelen mencionarse por cercanía, pertenecen a la cuenca separada del Río Diamante.) El río fue cortado tramo a tramo, y en medio del desierto aparecieron sus lagos turquesa enlazados, convirtiendo este lugar en uno de los paisajes hidráulicos más notables de Argentina y en fuente de energía y vida para el oasis de San Rafael.

El "banco de agua" de Mendoza
Hoy la cuenca del Atuel aporta una parte importante de la electricidad y el riego de Mendoza. La cadena de embalses es a la vez sustento de energía y agricultura, y escenario de rafting, canopy y recreación lacustre: una rara simbiosis entre fuerza natural e ingeniería humana.`
    },
    myths: {
      title: `Nombre, Pueblos y Leyendas`,
      intro: `El nombre Atuel proviene de la lengua huarpe (allentiac) de los habitantes originarios de la región, y evoca el agua que se lanza como una flecha. Entre el cañón y sus embalses, las historias de esta tierra siguen vivas.`,
      items: [
        {
          title: `Atuel: agua como una flecha`,
          content: `Los huarpe fueron uno de los pueblos más antiguos de Mendoza, que vivían junto a ríos y lagunas y nombraban la naturaleza con palabras sencillas y poéticas. En huarpe, Atuel se lee como agua que brota como una flecha — una descripción perfecta de la carrera del río Atuel por la garganta. El oasis de San Rafael de hoy florece precisamente por este río.

Aunque la cultura huarpe fue duramente golpeada en la colonia, sus topónimos y su respeto por el agua sobreviven en la memoria geográfica de Mendoza. Al caminar junto a un embalse, recuerde: esta agua turquesa fue, para los originarios, un río sagrado y caudaloso.`
        },
        {
          title: `El canto de los constructores de represas`,
          content: `A diferencia de muchas maravillas naturales, la leyenda moderna del Cañón del Atuel es humana. Desde la década de 1940, ingenieros y obreros de Mendoza represaron el río y convirtieron al Atuel salvaje en una cadena de lagos apacibles. Los ancianos de San Rafael recuerdan que cuando se completaron los embalses, el cañón árido se reflejó por primera vez en turquesa y el oasis se iluminó con energía hidroeléctrica.

Esta historia de domar el agua hace del Cañón del Atuel una lección viva de cómo el ser humano transforma —y convive con— la naturaleza: un recordatorio de que aquí la belleza es mitad de la tierra y mitad de las manos humanas.`
        },
        {
          title: `El espíritu guardián del cañón (folclore)`,
          content: `En la tradición oral de la campaña de Mendoza, el cañón y los embalses no están del todo silenciosos. Cuenta una historia que cuando el viento acaricia la superficie del embalse y un zumbido recorre las rocas, es el espíritu del agua recordando a la gente que respete este río de vida. Los mayores también advierten no entrar a los rápidos del cañón tras lluvias fuertes, pues el río crecido guarda un poder formidable.

Estos relatos sencillos, continuos con el respeto huarpe por el agua, forman el suave pero nítido fondo humano del Cañón del Atuel.`
        }
      ]
    },
    curiosities: {
      title: `Datos de Naturaleza e Ingeniería`,
      content: `Cuatro lagos del Atuel
De arriba abajo, los cuatro embalses del Atuel se enhebran como perlas: Valle Grande, Tierras Blancas, Aisol y El Nihuil. Vistos desde arriba, el agua turquesa serpentea por el cañón ocre: el cuadro hidráulico más impactante de Mendoza. (La cuenca del Río Diamante, con Agua del Toro y Los Reyunos, queda en un valle aparte cercano.)

El Laberinto
Cerca del embalse Valle Grande, el viento y el agua esculpieron un campo de pilares rojos y extraños, llamado justamente El Laberinto. Recorrerlos es entrar al parque de esculturas de la naturaleza.

RP173: la ruta escénica sobre el acantilado
La ruta provincial RP173 que une San Rafael con el cañón serpentea pegada a la pared del cañón. Con barranco de un lado y acantilado del otro, y varios miradores en el camino, es una de las rutas mendocinas más emocionantes y bellas.

Espacio aéreo del cóndor
Las corrientes ascendentes sobre el cañón son una pista natural para el cóndor andino. En tardes afortunadas se lo ve planeando en silencio, con casi tres metros de envergadura.`
    },
    eco: {
      title: `Conservación Ecológica`,
      intro: `El Cañón del Atuel es a la vez patrimonio natural y ecosistema sensible que sostiene el agua y la energía de Mendoza. Como guía educativa independiente sin fines de lucro, promovemos visitarlo de la manera más responsable.`,
      items: [
        `Circulá por el camino: usá sólo rutas y miradores habilitados; evitá pisar la frágil vegetación del desierto`,
        `Sin dejar rastro: llevate toda la basura, incluidos residuos biodegradables como cáscaras y pañuelos`,
        `Protegé el agua: los embalses son fuente de agua potable y riego — no arrojes nada ni te laves en los lagos`,
        `Respetá la fauna: no alimentes ni perturbes cóndores, guanacos y otros animales silvestres`,
        `Seguridad hídrica: los rápidos crecen tras la lluvia — mantenete lejos de los tramos crecidos`,
        `Apoyá lo local: preferí guías locales y proyectos turísticos comunitarios`
      ]
    },
    architecture: {
      title: `Geología y Obras Hidráulicas`,
      intro: `El Cañón del Atuel es una doble obra maestra de la fuerza natural y la sabiduría ingenieril. Sus formas únicas valen para la contemplación y la investigación, y cuentan cómo el ser humano aprovecha el agua andina.`,
      specs: {
        structure: { title: `Cómo se formó el cañón`, content: `El río Atuel incide a lo largo de fallas de la Precordillera Andina, formando una garganta profunda (garganta). Decenas de kilómetros de largo, con paredes altas, se estrecha hasta apenas dejar paso a dos vehículos. El cauce crece en la temporada de lluvias y merma en la seca — la incisión implacable de millones de años esculpió la grieta actual.

Las paredes son roca sedimentaria y volcánica antigua, que registra la larga historia de la orogenia andina. La erosión es más fuerte donde la roca es blanda, produciendo acantilados escalonados y marmitas.` },
        design: { title: `Estratos y Colores`, content: `Los acantilados son un libro geológico abierto: bandas rojas, naranjas y grises de minerales depositados en distintas eras — el óxido de hierro da el rojo, el carbonato de calcio las franjas claras.

Con el sol bajo de la mañana y el atardecer, los colores son más intensos y contrastan con el lago turquesa: un tema favorito de los fotógrafos.` },
        optics: { title: `Hidrología y Embalses`, content: `El Atuel tiene escorrentía anual limitada y muy estacional. Para regular el caudal, generar energía y regar, Mendoza construyó una cadena de embalses en el Atuel, guardando el agua de crecidas para control de inundaciones y energía.

La cadena de embalses domesticó al río salvaje en algo apacible y controlable, creando un cañón hidráulico único: roca desnuda junto al agua azul, desierto junto al oasis.` }
      },
      plaque: {
        title: `Datos Clave`,
        items: [
          { label: `Nombre`, value: `Cañón del Atuel` },
          { label: `Ubicación`, value: `Sur de San Rafael, Mendoza, Argentina` },
          { label: `Río`, value: `Río Atuel (≈185 km)` },
          { label: `Embalses`, value: `4 embalses del Atuel (Valle Grande–El Nihuil)` },
          { label: `Tipo`, value: `Garganta profunda / Paisaje hidráulico / Paraíso outdoor` },
          { label: `Localidad puerta`, value: `San Rafael` }
        ]
      }
    },
    monuments: {
      title: `Qué Experimentar en el Cañón del Atuel`,
      intro: `El Cañón del Atuel combina avistamiento del cañón, deportes acuáticos y paisajes de la Precordillera. Las experiencias siguientes gustan a aventureros, fotógrafos y familias.`,
      items: [
        { name: `Rafting y Kayak`, description: `El Atuel es uno de los ríos de rafting más famosos de Mendoza. Los viajes desde San Rafael recorren rápidos y tramos calmos bajo paredes altas: una doble fiesta de adrenalina y paisaje. Los kayakistas disfrutan también de los tramos más tranquilos de los embalses.` },
        { name: `Canopy y Aventura Aérea`, description: `Cerca del cañón hay tirolinas (canopy) y circuitos de cuerdas en altura que dejan recorrer el acantilado ocre y los lagos azules desde arriba. Opción popular para familias y grupos, con equipo de seguridad profesional.` },
        { name: `Ruta RP173 y Miradores`, description: `Recorrer la RP173 es la forma clásica de vivir el cañón. La ruta serpentea por el borde del acantilado con varios miradores para detenerse y contemplar embalses y el laberinto de roca: un paraíso para fotógrafos y amantes del atardecer.` },
        { name: `Senderismo, Ciclismo y Fotografía`, description: `Varias sendas y rutas de mountain bike de distinta dificultad rodean el cañón. Ya sea captar la textura de la roca roja, esperar al cóndor o ver la niebla levantarse sobre el embalse, el cañón premia el viaje lento.` }
      ]
    },
    contrast: {
      title: `Roca Desnuda y Agua Azul: Dos Caras del Cañón`,
      intro: `Lo que más conmueve del Cañón del Atuel es el contraste entre la dureza' de la naturaleza y la 'suavidad de la ingeniería. De un lado, roca ocre tallada en millones de años; del otro, un embalse turquesa represado por el río. Dos imágenes que resumen el carácter dual del cañón.`,
      before: `Cañón de Roca Desnuda`,
      after: `Embalse Turquesa`
    },
    visiting: {
      title: `Planificá tu Visita`,
      intro: `El Cañón del Atuel se puede visitar todo el año. Se recomienda medio día por la RP173 o un día completo sumando embalses y San Rafael. Lo siguiente ayuda a planificar.`,
      hours: { title: `Horarios`, content: `La ruta escénica del cañón (RP173) está abierta todo el día. Las actividades en embalses y al aire libre (rafting, alquiler de botes, canopy, etc.) suelen funcionar de 09:00 a 18:00.\nLas mañanas o tardes ofrecen mejor luz y temperatura.`, note: `Algunos tramos pueden cerrarse temporalmente por clima extremo o mantenimiento de embalses; consultá a Turismo de San Rafael antes de salir.` },
      price: { title: `Tarifas`, content: `La ruta del cañón y los miradores son de acceso gratuito. Rafting, kayak, canopy y alquiler de botes se cobran aparte — precios según operador en el lugar.\nAlgunas actividades incluyen guía profesional y equipo de seguridad.`, note: `Llevá efectivo (pesos argentinos); en zonas remotas puede no haber tarjeta.` },
      duration: { title: `Duración Sugerida`, content: `Avistamiento por RP173 + miradores principales: unas 4–5 horas.\nSumando actividades en embalses y bodegas de San Rafael: un día completo.`, note: `Combiná con la Ruta del Vino de Mendoza o Puente del Inca para un viaje andino de 2–3 días.` },
      tips: { title: `Consejos y Notas`, items: [
        `Protección solar y viento: fuerte sol de precordillera y viento a la tarde — llevá protector alto, lentes y campera`,
        `Conducción cuidadosa: RP173 tiene muchas curvas y tramos al borde del barranco; controlá la velocidad y evitá manejar de noche`,
        `Seguridad hídrica: usá chaleco salvavidas en rafting; nunca entres al agua crecida tras la lluvia`,
        `Hidratate: clima semidesértico seco; llevá al menos 1,5 L de agua por persona al día`,
        `Respetá áreas privadas: embalses y algunos tramos son zonas manejadas — seguí carteles y guías`,
        `Planificá: reservá rafting con anticipación y confirmá clima y nivel de agua`
      ] },
      essentials: [
        { icon: `☀️`, title: `Sol Intenso`, text: `Sol de precordillera fuerte y seco — lentes, gorra de ala ancha y protector alto son imprescindibles.` },
        { icon: `🚗`, title: `Curvas`, text: `RP173 bordea acantilados con muchas curvas — bajá la velocidad, evitá fatiga y manejo nocturno.` },
        { icon: `💧`, title: `Hidratación`, text: `Aire semidesertico deshidrata — llevá al menos 1,5 L de agua por persona.` },
        { icon: `🛟`, title: `Seguridad Hídrica`, text: `Chaleco obligatorio en rafting/kayak; nunca entres al agua crecida tras la lluvia.` }
      ]
    },
    transportation: {
      title: `Cómo Llegar`,
      airport: { title: `✈️ Desde Mendoza / el Aeropuerto`, content: `El aeropuerto internacional más cercano es el de Mendoza (Aeropuerto Internacional de Mendoza, MDZ), a unos 240 km de San Rafael. San Rafael también tiene un aeropuerto regional (Aeropuerto de San Rafael) con algunos vuelos domésticos.`, options: [
        { name: `Auto propio / Alquiler (Recomendado)`, price: `aprox. 3,5–4 h`, time: `240 km`, steps: [`Desde el aeropuerto de Mendoza bajá al sur por RN-40 o RN-143 hacia San Rafael`, `En San Rafael, seguí los carteles a RP173 hacia el cañón`, `Recorré ~40 km por RP173 pasando los embalses y miradores`] },
        { name: `Ómnibus de larga distancia + traslado`, price: `aprox. 4–5 h`, time: `MDZ → San Rafael`, steps: [`Tomá un ómnibus de Mendoza a San Rafael (Terminal de San Rafael)`, `Al llegar, reservá taxi/Remís o una excursión local al cañón`, `Recorré ~40 km por RP173 a los miradores principales`] },
        { name: `Vuelo regional + alquiler`, price: `según vuelo`, time: `a San Rafael`, steps: [`Volá en vuelo doméstico al aeropuerto regional de San Rafael`, `Alquilá auto o reservá traslado en el aeropuerto`, `Por RP173 hasta el cañón en auto o traslado`] }
      ]},
      publicTransport: {
        title: `🚌 Ómnibus de larga distancia / Transporte público`,
        content: `Quienes no manejan suelen llegar primero a San Rafael y luego trasladarse los ~40 km finales al cañón. Los horarios dependen de la terminal.`,
        options: [
          {
            name: `Mendoza → San Rafael (ómnibus)`,
            description: `Línea regular de la capital provincial a San Rafael, la opción de transporte público más común.`,
            steps: [`Andá a la terminal de Mendoza (Terminal de Mendoza)`, `Comprá boleto a San Rafael`, `Al llegar, tomá taxi/Remís o una excursión local`]
          },
          {
            name: `San Rafael → Cañón (último tramo)`,
            description: `El cañón queda a ~40 km de San Rafael; camino de montaña con curvas y transporte público limitado.`,
            steps: [`Reservá taxi/Remís en San Rafael o una excursión local`, `Seguí RP173 a los embalses y miradores`, `Algunos miradores permiten parada libre`]
          }
        ]
      },
      city: { title: `🏘️ Desde San Rafael`, content: `El Cañón del Atuel queda unos 40 km al sur de San Rafael por RP173. Lo más fácil es auto propio, traslado privado o excursión de operador local.`, steps: [`Desde el centro de San Rafael seguí los carteles a RP173`, `Recorré ~40 km pasando Valle Grande, El Nihuil y otros embalses`, `Pará en los miradores para recorrer`] },
      tips: { title: `Consejos de Transporte y Conducción`, items: [
        `Localidad base: San Rafael es el punto de partida del cañón, con suministros y alojamiento completos`,
        `Mendoza ciudad queda a ~240 km del cañón — presupuestá medio día de manejo`,
        `El tramo principal del cañón por RP173 está pavimentado pero con curvas; los desvíos de tierra son de ripio — ojo con desmoronamientos y resbalón en temporada de lluvias`,
        `Combiná con la Ruta del Vino de San Rafael para una salida de día`,
        `Cargá combustible en San Rafael — llená el tanque antes de entrar a la montaña`
      ] }
    },
    gallery: { title: `Galería de Fotos`, viewMore: `Ver más fotos en Google Maps`, categories: [ { key: `canyon`, label: `Cañón` }, { key: `reservoir`, label: `Embalses` }, { key: `rock`, label: `Rocas y Pilares` }, { key: `panorama`, label: `Panorámicas` } ] },
    reviews: {
      title: `Opiniones de Visitantes y Exploración`,
      subtitle: `Una instantánea de las valoraciones de los visitantes del Cañón del Atuel, según Google Maps`,
      viewMore: `Ver más opiniones en Google Maps`,
      nearbyTitle: `Atracciones cercanas`,
      nearbyIntro: `Tras explorar el Cañón del Atuel, podés visitar los siguientes destinos cercanos:`,
      nearbyItems: [
        { name: `Embalse El Nihuil`, description: `Uno de los embalses aguas arriba del Atuel, con agua abierta y tranquila — ideal para velero, esquí acuático y camping lacustre, a una hora de San Rafael.` },
        { name: `Ruta del Vino de San Rafael`, description: `San Rafael es una zona vitivinícola clave de Mendoza, famosa por Malbec y Torrontés. Tras el cañón, probá y cená en bodegas cercanas.` },
        { name: `Cañón del Río Mendoza (Potrerillos)`, description: `Otro cañón y embalse famoso (Embalse Potrerillos) cerca de Mendoza ciudad, también conocido por rafting y escalada — un buen contraste con el Cañón del Atuel.` }
      ]
    },
    faq: { title: `Preguntas Frecuentes`, subtitle: `Saber más sobre el Cañón del Atuel`, items: [
      { question: `¿Dónde está el Cañón del Atuel y cómo llego?`, answer: `El Cañón del Atuel queda unos 40 km al sur de San Rafael, Mendoza, por RP173. Lo más fácil es manejar o tomar ómnibus desde Mendoza ciudad (~240 km) a San Rafael, y luego traslado privado o excursión al cañón.` },
      { question: `¿Cuánto dura la visita?`, answer: `El avistamiento por RP173 con los miradores principales lleva unas 4–5 horas; con rafting, canopy o bodegas de San Rafael, planeá un día completo. La ruta del cañón (RP173) es una ruta provincial pública y generalmente abierta, pero tramos pueden cerrarse temporalmente tras lluvias fuertes o derrumbes: consultá a Turismo de San Rafael el estado actual de la ruta antes de salir. Las actividades acuáticas suelen ir de 09:00 a 18:00.` },
      { question: `¿El Cañón del Atuel es apto para familias con niños?`, answer: `Mucho. Los miradores y embalses son fáciles y seguros para familias y fotos; rafting y canopy tienen equipo de seguridad profesional, pero elegí la dificultad según la edad. Supervisá a los niños y mantenelos lejos del agua crecida.` },
      { question: `¿Los embalses turquesa son naturales?`, answer: `Los embalses propios del Atuel — Valle Grande, Tierras Blancas, Aisol y El Nihuil — son obras hidráulicas artificiales construidas desde mediados del siglo XX para energía y riego. (Agua del Toro y Los Reyunos, que suelen mencionarse por cercanía, pertenecen a la cuenca separada del Río Diamante.) Remodelaron el río salvaje en los lagos turquesa de hoy: una obra conjunta de naturaleza e ingeniería.` },
      { question: `¿Qué debo saber para manejar la RP173?`, answer: `RP173 es una ruta escénica pegada al acantilado, con muchas curvas y tramos al borde del barranco. Controlá la velocidad, evitá manejar de noche, cargá combustible antes de entrar y ojo con desmoronamientos y vientos fuertes en la temporada de lluvias. Descargá mapas offline: la señal es débil en el cañón.` }
    ]},
    location: { title: `Ubicación en el Mapa`, address: `RP173, Cañón del Atuel\nSan Rafael, Provincia de Mendoza\nArgentina`, openMaps: `Ver en Google Maps` },
    footer: { callToAction: `El Cañón del Atuel es la maravilla natural e hidráulica más sobrecogedora de la precordillera de Mendoza — una obra escrita junto por la naturaleza y las manos humanas. Visitemoslo responsablemente para que los acantilados ocres y el agua turquesa sigan dialogando por generaciones.`, text: `© 2026 Guía del Cañón del Atuel · Todos los derechos reservados.\nEste sitio es una guía educativa independiente sin fines de lucro dedicada a difundir información precisa sobre el Cañón del Atuel. No estamos afiliados con el gobierno argentino ni ninguna autoridad oficial.`, made: `Este es un proyecto educativo independiente no profit, creado para exploradores de la naturaleza, viajeros en auto y amantes del aire libre.`, linksTitle: `Enlaces Amigos`, links: LINKS_BY_LOCALE.es },
    siteMap: {
      title: `Mapa del Cañón`,
      intro: `Pasa el cursor (o tocá) los marcadores del mapa para explorar las áreas clave del Cañón del Atuel.`,
      hint: `Pasa para prever · Tocá para fijar`,
      cta: `Ver el mapa completo`,
      zones: [
        { key: `entrada`, name: `San Rafael (Base y Suministros)`, desc: `La base imprescindible del cañón, con alojamiento, comida, combustible e info turística. Abastecete y planificá aquí.` },
        { key: `iglesia`, name: `Ruta RP173 del Cañón`, desc: `Ruta escénica que serpentea por el acantilado, con miradores sobre el cañón y embalses — favorita de los conductores.` },
        { key: `monumento`, name: `El Laberinto (Pilares de Roca)`, desc: `Pilares rojos esculpidos por viento y agua, de formas extrañas como parque de esculturas de la naturaleza — ideal para caminar y fotografiar.` },
        { key: `corrales`, name: `Embalse Valle Grande`, desc: `Uno de los embalses en cascata del Atuel; agua turquesa contra acantilados ocre, con alquiler de botes, pesca y recreación.` },
        { key: `necrópolis`, name: `Embalse El Nihuil`, desc: `Embalse aguas arriba, amplio de aguas calmas — popular para velero, esquí acuático y camping lacustre.` }
      ]
    },
    itinerary: {
      title: `Itinerario Sugerido`,
      intro: `Medio día alcanza la esencia del Cañón del Atuel; un día completo permite explorar a fondo. Usá la línea de tiempo como referencia.`,
      steps: [
        { time: `08:30`, title: `Salida de San Rafael`, text: `Cargá nafta, agua y protector, y tomá RP173 al cañón — la luz de la mañana es ideal para fotos.` },
        { time: `09:30`, title: `Embalse Valle Grande`, text: `Pará en el primer mirador para contemplar el lago turquesa entre rocas rojas: el cuadro hidráulico.` },
        { time: `11:00`, title: `Pilares de El Laberinto`, text: `Bajá a caminar entre los pilares rojos, sintiendo la fuerza esculpidora del viento y el agua.` },
        { time: `12:30`, title: `Almuerzo / Rafting en el cañón`, text: `Picnic junto al embalse o salida de rafting por los rápidos de la garganta.` },
        { time: `15:00`, title: `Embalse El Nihuil`, text: `Seguí aguas arriba al lago abierto; disfrutá una tarde tranquila — alquilá bote o observá aves.` },
        { time: `17:30`, title: `Regreso al atardecer`, text: `Volvé por RP173 mientras el sol tiñe de oro el cañón ocre: un cierre perfecto.` }
      ]
    },
    ctaBand: {
      title: `Planificá tu Viaje al Cañón del Atuel`,
      subtitle: `Desde rutas de conducción hasta deportes acuáticos — hacé tu visita fácil y profunda.`,
      buttons: [`Horarios y Tarifas`, `Guía de Conducción Segura`, `Ver en el Mapa`]
    }
  },
  it: {
    nav: { history: `Panoramica del Cañón`, architecture: `Geologia e Dighe`, monuments: `Attività`, eco: `Conservazione`, visiting: `Info di Visita`, transportation: `Come Arrivare`, gallery: `Galleria`, reviews: `Recensioni`, faq: `FAQ`, location: `Posizione` },
    hero: {
      tags: [`Meraviglia di Mendoza`, `Quattro invasi dell'Atuel`, `Strada panoramica RP173`],
      tagline: `Argentina · Provincia di Mendoza · San Rafael`,
      title: `Cañón del Atuel`,
      subtitle: `Cañón del Atuel · Cañón idraulico · Precordillera Andina`,
      cta: `Esplora il Cañón`,
      description: {
        address: `RP173, Cañón del Atuel, San Rafael, Mendoza, Argentina`,
        phone: `Info: Turismo di San Rafael`,
        category: `Meraviglia naturale · Cañón e invasi`
      }
    },
    rating: { reviews: `recensioni`, source: `Recensioni Google`, verified: `Verificato ottobre 2026 · aggregato dalle valutazioni di Google Maps` },
    history: {
      title: `Una Frattura nella Precordillera Andina`,
      intro: `Il Cañón del Atuel è uno dei paesaggi naturali e ingegneristici più sorprendenti della provincia di Mendoza, nella Precordillera andina a sud di San Rafael. Il fiume Atuel scende dalla neve andina e ha scavato un canyon profondo nella roccia rossa e arida, che poi è stato incatenato da una serie di invasi che trasformano laghi turchesi e scogliere ocra in un unico, indimenticabile panorama.

La nascita del canyon
Il fiume Atuel nasce nelle Ande del sud-ovest di Mendoza e percorre circa 185 km. Per milioni di anni ha inciso lungo faglie geologiche, tagliando roccia sedimentaria e vulcanica antica in una gola profonda. Nel punto più stretto entra appena un filo di cielo; le pareti mostrano tonalità rosse, arancioni e grigie sovrapposte.

Domare l’acqua: la leggenda degli invasi dell’Atuel
Dalla metà del XX secolo Mendoza ha costruito una catena di invasi sull’Atuel — Valle Grande, Tierras Blancas, Aisol ed El Nihuil — per produrre idroelettricità e irrigare la terra. (Agua del Toro e Los Reyunos, spesso citati per vicinanza, appartengono alla separata conca del Río Diamante.) Il fiume è stato tagliato tratto per tratto, e nel mezzo del deserto sono apparsi i suoi laghi turchesi inanellati, rendendo questo luogo uno dei paesaggi idraulici più notevoli dell’Argentina e fonte di energia e vita per l’oasis di San Rafael.

La "banca dell'acqua" di Mendoza
Oggi il bacino dell’Atuel fornisce una parte importante dell’elettricità e dell’irrigazione di Mendoza. La catena di invasi è insieme sostegno per energia e agricoltura, e scenario di rafting, zip-line e svago lacustre: una rara simbiosi tra forza naturale e ingegneria umana.`
    },
    myths: {
      title: `Nome, Popoli e Leggende`,
      intro: `Il nome Atuel proviene dalla lingua huarpe (allentiac) degli abitanti originari della regione, ed evoca acqua che si lancia come una freccia. Tra il canyon e i suoi invasi, le storie di questa terra sono ancora vive.`,
      items: [
        {
          title: `Atuel: acqua come una freccia`,
          content: `Gli huarpe furono uno dei popoli più antichi di Mendoza, vivevano lungo fiumi e lagune e davano nomi alla natura con parole semplici e poetiche. In huarpe, Atuel si legge come acqua che sgorga come una freccia — una descrizione perfetta della corsa del fiume Atuel nella gola. L’oasis di San Rafael di oggi fiorisce proprio grazie a questo fiume.

Sebbene la cultura huarpe sia stata duramente colpita in epoca coloniale, i loro toponimi e il rispetto per l’acqua sopravvivono nella memoria geografica di Mendoza. Camminando accanto a un invaso, ricorda: questa acqua turchese fu, agli occhi originari, un fiume sacro e impetuoso.`
        },
        {
          title: `Il canto dei costruttori di dighe`,
          content: `Diversamente da molte meraviglie naturali, la leggenda moderna del Cañón del Atuel è umana. Dagli anni 40 ingegneri e operai di Mendoza hanno sbarrato il fiume, trasformando lAtuel selvaggio in una catena di laghi placidi. Gli anziani di San Rafael ricordano che quando gli invasi furono completati, il canyon arido si riflesse per la prima volta nel turchese e l’oasis si illuminò grazie all’energia idroelettrica.

Questa storia di domare l’acqua fa del Cañón del Atuel una lezione viva di come l’umano trasforma — e convive con — la natura: un promemoria che qui la belleza è metà della terra e metà delle mani umane.`
        },
        {
          title: `Lo spirito guardiano del canyon (folclore)`,
          content: `Nella tradizione orale della campagna di Mendoza, il canyon e gli invasi non sono del tutto silenziosi. Racconta una storia che quando il vento accarezza la superficie dell’invaso e un ronzio percorre le rocce, è lo spirito dell’acqua che ricorda alla gente di rispettare questo fiume di vita. Gli anziani avvertono anche di non entrare nei rapidi del canyon dopo forti piogge, perché il fiume gonfio custodisce un potere formidabile.

Questi racconti semplici, continui con il rispetto huarpe per l’acqua, formano la morbida ma nitida sfumatura umana del Cañón del Atuel.`
        }
      ]
    },
    curiosities: {
      title: `Curiosità di Natura e Ingegneria`,
      content: `Quattro laghi dell’Atuel
Dall’alto verso il basso, i quattro invasi dell’Atuel si infilano come perle: Valle Grande, Tierras Blancas, Aisol ed El Nihuil. Visti dall’alto, l’acqua turchese serpeggia nel canyon ocre: il quadro idraulico più impressionante di Mendoza. (La conca del Río Diamante, con Agua del Toro e Los Reyunos, si trova in una valle a parte vicina.)

El Laberinto (Il Labirinto)
Vicino all’invaso Valle Grande, vento e acqua hanno scolpito un campo di pilastri rossi e bizzarri, chiamato appunto Il Labirinto. Percorrerli è entrare nel parco di sculture della natura.

RP173: la strada panoramica sulla scogliera
La strada provinciale RP173 che unisce San Rafael al canyon serpeggia attaccata alla parete del canyon. Con un baratro da un lato e scogliere dall’altro, e diversi miradores (punti panoramici) lungo il percorso, è una delle strade mendocine più emozionanti e belle.

Spazio aereo del condor
Le correnti ascensionali sopra il canyon sono una pista naturale per il condor andino. In tardì fortunate lo si vede planare in silenzio, con quasi tre metri di apertura alare.`
    },
    eco: {
      title: `Conservazione Ecologica`,
      intro: `Il Cañón del Atuel è insieme patrimonio naturale ed ecosistema sensibile che sostiene l’acqua e l’energia di Mendoza. Come guida educativa indipendente senza scopo di lucro, promuoviamo di visitarlo nel modo più responsabile.`,
      items: [
        `Sta sulla strada: usa solo percorsi e miradores abilitati; evita di calpestare la fragile vegetazione del deserto`,
        `Lascia nessuna traccia: porta via tutti i rifiuti, inclusi quelli biodegradabili come bucce e fazzoletti`,
        `Proteggi l’acqua: gli invasi sono fonte di acqua potabile e irrigua — non gettare nulla né lavarsi nei laghi`,
        `Rispetta la fauna: non nutrire né disturbare condor, guanachi e altri animali selvatici`,
        `Sicurezza idrica: i rapidi crescono dopo la pioggia — stai lontano dai tratti in piena`,
        `Sostieni il locale: preferisci guide locali e progetti turistici comunitari`
      ]
    },
    architecture: {
      title: `Geologia e Opere Idrauliche`,
      intro: `Il Cañón del Atuel è una duplice opera maestra di forza naturale e saggezza ingegneristica. Le sue forme uniche valgono per la contemplazione e la ricerca, e raccontano come l’umano sfrutta l’acqua andina.`,
      specs: {
        structure: { title: `Come si è formato il canyon`, content: `Il fiume Atuel incide lungo faglie della Precordillera Andina, formando una gola profonda (garganta). Decine di km di lunghezza, con pareti alte, si restringe fino a lasciar passare a malapena due veicoli. L’alveo cresce nella stagione delle piogge e cala in quella secca — l’incisione implacabile di milioni di anni ha scolpito la fenditura attuale.

Le pareti sono roccia sedimentaria e vulcanica antica, che registra la lunga storia dell’orogenesi andina. L’erosione è più forte dove la roccia è tenera, producendo scogliere a gradoni e marmitte.` },
        design: { title: `Strati e Colori`, content: `Le scogliere sono un libro geologico aperto: bande rosse, arancioni e grigie di minerali depositati in ere diverse — l’ossido di ferro dà il rosso, il carbonato di calcio le strisce chiare.

Con il sole basso di mattina e tramonto i colori sono più intensi e contrastano con il lago turchese: un tema favorito dei fotografi.` },
        optics: { title: `Idrologia e Invasi`, content: `L’Atuel ha deflusso annuo limitato e molto stagionale. Per regolare la portata, generare energia e irrigare, Mendoza ha costruito una catena di invasi sull’Atuel, conservando l’acqua delle piene per il controllo delle inondazioni e l’energia.

La catena di invasi ha domesticato il fiume selvaggio in qualcosa di placido e controllabile, creando un unico canyon idraulico: roccia nuda accanto all’acqua blu, deserto accanto all’oasis.` }
      },
      plaque: {
        title: `Dati Chiave`,
        items: [
          { label: `Nome`, value: `Cañón del Atuel` },
          { label: `Posizione`, value: `Sud di San Rafael, Mendoza, Argentina` },
          { label: `Fiume`, value: `Río Atuel (≈185 km)` },
          { label: `Invasi`, value: `4 invasi dell’Atuel (Valle Grande–El Nihuil)` },
          { label: `Tipo`, value: `Gola profonda / Paesaggio idraulico / Paradiso outdoor` },
          { label: `Centro porta`, value: `San Rafael` }
        ]
      }
    },
    monuments: {
      title: `Cosa Fare al Cañón del Atuel`,
      intro: `Il Cañón del Atuel unisce avvistamento del canyon, sport acquatici e paesaggi della Precordillera. Le esperienze seguenti piacciono ad avventurieri, fotografi e famiglie.`,
      items: [
        { name: `Rafting e Kayak`, description: `L’Atuel è uno dei fiumi di rafting più famosi di Mendoza. I viaggi da San Rafael percorrono rapidi e tratti calmi sotto alte pareti: una doppia festa di adrenalina e paesaggio. I kayaker godono anche dei tratti più tranquilli degli invasi.` },
        { name: `Zip-line e Avventura Aerea`, description: `Vicino al canyon ci sono canopy (zip-line) e percorsi di corde in quota che fanno attraversare la scogliera ocre e i laghi blu dall’alto. Scelta popolare per famiglie e gruppi, con equipaggiamento di sicurezza professionale.` },
        { name: `Guida RP173 e Miradores`, description: `Percorrere la RP173 è il modo classico di vivere il canyon. La strada serpeggia sul bordo della scogliera con diversi miradores (punti panoramici) dove fermarsi a contemplare invasi e il labirinto di roccia: un paradiso per fotografi e amanti del tramonto.` },
        { name: `Trekking, Ciclismo e Fotografia`, description: `Diversi sentieri e percorsi di mountain bike di varia difficoltà circondano il canyon. Che si tratti di catturare la texture della roccia rossa, aspettare il condor o vedere la nebbia alzarsi sull’invaso, il canyon premia il viaggio lento.` }
      ]
    },
    contrast: {
      title: `Roccia Nuda e Acqua Blu: Due Volti del Canyon`,
      intro: `Ciò che commuove di più del Cañón del Atuel è il contrasto tra la durezza della natura e la dolcezza dell'ingegneria. Da un lato, roccia ocre scolpita in milioni di anni; dall’altro, un invaso turchese trattenuto dal fiume. Due immagini che riassumono il carattere duale del canyon.`,
      before: `Canyon di Roccia Nuda`,
      after: `Invaso Turchese`
    },
    visiting: {
      title: `Pianifica la Tua Visita`,
      intro: `Il Cañón del Atuel si visita tutto l’anno. Si consiglia mezza giornata lungo la RP173 o una giornata intera unendo invasi e San Rafael. Quello che segue aiuta a pianificare.`,
      hours: { title: `Orari`, content: `La strada panoramica del canyon (RP173) è aperta tutto il giorno. Le attività negli invasi e all’aperto (rafting, noleggio barche, zip-line, ecc.) di solito vanno dalle 09:00 alle 18:00.\nMattine o tardi pomeriggi offrono la luce migliore e temperature gradevoli.`, note: `Alcuni tratti possono chiudersi temporaneamente per maltempo o manutenzione invasi; controlla le ultime info da Turismo di San Rafael prima di partire.` },
      price: { title: `Tariffe`, content: `La strada del canyon e i miradores sono ad accesso gratuito. Rafting, kayak, zip-line e noleggio barche si pagano a parte — prezzi secondo operatore in loco.\nAlcune attività includono guida professionale e equipaggiamento di sicurezza.`, note: `Porta contanti (pesos argentini); nelle zone remote la carta potrebbe non essere accettata.` },
      duration: { title: `Durata Consigliata`, content: `Avvistamento su RP173 + miradores principali: circa 4–5 ore.\nUnendo attività negli invasi e le cantine di San Rafael: concedi una giornata intera.`, note: `Combina con la Ruta del Vino di Mendoza o Puente del Inca per un viaggio andino di 2–3 giorni.` },
      tips: { title: `Consigli e Note`, items: [
        `Protezione sole e vento: forte sole di precordillera e vento al pomeriggio — porta crema alta, occhiali e giacca`,
        `Guida prudente: RP173 ha molte curve e tratti sul bordo del baratro; controlla la velocità ed evita la guida notturna`,
        `Sicurezza idrica: indossa sempre il giubbotto salvagente per il rafting; non entrare in acqua gonfia dopo la pioggia`,
        `Idratati: clima semidesertico secco; porta almeno 1,5 L d’acqua a persona al giorno`,
        `Rispetta aree private: invasi e alcuni tratti sono zone gestite — segui cartelli e guide`,
        `Pianifica: prenota rafting in anticipo e conferma meteo e livello dell’acqua`
      ] },
      essentials: [
        { icon: `☀️`, title: `Sole Intenso`, text: `Sole di precordillera forte e secco — occhiali, cappello a tesa larga e crema alta sono indispensabili.` },
        { icon: `🚗`, title: `Curve`, text: `RP173 costeggia scogliere con molte curve — rallenta, evita fatica e guida notturna.` },
        { icon: `💧`, title: `Idratazione`, text: `Aria semidesertica disidrata — porta almeno 1,5 L d’acqua a persona.` },
        { icon: `🛟`, title: `Sicurezza Idrica`, text: `Giubbotto obbligatorio per rafting/kayak; non entrare in acqua gonfia dopo la pioggia.` }
      ]
    },
    transportation: {
      title: `Come Arrivare`,
      airport: { title: `✈️ Da Mendoza / l’Aeroporto`, content: `L’aeroporto internazionale più vicino è quello di Mendoza (Aeropuerto Internacional de Mendoza, MDZ), a circa 240 km da San Rafael. Anche San Rafael ha un aeroporto regionale (Aeropuerto de San Rafael) con alcuni voli domestici.`, options: [
        { name: `Auto propria / Noleggio (Consigliato)`, price: `circa 3,5–4 h`, time: `240 km`, steps: [`Dall’aeroporto di Mendoza scendi a sud verso San Rafael via RN-40 o RN-143`, `A San Rafael segui i cartelli su RP173 verso il canyon`, `Percorri ~40 km su RP173 passando gli invasi e i miradores`] },
        { name: `Pullman a lunga percorrenza + trasferimento`, price: `circa 4–5 h`, time: `MDZ → San Rafael`, steps: [`Prendi un pullman da Mendoza a San Rafael (Terminal de San Rafael)`, `All’arrivo prenota taxi/Remís o un tour locale per il canyon`, `Percorri ~40 km su RP173 verso i miradores principali`] },
        { name: `Volo regionale + noleggio`, price: `dipende dal volo`, time: `a San Rafael`, steps: [`Vola in volo domestico all’aeroporto regionale di San Rafael`, `Noleggia auto o prenota trasferimento in aeroporto`, `Su RP173 fino al canyon in auto o trasferimento`] }
      ]},
      publicTransport: {
        title: `🚌 Pullman a lunga percorrenza / Trasporto pubblico`,
        content: `Chi non guida di solito raggiunge prima San Rafael, poi il trasferimento per gli ultimi ~40 km al canyon. Gli orari dipendono dalla terminal.`,
        options: [
          {
            name: `Mendoza → San Rafael (pullman)`,
            description: `Linea regolare dalla capitale provinciale a San Rafael, l’opzione di trasporto pubblico più comune.`,
            steps: [`Vai alla terminal di Mendoza (Terminal de Mendoza)`, `Compra il biglietto per San Rafael`, `All’arrivo prendi taxi/Remís o un tour locale`]
          },
          {
            name: `San Rafael → Canyon (ultimo tratto)`,
            description: `Il canyon è a ~40 km da San Rafael; strada di montagna con curve e trasporto pubblico limitato.`,
            steps: [`Prenota taxi/Remís a San Rafael o un tour locale`, `Segui RP173 agli invasi e ai miradores`, `Alcuni miradores permettono sosta libera`]
          }
        ]
      },
      city: { title: `🏘️ Da San Rafael`, content: `Il Cañón del Atuel si trova circa 40 km a sud di San Rafael lungo RP173. Il più facile è auto propria, trasferimento privato o tour di operatore locale.`, steps: [`Dal centro di San Rafael segui i cartelli su RP173`, `Percorri ~40 km passando Valle Grande, El Nihuil e altri invasi`, `Fermati nei miradores (punti panoramici) per esplorare`] },
      tips: { title: `Consigli su Trasporto e Guida`, items: [
        `Centro base: San Rafael è il punto di partenza del canyon, con rifornimenti e alloggio completi`,
        `Mendoza città è a ~240 km dal canyon — budget mezza giornata di guida`,
        `Il tratto principale del canyon su RP173 è asfaltato ma con curve; le deviazioni di terra sono sterrate — attenzione a frane e scivoli in stagione delle piogge`,
        `Combina con la Ruta del Vino di San Rafael per un’uscita di giornata`,
        `Rifornisci carburante a San Rafael — fai il pieno prima di entrare in montagna`
      ] }
    },
    gallery: { title: `Galleria Fotografica`, viewMore: `Vedi altre foto su Google Maps`, categories: [ { key: `canyon`, label: `Cañón` }, { key: `reservoir`, label: `Invasi` }, { key: `rock`, label: `Rocce e Pilastri` }, { key: `panorama`, label: `Panoramiche` } ] },
    reviews: {
      title: `Recensioni dei Visitatori ed Esplorazione`,
      subtitle: `Uno spaccato delle valutazioni dei visitatori del Cañón del Atuel, basato su Google Maps`,
      viewMore: `Vedi altre recensioni su Google Maps`,
      nearbyTitle: `Attrazioni Vicine`,
      nearbyIntro: `Dopo aver esplorato il Cañón del Atuel, puoi visitare facilmente le seguenti destinazioni vicine:`,
      nearbyItems: [
        { name: `Invaso El Nihuil`, description: `Uno degli invasi a monte dell’Atuel, con acqua aperta e calma — popolare per vela, sci d’acqua e campeggio lacustre, a un’ora da San Rafael.` },
        { name: `Ruta del Vino di San Rafael`, description: `San Rafael è una zona vitivinicola chiave di Mendoza, famosa per Malbec e Torrontés. Dopo il canyon, assaggia e cena nelle cantine vicine.` },
        { name: `Cañón del Río Mendoza (Potrerillos)`, description: `Un altro famoso canyon e invaso (Embalse Potrerillos) vicino a Mendoza città, noto anche per rafting e arrampicata — un bel contrasto con il Cañón del Atuel.` }
      ]
    },
    faq: { title: `Domande Frequenti`, subtitle: `Saperne di più sul Cañón del Atuel`, items: [
      { question: `Dove si trova il Cañón del Atuel e come ci arrivo?`, answer: `Il Cañón del Atuel si trova circa 40 km a sud di San Rafael, Mendoza, sulla RP173. Il modo più semplice è guidare o prendere un pullman da Mendoza città (~240 km) a San Rafael, poi un trasferimento privato o un tour al canyon.` },
      { question: `Quanto dura la visita?`, answer: `L’avvistamento su RP173 con i miradores principali richiede circa 4–5 ore; con rafting, zip-line o cantine di San Rafael, prevedi una giornata intera. La strada del canyon (RP173) è una strada provinciale pubblica e generalmente aperta, ma alcuni tratti possono chiudersi temporaneamente dopo forti piogge o frane: controlla lo stato aggiornato della strada da Turismo di San Rafael prima di partire. Le attività acquatiche di solito vanno dalle 09:00 alle 18:00.` },
      { question: `Il Cañón del Atuel è adatto alle famiglie con bambini?`, answer: `Molto. Miradores e invasi sono facili e sicuri per famiglie e foto; rafting e zip-line hanno equipaggiamento di sicurezza professionale, ma scegli la difficoltà in base all’età. Sorveglia i bambini e stai lontano dall’acqua in piena.` },
      { question: `Gli invasi turchesi sono naturali?`, answer: `Gli invasi propri dell’Atuel — Valle Grande, Tierras Blancas, Aisol ed El Nihuil — sono opere idrauliche artificiali costruite dalla metà del XX secolo per energia e irrigazione. (Agua del Toro e Los Reyunos, spesso citati per vicinanza, appartengono alla separata conca del Río Diamante.) Hanno rimodellato il fiume selvaggio nei laghi turchesi di oggi: un’opera congiunta di natura e ingegneria.` },
      { question: `Cosa devo sapere per guidare la RP173?`, answer: `RP173 è una strada panoramica attaccata alla scogliera, con molte curve e tratti sul bordo del baratro. Controlla la velocità, evita la guida notturna, fai il pieno prima di entrare e attenzione a frane e venti forti in stagione delle piogge. Scarica mappe offline: il segnale nel canyon è debole.` }
    ]},
    location: { title: `Posizione sulla Mappa`, address: `RP173, Cañón del Atuel\nSan Rafael, Provincia di Mendoza\nArgentina`, openMaps: `Vedi su Google Maps` },
    footer: { callToAction: `Il Cañón del Atuel è la meraviglia naturale e idraulica più vertiginosa della precordillera di Mendoza — un’opera scritta insieme dalla natura e dalle mani umane. Visitiamolo responsabilmente perché le scogliere ocra e l’acqua turchese continuino a dialogare per le generazioni.`, text: `© 2026 Guida del Cañón del Atuel · Tutti i diritti riservati.\nQuesto sito è una guida educativa indipendente senza scopo di lucro dedicata a diffondere informazioni accurate sul Cañón del Atuel. Non siamo affiliati con il governo argentino né con alcuna autorità ufficiale.`, made: `Questo è un progetto educativo indipendente non profit, creato per esploratori della natura, viaggiatori in auto e amanti dell’outdoor.`, linksTitle: `Link Amici`, links: LINKS_BY_LOCALE.it },
    siteMap: {
      title: `Mappa del Cañón`,
      intro: `Passa il cursore (o tocca) i marcatori sulla mappa per esplorare le aree chiave del Cañón del Atuel.`,
      hint: `Passa per anteprima · Tocca per fissare`,
      cta: `Vedi la mappa completa`,
      zones: [
        { key: `entrada`, name: `San Rafael (Base e Rifornimenti)`, desc: `La base indispensabile del canyon, con alloggio, cibo, carburante e info turistiche. Rifornisci e pianifica qui.` },
        { key: `iglesia`, name: `Strada RP173 del Cañón`, desc: `Strada panoramica che serpeggia sulla scogliera, con miradores sul canyon e gli invasi — favorita di chi guida.` },
        { key: `monumento`, name: `El Laberinto (Pilastri di Roccia)`, desc: `Pilastri rossi scolpiti da vento e acqua, di forme bizzarre come parco di sculture della natura — ideale per camminare e fotografare.` },
        { key: `corrales`, name: `Invaso Valle Grande`, desc: `Uno degli invasi a cascata dell’Atuel; acqua turchese contro scogliere ocra, con noleggio barche, pesca e svago.` },
        { key: `necrópolis`, name: `Invaso El Nihuil`, desc: `Invaso a monte ampio dalle acque calme — popolare per vela, sci d’acqua e campeggio lacustre.` }
      ]
    },
    itinerary: {
      title: `Itinerario Consigliato`,
      intro: `Mezza giornata basta per l’essenza del Cañón del Atuel; una giornata intera permette di esplorare a fondo. Usa la linea temporale come riferimento.`,
      steps: [
        { time: `08:30`, title: `Partenza da San Rafael`, text: `Fai il pieno, prepara acqua e crema, e prendi RP173 per il canyon — la luce del mattino è ideale per le foto.` },
        { time: `09:30`, title: `Invaso Valle Grande`, text: `Fermati al primo mirador per contemplare il lago turchese tra le rocce rosse: il quadro idraulico.` },
        { time: `11:00`, title: `Pilastri di El Laberinto`, text: `Scendi a camminare tra i pilastri rossi, sentendo la forza scultrice di vento e acqua.` },
        { time: `12:30`, title: `Pranzo / Rafting nel canyon`, text: `Picnic accanto all’invaso, o una uscita di rafting tra i rapidi della gola.` },
        { time: `15:00`, title: `Invaso El Nihuil`, text: `Prosegui a monte fino al lago aperto; goditi un pomeriggio tranquillo — noleggia una barca o osserva gli uccelli.` },
        { time: `17:30`, title: `Rientro al tramonto`, text: `Torna su RP173 mentre il sole d’oro tinge il canyon ocre: una chiusura perfetta.` }
      ]
    },
    ctaBand: {
      title: `Pianifica il Tuo Viaggio al Cañón del Atuel`,
      subtitle: `Dalle rotte di guida agli sport acquatici — rendi la visita facile e profonda.`,
      buttons: [`Orari e Tariffe`, `Guida alla Guida Sicura`, `Vedi sulla Mappa`]
    }
  },
};
