interface ProjectCardProps {
  title: string;
  description: string;
  tech: readonly string[];
  year: number;
  gradient: string;
  link?: string;
  thumbnail?: string;
}

export default function ProjectCard({ title, description, tech, year, gradient, link, thumbnail }: ProjectCardProps) {
  const CardContent = () => (
    <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/40 to-gray-900/60 backdrop-blur-sm border border-slate-600/30 hover:border-slate-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/20 overflow-hidden group`}>
      {/* Thumbnail Preview on Hover */}
      {thumbnail && (
        <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center rounded-2xl">
          <div className="w-full h-full p-4 flex flex-col items-center justify-center">
            <div className="w-full max-w-xs h-48 bg-gray-800 rounded-lg mb-4 flex items-center justify-center border border-yellow-400 border-opacity-30">
              <img 
                src={thumbnail} 
                alt={`${title} preview`}
                className="w-full h-full object-cover rounded-lg opacity-90"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
                }}
              />
              <div className="hidden text-yellow-300 text-sm text-center">
                <div className="text-4xl mb-2">🖥️</div>
                <p>Preview Unavailable</p>
              </div>
            </div>
            <p className="text-yellow-300 text-xs text-center">Website Preview</p>
          </div>
        </div>
      )}
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-transparent group-hover:from-white group-hover:to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
      
      <header className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-all duration-300 group-hover:scale-105">
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
            className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 backdrop-blur-sm group-hover:bg-blue-500/30 group-hover:text-blue-200 transition-all duration-300 hover:scale-110 border border-slate-500/40"
            role="listitem"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {techItem}
          </span>
        ))}
      </footer>
      
      {/* Animated corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-blue-400 opacity-0 group-hover:opacity-20 transition-all duration-500 group-hover:border-l-[50px] group-hover:border-t-[50px]"></div>
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