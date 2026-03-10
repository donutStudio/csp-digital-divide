import type { StatPoint } from '../types/research';

export const StatCallout = ({ stat }: { stat: StatPoint }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-4">
    <p className="text-xs uppercase tracking-wider text-slate-400">{stat.label}</p>
    <p className="mt-1 text-3xl font-bold text-cyan-200">
      {stat.value}
      {stat.unit === '%' ? '%' : stat.unit === 'M' ? 'M' : ''}
    </p>
    <p className="text-sm text-slate-300">{stat.context} · {stat.year}</p>
  </div>
);
