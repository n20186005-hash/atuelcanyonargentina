// 生成 PWA 图标（纯 Node，无第三方依赖）
// 输出：public/icon-192.png、public/icon-512.png、public/icon-maskable-512.png
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const OUT_DIR = path.join(__dirname, '../public');

// ── CRC32 ──
const CRC_TABLE = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const body = Buffer.concat([typeBuf, data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}

function encodePNG(width, height, rgba) {
  const sig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0; // filter: none
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

// ── 绘制 ──
function lerp(a, b, t) {
  return a + (b - a) * t;
}
function mix(c1, c2, t) {
  return [lerp(c1[0], c2[0], t), lerp(c1[1], c2[1], t), lerp(c1[2], c2[2], t)];
}

const TOP = [240, 192, 138];
const MID = [196, 122, 58];
const DEEP = [139, 69, 19];
const ROCK_DARK = [59, 31, 14];
const ROCK_MID = [107, 58, 26];
const WATER = [47, 143, 143];
const WATER_DEEP = [26, 92, 104];
const SUN = [247, 227, 184];

// 山脊剖面（0..1 归一化高度，值越大越高）
function ridge1(x) {
  return 0.42 + 0.16 * Math.sin(x * Math.PI * 1.7 + 0.4) + 0.08 * Math.sin(x * Math.PI * 5.1);
}
function ridge2(x) {
  return 0.6 + 0.12 * Math.sin(x * Math.PI * 2.3 + 1.2) + 0.05 * Math.sin(x * Math.PI * 7.7);
}

function render(size, maskable) {
  const buf = Buffer.alloc(size * size * 4);
  const S = size;
  const pad = maskable ? S * 0.18 : 0; // maskable 安全区留白
  const radius = maskable ? 0 : S * 0.22; // 非 maskable 使用圆角
  const sunR = S * 0.085;
  const sunX = S * 0.71;
  const sunY = S * 0.26;

  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const i = (y * S + x) * 4;
      let a = 255;

      // 圆角裁切
      if (radius > 0) {
        const dx = Math.max(radius - x, x - (S - radius), 0);
        const dy = Math.max(radius - y, y - (S - radius), 0);
        if (dx * dx + dy * dy > radius * radius) {
          buf[i] = 0;
          buf[i + 1] = 0;
          buf[i + 2] = 0;
          buf[i + 3] = 0;
          continue;
        }
      }

      // 天空渐变
      const t = y / S;
      let col = t < 0.55 ? mix(TOP, MID, t / 0.55) : mix(MID, DEEP, (t - 0.55) / 0.45);

      // 太阳
      const dSun = Math.hypot(x - sunX, y - sunY);
      if (dSun < sunR) col = mix(SUN, col, Math.min(1, dSun / sunR));

      // 远山
      const rx = (x - pad) / (S - 2 * pad);
      const ry = (y - pad) / (S - 2 * pad);
      if (rx >= 0 && rx <= 1) {
        if (ry > ridge1(rx)) col = mix(col, ROCK_MID, 0.85);
        if (ry > ridge2(rx)) col = ROCK_DARK;
      } else if (!maskable) {
        // 圆角外已裁切，无需处理
      }

      // 水面（峡谷底部的碧蓝水库）
      const waterLine = 0.78;
      if (ry > waterLine) {
        const wt = (ry - waterLine) / (1 - waterLine);
        col = mix(WATER, WATER_DEEP, Math.min(1, wt));
      }

      buf[i] = Math.round(col[0]);
      buf[i + 1] = Math.round(col[1]);
      buf[i + 2] = Math.round(col[2]);
      buf[i + 3] = a;
    }
  }
  return encodePNG(S, S, buf);
}

fs.writeFileSync(path.join(OUT_DIR, 'icon-192.png'), render(192, false));
fs.writeFileSync(path.join(OUT_DIR, 'icon-512.png'), render(512, false));
fs.writeFileSync(path.join(OUT_DIR, 'icon-maskable-512.png'), render(512, true));
console.log('Generated PWA icons: icon-192.png, icon-512.png, icon-maskable-512.png');
