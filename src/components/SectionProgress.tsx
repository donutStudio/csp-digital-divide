interface SectionProgressProps {
  sections: { id: string; label: string }[];
  active: string;
}

export const SectionProgress = ({ sections, active }: SectionProgressProps) => (
  <aside className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 rounded-xl border border-white/10 bg-slate-900/80 p-2 shadow-panel xl:block">
    <ul className="space-y-1">
      {sections.map((section) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className={`block rounded-md px-2 py-1 text-xs ${active === section.id ? 'bg-cyan-500/20 text-cyan-200' : 'text-slate-400 hover:bg-white/10'}`}
            aria-label={`Jump to ${section.label}`}
          >
            {section.label}
          </a>
        </li>
      ))}
    </ul>
  </aside>
);
