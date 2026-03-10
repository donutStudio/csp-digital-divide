export interface Citation {
  title: string;
  url: string;
  publisher: string;
  year: number;
}

export interface StatPoint {
  label: string;
  value: number;
  unit: '%' | 'M' | 'index';
  context: string;
  year: number;
}

export interface ChartDatum {
  group: string;
  value: number;
  benchmark?: number;
}

export interface Factor {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  explanation: string;
  whyItMatters: string;
  imageAlt: string;
  imageGradient: string;
  stats: StatPoint[];
  chartLabel: string;
  chartData: ChartDatum[];
  solution: string;
  citations: Citation[];
  tags: string[];
}

export interface ComparisonRecord {
  income: 'Low' | 'Middle' | 'High';
  ageGroup: '14-24' | '25-44' | '45-64' | '65+';
  education: 'No Diploma' | 'High School' | 'Some College+';
  geography: 'Urban' | 'Rural';
  accessType: 'Broadband' | 'Smartphone-Only';
  connectedRate: number;
  skillConfidence: number;
}

export interface CommunityProfile {
  id: string;
  label: string;
  context: string;
  priorityFactors: string[];
}

export interface Intervention {
  id: string;
  label: string;
  addresses: string[];
  whyHelps: string;
  limitation: string;
  sourceTitles: string[];
}
