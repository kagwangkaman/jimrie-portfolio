import { useState } from 'react';
import { profile } from '../data/portfolio.js';

const LINKS = [
  { id: 'home', label: 'home' },
  { id: 'about', label: 'about' },
  { id: 'projects', label: 'projects' },
  { id: 'resume', label: 'resume' },
  { id: 'contact', label: 'contact' },
];

// MobileHeader: top bar with menu for small screens.
export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/90 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="h-8 w-8 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.src = 'https://github.com/JimDev20.png';
            }}
          />
          <span className="font-display text-base lowercase text-zinc-900">{profile.shortName}</span>
          <span className="font-mono text-[10px] text-zinc-400">{profile.role}</span>
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="rounded-md border border-zinc-200 px-3 py-1 font-mono text-xs lowercase text-zinc-600 transition-all active:scale-95"
        >
          {open ? 'close' : 'menu'}
        </button>
      </div>

      {open && (
        <nav className="flip-in border-t border-zinc-100 px-4 py-3">
          <ul className="space-y-1">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 font-mono text-sm lowercase text-zinc-600 hover:bg-zinc-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
