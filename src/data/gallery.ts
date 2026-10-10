// Gallery photos, newest first. Files live in src/assets/gallery.

export interface Photo {
  file: string;
  tag: 'Conferences' | 'Talks' | 'Posters' | 'Awards' | 'Milestones' | 'Teaching';
  date?: string;
  caption: string;
  alt: string;
}

export const photos: Photo[] = [
  {
    file: 'lsuno-fall-2026.jpg',
    tag: 'Milestones',
    date: 'Fall 2026',
    caption: 'The Fall 2026 semester at LSU New Orleans.',
    alt: 'A lecture in a tiered classroom at LSU New Orleans',
  },
  {
    file: 'swfa-2026-talk.jpg',
    tag: 'Conferences',
    date: 'Mar 2026',
    caption: 'Presenting research on U.S. bank risk at the Southwestern Finance Association (SWFA) 2026 Annual Meeting.',
    alt: 'M. R. Hoque presenting a paper on U.S. banking at SWFA 2026',
  },
  {
    file: 'swfa-2026-program.jpg',
    tag: 'Conferences',
    date: 'Mar 2026',
    caption: 'Our paper with M. Kabir Hassan in the Regulation, Liquidity, and Global Banking session, SWFA 2026 Annual Meeting, March 27, 2026.',
    alt: 'The SWFA 2026 session program on an easel',
  },
  {
    file: 'swfa-2026-kelly-shue.jpg',
    tag: 'Conferences',
    date: 'Mar 2026',
    caption: "Attending Kelly Shue's (Yale School of Management) talk on faces and personality at the SWFA 2026 Annual Meeting.",
    alt: 'Kelly Shue speaking at SWFA 2026',
  },
  {
    file: 'fbd-2026-talk.jpg',
    tag: 'Talks',
    date: 'Mar 2026',
    caption: 'Speaking at the Federation of Business Disciplines (FBD) 2026 Annual Conference, on our reinforcement learning paper and a second paper on global economic shocks.',
    alt: 'M. R. Hoque presenting at the FBD 2026 Annual Conference',
  },
  {
    file: 'swdsi-2025.jpg',
    tag: 'Conferences',
    date: 'Mar 2025',
    caption: 'Presenting "Machine Learning-Based Optimization of Capital Structure Decisions" at the Federation of Business Disciplines (SWDSI) Annual Conference.',
    alt: 'M. R. Hoque presenting at SWDSI 2025',
  },
  {
    file: 'gtap-poster-2024.jpg',
    tag: 'Posters',
    date: '2024',
    caption: 'With our poster "Impact of Supply Chain Shock on Food Security Patterns for USA, Canada and Mexico" (with Misak Avetisyan and Reymark Alcantara), Texas Tech University.',
    alt: 'M. R. Hoque standing beside a research poster on supply chain shocks and food security',
  },
  {
    file: 'ttu-graduation.jpg',
    tag: 'Milestones',
    caption: 'Graduation at Texas Tech University, M.S. in Agricultural and Applied Economics.',
    alt: 'M. R. Hoque with the Texas Tech mascot at the university seal in the snow',
  },
  {
    file: 'usda-award-2023.jpg',
    tag: 'Awards',
    date: 'Jul 2023',
    caption: '1st Place, 2023 USDA AMS Local Food Economics Data Visualization Challenge, with Xiaoqi Wang and Eugene K. Nuworsu, AAEA Annual Meeting, Washington, D.C.',
    alt: 'AAEA award certificate for 1st place in the 2023 USDA data visualization challenge',
  },
  {
    file: 'worldbank-2022.jpg',
    tag: 'Conferences',
    date: 'Nov 2022',
    caption: 'Our paper "Local Nonfarm Opportunities and Migration Decisions: Evidence from Bangladesh" at the World Bank 10th South Asia Economic Policy Network Conference on Migration in South Asia, Kathmandu.',
    alt: 'The paper session on screen at the World Bank South Asia conference',
  },
  {
    file: 'ttu-fellowship-2022.jpg',
    tag: 'Awards',
    date: 'Oct 2022',
    caption: 'The 23rd Annual Donor-Recipient Fellowship Reception for Distinguished Graduate Student Assistantship recipients, Texas Tech University Graduate School.',
    alt: 'Group photo of assistantship recipients at Texas Tech University',
  },
];
