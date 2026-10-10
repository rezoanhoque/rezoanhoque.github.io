// Papers, chapters and op-eds. The master CV is the source of truth for every status.
// Rules kept from the earlier site: abstracts only (no PDF links), figures for four papers,
// the LLM q-theory paper and the HTM paper show the title only.

export type Status = 'published' | 'under-review' | 'revision' | 'working' | 'chapter' | 'press';

export interface Paper {
  id: string;
  title: string;
  authors: string[];          // in order; 'M. R. Hoque' is set in bold
  status: Status;
  statusLabel?: string;       // short tag text
  venue?: string;             // journal or outlet, shown in italics
  detail?: string;            // year, volume, pages
  note?: string;              // e.g. a conference acceptance
  lead?: string;
  abstract?: string;
  fig?: { file: string; title: string; caption: string };
}

export const ME = 'M. R. Hoque';

export const jmp: Paper = {
  id: 'jmp',
  title: 'Subsidies as Attention Shocks and Their Impact on Insider Activity',
  authors: [ME, 'J. A. Pérez-Amuedo', 'R. Houston', 'M. K. Hassan'],
  status: 'under-review',
  statusLabel: 'Under review',
  venue: 'Financial Management',
  note: 'Accepted for presentation at the FMA 2026 Annual Meeting',
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

export const underReview: Paper[] = [
  {
    id: 'gilt',
    title: 'Hidden Duration Losses and Bank Crash Risk: Evidence from the 2022 UK Gilt Crisis',
    authors: [ME, 'M. K. Hassan', 'J. A. Pérez-Amuedo', 'M. M. Ferdaus', 'L. Pezzo'],
    status: 'revision',
    statusLabel: 'Major revision',
    venue: 'Quarterly Review of Economics and Finance',
    note: 'SWFA 2026 Annual Meeting',
    lead:
      'When do hidden losses on long-duration bonds turn into priced bank risk? Using the September 2022 UK gilt crisis, a shock that began in the pension sector rather than in banks, we find that across 42 banks in 13 jurisdictions a one-standard-deviation higher pre-shock gilt sensitivity raises the probability of a 5-day equity crash by 4.06 percentage points.',
    abstract:
      'Large unrealized losses on long-duration securities held at amortised cost are a well-documented source of bank fragility. Much less is known about when those hidden losses show up in market-based measures of bank risk. We argue that hidden duration exposure raises crash risk only when a salient shock forces investors to revalue long-duration assets, and we test this with the September 2022 UK gilt crisis, a repricing shock that originated in a fiscal announcement and the pension sector rather than in banks. Across 42 banks in 13 jurisdictions, a one-standard-deviation increase in pre-shock gilt sensitivity, a market-revealed measure of duration exposure, raises the probability of a 5-day forward equity crash by 4.06 percentage points (p = 0.005); a placebo window one year earlier shows nothing, and the estimate is significant in every leave-one-country-out subsample. A machine-learning diagnostic applied to a daily panel of 106 U.S. banks (2010 to 2024) independently points to held-to-maturity exposure relative to equity as the relevant balance-sheet vulnerability after 2020, and U.S. stablecoin-stress episodes show the same pattern with the predicted sign, though with limited statistical power. A simple 22-day volatility signal matches gradient boosting out of sample, so the machine-learning contribution is diagnostic rather than predictive. The results identify the trigger that turns hidden duration losses into priced crash risk.',
    fig: {
      file: 'gilt_fig.png',
      title: 'UK bank stocks and gilts in the 2022 gilt crisis.',
      caption:
        'Cumulative log return of an equal-weighted portfolio of 11 UK banks and of a UK gilt ETF, August to November 2022. The dashed line marks the 23 September mini-budget.',
    },
  },
  {
    id: 'rl',
    title: 'The Limits of Flexibility: A Controlled Multi-Domain Study of Reinforcement Learning in Finance',
    authors: [ME, 'M. M. Ferdaus', 'M. K. Hassan'],
    status: 'under-review',
    statusLabel: 'Under review',
    venue: 'International Review of Financial Analysis',
    note: 'SWDSI 2026',
    lead:
      'Does deep reinforcement learning beat simple, well-implemented portfolio rules? Under one fixed, cost-aware protocol on real market data, no RL algorithm robustly beats naive 1/N diversification or a mean-variance optimizer, and a controlled simulation shows why.',
    abstract:
      'Reinforcement learning (RL) is increasingly proposed for financial decision making, yet evidence that it outperforms established methods remains fragmented and largely self-reported. We test the claim with controlled, out-of-sample experiments on real market data in two domains under one fixed, cost-aware protocol, so any difference is attributable to the decision rule alone. In equity portfolio optimization (Dow Jones constituents, daily 2006 to 2024), four deep RL algorithms compete against mean-variance, risk-parity, and naive 1/N diversification. Across the 2019 to 2024 hold-out, three universes, transaction-cost levels, market regimes, and walk-forward re-estimation, no RL algorithm robustly outperforms 1/N or a well-implemented mean-variance optimizer. In directional trading on real intraday crypto and equity data, hyperparameter-tuned RL fails to beat simple rule-based strategies and buy-and-hold, and an ablation shows that neither algorithm choice nor feature engineering makes RL competitive. Asked whether RL can augment classical methods, an RL meta-allocator improves substantially on pure RL and matches naive diversification, yet no RL design beats a well-implemented mean-variance optimizer. A controlled simulation explains the pattern: the sample a flexible learner needs to overtake a simple optimizer far exceeds available financial history. Even in a fair-shot test that feeds RL a survivorship-free CRSP cross-section with Compustat and IBES signals, no agent beats a simple characteristic-sorted benchmark. Across both domains, deep RL does not robustly outperform simple, well-implemented traditional methods, extending the classic 1/N diversification puzzle to the deep-RL era and cautioning against equating algorithmic complexity with financial performance.',
    fig: {
      file: 'lof_fig.png',
      title: 'Out-of-sample growth of $1, 2019 to 2024.',
      caption:
        'Net of 10 basis points in costs, on real Dow Jones data. The deep RL strategies track the 1/N and buy-and-hold benchmarks closely; the mean-variance optimizer leads.',
    },
  },
  {
    id: 'htm',
    title: 'Unrecognized Held-to-Maturity Losses and the Repricing of US Bank Equity',
    authors: [ME, 'M. K. Hassan', 'J. A. Pérez-Amuedo'],
    status: 'under-review',
    statusLabel: 'Under review',
    venue: 'Finance Research Letters',
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

export const workingPapers: Paper[] = [
  {
    id: 'infoconflict',
    title: 'Information Conflict and CEO Insider Trading',
    authors: [ME, 'Y. Kaffash Saligheh', 'L. Pezzo'],
    status: 'working',
    statusLabel: 'Working paper',
    note: 'Accepted for presentation at the SFA 2026 Annual Meeting',
    lead:
      "A firm's public conduct record and analysts' opinions about the firm reach corporate decisions on different clocks. Executives buy their own stock when analysts are pessimistic, while their trading shows no measurable link to the conduct record.",
    abstract:
      "A firm's reputational record and analysts' opinions about the firm are associated with its debt financing on two different clocks. In a panel of U.S. firms that links RepRisk incident data to Compustat, I/B/E/S and SEC Form 4 filings, net debt issuance is lower by 1.53 percentage points of lagged assets per standard deviation of the record's three-year accumulated state and by only 0.50 points per standard deviation of its current-year value, and in a distributed lag the association sits in the lags rather than in the current year. The opinion behaves the opposite way: issuance is lower by 1.00 points per standard deviation of its current value, and averaging it over three years shrinks the association to 0.55. The two signals enter with the same sign, and a regression on their difference imposes a restriction the data reject. Executives provide a benchmark. Chief executives and chief financial officers buy their own stock when analysts are pessimistic, while their trading shows no measurable association with the record: the chief executive's loading on the record is 0.010, with a 95 percent confidence interval from 0.038 below zero to 0.058 above and a minimum detectable effect of 0.069. Around a first severe incident, issuance does not move in the incident year and falls over the following three years, but the decline is no longer distinguishable from zero once the firms first treated between 2020 and 2022 are excluded and a placebo date reproduces it, so we report it as a descriptive time path. We document five designs that would identify an effect of the record and the number that closes each.",
    fig: {
      file: 'p5_fig.png',
      title: 'The risk signal jumps at a severe incident; the CEO does not trade on it.',
      caption:
        "Panel A: the RepRisk Index around a firm's first severe incident. Panel B: event-time estimates of the probability that the CEO is a net buyer of the firm's stock, with 95 percent confidence bands.",
    },
  },
  {
    id: 'disagreement',
    title: 'The Price of Disagreement: Identification and Measurement Dispersion Shocks',
    authors: [ME, 'J. A. Pérez-Amuedo', 'B. Fudali'],
    status: 'working',
    statusLabel: 'Working paper',
    abstract:
      "Analyst disagreement is finance's standard measure of investor uncertainty, yet identifying its pricing effects requires variation in dispersion that is orthogonal to firm information. Brokerage exits offer an arithmetic source of such variation by removing forecasts from the outstanding set. This study analyzes 4,724 equity events and 5,360 matched corporate-bond events to test whether non-informative changes in analyst disagreement affect asset prices. In equities, a pre-specified date placebo applied one year earlier finds the same estimated effect on announcement-window returns even when no broker exits. The placebo slope is 1.04 times its real-event size, indicating that the dispersion shock does not isolate the exit's causal effect. In credit markets, this contamination is absent. Estimates rule out spread responses above 7.5 basis points overall, and above 4.6 among high-dispersion issuers. The paper shows that uncertainty reflected in analyst disagreement requires credible exogenous variation to identify asset pricing effects, which can be smaller than previously inferred.",
  },
  {
    id: 'depositor',
    title: 'Depositor Discipline Re-examined, 2000 to 2025',
    authors: [ME, 'M. K. Hassan', 'J. A. Pérez-Amuedo', 'S. M. Z. Iqbal'],
    status: 'working',
    statusLabel: 'Working paper',
    abstract:
      'We test three theories of depositor discipline on the quarterly census of 11,622 U.S. banks from 2000 to 2025. The response of uninsured deposit growth to bank health is small in normal times and about 10 times larger in the 2008 to 2010 crisis, a pattern that survives the removal of dated mergers and failure transfers, location-by-quarter fixed effects, two-way clustering and reweighting to a constant size mix, and that is absent at banks above $10 billion. When the Transaction Account Guarantee expired in 2013, the health sensitivity of noninterest-bearing deposits at the most exposed banks rose by 0.51 log points per standard deviation relative to the least exposed, while insured deposits moved the other way. Most of the measured price response reflects deposit composition; what remains is concentrated where uninsured funding is large. Coordination explains when withdrawals discipline banks and guarantees explain where.',
  },
  {
    id: 'saidnotwritten',
    title: 'Said, Not Written: What Earnings Calls Carry That the 10-K Leaves Out',
    authors: [ME, 'N. Maroney'],
    status: 'working',
    statusLabel: 'Working paper',
    abstract:
      "A listed firm describes each fiscal year twice within weeks: on its fourth-quarter earnings call and in the Management's Discussion and Analysis (MD&A) of its 10-K, which carries legal liability. The call is the more optimistic text in 97.9 percent of filing-call pairs. On 26,870 pairs filed from 2006 to 2023, the call's extra optimism is associated with larger increases in next year's return on assets, and realized earnings exceed the analyst consensus formed after the call by more when the call is more optimistic, while MD&A tone is unrelated to that consensus's error. Most of the call's loading survives controls for the quarter's earnings surprise, guidance and profitability's mean reversion. It sits in the sentiment component of the gap between the texts, not in the MD&A's extra legal language, and in scripted remarks as well as in answers. Five shocks to the written text's legal exposure, among them 4,705 SEC staff reviews aimed at the MD&A, never made the MD&A more guarded. The evidence fits a view in which soft judgment travels by voice because of the form of the filed document, not its liability. It is descriptive.",
  },
  {
    id: 'llmq',
    title: 'Do Large Language Models Allocate Capital More in Line with Q-Theory Than Managers?',
    authors: [ME, 'M. M. Ferdaus', 'M. K. Hassan'],
    status: 'working',
    statusLabel: 'Working paper',
  },
  {
    id: 'consensus',
    title: 'Consensus without Revision: Roster Turnover and the Measurement of Analyst Opinion',
    authors: [ME, 'I. Sifat'],
    status: 'working',
    statusLabel: 'Working paper',
    abstract:
      'A consensus recommendation averages a roster of analysts that turns over, so the reported figure can move although no analyst has revised a view. We decompose monthly changes in US consensus recommendations into a within-analyst revision component and components contributed by analyst entry and exit, and roster composition carries 44.7 percent of the variance. Because the decomposition is exact, the coefficient a study estimates on a raw consensus change is a variance-weighted average of three prices, and we measure them. Splitting the roster average, the revision component is priced 1.77 times as high as the raw change, entry lower and imprecisely, and exit is not distinguishable from zero. Published work on consensus changes has understated the price of analyst opinion rather than overstated it.',
  },
  {
    id: 'fuel',
    title: 'Impacts of Improved Fuel Efficiency and Trade Facilitation on Modal Choice and Emissions',
    authors: [ME, 'M. Avetisyan'],
    status: 'working',
    statusLabel: 'Working paper',
    abstract:
      'International transportation represents a significant and rapidly growing source of greenhouse gas (GHG) emissions that contribute significantly to climate change. In this paper we concentrate on two important decarbonization efforts: improvements in transport fuel efficiency and logistics performance. We use a modified version of the Global Trade Analysis Project Energy (GTAP-E) multiregional and multisector computable general equilibrium (CGE) model, with transport mode substitution in international trade, to simulate improvements in transport fuel efficiency of 10 to 30 percent and logistics improvements based on 2018 to 2023 changes in the World Bank Logistics Performance Index (LPI). Our findings suggest that the most significant economic effects are achieved under a 30 percent fuel efficiency improvement scenario, involving GDP increases of about 1 percent in major economies along with considerable emissions reductions in the European Union (EU) of 7.55 percent. We also identify rebound effects related to oil demand, as well as emissions leakage to Japan, Brazil, and Russia, which can be addressed by pairing efficiency standards with carbon pricing and international coordination.',
  },
  {
    id: 'green',
    title: 'Bangladesh Green Industries Diagnostic',
    authors: ['A. Q. Al-Amin', ME],
    status: 'working',
    statusLabel: 'Working paper',
    detail: '2024',
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

export const recent: Paper[] = [jmp, underReview[0], underReview[1]];
