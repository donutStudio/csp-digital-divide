import type { CommunityProfile, Intervention } from '../types/research';

export const communityProfiles: CommunityProfile[] = [
  {
    id: 'low-income-urban',
    label: 'Low-income urban neighborhood',
    context: 'High population density but unstable home subscriptions and high smartphone-only reliance.',
    priorityFactors: ['affordability', 'device-access', 'race-ethnicity']
  },
  {
    id: 'rural-county',
    label: 'Rural county',
    context: 'Sparse infrastructure and fewer providers create reliability and speed gaps.',
    priorityFactors: ['rural-infrastructure', 'affordability', 'digital-skills']
  },
  {
    id: 'senior-population',
    label: 'Senior population',
    context: 'Lower confidence with digital services and accessibility barriers.',
    priorityFactors: ['age', 'digital-skills', 'affordability']
  },
  {
    id: 'school-device-gap',
    label: 'School district with low device access',
    context: 'Students share devices and complete assignments through phones.',
    priorityFactors: ['device-access', 'education-level', 'affordability']
  },
  {
    id: 'underserved-community',
    label: 'Underserved / marginalized community',
    context: 'Overlapping barriers in language, trust, income, and infrastructure quality.',
    priorityFactors: ['race-ethnicity', 'affordability', 'digital-skills']
  }
];

export const interventions: Intervention[] = [
  {
    id: 'lower-costs',
    label: 'Lower monthly broadband costs',
    addresses: ['affordability'],
    whyHelps: 'Price relief increases first-time subscriptions and reduces churn for low-income households.',
    limitation: 'Without quality local infrastructure and outreach, subsidies alone may not close gaps.',
    sourceTitles: ['Pew Research Center: Who is not online in 2024?', 'FCC Affordable Connectivity Program Wind-Down Fact Sheet']
  },
  {
    id: 'expand-infrastructure',
    label: 'Expand infrastructure',
    addresses: ['rural-infrastructure'],
    whyHelps: 'Middle-mile and last-mile investment expands the number of homes with broadband-capable service.',
    limitation: 'Construction takes time and must be paired with affordability and adoption planning.',
    sourceTitles: ['NTIA BEAD Program Overview', 'FCC National Broadband Map']
  },
  {
    id: 'school-laptops',
    label: 'Provide school-issued laptops',
    addresses: ['device-access', 'education-level'],
    whyHelps: '1:1 device programs improve assignment completion, digital skill growth, and continuity during disruptions.',
    limitation: 'Programs fail if maintenance, family support, and home connectivity are not included.',
    sourceTitles: ['CoSN State of EdTech District Leadership 2024', 'NCES: Student Access to Digital Learning Resources']
  },
  {
    id: 'literacy-training',
    label: 'Digital literacy training',
    addresses: ['digital-skills', 'age'],
    whyHelps: 'Trusted training improves confidence for telehealth, online safety, and workforce participation.',
    limitation: 'One-time workshops are less effective than sustained coaching and localized curricula.',
    sourceTitles: ['OECD Survey of Adult Skills 2023', 'National Digital Inclusion Alliance: Digital Navigator Model']
  },
  {
    id: 'multilingual-outreach',
    label: 'Multilingual outreach',
    addresses: ['race-ethnicity', 'digital-skills'],
    whyHelps: 'Culturally responsive communication increases participation in subsidy and training programs.',
    limitation: 'Outreach must be ongoing and community-led to build trust over time.',
    sourceTitles: ['National Digital Inclusion Alliance: Multilingual Outreach Playbook', 'Benton Institute: Broadband for America’s Future 2023']
  },
  {
    id: 'public-wifi',
    label: 'Public Wi‑Fi access',
    addresses: ['affordability', 'device-access'],
    whyHelps: 'Free public access points provide immediate connectivity for homework and job applications.',
    limitation: 'Public Wi‑Fi does not fully replace secure, reliable home broadband.',
    sourceTitles: ['Pew Research Center Internet/Broadband Fact Sheet', 'IMLS Public Libraries Survey']
  }
];
