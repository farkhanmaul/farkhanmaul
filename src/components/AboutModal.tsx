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
        <div className="modal-content bg-black bg-opacity-90 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full border border-gray-600 hover:border-gray-400 hover:bg-gray-800 transition-all duration-300"
          >
            <FiX className="text-xl" />
          </button>

          {/* Content */}
          <div className="text-white">
            <div className="mb-8 flex flex-col gap-3">
              <h2 className="font-semibold text-3xl lg:text-4xl tracking-tight">
                About me
              </h2>
            </div>

            <div className="text-gray-100 text-base leading-relaxed space-y-6">
              <p>
                Hey there! My full name is <b>Farkhan Maul</b>. You can find me
                online with my username <b>farkhanmaul</b>. I&apos;m a
                Fullstack Web Developer passionate about creating modern web applications.
              </p>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-400">History</h3>
                <p>
                  I started my programming journey in 2022 with web development fundamentals.
                  Since then, I&apos;ve been focusing on modern technologies like{' '}
                  <a
                    href="https://reactjs.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    React
                  </a>,{' '}
                  <a
                    href="https://nodejs.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Node.js
                  </a>, and{' '}
                  <a
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    TypeScript
                  </a>.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-400">Skills & Expertise</h3>
                <p>
                  I specialize in full-stack development with experience in building
                  responsive web applications, RESTful APIs, and database management.
                  My recent projects include Movie Hanz, FRESHCAN platform, and 
                  various web development solutions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-400">Let&apos;s Connect</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    className="inline-flex items-center gap-3 font-medium border-[2px] bg-gray-600 bg-opacity-20 hover:bg-opacity-30 border-blue-400 transition-all duration-150 ease-in-out px-4 py-2 rounded-xl text-sm"
                    href="https://github.com/farkhanmaul"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Profile
                    <FiExternalLink size={16} />
                  </a>
                  <a
                    className="inline-flex items-center gap-3 font-medium border-[2px] bg-gray-600 bg-opacity-20 hover:bg-opacity-30 border-blue-400 transition-all duration-150 ease-in-out px-4 py-2 rounded-xl text-sm"
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