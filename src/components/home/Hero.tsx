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

      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        {/* Left Column - Text Content */}
        <section className="flex flex-col justify-center pl-4 sm:pl-[8vw] lg:pl-[4vw] pt-[10vh] sm:pt-[15vh] lg:pt-0 gap-6">
          <p className="text-lg sm:text-xl md:text-2xl font-normal flex items-center gap-3" id="hero-greeting" role="text" aria-label="Greeting">
            <span style={{ opacity: 0 }}>Hey</span>
            <span style={{ opacity: 0 }}>there!</span>
            <HiOutlineCode className="text-yellow-300 text-2xl sm:text-3xl" style={{ opacity: 0 }} />
          </p>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ml-[-5px] text-yellow-300 flex gap-4 tracking-tight" id="hero-title" role="banner">
              <span style={{ opacity: 0 }}>I&apos;m</span>
              <span style={{ opacity: 0 }} className="font-bold text-white">
                Farkhan
              </span>
              <span style={{ opacity: 0 }}>.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 ml-1 tracking-tight" style={{ opacity: 0 }} id="hero-alias">
              <span className="opacity-75">a.k.a</span> farkhanmaul
            </p>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl font-normal flex gap-2 text-zinc-100 max-w-2xl" id="hero-greeting2" role="text" aria-label="Welcome message">
            <span style={{ opacity: 0 }}>Welcome</span>
            <span style={{ opacity: 0 }}>to</span>
            <span style={{ opacity: 0 }}>my</span>
            <span style={{ opacity: 0 }}>portfolio!</span>
          </p>

          <div className="flex flex-col gap-2 mt-4" id="hero-description" style={{ opacity: 0 }}>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
              Software Developer specializing in full-stack development with expertise in 
              <span className="text-yellow-300 font-medium"> Java</span>,
              <span className="text-blue-400 font-medium"> React</span>, and
              <span className="text-green-400 font-medium"> Node.js</span>.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-yellow-400 bg-opacity-20 text-yellow-300 text-sm rounded-full border border-yellow-400 border-opacity-30">
                1+ Years Experience
              </span>
              <span className="px-3 py-1 bg-blue-400 bg-opacity-20 text-blue-300 text-sm rounded-full border border-blue-400 border-opacity-30">
                40+ APIs Built
              </span>
              <span className="px-3 py-1 bg-green-400 bg-opacity-20 text-green-300 text-sm rounded-full border border-green-400 border-opacity-30">
                26+ Certifications
              </span>
            </div>
          </div>
        </section>

        {/* Right Column - Visual Elements */}
        <section className="hidden lg:flex flex-col justify-center items-center relative">
          <div className="w-80 h-80 relative">
            {/* Floating tech icons */}
            <div className="absolute inset-0 animate-pulse">
              <div className="absolute top-4 left-8 w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                JS
              </div>
              <div className="absolute top-16 right-4 w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                ⚛️
              </div>
              <div className="absolute bottom-20 left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                🍃
              </div>
              <div className="absolute bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-lg flex items-center justify-center text-white font-bold shadow-lg">
                ☕
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold shadow-xl text-2xl">
                💻
              </div>
            </div>
            
            {/* Background circles */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-yellow-400 border-opacity-20 rounded-full animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-blue-400 border-opacity-20 rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>
      </div>

      <PageMarker />

      <section className="absolute bottom-0 right-0">
        <div className="flex items-center justify-center">
          <svg className="w-48 sm:w-[300px] absolute z-[-1] animate-spin-slow" viewBox="0 0 346 346" fill="none">
            <circle cx="172" cy="172" r="172" stroke="#facc15" strokeWidth="1.54255" strokeDasharray="10.09 10.09" opacity="0.6" />
          </svg>
          <ArrowDown size={40} className="text-yellow-400" strokeWidth={2} />
        </div>
      </section>
    </Section>
  );
}