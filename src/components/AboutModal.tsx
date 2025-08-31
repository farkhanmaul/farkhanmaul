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
          className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-2 border-cyan-400 border-opacity-40 rounded-2xl max-w-4xl w-full shadow-2xl shadow-cyan-500/20 flex flex-col"
          style={{
            height: '85vh'
          }}
        >
          {/* Header */}
          <div className="flex justify-end p-3 sm:p-4 pb-0 flex-shrink-0">
            <button
              onClick={onClose}
              className="flex p-1.5 rounded-full border-2 border-cyan-400 border-opacity-60 hover:border-cyan-300 hover:bg-cyan-400 hover:bg-opacity-20 transition-all duration-300 bg-gradient-to-br from-cyan-400/10 to-transparent hover:scale-110 hover:rotate-90 shadow-lg"
            >
              <FiX className="text-cyan-300 text-base hover:text-white transition-colors duration-300" />
            </button>
          </div>

          {/* Title */}
          <div className="px-3 sm:px-4 pb-3 flex-shrink-0">
            <div className="text-center">
              <h2 className="font-bold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-300 mx-auto mt-1 rounded-full"></div>
            </div>
          </div>

          {/* Scrollable Content */}
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
            className="flex-1 overflow-y-scroll px-3 sm:px-4 pb-3 sm:pb-4 custom-scrollbar"
            style={{
              outline: 'none', // Remove focus outline
              // Force hardware acceleration
              transform: 'translateZ(0)',
              WebkitOverflowScrolling: 'touch', // iOS smooth scrolling
              // Custom scrollbar
              scrollbarWidth: 'thin',
              scrollbarColor: '#22d3ee #374151'
            }}
          >
            <div className="text-white space-y-4">
              {/* Intro Section */}
              <div className="bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-700/40 p-5 rounded-xl border border-cyan-400/30 backdrop-blur-sm shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-light mb-4 text-sm leading-relaxed text-slate-200">
                      Hey! I&apos;m <strong className="text-cyan-300 font-semibold">Farkhan Maul</strong> (farkhanmaul), a
                      Software Developer with 1+ years experience in full-stack development.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-3 text-cyan-400 tracking-wide">Connect</h3>
                    <div className="flex flex-wrap gap-2">
                      <a
                        className="inline-flex items-center gap-1.5 font-light border bg-slate-600/30 hover:bg-slate-600/40 border-cyan-400/60 hover:border-cyan-300 transition-all duration-200 ease-in-out px-3 py-1.5 rounded-lg text-xs backdrop-blur-sm hover:scale-105"
                        href="https://github.com/farkhanmaul"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub <FiExternalLink size={10} />
                      </a>
                      <a
                        className="inline-flex items-center gap-1.5 font-light border bg-slate-600/30 hover:bg-slate-600/40 border-cyan-400/60 hover:border-cyan-300 transition-all duration-200 ease-in-out px-3 py-1.5 rounded-lg text-xs backdrop-blur-sm hover:scale-105"
                        href="https://www.linkedin.com/in/farkhanmaul/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        LinkedIn <FiExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Section */}
              <div className="bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-700/40 p-5 rounded-xl border border-cyan-400/30 backdrop-blur-sm shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-cyan-300 flex items-center gap-2 tracking-wide">
                  💼 Professional Experience
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-4 rounded-lg border border-slate-600/40 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300 group">
                    <h4 className="font-semibold text-white text-sm mb-2 group-hover:text-cyan-300 transition-colors">Jr. Software Developer</h4>
                    <p className="text-sm text-cyan-300 font-medium mb-1">PT. Bank Negara Indonesia</p>
                    <p className="text-xs text-slate-400 mb-3">Nov 2024 – Present</p>
                    <p className="text-xs font-light text-slate-300 leading-relaxed">Developed 3+ REST APIs using Spring Boot with Oracle/PostgreSQL databases</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-4 rounded-lg border border-slate-600/40 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300 group">
                    <h4 className="font-semibold text-white text-sm mb-2 group-hover:text-cyan-300 transition-colors">Software Developer Intern</h4>
                    <p className="text-sm text-cyan-300 font-medium mb-1">PT. Elang Mahkota Teknologi</p>
                    <p className="text-xs text-slate-400 mb-3">Aug 2023 – Dec 2023</p>
                    <p className="text-xs font-light text-slate-300 leading-relaxed">Built 40+ API endpoints using Node.js and MySQL</p>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-700/40 p-5 rounded-xl border border-yellow-400/30 backdrop-blur-sm shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-yellow-300 flex items-center gap-2 tracking-wide">
                  🎓 Education Background
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-4 rounded-lg border border-slate-600/40 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 group">
                    <h4 className="font-semibold text-white text-sm mb-2 group-hover:text-yellow-300 transition-colors">Bachelor of Computer Science</h4>
                    <p className="text-sm text-yellow-300 font-medium mb-1">Universitas Ahmad Dahlan</p>
                    <p className="text-xs text-slate-400 mb-3">2021 – 2025</p>
                    <p className="text-xs font-light text-slate-300 leading-relaxed">Current GPA: 3.88/4.00 - Excellent Academic Performance</p>
                  </div>
                  
                  <div className="bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-4 rounded-lg border border-slate-600/40 backdrop-blur-sm hover:border-yellow-400/30 transition-all duration-300 group">
                    <h4 className="font-semibold text-white text-sm mb-2 group-hover:text-yellow-300 transition-colors">Cloud Computing Cohort</h4>
                    <p className="text-sm text-yellow-300 font-medium mb-1">Bangkit Academy</p>
                    <p className="text-xs text-slate-400 mb-3">by Google, Gojek & Traveloka - 2023</p>
                    <p className="text-xs font-light text-slate-300 leading-relaxed">Earned 26+ technical certifications in cloud computing</p>
                  </div>
                </div>
              </div>

              {/* Skills & Achievements Section */}
              <div className="bg-gradient-to-br from-slate-800/40 via-slate-800/30 to-slate-700/40 p-5 rounded-xl border border-yellow-400/30 backdrop-blur-sm shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-semibold mb-4 text-yellow-300 tracking-wide">💻 Technical Skills</h3>
                    <div className="space-y-3 text-sm">
                      <p className="font-light text-slate-200"><span className="text-yellow-400 font-semibold">Frontend:</span> React, JavaScript, HTML/CSS</p>
                      <p className="font-light text-slate-200"><span className="text-yellow-400 font-semibold">Backend:</span> Java, Node.js, Spring Boot</p>
                      <p className="font-light text-slate-200"><span className="text-yellow-400 font-semibold">Database:</span> MySQL, PostgreSQL, Oracle</p>
                      <p className="font-light text-slate-200"><span className="text-yellow-400 font-semibold">Tools:</span> Git, GCP, AWS, Jira</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold mb-4 text-yellow-300 tracking-wide">🏆 Key Achievements</h3>
                    <div className="space-y-2 text-sm">
                      <p className="font-light flex items-center gap-2 text-slate-200">🚀 1+ years professional development</p>
                      <p className="font-light flex items-center gap-2 text-slate-200">⚡ 40+ REST APIs built</p>
                      <p className="font-light flex items-center gap-2 text-slate-200">📚 26+ technical certifications</p>
                      <p className="font-light flex items-center gap-2 text-slate-200">🎯 3.88 GPA in Computer Science</p>
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