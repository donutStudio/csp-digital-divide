import { Link } from 'react-router-dom';

interface HeroProps {
  factorTitles: string[];
}

export const Hero = ({ factorTitles }: HeroProps) => (
  <section className="px-4 pb-14 pt-14 lg:px-6">
    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_1fr]">
      <div>
        <p className="mb-4 inline-flex rounded-full border border-cyan-300/40 bg-cyan-400/10 px-4 py-1 text-xs tracking-[0.2em] text-cyan-200">
          INTERACTIVE RESEARCH PROJECT
        </p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl">
          The <span className="text-cyan-300">Digital Divide</span> Lab
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">
          The digital divide is the unequal access to reliable internet, devices, and digital skills needed to fully participate in modern life.
        </p>
        <p className="mt-3 max-w-2xl text-slate-400">
          This app is designed to be easy to grade: explore factors, compare groups, test solutions, and review citations.
        </p>
        <Link
          to="/explorer"
          className="mt-7 inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Enter the Lab
        </Link>
      </div>

      <aside className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-panel">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-300">Seven required factors</h2>
        <ul className="space-y-2 text-sm">
          {factorTitles.map((factor, idx) => (
            <li key={factor} className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2">
              <span className="rounded-full bg-cyan-500/20 px-2 py-0.5 text-xs text-cyan-300">{idx + 1}</span>
              <span>{factor}</span>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  </section>
);
