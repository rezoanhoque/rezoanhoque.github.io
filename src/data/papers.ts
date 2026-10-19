// Papers, chapters and op-eds.
// Owner rules (2026-10-19): never show a journal review status (no "under review", "R&R" or
// "major revision"), and show an abstract, summary or figure for the job market paper only.
// Every other paper is listed by title and coauthors.

export type Status = 'published' | 'working' | 'chapter' | 'press';

export interface Paper {
  id: string;
  title: string;
  authors: string[];          // in order; 'M. R. Hoque' is set in bold
  status: Status;
  statusLabel?: string;       // short tag text
  venue?: string;             // journal or outlet, shown in italics
  detail?: string;            // year, volume, pages
  note?: string;              // a conference presentation
  lead?: string;
  abstract?: string;
  fig?: { file: string; title: string; caption: string };
}

export const ME = 'M. R. Hoque';

export const jmp: Paper = {
  id: 'jmp',
  title: 'Subsidies as Attention Shocks and Their Impact on Insider Activity',
  authors: [ME, 'J. A. Pérez-Amuedo', 'R. Houston', 'M. K. Hassan'],
  status: 'working',
  note: 'Presented at the FMA 2026 Annual Meeting, Tampa',
  lead:
    'Government subsidies bring firms attention, not information. Analyst coverage rises after a first award, but what analysts say does not change. Insiders are the ones who react: their open-market trading rises 47 percent and tilts toward selling, and those sales predict returns less well than ordinary insider sales.',
  abstract:
    'How do government subsidies shape the information environment of public firms? Linking public subsidy data to analyst data and SEC Form 4 insider transactions for U.S. public firms over 2000 to 2023, we show that subsidies operate as attention events rather than information events. Analyst coverage intensity rises by approximately 4.8 percent in a panel OLS, and by 8.7 percent in a matched difference-in-differences design over the five-year award window following the first receipt. The effect builds for three years post-award and scales with award size. Yet the content of analyst output does not change. Consensus recommendations show a contemporaneous improvement, but no causal effect in the matched design, and forecast disagreement is flat once dispersion is scaled by the consensus mean. The unscaled increase using both I/B/E/S and Zacks data is a price-level artifact. Insiders respond decisively, with open-market trading volume rising 47 percent after subsidies, tilting toward net selling, and concentrating in opaque firms where outside evaluation is hardest. These post-award sales are less predictive of future returns than ordinary insider sales, consistent with opportunistic selling around subsidy-driven attention rather than informed trading. Government awards shift attention and liquidity rather than information, and corporate insiders, rather than analysts, appear to convert that attention into private benefits.',
  fig: {
    file: 'jmp_fig.png',
    title: 'Insider trading builds after the subsidy award.',
    caption:
      "Estimated change in insiders' open-market dollar volume from five years before to five years after a firm's first subsidy, relative to the year before the award.",
  },
};

export const jmpFindings = [
  ['Attention, not information', 'Analyst coverage rises 8.7 percent in a matched difference-in-differences design, but the content of analyst output does not change.'],
  ['Insiders react', 'Open-market insider trading rises 47 percent after a first award, tilts toward net selling, and concentrates in opaque firms.'],
  ['Opportunistic selling', 'Post-award insider sales predict future returns less well than ordinary insider sales.'],
] as const;

// Order follows the master CV.
export const workingPapers: Paper[] = [
  {
    id: 'gilt',
    title: 'Hidden Duration Losses and Bank Crash Risk: Evidence from the 2022 UK Gilt Crisis',
    authors: [ME, 'M. K. Hassan', 'J. A. Pérez-Amuedo', 'M. M. Ferdaus', 'L. Pezzo'],
    status: 'working',
    note: 'SWFA 2026 Annual Meeting',
  },
  {
    id: 'disagreement',
    title: 'The Price of Disagreement: Identification and Measurement Dispersion Shocks',
    authors: [ME, 'J. A. Pérez-Amuedo', 'B. Fudali'],
    status: 'working',
  },
  {
    id: 'rl',
    title: 'The Limits of Flexibility: A Controlled Multi-Domain Study of Reinforcement Learning in Finance',
    authors: [ME, 'M. M. Ferdaus', 'M. K. Hassan'],
    status: 'working',
    note: 'SWDSI 2026 Annual Conference',
  },
  {
    id: 'htm',
    title: 'Unrecognized Held-to-Maturity Losses and the Repricing of US Bank Equity',
    authors: [ME, 'M. K. Hassan', 'J. A. Pérez-Amuedo'],
    status: 'working',
  },
  {
    id: 'infoconflict',
    title: 'Information Conflict and CEO Insider Trading',
    authors: [ME, 'Y. Kaffash Saligheh', 'L. Pezzo'],
    status: 'working',
    note: 'Accepted for presentation at the SFA 2026 Annual Meeting',
  },
  {
    id: 'depositor',
    title: 'Depositor Discipline Re-examined, 2000 to 2025',
    authors: [ME, 'M. K. Hassan', 'J. A. Pérez-Amuedo', 'S. M. Z. Iqbal'],
    status: 'working',
  },
  {
    id: 'saidnotwritten',
    title: 'Said, Not Written: What Earnings Calls Carry That the 10-K Leaves Out',
    authors: [ME, 'N. Maroney'],
    status: 'working',
  },
  {
    id: 'llmq',
    title: 'Do Large Language Models Allocate Capital More in Line with Q-Theory Than Managers?',
    authors: [ME, 'M. M. Ferdaus', 'M. K. Hassan'],
    status: 'working',
  },
  {
    id: 'consensus',
    title: 'Consensus without Revision: Roster Turnover and the Measurement of Analyst Opinion',
    authors: [ME, 'I. Sifat'],
    status: 'working',
  },
  {
    id: 'fuel',
    title: 'Impacts of Improved Fuel Efficiency and Trade Facilitation on Modal Choice and Emissions',
    authors: [ME, 'M. Avetisyan'],
    status: 'working',
  },
  {
    id: 'green',
    title: 'Bangladesh Green Industries Diagnostic',
    authors: ['A. Q. Al-Amin', ME],
    status: 'working',
    detail: '2024',
  },
];

export const journalArticles: Paper[] = [
  {
    id: 'dpr',
    title: 'Nonfarm Activity Reduces Migration: Evidence from Bangladesh',
    authors: ['K. Iqbal', 'M. N. F. Pabon', ME, 'N. A. Shashi'],
    status: 'published',
    statusLabel: 'Published',
    venue: 'Development Policy Review',
    detail: '2023',
  },
  {
    id: 'ejem',
    title: 'Islamic Bank Stability and Efficiency: A Cross-Country Analysis',
    authors: ['F. Fakhrunnas', 'Y. Boubechtoula', 'K. Nahda', ME],
    status: 'published',
    statusLabel: 'Published',
    venue: 'Economic Journal of Emerging Markets',
    detail: '2024',
  },
  {
    id: 'qasimia',
    title: 'Islamic Finance in the USA: Concepts, Institutions, and Ethical Complexities',
    authors: ['M. K. Hassan', ME, 'M. R. Rabbani'],
    status: 'published',
    statusLabel: 'Published',
    venue: 'Al Qasimia University Journal of Islamic Economics',
    detail: '5(2), 1 to 18, 2025',
  },
];

export const chapters: Paper[] = [
  {
    id: 'abrahamic',
    title: 'Social Impact of Islamic Finance: The Paradox of Growth vs. Impact',
    authors: [ME, 'M. K. Hassan'],
    status: 'chapter',
    statusLabel: 'Book chapter',
    venue: 'Social Impact, Ethics, and Practice in Abrahamic Finance',
    detail: 'pp. 233 to 280, 2026',
  },
];

export const press: Paper[] = [
  {
    id: 'tbs',
    title: "Bangladesh's Defaulter Problem in the 2026 Race",
    authors: [],
    status: 'press',
    statusLabel: 'Press',
    venue: 'The Business Standard',
    detail: '2026',
  },
  {
    id: 'trt',
    title: "After the Revolution, Bangladesh's Youth Face Democracy's Hardest Test",
    authors: [],
    status: 'press',
    statusLabel: 'Press',
    venue: 'TRT World',
    detail: '2026',
  },
  {
    id: 'ifn',
    title: 'Islamic Finance in the US: Ethical Growth During Regulatory Transition',
    authors: [],
    status: 'press',
    statusLabel: 'Press',
    venue: 'Islamic Finance News',
    detail: 'March 28, 2025',
  },
];

export const recent: Paper[] = [jmp, workingPapers[0], workingPapers[2]];
