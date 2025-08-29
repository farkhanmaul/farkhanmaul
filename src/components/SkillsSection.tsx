'use client';

import Section from '@/components/sections/Section';
import { useScrollAnimation } from '@/hooks/useAnimation';
import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
  color: string;
}

const SKILLS: Skill[] = [
  { name: 'Java', level: 85, category: 'Backend', color: 'bg-yellow-400' },
  { name: 'Spring Boot', level: 80, category: 'Backend', color: 'bg-yellow-500' },
  { name: 'JavaScript', level: 90, category: 'Frontend', color: 'bg-yellow-400' },
  { name: 'Node.js', level: 85, category: 'Backend', color: 'bg-yellow-500' },
  { name: 'Express.js', level: 85, category: 'Backend', color: 'bg-yellow-300' },
  { name: 'React.js', level: 80, category: 'Frontend', color: 'bg-yellow-400' },
  { name: 'MySQL', level: 85, category: 'Database', color: 'bg-yellow-500' },
  { name: 'PostgreSQL', level: 75, category: 'Database', color: 'bg-yellow-400' },
  { name: 'Oracle DB', level: 70, category: 'Database', color: 'bg-yellow-300' },
  { name: 'Git', level: 85, category: 'Tools', color: 'bg-yellow-400' },
  { name: 'Google Cloud', level: 75, category: 'Tools', color: 'bg-yellow-500' },
  { name: 'Jira', level: 80, category: 'Tools', color: 'bg-yellow-400' }
];

export default function SkillsSection() {
  const [visibleBars, setVisibleBars] = useState<Set<number>>(new Set());

  useScrollAnimation({
    trigger: '#skills-title',
    start: 'top 80%',
    duration: 1
  });

  useScrollAnimation({
    trigger: '#skills-container',
    start: 'top 85%',
    duration: 0.8
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleBars(prev => new Set([...prev, index]));
            }, index * 200);
          } else {
            // Reset animation when out of view for re-animation
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleBars(prev => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20% 0px' }
    );

    const setupObserver = () => {
      const skillBars = document.querySelectorAll('[data-skill-bar]');
      skillBars.forEach(bar => observer.observe(bar));
    };

    // Delay to ensure DOM is ready
    const timer = setTimeout(setupObserver, 500);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const categories = ['Frontend', 'Backend', 'Database', 'Tools'] as const;

  return (
    <Section id="skills" className="px-6 sm:px-12 lg:px-20 py-16 sm:py-24 items-center">
      <h2 
        id="skills-title"
        className="text-lg md:text-2xl xl:text-3xl font-semibold tracking-tight mb-16 sm:mb-20 text-center opacity-0"
        role="heading"
        aria-level="2"
      >
        TECHNICAL <span className="text-yellow-300">SKILLS</span>
      </h2>

      <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {categories.map((category) => (
          <div key={category} className="space-y-4">
            <h3 className="text-base sm:text-lg font-medium text-yellow-300 mb-4 sm:mb-6 text-center">
              {category}
            </h3>
            
            <div className="space-y-4">
              {SKILLS.filter(skill => skill.category === category).map((skill, index) => {
                const globalIndex = SKILLS.findIndex(s => s.name === skill.name);
                return (
                  <div 
                    key={skill.name}
                    data-skill-bar
                    data-index={globalIndex}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium text-xs sm:text-sm">{skill.name}</span>
                      <span className="text-gray-400 text-xs sm:text-sm font-medium">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full ${skill.color} transition-all duration-1500 ease-out`}
                        style={{
                          width: visibleBars.has(globalIndex) ? `${skill.level}%` : '0%'
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}