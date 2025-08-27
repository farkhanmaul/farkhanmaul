import PageMarker from '@/components/PageMarker';
import Section from '@/components/sections/Section';
import ProjectCard from '@/components/ui/ProjectCard';
import { useScrollAnimation } from '@/hooks/useAnimation';
import { PROJECTS } from '@/lib/constants';

export default function Projects() {
  useScrollAnimation({
    trigger: '#projects-title',
    start: 'top 80%',
    duration: 1
  });

  return (
    <Section id="projects" className="px-6 sm:px-12 lg:px-20 py-16 sm:py-24 items-center">
      <h2 
        id="projects-title"
        className="text-2xl md:text-4xl xl:text-5xl font-bold tracking-tighter mb-20 sm:mb-24 text-center opacity-0"
        role="heading"
        aria-level="2"
      >
        FEATURED <span className="text-yellow-300">PROJECTS</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full" role="list" aria-label="Featured projects">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <PageMarker />
    </Section>
  );
}