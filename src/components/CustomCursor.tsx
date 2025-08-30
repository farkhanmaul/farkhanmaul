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

    // Animation loop for aesthetic trail effect
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw trail
      if (trailPoints.current.length > 1) {
        // Create gradient trail effect
        const gradient = ctx.createLinearGradient(
          trailPoints.current[0]?.x || 0, 
          trailPoints.current[0]?.y || 0,
          trailPoints.current[trailPoints.current.length - 1]?.x || 0,
          trailPoints.current[trailPoints.current.length - 1]?.y || 0
        );
        gradient.addColorStop(0, 'rgba(34, 211, 238, 0.8)'); // cyan-400
        gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.6)'); // blue-400  
        gradient.addColorStop(1, 'rgba(147, 197, 253, 0.2)'); // blue-300

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Draw multiple passes for glow effect
        for (let pass = 0; pass < 2; pass++) {
          ctx.beginPath();
          ctx.lineWidth = pass === 0 ? 1 : 3;
          ctx.globalAlpha = pass === 0 ? 1 : 0.6;
          
          for (let i = 0; i < trailPoints.current.length - 1; i++) {
            const point = trailPoints.current[i];
            const nextPoint = trailPoints.current[i + 1];
            
            if (pass === 1) point.life -= 0.025; // Slower fade
            
            if (point.life > 0) {
              const opacity = Math.pow(point.life, 1.5); // Smoother fade curve
              
              if (i === 0) {
                ctx.moveTo(point.x, point.y);
              } else {
                // Smooth curves for more aesthetic lines
                const prevPoint = trailPoints.current[i - 1];
                const controlX = (prevPoint.x + point.x) / 2;
                const controlY = (prevPoint.y + point.y) / 2;
                ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, controlX, controlY);
              }
            }
          }
          
          ctx.stroke();
        }
        
        ctx.globalAlpha = 1;
        
        // Clean up dead points
        if (Math.random() < 0.08) {
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
            ? 'w-4 h-4 bg-cyan-400 shadow-lg shadow-cyan-400/50 ring-2 ring-cyan-300/30' 
            : 'w-3 h-3 bg-cyan-300 shadow-md shadow-cyan-300/40'
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