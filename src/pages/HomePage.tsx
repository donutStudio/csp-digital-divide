import { Hero } from '../components/Hero';
import { factors } from '../data/factors';

export const HomePage = () => {
  return (
    <>
      <Hero factorTitles={factors.map((factor) => factor.title)} />

      <section className="mx-auto max-w-7xl px-4 pb-12 lg:px-6">
        <h2 className="text-2xl font-semibold">Quick grading guide</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold text-cyan-200">1) Factor Explorer</h3>
            <p className="mt-2 text-sm text-slate-300">Each factor has explanation, statistics (2020+), chart, solution, and sources.</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold text-cyan-200">2) Comparison Dashboard</h3>
            <p className="mt-2 text-sm text-slate-300">Filter by income, age, education, geography, and access type.</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold text-cyan-200">3) Local Reality Check</h3>
            <p className="mt-2 text-sm text-slate-300">Type a location to view a simulated local panel and link to FCC map.</p>
          </article>
          <article className="rounded-xl border border-white/10 bg-white/5 p-4">
            <h3 className="font-semibold text-cyan-200">4) Solution Simulator</h3>
            <p className="mt-2 text-sm text-slate-300">Match policy options to community profiles and limitations.</p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 lg:px-6">
        <h2 className="text-2xl font-semibold">Project structure</h2>
        <p className="mt-2 text-slate-300">This is a simple research dashboard (not next/previous slides) with clear sections and reusable components.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {factors.map((factor) => (
            <article key={factor.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h3 className="font-medium">{factor.title}</h3>
              <p className="mt-2 text-xs text-slate-400">{factor.category}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
