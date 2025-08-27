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
    title: 'Movie Hanz',
    description: 'Film collection website built with JavaScript that integrates with The Movie Database API to showcase popular movies with detailed information and search functionality.',
    tech: ['JavaScript', 'HTML', 'CSS', 'TMDb API', 'Responsive Design'],
    year: 2024,
    gradient: 'from-red-500 to-orange-500',
    link: 'https://github.com/farkhanmaul/movie-hanz'
  },
  {
    title: 'VANS x HANZ Website',
    description: 'Modern landing page for VANS collaboration project created as final assignment for Dicoding web programming fundamentals course.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Web', 'Web Standards'],
    year: 2024,
    gradient: 'from-blue-500 to-purple-600',
    link: 'https://github.com/farkhanmaul/vans-x-hanz'
  },
  {
    title: 'FRESHCAN Platform',
    description: 'Fresh product management system designed to help track and manage perishable goods with inventory control features and machine learning integration.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'GCP', 'JWT Auth', 'ML Backend'],
    year: 2023,
    gradient: 'from-cyan-500 to-blue-500',
    link: 'https://github.com/farkhanmaul/freshcan'
  },
  {
    title: 'HRIS Mobile Backend',
    description: 'Human Resource Information System backend services providing comprehensive employee management, attendance tracking, and administrative functions.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'JWT Authentication', 'REST API'],
    year: 2023,
    gradient: 'from-purple-500 to-pink-500',
    link: 'https://github.com/farkhanmaul/hris-mobile-backend'
  },
  {
    title: 'Temperature Converter',
    description: 'Interactive temperature conversion tool supporting multiple temperature scales with real-time calculation and clean user interface.',
    tech: ['JavaScript', 'HTML', 'CSS', 'DOM Manipulation', 'Math Functions'],
    year: 2024,
    gradient: 'from-green-500 to-blue-500',
    link: 'https://github.com/farkhanmaul/temp-converter'
  },
  {
    title: 'Quran Digital Project',
    description: 'Digital Quran application providing easy access to Quranic verses with search functionality and clean reading interface.',
    tech: ['TypeScript', 'API Integration', 'Local Storage', 'Progressive Web App'],
    year: 2023,
    gradient: 'from-green-600 to-emerald-500',
    link: 'https://github.com/farkhanmaul/quran-project'
  },
  {
    title: 'Sort Algorithm Visualizer',
    description: 'Interactive visualization tool for sorting algorithms including bubble sort, merge sort, quick sort, and more with real-time animation and performance comparison.',
    tech: ['JavaScript', 'HTML Canvas', 'CSS Animations', 'Algorithm Visualization'],
    year: 2024,
    gradient: 'from-indigo-500 to-purple-600',
    link: 'https://github.com/farkhanmaul/sort-algo-visualize'
  }
] as const;

// Tech stack badges with icons
export const TECH_BADGES = [
  { name: 'React', icon: '⚛️', color: 'text-blue-400' },
  { name: 'Node.js', icon: '🟢', color: 'text-green-400' },
  { name: 'JavaScript', icon: '🟨', color: 'text-yellow-400' },
  { name: 'TypeScript', icon: '🔷', color: 'text-blue-500' },
  { name: 'Next.js', icon: '⬛', color: 'text-white' },
  { name: 'Express.js', icon: '🚀', color: 'text-gray-400' },
  { name: 'MySQL', icon: '🐬', color: 'text-blue-600' },
  { name: 'MongoDB', icon: '🍃', color: 'text-green-500' }
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