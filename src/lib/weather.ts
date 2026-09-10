// ─────────────────────────────────────────────────────────────
// 天气数据层（同构：服务端组件与浏览器端刷新共用）
// 服务端渲染时通过 getWeather() 读取，带进程内缓存与降级；
// 浏览器端通过 fetchWeather() 静默刷新，保持「实时」。
// ─────────────────────────────────────────────────────────────
import { ATTRACTION } from './site-config';

export type WeatherKey =
  | 'clear'
  | 'mainlyClear'
  | 'partlyCloudy'
  | 'overcast'
  | 'fog'
  | 'drizzle'
  | 'rain'
  | 'heavyRain'
  | 'snow'
  | 'showers'
  | 'snowShowers'
  | 'thunder'
  | 'unknown';

export interface WeatherCurrent {
  temperature: number;
  apparent: number;
  humidity: number;
  precipitation: number;
  windSpeed: number;
  windGust: number;
  windDirection: number;
  cloudCover: number;
  pressure: number;
  weatherCode: number;
  isDay: boolean;
}

export interface WeatherDay {
  date: string;
  code: number;
  tMax: number;
  tMin: number;
  apparentMax: number;
  apparentMin: number;
  precipSum: number;
  precipProb: number;
  precipHours: number;
  windMax: number;
  gustMax: number;
  windDir: number;
  uvMax: number;
  snowfall: number;
  sunrise: string;
  sunset: string;
}

export interface WeatherData {
  current: WeatherCurrent;
  days: WeatherDay[];
  timezone: string;
  fetchedAt: string;
}

const API_ENDPOINT = 'https://api.open-meteo.com/v1/forecast';
const TIMEZONE = 'America/Argentina/Buenos_Aires';
const FORECAST_DAYS = 7;
const REQUEST_TIMEOUT_MS = 8000;

/** 服务端缓存有效期（15 分钟） */
const CACHE_TTL_MS = 15 * 60 * 1000;

let serverCache: { at: number; data: WeatherData } | null = null;

function buildUrl(): string {
  const url = new URL(API_ENDPOINT);
  url.searchParams.set('latitude', String(ATTRACTION.latitude));
  url.searchParams.set('longitude', String(ATTRACTION.longitude));
  url.searchParams.set(
    'current',
    [
      'temperature_2m',
      'relative_humidity_2m',
      'apparent_temperature',
      'is_day',
      'precipitation',
      'weather_code',
      'cloud_cover',
      'pressure_msl',
      'wind_speed_10m',
      'wind_gusts_10m',
      'wind_direction_10m',
    ].join(',')
  );
  url.searchParams.set(
    'daily',
    [
      'weather_code',
      'temperature_2m_max',
      'temperature_2m_min',
      'apparent_temperature_max',
      'apparent_temperature_min',
      'sunrise',
      'sunset',
      'uv_index_max',
      'precipitation_sum',
      'precipitation_probability_max',
      'precipitation_hours',
      'snowfall_sum',
      'wind_speed_10m_max',
      'wind_gusts_10m_max',
      'wind_direction_10m_dominant',
    ].join(',')
  );
  url.searchParams.set('timezone', TIMEZONE);
  url.searchParams.set('forecast_days', String(FORECAST_DAYS));
  url.searchParams.set('wind_speed_unit', 'kmh');
  return url.toString();
}

function num(v: unknown, fallback = 0): number {
  const n = typeof v === 'string' ? Number(v) : (v as number);
  return Number.isFinite(n) ? n : fallback;
}

function normalize(json: any): WeatherData | null {
  const c = json?.current;
  const d = json?.daily;
  if (!c || !d || !Array.isArray(d.time)) return null;

  const days: WeatherDay[] = d.time.map((date: string, i: number) => ({
    date,
    code: num(d.weather_code?.[i]),
    tMax: num(d.temperature_2m_max?.[i]),
    tMin: num(d.temperature_2m_min?.[i]),
    apparentMax: num(d.apparent_temperature_max?.[i]),
    apparentMin: num(d.apparent_temperature_min?.[i]),
    precipSum: num(d.precipitation_sum?.[i]),
    precipProb: num(d.precipitation_probability_max?.[i]),
    precipHours: num(d.precipitation_hours?.[i]),
    windMax: num(d.wind_speed_10m_max?.[i]),
    gustMax: num(d.wind_gusts_10m_max?.[i]),
    windDir: num(d.wind_direction_10m_dominant?.[i]),
    uvMax: num(d.uv_index_max?.[i]),
    snowfall: num(d.snowfall_sum?.[i]),
    sunrise: d.sunrise?.[i] || '',
    sunset: d.sunset?.[i] || '',
  }));

  return {
    current: {
      temperature: num(c.temperature_2m),
      apparent: num(c.apparent_temperature),
      humidity: num(c.relative_humidity_2m),
      precipitation: num(c.precipitation),
      windSpeed: num(c.wind_speed_10m),
      windGust: num(c.wind_gusts_10m),
      windDirection: num(c.wind_direction_10m),
      cloudCover: num(c.cloud_cover),
      pressure: num(c.pressure_msl, 1013),
      weatherCode: num(c.weather_code),
      isDay: c.is_day === 1 || c.is_day === true,
    },
    days,
    timezone: json.timezone || TIMEZONE,
    fetchedAt: new Date().toISOString(),
  };
}

/**
 * 直接请求并归一化天气数据（同构，可在浏览器端调用）。
 * 失败时返回 null，绝不抛出，避免影响页面渲染。
 */
export async function fetchWeather(): Promise<WeatherData | null> {
  try {
    const res = await fetch(buildUrl(), {
      signal:
        typeof AbortSignal !== 'undefined' && 'timeout' in AbortSignal
          ? AbortSignal.timeout(REQUEST_TIMEOUT_MS)
          : undefined,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    return normalize(json);
  } catch (err) {
    console.warn('[weather] request failed:', err instanceof Error ? err.message : err);
    return null;
  }
}

/**
 * 服务端取数：命中缓存直接返回；请求失败时降级返回上一次的缓存值。
 */
export async function getWeather(): Promise<WeatherData | null> {
  const now = Date.now();
  if (serverCache && now - serverCache.at < CACHE_TTL_MS) return serverCache.data;

  const data = await fetchWeather();
  if (data) {
    serverCache = { at: now, data };
    return data;
  }
  return serverCache ? serverCache.data : null;
}

/** WMO 天气代码 → 语义化键名 */
export function weatherKey(code: number): WeatherKey {
  if (code === 0) return 'clear';
  if (code === 1) return 'mainlyClear';
  if (code === 2) return 'partlyCloudy';
  if (code === 3) return 'overcast';
  if (code === 45 || code === 48) return 'fog';
  if (code >= 51 && code <= 57) return 'drizzle';
  if (code === 61 || code === 63 || code === 80 || code === 81) return 'rain';
  if (code === 65 || code === 82) return 'heavyRain';
  if (code === 66 || code === 67) return 'rain';
  if (code === 71 || code === 73 || code === 75 || code === 77) return 'snow';
  if (code === 85 || code === 86) return 'snowShowers';
  if (code === 95 || code === 96 || code === 99) return 'thunder';
  return 'unknown';
}

/** 语义化键名 → 图形符号（无外部资源依赖） */
export function weatherIcon(key: WeatherKey, isDay = true): string {
  switch (key) {
    case 'clear':
      return isDay ? '☀️' : '🌙';
    case 'mainlyClear':
      return isDay ? '🌤️' : '🌙';
    case 'partlyCloudy':
      return '⛅';
    case 'overcast':
      return '☁️';
    case 'fog':
      return '🌫️';
    case 'drizzle':
      return '🌦️';
    case 'rain':
      return '🌧️';
    case 'heavyRain':
      return '🌧️';
    case 'showers':
      return '🌦️';
    case 'snow':
    case 'snowShowers':
      return '🌨️';
    case 'thunder':
      return '⛈️';
    default:
      return '🌡️';
  }
}

/** 风向角度 → 八方位键名 */
export function windDirectionKey(deg: number): string {
  const dirs = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
  const idx = Math.round((((deg % 360) + 360) % 360) / 45) % 8;
  return dirs[idx];
}

/**
 * 蒲福风级（km/h → 0–12 级）。
 * 中文读者习惯用「几级风」判断体感，因此建议文案里统一带上风级。
 */
const BEAUFORT_THRESHOLDS = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];

export function beaufort(kmh: number): number {
  let level = 0;
  for (let i = 0; i < BEAUFORT_THRESHOLDS.length; i++) {
    if (kmh >= BEAUFORT_THRESHOLDS[i]) level = i + 1;
  }
  return level;
}
