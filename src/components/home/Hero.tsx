/* eslint-disable @next/next/no-img-element */
import PageMarker from '@/components/PageMarker';
import Section from '@/components/sections/Section';
import { useHeroAnimation } from '@/hooks/useAnimation';
import { ArrowDown } from '@phosphor-icons/react';
import { HiOutlineCode } from 'react-icons/hi';

/**
 * Komponen Hero - Section pembuka portfolio
 * Menampilkan greeting, nama, dan deskripsi singkat
 */
export default function Hero() {
  // Hook untuk animasi GSAP pada hero section
  useHeroAnimation();

  return (
    <Section id="hero" className="px-6 sm:px-12 lg:px-20 py-12 gap-4">

      <section className="flex-grow flex flex-col relative">
        <section className="flex flex-col sm:pl-[8vw] lg:pl-[12vw] pt-[10vh] sm:pt-[15vh] gap-6">
          <p className="text-lg sm:text-xl font-medium flex items-center gap-2" id="hero-greeting" role="text" aria-label="Greeting">
            <span style={{ opacity: 0 }}>Hey</span>
            <span style={{ opacity: 0 }}>there!</span>
            <HiOutlineCode className="text-yellow-300" style={{ opacity: 0 }} />
          </p>

          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold ml-[-5px] text-yellow-300 flex gap-4 tracking-tight" id="hero-title" role="banner">
              <span style={{ opacity: 0 }}>I&apos;m</span>
              <span style={{ opacity: 0 }} className="font-bold text-white">
                Farkhan
              </span>
              <span style={{ opacity: 0 }}>.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 ml-1 tracking-tight" style={{ opacity: 0 }} id="hero-alias">
              <span className="opacity-75">a.k.a</span> farkhanmaul
            </p>
          </div>

          <p className="text-lg sm:text-xl font-medium flex gap-2 text-zinc-100" id="hero-greeting2" role="text" aria-label="Welcome message">
            <span style={{ opacity: 0 }}>Welcome</span>
            <span style={{ opacity: 0 }}>to</span>
            <span style={{ opacity: 0 }}>my</span>
            <span style={{ opacity: 0 }}>portfolio!</span>
          </p>
        </section>

        <PageMarker />

        <section className="absolute bottom-0 right-0">
          <div className="flex items-center justify-center">
            <svg className="w-48 sm:w-[300px] absolute z-[-1] animate-spin-slow" viewBox="0 0 346 346" fill="none">
              <circle cx="172" cy="172" r="172" stroke="#6B558D" strokeWidth="1.54255" strokeDasharray="10.09 10.09" />
            </svg>
            <ArrowDown size={40} className="text-purple-400" strokeWidth={2} />
          </div>
        </section>
      </section>
    </Section>
  );
}