// One place for identity, links and navigation.

export const site = {
  name: 'M. R. Hoque',
  fullName: 'Mohammad Rezoanul Hoque',
  role: 'Ph.D. Candidate in Financial Economics',
  fields: [
    'Empirical Corporate Finance',
    'Financial Institutions and Bank Risk',
    'Analysts and Insiders',
    'Machine Learning in Finance',
  ],
  department: 'Department of Economics and Finance',
  school: 'LSU New Orleans',
  schoolUrl: 'https://www.lsuneworleans.edu/',
  address: ['2000 Lakeshore Drive', 'New Orleans, LA 70148'],
  email: 'mrezoan1@lsuneworleans.edu',
  cv: '/Mohammad_Rezoanul_Hoque_CV.pdf',
  cvUpdated: 'October 2026',
  description:
    'M. R. Hoque, Ph.D. candidate in Financial Economics at LSU New Orleans. Research on analysts, insiders, bank risk and machine learning in finance.',
};

export const profiles = [
  { label: 'Google Scholar', handle: 'Scholar profile', url: 'https://scholar.google.com/citations?user=I0jIEoQAAAAJ&hl=en', icon: 'scholar' },
  { label: 'LinkedIn', handle: 'rezoanul', url: 'https://www.linkedin.com/in/rezoanul/', icon: 'linkedin' },
  { label: 'GitHub', handle: 'rezoanhoque', url: 'https://github.com/rezoanhoque', icon: 'github' },
] as const;

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Experience', href: '/experience/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Presentations', href: '/presentations/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Tutorials', href: '/tutorials/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Contact', href: '/contact/' },
];
