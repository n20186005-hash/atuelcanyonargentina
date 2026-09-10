// ─────────────────────────────────────────────────────────────
// 天气智能建议引擎（纯函数，同构）
//
// 设计原则：
//  1. 不输出气象术语，只输出「所以我现在该做什么」；
//  2. 不满足条件的条目直接不生成，绝不堆砌；
//  3. 风险提醒优先级最高，单独置顶；
//  4. 场景按本站地理环境裁剪：山地峡谷（临崖侧风、落石、山洪、雷电）、
//     水库与漂流（雪山融水低温、风浪、项目关停）、干旱区（紫外线、
//     昼夜温差、沙尘、缺水）。
// ─────────────────────────────────────────────────────────────
import { beaufort, weatherKey, type WeatherData } from './weather';

export type AdviceTone = 'danger' | 'caution' | 'info';

export interface AdviceItem {
  key: string;
  tone: AdviceTone;
  /** 文案模板占位符取值 */
  params?: Record<string, string>;
}

export interface SmartAdvice {
  /** 风险提醒（仅在触发时存在，置顶红色） */
  alerts: AdviceItem[];
  /** 出行穿搭 */
  outfit: AdviceItem[];
  /** 游玩安排 */
  activity: AdviceItem[];
  /** 随身物品（只输出键名，图标由 ITEM_ICONS 提供） */
  items: string[];
}

/** 各板块最多展示条数——「多选展示，不是全部显示」 */
const MAX_ALERTS = 3;
const MAX_OUTFIT = 3;
const MAX_ACTIVITY = 3;
const MAX_ITEMS = 8;

/** 随身物品图标（语言无关，不参与 i18n） */
export const ITEM_ICONS: Record<string, string> = {
  itemWater: '💧',
  itemSunscreen: '🧴',
  itemSunglasses: '🕶️',
  itemHat: '🧢',
  itemRaincoat: '🧥',
  itemUmbrella: '🌂',
  itemFolding: '☂️',
  itemJacket: '🧥',
  itemScarf: '🧣',
  itemRepellent: '🦟',
  itemMask: '😷',
  itemShoes: '🥾',
  itemOffline: '🗺️',
};

const RAIN_KEYS = ['drizzle', 'rain', 'heavyRain', 'showers'];
const SNOW_KEYS = ['snow', 'snowShowers'];

export function buildAdvice(data: WeatherData): SmartAdvice {
  const c = data.current;
  const days = data.days;
  const today = days[0];
  const tomorrow = days[1];
  const dayAfter = days[2];

  const key = weatherKey(c.weatherCode);
  const todayCode = today ? today.code : c.weatherCode;

  const tMax = today ? today.tMax : c.temperature;
  const tMin = today ? today.tMin : c.temperature;
  const range = Math.round(tMax - tMin);
  const uv = today ? today.uvMax : 0;
  const prob = today ? today.precipProb : 0;
  const rainSum = today ? today.precipSum : 0;
  const snowSum = today ? today.snowfall : 0;
  const windMax = Math.max(today ? today.windMax : 0, c.windSpeed);
  const gustMax = Math.max(c.windGust, today ? today.gustMax : 0);

  const windLevel = beaufort(windMax);
  const gustLevel = beaufort(gustMax);
  const level = Math.max(windLevel, gustLevel);

  // 未来三日累计降水：用于判断峡谷山洪与低洼积水风险
  const threeDayRain = days.slice(0, 3).reduce((sum, d) => sum + d.precipSum, 0);

  const isRainNow = RAIN_KEYS.includes(key);
  const isHeavyRain = key === 'heavyRain' || rainSum >= 15 || (prob >= 80 && rainSum >= 8);
  const isRain = isRainNow || isHeavyRain || prob >= 60 || rainSum >= 2;
  const isLightRain = isRain && !isHeavyRain;
  const isThunder =
    key === 'thunder' ||
    todayCode >= 95 ||
    (tomorrow ? tomorrow.code >= 95 : false) ||
    (dayAfter ? dayAfter.code >= 95 : false);
  const isSnow =
    SNOW_KEYS.includes(key) ||
    (todayCode >= 71 && todayCode <= 77) ||
    todayCode === 85 ||
    todayCode === 86 ||
    snowSum > 0;
  // 干旱区少雨，起雾多为清晨辐射雾；湿度极高 + 无风 + 无雨时按能见度差处理
  const isFog = key === 'fog' || (c.humidity >= 95 && windMax < 15 && !isRainNow);
  // 干旱区起沙：干燥 + 大风 + 无降水
  const isDust = !isRain && c.humidity <= 25 && windMax >= 39;
  const isClear = key === 'clear' || key === 'mainlyClear';

  // ─── 风险提醒（优先级最高，最多 3 条） ───
  const alerts: AdviceItem[] = [];
  if (isThunder) alerts.push({ key: 'alertThunder', tone: 'danger' });
  if (threeDayRain >= 30 || rainSum >= 20) {
    alerts.push({
      key: 'alertFlood',
      tone: 'danger',
      params: { mm: String(Math.round(Math.max(rainSum, threeDayRain))) },
    });
  } else if (isHeavyRain) {
    alerts.push({ key: 'alertHeavyRain', tone: 'danger' });
  }
  if (level >= 7) alerts.push({ key: 'alertWind', tone: 'danger', params: { level: String(level) } });
  if (tMax >= 35) alerts.push({ key: 'alertHeat', tone: 'danger', params: { t: String(Math.round(tMax)) } });
  if (tMin <= 0) alerts.push({ key: 'alertFrost', tone: 'danger', params: { t: String(Math.round(tMin)) } });
  if (uv >= 11) alerts.push({ key: 'alertUV', tone: 'danger', params: { uv: String(Math.round(uv)) } });
  if (isSnow) alerts.push({ key: 'alertSnow', tone: 'caution' });
  if (isFog) alerts.push({ key: 'alertFog', tone: 'caution' });
  if (isDust) alerts.push({ key: 'alertDust', tone: 'caution' });
  if (level >= 6 && level < 7) {
    alerts.push({ key: 'alertWindModerate', tone: 'caution', params: { level: String(level) } });
  }

  // ─── 出行穿搭 ───
  const outfit: AdviceItem[] = [];
  if (tMax >= 32) outfit.push({ key: 'outfitHot', tone: 'info' });
  else if (tMax >= 24) outfit.push({ key: 'outfitWarm', tone: 'info' });
  else if (tMax >= 15) outfit.push({ key: 'outfitMild', tone: 'info' });
  else if (tMax >= 8) outfit.push({ key: 'outfitCool', tone: 'info' });
  else outfit.push({ key: 'outfitCold', tone: 'info' });

  if (range >= 8) {
    outfit.push({ key: 'outfitLayers', tone: 'info', params: { range: String(range) } });
  }
  if (level >= 6 && isRain) outfit.push({ key: 'outfitWindRain', tone: 'caution' });
  else if (level >= 6) outfit.push({ key: 'outfitWind', tone: 'caution' });
  else if (isRain) outfit.push({ key: 'outfitRain', tone: 'caution' });
  else if (uv >= 6) outfit.push({ key: 'outfitSun', tone: 'info' });

  // ─── 游玩安排 ───
  const activity: AdviceItem[] = [];
  if (isThunder) activity.push({ key: 'actThunder', tone: 'danger' });
  if (threeDayRain >= 30 || rainSum >= 20) activity.push({ key: 'actFlood', tone: 'danger' });
  else if (isLightRain) activity.push({ key: 'actRain', tone: 'caution' });
  if (level >= 7) activity.push({ key: 'actWindStrong', tone: 'danger', params: { level: String(level) } });
  else if (level >= 5) activity.push({ key: 'actWind', tone: 'caution', params: { level: String(level) } });
  if (uv >= 8) activity.push({ key: 'actUV', tone: 'caution', params: { uv: String(Math.round(uv)) } });
  if (tMax >= 32) activity.push({ key: 'actHeat', tone: 'caution', params: { t: String(Math.round(tMax)) } });
  if (tMin <= 2) activity.push({ key: 'actCold', tone: 'info', params: { t: String(Math.round(tMin)) } });
  if (isFog) activity.push({ key: 'actFog', tone: 'caution' });
  if (isDust) activity.push({ key: 'actDust', tone: 'caution' });
  if (isSnow) activity.push({ key: 'actSnow', tone: 'caution' });
  // 水库为安第斯雪山融水，常年低温：仅在天气平静、气温够高时才提示下水安全
  if (!isThunder && !isRain && !isDust && level < 6 && tMax >= 25) {
    activity.push({ key: 'actWater', tone: 'caution' });
  }

  const hasRisk = activity.some((a) => a.tone !== 'info');
  if (!hasRisk && !isRain && activity.length < MAX_ACTIVITY) {
    activity.unshift({ key: isClear ? 'actClear' : 'actCloudy', tone: 'info' });
  }
  if (activity.length === 0) activity.push({ key: 'actCloudy', tone: 'info' });

  // ─── 随身物品 ───
  const items: string[] = [];
  items.push('itemWater');
  if (uv >= 3) items.push('itemSunscreen');
  if (uv >= 5) items.push('itemSunglasses');
  if (uv >= 6 || tMax >= 28) items.push('itemHat');
  if (isHeavyRain) items.push('itemRaincoat');
  else if (isLightRain) items.push('itemUmbrella');
  else if (prob >= 40) items.push('itemFolding');
  if (range >= 8 || tMin <= 12) items.push('itemJacket');
  if (tMin <= 3) items.push('itemScarf');
  if (tMax >= 20 && !isDust) items.push('itemRepellent');
  if (isDust || isFog) items.push('itemMask');
  items.push('itemShoes');
  items.push('itemOffline');

  return {
    alerts: alerts.slice(0, MAX_ALERTS),
    outfit: outfit.slice(0, MAX_OUTFIT),
    activity: activity.slice(0, MAX_ACTIVITY),
    items: items.slice(0, MAX_ITEMS),
  };
}
