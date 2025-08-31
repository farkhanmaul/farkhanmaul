'use client';

import { useEffect, useRef } from 'react';
import { FiX, FiExternalLink } from 'react-icons/fi';

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
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FiX size={16} />
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
            <div style={{ color: 'white', lineHeight: '1.6' }}>
              {/* Intro Section */}
              <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.3)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(34, 211, 238, 0.2)', marginBottom: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                  <div>
                    <p style={{ fontSize: '14px', marginBottom: '12px' }}>
                      Hey! I'm <strong style={{ color: '#22d3ee' }}>Farkhan Maul</strong> (farkhanmaul), a
                      Software Developer with 1+ years experience in full-stack development.
                    </p>
                    <h3 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: '#22d3ee' }}>Connect</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      <a
                        href="https://github.com/farkhanmaul"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          padding: '4px 8px',
                          backgroundColor: 'rgba(100, 116, 139, 0.2)',
                          border: '1px solid #22d3ee',
                          borderRadius: '4px',
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '12px'
                        }}
                      >
                        GitHub <FiExternalLink size={10} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/farkhanmaul/"
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          padding: '4px 8px',
                          backgroundColor: 'rgba(100, 116, 139, 0.2)',
                          border: '1px solid #22d3ee',
                          borderRadius: '4px',
                          color: 'white',
                          textDecoration: 'none',
                          fontSize: '12px'
                        }}
                      >
                        LinkedIn <FiExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.3)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(34, 211, 238, 0.2)', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#22d3ee', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  💼 Professional Experience
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                  <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)', padding: '12px', borderRadius: '6px', border: '1px solid rgba(100, 116, 139, 0.3)', position: 'relative' }}>
                    <h4 style={{ fontWeight: '600', color: 'white', fontSize: '14px', marginBottom: '4px' }}>Jr. Software Developer</h4>
                    <p style={{ fontSize: '14px', color: '#fbbf24', fontWeight: '500' }}>PT. Bank Negara Indonesia</p>
                    <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '8px' }}>Nov 2024 – Present</p>
                    <p style={{ fontSize: '12px', color: '#d1d5db' }}>Developed 3+ REST APIs using Spring Boot with Oracle/PostgreSQL databases</p>
                  </div>
                  
                  <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)', padding: '12px', borderRadius: '6px', border: '1px solid rgba(100, 116, 139, 0.3)' }}>
                    <h4 style={{ fontWeight: '600', color: 'white', fontSize: '14px', marginBottom: '4px' }}>Software Developer Intern</h4>
                    <p style={{ fontSize: '14px', color: '#fbbf24', fontWeight: '500' }}>PT. Elang Mahkota Teknologi</p>
                    <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '8px' }}>Aug 2023 – Dec 2023</p>
                    <p style={{ fontSize: '12px', color: '#d1d5db' }}>Built 40+ API endpoints using Node.js and MySQL</p>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.3)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.2)', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  🎓 Education Background
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                  <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)', padding: '12px', borderRadius: '6px', border: '1px solid rgba(100, 116, 139, 0.3)' }}>
                    <h4 style={{ fontWeight: '600', color: 'white', fontSize: '14px', marginBottom: '4px' }}>Bachelor of Computer Science</h4>
                    <p style={{ fontSize: '14px', color: '#fbbf24', fontWeight: '500' }}>Universitas Ahmad Dahlan</p>
                    <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '8px' }}>2021 – 2025</p>
                    <p style={{ fontSize: '12px', color: '#d1d5db' }}>Current GPA: 3.88/4.00 - Excellent Academic Performance</p>
                  </div>
                  
                  <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.4)', padding: '12px', borderRadius: '6px', border: '1px solid rgba(100, 116, 139, 0.3)' }}>
                    <h4 style={{ fontWeight: '600', color: 'white', fontSize: '14px', marginBottom: '4px' }}>Cloud Computing Cohort</h4>
                    <p style={{ fontSize: '14px', color: '#fbbf24', fontWeight: '500' }}>Bangkit Academy</p>
                    <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '8px' }}>by Google, Gojek & Traveloka - 2023</p>
                    <p style={{ fontSize: '12px', color: '#d1d5db' }}>Earned 26+ technical certifications in cloud computing</p>
                  </div>
                </div>
              </div>

              {/* Skills & Achievements Section */}
              <div style={{ backgroundColor: 'rgba(30, 41, 59, 0.3)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.2)', marginBottom: '16px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#fbbf24' }}>💻 Technical Skills</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px' }}>
                      <p><span style={{ color: '#fbbf24', fontWeight: '500' }}>Frontend:</span> React, JavaScript, HTML/CSS</p>
                      <p><span style={{ color: '#fbbf24', fontWeight: '500' }}>Backend:</span> Java, Node.js, Spring Boot</p>
                      <p><span style={{ color: '#fbbf24', fontWeight: '500' }}>Database:</span> MySQL, PostgreSQL, Oracle</p>
                      <p><span style={{ color: '#fbbf24', fontWeight: '500' }}>Tools:</span> Git, GCP, AWS, Jira</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '12px', color: '#fbbf24' }}>🏆 Key Achievements</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '14px' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🚀 1+ years professional development</p>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>⚡ 40+ REST APIs built</p>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>📚 26+ technical certifications</p>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>🎯 3.88 GPA in Computer Science</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}