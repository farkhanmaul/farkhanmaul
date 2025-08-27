interface TechBadgeProps {
  name: string;
  icon?: string;
  color?: string;
}

export default function TechBadge({ name, icon, color = 'text-yellow-300' }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-900 bg-opacity-50 backdrop-blur-sm border border-gray-700 hover:border-gray-600 hover:bg-opacity-70 transition-all duration-300 group hover:scale-105">
      {icon && (
        <span className="mr-2 text-base group-hover:scale-110 transition-transform duration-300">
          {icon}
        </span>
      )}
      <span className={`${color} group-hover:text-white transition-colors duration-300`}>
        {name}
      </span>
    </span>
  );
}