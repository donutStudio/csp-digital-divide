import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/explorer', label: 'Explorer' },
  { to: '/compare', label: 'Compare' },
  { to: '/local-reality', label: 'Local Check' },
  { to: '/simulator', label: 'Simulator' },
  { to: '/takeaways', label: 'Takeaways' }
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6" aria-label="Main navigation">
        <Link to="/" className="text-sm font-semibold tracking-wide text-cyan-300">
          Digital Divide Lab
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-md border border-white/20 px-3 py-1 text-sm md:hidden"
          aria-label="Toggle navigation menu"
        >
          Menu
        </button>

        <ul className="hidden gap-1 md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-xs transition ${isActive ? 'bg-cyan-500/20 text-cyan-200' : 'text-slate-300 hover:bg-white/10'}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-white/10 px-4 pb-4 md:hidden">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};
