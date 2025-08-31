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

    // Prevent body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
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
      document.body.style.overflow = 'unset';
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
        <div className="modal-content bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl border-2 border-cyan-400 border-opacity-40 rounded-2xl p-3 sm:p-4 max-w-4xl w-full h-[85vh] overflow-hidden relative shadow-2xl shadow-cyan-500/20 flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end mb-2 shrink-0">
            <button
              onClick={onClose}
              className="flex p-1.5 rounded-full border-2 border-cyan-400 border-opacity-60 hover:border-cyan-300 hover:bg-cyan-400 hover:bg-opacity-20 transition-all duration-300 bg-gradient-to-br from-cyan-400/10 to-transparent hover:scale-110 hover:rotate-90 shadow-lg"
            >
              <FiX className="text-cyan-300 text-base hover:text-white transition-colors duration-300" />
            </button>
          </div>

          {/* Content */}
          <div className="text-white flex-1 flex flex-col overflow-hidden">
            <div className="mb-3 text-center shrink-0">
              <h2 className="font-bold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-cyan-300 mx-auto mt-1 rounded-full"></div>
            </div>

            {/* Content organized in distinct sections */}
            <div className="flex-1 flex flex-col gap-4 overflow-y-auto">
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
                    <div className="absolute left-0 top-full mt-2 w-72 bg-slate-900/95 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50 shadow-xl">
                      <h5 className="text-sm font-semibold text-cyan-300 mb-2">Key Responsibilities & Achievements:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Designed and developed REST APIs for banking applications</li>
                        <li>• Implemented secure authentication and authorization systems</li>
                        <li>• Optimized database queries for improved performance</li>
                        <li>• Collaborated with cross-functional teams using Agile methodology</li>
                        <li>• Maintained code quality through unit testing and code reviews</li>
                      </ul>
                      <p className="text-xs text-cyan-400 mt-2 font-medium">Tech Stack: Spring Boot, Oracle DB, PostgreSQL, Git, Jira</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/40 p-3 rounded border border-slate-600/30 hover:border-cyan-400/50 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer group relative">
                    <h4 className="font-semibold text-white text-sm mb-1">Software Developer Intern</h4>
                    <p className="text-sm text-yellow-300 font-medium">PT. Elang Mahkota Teknologi</p>
                    <p className="text-xs text-gray-400 mb-2">Aug 2023 – Dec 2023</p>
                    <p className="text-xs font-light text-gray-300">Built 40+ API endpoints using Node.js and MySQL</p>
                    
                    {/* Hover Details */}
                    <div className="absolute left-0 top-full mt-2 w-72 bg-slate-900/95 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50 shadow-xl">
                      <h5 className="text-sm font-semibold text-cyan-300 mb-2">Key Responsibilities & Achievements:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Developed RESTful APIs for e-commerce platform</li>
                        <li>• Built user authentication and session management</li>
                        <li>• Created database schemas and optimized queries</li>
                        <li>• Implemented error handling and logging systems</li>
                        <li>• Participated in daily standups and sprint planning</li>
                      </ul>
                      <p className="text-xs text-cyan-400 mt-2 font-medium">Tech Stack: Node.js, Express.js, MySQL, Postman, Git</p>
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
                    <div className="absolute left-0 top-full mt-2 w-72 bg-slate-900/95 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50 shadow-xl">
                      <h5 className="text-sm font-semibold text-yellow-300 mb-2">Academic Highlights & Activities:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Maintained high academic performance (3.88/4.00 GPA)</li>
                        <li>• Completed comprehensive software engineering curriculum</li>
                        <li>• Active participant in coding competitions and hackathons</li>
                        <li>• Developed multiple full-stack projects as part of coursework</li>
                        <li>• Member of Computer Science Student Association</li>
                      </ul>
                      <p className="text-xs text-yellow-400 mt-2 font-medium">Focus: Software Development, Data Structures, Algorithms, Database Systems</p>
                    </div>
                  </div>
                  
                  <div className="bg-slate-900/40 p-3 rounded border border-slate-600/30 hover:border-yellow-400/50 hover:bg-slate-800/60 transition-all duration-300 cursor-pointer group relative">
                    <h4 className="font-semibold text-white text-sm mb-1">Cloud Computing Cohort</h4>
                    <p className="text-sm text-yellow-300 font-medium">Bangkit Academy</p>
                    <p className="text-xs text-gray-400 mb-2">by Google, Gojek & Traveloka - 2023</p>
                    <p className="text-xs font-light text-gray-300">Earned 26+ technical certifications in cloud computing</p>
                    
                    {/* Hover Details */}
                    <div className="absolute left-0 top-full mt-2 w-72 bg-slate-900/95 backdrop-blur-sm border border-yellow-400/30 rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-50 shadow-xl">
                      <h5 className="text-sm font-semibold text-yellow-300 mb-2">Program Achievements & Certifications:</h5>
                      <ul className="text-xs text-gray-300 space-y-1">
                        <li>• Completed intensive 6-month cloud computing program</li>
                        <li>• Earned Google Cloud Professional certifications</li>
                        <li>• Built and deployed scalable cloud applications</li>
                        <li>• Collaborated on team capstone project</li>
                        <li>• Mentored by industry professionals from top tech companies</li>
                      </ul>
                      <p className="text-xs text-yellow-400 mt-2 font-medium">Focus: Google Cloud Platform, DevOps, Microservices, Container Orchestration</p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}