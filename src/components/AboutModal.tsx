'use client';

import { useEffect, useRef } from 'react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Force focus on scrollable area
      if (scrollRef.current) {
        scrollRef.current.focus();
        scrollRef.current.scrollTop = 0; // Reset scroll position
      }
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle all scroll-related events
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!isOpen) return;
      
      // Only allow scrolling within the modal
      const target = e.target as HTMLElement;
      if (scrollRef.current && scrollRef.current.contains(target)) {
        return; // Allow scroll within modal
      }
      
      // Prevent page scroll
      e.preventDefault();
      e.stopPropagation();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isOpen) return;
      
      // Only allow scrolling within the modal
      const target = e.target as HTMLElement;
      if (scrollRef.current && scrollRef.current.contains(target)) {
        return; // Allow scroll within modal
      }
      
      // Prevent page scroll
      e.preventDefault();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown, { passive: false });
      document.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('wheel', handleWheel);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 40
        }}
      />

      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px'
        }}
        onClick={onClose}
      >
        <div 
          onClick={(e) => e.stopPropagation()}
          style={{
            width: '100%',
            maxWidth: '800px',
            height: '600px',
            backgroundColor: '#1e293b',
            borderRadius: '16px',
            border: '2px solid #22d3ee',
            position: 'relative'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '60px',
              padding: '16px',
              borderBottom: '1px solid #374151',
              backgroundColor: '#1e293b',
              borderRadius: '14px 14px 0 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <h2 style={{ color: '#22d3ee', fontSize: '24px', fontWeight: 'bold' }}>
              About Me
            </h2>
            <button
              onClick={onClose}
              style={{
                color: '#22d3ee',
                backgroundColor: 'transparent',
                border: '2px solid #22d3ee',
                borderRadius: '50%',
                padding: '8px',
                cursor: 'pointer'
              }}
            >
              ✕
            </button>
          </div>

          <div 
            ref={scrollRef}
            tabIndex={0}
            role="dialog"
            aria-label="About modal content"
            onWheel={(e) => {
              // Ensure wheel events are handled by this container
              e.stopPropagation();
            }}
            onTouchMove={(e) => {
              // Ensure touch scroll events are handled by this container
              e.stopPropagation();
            }}
            style={{
              position: 'absolute',
              top: '60px',
              left: 0,
              right: 0,
              bottom: 0,
              overflowY: 'scroll',
              overflowX: 'hidden',
              padding: '16px',
              color: 'white',
              outline: 'none', // Remove focus outline
              // Force hardware acceleration
              transform: 'translateZ(0)',
              WebkitOverflowScrolling: 'touch', // iOS smooth scrolling
              // Custom scrollbar
              scrollbarWidth: 'thin',
              scrollbarColor: '#22d3ee #374151'
            }}
          >
            <h3 style={{ marginBottom: '16px', color: '#22d3ee' }}>SCROLL TEST</h3>
            
            <div style={{ marginBottom: '16px', padding: '12px', backgroundColor: '#0f172a', border: '1px solid #22d3ee', borderRadius: '8px' }}>
              <p style={{ fontSize: '14px', marginBottom: '8px' }}>Debug Info:</p>
              <button
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTop += 200;
                  }
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#22d3ee',
                  color: 'black',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginRight: '8px'
                }}
              >
                Scroll Down (Programmatic)
              </button>
              <button
                onClick={() => {
                  if (scrollRef.current) {
                    scrollRef.current.scrollTo({ top: 1000, behavior: 'smooth' });
                  }
                }}
                style={{
                  padding: '8px 16px',
                  backgroundColor: '#22d3ee',
                  color: 'black',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Jump to Bottom
              </button>
            </div>
            
            <div style={{ height: '200px', backgroundColor: '#374151', marginBottom: '16px', padding: '16px', borderRadius: '8px' }}>
              <p>Content Block 1 - TOP</p>
            </div>
            
            <div style={{ height: '200px', backgroundColor: '#374151', marginBottom: '16px', padding: '16px', borderRadius: '8px' }}>
              <p>Content Block 2</p>
            </div>
            
            <div style={{ height: '200px', backgroundColor: '#374151', marginBottom: '16px', padding: '16px', borderRadius: '8px' }}>
              <p>Content Block 3</p>
            </div>
            
            <div style={{ height: '200px', backgroundColor: '#374151', marginBottom: '16px', padding: '16px', borderRadius: '8px' }}>
              <p>Content Block 4</p>
            </div>
            
            <div style={{ height: '200px', backgroundColor: '#374151', marginBottom: '16px', padding: '16px', borderRadius: '8px' }}>
              <p>Content Block 5 - BOTTOM - Jika kamu bisa lihat ini, scroll BEKERJA!</p>
            </div>
            
            <div style={{ height: '200px', backgroundColor: '#22d3ee', marginBottom: '16px', padding: '16px', borderRadius: '8px', color: 'black' }}>
              <p><strong>FINAL TEST - Jika area cyan ini terlihat, scroll 100% berfungsi!</strong></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}