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
 * Animated hamburger menu button dengan transformasi ke X
 */
export default function Burger({ opened, className, onClick }: BurgerProps) {
  const [hovered, setHovered] = useState(false);
  
  const lineClassName =
    'block w-6 h-[3px] bg-white transition-all duration-500';

  return (
    <section
      className={classNames(
        'burger h-8 w-10 flex flex-col justify-center gap-[7px] cursor-pointer relative z-[1000]',
        className,
      )}
      onClick={() => onClick?.(!opened)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className={classNames(
          lineClassName,
          opened && 'rotate-45 translate-y-[3px] translate-x-2',
          hovered && 'bg-yellow-300',
        )}
      />
      <span
        className={classNames(
          lineClassName,
          !opened && 'ml-3',
          opened && '-rotate-45 translate-y-[-7.5px] translate-x-2',
          hovered && 'bg-yellow-300',
        )}
      />
    </section>
  );
}