import PageMarker from '@/components/PageMarker';
import Section from '@/components/sections/Section';
import { Emoji } from '@/components/Twemoji';
import TechBadge from '@/components/ui/TechBadge';
import { useScrollAnimation } from '@/hooks/useAnimation';
import { TECH_BADGES } from '@/lib/constants';
import mapRange from '@/lib/mapRange';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

/**
 * Komponen About - Section tentang developer
 * Menampilkan profesi, lokasi, tech stack, dan globe 3D interaktif
 */
export default function About() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const phi = useRef(1.2); // Rotasi globe berdasarkan scroll
  
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
          mapSamples: 16000,
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
        <h2 className="text-[18px] md:text-2xl xl:text-3xl font-medium tracking-tighter opacity-0">
          I&apos;M A
        </h2>
        
        <h2 className="text-[30px] sm:text-5xl md:text-6xl xl:text-[5rem] font-semibold tracking-tighter opacity-0" role="heading" aria-level="1">
          SOFTWARE DEVELOPER
        </h2>
        
        <h2 className="text-[18px] md:text-3xl xl:text-4xl font-medium tracking-tighter flex items-center opacity-0" role="heading" aria-level="2">
          <Emoji code="1f1ee-1f1e9" className="mr-5" aria-label="Indonesian flag" />
          FROM INDONESIA
        </h2>

        <canvas
          ref={canvasRef}
          className="w-[384px] h-[384px] scale-[1.2] md:scale-[1.6] aspect-square absolute -bottom-32 left-1/2 -translate-x-1/2 z-[-1] opacity-60"
          style={{
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
            WebkitMaskImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
          }}
        />
      </div>

      <div className="mt-20 sm:mt-24 text-center">
        <p className="text-lg opacity-60 mb-8">Specialized in modern web technologies</p>
        <div className="flex flex-wrap gap-4 justify-center max-w-2xl">
          {TECH_BADGES.map((tech) => (
            <TechBadge key={tech.name} name={tech.name} icon={tech.icon} color={tech.color} />
          ))}
        </div>
      </div>

      <PageMarker />
    </Section>
  );
}