import React from 'react';
import { useScrollAnimation } from '@/hooks/useAnimation';

const EDUCATION = [
  {
    year: '2021 - 2025',
    title: 'Bachelor of Computer Science',
    institution: 'Universitas Ahmad Dahlan',
    type: 'Undergraduate',
    description: 'Currently pursuing degree in Informatics with GPA 3.88/4.00. Active as Lab Assistant, Google Cloud Mentor, and BEM Faculty Staff. Focus on software engineering, algorithms, and database systems.',
    achievements: ['GPA 3.88/4.00', 'Lab Assistant', 'Google Cloud Mentor', 'BEM Faculty Staff'],
    tech: ['Algorithms', 'Data Structures', 'Software Engineering', 'Database Systems', 'Web Development', 'Mobile Development']
  },
  {
    year: '2023',
    title: 'Cloud Computing Cohort',
    institution: 'Bangkit Academy by Google, Gojek & Traveloka',
    type: 'Professional Program',
    description: 'Intensive 6-month career readiness program focusing on cloud computing technologies. Completed 26+ technical certifications across Coursera, Dicoding, and Google Cloud Skill Boost. Built Freshcan mobile app as Capstone Project.',
    achievements: ['26+ Certifications', 'Capstone Project: Freshcan App', 'Google Cloud Certified', 'Dicoding Graduate'],
    tech: ['Google Cloud Platform', 'Node.js', 'Express.js', 'MySQL', 'Cloud Architecture', 'DevOps']
  }
] as const;

export default function Education() {
  useScrollAnimation({
    trigger: '#education-title',
    start: 'top 80%',
    duration: 1
  });

  return (
    <div 
      id="education" 
      className="relative w-screen min-h-screen flex flex-col px-6 sm:px-12 lg:px-20 py-16 sm:py-24 items-center bg-slate-950/30"
      role="region"
      aria-labelledby="education-title"
    >
      <h2 
        id="education-title"
        className="text-lg md:text-2xl xl:text-3xl font-semibold tracking-tight mb-16 sm:mb-20 text-center opacity-0"
        role="heading"
        aria-level="2"
      >
        MY <span className="text-blue-400">EDUCATION</span>
      </h2>

      <div className="max-w-4xl w-full relative">
        {/* Vertical Timeline Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>

        <div className="space-y-12">
          {EDUCATION.map((edu, index) => (
            <article 
              key={`${edu.year}-${index}`}
              className="relative pl-16 group"
              role="article"
              aria-label={`Education: ${edu.title} at ${edu.institution}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300">
                <div className="absolute inset-1 bg-blue-400 rounded-full animate-pulse"></div>
              </div>

              <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-900/70">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">{edu.title}</h3>
                    <p className="text-blue-300 font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                    <span className="text-gray-300 font-normal">{edu.year}</span>
                    <span className="text-sm text-blue-300 bg-blue-950/50 px-2 py-1 rounded-full border border-blue-500/30">
                      {edu.type}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-blue-300 mb-2">Key Achievements:</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement) => (
                      <span 
                        key={achievement}
                        className="px-2 py-1 bg-blue-500/10 text-blue-200 rounded text-xs font-normal border border-blue-500/20 backdrop-blur-sm"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {edu.tech.map((techItem) => (
                    <span 
                      key={techItem}
                      className="px-3 py-1 bg-blue-400/10 text-blue-300 rounded-full text-xs font-normal border border-blue-400/30 backdrop-blur-sm"
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
    </div>
  );
}