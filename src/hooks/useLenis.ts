import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function useLenis(
  callback?: ({ instance }: { instance: Lenis }) => void
): Lenis | null {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    if (callback) {
      callback({ instance: lenis });
    }

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [callback]);

  return lenisRef.current;
}