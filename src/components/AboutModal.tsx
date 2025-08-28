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
        <div className="modal-content bg-black bg-opacity-90 backdrop-blur-lg border border-gray-700 rounded-2xl p-4 sm:p-6 md:p-8 max-w-2xl w-full max-h-[85vh] sm:max-h-[80vh] overflow-y-auto relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="sticky top-0 ml-auto mb-4 flex p-2 rounded-full border border-gray-600 hover:border-gray-400 hover:bg-gray-800 transition-all duration-300 z-10 bg-black bg-opacity-80"
            style={{ width: 'fit-content' }}
          >
            <FiX className="text-lg sm:text-xl" />
          </button>

          {/* Content */}
          <div className="text-white -mt-4">
            <div className="mb-6 sm:mb-8 flex flex-col gap-3">
              <h2 className="font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight">
                About me
              </h2>
            </div>

            <div className="text-gray-100 text-sm sm:text-base leading-relaxed space-y-4 sm:space-y-6">
              <p>
                Hey there! My full name is <b>Farkhan Maul</b>. You can find me
                online with my username <b>farkhanmaul</b>. I&apos;m a
                Software Developer with over 1 year of experience in back-end and front-end development, 
                specializing in API integration and enterprise system development.
              </p>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 text-yellow-400">Professional Experience</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-white">Junior Software Developer - PT. Bank Negara Indonesia (BNI)</h4>
                    <p className="text-sm text-gray-400 mb-2">Nov 2024 – May 2025 | Jakarta, ID</p>
                    <p>
                      Currently working in the Retail Enablers Digital Delivery Division, developing and maintaining 
                      the Retail Productive Banking system. Built 3 REST APIs using Spring Boot with Oracle and 
                      PostgreSQL databases, and customized form functionalities using jQuery and JavaScript.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Software Developer Intern - PT. Elang Mahkota Teknologi (EMTEK)</h4>
                    <p className="text-sm text-gray-400 mb-2">Aug 2023 – Dec 2023 | Jakarta, ID</p>
                    <p>
                      Created 40+ REST API endpoints for internal HRIS using Node.js, Express.js, and MySQL. 
                      Developed features for employee attendance, room bookings, and leave management systems.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 text-yellow-400">Education & Certifications</h3>
                <div className="space-y-2">
                  <p><strong>Bachelor of Computer Science</strong> - Universitas Ahmad Dahlan (GPA: 3.88/4.00)</p>
                  <p><strong>Cloud Computing Cohort</strong> - Bangkit Academy by Google, Gojek & Traveloka</p>
                  <p>Completed 26+ courses across Coursera, Dicoding, and Google Cloud Skill Boost</p>
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 text-yellow-400">Technical Skills</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                  <div>
                    <p className="font-medium text-gray-300 mb-1">Languages:</p>
                    <p>JavaScript, Java, PHP, HTML</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-300 mb-1">Frameworks:</p>
                    <p>Spring Boot, Express.js, React.js</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-300 mb-1">Databases:</p>
                    <p>MySQL, PostgreSQL, Oracle</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-300 mb-1">Tools:</p>
                    <p>Git, GCP, AWS, Jira, Linux</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-3 text-yellow-400">Let&apos;s Connect</h3>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <a
                    className="inline-flex items-center gap-2 sm:gap-3 font-medium border-[2px] bg-gray-600 bg-opacity-20 hover:bg-opacity-30 border-yellow-400 transition-all duration-150 ease-in-out px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm"
                    href="https://github.com/farkhanmaul"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Profile
                    <FiExternalLink size={16} />
                  </a>
                  <a
                    className="inline-flex items-center gap-2 sm:gap-3 font-medium border-[2px] bg-gray-600 bg-opacity-20 hover:bg-opacity-30 border-yellow-400 transition-all duration-150 ease-in-out px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm"
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