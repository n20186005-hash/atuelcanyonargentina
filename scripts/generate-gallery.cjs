// 生成画廊顺序清单（只存 base 名，尺寸/格式变体由 src/image-manifest.json 提供）
// 源图归档在 assets/originals/，压缩产物在 public/img/（见 scripts/optimize-images.cjs）
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../assets/originals');
const manifestPath = path.join(__dirname, '../src/image-manifest.json');

if (!fs.existsSync(srcDir)) {
  console.error(`Gallery source directory not found: ${srcDir}`);
  process.exit(1);
}

const manifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : { images: {} };

const bases = fs
  .readdirSync(srcDir)
  .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
  .map((f) => path.basename(f, path.extname(f)))
  .filter((base) => {
    const ok = Boolean(manifest.images[base]);
    if (!ok) console.warn(`  ! missing optimized renditions for "${base}" — run: npm run optimize:images`);
    return ok;
  })
  .sort((a, b) => {
    const na = parseInt(a.match(/(\d+)/)?.[1] || '0', 10);
    const nb = parseInt(b.match(/(\d+)/)?.[1] || '0', 10);
    return na - nb;
  });

const outputFilePath = path.join(__dirname, '../src/gallery-data.json');
fs.writeFileSync(outputFilePath, JSON.stringify(bases, null, 2) + '\n');

console.log(`Generated gallery-data.json with ${bases.length} images.`);
