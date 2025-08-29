'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * Enhanced Custom Cursor Component with smooth following effect
 * Multiple cursor elements with smooth animations
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const outerCursorRef = useRef<HTMLDivElement>(null);
  const trailDotsRef = useRef<HTMLDivElement[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check if it's mobile or touch device
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    if (isMobile) return;

    const cursor = cursorRef.current;
    const outerCursor = outerCursorRef.current;
    if (!cursor || !outerCursor) return;

    // Mouse tracking with smooth interpolation
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Update main cursor immediately
      cursor.style.left = `${targetX}px`;
      cursor.style.top = `${targetY}px`;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for interactive elements
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovered(isInteractive);
      
      if (isInteractive) {
        gsap.to(cursor, { scale: 0.5, duration: 0.2 });
        gsap.to(outerCursor, { scale: 1.5, duration: 0.3 });
      } else {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
        gsap.to(outerCursor, { scale: 1, duration: 0.3 });
      }
    };

    // Smooth following animation for outer cursor
    const animateOuterCursor = () => {
      // Smooth interpolation
      const ease = 0.15;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      
      outerCursor.style.left = `${currentX}px`;
      outerCursor.style.top = `${currentY}px`;
      
      requestAnimationFrame(animateOuterCursor);
    };

    // Start animations
    animateOuterCursor();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
    };
  }, []);

  // Generate trail dots
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    if (isMobile) return;

    // Create trailing effect with multiple dots
    const trailCount = 8;
    const trailPositions: { x: number; y: number }[] = Array(trailCount).fill({ x: 0, y: 0 });
    
    let animationId: number;
    
    const animateTrail = () => {
      // Update trail positions with delay
      for (let i = trailCount - 1; i > 0; i--) {
        trailPositions[i] = { 
          x: trailPositions[i - 1].x, 
          y: trailPositions[i - 1].y 
        };
      }
      trailPositions[0] = mousePos;
      
      // Update DOM elements
      trailDotsRef.current.forEach((dot, index) => {
        if (dot && trailPositions[index]) {
          const scale = (trailCount - index) / trailCount;
          const opacity = scale * 0.6;
          
          gsap.set(dot, {
            x: trailPositions[index].x,
            y: trailPositions[index].y,
            scale: scale * 0.3,
            opacity: opacity
          });
        }
      });
      
      animationId = requestAnimationFrame(animateTrail);
    };
    
    animateTrail();
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [mousePos]);

  return (
    <>
      {/* Main cursor dot */}
      <div 
        ref={cursorRef}
        className="custom-cursor fixed pointer-events-none w-2 h-2 bg-yellow-400 rounded-full z-[9999] transition-all duration-200"
        style={{ 
          transform: 'translate(-50%, -50%)',
          left: '0px',
          top: '0px',
          filter: 'blur(0px)'
        }}
      />
      
      {/* Outer cursor ring */}
      <div 
        ref={outerCursorRef}
        className={`custom-cursor-outer fixed pointer-events-none w-8 h-8 border rounded-full z-[9998] transition-all duration-300 ${
          isHovered ? 'border-blue-400 border-2' : 'border-yellow-400/50 border-1'
        }`}
        style={{ 
          transform: 'translate(-50%, -50%)',
          left: '0px',
          top: '0px'
        }}
      />
      
      {/* Trail dots */}
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) trailDotsRef.current[index] = el;
          }}
          className="custom-cursor-trail fixed pointer-events-none w-1 h-1 bg-yellow-400/40 rounded-full z-[9997]"
          style={{ 
            transform: 'translate(-50%, -50%)',
            left: '0px',
            top: '0px'
          }}
        />
      ))}
    </>
  );
}