// Course videos. Add a YouTube video id (the part after watch?v=) to each lecture, or a
// playlist id to the course, and the page shows the player. Leave empty to show "coming soon".

export interface Lecture {
  title: string;
  youtube?: string;
}

export interface Course {
  code?: string;
  title: string;
  term: string;
  format: string;
  summary: string;
  playlist?: string;
  lectures: Lecture[];
}

export const courses: Course[] = [
  {
    code: 'FIN 3302',
    title: 'Investments',
    term: 'Summer 2026',
    format: 'Undergraduate, online',
    summary:
      'The investment environment, asset classes, securities markets, risk and return, capital allocation, optimal risky portfolios, and market efficiency.',
    lectures: [],
  },
  {
    title: 'Principles of Macroeconomics',
    term: 'Fall 2026',
    format: 'Undergraduate, face to face',
    summary:
      'Output, unemployment, inflation, money and banking, and monetary and fiscal policy.',
    lectures: [],
  },
];
