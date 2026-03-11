import type { Citation } from '../types/research';

export const CitationList = ({ citations }: { citations: Citation[] }) => (
  <ul className="space-y-3">
    {citations.map((citation) => (
      <li key={citation.url} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
        <p className="font-semibold text-slate-100">{citation.title} ({citation.year})</p>
        <p className="text-slate-400">{citation.publisher}</p>
        <a
          href={citation.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block break-all text-cyan-300 underline-offset-2 hover:underline"
        >
          {citation.url}
        </a>
      </li>
    ))}
  </ul>
);
