const fs = require('fs');

const js = fs.readFileSync('C:/Users/Eyhan/.gemini/antigravity/brain/38fbc458-fd52-4ebf-82be-fa24c693a529/.system_generated/steps/869/content.md', 'utf8');

// Find all JSX / class names / components
const classNames = js.match(/className:\s*"([^"]+)"/g) || [];
console.log('Class names used in castillo-ian:');
console.log([...new Set(classNames)].slice(0, 50));

// Find components / data
const texts = [];
const strRegex = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
let match;
while ((match = strRegex.exec(js)) !== null) {
  const str = match[1];
  if (str.length > 10 && !str.includes('node_modules') && !str.includes('http') && !str.includes('license') && !str.includes('chunk') && !str.includes('function') && !str.includes('return') && !str.includes('export')) {
    texts.push(str);
  }
}

console.log('\n--- Content in castillo-ian ---');
console.log([...new Set(texts)].slice(0, 60));
