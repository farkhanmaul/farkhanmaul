interface ProjectCardProps {
  title: string;
  description: string;
  tech: readonly string[];
  year: number;
  gradient: string;
  link?: string;
}

export default function ProjectCard({ title, description, tech, year, gradient, link }: ProjectCardProps) {
  const CardContent = () => (
    <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${gradient} bg-opacity-10 backdrop-blur-sm border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden group`}>
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-transparent group-hover:from-white group-hover:to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
      
      <header className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-yellow-300 transition-all duration-300 group-hover:scale-105">
          {title}
        </h3>
        <time className="text-sm opacity-60 group-hover:opacity-80 transition-opacity" dateTime={year.toString()}>{year}</time>
      </header>
      
      <p className="text-gray-300 mb-6 leading-relaxed relative z-10 group-hover:text-gray-200 transition-colors duration-300">
        {description}
      </p>
      
      <footer className="flex flex-wrap gap-2 relative z-10" role="list" aria-label="Technologies used">
        {tech.map((techItem, index) => (
          <span 
            key={techItem}
            className="px-3 py-1 bg-white bg-opacity-10 rounded-full text-sm text-gray-200 backdrop-blur-sm group-hover:bg-opacity-20 group-hover:text-white transition-all duration-300 hover:scale-110"
            role="listitem"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {techItem}
          </span>
        ))}
      </footer>
      
      {/* Animated corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-yellow-300 opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:border-l-[50px] group-hover:border-t-[50px]"></div>
    </div>
  );

  if (link) {
    return (
      <article className="project-card group cursor-pointer" role="article" aria-label={`Project: ${title}`}>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block h-full"
          aria-label={`View ${title} project on GitHub`}
        >
          <CardContent />
        </a>
      </article>
    );
  }

  return (
    <article className="project-card group cursor-pointer" role="article" aria-label={`Project: ${title}`}>
      <CardContent />
    </article>
  );
}