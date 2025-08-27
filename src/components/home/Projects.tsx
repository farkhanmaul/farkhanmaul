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
    <Section id="projects" className="p-12 items-center pt-20">
      <h2 
        id="projects-title"
        className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tighter mb-16 text-center opacity-0"
      >
        FEATURED <span className="text-yellow-300">PROJECTS</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

      <PageMarker />
    </Section>
  );
}