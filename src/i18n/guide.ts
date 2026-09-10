import type { Locale } from './config';

// ─────────────────────────────────────────────────────────────
// 专业落地页增强内容：实用设施、天气模块、深度科普
// 全部为四语言文案；设施信息只描述「类型」，不涉及任何具体商户。
// ─────────────────────────────────────────────────────────────

export interface FacilityItem {
  icon: string;
  name: string;
  where: string;
  text: string;
}

export interface WeatherLabels {
  temp: string;
  feels: string;
  humidity: string;
  wind: string;
  gust: string;
  /** 蒲福风级后缀，如中文「级」、英文「Bft」 */
  level: string;
  precip: string;
  uv: string;
  sunrise: string;
  sunset: string;
  prob: string;
}

/**
 * 条件触发的建议文案库。
 * 文案由 src/lib/weather-advice.ts 按天气条件挑选，不满足条件的条目不渲染。
 * `{xxx}` 为数值占位符（如 {level} 风级、{t} 气温、{uv} 紫外线、{mm} 毫米、{range} 温差）。
 */
export interface WeatherMessages {
  /** 风险提醒（优先级最高，红色置顶） */
  alerts: Record<string, string>;
  /** 出行穿搭 */
  outfit: Record<string, string>;
  /** 游玩安排 */
  activity: Record<string, string>;
  /** 随身物品 */
  items: Record<string, string>;
}

export interface WeatherContent {
  title: string;
  intro: string;
  nowLabel: string;
  /** 「今日」最低/最高气温前缀 */
  todayLabel: string;
  alertsTitle: string;
  noAlerts: string;
  outfitTitle: string;
  activityTitle: string;
  itemsTitle: string;
  forecastTitle: string;
  updatedLabel: string;
  dataNote: string;
  labels: WeatherLabels;
  windDirs: Record<string, string>;
  conditions: Record<string, string>;
  messages: WeatherMessages;
  uvLevels: string[];
  loading: string;
  unavailable: string;
}

/**
 * 天气面板渲染真正需要的文案子集。
 * title / intro 只用于页面章节标题，已在服务端渲染进正文，
 * 不再重复序列化到 data 属性里，避免白白增大 HTML。
 */
export type WeatherPanelContent = Omit<WeatherContent, 'title' | 'intro' | 'loading'>;

/** 提取面板所需的文案子集（浏览器端刷新时经 data 属性传递） */
export function weatherPanelContent(w: WeatherContent): WeatherPanelContent {
  return {
    nowLabel: w.nowLabel,
    todayLabel: w.todayLabel,
    alertsTitle: w.alertsTitle,
    noAlerts: w.noAlerts,
    outfitTitle: w.outfitTitle,
    activityTitle: w.activityTitle,
    itemsTitle: w.itemsTitle,
    forecastTitle: w.forecastTitle,
    updatedLabel: w.updatedLabel,
    dataNote: w.dataNote,
    labels: w.labels,
    windDirs: w.windDirs,
    conditions: w.conditions,
    messages: w.messages,
    uvLevels: w.uvLevels,
    unavailable: w.unavailable,
  };
}

export interface DeepBlock {
  icon: string;
  title: string;
  paragraphs: string[];
  facts?: { label: string; value: string }[];
}

export interface GuideContent {
  nav: { facilities: string; weather: string; deepDive: string };
  facilities: {
    title: string;
    intro: string;
    notice: string;
    items: FacilityItem[];
    tipsTitle: string;
    tips: string[];
  };
  weather: WeatherContent;
  deepDive: {
    title: string;
    intro: string;
    blocks: DeepBlock[];
  };
}

export const GUIDE: Record<Locale, GuideContent> = {
  zh: {
    nav: { facilities: '实用设施', weather: '天气与预报', deepDive: '深度科普' },
    facilities: {
      title: '实用设施与补给指南',
      intro:
        '阿图埃尔峡谷是一条沿 RP173 省道展开的线性景区：从圣拉斐尔市区出发，沿途经过多个观景台与水库服务点，最后抵达 El Nihuil。峡谷内设施沿公路点状分布，密度不高，**出发前的准备程度直接决定游览体验**。以下按设施类型逐项说明。',
      notice:
        '本站是一个独立的非盈利科普项目。以下内容**仅按设施类型作中立说明**，不推荐、不背书任何具体商户、品牌或价格，实际开放情况请以现场与官方信息为准。',
      items: [
        {
          icon: '🚻',
          name: '公共卫生间',
          where: '主要观景台与水库服务点',
          text: '沿线主要观景台、水库休闲区与餐饮点设有公共卫生间，多由所在服务点维护。峡谷深处路段与临崖观景台通常没有固定卫生间，建议在圣拉斐尔市区或 El Nihuil 出发前使用。',
        },
        {
          icon: '🅿️',
          name: '停车',
          where: '观景台路侧停车带',
          text: '多数观景台设有免费路侧停车带，容量有限。旺季与长周末上午车位紧张，请勿占用应急通道、弯道或临崖路段停车；大巴与房车建议选择空间较大的水库区停车。',
        },
        {
          icon: '🍽️',
          name: '餐饮',
          where: '水库服务点与圣拉斐尔市区',
          text: '峡谷沿线的水库休闲区与部分观景台有餐饮服务点，以烤肉、简餐、咖啡与冷饮等常规类型为主；菜品种类与营业时段受季节影响较大。圣拉斐尔市区的餐饮选择最丰富，建议在市区用餐或自备干粮与饮水。',
        },
        {
          icon: '🛏️',
          name: '住宿',
          where: '圣拉斐尔市区与水库周边',
          text: '峡谷内部没有住宿设施。住宿主要集中在圣拉斐尔市区（各类酒店、旅舍与民宿），水库与 El Nihuil 周边有露营地与度假小屋类型的选择。旺季建议提前预订。',
        },
        {
          icon: '🛒',
          name: '商超与补给',
          where: '圣拉斐尔市区、El Nihuil',
          text: '超市、便利店与药店集中在圣拉斐尔市区；El Nihuil 与部分水库附近有小型商店，可补充饮水、冰块与零食。峡谷沿线没有大型商超，建议进入峡谷前完成采购。',
        },
        {
          icon: '⛽',
          name: '加油与充电',
          where: '圣拉斐尔市区最密集',
          text: '加油站以圣拉斐尔市区最密集，El Nihuil 与部分水库附近有少量站点，峡谷沿线几乎没有。电动车公共充电设施主要集中在圣拉斐尔市区，峡谷内暂无公共充电桩，纯电车型请提前规划往返里程。',
        },
        {
          icon: '💧',
          name: '饮水与医疗',
          where: '圣拉斐尔市区',
          text: '观景台无直饮水设施，前山气候干燥、日照强，建议每人每天携带 2–3 升饮水。医院、诊所与药房集中在圣拉斐尔市区，峡谷内没有医疗点，请自备常用药品与防晒用品。',
        },
        {
          icon: '📶',
          name: '通信与信号',
          where: '峡谷内覆盖不稳定',
          text: '峡谷内移动信号断续，部分深谷路段与水库背面基本无覆盖。建议提前下载离线地图、结伴出行并把行程告知他人。水库服务点与部分观景台信号相对较好。',
        },
      ],
      tipsTitle: '出发前的准备清单',
      tips: [
        '在圣拉斐尔市区完成加油、取现、采购与如厕，再进入峡谷。',
        '旺季与长周末建议 09:00 前出发，避开观景台停车高峰与正午强晒。',
        '随车携带饮用水、防晒霜、帽子、防风外套与常用药品。',
        '峡谷为敏感生态区，垃圾请全部带出，不采集岩石与植物。',
        '返程请预留时间，避免夜间行驶 RP173 的临崖弯道。',
      ],
    },
    weather: {
      title: '实时天气与未来 7 天预报',
      intro:
        '阿图埃尔峡谷位于安第斯前山，海拔约 750 米，属干旱大陆性气候：**昼夜温差大、日照强、降水少而集中**。天气直接决定观景、漂流与自驾的体验，出行前请结合预报安排行程。',
      nowLabel: '峡谷当前实况',
      todayLabel: '今日',
      alertsTitle: '风险提醒',
      noAlerts: '当前无重大天气风险，可按计划安排行程。',
      outfitTitle: '出行穿搭',
      activityTitle: '游玩安排',
      itemsTitle: '随身物品',
      forecastTitle: '未来 7 天预报',
      updatedLabel: '更新时间',
      dataNote: '按峡谷坐标（-34.84, -68.52）生成，时间采用阿根廷当地时间。山区天气变化快，请以出发前的最新预报为准。',
      labels: {
        temp: '气温',
        feels: '体感',
        humidity: '湿度',
        wind: '风速',
        gust: '阵风',
        level: '级',
        precip: '降水',
        uv: '紫外线',
        sunrise: '日出',
        sunset: '日落',
        prob: '降水概率',
      },
      windDirs: { n: '北', ne: '东北', e: '东', se: '东南', s: '南', sw: '西南', w: '西', nw: '西北' },
      conditions: {
        clear: '晴',
        mainlyClear: '晴间少云',
        partlyCloudy: '多云',
        overcast: '阴',
        fog: '雾',
        drizzle: '毛毛雨',
        rain: '降雨',
        heavyRain: '强降雨',
        snow: '降雪',
        showers: '阵雨',
        snowShowers: '阵雪',
        thunder: '雷暴',
        unknown: '未知',
      },
      messages: {
        alerts: {
          alertThunder: '预计有雷暴：请远离观景台护栏、水库岸边与孤立树木，漂流、皮划艇等水上项目建议直接取消或改期。',
          alertFlood: '未来三天累计降水约 {mm} 毫米，峡谷河床与低洼路段有山洪风险：请勿进入河道与河滩，遇水漫路面立即掉头。',
          alertHeavyRain: '降雨较强，请避开峡谷低洼处与河滩；游船、缆车等露天项目可能临时停运，岩壁路段注意落石。',
          alertWind: '风力最强可达 {level} 级：临崖路段侧风明显，请降低车速、双手稳握方向盘；水库风浪增大，船只可能停航。',
          alertHeat: '最高气温约 {t}℃，正午岩壁区几乎无遮荫：请缩短户外停留时间，警惕中暑与脱水。',
          alertFrost: '最低气温约 {t}℃，清晨可能结霜：峡谷路面湿滑，请携带保暖衣物并注意行车安全。',
          alertUV: '紫外线指数约 {uv}（极高）：前山海拔高、遮挡少，皮肤短时间即可晒伤，请务必全面防晒。',
          alertSnow: '有降雪可能：高海拔路段或出现积雪结冰，非必要不前往，自驾请备防滑装备。',
          alertFog: '能见度较低：不适合登高观景，临崖路段自驾请开启雾灯并保持车距。',
          alertDust: '空气干燥且风力较大，可能出现扬沙：请注意护眼、保护相机并关好车窗。',
          alertWindModerate: '阵风可达 {level} 级，风力偏大：观景台与水库开阔处体感明显，宽檐帽与轻薄裙装容易被吹起。',
        },
        outfit: {
          outfitHot: '气温偏高，建议轻薄透气的浅色衣物；正午时段尽量在阴凉处或车内休息。',
          outfitWarm: '天气温暖，短袖或薄长袖即可；建议随身备一件薄外套应对早晚。',
          outfitMild: '气温舒适，长袖上衣搭配薄外套最合适。',
          outfitCool: '气温偏凉，建议穿保暖外套；清晨观景时体感更冷。',
          outfitCold: '气温较低，建议穿厚外套或羽绒服，并注意防风。',
          outfitLayers: '昼夜温差约 {range}℃：早晚明显偏冷，建议分层穿搭，方便随时增减。',
          outfitWind: '风力偏大，建议穿防风外套，避免宽松长裙与容易被吹落的宽檐帽。',
          outfitRain: '有降水可能，建议穿防水外套或速干衣物，避免长裙与浅色易脏的鞋。',
          outfitWindRain: '风雨交加：建议穿防水防风外套，避免宽松长裙与容易被吹落的帽子。',
          outfitSun: '紫外线较强，建议穿长袖防晒衣，或用薄围巾遮挡颈后与手臂。',
        },
        activity: {
          actThunder: '有雷暴，不建议户外游玩：请远离观景台护栏、水库岸边与孤立树木，漂流与皮划艇大概率关闭。',
          actFlood: '降雨集中，峡谷低洼与河床有山洪风险，请勿进入河道；露天项目可能停运，建议优先安排室内或城镇行程。',
          actRain: '有小雨，岩壁与步道湿滑，露天观景体验下降；自驾请减速并留意落石。',
          actWindStrong: '风力最强可达 {level} 级：水库风浪明显，船只与水上项目大概率关闭，临崖路段请勿停留拍照。',
          actWind: '阵风可达 {level} 级：观景台与水库开阔处风感较强，建议缩短停留时间，无人机谨慎起飞。',
          actUV: '紫外线指数约 {uv}：建议避开 11:00–16:00 的强日照时段，正午岩壁几乎无遮荫。',
          actHeat: '最高气温约 {t}℃：峡谷内缺少遮荫，建议清晨或傍晚出行，正午减少户外活动。',
          actCold: '清晨最低约 {t}℃：观景请做好保暖，注意栈道与岩石表面可能结霜打滑。',
          actFog: '能见度差：不适合登高观景与拍摄远景，临崖路段自驾需格外谨慎。',
          actDust: '有扬沙可能：建议减少户外停留，注意护眼并保护好相机等器材。',
          actSnow: '有降雪：高海拔路段可能积雪结冰，非必要不前往，并预留返程时间。',
          actWater: '水库为安第斯雪山融水，水温常年偏低：下水前请先评估体感温度，切勿在无救援人员处游泳。',
          actClear: '天气晴好，适合观景、自驾与摄影；清晨与傍晚的侧光最适合拍摄岩壁层理。',
          actCloudy: '云层较多但无暴晒，光线柔和，适合长时间户外游览与拍摄岩壁细节。',
        },
        items: {
          itemWater: '充足饮用水',
          itemSunscreen: '高倍防晒霜',
          itemSunglasses: '墨镜',
          itemHat: '遮阳帽',
          itemRaincoat: '雨衣（风大不建议长柄伞）',
          itemUmbrella: '折叠伞',
          itemFolding: '折叠伞（有备无患）',
          itemJacket: '保暖外套',
          itemScarf: '围巾 / 手套',
          itemRepellent: '驱蚊液',
          itemMask: '口罩（防风沙 / 雾气）',
          itemShoes: '防滑徒步鞋',
          itemOffline: '离线地图与充电宝',
        },
      },
      uvLevels: ['低', '中等', '高', '很高', '极高'],
      loading: '正在更新天气数据…',
      unavailable: '天气数据暂时不可用，请以现场与官方预报为准。',
    },
    deepDive: {
      title: '深度科普：读懂阿图埃尔峡谷',
      intro:
        '阿图埃尔峡谷不只是风景。它是一条被安第斯造山运动抬起、被河流切开的岩石走廊，也是一部关于水、干旱与绿洲文明的地方志。以下五个主题，帮助你在抵达之前真正读懂它。',
      blocks: [
        {
          icon: '⛰️',
          title: '地质：安第斯前山的一道裂痕',
          paragraphs: [
            '峡谷所在的**前山带（Precordillera）**由古老的沉积岩与火山岩构成。这些岩层在中生代与新生代沉积、压实，又在安第斯造山运动中被整体抬升，形成今天东西两侧的高地与褶皱。',
            '岩层抬升后，阿图埃尔河沿着断裂带持续下切。由于干旱区植被稀疏、物理风化强烈，河流的侵蚀几乎不受阻挡，最终切出一条深度数十米至上百米、两壁近乎垂直的**嵌入曲流（entrenched meander）**。',
            '峡谷两壁清晰可见赭红、灰绿、土黄相间的层理——它们记录了不同时期的沉积环境。岩壁上的**差异风化**造就了蘑菇石、岩柱与窗洞，也正是 El Laberinto（迷宫石林）这类地貌的成因。',
          ],
          facts: [
            { label: '地貌类型', value: '嵌入曲流与箱状峡谷' },
            { label: '主要岩性', value: '沉积岩与火山岩互层' },
            { label: '海拔', value: '约 750 米' },
          ],
        },
        {
          icon: '💧',
          title: '水文与水利：五座梯级水库',
          paragraphs: [
            '阿图埃尔河发源于门多萨省西部的高山，向东南穿越前山，最终汇入门多萨河体系。它是这条干旱走廊上少有的**常年河流**，也因此成为绿洲农业与水电的关键水源。',
            '20 世纪中叶起，河道上陆续建成五座梯级水库：**Agua del Toro、Los Reyunos、Valle Grande、Tierras Blancas 与 El Nihuil**。它们承担发电、灌溉与调蓄功能，同时在峡谷中形成一连串碧蓝湖面。',
            '今天峡谷最标志性的景观——赭红岩壁与碧蓝湖水的强烈对比——正是**自然侵蚀与人工水利共同作用**的结果。水库的蓄放水节律也会改变下游水位，涉水与漂流前务必确认当日水情。',
          ],
          facts: [
            { label: '梯级水库', value: '5 座（Agua del Toro–El Nihuil）' },
            { label: '主要功能', value: '发电、灌溉、调蓄' },
            { label: '补给方式', value: '高山融雪与降水' },
          ],
        },
        {
          icon: '📜',
          title: '人文史：从「像箭一样的水」到今天',
          paragraphs: [
            '在欧洲殖民者到达之前，**胡阿尔佩人（Huarpe）**已在这片干旱土地上耕作与放牧。在阿图埃尔河相关的口述传统中，这条河被描述为「像箭一样奔流的水」，可见其在当地生活中的分量。',
            '19 世纪末至 20 世纪初，随着移民到来与绿洲农业扩张，河道被逐步工程化：引水渠、水电站与水库相继出现，彻底改变了峡谷的水文节律与地貌外观。',
            '作为一条**跨省河流**，阿图埃尔河的水量分配、生态基流与流域协调需要由流域管理机构与相关方共同安排。理解这一点，才能理解为什么今天峡谷里看到的是「湖」，而不只是「河」。',
          ],
          facts: [
            { label: '原住民族群', value: '胡阿尔佩人（Huarpe）' },
            { label: '工程化起点', value: '19 世纪末至 20 世纪初' },
            { label: '流域属性', value: '跨省河流，需流域协调' },
          ],
        },
        {
          icon: '🌿',
          title: '生态：干旱前山的生命线',
          paragraphs: [
            '峡谷属于**蒙特荒漠（Monte）**与**前山灌丛**的过渡地带。植被以耐旱灌木、仙人掌类与稀疏草本为主，看起来「荒凉」，实际高度特化：深根、小叶、蜡质表层都是对强日照与缺水的适应。',
            '水库与河段是这片干旱基质中的**水鸟走廊**。在 Valle Grande 与 El Nihuil 一带，常见鸭类、鸥类、鹭类以及猛禽盘旋；岸边灌丛是小型鸟类与爬行动物的隐蔽处。',
            '这套生态系统恢复力有限：**土壤结皮一旦被踩碎，恢复往往需要数十年**。因此离开步道、碾压灌丛或采集岩石与植物，都会留下难以逆转的痕迹。',
          ],
          facts: [
            { label: '植被类型', value: '蒙特荒漠与前山灌丛' },
            { label: '关键生境', value: '水库与河岸湿地' },
            { label: '主要风险', value: '踩踏生物结皮、采集岩石' },
          ],
        },
        {
          icon: '🤝',
          title: '负责任的探访：把影响降到最低',
          paragraphs: [
            '峡谷沿线没有围墙，也没有密集的管理人员。这意味着**绝大多数保护行为依赖游客自觉**。走既有道路与观景台，是最简单也最有效的保护方式。',
            '请把垃圾全部带回；不要移动或带走岩石、化石与植物；不要投喂野生动物；在水库岸边保持安静，避免惊扰鸟类繁殖。',
            '峡谷内无医疗点且信号不稳定。请**结伴出行、告知行程、准备饮水与防晒**，并避免在雷暴或强风天气进行漂流、游泳与临崖观景。',
          ],
          facts: [
            { label: '核心原则', value: '走既有道路，不留下痕迹' },
            { label: '禁止行为', value: '采集岩石与植物、投喂动物' },
            { label: '安全底线', value: '结伴出行、关注水情与天气' },
          ],
        },
      ],
    },
  },

  en: {
    nav: { facilities: 'Facilities', weather: 'Weather', deepDive: 'In Depth' },
    facilities: {
      title: 'Practical Facilities & Supplies',
      intro:
        'Cañón del Atuel is a linear scenic area along the RP173 provincial road: you start in San Rafael city, pass a series of viewpoints and reservoir service areas, and end near El Nihuil. **Facilities are scattered in points along the road**, and how well you prepare in advance largely determines the experience. The list below covers each type of facility.',
      notice:
        'This site is an independent non-profit educational project. The information below is a **neutral description by facility type only** — we do not recommend or endorse any specific business, brand or price. Actual opening hours and availability should be confirmed on site and through official sources.',
      items: [
        {
          icon: '🚻',
          name: 'Public restrooms',
          where: 'Main viewpoints & reservoir service areas',
          text: 'Public restrooms are available at the main viewpoints, reservoir leisure areas and dining points, usually maintained by the operator of each service area. The deeper road sections and cliff-edge viewpoints generally have no fixed restrooms — go before leaving San Rafael city or El Nihuil.',
        },
        {
          icon: '🅿️',
          name: 'Parking',
          where: 'Roadside bays at viewpoints',
          text: 'Most viewpoints have free roadside parking bays with limited capacity. On peak days and long weekends bays fill up in the morning. Do not park on emergency lanes, curves or cliff-edge sections; buses and motorhomes should use the larger reservoir areas.',
        },
        {
          icon: '🍽️',
          name: 'Food & dining',
          where: 'Reservoir service areas & San Rafael city',
          text: 'There are dining points at reservoir leisure areas and some viewpoints, typically offering standard categories such as grilled food, light meals, coffee and cold drinks; menus and opening hours vary strongly by season. San Rafael city has the widest choice — eat there or bring your own snacks and water.',
        },
        {
          icon: '🛏️',
          name: 'Accommodation',
          where: 'San Rafael city & around the reservoirs',
          text: 'There is no lodging inside the canyon. Accommodation is concentrated in San Rafael city (hotels, hostels and guesthouses), with camping and cabin-style options near the reservoirs and El Nihuil. Book ahead in high season.',
        },
        {
          icon: '🛒',
          name: 'Shops & supplies',
          where: 'San Rafael city, El Nihuil',
          text: 'Supermarkets, convenience stores and pharmacies are concentrated in San Rafael city; El Nihuil and some reservoir areas have small shops for water, ice and snacks. There are no large stores along the canyon — do your shopping before you enter.',
        },
        {
          icon: '⛽',
          name: 'Fuel & EV charging',
          where: 'Densest in San Rafael city',
          text: 'Fuel stations are densest in San Rafael city, with a few near El Nihuil and some reservoir areas; there are almost none along the canyon road. Public EV charging is concentrated in San Rafael city — there are no public chargers inside the canyon, so plan your round-trip range carefully.',
        },
        {
          icon: '💧',
          name: 'Drinking water & medical',
          where: 'San Rafael city',
          text: 'Viewpoints have no drinking-water supply. The foothill climate is dry with strong sun — carry 2–3 litres of water per person per day. Hospitals, clinics and pharmacies are in San Rafael city; there is no medical point inside the canyon, so bring your usual medication and sun protection.',
        },
        {
          icon: '📶',
          name: 'Mobile coverage',
          where: 'Unreliable inside the canyon',
          text: 'Mobile signal is intermittent inside the canyon, and several deep sections and the far side of the reservoirs have essentially no coverage. Download offline maps, travel with others and share your itinerary. Signal is better at reservoir service areas and some viewpoints.',
        },
      ],
      tipsTitle: 'Pre-departure checklist',
      tips: [
        'Refuel, withdraw cash, shop and use restrooms in San Rafael city before entering the canyon.',
        'In high season and on long weekends, start before 09:00 to avoid viewpoint parking peaks and midday sun.',
        'Carry water, sunscreen, a hat, a windproof jacket and your usual medication.',
        'The canyon is a sensitive ecosystem — take all rubbish out and never collect rocks or plants.',
        'Allow time for the return trip and avoid driving the RP173 cliff-edge curves after dark.',
      ],
    },
    weather: {
      title: 'Live Weather & 7-Day Forecast',
      intro:
        'Cañón del Atuel lies in the Andean foothills at about 750 m, in an arid continental climate: **large day–night temperature swings, strong sun and scarce, concentrated rainfall**. Weather directly shapes sightseeing, rafting and driving — check the forecast before you set out.',
      nowLabel: 'Current conditions at the canyon',
      todayLabel: 'Today',
      alertsTitle: 'Weather risks',
      noAlerts: 'No major weather risks right now — you can plan as usual.',
      outfitTitle: 'What to wear',
      activityTitle: 'What to do',
      itemsTitle: 'What to bring',
      forecastTitle: '7-day forecast',
      updatedLabel: 'Updated',
      dataNote: 'Generated for the canyon coordinates (-34.84, -68.52) in Argentine local time. Mountain weather changes fast — always confirm the latest forecast before departure.',
      labels: {
        temp: 'Temp',
        feels: 'Feels like',
        humidity: 'Humidity',
        wind: 'Wind',
        gust: 'Gusts',
        level: 'Bft',
        precip: 'Precip.',
        uv: 'UV',
        sunrise: 'Sunrise',
        sunset: 'Sunset',
        prob: 'Rain chance',
      },
      windDirs: { n: 'N', ne: 'NE', e: 'E', se: 'SE', s: 'S', sw: 'SW', w: 'W', nw: 'NW' },
      conditions: {
        clear: 'Clear',
        mainlyClear: 'Mainly clear',
        partlyCloudy: 'Partly cloudy',
        overcast: 'Overcast',
        fog: 'Fog',
        drizzle: 'Drizzle',
        rain: 'Rain',
        heavyRain: 'Heavy rain',
        snow: 'Snow',
        showers: 'Showers',
        snowShowers: 'Snow showers',
        thunder: 'Thunderstorm',
        unknown: 'Unknown',
      },
      messages: {
        alerts: {
          alertThunder: 'Thunderstorms are forecast — stay clear of viewpoint railings, reservoir shores and isolated trees; rafting and kayaking should be cancelled or rescheduled.',
          alertFlood: 'About {mm} mm of rain is expected over three days. Flash-flood risk in the canyon riverbed and low-lying sections — do not enter the river channel or gravel banks, and turn back if water crosses the road.',
          alertHeavyRain: 'Heavy rain — avoid low-lying canyon sections and gravel banks. Boat and cable-car services may stop temporarily, and rockfall is possible along the rock walls.',
          alertWind: 'Winds peak at force {level}. Expect strong crosswinds on cliff-edge sections — slow down and keep both hands on the wheel. Reservoir waves build up and boats may stop sailing.',
          alertHeat: 'Highs near {t}°C with almost no shade on the rock walls — shorten your time outdoors and watch for heat exhaustion and dehydration.',
          alertFrost: 'Lows near {t}°C with possible morning frost. Canyon surfaces get slippery — bring warm clothing and drive carefully.',
          alertUV: 'UV index around {uv} (extreme). At this altitude with little shade, skin can burn quickly — full sun protection is essential.',
          alertSnow: 'Snow is possible, with ice or slush on higher sections. Avoid unless necessary and carry traction equipment if you drive.',
          alertFog: 'Visibility is poor — not a good time for high viewpoints. On cliff-edge roads use fog lights and keep your distance.',
          alertDust: 'Very dry and windy — blowing dust is possible. Protect your eyes and camera gear and keep car windows closed.',
          alertWindModerate: 'Gusts up to force {level}. It feels noticeably windy at viewpoints and reservoir shores; wide-brim hats and light skirts will be blown around.',
        },
        outfit: {
          outfitHot: 'Hot — wear light, breathable, light-coloured clothing and rest in the shade or the car around midday.',
          outfitWarm: 'Warm — a T-shirt or light long sleeves are enough; keep a thin jacket for the early morning.',
          outfitMild: 'Comfortable temperatures — long sleeves with a light jacket work best.',
          outfitCool: 'Rather cool — a warm jacket is recommended; early-morning viewpoints feel colder.',
          outfitCold: 'Cold — wear a thick coat or down jacket, plus something windproof.',
          outfitLayers: 'The day–night range is about {range}°C. Dress in layers so you can add or remove clothing easily.',
          outfitWind: 'Windy — wear a windproof jacket and avoid loose long skirts and wide-brim hats that blow away.',
          outfitRain: 'Rain is possible — wear a waterproof or quick-drying jacket, and avoid long skirts and pale shoes.',
          outfitWindRain: 'Wind and rain together — wear a waterproof, windproof jacket and avoid loose skirts and hats that blow away.',
          outfitSun: 'Strong UV — wear a long-sleeved sun shirt, or cover your neck and arms with a light scarf.',
        },
        activity: {
          actThunder: 'Thunderstorms — outdoor activities are not advised. Keep away from viewpoint railings, reservoir shores and isolated trees; rafting and kayaking will most likely be closed.',
          actFlood: 'Concentrated rainfall brings flash-flood risk to low-lying canyon sections and the riverbed. Do not enter the channel; open-air activities may stop, so plan indoor or town-based options.',
          actRain: 'Light rain — rock walls and trails get slippery and open-air viewpoints lose their appeal. Drive slowly and watch for rockfall.',
          actWindStrong: 'Winds peak at force {level} — reservoir waves build up and boats and water activities will most likely be closed. Do not stop to take photos on cliff-edge sections.',
          actWind: 'Gusts up to force {level} — it feels strong at viewpoints and reservoir shores. Keep stops short and be cautious with drones.',
          actUV: 'UV index around {uv} — avoid the strongest sun between 11:00 and 16:00; the rock walls offer almost no shade at midday.',
          actHeat: 'Highs near {t}°C with little shade in the canyon — go early morning or late afternoon and limit outdoor activity at midday.',
          actCold: 'Early-morning lows near {t}°C — dress warmly and watch for frost on boardwalks and rock surfaces.',
          actFog: 'Poor visibility — not suitable for high viewpoints or long-distance photography, and cliff-edge driving needs extra care.',
          actDust: 'Blowing dust is possible — limit time outdoors, protect your eyes and keep camera gear covered.',
          actSnow: 'Snow — higher sections may be icy or snow-covered. Avoid unless necessary and allow extra time for the return trip.',
          actWater: 'The reservoirs are fed by Andean snowmelt and stay cold year-round. Judge the water before entering and never swim where no lifeguard is present.',
          actClear: 'Clear and pleasant — great for sightseeing, driving and photography. Early-morning and late-afternoon side-light is best for the rock strata.',
          actCloudy: 'More cloud but no harsh sun — soft light is ideal for longer walks and for photographing the rock detail.',
        },
        items: {
          itemWater: 'Plenty of drinking water',
          itemSunscreen: 'High-SPF sunscreen',
          itemSunglasses: 'Sunglasses',
          itemHat: 'Sun hat',
          itemRaincoat: 'Rain jacket (avoid long umbrellas in wind)',
          itemUmbrella: 'Folding umbrella',
          itemFolding: 'Folding umbrella (just in case)',
          itemJacket: 'Warm jacket',
          itemScarf: 'Scarf / gloves',
          itemRepellent: 'Insect repellent',
          itemMask: 'Face mask (dust / fog)',
          itemShoes: 'Grippy walking shoes',
          itemOffline: 'Offline map + power bank',
        },
      },
      uvLevels: ['Low', 'Moderate', 'High', 'Very high', 'Extreme'],
      loading: 'Updating weather data…',
      unavailable: 'Weather data is temporarily unavailable — please rely on on-site conditions and official forecasts.',
    },
    deepDive: {
      title: 'In Depth: Understanding Cañón del Atuel',
      intro:
        'Cañón del Atuel is more than a view. It is a rock corridor lifted by Andean orogeny and cut by a river — and a local chronicle of water, drought and oasis civilisation. These five themes will help you read it properly before you arrive.',
      blocks: [
        {
          icon: '⛰️',
          title: 'Geology: a rift in the Andean foothills',
          paragraphs: [
            'The canyon lies in the **Precordillera**, built of ancient sedimentary and volcanic rocks. These beds were deposited and compacted through the Mesozoic and Cenozoic, then uplifted as a block during the Andean orogeny, forming the high ground and folds seen on both sides today.',
            'Once uplifted, the Atuel River kept incising along fault lines. With sparse arid-zone vegetation and intense physical weathering, erosion met little resistance, eventually cutting an **entrenched meander** tens to over a hundred metres deep with near-vertical walls.',
            'The walls show clear bedding in ochre red, grey-green and earth yellow — a record of changing depositional environments. **Differential weathering** of these beds carved the mushroom rocks, pillars and window-like holes, and is exactly what formed features such as El Laberinto (the Rock Labyrinth).',
          ],
          facts: [
            { label: 'Landform', value: 'Entrenched meander / box canyon' },
            { label: 'Main lithology', value: 'Interbedded sedimentary & volcanic rock' },
            { label: 'Altitude', value: 'approx. 750 m' },
          ],
        },
        {
          icon: '💧',
          title: 'Hydrology & engineering: five cascading reservoirs',
          paragraphs: [
            'The Atuel River rises in the high mountains of western Mendoza, flows south-east across the foothills and eventually joins the Mendoza river system. It is one of the few **perennial rivers** in this arid corridor, making it the key source for oasis agriculture and hydropower.',
            'From the mid-20th century, five cascading reservoirs were built along its course: **Agua del Toro, Los Reyunos, Valle Grande, Tierras Blancas and El Nihuil**. They generate power, supply irrigation and regulate flow, while creating a chain of turquoise lakes inside the canyon.',
            'Today’s signature scenery — the sharp contrast of ochre cliffs and turquoise water — is the joint product of **natural incision and human hydraulic engineering**. Reservoir release schedules also change downstream water levels, so always confirm the day’s water conditions before wading or rafting.',
          ],
          facts: [
            { label: 'Reservoirs', value: '5 (Agua del Toro–El Nihuil)' },
            { label: 'Main functions', value: 'Power, irrigation, flow regulation' },
            { label: 'Recharge', value: 'Mountain snowmelt & rainfall' },
          ],
        },
        {
          icon: '📜',
          title: 'Human history: from “water like an arrow” to today',
          paragraphs: [
            'Before European colonisation, the **Huarpe** peoples farmed and herded on this arid land. In oral traditions connected with the river, the Atuel is described as “water that runs like an arrow” — a measure of how central it was to local life.',
            'From the late 19th into the early 20th century, immigration and the expansion of oasis agriculture progressively engineered the river: canals, hydroelectric plants and reservoirs appeared one after another, fundamentally changing the canyon’s hydrological rhythm and appearance.',
            'As a **river crossing provincial boundaries**, the Atuel’s water allocation, ecological flow and basin coordination have to be arranged jointly by basin authorities and the parties involved. Understanding this is the key to understanding why what you see in the canyon today is a chain of lakes, not just a river.',
          ],
          facts: [
            { label: 'Indigenous peoples', value: 'Huarpe' },
            { label: 'Engineering began', value: 'Late 19th – early 20th century' },
            { label: 'Basin', value: 'Interprovincial, jointly coordinated' },
          ],
        },
        {
          icon: '🌿',
          title: 'Ecology: lifeline of an arid foothill',
          paragraphs: [
            'The canyon sits in the transition between **Monte desert** and **foothill scrub**. Vegetation is dominated by drought-tolerant shrubs, cacti and sparse grasses. It looks barren, but is highly specialised: deep roots, small leaves and waxy surfaces are all adaptations to intense sun and water scarcity.',
            'The reservoirs and river reaches act as a **waterbird corridor** through this arid matrix. Around Valle Grande and El Nihuil you commonly see ducks, gulls, herons and soaring raptors; the bank scrub shelters small birds and reptiles.',
            'This ecosystem has limited resilience: **once biological soil crust is broken, recovery can take decades**. Leaving the trail, driving over scrub, or collecting rocks and plants leaves marks that are hard to reverse.',
          ],
          facts: [
            { label: 'Vegetation', value: 'Monte desert & foothill scrub' },
            { label: 'Key habitat', value: 'Reservoirs & riparian wetlands' },
            { label: 'Main risks', value: 'Trampling soil crust, collecting rocks' },
          ],
        },
        {
          icon: '🤝',
          title: 'Responsible visiting: keep your impact minimal',
          paragraphs: [
            'There are no fences and few staff along the canyon. That means **most protection depends on visitor self-discipline**. Staying on existing roads and viewpoints is the simplest and most effective form of care.',
            'Take all rubbish home; do not move or remove rocks, fossils or plants; do not feed wildlife; and keep quiet along reservoir shores to avoid disturbing breeding birds.',
            'There is no medical point and signal is unreliable inside the canyon. **Travel with others, share your itinerary, carry water and sun protection**, and avoid rafting, swimming or cliff-edge viewpoints during thunderstorms or strong winds.',
          ],
          facts: [
            { label: 'Core principle', value: 'Stay on trails, leave no trace' },
            { label: 'Not allowed', value: 'Collecting rocks/plants, feeding animals' },
            { label: 'Safety basics', value: 'Go with others, watch water & weather' },
          ],
        },
      ],
    },
  },

  es: {
    nav: { facilities: 'Servicios', weather: 'Clima', deepDive: 'En Profundidad' },
    facilities: {
      title: 'Servicios prácticos y aprovisionamiento',
      intro:
        'El Cañón del Atuel es un recorrido lineal sobre la RP173: se parte desde la ciudad de San Rafael, se pasa por una serie de miradores y áreas de servicio junto a los embalses, y se termina cerca de El Nihuil. **Los servicios están distribuidos en puntos a lo largo de la ruta**, y la preparación previa determina en gran medida la experiencia. Abajo se detalla cada tipo de servicio.',
      notice:
        'Este sitio es un proyecto educativo independiente y sin fines de lucro. La información siguiente es una **descripción neutral por tipo de servicio**: no recomendamos ni respaldamos ningún comercio, marca o precio concreto. La disponibilidad real debe confirmarse en el lugar y en fuentes oficiales.',
      items: [
        {
          icon: '🚻',
          name: 'Baños públicos',
          where: 'Miradores principales y áreas de servicio',
          text: 'Hay baños públicos en los miradores principales, las áreas recreativas de los embalses y los puntos de comida, generalmente mantenidos por cada área de servicio. Los tramos más profundos y los miradores al borde del acantilado no suelen tener baños fijos: conviene ir antes de salir de San Rafael o de El Nihuil.',
        },
        {
          icon: '🅿️',
          name: 'Estacionamiento',
          where: 'Banquinas en los miradores',
          text: 'La mayoría de los miradores tiene banquinas gratuitas de capacidad limitada. En temporada alta y fines de semana largos se llenan por la mañana. No estacionar en banquinas de emergencia, curvas ni tramos al borde del acantilado; ómnibus y motorhomes deben usar las áreas más amplias de los embalses.',
        },
        {
          icon: '🍽️',
          name: 'Gastronomía',
          where: 'Áreas de embalse y ciudad de San Rafael',
          text: 'Hay puntos de comida en las áreas recreativas de los embalses y en algunos miradores, con categorías habituales como parrilla, comidas ligeras, café y bebidas frías; la oferta y los horarios varían mucho según la temporada. San Rafael ofrece la mayor variedad: conviene comer en la ciudad o llevar provisiones y agua.',
        },
        {
          icon: '🛏️',
          name: 'Alojamiento',
          where: 'Ciudad de San Rafael y alrededores de embalses',
          text: 'No hay alojamiento dentro del cañón. La oferta se concentra en la ciudad de San Rafael (hoteles, hostels y hospedajes), con opciones de campamento y cabañas cerca de los embalses y de El Nihuil. En temporada alta, reservar con anticipación.',
        },
        {
          icon: '🛒',
          name: 'Comercios y suministros',
          where: 'San Rafael, El Nihuil',
          text: 'Supermercados, kioscos y farmacias se concentran en la ciudad de San Rafael; El Nihuil y algunos embalses tienen comercios pequeños para agua, hielo y snacks. No hay grandes comercios a lo largo del cañón: haga las compras antes de entrar.',
        },
        {
          icon: '⛽',
          name: 'Combustible y carga eléctrica',
          where: 'Mayor densidad en San Rafael',
          text: 'Las estaciones de servicio se concentran en la ciudad de San Rafael, con algunas cerca de El Nihuil y de ciertos embalses; sobre la ruta del cañón casi no hay. La carga pública para vehículos eléctricos se concentra en San Rafael: dentro del cañón no hay cargadores públicos, planifique la autonomía de ida y vuelta.',
        },
        {
          icon: '💧',
          name: 'Agua potable y salud',
          where: 'Ciudad de San Rafael',
          text: 'Los miradores no tienen agua potable. El clima de precordillera es seco y con sol fuerte: lleve 2–3 litros de agua por persona y por día. Hospitales, clínicas y farmacias están en San Rafael; no hay puesto sanitario dentro del cañón, lleve medicación habitual y protección solar.',
        },
        {
          icon: '📶',
          name: 'Señal de celular',
          where: 'Inestable dentro del cañón',
          text: 'La señal es intermitente dentro del cañón, y varios tramos profundos y el lado posterior de los embalses prácticamente no tienen cobertura. Descargue mapas offline, viaje acompañado y comparta su itinerario. La señal mejora en las áreas de servicio de los embalses y en algunos miradores.',
        },
      ],
      tipsTitle: 'Lista de preparación previa',
      tips: [
        'Cargue combustible, retire efectivo, compre y use baños en San Rafael antes de entrar al cañón.',
        'En temporada alta y fines de semana largos, salga antes de las 09:00 para evitar picos de estacionamiento y el sol del mediodía.',
        'Lleve agua, protector solar, gorra, campera cortavientos y su medicación habitual.',
        'El cañón es un ecosistema sensible: retire toda la basura y no recolecte rocas ni plantas.',
        'Reserve tiempo para el regreso y evite conducir de noche por las curvas al borde del acantilado de la RP173.',
      ],
    },
    weather: {
      title: 'Clima en vivo y pronóstico de 7 días',
      intro:
        'El Cañón del Atuel está en la precordillera andina, a unos 750 m, con clima árido continental: **gran amplitud térmica entre día y noche, sol intenso y precipitaciones escasas y concentradas**. El clima condiciona directamente el avistamiento, el rafting y la conducción: consulte el pronóstico antes de salir.',
      nowLabel: 'Condiciones actuales en el cañón',
      todayLabel: 'Hoy',
      alertsTitle: 'Avisos de riesgo',
      noAlerts: 'Sin avisos meteorológicos importantes: puede organizar el día con normalidad.',
      outfitTitle: 'Qué ponerse',
      activityTitle: 'Qué hacer',
      itemsTitle: 'Qué llevar',
      forecastTitle: 'Pronóstico de 7 días',
      updatedLabel: 'Actualizado',
      dataNote: 'Generado para las coordenadas del cañón (-34.84, -68.52) en hora local argentina. El clima de montaña cambia rápido: confirme el pronóstico más reciente antes de partir.',
      labels: {
        temp: 'Temp.',
        feels: 'Sensación',
        humidity: 'Humedad',
        wind: 'Viento',
        gust: 'Ráfagas',
        level: 'Bft',
        precip: 'Precip.',
        uv: 'UV',
        sunrise: 'Amanecer',
        sunset: 'Atardecer',
        prob: 'Prob. de lluvia',
      },
      windDirs: { n: 'N', ne: 'NE', e: 'E', se: 'SE', s: 'S', sw: 'SO', w: 'O', nw: 'NO' },
      conditions: {
        clear: 'Despejado',
        mainlyClear: 'Mayormente despejado',
        partlyCloudy: 'Parcialmente nublado',
        overcast: 'Nublado',
        fog: 'Niebla',
        drizzle: 'Llovizna',
        rain: 'Lluvia',
        heavyRain: 'Lluvia fuerte',
        snow: 'Nieve',
        showers: 'Chaparrones',
        snowShowers: 'Nevadas intermitentes',
        thunder: 'Tormenta eléctrica',
        unknown: 'Desconocido',
      },
      messages: {
        alerts: {
          alertThunder: 'Se pronostican tormentas eléctricas: manténgase lejos de barandas de miradores, orillas de embalses y árboles aislados; el rafting y el kayak deben cancelarse o reprogramarse.',
          alertFlood: 'Se esperan unos {mm} mm de lluvia en tres días. Riesgo de crecida súbita en el cauce y en los tramos bajos del cañón: no ingrese al río ni a las playas de piedra y dé la vuelta si el agua cubre la ruta.',
          alertHeavyRain: 'Lluvia fuerte: evite los tramos bajos del cañón y las playas de piedra. Las embarcaciones y el teleférico pueden suspenderse y hay riesgo de derrumbes junto a las paredes de roca.',
          alertWind: 'El viento puede alcanzar fuerza {level}. En los tramos al borde del acantilado el viento lateral se siente: reduzca la velocidad y sostenga el volante con ambas manos. En los embalses se forman olas y las embarcaciones pueden no operar.',
          alertHeat: 'Máximas cercanas a {t}°C y casi sin sombra en las paredes de roca: reduzca el tiempo al aire libre y cuide el golpe de calor y la deshidratación.',
          alertFrost: 'Mínimas cercanas a {t}°C con posibles heladas al amanecer. El piso del cañón se vuelve resbaladizo: lleve abrigo y conduzca con cuidado.',
          alertUV: 'Índice UV cercano a {uv} (extremo). A esta altura y con poca sombra la piel se quema rápido: la protección solar es imprescindible.',
          alertSnow: 'Puede nevar, con hielo o nieve en los tramos más altos. Evite ir salvo que sea necesario y lleve equipo de tracción si conduce.',
          alertFog: 'Visibilidad reducida: no es buen momento para miradores altos. En rutas al borde del acantilado use luces antiniebla y mantenga la distancia.',
          alertDust: 'Aire muy seco y con viento: puede haber polvo en suspensión. Proteja los ojos y el equipo fotográfico y mantenga las ventanillas cerradas.',
          alertWindModerate: 'Ráfagas de hasta fuerza {level}. Se siente fuerte en miradores y orillas de embalses; los sombreros de ala ancha y las faldas livianas se vuelan.',
        },
        outfit: {
          outfitHot: 'Calor: use ropa liviana, transpirable y de colores claros, y descanse a la sombra o en el auto al mediodía.',
          outfitWarm: 'Temperaturas cálidas: alcanza una remera o manga larga liviana; lleve una campera fina para la mañana.',
          outfitMild: 'Temperaturas agradables: manga larga con una campera liviana es lo más adecuado.',
          outfitCool: 'Algo fresco: se recomienda una campera abrigada; en los miradores al amanecer hace más frío.',
          outfitCold: 'Frío: use campera gruesa o campera de pluma y algo que corte el viento.',
          outfitLayers: 'La amplitud térmica es de unos {range}°C. Vista por capas para poder agregar o quitar ropa con facilidad.',
          outfitWind: 'Viento fuerte: use campera cortaviento y evite faldas largas sueltas y sombreros de ala ancha.',
          outfitRain: 'Puede llover: use campera impermeable o ropa de secado rápido y evite faldas largas y calzado claro.',
          outfitWindRain: 'Viento y lluvia juntos: use campera impermeable y cortaviento y evite faldas sueltas y sombreros que se vuelan.',
          outfitSun: 'UV alto: use camiseta de manga larga de protección solar o cubra cuello y brazos con un pañuelo liviano.',
        },
        activity: {
          actThunder: 'Tormentas eléctricas: no se recomienda actividad al aire libre. Aléjese de barandas de miradores, orillas de embalses y árboles aislados; el rafting y el kayak seguramente estén cerrados.',
          actFlood: 'Lluvia concentrada: hay riesgo de crecida súbita en los tramos bajos y el cauce. No ingrese al río; las actividades al aire libre pueden suspenderse, priorice opciones bajo techo o en la ciudad.',
          actRain: 'Llovizna: las paredes de roca y los senderos se vuelven resbaladizos y los miradores pierden atractivo. Conduzca despacio y atención a los derrumbes.',
          actWindStrong: 'El viento puede alcanzar fuerza {level}: hay olas en los embalses y es probable que embarcaciones y actividades acuáticas se suspendan. No se detenga a fotografiar en los tramos al borde del acantilado.',
          actWind: 'Ráfagas de hasta fuerza {level}: se siente fuerte en miradores y orillas de embalses. Acorte las paradas y sea prudente con el dron.',
          actUV: 'Índice UV cercano a {uv}: evite el sol más fuerte entre las 11:00 y las 16:00; al mediodía las paredes de roca casi no dan sombra.',
          actHeat: 'Máximas cercanas a {t}°C y poca sombra en el cañón: salga temprano o al atardecer y reduzca la actividad al mediodía.',
          actCold: 'Mínimas cercanas a {t}°C al amanecer: abríguese y atención a la escarcha en pasarelas y superficies de roca.',
          actFog: 'Mala visibilidad: no conviene subir a miradores altos ni buscar fotos de larga distancia, y la conducción al borde del acantilado exige máxima atención.',
          actDust: 'Puede haber polvo en suspensión: reduzca el tiempo al aire libre, proteja los ojos y cubra el equipo fotográfico.',
          actSnow: 'Nieve: los tramos más altos pueden estar con hielo o nieve. Evite ir salvo que sea necesario y calcule más tiempo para el regreso.',
          actWater: 'Los embalses se alimentan de deshielo andino y el agua se mantiene fría todo el año. Evalúe antes de entrar y nunca nade donde no haya guardavidas.',
          actClear: 'Despejado y agradable: ideal para avistamiento, conducción y fotografía. La luz lateral del amanecer y el atardecer es la mejor para las capas de roca.',
          actCloudy: 'Más nubes pero sin sol fuerte: la luz suave es ideal para caminatas largas y para fotografiar el detalle de las rocas.',
        },
        items: {
          itemWater: 'Agua potable suficiente',
          itemSunscreen: 'Protector solar alto',
          itemSunglasses: 'Lentes de sol',
          itemHat: 'Gorra o sombrero',
          itemRaincoat: 'Impermeable (evite paraguas largo con viento)',
          itemUmbrella: 'Paraguas plegable',
          itemFolding: 'Paraguas plegable (por si acaso)',
          itemJacket: 'Campera abrigada',
          itemScarf: 'Bufanda / guantes',
          itemRepellent: 'Repelente de insectos',
          itemMask: 'Barbijo (polvo / niebla)',
          itemShoes: 'Calzado de trekking con agarre',
          itemOffline: 'Mapa sin conexión + batería portátil',
        },
      },
      uvLevels: ['Bajo', 'Moderado', 'Alto', 'Muy alto', 'Extremo'],
      loading: 'Actualizando datos del clima…',
      unavailable: 'Los datos del clima no están disponibles por el momento; guíese por las condiciones del lugar y los pronósticos oficiales.',
    },
    deepDive: {
      title: 'En profundidad: entender el Cañón del Atuel',
      intro:
        'El Cañón del Atuel es más que un paisaje. Es un corredor de roca levantado por la orogenia andina y tallado por un río, y también una crónica local del agua, la sequía y la civilización del oasis. Estos cinco temas le ayudarán a leerlo antes de llegar.',
      blocks: [
        {
          icon: '⛰️',
          title: 'Geología: una grieta en la precordillera',
          paragraphs: [
            'El cañón se ubica en la **Precordillera**, formada por rocas sedimentarias y volcánicas antiguas. Estos estratos se depositaron y compactaron durante el Mesozoico y el Cenozoico, y luego fueron elevados en bloque por la orogenia andina, formando los altos y pliegues que hoy se ven a ambos lados.',
            'Tras el levantamiento, el río Atuel siguió incidiendo a lo largo de fallas. Con vegetación escasa de zona árida y meteorización física intensa, la erosión encontró poca resistencia y terminó cortando un **meandro encajado** de decenas a más de cien metros de profundidad, con paredes casi verticales.',
            'En las paredes se ven estratos en rojo ocre, verde grisáceo y amarillo terroso: un registro de ambientes de depositación cambiantes. La **meteorización diferencial** de esos estratos labró rocas en forma de hongo, pilares y ventanas, y es exactamente lo que formó rasgos como El Laberinto.',
          ],
          facts: [
            { label: 'Geoforma', value: 'Meandro encajado / cañón en caja' },
            { label: 'Litología', value: 'Sedimentarias y volcánicas intercaladas' },
            { label: 'Altitud', value: 'aprox. 750 m' },
          ],
        },
        {
          icon: '💧',
          title: 'Hidrología y obra hidráulica: cinco embalses en cascada',
          paragraphs: [
            'El río Atuel nace en las altas montañas del oeste de Mendoza, fluye hacia el sudeste por la precordillera y finalmente se integra al sistema del río Mendoza. Es uno de los pocos **ríos permanentes** de este corredor árido, y por eso la fuente clave del oasis agrícola y de la hidroelectricidad.',
            'Desde mediados del siglo XX se construyeron cinco embalses en cascada: **Agua del Toro, Los Reyunos, Valle Grande, Tierras Blancas y El Nihuil**. Generan energía, riegan y regulan el caudal, a la vez que crean una cadena de lagos turquesa dentro del cañón.',
            'El paisaje emblemático de hoy —el contraste entre acantilados ocres y agua turquesa— es producto conjunto de la **incisión natural y la ingeniería hidráulica**. Los esquemas de erogación también modifican el nivel aguas abajo: confirme el estado del agua del día antes de vadear o hacer rafting.',
          ],
          facts: [
            { label: 'Embalses', value: '5 (Agua del Toro–El Nihuil)' },
            { label: 'Funciones', value: 'Energía, riego, regulación' },
            { label: 'Recarga', value: 'Deshielo y lluvias' },
          ],
        },
        {
          icon: '📜',
          title: 'Historia humana: del «agua como una flecha» a hoy',
          paragraphs: [
            'Antes de la colonización europea, los **huarpes** cultivaban y pastoreaban en esta tierra árida. En las tradiciones orales ligadas al río, el Atuel se describe como «agua que corre como una flecha», señal de su lugar central en la vida local.',
            'Entre fines del siglo XIX y comienzos del XX, la inmigración y la expansión del oasis agrícola fueron ingenierizando el río: canales, centrales hidroeléctricas y embalses se sucedieron, cambiando de fondo el ritmo hidrológico y la apariencia del cañón.',
            'Al ser un **río que cruza provincias**, la asignación de caudales, el caudal ecológico y la coordinación de cuenca deben acordarse entre la autoridad de cuenca y las partes involucradas. Entender esto es la clave para entender por qué hoy el cañón muestra una cadena de lagos y no solo un río.',
          ],
          facts: [
            { label: 'Pueblos originarios', value: 'Huarpes' },
            { label: 'Inicio de obras', value: 'Fines del XIX – comienzos del XX' },
            { label: 'Cuenca', value: 'Interprovincial, coordinada' },
          ],
        },
        {
          icon: '🌿',
          title: 'Ecología: la línea de vida de una precordillera árida',
          paragraphs: [
            'El cañón está en la transición entre el **desierto del Monte** y el **matorral de precordillera**. La vegetación dominante son arbustos tolerantes a la sequía, cactáceas y pastos ralos. Parece desierto, pero está muy especializada: raíces profundas, hojas pequeñas y superficies cerosas son adaptaciones al sol intenso y a la falta de agua.',
            'Los embalses y tramos de río funcionan como un **corredor de aves acuáticas** dentro de esa matriz árida. En Valle Grande y El Nihuil son comunes patos, gaviotas, garzas y rapaces planeando; el matorral de las orillas refugia aves pequeñas y reptiles.',
            'Este ecosistema tiene resiliencia limitada: **una vez rota la costra biológica del suelo, la recuperación puede tardar décadas**. Salir del sendero, pisar el matorral o recolectar rocas y plantas deja marcas difíciles de revertir.',
          ],
          facts: [
            { label: 'Vegetación', value: 'Desierto del Monte y matorral' },
            { label: 'Hábitat clave', value: 'Embalses y humedales ribereños' },
            { label: 'Riesgos', value: 'Pisoteo de costra, colecta de rocas' },
          ],
        },
        {
          icon: '🤝',
          title: 'Visita responsable: minimizar el impacto',
          paragraphs: [
            'No hay alambrados ni personal abundante a lo largo del cañón. Eso significa que **la mayor parte de la protección depende de la conducta del visitante**. Permanecer en los caminos y miradores existentes es la forma más simple y eficaz de cuidar el lugar.',
            'Lleve toda la basura de vuelta; no mueva ni retire rocas, fósiles o plantas; no alimente a la fauna; y mantenga silencio en las orillas de los embalses para no perturbar la nidificación.',
            'Dentro del cañón no hay puesto sanitario y la señal es inestable. **Viaje acompañado, comparta su itinerario, lleve agua y protección solar**, y evite rafting, natación y miradores al borde durante tormentas o vientos fuertes.',
          ],
          facts: [
            { label: 'Principio central', value: 'Quedarse en el sendero, sin dejar rastro' },
            { label: 'No permitido', value: 'Colectar rocas/plantas, alimentar fauna' },
            { label: 'Seguridad', value: 'Ir acompañado, mirar agua y clima' },
          ],
        },
      ],
    },
  },

  it: {
    nav: { facilities: 'Servizi', weather: 'Meteo', deepDive: 'Approfondimenti' },
    facilities: {
      title: 'Servizi pratici e approvvigionamento',
      intro:
        'Il Cañón del Atuel è un percorso lineare lungo la RP173: si parte dalla città di San Rafael, si attraversano miradores e aree di servizio presso gli invasi, e si arriva vicino a El Nihuil. **I servizi sono distribuiti a punti lungo la strada** e la preparazione preventiva determina in gran parte l’esperienza. Qui sotto ogni tipo di servizio è descritto singolarmente.',
      notice:
        'Questo sito è un progetto educativo indipendente e senza scopo di lucro. Le informazioni seguenti sono una **descrizione neutrale per tipo di servizio**: non consigliamo né sponsorizziamo alcun esercizio, marchio o prezzo specifico. La disponibilità reale va verificata sul posto e presso fonti ufficiali.',
      items: [
        {
          icon: '🚻',
          name: 'Bagni pubblici',
          where: 'Miradores principali e aree di servizio',
          text: 'Ci sono bagni pubblici nei miradores principali, nelle aree ricreative degli invasi e nei punti ristoro, di norma mantenuti dall’area di servizio. I tratti più interni e i miradores a picco non hanno bagni fissi: conviene andare prima di lasciare San Rafael o El Nihuil.',
        },
        {
          icon: '🅿️',
          name: 'Parcheggio',
          where: 'Piazzole lungo la strada ai miradores',
          text: 'La maggior parte dei miradores ha piazzole gratuite di capacità limitata. In alta stagione e nei fine settimana lunghi si riempiono al mattino. Non sostare su corsie di emergenza, curve o tratti a picco; bus e camper devono usare le aree più ampie degli invasi.',
        },
        {
          icon: '🍽️',
          name: 'Ristorazione',
          where: 'Aree degli invasi e città di San Rafael',
          text: 'Ci sono punti ristoro nelle aree ricreative degli invasi e in alcuni miradores, con categorie abituali come griglia, piatti leggeri, caffè e bibite fredde; l’offerta e gli orari variano molto con la stagione. San Rafael offre la scelta più ampia: conviene mangiare in città o portare provviste e acqua.',
        },
        {
          icon: '🛏️',
          name: 'Alloggio',
          where: 'Città di San Rafael e dintorni degli invasi',
          text: 'Non ci sono alloggi dentro il canyon. L’offerta si concentra nella città di San Rafael (hotel, ostelli e affittacamere), con opzioni di campeggio e cabin vicino agli invasi e a El Nihuil. In alta stagione prenotare in anticipo.',
        },
        {
          icon: '🛒',
          name: 'Negozi e provviste',
          where: 'San Rafael, El Nihuil',
          text: 'Supermercati, minimarket e farmacie si concentrano nella città di San Rafael; El Nihuil e alcuni invasi hanno piccoli negozi per acqua, ghiaccio e snack. Lungo il canyon non ci sono grandi negozi: fai la spesa prima di entrare.',
        },
        {
          icon: '⛽',
          name: 'Carburante e ricarica elettrica',
          where: 'Massima densità a San Rafael',
          text: 'I distributori sono più densi nella città di San Rafael, con alcuni vicino a El Nihuil e ad alcuni invasi; lungo la strada del canyon quasi non ce ne sono. La ricarica pubblica per veicoli elettrici si concentra a San Rafael: dentro il canyon non ci sono colonnine pubbliche, pianifica l’autonomia andata e ritorno.',
        },
        {
          icon: '💧',
          name: 'Acqua potabile e salute',
          where: 'Città di San Rafael',
          text: 'I miradores non hanno acqua potabile. Il clima di precordillera è secco e con sole forte: porta 2–3 litri di acqua per persona al giorno. Ospedali, cliniche e farmacie sono a San Rafael; dentro il canyon non ci sono presidi sanitari, porta i farmaci abituali e la protezione solare.',
        },
        {
          icon: '📶',
          name: 'Segnale cellulare',
          where: 'Instabile dentro il canyon',
          text: 'Il segnale è intermittente dentro il canyon e diversi tratti profondi e il lato posteriore degli invasi sono praticamente scoperti. Scarica mappe offline, viaggia in compagnia e condividi l’itinerario. Il segnale migliora nelle aree di servizio degli invasi e in alcuni miradores.',
        },
      ],
      tipsTitle: 'Checklist prima della partenza',
      tips: [
        'Fai rifornimento, preleva contanti, fai la spesa e usa i bagni a San Rafael prima di entrare nel canyon.',
        'In alta stagione e nei fine settimana lunghi parti prima delle 09:00 per evitare il picco di parcheggio e il sole di mezzogiorno.',
        'Porta acqua, crema solare, cappello, giacca antivento e i farmaci abituali.',
        'Il canyon è un ecosistema sensibile: porta via tutti i rifiuti e non raccogliere rocce né piante.',
        'Prevedi tempo per il ritorno ed evita di guidare di notte sulle curve a picco della RP173.',
      ],
    },
    weather: {
      title: 'Meteo in tempo reale e previsioni a 7 giorni',
      intro:
        'Il Cañón del Atuel si trova nella precordillera andina a circa 750 m, in clima arido continentale: **forte escursione termica tra giorno e notte, sole intenso e piogge scarse e concentrate**. Il meteo condiziona direttamente visite, rafting e guida: controlla le previsioni prima di partire.',
      nowLabel: 'Condizioni attuali nel canyon',
      todayLabel: 'Oggi',
      alertsTitle: 'Avvisi di rischio',
      noAlerts: 'Nessun avviso meteo rilevante: puoi organizzare la giornata normalmente.',
      outfitTitle: 'Cosa indossare',
      activityTitle: 'Cosa fare',
      itemsTitle: 'Cosa portare',
      forecastTitle: 'Previsioni a 7 giorni',
      updatedLabel: 'Aggiornato',
      dataNote: 'Generato per le coordinate del canyon (-34.84, -68.52) in ora locale argentina. In montagna il meteo cambia rapidamente: verifica le previsioni più recenti prima di partire.',
      labels: {
        temp: 'Temp.',
        feels: 'Percepita',
        humidity: 'Umidità',
        wind: 'Vento',
        gust: 'Raffiche',
        level: 'Bft',
        precip: 'Prec.',
        uv: 'UV',
        sunrise: 'Alba',
        sunset: 'Tramonto',
        prob: 'Prob. pioggia',
      },
      windDirs: { n: 'N', ne: 'NE', e: 'E', se: 'SE', s: 'S', sw: 'SO', w: 'O', nw: 'NO' },
      conditions: {
        clear: 'Sereno',
        mainlyClear: 'Prevalentemente sereno',
        partlyCloudy: 'Parzialmente nuvoloso',
        overcast: 'Coperto',
        fog: 'Nebbia',
        drizzle: 'Pioviggine',
        rain: 'Pioggia',
        heavyRain: 'Pioggia intensa',
        snow: 'Neve',
        showers: 'Rovesci',
        snowShowers: 'Rovesci di neve',
        thunder: 'Temporale',
        unknown: 'Sconosciuto',
      },
      messages: {
        alerts: {
          alertThunder: 'Previsti temporali: stare lontani da ringhiere dei miradores, rive degli invasi e alberi isolati; rafting e kayak vanno annullati o riprogrammati.',
          alertFlood: 'Attesi circa {mm} mm di pioggia in tre giorni. Rischio di piena improvvisa nell’alveo e nei tratti bassi del canyon: non entrare nel letto del fiume né sulle spiagge di ghiaia e tornare indietro se l’acqua copre la strada.',
          alertHeavyRain: 'Pioggia intensa: evitare i tratti bassi del canyon e le spiagge di ghiaia. Le imbarcazioni e la funivia possono sospendere il servizio e lungo le pareti rocciose sono possibili cadute massi.',
          alertWind: 'Il vento può raggiungere forza {level}. Nei tratti a picco si sente il vento laterale: ridurre la velocità e tenere entrambe le mani sul volante. Negli invasi si alzano onde e le imbarcazioni possono restare a terra.',
          alertHeat: 'Massime intorno a {t}°C e quasi nessuna ombra sulle pareti rocciose: ridurre il tempo all’aperto e attenzione a colpi di calore e disidratazione.',
          alertFrost: 'Minime intorno a {t}°C con possibile brina al mattino. Il fondo del canyon diventa scivoloso: portare abbigliamento caldo e guidare con prudenza.',
          alertUV: 'Indice UV intorno a {uv} (estremo). A questa quota e con poca ombra la pelle si scotta in fretta: la protezione solare è indispensabile.',
          alertSnow: 'Possibile neve, con ghiaccio o neve nei tratti più alti. Evitare se non necessario e portare catene o ramponi se si guida.',
          alertFog: 'Visibilità scarsa: non è il momento per i miradores in quota. Sui tratti a picco usare i fendinebbia e mantenere la distanza.',
          alertDust: 'Aria molto secca e ventosa: possibile polvere sollevata. Proteggere occhi e attrezzatura fotografica e tenere i finestrini chiusi.',
          alertWindModerate: 'Raffiche fino a forza {level}. Si sente bene su miradores e rive degli invasi; cappelli a tesa larga e gonne leggere volano via.',
        },
        outfit: {
          outfitHot: 'Caldo: indossare capi leggeri, traspiranti e chiari e riposare all’ombra o in auto a mezzogiorno.',
          outfitWarm: 'Temperature miti: basta una maglietta o maniche lunghe leggere; tieni una giacca sottile per il mattino.',
          outfitMild: 'Temperature piacevoli: maniche lunghe con una giacca leggera sono la scelta migliore.',
          outfitCool: 'Piuttosto fresco: consigliata una giacca calda; ai miradores all’alba si sente più freddo.',
          outfitCold: 'Freddo: usare una giacca pesante o un piumino e qualcosa che tagli il vento.',
          outfitLayers: 'L’escursione termica è di circa {range}°C. Vestirsi a strati per aggiungere o togliere capi facilmente.',
          outfitWind: 'Vento forte: usare una giacca antivento ed evitare gonne lunghe e cappelli a tesa larga.',
          outfitRain: 'Possibile pioggia: usare una giacca impermeabile o capi ad asciugatura rapida ed evitare gonne lunghe e scarpe chiare.',
          outfitWindRain: 'Vento e pioggia insieme: usare una giacca impermeabile e antivento ed evitare gonne larghe e cappelli che volano via.',
          outfitSun: 'UV alto: usare una maglia a maniche lunghe anti-UV o coprire collo e braccia con un foulard leggero.',
        },
        activity: {
          actThunder: 'Temporali: attività all’aperto sconsigliate. Stare lontani da ringhiere dei miradores, rive degli invasi e alberi isolati; rafting e kayak saranno probabilmente chiusi.',
          actFlood: 'Piogge concentrate: rischio di piena improvvisa nei tratti bassi e nell’alveo. Non entrare nel letto del fiume; le attività all’aperto possono chiudere, meglio optare per soluzioni al coperto o in città.',
          actRain: 'Pioviggine: pareti rocciose e sentieri diventano scivolosi e i miradores perdono fascino. Guidare piano e attenzione alle cadute massi.',
          actWindStrong: 'Il vento può raggiungere forza {level}: si alzano onde negli invasi e imbarcazioni e attività acquatiche saranno probabilmente sospese. Non fermarsi a fotografare sui tratti a picco.',
          actWind: 'Raffiche fino a forza {level}: si sente forte su miradores e rive degli invasi. Accorciare le soste e prudenza con il drone.',
          actUV: 'Indice UV intorno a {uv}: evitare il sole più forte tra le 11:00 e le 16:00; a mezzogiorno le pareti rocciose non offrono ombra.',
          actHeat: 'Massime intorno a {t}°C e poca ombra nel canyon: uscire presto o al tramonto e ridurre l’attività a mezzogiorno.',
          actCold: 'Minime intorno a {t}°C all’alba: coprirsi bene e attenzione alla brina su passerelle e superfici rocciose.',
          actFog: 'Visibilità scarsa: non adatta ai miradores in quota né alle foto a lunga distanza, e la guida sui tratti a picco richiede massima attenzione.',
          actDust: 'Possibile polvere sollevata: ridurre il tempo all’aperto, proteggere gli occhi e coprire l’attrezzatura fotografica.',
          actSnow: 'Neve: i tratti più alti possono avere ghiaccio o neve. Evitare se non necessario e calcolare più tempo per il ritorno.',
          actWater: 'Gli invasi sono alimentati dal disgelo andino e l’acqua resta fredda tutto l’anno. Valutare prima di entrare e non nuotare dove non c’è assistenza.',
          actClear: 'Sereno e piacevole: ideale per visite, guida e fotografia. La luce radente di alba e tramonto è la migliore per gli strati di roccia.',
          actCloudy: 'Più nuvole ma senza sole forte: la luce morbida è ideale per passeggiate lunghe e per fotografare i dettagli delle rocce.',
        },
        items: {
          itemWater: 'Acqua potabile a sufficienza',
          itemSunscreen: 'Crema solare ad alta protezione',
          itemSunglasses: 'Occhiali da sole',
          itemHat: 'Cappello o visiera',
          itemRaincoat: 'Giacca antipioggia (no ombrelli lunghi col vento)',
          itemUmbrella: 'Ombrello pieghevole',
          itemFolding: 'Ombrello pieghevole (per ogni evenienza)',
          itemJacket: 'Giacca calda',
          itemScarf: 'Sciarpa / guanti',
          itemRepellent: 'Repellente per insetti',
          itemMask: 'Mascherina (polvere / nebbia)',
          itemShoes: 'Scarpe da trekking con grip',
          itemOffline: 'Mappa offline + power bank',
        },
      },
      uvLevels: ['Basso', 'Moderato', 'Alto', 'Molto alto', 'Estremo'],
      loading: 'Aggiornamento dati meteo…',
      unavailable: 'I dati meteo non sono al momento disponibili; fai riferimento alle condizioni sul posto e alle previsioni ufficiali.',
    },
    deepDive: {
      title: 'Approfondimenti: capire il Cañón del Atuel',
      intro:
        'Il Cañón del Atuel è più di un panorama. È un corridoio di roccia sollevato dall’orogenesi andina e inciso da un fiume, e anche una cronaca locale di acqua, siccità e civiltà dell’oasi. Questi cinque temi ti aiutano a leggerlo prima di arrivare.',
      blocks: [
        {
          icon: '⛰️',
          title: 'Geologia: una frattura nella precordillera',
          paragraphs: [
            'Il canyon si trova nella **Precordillera**, formata da antiche rocce sedimentarie e vulcaniche. Questi strati si sono depositati e compattati tra Mesozoico e Cenozoico, poi sono stati sollevati in blocco dall’orogenesi andina, formando gli alti e le pieghe visibili oggi ai due lati.',
            'Dopo il sollevamento, il fiume Atuel ha continuato a incidere lungo le faglie. Con vegetazione rada delle zone aride e forte alterazione fisica, l’erosione ha incontrato poca resistenza e ha scavato un **meandro incassato** profondo da decine a oltre cento metri, con pareti quasi verticali.',
            'Sulle pareti si leggono strati in rosso ocra, verde grigio e giallo terra: la testimonianza di ambienti di deposizione diversi. L’**alterazione differenziale** di quegli strati ha scolpito rocce a forma di fungo, pilastri e finestre, ed è esattamente ciò che ha formato tratti come El Laberinto.',
          ],
          facts: [
            { label: 'Forma', value: 'Meandro incassato / canyon a cassa' },
            { label: 'Litologia', value: 'Sedimentarie e vulcaniche alternate' },
            { label: 'Altitudine', value: 'circa 750 m' },
          ],
        },
        {
          icon: '💧',
          title: 'Idrologia e opere idrauliche: cinque invasi a cascata',
          paragraphs: [
            'Il fiume Atuel nasce nelle alte montagne del Mendoza occidentale, scorre verso sud-est attraverso la precordillera e infine si unisce al sistema del fiume Mendoza. È uno dei pochi **fiumi perenni** di questo corridoio arido, quindi la fonte chiave per l’oasi agricola e l’idroelettrico.',
            'Dalla metà del XX secolo sono stati costruiti cinque invasi a cascata: **Agua del Toro, Los Reyunos, Valle Grande, Tierras Blancas ed El Nihuil**. Producono energia, irrigano e regolano la portata, creando una catena di laghi turchesi dentro il canyon.',
            'Il paesaggio simbolo di oggi — il contrasto tra pareti ocra e acqua turchese — è il prodotto congiunto di **incisione naturale e ingegneria idraulica**. Anche i programmi di rilascio modificano il livello a valle: verifica le condizioni dell’acqua prima di guadare o fare rafting.',
          ],
          facts: [
            { label: 'Invasi', value: '5 (Agua del Toro–El Nihuil)' },
            { label: 'Funzioni', value: 'Energia, irrigazione, regolazione' },
            { label: 'Alimentazione', value: 'Scioglimento nivale e piogge' },
          ],
        },
        {
          icon: '📜',
          title: 'Storia umana: dall’«acqua come una freccia» a oggi',
          paragraphs: [
            'Prima della colonizzazione europea, gli **Huarpe** coltivavano e allevavano su questa terra arida. Nelle tradizioni orali legate al fiume, l’Atuel è descritto come «acqua che scorre come una freccia», segno del suo ruolo centrale nella vita locale.',
            'Tra fine XIX e inizio XX secolo, l’immigrazione e l’espansione dell’oasi agricola hanno progressivamente ingegnerizzato il fiume: canali, centrali idroelettriche e invasi si sono succeduti, cambiando radicalmente il ritmo idrologico e l’aspetto del canyon.',
            'Essendo un **fiume che attraversa più province**, l’assegnazione delle portate, il deflusso ecologico e il coordinamento di bacino vanno concordati tra l’autorità di bacino e le parti coinvolte. Capire questo è la chiave per capire perché oggi il canyon mostra una catena di laghi e non solo un fiume.',
          ],
          facts: [
            { label: 'Popoli originari', value: 'Huarpe' },
            { label: 'Inizio delle opere', value: 'Fine XIX – inizio XX secolo' },
            { label: 'Bacino', value: 'Interprovinciale, coordinato' },
          ],
        },
        {
          icon: '🌿',
          title: 'Ecologia: la linea vitale di una precordillera arida',
          paragraphs: [
            'Il canyon si trova nella transizione tra **deserto del Monte** e **macchia di precordillera**. La vegetazione dominante è fatta di arbusti resistenti alla siccità, cactacee ed erbe rade. Sembra deserto, ma è altamente specializzata: radici profonde, foglie piccole e superfici cerose sono adattamenti al sole intenso e alla scarsità d’acqua.',
            'Gli invasi e i tratti di fiume funzionano come un **corridoio per gli uccelli acquatici** dentro questa matrice arida. A Valle Grande e El Nihuil sono comuni anatre, gabbiani, aironi e rapaci in volo; la macchia sulle rive ospita piccoli uccelli e rettili.',
            'Questo ecosistema ha resilienza limitata: **una volta rotta la crosta biologica del suolo, il recupero può richiedere decenni**. Uscire dal sentiero, calpestare la macchia o raccogliere rocce e piante lascia segni difficili da invertire.',
          ],
          facts: [
            { label: 'Vegetazione', value: 'Deserto del Monte e macchia' },
            { label: 'Habitat chiave', value: 'Invasi e zone umide ripariali' },
            { label: 'Rischi', value: 'Calpestio della crosta, raccolta rocce' },
          ],
        },
        {
          icon: '🤝',
          title: 'Visita responsabile: ridurre al minimo l’impatto',
          paragraphs: [
            'Lungo il canyon non ci sono recinzioni né personale diffuso. Questo significa che **gran parte della tutela dipende dal comportamento dei visitatori**. Restare sulle strade e sui miradores esistenti è il modo più semplice ed efficace di prendersene cura.',
            'Porta via tutti i rifiuti; non spostare né asportare rocce, fossili o piante; non dare da mangiare alla fauna; e mantieni il silenzio sulle rive degli invasi per non disturbare la nidificazione.',
            'Dentro il canyon non ci sono presidi sanitari e il segnale è instabile. **Viaggia in compagnia, condividi l’itinerario, porta acqua e protezione solare** ed evita rafting, nuoto e miradores a picco durante temporali o venti forti.',
          ],
          facts: [
            { label: 'Principio base', value: 'Restare sul sentiero, senza lasciare traccia' },
            { label: 'Non consentito', value: 'Raccogliere rocce/piante, nutrire la fauna' },
            { label: 'Sicurezza', value: 'In compagnia, attenzione ad acqua e meteo' },
          ],
        },
      ],
    },
  },
};
