import { useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { FilterPanel, applyFilters } from '../components/FilterPanel';
import { comparisonData } from '../data/comparisonData';

const defaultFilters = {
  income: 'All',
  ageGroup: 'All',
  education: 'All',
  geography: 'All',
  accessType: 'All'
};

export const ComparisonPage = () => {
  const [filters, setFilters] = useState(defaultFilters);

  const filtered = useMemo(() => applyFilters(comparisonData, filters), [filters]);
  const chartData = useMemo(() => {
    if (!filtered.length) return [];
    const avgConnect = Math.round(filtered.reduce((sum, row) => sum + row.connectedRate, 0) / filtered.length);
    const avgSkill = Math.round(filtered.reduce((sum, row) => sum + row.skillConfidence, 0) / filtered.length);
    return [
      { metric: 'Connected rate', value: avgConnect },
      { metric: 'Skill confidence', value: avgSkill }
    ];
  }, [filtered]);

  return (
    <section className="mx-auto max-w-7xl space-y-6 px-4 py-10 lg:px-6">
      <h1 className="text-3xl font-bold">Comparison Dashboard</h1>
      <p className="text-slate-300">Filter by social and access variables to compare how groups experience connection and digital confidence.</p>
      <FilterPanel filters={filters} onChange={setFilters} />
      <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-panel">
        <h2 className="text-xl font-semibold">Dynamic results</h2>
        <div className="mt-4 h-72">
          {chartData.length ? (
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="metric" stroke="#cbd5e1" />
                <YAxis stroke="#cbd5e1" />
                <Tooltip contentStyle={{ background: '#0f172a', border: '1px solid #334155' }} />
                <Bar dataKey="value" fill="#22d3ee" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <p className="rounded-lg border border-dashed border-white/20 p-5 text-sm text-slate-300">No rows match the selected filters. Reset one or more filters to compare available groups.</p>
          )}
        </div>
        <p className="mt-4 text-sm text-slate-300">
          Annotation: This view demonstrates that connectivity outcomes shift when income, geography, and access type intersect. Smartphone-only access often tracks with lower confidence for high-stakes tasks.
        </p>
      </div>
    </section>
  );
};
