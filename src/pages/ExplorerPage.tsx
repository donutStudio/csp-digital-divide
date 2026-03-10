import { FactorCard } from '../components/FactorCard';
import { factors } from '../data/factors';

export const ExplorerPage = () => (
  <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
    <h1 className="text-3xl font-bold">Factor Explorer</h1>
    <p className="mt-2 text-slate-300">Select any factor to open a research panel with overview, data, solution strategy, and sources.</p>
    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {factors.map((factor) => (
        <FactorCard key={factor.id} factor={factor} />
      ))}
    </div>
  </section>
);
