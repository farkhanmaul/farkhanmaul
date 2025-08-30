/* eslint-disable @next/next/no-img-element */
import PageMarker from '@/components/PageMarker';
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
    <section 
      id="hero" 
      className="relative w-screen min-h-screen flex flex-col px-6 sm:px-12 lg:px-20 py-12 gap-4"
      role="region"
      aria-labelledby="hero-title"
    >
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        {/* Left Column - Text Content */}
        <section className="flex flex-col justify-center pl-4 sm:pl-[8vw] lg:pl-[4vw] pt-[10vh] sm:pt-[15vh] lg:pt-0 gap-6">
          <p className="text-lg sm:text-xl md:text-2xl font-normal flex items-center gap-3" id="hero-greeting" role="text" aria-label="Greeting">
            <span style={{ opacity: 0 }}>Hey</span>
            <span style={{ opacity: 0 }}>there!</span>
            <HiOutlineCode className="text-cyan-400 text-2xl sm:text-3xl" style={{ opacity: 0 }} />
          </p>

          <div className="flex flex-col gap-3">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ml-[-5px] text-cyan-400 flex gap-4 tracking-tight" id="hero-title" role="banner">
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
              <span className="text-amber-400 font-medium"> Java</span>,
              <span className="text-cyan-400 font-medium"> React</span>, and
              <span className="text-emerald-400 font-medium"> Node.js</span>.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-full border border-cyan-500/30 backdrop-blur-sm">
                1+ Years Experience
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30 backdrop-blur-sm">
                40+ APIs Built
              </span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-sm rounded-full border border-emerald-500/30 backdrop-blur-sm">
                26+ Certifications
              </span>
            </div>
          </div>
        </section>

        {/* Right Column - Professional Tech Visualization */}
        <section className="hidden lg:flex flex-col justify-center items-center relative">
          <div className="w-96 h-96 relative">
            {/* Central code editor mockup */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-48 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-2xl overflow-hidden">
              {/* Editor header */}
              <div className="bg-slate-800/90 px-4 py-2 flex items-center gap-2 border-b border-slate-700/50">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-slate-400 text-sm ml-2">portfolio.js</span>
              </div>
              
              {/* Code content */}
              <div className="p-4 font-mono text-sm">
                <div className="text-cyan-400">const developer = {</div>
                <div className="ml-4 text-slate-300">name: <span className="text-emerald-400">"Farkhan Maul"</span>,</div>
                <div className="ml-4 text-slate-300">role: <span className="text-emerald-400">"Full-Stack Developer"</span>,</div>
                <div className="ml-4 text-slate-300">skills: [<span className="text-amber-400">"Java"</span>, <span className="text-cyan-400">"React"</span>, <span className="text-emerald-400">"Node.js"</span>],</div>
                <div className="ml-4 text-slate-300">passion: <span className="text-pink-400">"Building amazing apps"</span></div>
                <div className="text-cyan-400">};</div>
              </div>
            </div>

            {/* Floating tech stack badges */}
            <div className="absolute inset-0">
              <div className="absolute -top-4 left-4 px-3 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-full border border-amber-500/30 backdrop-blur-sm animate-float">
                Spring Boot
              </div>
              <div className="absolute top-8 -right-6 px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full border border-cyan-500/30 backdrop-blur-sm animate-float-delayed">
                React
              </div>
              <div className="absolute -bottom-2 left-8 px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-500/30 backdrop-blur-sm animate-float">
                Node.js
              </div>
              <div className="absolute bottom-6 -right-4 px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30 backdrop-blur-sm animate-float-delayed">
                PostgreSQL
              </div>
            </div>
            
            {/* Background geometric elements */}
            <div className="absolute inset-0">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-cyan-500/10 rounded-full animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-blue-500/10 rounded-full animate-spin-reverse"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-8 left-8 w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-16 left-16 w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </section>
      </div>

      <PageMarker />

      <section className="absolute bottom-0 right-0">
        <div className="flex items-center justify-center">
          <svg className="w-48 sm:w-[300px] absolute z-[-1] animate-spin-slow" viewBox="0 0 346 346" fill="none">
            <circle cx="172" cy="172" r="172" stroke="#22d3ee" strokeWidth="1.54255" strokeDasharray="10.09 10.09" opacity="0.6" />
          </svg>
          <ArrowDown size={40} className="text-cyan-400" strokeWidth={2} />
        </div>
      </section>
    </section>
  );
}