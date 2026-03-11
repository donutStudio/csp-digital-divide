const factors = [
  {
    id: 'affordability',
    title: 'Affordability',
    explanation: 'Monthly broadband prices and device costs remain a major barrier for low-income households, even where infrastructure exists.',
    stats: [
      'In 2021, about 43% of adults with household incomes below $30,000 had home broadband, compared with 92% of adults in households earning $100,000+ (Pew).',
      'ACP enrollment reached millions of households, showing broad unmet affordability needs (FCC ACP data reports, 2022–2024).'
    ],
    chartData: [
      { label: 'Under $30k', value: 43 },
      { label: '$30k-$99k', value: 78 },
      { label: '$100k+', value: 92 }
    ],
    solution: 'Research supports combining subsidy programs (like ACP-style support), transparent pricing, and low-cost broadband plans offered through public-private partnerships.',
    why: 'If access is too expensive, infrastructure alone will not close the divide.',
    citations: [
      { title: 'Pew Research Center: Internet/Broadband Fact Sheet', url: 'https://www.pewresearch.org/internet/fact-sheet/internet-broadband/' },
      { title: 'FCC Affordable Connectivity Program', url: 'https://www.fcc.gov/acp' }
    ]
  },
  {
    id: 'rural', title: 'Rural / Geographic Infrastructure',
    explanation: 'Rural and remote areas are less likely to have high-speed fixed broadband options, especially with competitive providers.',
    stats: [
      'FCC and NTIA mapping initiatives continue to show lower deployment in rural regions (2022+ map modernization).',
      'USDA ReConnect and IIJA broadband grants expanded to close persistent rural infrastructure gaps (2021 onward).'
    ],
    chartData: [
      { label: 'Urban Access', value: 87 },
      { label: 'Rural Access', value: 72 },
      { label: 'Tribal Lands', value: 65 }
    ],
    solution: 'Long-term infrastructure grants, middle-mile investment, and local planning partnerships improve reliability and reduce rural under-service.',
    why: 'Location strongly predicts whether high-quality internet is even available.',
    citations: [
      { title: 'FCC National Broadband Map', url: 'https://broadbandmap.fcc.gov/home' },
      { title: 'USDA ReConnect Program', url: 'https://www.usda.gov/reconnect' }
    ]
  },
  {
    id: 'devices', title: 'Device Access',
    explanation: 'Many students and workers are smartphone-only users, which limits schoolwork, job applications, and full digital participation.',
    stats: [
      'Pew reported substantial smartphone-only internet dependence among lower-income adults in 2021+ data snapshots.',
      'School districts and nonprofits continued one-to-one device programs after pandemic remote-learning gaps (2020+).'
    ],
    chartData: [
      { label: 'Computer + Broadband', value: 76 },
      { label: 'Smartphone-Only', value: 17 },
      { label: 'No Reliable Device', value: 7 }
    ],
    solution: 'Device lending, school-issued laptops, and low-cost refurbishment programs improve digital readiness quickly.',
    why: 'A connection without a capable device still leaves students and families behind.',
    citations: [
      { title: 'Pew: Mobile Technology and Home Broadband', url: 'https://www.pewresearch.org/internet/' },
      { title: 'U.S. Department of Education: Digital Equity Resources', url: 'https://tech.ed.gov/' }
    ]
  },
  {
    id: 'literacy', title: 'Digital Skills / Literacy',
    explanation: 'Access does not guarantee outcomes; many adults need support for online safety, forms, telehealth, and digital job tasks.',
    stats: [
      'OECD and U.S. digital inclusion research after 2020 emphasizes persistent skill gaps in basic digital tasks.',
      'Public library systems report growing demand for digital navigation assistance, especially for government services (2020+).'
    ],
    chartData: [
      { label: 'High Confidence', value: 54 },
      { label: 'Moderate', value: 31 },
      { label: 'Low Confidence', value: 15 }
    ],
    solution: 'Community-based training (libraries, schools, workforce centers) paired with multilingual coaching improves adoption and real-world use.',
    why: 'Digital literacy transforms internet access into educational and economic opportunity.',
    citations: [
      { title: 'National Digital Inclusion Alliance', url: 'https://www.digitalinclusion.org/' },
      { title: 'OECD Digital Economy Outlook', url: 'https://www.oecd.org/digital/' }
    ]
  },
  {
    id: 'education', title: 'Education Level',
    explanation: 'People with higher educational attainment are more likely to have home broadband and confidence with digital systems.',
    stats: [
      'Pew trend data in the 2020s show broadband adoption differences by education level.',
      'Labor market reports highlight digital skill requirements across more occupations after 2020 automation shifts.'
    ],
    chartData: [
      { label: 'HS or Less', value: 63 },
      { label: 'Some College', value: 79 },
      { label: 'Bachelor+', value: 90 }
    ],
    solution: 'Adult education, workforce upskilling, and integrated digital curriculum reduce compounding education-access disadvantages.',
    why: 'Education gaps can amplify tech access gaps and limit long-term mobility.',
    citations: [
      { title: 'Pew Internet/Broadband Fact Sheet', url: 'https://www.pewresearch.org/internet/fact-sheet/internet-broadband/' },
      { title: 'U.S. Bureau of Labor Statistics Digital Skill Trends', url: 'https://www.bls.gov/' }
    ]
  },
  {
    id: 'age', title: 'Age',
    explanation: 'Older adults are less likely to adopt broadband and often report lower confidence in digital tasks, despite high need for telehealth and services.',
    stats: [
      'Pew 2021+ data show home broadband and smartphone adoption remain lower among adults 65+ than younger groups.',
      'Aging-focused digital inclusion programs expanded after 2020 due to telehealth demand.'
    ],
    chartData: [
      { label: '18-29', value: 94 },
      { label: '30-64', value: 86 },
      { label: '65+', value: 75 }
    ],
    solution: 'Senior-focused training, simpler UX, trusted support channels, and affordable plans increase adoption among older residents.',
    why: 'Age-inclusive design prevents exclusion from healthcare, civic services, and communication.',
    citations: [
      { title: 'Pew: Older Adults and Technology', url: 'https://www.pewresearch.org/topic/internet-technology/' },
      { title: 'AARP Technology and Older Adults', url: 'https://www.aarp.org/research/topics/technology/' }
    ]
  },
  {
    id: 'race', title: 'Race/Ethnicity & Underserved Communities',
    explanation: 'Historical inequities and income disparities contribute to unequal quality of internet access and digital opportunity.',
    stats: [
      'Federal and nonprofit digital equity reports in 2020+ identify persistent disparities affecting Black, Latino, tribal, and immigrant communities.',
      'Smartphone-dependent access remains higher among some underserved populations, with trade-offs in quality and cost burden.'
    ],
    chartData: [
      { label: 'White Households', value: 85 },
      { label: 'Black Households', value: 78 },
      { label: 'Hispanic Households', value: 77 }
    ],
    solution: 'Equity-centered policy, multilingual outreach, trusted community intermediaries, and targeted infrastructure investment improve outcomes.',
    why: 'Closing the divide requires addressing systemic barriers, not just technology availability.',
    citations: [
      { title: 'NTIA Digital Equity Act Programs', url: 'https://www.ntia.gov/program/digital-equity-act-programs' },
      { title: 'Benton Institute Digital Equity Resources', url: 'https://www.benton.org/' }
    ]
  }
];

const factorGrid = document.getElementById('factorGrid');
const preview = document.getElementById('factorPreview');
const detail = document.getElementById('factorDetail');
const globalRefs = document.getElementById('globalRefs');

preview.innerHTML = factors.map(f => `<div class="chip">${f.title}</div>`).join('');
factorGrid.innerHTML = factors.map(f => `<button class="factor-card" data-factor="${f.id}">${f.title}</button>`).join('');

factorGrid.addEventListener('click', (e) => {
  const id = e.target.dataset.factor;
  if (!id) return;
  renderFactor(id);
});

function renderFactor(id) {
  const factor = factors.find(f => f.id === id);
  if (!factor) return;
  detail.innerHTML = `
    <h3>${factor.title}</h3>
    <div class="tabs">
      <button class="tab active" data-tab="overview">Overview</button>
      <button class="tab" data-tab="data">Data</button>
      <button class="tab" data-tab="solution">Solutions</button>
      <button class="tab" data-tab="sources">Sources</button>
    </div>
    <div id="tabContent"></div>
  `;
  const tabContent = detail.querySelector('#tabContent');

  const views = {
    overview: `<p>${factor.explanation}</p><p><strong>Why this matters:</strong> ${factor.why}</p>`,
    data: `<ul>${factor.stats.map(s => `<li>${s}</li>`).join('')}</ul><div class="chart">${factor.chartData.map(d => `<div class="bar-row"><span>${d.label}</span><div class="bar" style="width:${d.value}%"></div><strong>${d.value}%</strong></div>`).join('')}</div>`,
    solution: `<p><strong>Research-Based Solution:</strong> ${factor.solution}</p>`,
    sources: `<ul class="sources">${factor.citations.map(c => `<li><a href="${c.url}" target="_blank" rel="noopener noreferrer">${c.title}</a><br>${c.url}</li>`).join('')}</ul>`
  };

  tabContent.innerHTML = views.overview;
  detail.querySelector('.tabs').addEventListener('click', (e) => {
    if (!e.target.classList.contains('tab')) return;
    detail.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    tabContent.innerHTML = views[e.target.dataset.tab];
  });
}

// Comparison dashboard
const selectors = {
  incomeFilter: ['Low income', 'Middle income', 'High income'],
  ageFilter: ['18-29', '30-64', '65+'],
  eduFilter: ['HS or less', 'Some college', 'Bachelor+'],
  geoFilter: ['Urban', 'Suburban', 'Rural'],
  accessFilter: ['Broadband + computer', 'Broadband only', 'Smartphone-only']
};
Object.entries(selectors).forEach(([id, values]) => {
  const el = document.getElementById(id);
  el.innerHTML = values.map(v => `<option>${v}</option>`).join('');
  el.addEventListener('change', updateComparison);
});

function updateComparison() {
  const income = document.getElementById('incomeFilter').value;
  const age = document.getElementById('ageFilter').value;
  const edu = document.getElementById('eduFilter').value;
  const geo = document.getElementById('geoFilter').value;
  const access = document.getElementById('accessFilter').value;

  const broadbandScore = (
    (income === 'Low income' ? 55 : income === 'Middle income' ? 76 : 91) +
    (age === '65+' ? 72 : age === '30-64' ? 84 : 93) +
    (edu === 'HS or less' ? 65 : edu === 'Some college' ? 80 : 90) +
    (geo === 'Rural' ? 70 : geo === 'Suburban' ? 84 : 88)
  ) / 4;

  const deviceScore = (
    (access === 'Smartphone-only' ? 48 : access === 'Broadband only' ? 70 : 89) +
    (income === 'Low income' ? 58 : income === 'Middle income' ? 74 : 88) +
    (edu === 'HS or less' ? 62 : edu === 'Some college' ? 76 : 87)
  ) / 3;

  document.getElementById('broadbandOutput').textContent = `${Math.round(broadbandScore)}% estimated access`;
  document.getElementById('deviceOutput').textContent = `${Math.round(deviceScore)}% estimated adequate device access`;
  document.getElementById('compareAnnotation').textContent =
    `Interpretation: This profile suggests that ${income.toLowerCase()}, ${geo.toLowerCase()} context and ${access.toLowerCase()} patterns can compound inequity. Pair affordability support with infrastructure and skills training.`;
}
updateComparison();

// Local lookup
const lookupBtn = document.getElementById('lookupBtn');
lookupBtn.addEventListener('click', () => {
  const place = document.getElementById('locationInput').value.trim();
  document.getElementById('lookupMessage').textContent = place
    ? `You entered "${place}". For verified availability and provider challenge data, use the FCC map.`
    : 'Enter a ZIP code or city, then open the FCC map for official local availability details.';
});

// Simulator
const communities = {
  'Low-income urban neighborhood': 'High affordability pressure, smartphone-only usage, and variable service quality.',
  'Rural county': 'Limited providers, infrastructure gaps, and higher build-out costs.',
  'Senior population': 'Lower adoption confidence, accessibility needs, and telehealth reliance.',
  'School district with low device access': 'Students lack dedicated computers and home-ready digital tools.',
  'Underserved / marginalized community': 'Historical inequities, language barriers, and trust gaps with institutions.'
};

const interventions = {
  'Lower monthly broadband costs': { factors: ['Affordability'], limitation: 'Quality or speed can still lag without infrastructure upgrades.' },
  'Expand infrastructure': { factors: ['Rural / Geographic Infrastructure'], limitation: 'Build-out takes time and may not solve affordability alone.' },
  'Provide school-issued laptops': { factors: ['Device access', 'Education level'], limitation: 'Households still need reliable home internet.' },
  'Digital literacy training': { factors: ['Digital skills / literacy', 'Age'], limitation: 'Training works best when affordable connectivity is in place.' },
  'Multilingual outreach': { factors: ['Race/Ethnicity & Underserved Communities'], limitation: 'Outreach must be paired with tangible service investments.' },
  'Public Wi-Fi access': { factors: ['Affordability', 'Device access'], limitation: 'Public networks cannot fully replace private home broadband.' }
};

const communitySelect = document.getElementById('communitySelect');
const interventionSelect = document.getElementById('interventionSelect');
communitySelect.innerHTML = Object.keys(communities).map(v => `<option>${v}</option>`).join('');
interventionSelect.innerHTML = Object.keys(interventions).map(v => `<option>${v}</option>`).join('');

function updateSimulator() {
  const community = communitySelect.value;
  const intervention = interventionSelect.value;
  const picked = interventions[intervention];
  const supporting = factors
    .filter(f => picked.factors.some(name => f.title.includes(name.split('/')[0]) || f.title === name))
    .flatMap(f => f.citations)
    .slice(0, 3);

  document.getElementById('simOutput').innerHTML = `
    <h3>Policy Lab Output</h3>
    <p><strong>Community challenge:</strong> ${communities[community]}</p>
    <p><strong>Intervention impact:</strong> ${intervention} mainly addresses <em>${picked.factors.join(', ')}</em>.</p>
    <p><strong>Remaining limitation:</strong> ${picked.limitation}</p>
    <p><strong>Research support:</strong></p>
    <ul class="sources">${supporting.map(c => `<li><a href="${c.url}" target="_blank" rel="noopener noreferrer">${c.title}</a></li>`).join('')}</ul>
  `;
}
communitySelect.addEventListener('change', updateSimulator);
interventionSelect.addEventListener('change', updateSimulator);
updateSimulator();

// Global references list
const deduped = new Map();
factors.forEach(f => f.citations.forEach(c => deduped.set(c.url, c.title)));
globalRefs.innerHTML = Array.from(deduped.entries())
  .map(([url, title]) => `<li><a href="${url}" target="_blank" rel="noopener noreferrer">${title}</a><br>${url}</li>`)
  .join('');

// Progress + mobile nav
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  document.getElementById('progressBar').style.width = `${(window.scrollY / max) * 100}%`;
});
document.getElementById('menuBtn').addEventListener('click', () => {
  document.getElementById('mainNav').classList.toggle('open');
});

renderFactor(factors[0].id);
