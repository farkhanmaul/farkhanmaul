import Section from '@/components/sections/Section';
import { useScrollAnimation } from '@/hooks/useAnimation';

const EXPERIENCES = [
  {
    year: '2024',
    title: 'Fresh Graduate',
    company: 'Informatics Engineering',
    type: 'Education',
    description: 'Completed bachelor degree in Informatics Engineering with focus on software development and algorithms.',
    tech: ['JavaScript', 'React', 'Node.js', 'Database']
  },
  {
    year: '2023-2024',
    title: 'Web Developer Student',
    company: 'Dicoding Academy',
    type: 'Learning',
    description: 'Intensive learning program focusing on modern web development technologies and best practices.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Web APIs']
  },
  {
    year: '2022-2023',
    title: 'Backend Developer Intern',
    company: 'HRIS Mobile Project',
    type: 'Project',
    description: 'Developed backend services for Human Resource Information System mobile application.',
    tech: ['Node.js', 'Express', 'MongoDB', 'REST API']
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
        className="text-2xl md:text-4xl xl:text-5xl font-bold tracking-tighter mb-20 sm:mb-24 text-center opacity-0"
        role="heading"
        aria-level="2"
      >
        MY <span className="text-yellow-300">EXPERIENCE</span>
      </h2>

      <div className="max-w-4xl w-full relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-300 via-gray-600 to-gray-800"></div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <article 
              key={`${exp.year}-${index}`}
              className="relative pl-16 group"
              role="article"
              aria-label={`Experience: ${exp.title} at ${exp.company}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 -translate-x-1/2 w-4 h-4 bg-yellow-300 rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-1 bg-yellow-300 rounded-full animate-pulse"></div>
              </div>

              <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-yellow-300 transition-all duration-300 hover:bg-opacity-70">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-yellow-300 font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                    <span className="text-gray-300 font-medium">{exp.year}</span>
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
                      className="px-3 py-1 bg-yellow-300 bg-opacity-10 text-yellow-300 rounded-full text-sm font-medium border border-yellow-300 border-opacity-30"
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