import { profile } from '../data/portfolio.js';

const NAV = [
  { id: 'home', num: '01', label: 'home' },
  { id: 'about', num: '02', label: 'about' },
  { id: 'projects', num: '03', label: 'projects' },
  { id: 'resume', num: '04', label: 'resume' },
  { id: 'contact', num: '05', label: 'contact' },
];

// Sidebar: desktop navigation menu.
export default function Sidebar({ activeSection }) {
  return (
    <aside className="fixed left-0 top-0 z-30 hidden h-screen w-56 flex-col justify-between border-r border-zinc-200 bg-white px-6 py-8 lg:flex">
      <div>
        <div className="mb-6 flex items-center gap-3">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="h-10 w-10 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://github.com/JimDev20.png';
            }}
          />
          <div>
            <span className="block font-display text-lg lowercase leading-none tracking-tight text-zinc-900">
              {profile.shortName}
            </span>
            <span className="block font-mono text-[10px] text-zinc-400">{profile.role}</span>
          </div>
        </div>

        <div className="label-micro mb-3">navigation</div>
        <nav className="space-y-1">
          {NAV.map((n) => {
            const active = activeSection === n.id;
            return (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={`group flex items-center gap-2.5 py-1 font-mono text-[13px] transition-all duration-200 hover:translate-x-0.5 ${
                  active ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                <span className="w-6 text-[11px] text-zinc-400">{n.num}</span>
                <span className="lowercase tracking-tight">
                  {active ? `> ${n.label}` : n.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>

      <p className="font-mono text-[10px] text-zinc-400">2026</p>
    </aside>
  );
}
