// Central portfolio data — edit this file to personalize your e-portfolio.
// Inspired by My-Portfolio-main format, simplified for DCIT 26 requirements.

export const profile = {
  name: 'Jimrie Parado',
  shortName: 'jim',
  role: 'developer',
  tagline: '00 — index',
  headline: 'Jimrie Parado',
  intro:
    'Full-stack developer working with minimal design, clean code, and tools that make sense. Currently exploring ReactJS and Tailwind CSS.',
  location: 'Cavite, Philippines',
  email: 'jimrieparado@gmail.com',
  github: 'https://github.com/JimDev20',
  linkedin: 'https://www.linkedin.com/in/jimrie-parado-ba5399381/',
  facebook: 'https://www.facebook.com/jimrie.parado.3/',
  instagram: 'https://www.instagram.com/jimrieparado/',
  twitter: 'https://x.com/JimParado43308',
};

export const about = {
  background: [
    'I am Jimrie Parado, an Information Technology student at Cavite State University Tanza Campus taking DCIT 26, Application Development and Emerging Technologies 2. I build clean and responsive web applications.',
    'I started with HTML and CSS, then JavaScript, and now ReactJS. I keep my work simple and readable, one idea per component, Tailwind for layout, and state only where the page needs to react.',
  ],
  interests: [
    'Web Development',
    'Cloud Engineering',
    'Cyber Security',
    'UI / UX Design',
    'Open Source',
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'PostgreSQL',
    'Vercel',
    'Git',
  ],
};

export const projects = [
  {
    id: 'weather-cli',
    year: '2026',
    title: 'Weather CLI',
    short: 'A terminal-based weather app with live forecasts and ASCII art.',
    details:
      'Terminal-based weather app with live forecasts and ASCII art. Built with Go as a CLI tool.',
    tags: ['go', 'cli'],
    href: 'https://github.com/JimDev20/weather-cli',
    featured: false,
    status: 'completed',
    image: null,
  },
  {
    id: 'pocket-todo',
    year: '2026',
    title: 'Pocket Todo',
    short: 'Minimal kanban board with local-first sync and dark mode.',
    details:
      'Minimal kanban board with local-first sync and dark mode. Built with React and SQLite.',
    tags: ['react', 'sqlite'],
    href: 'https://github.com/JimDev20/pocket-todo',
    featured: true,
    status: 'completed',
    image: null,
  },
  {
    id: 'snapgrid',
    year: '2025',
    title: 'SnapGrid',
    short: 'Image gallery with blurhash placeholders and responsive grids.',
    details:
      'Image gallery with blurhash placeholders and responsive grids. Built with Next.js and Tailwind.',
    tags: ['next.js', 'tailwind'],
    href: 'https://github.com/JimDev20/snapgrid',
    featured: false,
    status: 'completed',
    image: null,
  },
  {
    id: 'markdown-cms',
    year: '2025',
    title: 'Markdown CMS',
    short: 'Lightweight CMS using markdown files as the data layer.',
    details:
      'Lightweight CMS using markdown files as the data layer. Built with Node and Astro.',
    tags: ['node', 'astro'],
    href: 'https://github.com/JimDev20/markdown-cms',
    featured: false,
    status: 'completed',
    image: null,
  },
];

export const resume = {
  education: [
    {
      school: 'Cavite State University — Tanza Campus',
      degree: 'BS Information Technology',
      period: '2023 — Present',
      details: 'DCIT 26: Application Development and Emerging Technologies 2. Focus on ReactJS, Tailwind CSS, and deployment via Vercel.',
    },
  ],
  experience: [
    {
      role: 'Student Developer — Capstone Projects',
      company: 'CvSU Projects',
      period: '2023 — Present',
      details: 'Contributed to MaanahaoConnect, Online Bookstore System, and cloud/network lab activities. Used GitHub for version control.',
    },
  ],
  skillsGroups: [
    {
      name: 'Frontend',
      items: ['JavaScript', 'TypeScript', 'React', 'TanStack Start', 'TanStack Router', 'TanStack Query', 'Tailwind CSS', 'Vite'],
    },
    { name: 'Backend', items: ['Node.js', 'PostgreSQL', 'Drizzle ORM', 'REST API'] },
    { name: 'DevOps & Cloud', items: ['Vercel', 'Netlify', 'GitHub Actions', 'Docker'] },
    { name: 'AI & Machine Learning', items: ['OpenAI', 'Claude Code', 'Cursor'] },
    { name: 'Developer Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma'] },
  ],
};

// Plain-text CV used by the "Download CV" button (generated client-side via Blob).
export function buildResumeText() {
  const lines = [];
  lines.push(`${profile.name}`);
  lines.push(`${profile.role} — ${profile.location}`);
  lines.push(`Email: ${profile.email}`);
  lines.push(`GitHub: ${profile.github}`);
  lines.push(`LinkedIn: ${profile.linkedin}`);
  lines.push('');
  lines.push('EDUCATION');
  resume.education.forEach((e) => {
    lines.push(`- ${e.school} | ${e.degree} (${e.period})`);
    lines.push(`  ${e.details}`);
  });
  lines.push('');
  lines.push('EXPERIENCE');
  resume.experience.forEach((x) => {
    lines.push(`- ${x.role} @ ${x.company} (${x.period})`);
    lines.push(`  ${x.details}`);
  });
  lines.push('');
  lines.push('SKILLS');
  resume.skillsGroups.forEach((g) => {
    lines.push(`- ${g.name}: ${g.items.join(', ')}`);
  });
  lines.push('');
  lines.push('PROJECTS');
  projects.slice(0, 4).forEach((p) => {
    lines.push(`- ${p.title} (${p.year}): ${p.short}`);
  });
  return lines.join('\n');
}
