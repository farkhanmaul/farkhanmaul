'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import classNames from 'classnames';
import { FiX, FiExternalLink } from 'react-icons/fi';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * About Modal Component - berdasarkan referensi website about page
 * Modal popup dengan informasi detail tentang developer
 */
export default function AboutModal({ isOpen, onClose }: AboutModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;

    // Prevent body scroll when modal is open, but allow modal content to scroll
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const tl = gsap.timeline();
    
    tl.to('.modal-content', {
      duration: 0.5,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 50,
      ease: 'power2.out',
    })
    .to(modal, {
      duration: 0.3,
      opacity: isOpen ? 1 : 0,
      pointerEvents: isOpen ? 'auto' : 'none',
    }, 0);

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={classNames(
          'fixed inset-0 bg-black transition-opacity duration-300 z-40',
          isOpen
            ? 'pointer-events-auto opacity-60'
            : 'pointer-events-none opacity-0',
        )}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={classNames(
          'fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300',
          isOpen 
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        )}
        onClick={onClose}
      >
        <div 
          className="modal-content bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-2 border-cyan-400 border-opacity-40 rounded-2xl max-w-4xl w-full shadow-2xl shadow-cyan-500/20"
          onClick={(e) => e.stopPropagation()}
          style={{ 
            height: '85vh',
            position: 'relative'
          }}
        >
          {/* Fixed Header */}
          <div 
            className="absolute top-0 left-0 right-0 p-4 border-b border-slate-700/30 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-t-2xl"
            style={{ height: '80px' }}
          >
            <div className="flex justify-between items-start h-full">
              <div className="flex-1 text-center">
                <h2 className="font-bold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-300 mx-auto mt-1 rounded-full"></div>
              </div>
              <button
                onClick={onClose}
                className="flex p-1.5 rounded-full border-2 border-cyan-400 border-opacity-60 hover:border-cyan-300 hover:bg-cyan-400 hover:bg-opacity-20 transition-all duration-300 bg-gradient-to-br from-cyan-400/10 to-transparent hover:scale-110 hover:rotate-90 shadow-lg"
              >
                <FiX className="text-cyan-300 text-base hover:text-white transition-colors duration-300" />
              </button>
            </div>
          </div>

          {/* Scrollable Content - Position Absolute with calculated height */}
          <div 
            className="absolute left-0 right-0 bottom-0 p-4 custom-scrollbar"
            style={{
              top: '80px',
              overflowY: 'scroll',
              height: 'calc(100% - 80px)',
              scrollbarWidth: 'thin',
              scrollbarColor: '#22d3ee #1e293b'
            }}
          >
            <div className="text-white space-y-4">
              {/* Intro Section */}
              <div className="bg-slate-800/30 p-4 rounded-lg border border-cyan-400/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-light mb-3 text-sm">
                      Hey! I&apos;m <strong className="text-cyan-300">Farkhan Maul</strong> (farkhanmaul), a
                      Software Developer with 1+ years experience in full-stack development.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2 text-cyan-400">Connect</h3>
                    <div className="flex flex-wrap gap-2">
                      <a
                        className="inline-flex items-center gap-1 font-light border bg-slate-600/20 hover:bg-slate-600/30 border-cyan-400 transition-all duration-150 ease-in-out px-2 py-1 rounded text-xs backdrop-blur-sm"
                        href="https://github.com/farkhanmaul"
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub <FiExternalLink size={10} />
                      </a>
                      <a
                        className="inline-flex items-center gap-1 font-light border bg-slate-600/20 hover:bg-slate-600/30 border-cyan-400 transition-all duration-150 ease-in-out px-2 py-1 rounded text-xs backdrop-blur-sm"
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
              <div className="bg-slate-800/30 p-4 rounded-lg border border-cyan-400/20">
                <h3 className="text-lg font-semibold mb-3 text-cyan-300 flex items-center gap-2">
                  💼 Professional Experience
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/40 p-3 rounded border border-slate-600/30 hover:border-cyan-400/50 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer group relative">
                    <h4 className="font-semibold text-white text-sm mb-1">Jr. Software Developer</h4>
                    <p className="text-sm text-yellow-300 font-medium">PT. Bank Negara Indonesia</p>
                    <p className="text-xs text-gray-400 mb-2">Nov 2024 – Present</p>
                    <p className="text-xs font-light text-gray-300">Developed 3+ REST APIs using Spring Boot with Oracle/PostgreSQL databases</p>
                    
                    {/* Hover Details */}
                    <div className="absolute left-0 top-full mt-2 w-60 bg-slate-900/95 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50 shadow-xl">
                      <h5 className="text-xs font-semibold text-cyan-300 mb-2">Key Focus:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Banking REST APIs</li>
                        <li>• Authentication systems</li>
                        <li>• Database optimization</li>
                      </ul>
                      <p className="text-xs text-cyan-400 mt-2 font-medium">Spring Boot • Oracle • PostgreSQL</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/40 p-3 rounded border border-slate-600/30 hover:border-cyan-400/50 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer group relative">
                    <h4 className="font-semibold text-white text-sm mb-1">Software Developer Intern</h4>
                    <p className="text-sm text-yellow-300 font-medium">PT. Elang Mahkota Teknologi</p>
                    <p className="text-xs text-gray-400 mb-2">Aug 2023 – Dec 2023</p>
                    <p className="text-xs font-light text-gray-300">Built 40+ API endpoints using Node.js and MySQL</p>
                    
                    {/* Hover Details */}
                    <div className="absolute left-0 top-full mt-2 w-60 bg-slate-900/95 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50 shadow-xl">
                      <h5 className="text-xs font-semibold text-cyan-300 mb-2">Key Focus:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• HRIS REST APIs (40+)</li>
                        <li>• User authentication</li>
                        <li>• Database design</li>
                      </ul>
                      <p className="text-xs text-cyan-400 mt-2 font-medium">Node.js • Express.js • MySQL</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-slate-800/30 p-4 rounded-lg border border-yellow-400/20">
                <h3 className="text-lg font-semibold mb-3 text-yellow-300 flex items-center gap-2">
                  🎓 Education Background
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/40 p-3 rounded border border-slate-600/30 hover:border-yellow-400/50 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer group relative">
                    <h4 className="font-semibold text-white text-sm mb-1">Bachelor of Computer Science</h4>
                    <p className="text-sm text-yellow-300 font-medium">Universitas Ahmad Dahlan</p>
                    <p className="text-xs text-gray-400 mb-2">2021 – 2025</p>
                    <p className="text-xs font-light text-gray-300">Current GPA: 3.88/4.00 - Excellent Academic Performance</p>
                    
                    {/* Hover Details */}
                    <div className="absolute left-0 top-full mt-2 w-60 bg-slate-900/95 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50 shadow-xl">
                      <h5 className="text-xs font-semibold text-yellow-300 mb-2">Academic Focus:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• GPA 3.88/4.00</li>
                        <li>• Lab Assistant</li>
                        <li>• Full-stack projects</li>
                      </ul>
                      <p className="text-xs text-yellow-400 mt-2 font-medium">Software Engineering • Algorithms • Database</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/40 p-3 rounded border border-slate-600/30 hover:border-yellow-400/50 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer group relative">
                    <h4 className="font-semibold text-white text-sm mb-1">Cloud Computing Cohort</h4>
                    <p className="text-sm text-yellow-300 font-medium">Bangkit Academy</p>
                    <p className="text-xs text-gray-400 mb-2">by Google, Gojek & Traveloka - 2023</p>
                    <p className="text-xs font-light text-gray-300">Earned 26+ technical certifications in cloud computing</p>
                    
                    {/* Hover Details */}
                    <div className="absolute left-0 top-full mt-2 w-60 bg-slate-900/95 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50 shadow-xl">
                      <h5 className="text-xs font-semibold text-yellow-300 mb-2">Program Focus:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• 26+ Certifications</li>
                        <li>• Capstone: Freshcan App</li>
                        <li>• Cloud deployment</li>
                      </ul>
                      <p className="text-xs text-yellow-400 mt-2 font-medium">Google Cloud • DevOps • Node.js</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills & Achievements Section */}
              <div className="bg-slate-800/30 p-4 rounded-lg border border-yellow-400/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-semibold mb-3 text-yellow-300">💻 Technical Skills</h3>
                    <div className="space-y-2 text-sm">
                      <p className="font-light"><span className="text-yellow-400 font-medium">Frontend:</span> React, JavaScript, HTML/CSS</p>
                      <p className="font-light"><span className="text-yellow-400 font-medium">Backend:</span> Java, Node.js, Spring Boot</p>
                      <p className="font-light"><span className="text-yellow-400 font-medium">Database:</span> MySQL, PostgreSQL, Oracle</p>
                      <p className="font-light"><span className="text-yellow-400 font-medium">Tools:</span> Git, GCP, AWS, Jira</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold mb-3 text-yellow-300">🏆 Key Achievements</h3>
                    <div className="space-y-1 text-sm">
                      <p className="font-light flex items-center gap-2">🚀 1+ years professional development</p>
                      <p className="font-light flex items-center gap-2">⚡ 40+ REST APIs built</p>
                      <p className="font-light flex items-center gap-2">📚 26+ technical certifications</p>
                      <p className="font-light flex items-center gap-2">🎯 3.88 GPA in Computer Science</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Test Content for Scroll - Remove after testing */}
              <div className="bg-slate-800/30 p-4 rounded-lg border border-yellow-400/20">
                <h3 className="text-lg font-semibold mb-3 text-yellow-300">🧪 Test Content (untuk testing scroll)</h3>
                <div className="space-y-4">
                  <p className="text-gray-300">Ini adalah konten test untuk memastikan modal bisa di-scroll.</p>
                  <div className="h-32 bg-slate-700/30 rounded p-4">
                    <p className="text-gray-400">Content block 1</p>
                  </div>
                  <div className="h-32 bg-slate-700/30 rounded p-4">
                    <p className="text-gray-400">Content block 2</p>
                  </div>
                  <div className="h-32 bg-slate-700/30 rounded p-4">
                    <p className="text-gray-400">Content block 3</p>
                  </div>
                  <div className="h-32 bg-slate-700/30 rounded p-4">
                    <p className="text-gray-400">Content block 4 - Ini harus terlihat jika scroll bekerja</p>
                  </div>
                  <div className="h-32 bg-slate-700/30 rounded p-4">
                    <p className="text-gray-400">Content block 5 - Bottom content untuk test</p>
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