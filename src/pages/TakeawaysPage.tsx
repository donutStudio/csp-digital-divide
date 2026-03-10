import { CitationList } from '../components/CitationList';
import { factors } from '../data/factors';

const allCitations = factors.flatMap((factor) => factor.citations).filter((citation, index, arr) => arr.findIndex((item) => item.url === citation.url) === index);

export const TakeawaysPage = () => (
  <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6">
    <h1 className="text-3xl font-bold">Final Synthesis</h1>
    <p className="mt-2 text-slate-300">The digital divide is a system of overlapping barriers, not one isolated technology problem.</p>

    <div className="mt-6 grid gap-4 md:grid-cols-3">
      <article className="rounded-xl border border-white/10 bg-white/5 p-4"><h2 className="font-semibold text-cyan-200">Takeaway 1</h2><p className="mt-2 text-sm text-slate-200">Access requires affordability, infrastructure, devices, and skills working together.</p></article>
      <article className="rounded-xl border border-white/10 bg-white/5 p-4"><h2 className="font-semibold text-cyan-200">Takeaway 2</h2><p className="mt-2 text-sm text-slate-200">Different communities face different barrier combinations, so one-size policy misses many learners.</p></article>
      <article className="rounded-xl border border-white/10 bg-white/5 p-4"><h2 className="font-semibold text-cyan-200">Takeaway 3</h2><p className="mt-2 text-sm text-slate-200">Evidence-based, local, and equity-centered interventions produce the strongest long-term outcomes.</p></article>
    </div>

    <section className="mt-10">
      <h2 className="mb-4 text-2xl font-semibold">Global References</h2>
      <CitationList citations={allCitations} />
    </section>
  </section>
);
