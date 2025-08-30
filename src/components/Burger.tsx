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
  
  return (
    <button
      type="button"
      className={classNames(
        'burger h-10 w-10 flex flex-col justify-center items-center gap-[6px] cursor-pointer relative z-[1000]',
        'hover:scale-105 active:scale-95 transition-all duration-300',
        'bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-lg',
        'hover:bg-slate-700/80 hover:border-cyan-400/50',
        className,
      )}
      onClick={() => onClick?.(!opened)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={opened ? 'Close menu' : 'Open menu'}
    >
      {/* Top line */}
      <span
        className={classNames(
          'block w-5 h-[2px] bg-slate-300 transition-all duration-300 ease-out transform-gpu rounded-full',
          opened ? 'rotate-45 translate-y-[8px] bg-cyan-400' : 'rotate-0 translate-y-0',
          hovered && !opened && 'bg-cyan-300',
        )}
      />
      
      {/* Middle line - fades out when opened */}
      <span
        className={classNames(
          'block w-5 h-[2px] bg-slate-300 transition-all duration-300 ease-out transform-gpu rounded-full',
          opened ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100',
          hovered && !opened && 'bg-cyan-300',
        )}
      />
      
      {/* Bottom line */}
      <span
        className={classNames(
          'block w-5 h-[2px] bg-slate-300 transition-all duration-300 ease-out transform-gpu rounded-full',
          opened ? '-rotate-45 -translate-y-[8px] bg-cyan-400' : 'rotate-0 translate-y-0',
          hovered && !opened && 'bg-cyan-300',
        )}
      />
      
      {/* Subtle glow effect on hover */}
      <div 
        className={classNames(
          'absolute inset-0 rounded-lg transition-all duration-300 pointer-events-none',
          hovered ? 'bg-cyan-400/10 shadow-lg shadow-cyan-400/20' : 'opacity-0'
        )}
      />
    </button>
  );
}