import { useMemo, useState } from 'react';
import { QRCodeCard } from '../components/QRCodeCard';

interface LocalInsight {
  areaType: 'Urban cluster' | 'Suburban area' | 'Rural edge';
  estimatedCoverage: number;
  estimatedAffordabilityRisk: number;
  blocks: { id: string; status: 'good' | 'mixed' | 'limited' }[];
}

const buildMockInsight = (input: string): LocalInsight => {
  const seed = input
    .toLowerCase()
    .split('')
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);

  const areaType = (['Urban cluster', 'Suburban area', 'Rural edge'] as const)[seed % 3];
  const estimatedCoverage = 62 + (seed % 33);
  const estimatedAffordabilityRisk = 18 + (seed % 42);

  const blocks = Array.from({ length: 12 }, (_, i) => {
    const v = (seed + i * 11) % 100;
    const status: LocalInsight['blocks'][number]['status'] = v > 68 ? 'good' : v > 38 ? 'mixed' : 'limited';
    return { id: `block-${i}`, status };
  });

  return { areaType, estimatedCoverage, estimatedAffordabilityRisk, blocks };
};

export const LocalRealityPage = () => {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState('');

  const insight = useMemo(() => (searched ? buildMockInsight(searched) : null), [searched]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <h1 className="text-3xl font-bold">Local Reality Check</h1>
      <p className="mt-2 text-slate-300">
        Local broadband inequality can vary street-by-street. Enter a ZIP code or city to generate a visual mock result,
        then verify using the official FCC map.
      </p>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-panel">
          <label className="block text-sm text-slate-300" htmlFor="location-input">
            Enter ZIP code or city
          </label>
          <div className="flex flex-wrap gap-2">
            <input
              id="location-input"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="e.g., 30024 or Tulsa"
              className="min-w-[220px] flex-1 rounded-lg border border-white/20 bg-slate-950 px-3 py-2"
            />
            <button
              onClick={() => setSearched(query.trim())}
              className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Check Area
            </button>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-950/50 p-4">
            <p className="text-sm text-slate-200">Map-style preview (simulated)</p>
            {insight ? (
              <>
                <div className="mt-3 grid grid-cols-4 gap-2" aria-label="Simulated local coverage grid">
                  {insight.blocks.map((block) => (
                    <div
                      key={block.id}
                      className={`h-12 rounded-md border border-white/10 ${
                        block.status === 'good'
                          ? 'bg-emerald-500/40'
                          : block.status === 'mixed'
                            ? 'bg-amber-500/40'
                            : 'bg-rose-500/40'
                      }`}
                      title={`Service quality: ${block.status}`}
                    />
                  ))}
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2">
                  <p className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                    Estimated area type: <span className="font-semibold text-cyan-200">{insight.areaType}</span>
                  </p>
                  <p className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
                    Simulated coverage score: <span className="font-semibold text-cyan-200">{insight.estimatedCoverage}%</span>
                  </p>
                  <p className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 sm:col-span-2">
                    Simulated affordability risk: <span className="font-semibold text-cyan-200">{insight.estimatedAffordabilityRisk}%</span>
                  </p>
                </div>

                <p className="mt-3 text-sm text-slate-300">
                  Simulated lookup for <span className="font-semibold text-cyan-200">{searched}</span>: coverage quality can vary by
                  block, provider, and speed tier. Confirm exact availability on the FCC National Broadband Map.
                </p>
              </>
            ) : (
              <p className="mt-4 rounded-lg border border-dashed border-white/20 p-4 text-sm text-slate-400">
                No lookup yet. Enter a city or ZIP code and click <strong>Check Area</strong> to render a mock local result.
              </p>
            )}

            <div className="mt-3 flex gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center gap-1"><span className="h-3 w-3 rounded bg-emerald-500/50" /> stronger</span>
              <span className="inline-flex items-center gap-1"><span className="h-3 w-3 rounded bg-amber-500/50" /> mixed</span>
              <span className="inline-flex items-center gap-1"><span className="h-3 w-3 rounded bg-rose-500/50" /> limited</span>
            </div>
          </div>

          <a
            href="https://broadbandmap.fcc.gov/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-lg border border-cyan-300/40 px-3 py-2 text-sm text-cyan-200 hover:bg-cyan-400/10"
          >
            Open FCC National Broadband Map
          </a>
        </article>

        <QRCodeCard />
      </div>
    </section>
  );
};
