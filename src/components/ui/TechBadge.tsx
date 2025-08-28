import { 
  SiReact, 
  SiNodedotjs, 
  SiJavascript, 
  SiTypescript, 
  SiNextdotjs, 
  SiExpress, 
  SiMysql, 
  SiMongodb,
  SiJava,
  SiSpring,
  SiPostgresql,
  SiOracle,
  SiGooglecloud,
  SiGit,
  SiJira
} from 'react-icons/si';

interface TechBadgeProps {
  name: string;
  iconType: string;
  color?: string;
}

/**
 * Tech Badge Component dengan React Icons
 * Menampilkan tech stack dengan icon yang proper
 */
export default function TechBadge({ name, iconType, color = 'text-yellow-300' }: TechBadgeProps) {
  // Mapping icon berdasarkan iconType
  const getIcon = (type: string) => {
    const iconMap = {
      react: SiReact,
      nodejs: SiNodedotjs,
      javascript: SiJavascript,
      typescript: SiTypescript,
      nextjs: SiNextdotjs,
      express: SiExpress,
      mysql: SiMysql,
      mongodb: SiMongodb,
      java: SiJava,
      spring: SiSpring,
      postgresql: SiPostgresql,
      oracle: SiOracle,
      gcp: SiGooglecloud,
      git: SiGit,
      jira: SiJira,
    };
    
    const IconComponent = iconMap[type as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="text-lg" /> : null;
  };

  return (
    <span className="inline-flex items-center px-3 py-2 rounded-full text-sm font-normal bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 hover:border-gray-500 hover:bg-opacity-70 transition-all duration-300 group hover:scale-105">
      <span className="mr-2 text-yellow-300 group-hover:scale-110 transition-transform duration-300">
        {getIcon(iconType)}
      </span>
      <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
        {name}
      </span>
    </span>
  );
}