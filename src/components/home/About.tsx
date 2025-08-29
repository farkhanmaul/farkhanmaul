import PageMarker from '@/components/PageMarker';
import Section from '@/components/sections/Section';
import TechBadge from '@/components/ui/TechBadge';
import AboutModal from '@/components/AboutModal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { useScrollAnimation } from '@/hooks/useAnimation';
import { TECH_BADGES } from '@/lib/constants';
import mapRange from '@/lib/mapRange';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { FiMapPin } from 'react-icons/fi';

/**
 * Komponen About - Section tentang developer
 * Menampilkan profesi, lokasi, tech stack, dan globe 3D interaktif
 */
export default function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phi = useRef(1.2); // Rotasi globe berdasarkan scroll
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  useScrollAnimation({
    trigger: '#about-title',
    start: 'top 80%',
    duration: 1
  });

  useEffect(() => {
    if (!canvasRef.current) return;

    let createGlobe: any;
    
    const initGlobe = async () => {
      try {
        createGlobe = (await import('cobe')).default;
        
        gsap.registerPlugin(ScrollTrigger);

        const instance = ScrollTrigger.create({
          id: 'about-container',
          trigger: '#about',
          start: 'top bottom', 
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            phi.current = mapRange(0, 1, self.progress, 1.2, 3.8);
          },
        });

        const globe = createGlobe(canvasRef.current, {
          devicePixelRatio: 1.5,
          width: 384 * 1.5,
          height: 384 * 1.5,
          phi: 0,
          theta: 0,
          dark: 1,
          diffuse: 1.2,
          mapSamples: 12000, // Reduced for better performance
          mapBrightness: 6,
          baseColor: [0.3, 0.3, 0.3],
          markerColor: [255 / 255, 61 / 255, 50 / 255],
          glowColor: [1, 1, 1],
          opacity: 0.7,
          markers: [
            // Indonesia coordinate  
            { location: [106.845599, -6.208763], size: 0.05 },
          ],
          onRender: (state) => {
            // Simple direct assignment like reference
            state.phi = phi.current;
          },
        });

        return () => {
          globe.destroy();
          instance.kill();
        };
      } catch (error) {
        console.warn('Globe initialization failed:', error);
      }
    };

    initGlobe();
  }, []);

  return (
    <Section id="about" className="px-6 sm:px-12 lg:px-20 py-16 sm:py-24 items-center">
      <div className="flex flex-col items-center gap-4 relative" id="about-title" ref={titleRef}>
        <h2 className="text-sm md:text-base xl:text-lg font-normal tracking-tight opacity-0">
          I&apos;M A
        </h2>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-medium tracking-tight opacity-0" role="heading" aria-level="1">
          SOFTWARE DEVELOPER
        </h2>
        
        <h2 className="text-sm md:text-lg xl:text-xl font-normal tracking-tight flex items-center opacity-0" role="heading" aria-level="2">
          <FiMapPin className="mr-3 text-red-500" />
          FROM INDONESIA
        </h2>

        {/* Read More Button - berdasarkan referensi website */}
        <button
          className="absolute bottom-48 font-medium opacity-90 hover:opacity-100 border-2 border-yellow-400 border-opacity-80 bg-yellow-400 bg-opacity-20 hover:bg-yellow-400 hover:bg-opacity-30 hover:border-yellow-300 transition-all duration-300 ease-in-out px-6 py-3 rounded-xl text-base sm:text-lg cursor-pointer text-yellow-200 hover:text-white backdrop-blur-md shadow-lg hover:shadow-yellow-400/20 hover:scale-105"
          onClick={() => setIsModalOpen(true)}
        >
          Read more
        </button>

        <canvas
          ref={canvasRef}
          className="w-[320px] h-[320px] sm:w-[384px] sm:h-[384px] scale-[1.1] sm:scale-[1.2] md:scale-[1.4] aspect-square absolute -bottom-28 left-1/2 -translate-x-1/2 z-[-1] opacity-60 overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
            WebkitMaskImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
            maxWidth: '100vw',
            clipPath: 'inset(0)'
          }}
        />
      </div>

      {/* Stats Section */}
      <div className="mt-16 sm:mt-20 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="mb-2">
              <AnimatedCounter
                end={1}
                suffix="+"
                duration={2000}
                className="text-2xl sm:text-3xl font-bold text-yellow-300 block"
              />
            </div>
            <h3 className="text-xs sm:text-sm font-medium text-white mb-1">Years Experience</h3>
            <p className="text-xs text-gray-400">Professional development</p>
          </div>
          
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="mb-2">
              <AnimatedCounter
                end={40}
                suffix="+"
                duration={2200}
                className="text-2xl sm:text-3xl font-bold text-yellow-300 block"
              />
            </div>
            <h3 className="text-xs sm:text-sm font-medium text-white mb-1">REST APIs</h3>
            <p className="text-xs text-gray-400">Built and maintained</p>
          </div>
          
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="mb-2">
              <AnimatedCounter
                end={26}
                suffix="+"
                duration={2400}
                className="text-2xl sm:text-3xl font-bold text-yellow-300 block"
              />
            </div>
            <h3 className="text-xs sm:text-sm font-medium text-white mb-1">Courses</h3>
            <p className="text-xs text-gray-400">Learning journey</p>
          </div>
          
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="mb-2">
              <AnimatedCounter
                end={3}
                suffix=".88"
                duration={2600}
                className="text-2xl sm:text-3xl font-bold text-yellow-300 block"
              />
            </div>
            <h3 className="text-xs sm:text-sm font-medium text-white mb-1">GPA</h3>
            <p className="text-xs text-gray-400">Computer Science</p>
          </div>
        </div>

        <p className="text-base sm:text-lg opacity-60 mb-8">Specialized in modern web technologies</p>
        <div className="flex flex-wrap gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
          {TECH_BADGES.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} iconType={tech.iconType} color={tech.color} />
          ))}
        </div>
      </div>

      <PageMarker />
      
      {/* About Modal */}
      <AboutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Section>
  );
}