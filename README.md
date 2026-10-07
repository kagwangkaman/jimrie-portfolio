# Jimrie Parado — E-Portfolio (DCIT 26 Midterm Lab)

A fully functional e-portfolio built with **ReactJS + Tailwind CSS**, inspired by the `My-Portfolio-main` minimal monochrome format (sidebar + max-w-2xl content).

> GitHub source for this activity: https://github.com/JimDev20/Jimrie-Parado — push this project there, then deploy on Vercel.

## Required Sections (all included)

- **Home (Dashboard)** — welcome message, introduction, navigation menu (sidebar on desktop, hamburger on mobile)
- **About Me** — personal background (CvSU BSIT), skills with bars, interests
- **Projects / Work Samples** — 6 projects with descriptions, tags, GitHub links
- **Resume / CV** — education, experience, skills tabs + Download CV + Print
- **Contact Information** — email + social links + validated contact form

## ReactJS Features (activity §3 — at least 3)

1. **View More / View Less buttons** — About background, project list (`useState` + conditional rendering)
2. **Download CV button** — generates `Jimrie-Parado-CV.txt` via `Blob` (event handling)
3. **Show / hide project details** — per-project `expandedId` state with Tailwind transition
4. **Contact form validation** — name / email / message checks, error messages, sending → sent states
5. **Mobile menu open / close** — `useState` + conditional rendering
6. **Scroll-spy nav highlight** — `IntersectionObserver` + `useEffect` marks the active section

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 — test:
- all nav links scroll to sections
- mobile menu opens/closes (resize < 1024px)
- view more + show/hide project details
- submit empty contact form → errors appear; fill valid → success
- click Download CV

## Build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "DCIT 26 e-portfolio: React + Tailwind"
   git branch -M main
   git remote add origin https://github.com/JimDev20/Jimrie-Parado.git
   git push -u origin main
   ```
2. Go to https://vercel.com → Add New Project → import `Jimrie-Parado`
3. Framework: **Vite**, Build: `npm run build`, Output: `dist` (already in `vercel.json`)
4. Deploy → verify live URL shows all 5 sections
5. Paste the Vercel URL in your lab report + demonstration

## Demonstration script (§6)

1. Navigate between sections via sidebar
2. Point out reusable components: `Sidebar`, `Home`, `About`, `Projects`, `Resume`, `Contact`, `SectionHeading`
3. Click: View More, show details, Download CV, mobile menu
4. Submit invalid + valid contact form to show validation + state
5. Resize to mobile to show responsive menu
6. Open the Vercel URL to prove deployment
