// Contact information
export const CONTACTS = [
  {
    name: 'Email',
    value: 'farkhanmaul@gmail.com',
    link: 'mailto:farkhanmaul@gmail.com',
    color: 'sky'
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/farkhanmaul/',
    link: 'https://www.linkedin.com/in/farkhanmaul/',
    color: 'blue'
  },
  {
    name: 'GitHub',
    value: 'github.com/farkhanmaul',
    link: 'https://github.com/farkhanmaul',
    color: 'violet'
  },
  {
    name: 'Instagram',
    value: '@farkhanmaul',
    link: 'https://instagram.com/farkhanmaul',
    color: 'green'
  }
] as const;

// Project information
export const PROJECTS = [
  {
    title: 'FRESHCAN',
    description: 'Mobile app that scans fruit freshness level with ML backend and JWT authentication',
    tech: ['Node.js', 'Express.js', 'MySQL', 'GCP'],
    year: 2023,
    gradient: 'from-blue-400 to-blue-600'
  },
  {
    title: 'MOVIE HANZ',
    description: 'Web application for exploring film data with search and detailed movie information',
    tech: ['React.js', 'API', 'GitHub Pages'],
    year: 2023,
    gradient: 'from-green-400 to-green-600'
  },
  {
    title: 'BNI Retail Banking',
    description: 'Loan Management System with REST APIs, custom forms, and database integration',
    tech: ['Spring Boot', 'jQuery', 'Oracle', 'PostgreSQL'],
    year: 2024,
    gradient: 'from-purple-400 to-purple-600'
  },
  {
    title: 'EMTEK HRIS',
    description: 'Internal HR system with 40+ REST APIs for attendance, bookings, and employee management',
    tech: ['Node.js', 'Express.js', 'MySQL'],
    year: 2023,
    gradient: 'from-orange-400 to-orange-600'
  }
] as const;

// Tech stack badges
export const TECH_BADGES = [
  'React',
  'Node.js', 
  'JavaScript',
  'Java',
  'Spring Boot'
] as const;

// Animation configuration
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2
  },
  easing: {
    smooth: 'power3.out',
    bounce: 'back.out(1.7)',
    elastic: 'elastic.out(1, 0.3)'
  },
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.2
  }
} as const;