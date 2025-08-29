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
  // Frontend - Blue tones
  { name: 'JavaScript', level: 90, category: 'Frontend', color: 'bg-gradient-to-r from-yellow-400 to-amber-400' },
  { name: 'React.js', level: 80, category: 'Frontend', color: 'bg-gradient-to-r from-blue-400 to-cyan-400' },
  
  // Backend - Warm tones  
  { name: 'Java', level: 85, category: 'Backend', color: 'bg-gradient-to-r from-amber-400 to-orange-400' },
  { name: 'Spring Boot', level: 80, category: 'Backend', color: 'bg-gradient-to-r from-green-400 to-emerald-400' },
  { name: 'Node.js', level: 85, category: 'Backend', color: 'bg-gradient-to-r from-lime-400 to-green-400' },
  { name: 'Express.js', level: 85, category: 'Backend', color: 'bg-gradient-to-r from-gray-400 to-slate-400' },
  
  // Database - Cool tones
  { name: 'MySQL', level: 85, category: 'Database', color: 'bg-gradient-to-r from-orange-400 to-red-400' },
  { name: 'PostgreSQL', level: 75, category: 'Database', color: 'bg-gradient-to-r from-blue-400 to-indigo-400' },
  { name: 'Oracle DB', level: 70, category: 'Database', color: 'bg-gradient-to-r from-red-400 to-pink-400' },
  
  // Tools - Mixed tones
  { name: 'Git', level: 85, category: 'Tools', color: 'bg-gradient-to-r from-orange-400 to-amber-400' },
  { name: 'Google Cloud', level: 75, category: 'Tools', color: 'bg-gradient-to-r from-blue-400 to-sky-400' },
  { name: 'Jira', level: 80, category: 'Tools', color: 'bg-gradient-to-r from-blue-500 to-blue-600' }
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
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          
          if (entry.isIntersecting) {
            // Trigger animation dengan delay bertahap
            setTimeout(() => {
              setVisibleBars(prev => {
                const newSet = new Set(prev);
                newSet.add(index);
                return newSet;
              });
            }, (index % 4) * 150); // Animasi per kategori dengan delay
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Observe skills container instead of individual bars
    const observeSkillsContainer = () => {
      const skillsContainer = document.getElementById('skills-container');
      if (skillsContainer) {
        const skillBars = skillsContainer.querySelectorAll('[data-skill-bar]');
        
        // Setup observer for each skill bar
        skillBars.forEach(bar => {
          observer.observe(bar);
        });
        
        return skillBars.length;
      }
      return 0;
    };

    // Multiple attempts to setup observer
    const timer1 = setTimeout(() => {
      const count = observeSkillsContainer();
      if (count === 0) {
        // Try again after longer delay
        setTimeout(observeSkillsContainer, 500);
      }
    }, 100);

    return () => {
      clearTimeout(timer1);
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

      <div id="skills-container" className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
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