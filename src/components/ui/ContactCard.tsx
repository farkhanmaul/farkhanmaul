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

  return (
    <a
      ref={cardRef}
      href={link}
      target={link.startsWith('http') ? '_blank' : '_self'}
      rel={link.startsWith('http') ? 'noopener noreferrer' : ''}
      className={`contact-item group p-6 rounded-2xl bg-${color}-400 bg-opacity-10 backdrop-blur-sm border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300 hover:bg-opacity-20`}
      onMouseEnter={() => cardRef.current && magnetic(cardRef.current, 0.2)}
      role="link"
      aria-label={`Contact via ${name}: ${value}`}
    >
      <h3 className={`text-xl font-semibold text-${color}-300 mb-2 group-hover:scale-105 transition-transform`}>
        {name}
      </h3>
      <p className="text-gray-300 group-hover:text-white transition-colors">
        {value}
      </p>
    </a>
  );
}