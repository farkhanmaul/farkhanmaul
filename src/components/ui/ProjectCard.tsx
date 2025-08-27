interface ProjectCardProps {
  title: string;
  description: string;
  tech: readonly string[];
  year: number;
  gradient: string;
}

export default function ProjectCard({ title, description, tech, year, gradient }: ProjectCardProps) {
  return (
    <article className="project-card group cursor-pointer" role="article" aria-label={`Project: ${title}`}>
      <div className={`h-full p-8 rounded-2xl bg-gradient-to-br ${gradient} bg-opacity-10 backdrop-blur-sm border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-500 hover:scale-105 hover:shadow-2xl`}>
        <header className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-yellow-300 transition-colors">
            {title}
          </h3>
          <time className="text-sm opacity-60" dateTime={year.toString()}>{year}</time>
        </header>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        
        <footer className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
          {tech.map((techItem) => (
            <span 
              key={techItem}
              className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-sm text-gray-200 backdrop-blur-sm"
              role="listitem"
            >
              {techItem}
            </span>
          ))}
        </footer>
      </div>
    </article>
  );
}