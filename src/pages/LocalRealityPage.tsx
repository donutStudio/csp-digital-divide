import { useState } from 'react';
import { QRCodeCard } from '../components/QRCodeCard';

export const LocalRealityPage = () => {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState('');

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
      <h1 className="text-3xl font-bold">Local Reality Check</h1>
      <p className="mt-2 text-slate-300">Broadband inequality changes neighborhood by neighborhood. Use this lookup prompt to connect class analysis with local evidence.</p>
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
              placeholder="e.g., 02139 or Tulsa"
              className="min-w-[220px] flex-1 rounded-lg border border-white/20 bg-slate-950 px-3 py-2"
            />
            <button
              onClick={() => setSearched(query.trim())}
              className="rounded-lg bg-cyan-400 px-4 py-2 font-semibold text-slate-950 hover:bg-cyan-300"
            >
              Check Area
            </button>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/20 via-slate-900 to-emerald-500/20 p-5">
            <p className="text-sm text-slate-200">Map-style preview panel (simulation)</p>
            <div className="mt-4 h-48 rounded-lg border border-white/10 bg-slate-950/60" aria-label="Mock local broadband map" />
            {searched ? (
              <p className="mt-4 text-sm text-slate-300">
                Simulated lookup for <span className="font-semibold text-cyan-200">{searched}</span>: Coverage quality can vary by block, provider, and speed tier. Confirm exact availability on the FCC National Broadband Map.
              </p>
            ) : (
              <p className="mt-4 text-sm text-slate-400">Type a location to generate a guided local check message.</p>
            )}
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
