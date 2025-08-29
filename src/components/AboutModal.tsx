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

    // GSAP animation untuk modal
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
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={classNames(
          'fixed inset-0 bg-black transition-opacity duration-300 z-50',
          isOpen
            ? 'pointer-events-auto opacity-60'
            : 'pointer-events-none opacity-0',
        )}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none opacity-0"
      >
        <div className="modal-content bg-gradient-to-br from-gray-900 via-black to-gray-800 backdrop-blur-xl border-2 border-yellow-400 border-opacity-40 rounded-2xl p-3 sm:p-4 max-w-4xl w-full h-[85vh] overflow-hidden relative shadow-2xl shadow-yellow-500/20 flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end mb-2 shrink-0">
            <button
              onClick={onClose}
              className="flex p-1.5 rounded-full border-2 border-yellow-400 border-opacity-60 hover:border-yellow-300 hover:bg-yellow-400 hover:bg-opacity-20 transition-all duration-300 bg-gradient-to-br from-yellow-400/10 to-transparent hover:scale-110 hover:rotate-90 shadow-lg"
            >
              <FiX className="text-yellow-300 text-base hover:text-white transition-colors duration-300" />
            </button>
          </div>

          {/* Content */}
          <div className="text-white flex-1 flex flex-col overflow-hidden">
            <div className="mb-3 text-center shrink-0">
              <h2 className="font-bold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto mt-1 rounded-full"></div>
            </div>

            <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 text-gray-200 text-xs leading-relaxed overflow-hidden">
              {/* Left Column */}
              <div className="space-y-3">
                <div>
                  <p className="font-light mb-2">
                    Hey! I&apos;m <strong className="text-yellow-300">Farkhan Maul</strong> (farkhanmaul), a
                    Software Developer with 1+ years experience in full-stack development.
                  </p>
                </div>

                <div>
                  <h3 className="text-xs font-medium mb-2 text-yellow-400">Experience</h3>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-medium text-white text-xs"><strong className="text-yellow-300">Jr. Developer</strong> @ BNI</h4>
                      <p className="text-xs text-gray-400">Nov 2024 – Present</p>
                      <p className="text-xs font-light">3 REST APIs, Spring Boot, Oracle/PostgreSQL</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-xs"><strong className="text-yellow-300">Developer Intern</strong> @ EMTEK</h4>
                      <p className="text-xs text-gray-400">Aug 2023 – Dec 2023</p>
                      <p className="text-xs font-light">40+ API endpoints, Node.js, MySQL</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Middle Column */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xs font-medium mb-2 text-yellow-400">Education</h3>
                  <div className="space-y-1">
                    <p className="text-xs font-light"><strong className="text-yellow-300">Computer Science</strong> - Ahmad Dahlan University</p>
                    <p className="text-xs text-gray-400">GPA: 3.88/4.00</p>
                    <p className="text-xs font-light"><strong className="text-yellow-300">Cloud Computing</strong> - Bangkit Academy</p>
                    <p className="text-xs text-gray-400">26+ certifications</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-medium mb-2 text-yellow-400">Skills</h3>
                  <div className="grid grid-cols-2 gap-1 text-xs">
                    <div>
                      <p className="font-medium text-gray-300">Frontend:</p>
                      <p className="font-light text-xs">React, JavaScript, HTML/CSS</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-300">Backend:</p>
                      <p className="font-light text-xs">Java, Node.js, Spring Boot</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-300">Database:</p>
                      <p className="font-light text-xs">MySQL, PostgreSQL, Oracle</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-300">Tools:</p>
                      <p className="font-light text-xs">Git, GCP, AWS, Jira</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-xs font-medium mb-2 text-yellow-400">Achievements</h3>
                  <div className="space-y-1 text-xs">
                    <p className="font-light">🚀 1+ years professional development</p>
                    <p className="font-light">⚡ 40+ REST APIs built</p>
                    <p className="font-light">📚 26+ technical certifications</p>
                    <p className="font-light">🎯 3.88 GPA in Computer Science</p>
                    <p className="font-light">☁️ Cloud Computing specialist</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-medium mb-2 text-yellow-400">Connect</h3>
                  <div className="flex flex-col gap-1">
                    <a
                      className="inline-flex items-center gap-1 font-light border bg-gray-600 bg-opacity-20 hover:bg-opacity-30 border-yellow-400 transition-all duration-150 ease-in-out px-2 py-1 rounded text-xs"
                      href="https://github.com/farkhanmaul"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub <FiExternalLink size={10} />
                    </a>
                    <a
                      className="inline-flex items-center gap-1 font-light border bg-gray-600 bg-opacity-20 hover:bg-opacity-30 border-yellow-400 transition-all duration-150 ease-in-out px-2 py-1 rounded text-xs"
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
          </div>
        </div>
      </div>
    </>
  );
}