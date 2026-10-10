export interface Lesson { title: string; url: string; description?: string }
export interface Course { id: string; title: string; term: string; description: string; lessons: Lesson[] }
// Add public YouTube, Vimeo, or direct MP4 links to lessons when recordings are ready.
export const courses: Course[] = [
  { id:'investments', title:'FIN 3302: Investments', term:'Undergraduate · Online · Summer 2026', description:'The investment environment, asset classes, securities markets, risk and return, capital allocation, optimal risky portfolios, and market efficiency.', lessons:[] },
  { id:'macroeconomics', title:'Principles of Macroeconomics', term:'Undergraduate · In person · Fall 2026', description:'Output, unemployment, inflation, money and banking, and monetary and fiscal policy.', lessons:[] },
  { id:'operations', title:'Operations Management', term:'Tutorial sessions · Summer 2026', description:'Tutorial materials supporting Operations Management students.', lessons:[] },
  { id:'statistics', title:'EMBA Business Statistics', term:'Tutorial sessions · Spring 2023', description:'Tutorial materials supporting business statistics students.', lessons:[] },
];
