import { useEffect, useRef } from 'react';
import { magnetic } from '../lib/magnetic';

export const useMagnetic = (intensity = 0.3) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const cleanup = magnetic(element, intensity);

    return cleanup;
  }, [intensity]);

  return elementRef;
};