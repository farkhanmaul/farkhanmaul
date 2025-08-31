'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import classNames from 'classnames';
import useLenis from '@/hooks/useLenis';
import { FiHome, FiUser, FiBriefcase, FiFolder, FiMail, FiBookOpen } from 'react-icons/fi';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const routes = [
  { name: 'Home', path: '#', icon: FiHome },
  { name: 'About', path: '#about', icon: FiUser },
  { name: 'Experience', path: '#experience', icon: FiBriefcase },
  { name: 'Education', path: '#education', icon: FiBookOpen },
  { name: 'Skills', path: '#skills', icon: FiFolder },
  { name: 'Projects', path: '#projects', icon: FiFolder },
  { name: 'Contact', path: '#contact', icon: FiMail },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis(({ instance }) => instance);

  useEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;

    // GSAP animation sesuai referensi
    const tl = gsap
      .timeline()
      .to('.menu-items', {
        duration: 0.5,
        opacity: isOpen ? 1 : 0,
        y: isOpen ? 0 : 50,
        ease: 'power2',
      })
      .to(
        el,
        {
          duration: 0.5,
          ease: 'power2',
          x: isOpen ? 0 : '100%',
        },
        0,
      );

    return () => {
      tl.kill();
    };
  }, [isOpen]);

  const handleNavigate = async (route: string) => {
    onClose();

    if (route.startsWith('#')) {
      let target: string | number = route;

      if (route === '#') {
        target = 0;
      }

      // Smooth scroll ke target
      return lenis?.scrollTo(target, {
        duration: 1,
      });
    }
  };

  return (
    <>
      {/* Overlay */}
      <section
        onClick={onClose}
        className={classNames(
          'z-10 fixed inset-0 w-full h-full bg-zinc-800 transition-opacity duration-500 cursor-pointer',
          isOpen
            ? 'pointer-events-auto opacity-40'
            : 'pointer-events-none opacity-0',
        )}
      />

      {/* Sidebar */}
      <section
        ref={sidebarRef}
        className="fixed inset-0 ml-auto sm:max-w-2xl px-8 sm:px-16 md:px-24 pb-16 pt-[12vh] sm:pt-[16vh] bg-gradient-to-br from-gray-900 via-black to-gray-800 backdrop-blur-xl border-l-2 border-yellow-400 border-opacity-40 z-20 shadow-2xl shadow-black/50"
        style={{
          transform: 'translateX(100%)',
        }}
      >
        <section className="menu-inner flex flex-col h-full justify-between">
          <section className="menu-content flex flex-col gap-3">
            {routes.map(({ name, path, icon: Icon }) => (
              <section
                key={name}
                className="menu-items cursor-pointer relative group hover:text-white transition-colors duration-100"
              >
                <div
                  onClick={() => handleNavigate(path)}
                  className="flex items-center gap-4 pb-3 border-b text-2xl sm:text-3xl md:text-4xl transition-all duration-300 border-transparent group-hover:px-3 group-hover:border-yellow-300 text-gray-300 group-hover:text-white cursor-pointer"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-20 scale-0 group-hover:scale-150 transition-all duration-300"></div>
                    <Icon className="relative text-2xl sm:text-3xl md:text-4xl text-yellow-400 group-hover:text-yellow-300 transition-all duration-300 group-hover:scale-125 group-hover:rotate-12" />
                  </div>
                  <span className="transition-all duration-300 group-hover:translate-x-2">{name}</span>
                </div>
              </section>
            ))}
          </section>

          <section>
            <p className="opacity-75 text-gray-400 text-sm">Made with 💛 by Farkhan</p>
          </section>
        </section>
      </section>
    </>
  );
}