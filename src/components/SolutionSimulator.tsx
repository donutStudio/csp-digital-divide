import { useMemo, useState } from 'react';
import { factors } from '../data/factors';
import { communityProfiles, interventions } from '../data/simulatorData';

export const SolutionSimulator = () => {
  const [profileId, setProfileId] = useState(communityProfiles[0].id);
  const [interventionId, setInterventionId] = useState(interventions[0].id);

  const profile = communityProfiles.find((item) => item.id === profileId) ?? communityProfiles[0];
  const intervention = interventions.find((item) => item.id === interventionId) ?? interventions[0];

  const impactedFactors = useMemo(
    () => factors.filter((factor) => intervention.addresses.includes(factor.id) || profile.priorityFactors.includes(factor.id)),
    [intervention.addresses, profile.priorityFactors]
  );

  return (
    <section className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-panel">
      <h2 className="text-2xl font-semibold">Policy Lab Controls</h2>
      <p className="mt-2 text-slate-300">Choose a community and intervention to evaluate likely impact and limits.</p>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="text-sm text-slate-300">
          Community profile
          <select value={profileId} onChange={(event) => setProfileId(event.target.value)} className="mt-1 w-full rounded-lg border border-white/20 bg-slate-950 p-2">
            {communityProfiles.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </label>
        <label className="text-sm text-slate-300">
          Intervention option
          <select value={interventionId} onChange={(event) => setInterventionId(event.target.value)} className="mt-1 w-full rounded-lg border border-white/20 bg-slate-950 p-2">
            {interventions.map((item) => (
              <option key={item.id} value={item.id}>{item.label}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <article className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="font-semibold text-cyan-200">Why it helps</h3>
          <p className="mt-2 text-sm text-slate-100">{intervention.whyHelps}</p>
          <p className="mt-2 text-xs text-slate-400">Community context: {profile.context}</p>
        </article>
        <article className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="font-semibold text-amber-200">Remaining limitation</h3>
          <p className="mt-2 text-sm text-slate-100">{intervention.limitation}</p>
        </article>
        <article className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="font-semibold text-emerald-200">Research support</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-100">
            {intervention.sourceTitles.map((source) => (
              <li key={source}>{source}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-6 rounded-xl border border-cyan-300/30 bg-cyan-500/10 p-4">
        <h3 className="font-semibold text-cyan-200">Factors addressed in this scenario</h3>
        {impactedFactors.length ? (
          <ul className="mt-2 flex flex-wrap gap-2">
            {impactedFactors.map((factor) => (
              <li key={factor.id} className="rounded-full bg-slate-950 px-3 py-1 text-xs">{factor.title}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-slate-300">No direct matches found. Try another policy combination.</p>
        )}
      </div>
    </section>
  );
};
