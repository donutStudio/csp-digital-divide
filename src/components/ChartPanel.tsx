import { Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import type { ChartDatum } from '../types/research';

interface ChartPanelProps {
  data: ChartDatum[];
  label: string;
}

export const ChartPanel = ({ data, label }: ChartPanelProps) => (
  <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-panel" aria-label={label}>
    <h3 className="mb-3 text-sm font-semibold text-slate-300">{label}</h3>
    <div className="h-72 w-full">
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 12, right: 10, left: 0, bottom: 8 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis dataKey="group" stroke="#cbd5e1" tick={{ fontSize: 12 }} />
          <YAxis stroke="#cbd5e1" tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ background: '#0f172a', border: '1px solid #334155', borderRadius: '0.75rem' }}
            cursor={{ fill: 'rgba(34,211,238,0.1)' }}
          />
          <ReferenceLine y={80} stroke="#a78bfa" strokeDasharray="4 4" />
          <Bar dataKey="value" fill="#22d3ee" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </section>
);
