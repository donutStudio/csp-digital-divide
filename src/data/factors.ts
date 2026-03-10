import type { Factor } from '../types/research';

export const factors: Factor[] = [
  {
    id: 'affordability',
    title: 'Affordability',
    category: 'Economic barrier',
    shortDescription: 'Monthly broadband and device prices keep many households disconnected.',
    explanation:
      'Affordability is one of the strongest predictors of disconnection. Even where networks exist, recurring subscription costs, fees, and debt burdens force low-income households to rely on unstable alternatives such as shared hotspots or prepaid phone data.',
    whyItMatters:
      'When internet service competes with rent and food, students lose learning time and adults lose access to online jobs, telehealth, and public services.',
    imageAlt: 'Abstract visual of household budget and broadband bill pressure',
    imageGradient: 'from-cyan-500/20 to-blue-500/20',
    stats: [
      { label: 'Adults citing cost as main barrier', value: 43, unit: '%', context: 'offline U.S. adults', year: 2024 },
      { label: 'ACP households enrolled before wind-down', value: 23, unit: 'M', context: 'benefit recipients', year: 2024 },
      { label: 'Low-income homes with fixed broadband', value: 57, unit: '%', context: 'under $30k income', year: 2023 }
    ],
    chartLabel: 'Home broadband adoption by household income (2023)',
    chartData: [
      { group: 'Under $30k', value: 57, benchmark: 90 },
      { group: '$30k-$69k', value: 78, benchmark: 90 },
      { group: '$70k+', value: 92, benchmark: 90 }
    ],
    solution:
      'Research supports layered affordability strategies: targeted subsidies, transparent low-cost plans, and city-level digital navigator programs that help residents enroll and stay connected.',
    citations: [
      { title: 'Pew Research Center: Who is not online in 2024?', url: 'https://www.pewresearch.org/internet/2024/05/16/who-is-not-online-in-2024/', publisher: 'Pew Research Center', year: 2024 },
      { title: 'FCC Affordable Connectivity Program Wind-Down Fact Sheet', url: 'https://www.fcc.gov/acp', publisher: 'Federal Communications Commission', year: 2024 },
      { title: 'NTIA Internet Use Survey', url: 'https://www.ntia.gov/data/internet-use-survey-data', publisher: 'National Telecommunications and Information Administration', year: 2023 }
    ],
    tags: ['cost', 'policy', 'household']
  },
  {
    id: 'rural-infrastructure',
    title: 'Rural / Geographic Infrastructure',
    category: 'Network availability',
    shortDescription: 'Many communities remain underserved due to deployment gaps and terrain constraints.',
    explanation:
      'Geography affects whether reliable broadband infrastructure is available at all. Sparse populations and difficult terrain raise deployment costs, leaving rural and Tribal areas with fewer providers and slower speeds.',
    whyItMatters:
      'Without robust infrastructure, affordability programs cannot fully work because there is no quality service to buy.',
    imageAlt: 'Map-like gradient panel representing rural broadband coverage gaps',
    imageGradient: 'from-emerald-500/20 to-teal-500/20',
    stats: [
      { label: 'Rural locations lacking 100/20 Mbps access', value: 24, unit: '%', context: 'U.S. serviceable locations', year: 2024 },
      { label: 'Tribal lands lacking 100/20 Mbps access', value: 31, unit: '%', context: 'higher than national average', year: 2024 },
      { label: 'BEAD program allocation', value: 42, unit: 'M', context: 'funding in USD billions', year: 2023 }
    ],
    chartLabel: 'Estimated unserved locations by geography (2024)',
    chartData: [
      { group: 'Urban', value: 8, benchmark: 15 },
      { group: 'Rural', value: 24, benchmark: 15 },
      { group: 'Tribal', value: 31, benchmark: 15 }
    ],
    solution:
      'Evidence points to infrastructure grants plus accountability: open-access middle-mile projects, map verification, and local adoption planning alongside construction.',
    citations: [
      { title: 'FCC National Broadband Map', url: 'https://broadbandmap.fcc.gov/home', publisher: 'Federal Communications Commission', year: 2024 },
      { title: 'NTIA BEAD Program Overview', url: 'https://www.internetforall.gov/program/broadband-equity-access-and-deployment-bead-program', publisher: 'NTIA', year: 2023 },
      { title: 'GAO: Broadband in Tribal Areas', url: 'https://www.gao.gov/products/gao-24-106060', publisher: 'U.S. Government Accountability Office', year: 2024 }
    ],
    tags: ['rural', 'infrastructure', 'availability']
  },
  {
    id: 'device-access',
    title: 'Device Access',
    category: 'Hardware barrier',
    shortDescription: 'Households without enough quality devices struggle to participate fully online.',
    explanation:
      'Having internet service is not enough when multiple family members share one outdated device. Students using phones for schoolwork face lower productivity and fewer learning opportunities than peers with laptops.',
    whyItMatters:
      'Device gaps can turn connected households into functionally disconnected households, especially during homework and job application tasks.',
    imageAlt: 'Students sharing limited devices in a study space',
    imageGradient: 'from-violet-500/20 to-indigo-500/20',
    stats: [
      { label: 'Teens doing homework on a phone', value: 17, unit: '%', context: 'school-age teens', year: 2023 },
      { label: 'District leaders citing persistent student device shortages', value: 42, unit: '%', context: 'public school districts', year: 2024 },
      { label: 'Homes with child and no desktop/laptop', value: 14, unit: '%', context: 'U.S. households', year: 2022 }
    ],
    chartLabel: 'Primary device for school tasks among lower-income students',
    chartData: [
      { group: 'Laptop/Chromebook', value: 52, benchmark: 70 },
      { group: 'Tablet', value: 21, benchmark: 70 },
      { group: 'Smartphone', value: 27, benchmark: 70 }
    ],
    solution:
      'Successful district and nonprofit programs pair school-issued laptops with repair support, loaner cycles, and home tech help lines for families.',
    citations: [
      { title: 'Pew Research Center: Teens, Social Media and Technology 2023', url: 'https://www.pewresearch.org/internet/2023/12/11/teens-social-media-and-technology-2023/', publisher: 'Pew Research Center', year: 2023 },
      { title: 'CoSN State of EdTech District Leadership 2024', url: 'https://www.cosn.org/tools-and-resources/resource/state-of-edtech-district-leadership/', publisher: 'Consortium for School Networking', year: 2024 },
      { title: 'NCES: Student Access to Digital Learning Resources', url: 'https://nces.ed.gov/', publisher: 'National Center for Education Statistics', year: 2022 }
    ],
    tags: ['devices', 'students', 'homework-gap']
  },
  {
    id: 'digital-skills',
    title: 'Digital Skills / Literacy',
    category: 'Capability barrier',
    shortDescription: 'Many people have access but lack confidence with digital tasks and safety.',
    explanation:
      'Digital literacy includes basic operations, online safety, evaluating information quality, and using services like telehealth portals. Skill gaps persist across ages and income levels and reduce meaningful use of connectivity.',
    whyItMatters:
      'Low skills can lead to missed opportunities, misinformation risk, and reduced civic participation even in connected communities.',
    imageAlt: 'Digital literacy workshop with participants using laptops',
    imageGradient: 'from-sky-500/20 to-cyan-500/20',
    stats: [
      { label: 'Adults with low digital problem-solving scores', value: 28, unit: '%', context: 'OECD participating countries', year: 2023 },
      { label: 'Public libraries offering digital skills classes', value: 88, unit: '%', context: 'U.S. library systems', year: 2022 },
      { label: 'Workers needing new digital skills by 2030', value: 59, unit: '%', context: 'global labor estimate', year: 2024 }
    ],
    chartLabel: 'Self-reported confidence with online tasks (U.S. adults)',
    chartData: [
      { group: 'Apply for job online', value: 64, benchmark: 80 },
      { group: 'Use telehealth portal', value: 58, benchmark: 80 },
      { group: 'Detect misinformation', value: 47, benchmark: 80 }
    ],
    solution:
      'Research recommends community-based training with trusted institutions, multilingual instructors, and scenario-based practice tied to real needs (health, work, school).',
    citations: [
      { title: 'OECD Survey of Adult Skills 2023', url: 'https://www.oecd.org/skills/piaac/', publisher: 'OECD', year: 2023 },
      { title: 'IMLS Public Libraries Survey', url: 'https://www.imls.gov/research-evaluation/data-collection/public-libraries-survey', publisher: 'Institute of Museum and Library Services', year: 2022 },
      { title: 'World Economic Forum: Future of Jobs Report 2024', url: 'https://www.weforum.org/publications/the-future-of-jobs-report-2024/', publisher: 'World Economic Forum', year: 2024 }
    ],
    tags: ['skills', 'training', 'misinformation']
  },
  {
    id: 'education-level',
    title: 'Education Level',
    category: 'Socioeconomic pattern',
    shortDescription: 'Educational attainment strongly correlates with digital inclusion outcomes.',
    explanation:
      'Adults with more formal education are more likely to have home broadband, diverse device access, and higher confidence in navigating online services. The divide reflects both economic and institutional inequities.',
    whyItMatters:
      'Education-linked digital gaps can reinforce existing inequality in wages, learning, and access to public benefits.',
    imageAlt: 'Graduation cap and connected devices visual concept',
    imageGradient: 'from-amber-500/20 to-orange-500/20',
    stats: [
      { label: 'Home broadband among adults with bachelor’s degree+', value: 93, unit: '%', context: 'U.S. adults', year: 2024 },
      { label: 'Home broadband among adults without high school diploma', value: 58, unit: '%', context: 'U.S. adults', year: 2024 },
      { label: 'Adult learners needing digital support in workforce programs', value: 46, unit: '%', context: 'program participants', year: 2023 }
    ],
    chartLabel: 'Broadband adoption by education attainment (2024)',
    chartData: [
      { group: 'No Diploma', value: 58, benchmark: 80 },
      { group: 'High School', value: 74, benchmark: 80 },
      { group: 'Bachelor+', value: 93, benchmark: 80 }
    ],
    solution:
      'Integrated education and connectivity supports are most effective: digital coaching in adult education, bundled device grants, and navigator programs in community colleges.',
    citations: [
      { title: 'Pew Research Center Internet/Broadband Fact Sheet', url: 'https://www.pewresearch.org/internet/fact-sheet/internet-broadband/', publisher: 'Pew Research Center', year: 2024 },
      { title: 'National Skills Coalition: Digital Literacy in Workforce Policy', url: 'https://nationalskillscoalition.org/resource/publications/', publisher: 'National Skills Coalition', year: 2023 },
      { title: 'U.S. Department of Education Adult Education and Family Literacy', url: 'https://www.ed.gov/grants-and-programs/adult-education', publisher: 'U.S. Department of Education', year: 2024 }
    ],
    tags: ['education', 'workforce', 'equity']
  },
  {
    id: 'age',
    title: 'Age',
    category: 'Demographic barrier',
    shortDescription: 'Older adults are less likely to adopt broadband and digital tools.',
    explanation:
      'Age-related gaps are driven by cost sensitivity, confidence, accessibility needs, and lower exposure to digital training environments. Seniors often face compounded barriers when services move online.',
    whyItMatters:
      'As healthcare and government services digitize, older adults without support risk exclusion from essential resources.',
    imageAlt: 'Older adult receiving one-on-one digital support',
    imageGradient: 'from-rose-500/20 to-fuchsia-500/20',
    stats: [
      { label: 'Adults 65+ with home broadband', value: 72, unit: '%', context: 'U.S. seniors', year: 2024 },
      { label: 'Adults 18-49 with home broadband', value: 90, unit: '%', context: 'U.S. adults', year: 2024 },
      { label: 'Seniors interested in digital skills classes', value: 61, unit: '%', context: 'surveyed older adults', year: 2022 }
    ],
    chartLabel: 'Broadband adoption by age group (2024)',
    chartData: [
      { group: '18-49', value: 90, benchmark: 85 },
      { group: '50-64', value: 84, benchmark: 85 },
      { group: '65+', value: 72, benchmark: 85 }
    ],
    solution:
      'Intergenerational and clinic-based digital navigator models increase senior adoption when paired with affordable plans and accessibility-first device setup.',
    citations: [
      { title: 'Pew Research Center: Older Adults and Technology Use', url: 'https://www.pewresearch.org/internet/fact-sheet/older-adults-and-technology-use/', publisher: 'Pew Research Center', year: 2024 },
      { title: 'AARP Tech Trends and Older Adults 2022', url: 'https://www.aarp.org/research/topics/technology/info-2022/2022-technology-trends-older-americans.html', publisher: 'AARP', year: 2022 },
      { title: 'National Digital Inclusion Alliance: Digital Navigator Model', url: 'https://www.digitalinclusion.org/digital-navigators/', publisher: 'NDIA', year: 2023 }
    ],
    tags: ['seniors', 'accessibility', 'health']
  },
  {
    id: 'race-ethnicity',
    title: 'Race/Ethnicity & Underserved Communities',
    category: 'Structural inequity',
    shortDescription: 'Historic inequities create unequal access and digital outcomes across communities.',
    explanation:
      'Digital access tracks with broader structural disparities in housing, income, language access, and infrastructure investment. Black, Latino, Indigenous, and immigrant communities are more likely to face multi-layered barriers.',
    whyItMatters:
      'Closing the divide requires equity-centered design, not one-size-fits-all policy, because barriers overlap differently across communities.',
    imageAlt: 'Community center digital inclusion session with multilingual materials',
    imageGradient: 'from-lime-500/20 to-emerald-500/20',
    stats: [
      { label: 'Latino adults reporting smartphone-only internet at home', value: 23, unit: '%', context: 'U.S. adults', year: 2024 },
      { label: 'Black adults reporting smartphone-only internet at home', value: 19, unit: '%', context: 'U.S. adults', year: 2024 },
      { label: 'Households needing non-English digital support in pilot programs', value: 37, unit: '%', context: 'city navigator cohorts', year: 2023 }
    ],
    chartLabel: 'Smartphone-only internet reliance by demographic group',
    chartData: [
      { group: 'White', value: 12, benchmark: 10 },
      { group: 'Black', value: 19, benchmark: 10 },
      { group: 'Latino', value: 23, benchmark: 10 }
    ],
    solution:
      'Research-backed strategies include multilingual outreach, partnerships with trusted community organizations, and equity metrics in funding decisions.',
    citations: [
      { title: 'Pew Research Center: Mobile Technology and Home Broadband 2024', url: 'https://www.pewresearch.org/internet/fact-sheet/mobile/', publisher: 'Pew Research Center', year: 2024 },
      { title: 'Benton Institute: Broadband for America’s Future 2023', url: 'https://www.benton.org/publications', publisher: 'Benton Institute for Broadband & Society', year: 2023 },
      { title: 'National Digital Inclusion Alliance: Multilingual Outreach Playbook', url: 'https://www.digitalinclusion.org/resources/', publisher: 'NDIA', year: 2023 }
    ],
    tags: ['equity', 'language', 'community']
  }
];
