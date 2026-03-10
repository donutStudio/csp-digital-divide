import type { ComparisonRecord } from '../types/research';

interface FilterState {
  income: string;
  ageGroup: string;
  education: string;
  geography: string;
  accessType: string;
}

interface FilterPanelProps {
  filters: FilterState;
  onChange: (next: FilterState) => void;
}

const options: Record<keyof FilterState, string[]> = {
  income: ['All', 'Low', 'Middle', 'High'],
  ageGroup: ['All', '14-24', '25-44', '45-64', '65+'],
  education: ['All', 'No Diploma', 'High School', 'Some College+'],
  geography: ['All', 'Urban', 'Rural'],
  accessType: ['All', 'Broadband', 'Smartphone-Only']
};

export const applyFilters = (data: ComparisonRecord[], filters: FilterState) =>
  data.filter((row) =>
    (filters.income === 'All' || row.income === filters.income) &&
    (filters.ageGroup === 'All' || row.ageGroup === filters.ageGroup) &&
    (filters.education === 'All' || row.education === filters.education) &&
    (filters.geography === 'All' || row.geography === filters.geography) &&
    (filters.accessType === 'All' || row.accessType === filters.accessType)
  );

export const FilterPanel = ({ filters, onChange }: FilterPanelProps) => (
  <div className="grid gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4 shadow-panel md:grid-cols-5">
    {(Object.keys(options) as (keyof FilterState)[]).map((field) => (
      <label key={field} className="text-sm text-slate-300">
        <span className="mb-1 block capitalize">{field}</span>
        <select
          value={filters[field]}
          onChange={(event) => onChange({ ...filters, [field]: event.target.value })}
          className="w-full rounded-lg border border-white/20 bg-slate-950 px-2 py-2"
        >
          {options[field].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    ))}
  </div>
);
