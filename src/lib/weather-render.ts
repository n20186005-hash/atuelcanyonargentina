// ─────────────────────────────────────────────────────────────
// 天气面板渲染（纯字符串，服务端与浏览器端共用同一实现，
// 保证首屏 SSR 内容与前端刷新后的 DOM 完全一致）
//
// 面板结构：
//   1. 实况卡片（温度 / 天气 / 今日温差 / 关键指标）
//   2. 风险提醒（仅有预警时渲染，红色置顶）
//   3. 出行穿搭 / 游玩安排 / 随身物品（动态渲染，不满足条件的条目不出现）
//   4. 未来 7 天预报
// ─────────────────────────────────────────────────────────────
import { beaufort, weatherIcon, weatherKey, windDirectionKey, type WeatherData } from './weather';
import { buildAdvice, ITEM_ICONS, type AdviceItem } from './weather-advice';
import type { WeatherPanelContent } from '../i18n/guide';

const TZ = 'America/Argentina/Buenos_Aires';

function esc(value: string): string {
  return value.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c] as string);
}

/** 把模板里的 {param} 替换为实际数值 */
function fill(template: string, params?: Record<string, string>): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (m, k) => (params[k] !== undefined ? params[k] : m));
}

export function uvLevelIndex(uv: number): number {
  if (uv <= 2) return 0;
  if (uv <= 5) return 1;
  if (uv <= 7) return 2;
  if (uv <= 10) return 3;
  return 4;
}

/**
 * 日出 / 日落：接口返回的是「目标时区本地时间」且不带偏移量（如 2026-09-10T07:10），
 * 因此直接取 HH:mm 展示，绝不能再做一次时区换算（否则会凭空偏移 11 小时）。
 */
function fmtLocalTime(value: string): string {
  const m = /T(\d{2}):(\d{2})/.exec(value || '');
  return m ? `${m[1]}:${m[2]}` : '—';
}

/** 真实时间戳（ISO 带 Z）→ 目标时区时间，用于「更新时间」 */
function fmtInstant(iso: string, locale: string): string {
  if (!iso) return '—';
  try {
    return new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit', timeZone: TZ }).format(new Date(iso));
  } catch {
    return '—';
  }
}

/**
 * 预报日期是纯日历日期（YYYY-MM-DD）。用 UTC 正午构造并按 UTC 格式化，
 * 避免受构建机/浏览器本地时区影响而错位一天。
 */
function fmtDayName(date: string, locale: string, index: number): string {
  const [y, m, d] = date.split('-').map(Number);
  const dt = new Date(Date.UTC(y, (m || 1) - 1, d || 1, 12));
  try {
    return index === 0
      ? new Intl.DateTimeFormat(locale, { weekday: 'long', timeZone: 'UTC' }).format(dt)
      : new Intl.DateTimeFormat(locale, { weekday: 'short', day: 'numeric', timeZone: 'UTC' }).format(dt);
  } catch {
    return date;
  }
}

function metric(label: string, value: string): string {
  return `<div class="wx-metric"><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`;
}

function renderTips(list: AdviceItem[], catalog: Record<string, string>): string {
  return list
    .map((a) => {
      const tpl = catalog[a.key];
      if (!tpl) return '';
      return `<li class="wx-tip wx-tip--${a.tone}">${esc(fill(tpl, a.params))}</li>`;
    })
    .join('');
}

function renderChips(keys: string[], catalog: Record<string, string>): string {
  return keys
    .map((k) => {
      const label = catalog[k];
      if (!label) return '';
      return `<li class="wx-chip"><span class="wx-chip-icon" aria-hidden="true">${ITEM_ICONS[k] || '•'}</span>${esc(label)}</li>`;
    })
    .join('');
}

function renderAlerts(items: AdviceItem[], g: WeatherPanelContent): string {
  if (!items.length) {
    return `<p class="wx-alerts-safe"><span aria-hidden="true">✅</span>${esc(g.noAlerts)}</p>`;
  }
  const body = items
    .map((a) => {
      const tpl = g.messages.alerts[a.key];
      if (!tpl) return '';
      return `<li class="wx-alert wx-alert--${a.tone}">${esc(fill(tpl, a.params))}</li>`;
    })
    .join('');
  return `<div class="wx-alerts">
      <p class="wx-alerts-title"><span aria-hidden="true">⚠️</span>${esc(g.alertsTitle)}</p>
      <ul class="wx-alerts-list">${body}</ul>
    </div>`;
}

/**
 * 生成天气面板的完整内部 HTML。
 * @param data 天气数据（为空时返回占位提示）
 * @param g 当前语言的天气文案
 * @param locale 用于日期/时间本地化
 */
export function renderWeatherPanel(data: WeatherData | null, g: WeatherPanelContent, locale: string): string {
  if (!data) {
    return `<p class="wx-empty">${esc(g.unavailable)}</p>`;
  }

  const c = data.current;
  const today = data.days[0];
  const key = weatherKey(c.weatherCode);
  const cond = g.conditions[key] || g.conditions.unknown;
  const windDir = g.windDirs[windDirectionKey(c.windDirection)] || '';
  const uvIdx = uvLevelIndex(today ? today.uvMax : 0);
  const advice = buildAdvice(data);

  const windLevel = beaufort(Math.max(today ? today.windMax : 0, c.windSpeed));
  const gustLevel = beaufort(Math.max(c.windGust, today ? today.gustMax : 0));

  const metrics = [
    metric(g.labels.feels, `${Math.round(c.apparent)}°C`),
    metric(g.labels.humidity, `${Math.round(c.humidity)}%`),
    metric(g.labels.wind, `${Math.round(c.windSpeed)} km/h ${windDir} · ${windLevel} ${g.labels.level}`.trim()),
    metric(g.labels.gust, `${Math.round(c.windGust)} km/h · ${gustLevel} ${g.labels.level}`),
    metric(g.labels.prob, `${Math.round(today ? today.precipProb : 0)}%`),
    metric(g.labels.uv, `${Math.round(today ? today.uvMax : 0)} · ${g.uvLevels[uvIdx]}`),
    metric(g.labels.sunrise, fmtLocalTime(today ? today.sunrise : '')),
    metric(g.labels.sunset, fmtLocalTime(today ? today.sunset : '')),
  ].join('');

  const days = data.days
    .map((d, i) => {
      const dk = weatherKey(d.code);
      const name = fmtDayName(d.date, locale, i);
      const rain = d.precipSum > 0 ? ` <span aria-hidden="true">🌧️</span>${d.precipSum.toFixed(1)}mm` : '';
      return `<li class="wx-day">
        <span class="wx-day-name">${esc(name)}</span>
        <span class="wx-day-icon" title="${esc(g.conditions[dk] || g.conditions.unknown)}" aria-hidden="true">${weatherIcon(dk)}</span>
        <span class="wx-day-temp"><b>${Math.round(d.tMax)}°</b><i>${Math.round(d.tMin)}°</i></span>
        <span class="wx-day-meta"><span aria-hidden="true">💧</span>${Math.round(d.precipProb)}% <span aria-hidden="true">💨</span>${Math.round(d.windMax)} km/h${rain}</span>
      </li>`;
    })
    .join('');

  const todayRange = today
    ? `${esc(g.todayLabel)} <b>${Math.round(today.tMin)}°</b> ~ <b>${Math.round(today.tMax)}°</b>`
    : '';

  return `<div class="wx-now">
      <div class="wx-now-main">
        <span class="wx-icon" aria-hidden="true">${weatherIcon(key, c.isDay)}</span>
        <div class="wx-now-text">
          <p class="wx-temp"><span>${Math.round(c.temperature)}</span>°C</p>
          <p class="wx-cond">${esc(cond)}</p>
          <p class="wx-range">${todayRange}</p>
          <p class="wx-where">${esc(g.nowLabel)}</p>
        </div>
      </div>
      <dl class="wx-metrics">${metrics}</dl>
    </div>
    ${renderAlerts(advice.alerts, g)}
    <div class="wx-guide">
      <section class="wx-block">
        <h4 class="wx-block-title"><span aria-hidden="true">👕</span>${esc(g.outfitTitle)}</h4>
        <ul class="wx-block-list">${renderTips(advice.outfit, g.messages.outfit)}</ul>
      </section>
      <section class="wx-block">
        <h4 class="wx-block-title"><span aria-hidden="true">🎯</span>${esc(g.activityTitle)}</h4>
        <ul class="wx-block-list">${renderTips(advice.activity, g.messages.activity)}</ul>
      </section>
      <section class="wx-block wx-block--items">
        <h4 class="wx-block-title"><span aria-hidden="true">🎒</span>${esc(g.itemsTitle)}</h4>
        <ul class="wx-chips">${renderChips(advice.items, g.messages.items)}</ul>
      </section>
    </div>
    <h3 class="wx-subtitle">${esc(g.forecastTitle)}</h3>
    <ol class="wx-days">${days}</ol>
    <p class="wx-note">${esc(g.updatedLabel)}: ${esc(fmtInstant(data.fetchedAt, locale))} · ${esc(g.dataNote)}</p>`;
}
