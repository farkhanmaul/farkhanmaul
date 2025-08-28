'use client';

import Section from '@/components/sections/Section';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { useScrollAnimation } from '@/hooks/useAnimation';

const STATS = [
  {
    number: 1,
    suffix: '+',
    label: 'Years Experience',
    description: 'Professional software development'
  },
  {
    number: 40,
    suffix: '+',
    label: 'REST APIs',
    description: 'Built and maintained'
  },
  {
    number: 26,
    suffix: '+',
    label: 'Courses Completed',
    description: 'Continuous learning journey'
  },
  {
    number: 3,
    suffix: '.88',
    label: 'GPA',
    description: 'Bachelor of Computer Science'
  }
];

export default function StatsSection() {
  useScrollAnimation({
    trigger: '#stats-container',
    start: 'top 80%',
    duration: 1
  });

  return (
    <Section id="stats" className="px-6 sm:px-12 lg:px-20 py-8 sm:py-12 items-center">
      <div 
        id="stats-container"
        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl w-full opacity-0"
      >
        {STATS.map((stat, index) => (
          <div 
            key={index}
            className="text-center group hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-3">
              <AnimatedCounter
                end={stat.number}
                suffix={stat.suffix}
                duration={2000 + index * 200}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-300 block"
              />
            </div>
            <h3 className="text-sm sm:text-base font-medium text-white mb-1">
              {stat.label}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-tight">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}