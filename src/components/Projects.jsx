import { useState } from 'react';
import { projects } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

// Projects: work samples with expandable details.
export default function Projects() {
  const [expandedId, setExpandedId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.slice(0, 3);

  const toggleDetails = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="projects" className="mt-16 scroll-mt-20">
      <div className="flex items-end justify-between">
        <SectionHeading index="02" title="selected work" />
        <span className="mb-6 font-mono text-[11px] text-gray-400">
          {projects.length} project{projects.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-neutral-800 dark:border-neutral-800">
        {visible.map((p) => {
          const expanded = expandedId === p.id;
          return (
            <article key={p.id} className="group py-4 transition-colors hover:bg-gray-50 dark:hover:bg-neutral-900">
              <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4 px-2">
                <span className="label-micro mt-0.5 tabular-nums">{p.year}</span>
                <div className="min-w-0">
                  <span className="block text-[15px] leading-tight text-black dark:text-white">
                    {p.title}
                    {p.featured && (
                      <span className="ml-2 rounded bg-black px-1.5 py-0.5 align-middle font-mono text-[10px] lowercase text-white dark:bg-white dark:text-black">
                        featured
                      </span>
                    )}
                    {p.status === 'in_progress' && (
                      <span className="ml-2 rounded border border-gray-300 px-1.5 py-0.5 align-middle font-mono text-[10px] lowercase text-gray-500 dark:border-neutral-600">
                        in progress
                      </span>
                    )}
                  </span>
                  <span className="mt-1 block break-words text-[13px] leading-snug text-gray-500 dark:text-gray-400">
                    {p.short}
                  </span>

                  {expanded && (
                    <div className="flip-in mt-2">
                      <p className="rounded-md bg-gray-100 p-3 text-[13px] leading-relaxed text-gray-600 dark:bg-neutral-800 dark:text-gray-300">
                        {p.details}
                      </p>
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block font-mono text-[12px] lowercase text-gray-500 underline-offset-4 hover:text-black hover:underline dark:hover:text-white"
                      >
                        view on github
                      </a>
                    </div>
                  )}

                  <div className="mt-1.5 flex flex-wrap items-center gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded border border-gray-200 px-1.5 py-0.5 font-mono text-[10px] text-gray-500 dark:border-neutral-700"
                      >
                        {t}
                      </span>
                    ))}
                    <button
                      onClick={() => toggleDetails(p.id)}
                      className="ml-1 font-mono text-[11px] lowercase text-gray-500 underline-offset-4 transition-all hover:text-black hover:underline active:scale-95 dark:hover:text-white"
                    >
                      {expanded ? 'hide details' : 'show details'}
                    </button>
                  </div>
                </div>
                <span className="font-mono text-[12px] text-gray-400" aria-hidden="true">
                  +
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {projects.length > 3 && (
        <button
          onClick={() => setShowAll((v) => !v)}
          className="mt-4 w-full rounded-md border border-gray-200 py-2 font-mono text-[12px] lowercase text-gray-500 transition-all hover:border-gray-400 hover:text-black active:scale-[0.99] dark:border-neutral-700 dark:hover:text-white"
        >
          {showAll ? 'view less' : `view more (${projects.length - 3} more)`}
        </button>
      )}
    </section>
  );
}
