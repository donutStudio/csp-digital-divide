import { Link } from 'react-router-dom';
import type { Factor } from '../types/research';

export const FactorCard = ({ factor }: { factor: Factor }) => (
  <article className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-panel transition hover:-translate-y-1 hover:border-cyan-300/40">
    <p className="text-xs uppercase tracking-wider text-cyan-300">{factor.category}</p>
    <h3 className="mt-2 text-xl font-semibold">{factor.title}</h3>
    <p className="mt-3 text-sm text-slate-300">{factor.shortDescription}</p>
    <Link
      to={`/explorer/${factor.id}`}
      className="mt-4 inline-flex rounded-lg border border-white/20 px-3 py-1.5 text-sm transition hover:border-cyan-300/50 hover:text-cyan-200"
    >
      Explore factor
    </Link>
  </article>
);
