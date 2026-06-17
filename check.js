const fs = require('fs');
const content = fs.readFileSync('src/store/catalog.ts', 'utf8');
const products = content.split('item({').slice(1);
const unrelated = [];
for (const p of products) {
  const slugMatch = p.match(/slug:\s*"([^"]+)"/);
  if (!slugMatch) continue;
  const slug = slugMatch[1];
  if (!p.includes('peakProduct') && !p.includes('peakCategory')) {
    unrelated.push(slug);
  }
}
console.log('Unrelated products:', unrelated);
