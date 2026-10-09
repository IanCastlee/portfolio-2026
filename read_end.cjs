const fs = require('fs');

const js = fs.readFileSync('C:/Users/Eyhan/.gemini/antigravity/brain/38fbc458-fd52-4ebf-82be-fa24c693a529/.system_generated/steps/869/content.md', 'utf8');

console.log('Last 20,000 chars of JS:');
console.log(js.slice(-20000));
