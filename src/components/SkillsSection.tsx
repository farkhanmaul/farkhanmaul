import React from 'react';
import { useScrollAnimation } from '@/hooks/useAnimation';

interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools & Cloud';
  icon: string;
  experience: string;
}

const SKILLS: Skill[] = [
  { name: 'JavaScript', category: 'Frontend', icon: 'JS', experience: '3+ years' },
  { name: 'React.js', category: 'Frontend', icon: '⚛️', experience: '2+ years' },
  { name: 'HTML/CSS', category: 'Frontend', icon: '🎨', experience: '3+ years' },
  { name: 'Tailwind CSS', category: 'Frontend', icon: '💨', experience: '2+ years' },
  { name: 'Java', category: 'Backend', icon: '☕', experience: '2+ years' },
  { name: 'Spring Boot', category: 'Backend', icon: '🍃', experience: '1.5+ years' },
  { name: 'Node.js', category: 'Backend', icon: '💚', experience: '2+ years' },
  { name: 'Express.js', category: 'Backend', icon: '⚡', experience: '2+ years' },
  { name: 'MySQL', category: 'Database', icon: '🐬', experience: '2+ years' },
  { name: 'PostgreSQL', category: 'Database', icon: '🐘', experience: '1+ years' },
  { name: 'Oracle DB', category: 'Database', icon: '🏛️', experience: '1+ years' },
  { name: 'Git', category: 'Tools & Cloud', icon: '📝', experience: '3+ years' },
  { name: 'Google Cloud', category: 'Tools & Cloud', icon: '☁️', experience: '1+ years' },
  { name: 'Docker', category: 'Tools & Cloud', icon: '🐳', experience: '1+ years' },
  { name: 'Postman', category: 'Tools & Cloud', icon: '📫', experience: '2+ years' }
];

const categoryColors = {
  'Frontend': 'border-cyan-400/30 bg-cyan-500/10',
  'Backend': 'border-emerald-400/30 bg-emerald-500/10', 
  'Database': 'border-orange-400/30 bg-orange-500/10',
  'Tools & Cloud': 'border-purple-400/30 bg-purple-500/10'
};

const categoryTitleColors = {
  'Frontend': 'text-cyan-400',
  'Backend': 'text-emerald-400',
  'Database': 'text-orange-400', 
  'Tools & Cloud': 'text-purple-400'
};

export default function SkillsSection() {
  useScrollAnimation({
    trigger: '#skills-title',
    start: 'top 80%',
    duration: 1
  });

  const skillsByCategory = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <div id="skills" className="relative w-screen min-h-screen flex flex-col px-6 sm:px-12 lg:px-20 py-16 sm:py-24 items-center" role="region">
      <h2 id="skills-title" className="text-lg md:text-2xl xl:text-3xl font-semibold tracking-tight mb-16 sm:mb-20 text-center opacity-0">
        TECHNICAL <span className="text-cyan-400">SKILLS</span>
      </h2>

      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category} className={`p-6 rounded-xl border backdrop-blur-sm ${categoryColors[category as keyof typeof categoryColors]}`}>
              <h3 className={`text-lg font-semibold mb-4 ${categoryTitleColors[category as keyof typeof categoryTitleColors]}`}>
                {category}
              </h3>
              
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between p-3 bg-slate-800/40 rounded-lg border border-slate-700/30 hover:border-slate-600/50 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium text-white">{skill.name}</span>
                    </div>
                    <span className="text-sm text-slate-300 bg-slate-700/50 px-2 py-1 rounded">
                      {skill.experience}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold mb-3 text-cyan-400">Professional Experience</h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl mx-auto">
              1+ years of professional software development experience building scalable applications, 
              REST APIs, and full-stack solutions. Committed to continuous learning and staying updated 
              with the latest technologies and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}