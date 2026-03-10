import { Hero } from '../components/Hero';
import { SectionProgress } from '../components/SectionProgress';
import { factors } from '../data/factors';
import { useSectionProgress } from '../hooks/useSectionProgress';

const sectionLinks = [
  { id: 'intro', label: 'Intro' },
  { id: 'factors-preview', label: 'Factors' },
  { id: 'features', label: 'Experience' }
];

export const HomePage = () => {
  const { active } = useSectionProgress(sectionLinks.map((s) => s.id));

  return (
    <>
      <SectionProgress sections={sectionLinks} active={active} />
      <div id="intro">
        <Hero factorTitles={factors.map((factor) => factor.title)} />
      </div>
      <section id="factors-preview" className="mx-auto max-w-7xl px-4 pb-14 lg:px-6">
        <h2 className="text-2xl font-semibold">Research scope</h2>
        <p className="mt-2 text-slate-300">The lab examines seven interconnected factors using post-2020 data and evidence-based interventions.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {factors.map((factor) => (
            <article key={factor.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <h3 className="font-medium">{factor.title}</h3>
              <p className="mt-2 text-xs text-slate-400">{factor.category}</p>
            </article>
          ))}
        </div>
      </section>
      <section id="features" className="mx-auto max-w-7xl px-4 pb-16 lg:px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900 to-slate-800 p-6">
          <h2 className="text-2xl font-semibold">Not a slideshow — an interactive policy exhibit</h2>
          <p className="mt-2 text-slate-300">Use the explorer tabs, dynamic comparison filters, local FCC reality check, and intervention simulator to investigate real trade-offs.</p>
        </div>
      </section>
    </>
  );
};
