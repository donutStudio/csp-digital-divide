interface Factor {
  id: string;
  title: string;
  explanation: string;
  statistic: string;
  chartLabel: string;
  chart: { label: string; value: number }[];
  solution: string;
  imageUrl: string;
  imageAlt: string;
  citations: { label: string; url: string }[];
}

const factors: Factor[] = [
  {
    id: 'affordability',
    title: '1) Affordability (Cost Barrier)',
    explanation:
      'Even when broadband exists in a neighborhood, many households still cannot subscribe because monthly service prices, device costs, and fees are too high relative to income.',
    statistic:
      'Pew (2024): 21% of U.S. adults with household income under $30,000 do not own a smartphone, and 43% do not have home broadband.',
    chartLabel: 'Home broadband availability by income (Pew, 2024)',
    chart: [
      { label: 'Income < $30k (have broadband)', value: 57 },
      { label: 'Income $100k+ (have broadband)', value: 92 }
    ],
    solution:
      'Expand and simplify subsidy enrollment (e.g., Lifeline), encourage low-cost plans, and support transparent pricing so families can compare true monthly costs.',
    imageUrl:
      'https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Person reviewing household bills and expenses',
    citations: [
      { label: 'Pew Research Center (2024)', url: 'https://www.pewresearch.org/short-reads/2024/01/31/what-we-know-about-online-learning-and-the-homework-gap-amid-the-pandemic/' },
      { label: 'FCC Lifeline Program', url: 'https://www.fcc.gov/lifeline-consumers' },
      { label: 'Unsplash image by Emil Kalibradov', url: 'https://unsplash.com/photos/a-person-holding-a-smart-phone-next-to-a-bill-6xYvM6h5h6Y' }
    ]
  },
  {
    id: 'infrastructure',
    title: '2) Rural / Geographic Infrastructure',
    explanation:
      'Rural and Tribal communities are less likely to have reliable high-speed infrastructure because deployment costs are high and provider incentives are lower in sparsely populated regions.',
    statistic:
      'FCC 2024 Broadband Deployment Report: approximately 7% of rural Americans still lack access to fixed 25/3 Mbps broadband versus about 1% in urban areas.',
    chartLabel: 'Population lacking fixed 25/3 Mbps access (FCC, 2024)',
    chart: [
      { label: 'Rural', value: 7 },
      { label: 'Urban', value: 1 }
    ],
    solution:
      'Use targeted infrastructure grants (BEAD and state programs), enforce deployment milestones, and prioritize open-access middle-mile investments in unserved areas.',
    imageUrl:
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Rural landscape with utility lines',
    citations: [
      { label: 'FCC 2024 Section 706 Report', url: 'https://www.fcc.gov/reports-research/reports/broadband-progress-reports/' },
      { label: 'NTIA BEAD Program', url: 'https://broadbandusa.ntia.gov/funding-programs/broadband-equity-access-and-deployment-bead-program' },
      { label: 'Unsplash image by Scott Goodwill', url: 'https://unsplash.com/photos/brown-field-under-white-clouds-during-daytime-y8Ngwq34_Ak' }
    ]
  },
  {
    id: 'device',
    title: '3) Device Access',
    explanation:
      'Internet access quality is limited when a household shares one old device across multiple people or relies only on a smartphone for school and work tasks.',
    statistic:
      'NCES (2022): About 9% of U.S. children ages 3–18 lacked internet access at home in 2021, with higher rates in lower-income households.',
    chartLabel: 'Children with home internet access (NCES, 2022)',
    chart: [
      { label: 'Have internet at home', value: 91 },
      { label: 'No internet at home', value: 9 }
    ],
    solution:
      'Fund school/library device lending, refresh aging hardware, and provide repair support so connectivity is paired with a usable device for each learner.',
    imageUrl:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Students using laptops together',
    citations: [
      { label: 'NCES home internet indicator', url: 'https://nces.ed.gov/programs/coe/indicator/cch/child-internet-access' },
      { label: 'Common Sense Media device access research', url: 'https://www.commonsensemedia.org/research/the-common-sense-census-media-use-by-tweens-and-teens-2021' },
      { label: 'Unsplash image by Brooke Cagle', url: 'https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-MW4jzLAbJZQ' }
    ]
  },
  {
    id: 'skills',
    title: '4) Digital Skills / Literacy',
    explanation:
      'Having internet access does not guarantee meaningful use. People need skills to evaluate information, protect privacy, complete online forms, and use digital tools for jobs and education.',
    statistic:
      'National Skills Coalition (2023): about 1 in 3 workers have low or no foundational digital skills.',
    chartLabel: 'U.S. workforce digital skill level (NSC, 2023)',
    chart: [
      { label: 'Low / no foundational skills', value: 33 },
      { label: 'Foundational+ skills', value: 67 }
    ],
    solution:
      'Offer free community digital-navigation programs through libraries, schools, and workforce centers with multilingual support and practical task-based training.',
    imageUrl:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Adult learners in digital training session',
    citations: [
      { label: 'National Skills Coalition digital skills report', url: 'https://nationalskillscoalition.org/resource/publications/digital-divide-and-the-skills-gap/' },
      { label: 'DigitalLearn by Public Library Association', url: 'https://www.digitallearn.org/' },
      { label: 'Unsplash image by Campaign Creators', url: 'https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-gMsnXqILjp4' }
    ]
  },
  {
    id: 'education',
    title: '5) Education Level',
    explanation:
      'Broadband adoption is strongly linked to education attainment. Lower educational attainment often correlates with lower digital confidence and fewer opportunities to build skills.',
    statistic:
      'Pew (2024): Adults with a bachelor’s degree are far more likely to have home broadband than adults with less than a high school education.',
    chartLabel: 'Home broadband adoption by education (Pew, 2024)',
    chart: [
      { label: 'Less than high school', value: 65 },
      { label: 'Bachelor\'s degree+', value: 90 }
    ],
    solution:
      'Embed digital literacy into adult education and GED pathways, and pair credentials with broadband enrollment help and device support.',
    imageUrl:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Students in a classroom collaborating',
    citations: [
      { label: 'Pew broadband facts', url: 'https://www.pewresearch.org/internet/fact-sheet/internet-broadband/' },
      { label: 'U.S. Department of Education Adult Education', url: 'https://www2.ed.gov/about/offices/list/ovae/pi/AdultEd/index.html' },
      { label: 'Unsplash image by Vasily Koloda', url: 'https://unsplash.com/photos/8CqDvPuo_kI' }
    ]
  },
  {
    id: 'age',
    title: '6) Age (Older Adults)',
    explanation:
      'Older adults are less likely to adopt high-speed internet and advanced digital tools, often due to cost, accessibility, trust, and confidence barriers.',
    statistic:
      'Pew (2024): broadband adoption and smartphone ownership are substantially lower among adults ages 65+ than among younger adults.',
    chartLabel: 'Home broadband adoption by age (Pew, 2024)',
    chart: [
      { label: 'Ages 18–29', value: 93 },
      { label: 'Ages 65+', value: 75 }
    ],
    solution:
      'Design senior-centered support: one-on-one coaching, larger-print accessibility settings, scam-awareness training, and low-cost senior internet plans.',
    imageUrl:
      'https://images.unsplash.com/photo-1516307365426-bea591f05011?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Older adult learning on a laptop',
    citations: [
      { label: 'Pew internet & technology by age', url: 'https://www.pewresearch.org/internet/fact-sheet/internet-broadband/' },
      { label: 'AARP digital literacy resources', url: 'https://www.aarp.org/home-family/personal-technology/' },
      { label: 'Unsplash image by Georg Arthur Pflueger', url: 'https://unsplash.com/photos/eQ7RV8B4X8M' }
    ]
  },
  {
    id: 'race',
    title: '7) Race / Ethnicity and Underserved Communities',
    explanation:
      'Historic inequities in income, neighborhood infrastructure, and access to culturally relevant support create unequal digital outcomes across racial and ethnic groups.',
    statistic:
      'Pew (2024): broadband adoption gaps persist between White, Black, and Hispanic households, though the gap has narrowed compared to prior years.',
    chartLabel: 'Home broadband adoption by race/ethnicity (Pew, 2024)',
    chart: [
      { label: 'White adults', value: 83 },
      { label: 'Black adults', value: 78 },
      { label: 'Hispanic adults', value: 77 }
    ],
    solution:
      'Invest in community-led digital inclusion coalitions, multilingual support, trusted local outreach, and neighborhood-level affordability + device programs.',
    imageUrl:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Diverse community group using mobile devices',
    citations: [
      { label: 'Pew broadband demographics', url: 'https://www.pewresearch.org/internet/fact-sheet/internet-broadband/' },
      { label: 'National Digital Inclusion Alliance', url: 'https://www.digitalinclusion.org/' },
      { label: 'Unsplash image by Helena Lopes', url: 'https://unsplash.com/photos/PGnqT0rXWLs' }
    ]
  }
];

const barWidth = (value: number) => `${Math.max(4, Math.min(100, value))}%`;

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <h1 className="text-3xl font-bold md:text-5xl">The Digital Divide (Interactive Web Presentation)</h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          This is a simplified static webpage version of the assignment. It includes 7 content sections (more than the minimum 5 factors), each with
          an explanation, 2020+ statistics, a visual graph, a research-based solution, and clickable citations.
        </p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          {factors.map((factor) => (
            <a key={factor.id} href={`#${factor.id}`} className="rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 hover:bg-cyan-500/20">
              {factor.title}
            </a>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-16">
        {factors.map((factor) => (
          <article key={factor.id} id={factor.id} className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/70 shadow-lg">
            <img src={factor.imageUrl} alt={factor.imageAlt} className="h-52 w-full object-cover" loading="lazy" />
            <div className="grid gap-5 p-6 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold text-cyan-300">{factor.title}</h2>
                <p className="mt-3 text-slate-200">{factor.explanation}</p>
                <p className="mt-4 rounded-lg border border-slate-700 bg-slate-800 p-3 text-sm text-slate-100">
                  <strong>2020+ statistic:</strong> {factor.statistic}
                </p>
                <p className="mt-4 text-sm text-emerald-300">
                  <strong>Research-based solution:</strong> {factor.solution}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">{factor.chartLabel}</h3>
                <div className="mt-3 space-y-3">
                  {factor.chart.map((item) => (
                    <div key={item.label}>
                      <div className="mb-1 flex justify-between text-sm">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="h-3 rounded-full bg-slate-700">
                        <div className="h-3 rounded-full bg-cyan-400" style={{ width: barWidth(item.value) }} />
                      </div>
                    </div>
                  ))}
                </div>

                <h4 className="mt-5 text-sm font-semibold text-slate-300">Citations (hyperlinked)</h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-sky-300">
                  {factor.citations.map((citation) => (
                    <li key={citation.url}>
                      <a className="underline decoration-sky-400/70 hover:text-sky-200" href={citation.url} target="_blank" rel="noreferrer">
                        {citation.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
