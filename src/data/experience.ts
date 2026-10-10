// Positions from the master CV and the longer NIW CV. No teaching evaluation scores.

export interface Role {
  title: string;
  org: string;
  place?: string;
  dates: string;
  current?: boolean;
  summary?: string;
  items?: string[];
}

export const teaching: Role[] = [
  {
    title: 'Instructor of Record',
    org: 'LSU New Orleans, Department of Economics and Finance',
    place: 'New Orleans, LA',
    dates: 'Jun 2026 to Present',
    current: true,
    items: [
      'Principles of Macroeconomics, undergraduate, face to face, Fall 2026.',
      'Investments (FIN 3302), undergraduate, online, Summer 2026.',
    ],
  },
  {
    title: 'Tutorial Instructor',
    org: 'LSU New Orleans',
    place: 'New Orleans, LA',
    dates: '2023, 2026',
    items: [
      'Operations Management tutorial sessions, face to face, Summer 2026.',
      'EMBA Business Statistics tutorial sessions, face to face, Spring 2023.',
    ],
  },
  {
    title: 'Graduate Teaching Assistant',
    org: 'Texas Tech University',
    place: 'Lubbock, TX',
    dates: '2023 to 2024',
    items: ['Macroeconomics and Microeconomics.', 'Data Science, online.'],
  },
];

export const research: Role[] = [
  {
    title: 'Graduate Research Assistant',
    org: 'Division of Business and Economic Research (DBER), LSU New Orleans',
    place: 'New Orleans, LA',
    dates: '2024 to Present',
    current: true,
    summary:
      'Research on the transition of U.S. tourism, database dynamics, and impact analysis using big data.',
  },
  {
    title: 'Graduate Research Assistant',
    org: 'Department of Agricultural and Applied Economics, Texas Tech University',
    place: 'Lubbock, TX',
    dates: '2022 to 2024',
    summary:
      'Research on the transition of U.S. agriculture, the dynamics of consumer tastes, the growth of dollar stores, and event analysis using big data. Supported by a Distinguished Graduate Student Assistantship.',
  },
  {
    title: 'Research Fellow',
    org: 'Research and Policy Integration for Development (RAPID)',
    place: 'Dhaka, Bangladesh',
    dates: '2023',
    summary: 'Wrote annual project reports and policy briefs.',
  },
  {
    title: 'Senior Research Associate',
    org: 'Policy Research Institute of Bangladesh (PRI)',
    place: 'Dhaka, Bangladesh',
    dates: '2022',
    summary: 'Wrote the annual project report and brief for the PRI-Kivu project on Mobilizing Tax in Bangladesh.',
  },
  {
    title: 'Monitoring and Evaluation Officer',
    org: 'WorldFish Bangladesh',
    place: 'Bangladesh',
    dates: '2022',
    summary:
      'Designed and ran monitoring and evaluation for the Artemia for Bangladesh project, including a baseline survey of 400 salt farmers in coastal Bangladesh, and helped prepare quarterly and annual progress reports.',
  },
  {
    title: 'Research Associate',
    org: 'Bangladesh Institute of Development Studies (BIDS), Industrial Division',
    place: 'Dhaka, Bangladesh',
    dates: '2018',
    summary:
      'Prepared proposals, reports and financial plans, managed project budgets and forecasts, and analyzed survey and administrative data in Stata and R.',
  },
  {
    title: 'Research Assistant',
    org: 'University of Malaya',
    place: 'Kuala Lumpur, Malaysia',
    dates: '2015',
    summary: 'Research using survey data.',
  },
];

// Coauthors whose institution is known from the papers or slides. Others are listed on the papers.
export const collaborators = [
  { name: 'M. Kabir Hassan', org: 'LSU New Orleans', work: 'Subsidies and insider activity, bank crash risk, HTM losses, depositor discipline, reinforcement learning, LLMs and q-theory' },
  { name: 'José A. Pérez-Amuedo', org: 'Marquette University', work: 'Subsidies and insider activity, bank crash risk, HTM losses, depositor discipline, analyst disagreement' },
  { name: 'M. M. Ferdaus', org: 'LSU New Orleans', work: 'Reinforcement learning in finance, LLMs and q-theory, bank crash risk' },
  { name: 'L. Pezzo', org: 'LSU New Orleans', work: 'CEO insider trading, bank crash risk' },
  { name: 'Neil Maroney', org: 'LSU New Orleans', work: 'Earnings calls and the 10-K' },
  { name: 'Imtiaz Sifat', org: 'Radboud University', work: 'Analyst consensus and roster turnover' },
  { name: 'Misak Avetisyan', org: 'Texas Tech University', work: 'Fuel efficiency, trade and emissions (GTAP); supply chain shocks and food security' },
];

export const education = [
  { degree: 'Ph.D. in Financial Economics', school: 'LSU New Orleans', year: 'Expected Spring 2027' },
  { degree: 'M.Sc. in Computer Science', school: 'LSU New Orleans', year: '2027' },
  { degree: 'M.Sc. in Finance', school: 'LSU New Orleans', year: '2026' },
  { degree: 'M.S. in Agricultural and Applied Economics', school: 'Texas Tech University', year: '2024' },
  { degree: 'B.Sc. and M.Sc. in Economics', school: 'International Islamic University Malaysia (IIUM)', year: '2014 and 2018' },
];

export const awards = [
  { title: '1st Place, USDA AMS Local Food Economics Data Visualization Challenge', org: 'AAEA Annual Meeting, Washington, D.C.', year: '2023' },
  { title: 'Distinguished Graduate Student Assistantship', org: 'Texas Tech University', year: '2022 to 2024' },
  { title: 'Graduate Student Assistantship', org: 'LSU New Orleans', year: '2024 to Present' },
  { title: 'Invited Speaker', org: 'U.S. Department of State, Foreign Service Institute', year: '2023, 2024' },
];

export const skills = [
  { group: 'Programming', items: ['Python', 'R', 'Stata', 'MATLAB', 'SQL'] },
  { group: 'Machine learning', items: ['PyTorch', 'TensorFlow', 'XGBoost', 'LightGBM', 'Stable-Baselines3'] },
  { group: 'Market and firm data', items: ['WRDS', 'CRSP', 'Compustat', 'I/B/E/S', 'Zacks', 'SEC EDGAR and Form 4', 'TRACE', 'DealScan'] },
  { group: 'Other tools', items: ['LaTeX', 'Git', 'GTAP', 'GIS'] },
];
