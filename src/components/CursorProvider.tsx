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
    if (isMobile) return;

    const cursor = new MouseFollower({
      container: document.body,
      speed: 0.3,
    });

    useCursor.setState({ instance: cursor });

    return () => {
      cursor.destroy();
    };
  }, []);

  return <>{children}</>;
}