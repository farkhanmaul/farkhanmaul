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
        <div className="modal-content bg-black bg-opacity-95 backdrop-blur-lg border border-gray-600 rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl w-full max-h-[90vh] sm:max-h-[85vh] overflow-y-auto relative flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end mb-2">
            <button
              onClick={onClose}
              className="flex p-2 rounded-full border border-gray-600 hover:border-gray-400 hover:bg-gray-800 transition-all duration-300 bg-black bg-opacity-80"
            >
              <FiX className="text-lg sm:text-xl" />
            </button>
          </div>

          {/* Content */}
          <div className="text-white flex-1 overflow-y-auto">
            <div className="mb-4 sm:mb-6">
              <h2 className="font-medium text-xl sm:text-2xl tracking-tight">
                About me
              </h2>
            </div>

            <div className="text-gray-200 text-sm leading-relaxed space-y-3 sm:space-y-4">
              <p className="font-light">
                Hey there! My full name is **Farkhan Maul**. You can find me
                online with my username **farkhanmaul**. I&apos;m a
                Software Developer with over 1 year of experience in back-end and front-end development, 
                specializing in API integration and enterprise system development.
              </p>

              <div>
                <h3 className="text-sm font-medium mb-2 text-yellow-400">Professional Experience</h3>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-normal text-white text-sm">**Junior Software Developer** - PT. Bank Negara Indonesia (BNI)</h4>
                    <p className="text-xs text-gray-400 mb-1">Nov 2024 – May 2025 | Jakarta, ID</p>
                    <p className="text-xs font-light leading-relaxed">
                      Currently working in the Retail Enablers Digital Delivery Division, developing and maintaining 
                      the Retail Productive Banking system. Built 3 REST APIs using Spring Boot with Oracle and 
                      PostgreSQL databases, and customized form functionalities using jQuery and JavaScript.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-normal text-white text-sm">**Software Developer Intern** - PT. Elang Mahkota Teknologi (EMTEK)</h4>
                    <p className="text-xs text-gray-400 mb-1">Aug 2023 – Dec 2023 | Jakarta, ID</p>
                    <p className="text-xs font-light leading-relaxed">
                      Created 40+ REST API endpoints for internal HRIS using Node.js, Express.js, and MySQL. 
                      Developed features for employee attendance, room bookings, and leave management systems.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2 text-yellow-400">Education & Certifications</h3>
                <div className="space-y-1">
                  <p className="text-xs font-light">**Bachelor of Computer Science** - Universitas Ahmad Dahlan (GPA: 3.88/4.00)</p>
                  <p className="text-xs font-light">**Cloud Computing Cohort** - Bangkit Academy by Google, Gojek & Traveloka</p>
                  <p className="text-xs font-light">Completed 26+ courses across Coursera, Dicoding, and Google Cloud Skill Boost</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2 text-yellow-400">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <p className="font-normal text-gray-300 mb-1">Languages:</p>
                    <p className="font-light">JavaScript, Java, PHP, HTML</p>
                  </div>
                  <div>
                    <p className="font-normal text-gray-300 mb-1">Frameworks:</p>
                    <p className="font-light">Spring Boot, Express.js, React.js</p>
                  </div>
                  <div>
                    <p className="font-normal text-gray-300 mb-1">Databases:</p>
                    <p className="font-light">MySQL, PostgreSQL, Oracle</p>
                  </div>
                  <div>
                    <p className="font-normal text-gray-300 mb-1">Tools:</p>
                    <p className="font-light">Git, GCP, AWS, Jira, Linux</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-2 text-yellow-400">Let&apos;s Connect</h3>
                <div className="flex flex-wrap gap-2">
                  <a
                    className="inline-flex items-center gap-1 font-light border bg-gray-600 bg-opacity-20 hover:bg-opacity-30 border-yellow-400 transition-all duration-150 ease-in-out px-2 py-1 rounded-lg text-xs"
                    href="https://github.com/farkhanmaul"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Profile
                    <FiExternalLink size={16} />
                  </a>
                  <a
                    className="inline-flex items-center gap-1 font-light border bg-gray-600 bg-opacity-20 hover:bg-opacity-30 border-yellow-400 transition-all duration-150 ease-in-out px-2 py-1 rounded-lg text-xs"
                    href="https://www.linkedin.com/in/farkhanmaul/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                    <FiExternalLink size={16} />
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