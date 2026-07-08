// Cañón del Atuel — 客户端交互（原生 JS，无框架）

type AppLocale = 'es' | 'en' | 'zh' | 'it';
const LOCALES: AppLocale[] = ['es', 'en', 'zh', 'it'];

// 主题切换
const themeToggle = document.getElementById('theme-toggle');
themeToggle?.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try {
    localStorage.setItem('theme', next);
  } catch {
    /* ignore */
  }
});

// 语言切换：替换路径首段 locale，保留 hash
document.querySelectorAll<HTMLButtonElement>('.lang-btn[data-locale]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const l = btn.dataset.locale as string;
    const segs = window.location.pathname.split('/').filter(Boolean);
    if (segs.length && (LOCALES as string[]).includes(segs[0])) {
      segs[0] = l;
    } else {
      segs.unshift(l);
    }
    window.location.href = '/' + segs.join('/') + window.location.hash;
  });
});

// 导航滚动态
const nav = document.getElementById('site-nav');
if (nav) {
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 80);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// 滚动揭示
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    reveals.forEach((el) => obs.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('visible'));
  }
}

// FAQ 折叠
document.querySelectorAll<HTMLButtonElement>('.faq-question[data-faq]').forEach((q) => {
  q.addEventListener('click', () => {
    const item = q.closest('.faq-item');
    if (!item) return;
    const expanded = item.classList.toggle('expanded');
    q.querySelector('.faq-icon')?.classList.toggle('rotated', expanded);
  });
});

// 画廊：分类筛选 + 灯箱
const galleryItems = Array.from(document.querySelectorAll<HTMLElement>('.gallery-item'));
const galleryFilters = Array.from(document.querySelectorAll<HTMLButtonElement>('.gallery-filter'));
const catLabels: Record<string, string> = {};
galleryFilters.forEach((b) => {
  const key = b.dataset.filter || '';
  if (key) catLabels[key] = b.textContent?.trim() || '';
});
if (galleryFilters.length) {
  galleryFilters.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter || 'all';
      galleryFilters.forEach((b) => b.classList.toggle('active', b === btn));
      galleryItems.forEach((item) => {
        const show = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('hidden', !show);
      });
    });
  });
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
const lightboxCaption = document.getElementById('lightbox-caption');
let lightboxIndex: number | null = null;

function visibleItems(): HTMLElement[] {
  return galleryItems.filter((el) => !el.classList.contains('hidden'));
}

function showLightbox(el: HTMLElement) {
  const img = el.querySelector('img');
  if (!img || !lightbox || !lightboxImg) return;
  lightboxImg.src = img.getAttribute('src') || '';
  lightboxImg.alt = img.alt;
  if (lightboxCaption) lightboxCaption.textContent = catLabels[el.dataset.category || ''] || '';
  lightbox.style.display = 'flex';
}

function openLightbox(item: HTMLElement) {
  const list = visibleItems();
  const idx = list.indexOf(item);
  if (idx === -1) return;
  lightboxIndex = idx;
  showLightbox(list[idx]);
}

function closeLightbox() {
  if (lightbox) lightbox.style.display = 'none';
  lightboxIndex = null;
}

function navLightbox(dir: number) {
  const list = visibleItems();
  if (!list.length) return;
  const base = lightboxIndex === null ? 0 : lightboxIndex;
  lightboxIndex = (base + dir + list.length) % list.length;
  showLightbox(list[lightboxIndex]);
}

galleryItems.forEach((item) => {
  item.addEventListener('click', () => openLightbox(item));
});
document.getElementById('lightbox-close')?.addEventListener('click', closeLightbox);
document.getElementById('lightbox-prev')?.addEventListener('click', (e) => {
  e.stopPropagation();
  navLightbox(-1);
});
document.getElementById('lightbox-next')?.addEventListener('click', (e) => {
  e.stopPropagation();
  navLightbox(1);
});
lightbox?.addEventListener('click', closeLightbox);
window.addEventListener('keydown', (e) => {
  if (lightboxIndex === null) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowRight') navLightbox(1);
  else if (e.key === 'ArrowLeft') navLightbox(-1);
});

// 互动遗址地图
const sitemapMarkers = Array.from(document.querySelectorAll<HTMLButtonElement>('.sitemap-marker'));
const detailIndex = document.getElementById('sitemap-detail-index');
const detailName = document.getElementById('sitemap-detail-name');
const detailDesc = document.getElementById('sitemap-detail-desc');
if (sitemapMarkers.length && detailName && detailDesc) {
  const showZone = (m: HTMLButtonElement) => {
    const n = (sitemapMarkers.indexOf(m) + 1).toString().padStart(2, '0');
    if (detailIndex) detailIndex.textContent = n;
    detailName.textContent = m.dataset.name || '';
    detailDesc.textContent = m.dataset.desc || '';
    sitemapMarkers.forEach((x) => x.classList.toggle('active', x === m));
  };
  sitemapMarkers.forEach((m) => {
    m.addEventListener('mouseenter', () => showZone(m));
    m.addEventListener('focus', () => showZone(m));
    m.addEventListener('click', (e) => {
      e.stopPropagation();
      showZone(m);
    });
  });
  showZone(sitemapMarkers[0]);
}

// 天气小组件
const weatherEl = document.getElementById('weather-widget');
if (weatherEl) {
  const locale = (document.documentElement.lang || 'es').split('-')[0] as AppLocale;
  const labels: Record<AppLocale, string[]> = {
    zh: ['低', '中等', '高', '极高', '危险'],
    en: ['Low', 'Moderate', 'High', 'Very High', 'Extreme'],
    es: ['Bajo', 'Moderado', 'Alto', 'Muy Alto', 'Extremo'],
    it: ['Basso', 'Moderato', 'Alto', 'Molto Alto', 'Estremo'],
  };
  const titles: Record<AppLocale, string> = {
    zh: '圣拉斐尔实时天气',
    en: 'Live Weather in San Rafael',
    es: 'Clima en San Rafael',
    it: 'Meteo a San Rafael',
  };
  const metaLabels: Record<AppLocale, { temp: string; precip: string; uv: string; sunrise: string; sunset: string }> = {
    zh: { temp: '气温', precip: '降水', uv: '紫外线', sunrise: '日出', sunset: '日落' },
    en: { temp: 'Temp', precip: 'Precip', uv: 'UV', sunrise: 'Sunrise', sunset: 'Sunset' },
    es: { temp: 'Temp.', precip: 'Precip.', uv: 'UV', sunrise: 'Amanecer', sunset: 'Atardecer' },
    it: { temp: 'Temp.', precip: 'Prec.', uv: 'UV', sunrise: 'Alba', sunset: 'Tramonto' },
  };
  const msgs: Record<AppLocale, (uv: string) => string> = {
    zh: (uv) => `当前紫外线指数：${uv}。圣拉斐尔地区海拔约 750 米，前山日照强烈，请务必做好防晒！`,
    en: (uv) => `Current UV Index: ${uv}. San Rafael sits at ~750m with strong foothill sun — sunscreen is essential!`,
    es: (uv) => `Índice UV actual: ${uv}. ¡San Rafael está a ~750m, el sol de precordillera es fuerte, use protector solar!`,
    it: (uv) => `Indice UV attuale: ${uv}. San Rafael è a ~750m, il sole di precordillera è forte — usa la crema solare!`,
  };
  const colors = ['#28a745', '#ffc107', '#fd7e14', '#dc3545', '#6f42c1'];
  fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=-34.617&longitude=-68.331&current=temperature_2m,precipitation,uv_index&daily=sunrise,sunset&timezone=auto'
  )
    .then((r) => r.json())
    .then((data) => {
      if (!data || !data.current) return;
      const temp = data.current.temperature_2m;
      const precip = data.current.precipitation;
      const uv = data.current.uv_index;
      const sunriseRaw = data.daily?.sunrise?.[0];
      const sunsetRaw = data.daily?.sunset?.[0];
      const sunrise = sunriseRaw ? new Date(sunriseRaw).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--';
      const sunset = sunsetRaw ? new Date(sunsetRaw).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '--:--';
      let idx = 0;
      if (uv >= 3 && uv < 6) idx = 1;
      else if (uv >= 6 && uv < 8) idx = 2;
      else if (uv >= 8 && uv < 11) idx = 3;
      else if (uv >= 11) idx = 4;
      const uvLevel = labels[locale][idx];
      const uvColor = colors[idx];
      const uvText = `${uv} (${uvLevel})`;
      const meta = metaLabels[locale];
      weatherEl.innerHTML = `
        <h3 style="font-size:1.2rem;font-weight:700;color:var(--color-deep);display:flex;align-items:center;gap:0.5rem;margin:0;">${titles[locale]}</h3>
        <div style="display:flex;flex-wrap:wrap;gap:1rem;margin:0.5rem 0;">
          <div style="background:#f8f9fa;padding:0.5rem 1rem;border-radius:8px;font-weight:600;">${meta.temp}: ${temp}°C</div>
          <div style="background:#f8f9fa;padding:0.5rem 1rem;border-radius:8px;font-weight:600;">${meta.precip}: ${precip}mm</div>
          <div style="background:#f8f9fa;padding:0.5rem 1rem;border-radius:8px;font-weight:600;color:${uvColor};">${meta.uv}: ${uvText}</div>
          <div style="background:#f8f9fa;padding:0.5rem 1rem;border-radius:8px;font-weight:600;">${meta.sunrise}: ${sunrise}</div>
          <div style="background:#f8f9fa;padding:0.5rem 1rem;border-radius:8px;font-weight:600;">${meta.sunset}: ${sunset}</div>
        </div>
        <p style="margin:0;font-size:0.95rem;color:var(--color-earth);line-height:1.5;">${msgs[locale](uvText)}</p>
      `;
    })
    .catch(() => {
      /* ignore */
    });
}
