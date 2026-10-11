import { useState } from 'react';
import { about } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

// About: background, skills, interests.
export default function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="mt-16 scroll-mt-20">
      <SectionHeading index="01" title="about me" />

      <div className="rounded-lg border border-gray-200 p-6 transition-colors hover:border-gray-300 dark:border-neutral-800 dark:hover:border-neutral-700">
        <h3 className="font-mono text-[12px] uppercase tracking-wider text-gray-400">personal background</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
          {about.background[0]}
        </p>
        {/* conditional rendering: extra paragraph only when expanded */}
        {expanded && (
          <p className="flip-in mt-3 text-[15px] leading-relaxed text-gray-600 dark:text-gray-300">
            {about.background[1]}
          </p>
        )}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 font-mono text-[12px] lowercase text-gray-500 underline-offset-4 transition-all hover:text-black hover:underline active:scale-[0.98] dark:hover:text-white"
        >
          {expanded ? 'view less' : 'view more'}
        </button>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-6 dark:border-neutral-800">
          <h3 className="font-mono text-[12px] uppercase tracking-wider text-gray-400">skills</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {about.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-gray-200 px-3 py-1.5 font-mono text-[12px] text-gray-600 dark:border-neutral-700 dark:text-gray-300"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 p-6 dark:border-neutral-800">
          <h3 className="font-mono text-[12px] uppercase tracking-wider text-gray-400">interests</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {about.interests.map((interest) => (
              <span
                key={interest}
                className="cursor-default rounded-full border border-gray-200 px-3 py-1.5 font-mono text-[12px] text-gray-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-black hover:text-black dark:border-neutral-700 dark:text-gray-300 dark:hover:border-white dark:hover:text-white"
              >
                {interest}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">
            Based in Cavite, Philippines. Open to internships and junior developer roles.
          </p>
        </div>
      </div>
    </section>
  );
}
