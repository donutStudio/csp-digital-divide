import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import type { Factor } from '../types/research';
import { ChartPanel } from './ChartPanel';
import { CitationList } from './CitationList';
import { StatCallout } from './StatCallout';

const tabs = ['Overview', 'Data', 'Solutions', 'Sources'] as const;

export const FactorDetail = ({ factor }: { factor: Factor }) => {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>('Overview');

  const tabContent = useMemo(() => {
    if (activeTab === 'Overview') {
      return (
        <div className="space-y-4">
          <p className="text-slate-200">{factor.explanation}</p>
          <div className={`rounded-2xl border border-white/10 bg-gradient-to-br ${factor.imageGradient} p-5`}>
            <p className="text-sm text-slate-200">Visual context panel</p>
            <p className="mt-1 text-xs text-slate-300">{factor.imageAlt}</p>
          </div>
          <div className="rounded-xl border border-cyan-300/30 bg-cyan-500/10 p-4">
            <h3 className="text-sm font-semibold text-cyan-200">Why this matters</h3>
            <p className="mt-1 text-sm text-slate-200">{factor.whyItMatters}</p>
          </div>
        </div>
      );
    }

    if (activeTab === 'Data') {
      return (
        <div className="space-y-5">
          <div className="grid gap-3 md:grid-cols-3">
            {factor.stats.map((stat) => (
              <StatCallout key={stat.label} stat={stat} />
            ))}
          </div>
          <ChartPanel data={factor.chartData} label={factor.chartLabel} />
        </div>
      );
    }

    if (activeTab === 'Solutions') {
      return (
        <div className="rounded-xl border border-emerald-300/20 bg-emerald-500/10 p-4">
          <h3 className="text-lg font-semibold text-emerald-200">Research-Based Solution</h3>
          <p className="mt-2 text-slate-100">{factor.solution}</p>
          <p className="mt-2 text-sm text-slate-300">Tags: {factor.tags.join(', ')}</p>
        </div>
      );
    }

    return <CitationList citations={factor.citations} />;
  }, [activeTab, factor]);

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 lg:px-6">
      <Link to="/explorer" className="mb-6 inline-flex text-sm text-cyan-300 hover:underline">
        ← Back to explorer
      </Link>
      <h1 className="text-3xl font-bold">{factor.title}</h1>
      <p className="mt-2 text-slate-400">{factor.shortDescription}</p>

      <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Factor details tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-lg px-4 py-2 text-sm ${activeTab === tab ? 'bg-cyan-500/20 text-cyan-200' : 'bg-white/5 text-slate-300 hover:bg-white/10'}`}
            role="tab"
            aria-selected={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-6">{tabContent}</div>
    </section>
  );
};
