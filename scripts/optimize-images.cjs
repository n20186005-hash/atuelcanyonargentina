// ─────────────────────────────────────────────────────────────
// 图片压缩与响应式派生（Image optimization pipeline）
// 输入：assets/originals/（原始大图，不随站点发布）
// 输出：public/img/  多尺寸 JPEG + WebP、LQIP 占位图、OG 分享图
//      src/image-manifest.json（供页面生成 <picture> / srcset）
// 运行：npm run optimize:images
// ─────────────────────────────────────────────────────────────
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC_DIR = path.join(__dirname, '../assets/originals');
const OUT_DIR = path.join(__dirname, '../public/img');
const MANIFEST = path.join(__dirname, '../src/image-manifest.json');

const WIDTHS = [480, 960, 1600];
const JPEG_QUALITY = 76;
const WEBP_QUALITY = 68;

/** 用于 OG 社交分享图的源图（横构图、辨识度高） */
const OG_SOURCE = 'canon-del-atuel-1';
const OG_SIZE = { width: 1200, height: 630 };

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function baseName(file) {
  return path.basename(file, path.extname(file));
}

async function optimizeOne(file, manifest) {
  const base = baseName(file);
  const input = path.join(SRC_DIR, file);
  const meta = await sharp(input).metadata();
  const originalWidth = meta.width || 1600;
  const originalHeight = meta.height || 1067;

  // 只生成不超过原图宽度的尺寸，且至少保留一档
  const targets = WIDTHS.filter((w) => w < originalWidth);
  const largest = Math.min(originalWidth, WIDTHS[WIDTHS.length - 1]);
  targets.push(largest);
  const widths = [...new Set(targets)].sort((a, b) => a - b);

  const jpg = {};
  const webp = {};

  for (const w of widths) {
    const height = Math.round((originalHeight / originalWidth) * w);
    const jpgFile = `${base}-${w}.jpg`;
    const webpFile = `${base}-${w}.webp`;

    await sharp(input)
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
      .toFile(path.join(OUT_DIR, jpgFile));

    await sharp(input)
      .rotate()
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 6, smartSubsample: true })
      .toFile(path.join(OUT_DIR, webpFile));

    jpg[w] = `/img/${jpgFile}`;
    webp[w] = `/img/${webpFile}`;
    manifest.renditions.push({ base, width: w, height });
  }

  // LQIP：24px 宽的超小占位图，用于消除首屏空白
  const lqipBuf = await sharp(input)
    .rotate()
    .resize({ width: 24 })
    .webp({ quality: 28 })
    .toBuffer();

  const entry = {
    base,
    width: originalWidth,
    height: originalHeight,
    aspect: Number((originalWidth / originalHeight).toFixed(4)),
    widths,
    jpg,
    webp,
    lqip: `data:image/webp;base64,${lqipBuf.toString('base64')}`,
  };

  manifest.images[base] = entry;
  return entry;
}

async function buildOgImage(manifest) {
  const src = path.join(SRC_DIR, `${OG_SOURCE}.jpg`);
  if (!fs.existsSync(src)) return null;
  const out = path.join(__dirname, '../public/og-image.jpg');
  await sharp(src)
    .rotate()
    .resize({ ...OG_SIZE, fit: 'cover', position: 'attention' })
    .jpeg({ quality: 82, mozjpeg: true, progressive: true })
    .toFile(out);
  const size = fs.statSync(out).size;
  manifest.og = { path: '/og-image.jpg', width: OG_SIZE.width, height: OG_SIZE.height, bytes: size };
  return manifest.og;
}

async function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error(`Source directory not found: ${SRC_DIR}`);
    process.exit(1);
  }
  ensureDir(OUT_DIR);

  const files = fs
    .readdirSync(SRC_DIR)
    .filter((f) => /\.(jpe?g|png|webp|tiff?)$/i.test(f))
    .sort((a, b) => {
      const na = parseInt(a.match(/(\d+)/)?.[1] || '0', 10);
      const nb = parseInt(b.match(/(\d+)/)?.[1] || '0', 10);
      return na - nb;
    });

  const manifest = { generatedAt: new Date().toISOString(), widths: WIDTHS, images: {}, renditions: [] };

  let before = 0;
  for (const f of files) {
    before += fs.statSync(path.join(SRC_DIR, f)).size;
    await optimizeOne(f, manifest);
  }

  // 统计实际产出体积
  const outFiles = fs.readdirSync(OUT_DIR);
  const outBytes = outFiles.reduce((sum, f) => sum + fs.statSync(path.join(OUT_DIR, f)).size, 0);

  const og = await buildOgImage(manifest);

  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));

  console.log(`Optimized ${files.length} images → ${outFiles.length} files`);
  console.log(`  originals: ${(before / 1048576).toFixed(1)} MB`);
  console.log(`  optimized: ${(outBytes / 1048576).toFixed(1)} MB`);
  if (og) console.log(`  og-image.jpg: ${(og.bytes / 1024).toFixed(0)} KB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
