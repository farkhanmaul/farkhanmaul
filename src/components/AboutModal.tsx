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
        <div className="modal-content bg-black bg-opacity-95 backdrop-blur-lg border border-yellow-500 border-opacity-30 rounded-2xl p-3 sm:p-4 max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-track-gray-800 scrollbar-thumb-yellow-500 hover:scrollbar-thumb-yellow-400 relative">
          {/* Close Button */}
          <div className="flex justify-end mb-2">
            <button
              onClick={onClose}
              className="flex p-1.5 rounded-full border border-yellow-500 border-opacity-50 hover:border-yellow-400 hover:bg-yellow-400 hover:bg-opacity-10 transition-all duration-300 bg-black bg-opacity-60"
            >
              <FiX className="text-yellow-300 text-base" />
            </button>
          </div>

          {/* Content */}
          <div className="text-white pr-1">
            <div className="mb-4 sm:mb-6">
              <h2 className="font-medium text-xl sm:text-2xl tracking-tight">
                About me
              </h2>
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