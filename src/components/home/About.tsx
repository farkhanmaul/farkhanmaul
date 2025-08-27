import PageMarker from '@/components/PageMarker';
import Section from '@/components/sections/Section';
import { Emoji } from '@/components/Twemoji';
import TechBadge from '@/components/ui/TechBadge';
import { useScrollAnimation } from '@/hooks/useAnimation';
import { TECH_BADGES } from '@/lib/constants';
import { useRef } from 'react';

export default function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useScrollAnimation({
    trigger: '#about-title',
    start: 'top 80%',
    duration: 1
  });

  return (
    <Section id="about" className="px-6 sm:px-12 lg:px-20 py-16 sm:py-24 items-center">
      <div className="flex flex-col items-center gap-4" id="about-title" ref={titleRef}>
        <h2 className="text-[20px] md:text-3xl xl:text-4xl font-medium tracking-tighter opacity-0" id="about-title">
          I&apos;M A
        </h2>
        
        <h2 className="text-[35px] sm:text-6xl md:text-7xl xl:text-[6rem] font-semibold tracking-tighter opacity-0" role="heading" aria-level="1">
          SOFTWARE DEVELOPER
        </h2>
        
        <h2 className="text-[20px] md:text-4xl xl:text-5xl font-medium tracking-tighter flex items-center opacity-0" role="heading" aria-level="2">
          <Emoji code="1f1ee-1f1e9" className="mr-5" aria-label="Indonesian flag" />
          FROM INDONESIA
        </h2>
      </div>

      <div className="mt-20 sm:mt-24 text-center">
        <p className="text-lg opacity-60 mb-8">Specialized in modern web technologies</p>
        <div className="flex flex-wrap gap-4 justify-center max-w-md">
          {TECH_BADGES.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>

      <PageMarker />
    </Section>
  );
}