# ⚛️ IT Web & Mobile Developer Portfolio (React + Atomic Design)

This is a developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and architected strictly using **Atomic Design Principles**.

---

## 🚀 How to Run Locally

1. Open PowerShell or Command Prompt.
2. Navigate to this directory:
   ```bash
   cd "C:\Users\Eyhan\.gemini\antigravity\scratch\developer-portfolio-react"
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open the local link (usually `http://localhost:5173`) in your browser.

---

## 🏗️ Atomic Design Architecture

```text
src/
├── data/
│   └── portfolioData.js       <-- Central data store (Change Lorem text here!)
├── components/
│   ├── atoms/                 <-- Smallest reusable building blocks
│   │   ├── Badge.jsx          (Section & Status Badges)
│   │   ├── Button.jsx         (Touch-friendly primary/secondary buttons)
│   │   ├── IconButton.jsx     (Icon buttons with hit states)
│   │   ├── Input.jsx          (Inputs, Selects, Textareas)
│   │   ├── SocialIcons.jsx    (Crisp SVG Brand icons)
│   │   └── Typography.jsx     (Headings & code text)
│   ├── molecules/             <-- Combinations of atoms
│   │   ├── NavbarBrand.jsx    (Logo & title group)
│   │   ├── SocialGroup.jsx    (Grouped social media buttons)
│   │   ├── TerminalCard.jsx   (Mobile-optimized interactive code card)
│   │   ├── SkillAndProjectMolecules.jsx (SkillCard, ProjectCard, TimelineItem)
│   │   └── FeatureMolecules.jsx (ServiceCard, ProcessStep, RepoCard, TestimonialCard)
│   ├── organisms/             <-- Full standalone sections
│   │   ├── Navbar.jsx         (Header with mobile drawer)
│   │   ├── HeroSection.jsx    (Mobile-Optimized Hero)
│   │   ├── AboutAndTechSections.jsx (About Me & Tech Stack)
│   │   ├── ProjectsAndCaseStudiesSections.jsx (Projects & Case Study)
│   │   ├── MiddleSections.jsx (Experience, Services, Process, GitHub)
│   │   └── EndingSections.jsx (Resume, Education, Testimonials, Contact, Footer)
│   ├── templates/             <-- Page layouts
│   │   └── MainLayout.jsx     (Global header/footer wrapper)
│   └── pages/                 <-- Full composed views
│       └── PortfolioPage.jsx  (The complete 14-section portfolio)
```

---

## 📱 Mobile Hero Design Improvements
- **Mobile Spacing**: Adjusted header padding and responsive gaps to eliminate screen cramping.
- **Dynamic Gradient Headline**: Responsive font scales (`text-3xl sm:text-5xl lg:text-6xl`) that wrap fluidly.
- **Quick Pillar Chips**: Mobile-friendly horizontal pill rows for *Full-Stack Web*, *iOS & Android*, and *APIs & DB*.
- **Touch Targets**: 44px+ touch-friendly buttons (`View Projects`, `Contact Me`, `Download CV`) with active tactile feedback.
- **Mobile Code Terminal**: Compact, interactive card with tab switching (`profile.ts` / `stack.json`) and live experience metrics.
