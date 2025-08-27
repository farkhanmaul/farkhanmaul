'use client';

import { useEffect } from 'react';
import MouseFollower from 'mouse-follower';
import { isMobile } from 'react-device-detect';
import useCursor from '@/hooks/useCursor';

interface CursorProviderProps {
  children: React.ReactNode;
}

export default function CursorProvider({ children }: CursorProviderProps) {
  const { instance } = useCursor();

  useEffect(() => {
    if (isMobile || typeof window === 'undefined') return;

    let cursor: MouseFollower | null = null;

    const initCursor = () => {
      try {
        MouseFollower.registerGSAP(require('gsap'));
        
        cursor = new MouseFollower({
          container: document.body,
          speed: 0.3,
          ease: 'power2.out',
          skewing: 2,
          skewingText: 1,
        });

        useCursor.setState({ instance: cursor });
      } catch (error) {
        console.warn('Mouse follower initialization failed:', error);
        // Fallback: show default cursor
        document.body.style.cursor = 'auto';
        document.querySelectorAll('*').forEach(el => {
          (el as HTMLElement).style.cursor = 'auto';
        });
      }
    };

    const timer = setTimeout(initCursor, 500);

    return () => {
      clearTimeout(timer);
      if (cursor) {
        try {
          cursor.destroy();
        } catch (error) {
          console.warn('Mouse follower cleanup failed:', error);
        }
      }
    };
  }, []);

  return <>{children}</>;
}