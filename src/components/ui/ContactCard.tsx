import { useRef } from 'react';
import { magnetic } from '@/lib/magnetic';

interface ContactCardProps {
  name: string;
  value: string;
  link: string;
  color: string;
  index: number;
}

export default function ContactCard({ name, value, link, color, index }: ContactCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);

  // Color mapping for professional theme
  const colorClasses = {
    sky: 'border-cyan-400/30 hover:border-cyan-300/60 bg-cyan-400/8 hover:bg-cyan-400/15',
    blue: 'border-blue-400/30 hover:border-blue-300/60 bg-blue-400/8 hover:bg-blue-400/15', 
    violet: 'border-purple-400/30 hover:border-purple-300/60 bg-purple-400/8 hover:bg-purple-400/15',
    green: 'border-emerald-400/30 hover:border-emerald-300/60 bg-emerald-400/8 hover:bg-emerald-400/15',
    slate: 'border-slate-400/30 hover:border-slate-300/60 bg-slate-400/8 hover:bg-slate-400/15'
  };

  const textColorClasses = {
    sky: 'text-cyan-300 group-hover:text-cyan-200',
    blue: 'text-blue-300 group-hover:text-blue-200',
    violet: 'text-purple-300 group-hover:text-purple-200', 
    green: 'text-emerald-300 group-hover:text-emerald-200',
    slate: 'text-slate-300 group-hover:text-slate-200'
  };

  const currentColor = color as keyof typeof colorClasses;

  return (
    <a
      ref={cardRef}
      href={link}
      target={link.startsWith('http') ? '_blank' : '_self'}
      rel={link.startsWith('http') ? 'noopener noreferrer' : ''}
      className={`contact-item group p-8 rounded-2xl backdrop-blur-md border shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl transform ${colorClasses[currentColor] || colorClasses.sky}`}
      onMouseEnter={() => {
        if (cardRef.current) {
          try {
            magnetic(cardRef.current, 0.2);
          } catch (error) {
            console.warn('Magnetic effect failed:', error);
          }
        }
      }}
      role="link"
      aria-label={`Contact via ${name}: ${value}`}
    >
      <h3 className={`text-xl font-semibold mb-3 group-hover:scale-105 transition-transform tracking-wide ${textColorClasses[currentColor] || textColorClasses.sky}`}>
        {name}
      </h3>
      <p className="text-slate-300 group-hover:text-white transition-colors text-sm font-light leading-relaxed">
        {value}
      </p>
    </a>
  );
}