// Talks and posters. Titles follow the master CV; dates checked against programs and posts.

export interface Talk {
  date: string;
  title: string;
  event: string;
  place?: string;
  with?: string;
  tag?: string;
}

export const conference: Talk[] = [
  {
    date: 'Oct 2026',
    title: 'Subsidies as Attention Shocks and Their Impact on Insider Activity',
    event: 'Financial Management Association (FMA) Annual Meeting',
    place: 'Tampa, FL',
    with: 'J. A. Pérez-Amuedo, R. Houston and M. K. Hassan',
    tag: 'Accepted',
  },
  {
    date: '2026',
    title: 'Information Conflict and CEO Insider Trading',
    event: 'Southern Finance Association (SFA) Annual Meeting',
    with: 'Y. Kaffash Saligheh and L. Pezzo',
    tag: 'Accepted',
  },
  {
    date: 'Mar 2026',
    title: 'Hidden Duration Losses and Bank Crash Risk: Evidence from the 2022 UK Gilt Crisis',
    event: 'Southwestern Finance Association (SWFA), 65th Annual Meeting',
    with: 'M. K. Hassan, J. A. Pérez-Amuedo, M. M. Ferdaus and L. Pezzo',
  },
  {
    date: 'Mar 2026',
    title: 'The Limits of Flexibility: A Controlled Multi-Domain Study of Reinforcement Learning in Finance',
    event: 'Federation of Business Disciplines (SWDSI) Annual Conference',
    with: 'M. M. Ferdaus and M. K. Hassan',
  },
  {
    date: 'Mar 2025',
    title: 'Machine Learning-Based Optimization of Capital Structure Decisions',
    event: 'Federation of Business Disciplines (SWDSI) Annual Conference',
  },
  {
    date: 'Nov 2024',
    title: 'The Impact of Improved Fuel Efficiency on Greenhouse Gas Emissions from International Transportation',
    event: 'Southern Economic Association Annual Meetings',
    with: 'M. Avetisyan',
  },
  {
    date: 'Nov 2022',
    title: 'Local Nonfarm Opportunities and Migration Decisions: Evidence from Bangladesh',
    event: 'World Bank, 10th South Asia Economic Policy Network Conference on Migration in South Asia',
    place: 'Kathmandu, Nepal',
    with: 'K. Iqbal, M. N. F. Pabon and N. A. Shashi',
  },
  {
    date: 'Dec 2021',
    title: 'Have Clustered SMEs Performed Better than Non-clustered SMEs during the Pandemic in Bangladesh?',
    event: 'Bangladesh Institute of Development Studies (BIDS) Conference',
    place: 'Dhaka, Bangladesh',
  },
];

export const invited: Talk[] = [
  {
    date: '2024',
    title: 'Remittance in Nepal, Sri Lanka, and Bangladesh',
    event: 'U.S. Department of State, Foreign Service Institute, South and Central Asia Area Studies Program',
    tag: 'Invited',
  },
  {
    date: '2023',
    title: 'Economy, Infrastructure, and Energy in Bangladesh',
    event: 'U.S. Department of State, Foreign Service Institute',
    tag: 'Invited',
  },
];

export const posters: Talk[] = [
  {
    date: '2024',
    title:
      'Impact of Supply Chain Shock on Food Security Patterns for USA, Canada and Mexico: Unraveling the Threads of Resilience in a Complex World of Agriculture',
    event: 'Department of Economics, Texas Tech University',
    place: 'Lubbock, TX',
    with: 'M. Avetisyan and R. Alcantara',
    tag: 'Poster',
  },
];
