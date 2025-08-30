'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

/**
 * Custom Cursor Component with stroke/line trace effects
 * Creates flowing line trails that follow cursor movement
 */
export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailPoints = useRef<{x: number, y: number, life: number}[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Check if it's mobile or touch device
    const isMobile = window.innerWidth < 768 || 'ontouchstart' in window;
    if (isMobile) return;

    const cursor = cursorRef.current;
    const canvas = canvasRef.current;
    if (!cursor || !canvas) return;

    // Setup canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let lastTrailUpdate = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Update main cursor immediately
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      // Throttle trail updates for better performance
      const now = Date.now();
      if (now - lastTrailUpdate > 16) { // ~60fps limit
        // Add new trail point
        trailPoints.current.push({
          x: e.clientX,
          y: e.clientY,
          life: 1.0
        });

        // Limit trail length for performance
        if (trailPoints.current.length > 30) {
          trailPoints.current.shift();
        }
        
        lastTrailUpdate = now;
      }
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
        gsap.to(cursor, { scale: 1.5, duration: 0.2 });
      } else {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      }
    };

    // Animation loop for trail effect - optimized for performance
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw trail
      if (trailPoints.current.length > 1) {
        // Use simple line drawing for better performance
        ctx.strokeStyle = 'rgba(250, 204, 21, 0.4)';
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = 0.8;

        ctx.beginPath();
        for (let i = 0; i < trailPoints.current.length - 1; i++) {
          const point = trailPoints.current[i];
          const nextPoint = trailPoints.current[i + 1];
          
          // Simplified fade out
          point.life -= 0.03;
          
          if (point.life > 0) {
            if (i === 0) {
              ctx.moveTo(point.x, point.y);
            } else {
              ctx.lineTo(point.x, point.y);
            }
          }
        }
        
        ctx.stroke();
        ctx.globalAlpha = 1;
        
        // Remove dead trail points less frequently for performance
        if (Math.random() < 0.1) {
          trailPoints.current = trailPoints.current.filter(point => point.life > 0);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Start animation
    animate();

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);


  return (
    <>
      {/* Canvas for stroke trail effect */}
      <canvas
        ref={canvasRef}
        className="custom-cursor-canvas fixed pointer-events-none top-0 left-0 z-[9998]"
        style={{ 
          width: '100vw',
          height: '100vh'
        }}
      />
      
      {/* Main cursor dot */}
      <div 
        ref={cursorRef}
        className={`custom-cursor fixed pointer-events-none rounded-full z-[9999] transition-all duration-200 ${
          isHovered 
            ? 'w-4 h-4 bg-blue-400 shadow-lg shadow-blue-400/50' 
            : 'w-3 h-3 bg-yellow-400 shadow-md shadow-yellow-400/30'
        }`}
        style={{ 
          transform: 'translate(-50%, -50%)',
          left: '0px',
          top: '0px'
        }}
      />
    </>
  );
}