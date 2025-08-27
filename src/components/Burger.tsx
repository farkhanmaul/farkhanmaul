'use client';

import classNames from 'classnames';
import { useState } from 'react';

interface BurgerProps {
  opened?: boolean;
  className?: string;
  onClick?: (opened: boolean) => void;
}

/**
 * Burger Menu Button - berdasarkan referensi website
 * Animated hamburger dengan hover effects dan smooth transformations
 */
export default function Burger({ opened, className, onClick }: BurgerProps) {
  const [hovered, setHovered] = useState(false);
  
  const lineClassName =
    'block w-6 h-[3px] bg-white transition-all duration-500 ease-out';

  return (
    <section
      className={classNames(
        'burger h-8 w-10 flex flex-col justify-center gap-[7px] cursor-pointer relative z-[1000] p-2 -m-2', // Added padding untuk area klik lebih besar
        'hover:scale-110 active:scale-95 transition-transform duration-300',
        className,
      )}
      onClick={() => onClick?.(!opened)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top line */}
      <span
        className={classNames(
          lineClassName,
          opened && 'rotate-45 translate-y-[10px] translate-x-0',
          hovered && !opened && 'translate-x-1 bg-yellow-300',
          hovered && opened && 'bg-yellow-300',
        )}
      />
      
      {/* Middle line - fades out when opened */}
      <span
        className={classNames(
          lineClassName,
          opened && 'opacity-0 scale-0',
          !opened && 'ml-3',
          hovered && 'bg-yellow-300 ml-2',
        )}
      />
      
      {/* Bottom line */}
      <span
        className={classNames(
          lineClassName,
          opened && '-rotate-45 translate-y-[-10px] translate-x-0',
          hovered && !opened && 'translate-x-2 bg-yellow-300',
          hovered && opened && 'bg-yellow-300',
        )}
      />
      
      {/* Subtle glow effect on hover */}
      <div 
        className={classNames(
          'absolute inset-0 rounded-full transition-all duration-300',
          hovered ? 'bg-yellow-300 opacity-10 scale-150' : 'opacity-0 scale-100'
        )}
      />
    </section>
  );
}