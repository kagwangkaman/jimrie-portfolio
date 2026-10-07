import { resume, buildResumeText } from '../data/portfolio.js';
import SectionHeading from './SectionHeading.jsx';

// Resume: education, experience, skills.
export default function Resume() {
  const handleDownload = () => {
    const text = buildResumeText();
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Jimrie-Parado-CV.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume" className="mt-16 scroll-mt-20">
      <div className="flex items-end justify-between">
        <SectionHeading index="03" title="resume" />
        <button
          onClick={handleDownload}
          className="mb-6 rounded-md bg-black px-3 py-1.5 font-mono text-[11px] lowercase text-white transition-all hover:opacity-90 active:scale-[0.98] dark:bg-white dark:text-black"
        >
          download cv
        </button>
      </div>

      <div className="space-y-6">
        <div className="rounded-lg border border-gray-200 p-6 dark:border-neutral-800">
          <h3 className="font-mono text-[12px] uppercase tracking-wider text-gray-400">education</h3>
          <ul className="mt-4 space-y-5">
            {resume.education.map((e) => (
              <li key={e.school} className="border-l-2 border-black pl-4 dark:border-white">
                <div className="font-mono text-[11px] text-gray-400">{e.period}</div>
                <div className="mt-1 font-medium text-black dark:text-white">{e.school}</div>
                <div className="font-mono text-[12px] text-gray-500">{e.degree}</div>
                <p className="mt-1 text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">{e.details}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 p-6 dark:border-neutral-800">
          <h3 className="font-mono text-[12px] uppercase tracking-wider text-gray-400">experience</h3>
          <ul className="mt-4 space-y-5">
            {resume.experience.map((x) => (
              <li key={x.role} className="border-l-2 border-black pl-4 dark:border-white">
                <div className="font-mono text-[11px] text-gray-400">{x.period}</div>
                <div className="mt-1 font-medium text-black dark:text-white">{x.role}</div>
                <div className="font-mono text-[12px] text-gray-500">{x.company}</div>
                <p className="mt-1 text-[13px] leading-relaxed text-gray-500 dark:text-gray-400">{x.details}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-gray-200 p-6 dark:border-neutral-800">
          <h3 className="font-mono text-[12px] uppercase tracking-wider text-gray-400">skills</h3>
          <div className="mt-4 space-y-4">
            {resume.skillsGroups.map((g) => (
              <div key={g.name}>
                <div className="font-mono text-[12px] uppercase tracking-wider text-gray-400">{g.name}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-md bg-gray-100 px-2.5 py-1 font-mono text-[12px] text-gray-700 dark:bg-neutral-800 dark:text-gray-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
