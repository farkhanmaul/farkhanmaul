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
        cursor = new MouseFollower({
          container: document.body,
          speed: 0.3,
        });

        useCursor.setState({ instance: cursor });
      } catch (error) {
        console.warn('Mouse follower initialization failed:', error);
      }
    };

    const timer = setTimeout(initCursor, 100);

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