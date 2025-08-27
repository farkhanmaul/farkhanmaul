'use client';

import { useEffect, useRef } from 'react';

/**
 * Custom Cursor Component dengan trail effect
 * Berdasarkan referensi portfolio dengan multiple trailing dots
 */
export default function CustomCursor() {
  const trailLength = 20; // Jumlah trailing circles
  const trailRef = useRef<Array<{ x: number; y: number }>>([]);
  const intervalRef = useRef<NodeJS.Timeout>();
  const previousPosition = useRef({ x: 0, y: 0 });

  const updateTrail = () => {
    // Shift semua posisi trail
    for (let i = trailLength - 1; i > 0; i--) {
      trailRef.current[i] = {
        x: trailRef.current[i - 1]?.x || 0,
        y: trailRef.current[i - 1]?.y || 0,
      };
    }

    // Update posisi pertama dengan posisi mouse terbaru
    trailRef.current[0] = {
      x: previousPosition.current.x,
      y: previousPosition.current.y,
    };

    // Update DOM elements
    for (let i = 0; i < trailLength; i++) {
      const trailDot = document.getElementById(`trail-dot-${i}`);
      if (trailDot && trailRef.current[i]) {
        trailDot.style.left = `${trailRef.current[i].x}px`;
        trailDot.style.top = `${trailRef.current[i].y}px`;
      }
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check if it's mobile or touch device
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    if (isMobile) return;

    // Initialize trail array
    trailRef.current = new Array(trailLength).fill({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent) => {
      previousPosition.current = { x: e.clientX, y: e.clientY };
    };

    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    intervalRef.current = setInterval(updateTrail, 16); // Update setiap 16ms (~60fps)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="cursor-container">
      {Array.from({ length: trailLength }).map((_, index) => {
        const size = Math.max(4, 16 - index * 0.6); // Ukuran mengecil dari 16px ke 4px
        const opacity = Math.max(0.1, 1 - index * 0.04); // Opacity mengecil
        
        return (
          <div
            id={`trail-dot-${index}`}
            key={index}
            className="fixed pointer-events-none rounded-full bg-white mix-blend-mode-difference"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: '0px',
              top: '0px',
              transform: 'translate(-50%, -50%)',
              opacity: opacity,
              zIndex: 9999 - index,
              transition: index === 0 ? 'none' : 'left 0.1s ease, top 0.1s ease',
            }}
          />
        );
      })}
    </div>
  );
}