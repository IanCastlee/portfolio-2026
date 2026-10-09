const fs = require('fs');

const js = fs.readFileSync('C:/Users/Eyhan/.gemini/antigravity/brain/38fbc458-fd52-4ebf-82be-fa24c693a529/.system_generated/steps/869/content.md', 'utf8');

// Find all strings in the bundle
const matches = [];
const regex = /"([^"\\]*(?:\\.[^"\\]*)*)"/g;
let m;
while ((m = regex.exec(js)) !== null) {
  try {
    const unescaped = JSON.parse(m[0]);
    if (unescaped.length > 5 && !unescaped.startsWith('http') && !unescaped.includes('__') && !unescaped.includes('react')) {
      matches.push(unescaped);
    }
  } catch(e) {}
}

const unique = [...new Set(matches)];
console.log('Total unique strings:', unique.length);
console.log('\n--- Key Strings / Section Headings / Project Info ---');
unique.forEach(s => {
  if (s.length > 12 && (s.includes(' ') || s.includes('-'))) {
    console.log('-', s);
  }
});
