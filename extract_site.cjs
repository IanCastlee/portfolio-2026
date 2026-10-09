const fs = require('fs');

const jsContent = fs.readFileSync('C:/Users/Eyhan/.gemini/antigravity/brain/38fbc458-fd52-4ebf-82be-fa24c693a529/.system_generated/steps/869/content.md', 'utf8');
const cssContent = fs.readFileSync('C:/Users/Eyhan/.gemini/antigravity/brain/38fbc458-fd52-4ebf-82be-fa24c693a529/.system_generated/steps/871/content.md', 'utf8');

console.log('CSS Content preview (first 1000 chars):');
console.log(cssContent.slice(0, 1000));

// Let's search for JSX element structures, section titles, headers, etc.
const matches = jsContent.match(/"([^"\\]|\\.)*"/g) || [];
const texts = matches
  .map(m => {
    try { return JSON.parse(m); } catch(e) { return m; }
  })
  .filter(t => typeof t === 'string' && t.length > 3 && !t.includes('license') && !t.includes('http') && !t.includes('react'));

console.log('\n--- Extracted UI Strings ---');
console.log(texts.filter(t => t.length < 100 && /[a-zA-Z]/.test(t)).slice(0, 100));
