// Projects. BankPulse stays at one line until the provisional patent application is filed.

export interface Project {
  title: string;
  kind: string;
  summary: string;
  tags?: string[];
  status?: string;
  image?: string; // file name in src/assets/gallery
}

export const tools: Project[] = [
  {
    title: 'BankPulse',
    kind: 'FinTech',
    summary: 'Bank-health intelligence built from public regulatory filings.',
    tags: ['Bank risk', 'Machine learning', 'Python'],
    status: 'Provisional patent application in preparation',
  },
  {
    title: 'Local Food Economics Data Visualization',
    kind: 'Data visualization',
    summary:
      'Team entry with Xiaoqi Wang and Eugene K. Nuworsu (Purdue University) that won 1st Place in the 2023 USDA AMS Local Food Economics Data Visualization Challenge, presented at the AAEA Annual Meeting in Washington, D.C.',
    tags: ['USDA data', 'Visualization', 'R'],
    status: '1st Place, 2023',
    image: 'usda-award-2023.jpg',
  },
];

export const researchProjects: Project[] = [
  {
    title: 'Bangladesh Green Industries Diagnostic',
    kind: 'International Growth Centre (IGC), Bangladesh',
    summary:
      "Analyzed Bangladeshi industries and helped build the Bangladesh Green Industries Diagnostic tool, which traces the root causes of weak progress on inclusive green growth.",
  },
  {
    title: 'Food Retailers and Their Composition in the USA',
    kind: 'USDA',
    summary: 'Analyzed U.S. food-retail establishments and used dollar-store establishment data to identify growth trends.',
  },
  {
    title: 'Baseline Survey of the Artemia for Bangladesh Project',
    kind: 'WorldFish',
    summary: 'Ran a baseline survey of 400 salt farmers in coastal Bangladesh. The report appeared in the WorldFish annual report.',
  },
  {
    title: 'Mobile Financial Services and Microfinance Institutions',
    kind: 'Asian Development Bank (ADB)',
    summary: 'Monitored and evaluated ADB-funded census and survey data on mobile financial services and microfinance, and contributed to questionnaire design and report writing.',
  },
  {
    title: 'Light Engineering and Electronics Sector Survey',
    kind: 'Asian Development Bank (ADB), SEIP',
    summary: 'Monitored surveys for the Skills for Employment Investment Program and evaluated the data for a labor-market study.',
  },
  {
    title: 'COVID-19 and Customs Data',
    kind: 'BIDS',
    summary: 'Prepared customs and NBR data sets for regression and trend analysis in a paper on the resilience of global value chains during the pandemic.',
  },
  {
    title: 'COVID-19 and SMEs',
    kind: 'BIDS',
    summary: 'Geospatial analysis of SME data, with maps built in R using ggplot2 and tmap.',
  },
  {
    title: 'Skills and Education for the 8th Five Year Plan',
    kind: 'Planning Commission, Bangladesh',
    summary: 'Analyzed education-sector data and helped write background papers on skills and education for the 8th Five Year Plan.',
  },
];
