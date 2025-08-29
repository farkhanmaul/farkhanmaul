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
      className={`contact-item group p-6 rounded-2xl bg-yellow-400 bg-opacity-10 backdrop-blur-sm border border-yellow-500 border-opacity-20 hover:border-yellow-400 hover:border-opacity-40 transition-all duration-300 hover:bg-opacity-20`}
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
      <h3 className={`text-xl font-semibold text-yellow-300 mb-2 group-hover:scale-105 transition-transform`}>
        {name}
      </h3>
      <p className="text-gray-300 group-hover:text-white transition-colors">
        {value}
      </p>
    </a>
  );
}