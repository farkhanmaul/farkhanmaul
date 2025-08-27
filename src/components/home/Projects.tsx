import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import PageMarker from '../PageMarker';

interface Project {
  title: string;
  description: string;
  tech: string[];
  year: number;
  color: string;
}

const projects: Project[] = [
  {
    title: 'FRESHCAN',
    description: 'Mobile app that scans fruit freshness level with ML backend and JWT authentication',
    tech: ['Node.js', 'Express.js', 'MySQL', 'GCP'],
    year: 2023,
    color: 'from-blue-400 to-blue-600'
  },
  {
    title: 'MOVIE HANZ',
    description: 'Web application for exploring film data with search and detailed movie information',
    tech: ['React.js', 'API', 'GitHub Pages'],
    year: 2023,
    color: 'from-green-400 to-green-600'
  },
  {
    title: 'BNI Retail Banking',
    description: 'Loan Management System with REST APIs, custom forms, and database integration',
    tech: ['Spring Boot', 'jQuery', 'Oracle', 'PostgreSQL'],
    year: 2024,
    color: 'from-purple-400 to-purple-600'
  },
  {
    title: 'EMTEK HRIS',
    description: 'Internal HR system with 40+ REST APIs for attendance, bookings, and employee management',
    tech: ['Node.js', 'Express.js', 'MySQL'],
    year: 2023,
    color: 'from-orange-400 to-orange-600'
  }
];

export default function Projects() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (!titleRef.current || !projectsRef.current) return;

    // Title animation
    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Projects stagger animation
    gsap.fromTo('.project-card', 
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="projects" 
      className="relative p-12 w-screen min-h-screen flex flex-col"
      data-id="projects"
    >
      <section className="relative flex-grow flex flex-col items-center pt-20">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tighter mb-16 text-center"
        >
          FEATURED <span className="text-yellow-300">PROJECTS</span>
        </h2>

        <div 
          ref={projectsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full"
        >
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="project-card group cursor-pointer"
            >
              <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${project.color} bg-opacity-10 backdrop-blur-sm border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-sm opacity-60">{project.year}</span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-sm text-gray-200 backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <PageMarker />
      </section>
    </section>
  );
}