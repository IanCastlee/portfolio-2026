/**
 * Google Gemini AI Service for Developer Portfolio
 * Handles chat requests, context injection, and system prompts.
 */

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || '';

// System instruction providing deep context about Ian Castillo's background, projects, and skills
const SYSTEM_INSTRUCTION = `
You are "Eyhan AI", the dedicated AI assistant embedded in Ian Castillo's developer portfolio.
Your role is to represent Ian (<eyhan/>) professionally to recruiters, engineering managers, clients, and fellow developers.

=== ABOUT IAN CASTILLO ===
- Name: Ian Castillo (developer handle: <eyhan/>)
- Role: Full-Stack Web & Mobile Developer
- Location: Pasig, Philippines
- Email: castillo321ian@gmail.com
- Degree: Bachelor of Science in Information Technology
- Experience: Freelancing since 2023 with production software shipped for education, emergency response, and e-commerce.
- Philosophy: "I don't just focus on visuals — I make sure the server, database, and system performance stay fast, efficient, and reliable under load."

=== CORE TECH STACK ===
- Frontend & Mobile: React 18/19, React Native, Expo 54, Tailwind CSS v4, HTML5/CSS3/SCSS
- Backend & APIs: Node.js, Express, PHP, Laravel, RESTful APIs, WebSockets (Socket.IO)
- Databases & Storage: MySQL, PostgreSQL, SQLite, Redis (in-memory caching & Pub/Sub), Supabase, Firebase
- Desktop & Tools: Tauri v2 (Rust + React), Git, Vite, Linux

=== SHIPPED PROJECTS ===
1. Personal Grading System (PGS SaaS):
   - Type: Offline-First Desktop SaaS Platform
   - Tech: Tauri v2, React 18, SQLite, Supabase Cloud Sync, Tailwind CSS
   - Highlights: Solved school connectivity issues by running full grade computation offline via local SQLite, with auto-sync when online.

2. OSYUSO Multi-Vendor E-Commerce Marketplace:
   - Type: Full-Stack Marketplace Platform
   - Tech: PHP, Laravel, React, MySQL, Redis, Cloudinary, Tailwind CSS
   - Highlights: Sub-second product filtering, Redis caching for fast product catalog queries under heavy traffic.

3. Irosin Disaster Safety (MDRRMO Command & Incident Response):
   - Type: Mission-Critical GIS & Mobile App
   - Tech: React Native, Expo 54, Node.js, Socket.IO, Leaflet GIS, OpenStreetMap
   - Highlights: Live emergency broadcast, real-time GPS hazard coordinates, offline emergency cache.

4. Nature Hot Spring Resort Reservation System:
   - Type: Online Booking & Management System
   - Tech: React, PHP, MySQL, REST API, Tailwind CSS
   - Highlights: Real-time room availability calendar, automated booking confirmation, clean admin dashboard.

=== INSTRUCTIONS FOR RESPONDING ===
- Respond in natural, conversational Tagalog/Taglish if asked in Tagalog (e.g. "hoy", "kamusta", "ano gawa niya?").
- Respond in clear, professional English if asked in English.
- If asked personal or private questions about his family (e.g. "ano pangalan ng nanay/tatay niya?"), politely explain that you only have information about his technical work, projects, and software engineering portfolio.
- If asked about availability or rates, state that Ian is actively available for Freelance contracts, client projects, and Full-time engineering roles, and invite them to email him at castillo321ian@gmail.com.
- Keep responses concise, direct, friendly, and well-structured.
`;

/**
 * Send a message to Google Gemini API
 * @param {Array<{role: string, content: string}>} history - Chat history
 * @param {string} userMessage - The new prompt from the user
 * @returns {Promise<string>}
 */
export async function sendGeminiMessage(history = [], userMessage = '') {
  if (!GEMINI_API_KEY) {
    return getSmartFallbackResponse(userMessage);
  }

  // Format history for Gemini API
  const contents = [
    ...history.slice(-8).map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    })),
    {
      role: 'user',
      parts: [{ text: userMessage }]
    }
  ];

  // Try fast and available flash-lite & flash models
  const models = [
    'gemini-3.5-flash-lite',
    'gemini-3.1-flash-lite',
    'gemini-flash-latest',
    'gemini-3.5-flash',
    'gemini-2.5-flash'
  ];

  for (const model of models) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents,
            systemInstruction: {
              parts: [{ text: SYSTEM_INSTRUCTION }]
            },
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 600,
            }
          }),
        }
      );

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        console.warn(`Model ${model} returned error:`, errData?.error?.message || errData);
        continue; // Try next model in list
      }

      const data = await response.json();
      const answer = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (answer) {
        return answer;
      }
    } catch (err) {
      console.warn(`Network error with model ${model}:`, err);
    }
  }

  // Fallback only if all live endpoints fail
  return getSmartFallbackResponse(userMessage);
}

/**
 * High-quality deterministic fallback assistant
 */
function getSmartFallbackResponse(query = '') {
  const q = query.toLowerCase();

  if (q.includes('nanay') || q.includes('tatay') || q.includes('family') || q.includes('pamilya') || q.includes('edad') || q.includes('age')) {
    return `Pasensya na, pero wala akong impormasyon sa mga personal na detalye tulad ng pamilya ni Ian. Nakatutok ako sa kanyang software engineering projects, technical skills sa web at mobile, at professional portfolio. May gusto ka bang malaman tungkol sa kanyang mga gawa tulad ng PGS SaaS o OSYUSO Marketplace?`;
  }

  if (q.includes('hoy') || q.includes('hi') || q.includes('hello') || q.includes('kamusta') || q.includes('sup')) {
    return `Hello! Ako si **Eyhan AI**, ang portfolio assistant ni Ian Castillo. Nandito ako para sagutin ang mga tanong tungkol sa kanyang production projects (PGS SaaS, OSYUSO, MDRRMO GIS), tech stack (React, PHP, Laravel, Redis, MySQL), at availability para sa freelance o full-time roles. Ano ang maitutulong ko sa iyo?`;
  }

  if (q.includes('project') || q.includes('gawa') || q.includes('portfolio') || q.includes('system')) {
    return `Narito ang mga featured production projects ni Ian:\n\n1. **Personal Grading System (PGS SaaS)** — Offline-first desktop SaaS gamit ang **Tauri v2 + SQLite + Supabase** para sa mga guro.\n2. **OSYUSO Marketplace** — E-commerce platform na pinalalakas ng **PHP/Laravel, React, MySQL at Redis caching**.\n3. **Irosin Disaster Safety (MDRRMO)** — Real-time emergency dispatch & GIS mobile app gamit ang **React Native, Expo 54, Node.js at Socket.IO**.\n4. **Nature Hot Spring Resort** — Online reservation engine gamit ang **React & PHP**.\n\nAlin dito ang nais mong malaman nang mas detalyado?`;
  }

  if (q.includes('stack') || q.includes('skill') || q.includes('tech') || q.includes('language') || q.includes('framework')) {
    return `Buong stack ang expertise ni Ian:\n\n- **Frontend & Mobile:** React, React Native (Expo), Tailwind CSS v4\n- **Backend:** Node.js, PHP, Laravel, REST APIs, Socket.IO\n- **Databases & Caching:** MySQL, SQLite, Supabase, Redis\n- **Desktop:** Tauri v2\n\nNaiintindihan niya hindi lang ang magandang UI, kundi kung paano protektahan ang server sa pamamagitan ng mabilis na queries at smart caching.`;
  }

  if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('reach') || q.includes('rate') || q.includes('available')) {
    return `Si Ian ay **available ngayon para sa Freelance contracts at Full-time positions**!\n\n- **Email:** [castillo321ian@gmail.com](mailto:castillo321ian@gmail.com)\n- **Location:** Pasig, Philippines (open to remote)\n\nMaaari mo siyang i-email nang direkta o gamitin ang contact form sa ibaba ng portfolio.`;
  }

  return `Hello! Ako si **Eyhan AI**, ang portfolio assistant ni Ian Castillo na pinapagana ng Google Gemini. ✨\n\nMaaari mo akong tanungin tungkol sa kanyang mga proyekto, backend at database skills, o kung paano siya i-hire para sa isang project!`;
}
