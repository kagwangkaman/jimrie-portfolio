// Central portfolio data — edit this file to personalize your e-portfolio.
// Inspired by My-Portfolio-main format, simplified for DCIT 26 requirements.

export const profile = {
  name: 'Jimrie Parado',
  shortName: 'jim',
  role: 'developer',
  tagline: '00 — index',
  headline: 'Jimrie Parado',
  intro:
    'BSIT student at Cavite State University. I build responsive web apps with ReactJS and Tailwind CSS.',
  welcome: 'Welcome to my e-portfolio.',
  location: 'Cavite, Philippines',
  email: 'jimrie.parado@example.com',
  github: 'https://github.com/JimDev20',
  linkedin: 'https://www.linkedin.com/in/jimrie-parado-ba5399381/',
  facebook: 'https://www.facebook.com/jimrie.parado.3/',
  instagram: 'https://www.instagram.com/jimrieparado/',
  twitter: 'https://x.com/JimParado43308',
};

export const about = {
  background: [
    'I am Jimrie Parado, an Information Technology student at Cavite State University (CvSU) taking DCIT 26: Application Development and Emerging Technologies 2. I build clean, responsive web applications.',
    'I started with HTML and CSS, then JavaScript, and now ReactJS. I keep my work simple and readable: one idea per component, Tailwind for layout, and state only where the page needs to react.',
  ],
  interests: [
    'Web Development',
    'Cloud Engineering',
    'Cyber Security',
    'UI / UX Design',
    'Open Source',
    'Basketball & Music',
  ],
  skills: [
    { name: 'ReactJS', level: 85 },
    { name: 'JavaScript (ES6+)', level: 88 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'HTML & CSS', level: 92 },
    { name: 'Node.js', level: 70 },
    { name: 'Git & GitHub', level: 80 },
    { name: 'AWS / Cloud Basics', level: 60 },
    { name: 'Python', level: 65 },
  ],
};

export const projects = [
  {
    id: 'soc-monitor',
    year: '2026',
    title: 'SOC Threat Monitor',
    short: 'SIEM dashboard that groups firewall and endpoint logs into prioritized alerts.',
    details:
      'ReactJS + Tailwind frontend. Filterable alert table, severity badges, expandable detail rows, and a mock live feed.',
    tags: ['react', 'tailwind', 'siem'],
    href: 'https://github.com/JimDev20',
    featured: true,
    status: 'completed',
    image: null,
  },
  {
    id: 'aws-landing',
    year: '2026',
    title: 'Auto-Scaling AWS Landing Zone',
    short: 'AWS setup with VPCs, IAM policies, and autoscaling groups.',
    details:
      'Case study with architecture diagram, Terraform snippets, cost notes, and lessons learned.',
    tags: ['aws', 'terraform', 'cloud'],
    href: 'https://github.com/JimDev20',
    featured: true,
    status: 'completed',
    image: null,
  },
  {
    id: 'maana Connect',
    year: '2025',
    title: 'MaanahaoConnect',
    short: 'Community platform wireframe and UX case study.',
    details:
      'UX research and mid-fidelity wireframe, rebuilt as React components with a responsive Tailwind grid.',
    tags: ['react', 'ux', 'wireframe'],
    href: 'https://github.com/JimDev20',
    featured: true,
    status: 'completed',
    image: null,
  },
  {
    id: 'bookstore',
    year: '2025',
    title: 'Online Bookstore Management System',
    short: 'Bookstore system with cart, search, and admin dashboard.',
    details:
      'School project: React frontend with REST API backend, cart drawer, and validated forms.',
    tags: ['react', 'node', 'crud'],
    href: 'https://github.com/JimDev20',
    featured: false,
    status: 'completed',
    image: null,
  },
  {
    id: 'netflow',
    year: '2025',
    title: 'NetFlow Analyzer',
    short: 'Network traffic analysis over NetFlow/IPFIX.',
    details:
      'Python + Go backend with a React chart view and tag filtering.',
    tags: ['python', 'networking', 'go'],
    href: 'https://github.com/JimDev20',
    featured: false,
    status: 'in_progress',
    image: null,
  },
  {
    id: 'polaroid',
    year: '2024',
    title: 'Polaroid Memories',
    short: 'Photo gallery with polaroid-style cards.',
    details:
      'Frontend practice: CSS transforms, hover lift, and click-to-flip cards.',
    tags: ['html', 'css', 'javascript'],
    href: 'https://github.com/JimDev20',
    featured: false,
    status: 'completed',
    image: null,
  },
];

export const resume = {
  education: [
    {
      school: 'Cavite State University — Main Campus',
      degree: 'BS Information Technology',
      period: '2023 — Present',
      details: 'DCIT 26: Application Development and Emerging Technologies 2. Focus on ReactJS, Tailwind CSS, and deployment via Vercel.',
    },
    {
      school: 'Senior High School — STEM / ICT',
      degree: 'Senior High Diploma',
      period: '2021 — 2023',
      details: 'Graduated with honors. Built first HTML/CSS/JS projects and joined coding clubs.',
    },
  ],
  experience: [
    {
      role: 'Freelance Web Developer',
      company: 'Self-employed',
      period: '2024 — Present',
      details: 'Build responsive landing pages and portfolio sites with React + Tailwind. Handle client contact forms, validation, and Vercel deployment.',
    },
    {
      role: 'Student Developer — Capstone Projects',
      company: 'CvSU Projects',
      period: '2023 — Present',
      details: 'Contributed to MaanahaoConnect, Online Bookstore System, and cloud/network lab activities. Used GitHub for version control.',
    },
  ],
  skillsGroups: [
    { name: 'Frontend', items: ['ReactJS', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3'] },
    { name: 'Backend / Tools', items: ['Node.js', 'Python', 'Git', 'Vite', 'Vercel'] },
    { name: 'Cloud / Other', items: ['AWS Basics', 'REST APIs', 'Figma', 'Responsive Design'] },
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
