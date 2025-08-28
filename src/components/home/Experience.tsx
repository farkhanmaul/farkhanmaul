import Section from '@/components/sections/Section';
import { useScrollAnimation } from '@/hooks/useAnimation';

const EXPERIENCES = [
  {
    year: '2024 - 2025',
    title: 'Junior Software Developer',
    company: 'PT. Bank Negara Indonesia (BNI)',
    type: 'Full Time',
    description: 'Developing system functionalities for digital banking workflows in Retail Enablers Digital Delivery Division. Built 3 REST APIs using Spring Boot with Oracle/PostgreSQL databases and customized form functionalities using jQuery.',
    tech: ['Spring Boot', 'Java', 'Oracle', 'PostgreSQL', 'jQuery', 'JavaScript']
  },
  {
    year: '2023 - 2024',
    title: 'Bachelor of Computer Science',
    company: 'Universitas Ahmad Dahlan',
    type: 'Education',
    description: 'Graduated with GPA 3.88/4.00 majoring in Informatics. Activities: Lab Assistant, Google Cloud Mentor, BEM Faculty Staff.',
    tech: ['Algorithms', 'Data Structures', 'Software Engineering', 'Database Systems']
  },
  {
    year: '2023',
    title: 'Software Developer Intern',
    company: 'PT. Elang Mahkota Teknologi (EMTEK)',
    type: 'Internship',
    description: 'Created 40+ REST API endpoints for internal HRIS using Node.js and Express.js. Developed features for employee attendance, room bookings, and leave management systems.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'JWT', 'REST API']
  },
  {
    year: '2023',
    title: 'Cloud Computing Cohort',
    company: 'Bangkit Academy by Google',
    type: 'Learning',
    description: 'Career readiness program by Google, Gojek & Traveloka. Completed 26+ courses across Coursera, Dicoding, and Google Cloud Skill Boost. Built Freshcan mobile app as Capstone Project.',
    tech: ['Google Cloud', 'Node.js', 'Express.js', 'MySQL', 'GCP Deployment']
  }
] as const;

export default function Experience() {
  useScrollAnimation({
    trigger: '#experience-title',
    start: 'top 80%',
    duration: 1
  });

  return (
    <Section id="experience" className="px-6 sm:px-12 lg:px-20 py-16 sm:py-24 items-center">
      <h2 
        id="experience-title"
        className="text-lg md:text-2xl xl:text-3xl font-semibold tracking-tight mb-16 sm:mb-20 text-center opacity-0"
        role="heading"
        aria-level="2"
      >
        MY <span className="text-yellow-300">EXPERIENCE</span>
      </h2>

      <div className="max-w-4xl w-full relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gray-400 via-gray-600 to-gray-800"></div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <article 
              key={`${exp.year}-${index}`}
              className="relative pl-16 group"
              role="article"
              aria-label={`Experience: ${exp.title} at ${exp.company}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-1 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>

              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-gray-500 transition-all duration-300 hover:bg-opacity-70">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{exp.title}</h3>
                    <p className="text-gray-400 font-normal">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                    <span className="text-gray-300 font-normal">{exp.year}</span>
                    <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((techItem) => (
                    <span 
                      key={techItem}
                      className="px-3 py-1 bg-yellow-300 bg-opacity-10 text-yellow-300 rounded-full text-xs font-normal border border-yellow-300 border-opacity-30"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}