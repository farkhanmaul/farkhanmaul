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
        <div className="modal-content bg-gradient-to-br from-gray-900 via-black to-gray-800 backdrop-blur-xl border-2 border-yellow-400 border-opacity-40 rounded-2xl p-4 sm:p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-track-gray-900 scrollbar-thumb-yellow-400 hover:scrollbar-thumb-yellow-300 relative shadow-2xl shadow-yellow-500/20">
          {/* Close Button */}
          <div className="flex justify-end mb-3">
            <button
              onClick={onClose}
              className="flex p-2 rounded-full border-2 border-yellow-400 border-opacity-60 hover:border-yellow-300 hover:bg-yellow-400 hover:bg-opacity-20 transition-all duration-300 bg-gradient-to-br from-yellow-400/10 to-transparent hover:scale-110 hover:rotate-90 shadow-lg"
            >
              <FiX className="text-yellow-300 text-lg hover:text-white transition-colors duration-300" />
            </button>
          </div>

          {/* Content */}
          <div className="text-white pr-1">
            <div className="mb-6 sm:mb-8 text-center">
              <h2 className="font-bold text-2xl sm:text-3xl tracking-tight bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto mt-2 rounded-full"></div>
            </div>

            <div className="text-gray-200 text-sm leading-relaxed space-y-2.5">
              <p className="font-light text-xs sm:text-sm">
                Hey there! My full name is <strong className="text-yellow-300">Farkhan Maul</strong>. You can find me
                online with my username <strong className="text-yellow-300">farkhanmaul</strong>. I&apos;m a
                Software Developer with over 1 year of experience in back-end and front-end development, 
                specializing in API integration and enterprise system development.
              </p>

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <h3 className="text-xs sm:text-sm font-medium mb-1.5 text-yellow-400">Professional Experience</h3>
                  <div className="space-y-2">
                    <div>
                      <h4 className="font-normal text-white text-xs"><strong className="text-yellow-300">Junior Software Developer</strong> - BNI</h4>
                      <p className="text-xs text-gray-400 mb-0.5">Nov 2024 – May 2025</p>
                      <p className="text-xs font-light leading-relaxed">
                        Built 3 REST APIs using Spring Boot with Oracle and PostgreSQL databases, 
                        customized form functionalities using jQuery and JavaScript.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-normal text-white text-xs"><strong className="text-yellow-300">Software Developer Intern</strong> - EMTEK</h4>
                      <p className="text-xs text-gray-400 mb-0.5">Aug 2023 – Dec 2023</p>
                      <p className="text-xs font-light leading-relaxed">
                        Created 40+ REST API endpoints for internal HRIS using Node.js, Express.js, and MySQL.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-medium mb-1.5 text-yellow-400">Education & Certifications</h3>
                  <div className="space-y-1 text-xs">
                    <p className="font-light"><strong className="text-yellow-300">Bachelor of Computer Science</strong> - Universitas Ahmad Dahlan (GPA: 3.88/4.00)</p>
                    <p className="font-light"><strong className="text-yellow-300">Cloud Computing Cohort</strong> - Bangkit Academy</p>
                    <p className="font-light">26+ courses across Coursera, Dicoding, and Google Cloud</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-medium mb-1.5 text-yellow-400">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="font-normal text-gray-300 mb-0.5">Languages:</p>
                    <p className="font-light">JavaScript, Java, PHP</p>
                  </div>
                  <div>
                    <p className="font-normal text-gray-300 mb-0.5">Frameworks:</p>
                    <p className="font-light">Spring Boot, Express.js, React.js</p>
                  </div>
                  <div>
                    <p className="font-normal text-gray-300 mb-0.5">Databases:</p>
                    <p className="font-light">MySQL, PostgreSQL, Oracle</p>
                  </div>
                  <div>
                    <p className="font-normal text-gray-300 mb-0.5">Tools:</p>
                    <p className="font-light">Git, GCP, AWS, Jira</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs sm:text-sm font-medium mb-1.5 text-yellow-400">Let&apos;s Connect</h3>
                <div className="flex flex-wrap gap-2">
                  <a
                    className="inline-flex items-center gap-1 font-light border bg-gray-600 bg-opacity-20 hover:bg-opacity-30 border-yellow-400 transition-all duration-150 ease-in-out px-2 py-1 rounded-lg text-xs"
                    href="https://github.com/farkhanmaul"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Profile
                    <FiExternalLink size={12} />
                  </a>
                  <a
                    className="inline-flex items-center gap-1 font-light border bg-gray-600 bg-opacity-20 hover:bg-opacity-30 border-yellow-400 transition-all duration-150 ease-in-out px-2 py-1 rounded-lg text-xs"
                    href="https://www.linkedin.com/in/farkhanmaul/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                    <FiExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}