'use client';

import { useEffect, useRef } from 'react';

/**
 * Custom Cursor Component - simplified and optimized
 * Single cursor dot dengan smooth movement
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check if it's mobile or touch device
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    if (isMobile) return;

    const cursor = cursorRef.current;
    const trail = trailRef.current;
    if (!cursor || !trail) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      
      // Update cursor position immediately
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
      
      // Update trail with slight delay for smooth following effect
      requestAnimationFrame(() => {
        trail.style.left = `${x}px`;
        trail.style.top = `${y}px`;
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for interactive elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        cursor.classList.add('hover');
        trail.classList.add('hover');
      } else {
        cursor.classList.remove('hover');
        trail.classList.remove('hover');
      }
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div 
        ref={cursorRef}
        className="custom-cursor fixed pointer-events-none w-4 h-4 bg-white rounded-full mix-blend-mode-difference z-[9999] transition-transform duration-150"
        style={{ 
          transform: 'translate(-50%, -50%)',
          left: '0px',
          top: '0px'
        }}
      />
      
      {/* Trail cursor */}
      <div 
        ref={trailRef}
        className="custom-cursor-trail fixed pointer-events-none w-8 h-8 border border-white rounded-full mix-blend-mode-difference z-[9998] transition-all duration-300"
        style={{ 
          transform: 'translate(-50%, -50%)',
          left: '0px',
          top: '0px'
        }}
      />
    </>
  );
}