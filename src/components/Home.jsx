import { profile, buildResumeText } from '../data/portfolio.js';

// Home: welcome, introduction, actions.
export default function Home({ onBrowseProjects }) {
  const handleDownloadCV = () => {
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
    <section id="home" className="fade-up scroll-mt-20">
      <div className="label-micro mb-6">{profile.tagline}</div>

      <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
        <div className="flex shrink-0 flex-col items-start gap-3">
          <img
            src="/images/profile.jpg"
            alt="Jimrie Parado"
            className="h-28 w-28 rounded-lg object-cover transition-transform duration-300 hover:scale-105 sm:h-36 sm:w-36"
            onError={(e) => {
              e.currentTarget.src = 'https://github.com/JimDev20.png';
            }}
          />
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-3 py-1 font-mono text-[10px] lowercase text-zinc-500 dark:border-zinc-700">
            <span className="h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
            available for work
          </span>
        </div>
        <div>
          <h1 className="font-display text-4xl leading-none tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl">
            {profile.headline}
          </h1>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
            {profile.intro}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-4 py-2 font-mono text-[12px] lowercase text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98] dark:bg-zinc-100 dark:text-zinc-900"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
              </svg>
              download cv
            </button>
            <button
              onClick={onBrowseProjects}
              className="group inline-flex items-center gap-1 font-mono text-[12px] lowercase text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white"
            >
              browse projects
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
