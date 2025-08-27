import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import PageMarker from '../PageMarker';
import { Emoji } from '../Twemoji';

export default function About() {
  const targetRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (
      !roleRef.current ||
      !targetRef.current ||
      !introRef.current ||
      !fromRef.current
    )
      return;

    const tl = gsap
      .timeline({
        scrollTrigger: {
          id: 'about-container',
          trigger: '#about',
          scrub: true,
          start: 'top bottom',
          end: 'bottom top',
        },
      })
      .to(roleRef.current, {
        id: 'role',
        y: 0,
        ease: 'power2',
        scrollTrigger: {
          trigger: targetRef.current,
          scrub: true,
          start: '-800 top',
          end: '+=60%',
        },
      })
      .to(introRef.current, {
        id: 'intro',
        y: 0,
        ease: 'power2',
        scrollTrigger: {
          trigger: targetRef.current,
          scrub: true,
          start: '-750 top',
          end: '+=60%',
        },
      })
      .to(fromRef.current, {
        id: 'from',
        x: 0,
        ease: 'power2',
        scrollTrigger: {
          trigger: targetRef.current,
          scrub: true,
          start: '-750 top',
          end: '+=50%',
        },
      });

    return () => {
      tl.kill();
    };
  }, [roleRef, targetRef, introRef, fromRef]);

  return (
    <section
      id="about"
      className="relative p-12 w-screen min-h-[42rem] sm:min-h-[50rem] flex flex-col"
      data-id="about"
    >
      <section className="relative flex-grow flex flex-col items-center pt-36">
        <section id="about-scroll-container" className="w-full">
          <section ref={targetRef} className="flex items-center justify-center">
            <section className="w-min gap-4 flex flex-col justify-center -mt-16">
              <section className="overflow-hidden ml-12 sm:ml-28">
                <h2
                  ref={introRef}
                  className="text-[24px] md:text-4xl xl:text-5xl font-medium tracking-tighter leading-[0.8]"
                  style={{ transform: 'translateY(100%)' }}
                >
                  I&apos;M A
                </h2>
              </section>

              <section className="overflow-hidden">
                <h2
                  style={{ transform: 'translateY(100%)' }}
                  ref={roleRef}
                  className="whitespace-nowrap text-[40px] sm:text-7xl md:text-8xl xl:text-[7.5rem] font-semibold tracking-tighter leading-[0.8]"
                >
                  SOFTWARE DEVELOPER
                </h2>
              </section>

              <section className="overflow-hidden self-end">
                <h2
                  ref={fromRef}
                  className="text-[24px] md:text-5xl xl:text-6xl font-medium tracking-tighter flex items-center leading-[0.8] pr-[2px]"
                  style={{ transform: 'translateX(100%)' }}
                >
                  <Emoji code="1f1ee-1f1e9" className="mr-5" />
                  FROM INDONESIA
                </h2>
              </section>
            </section>

            <div className="absolute bottom-48 font-medium opacity-40 hover:opacity-80 border-[2px] border-transparent hover:bg-zinc-600 hover:bg-opacity-30 hover:border-yellow-300 transition-all duration-150 ease-in-out px-3 py-2 rounded-xl text-lg sm:text-xl">
              Learn more about me
            </div>

            {/* Tech stack badges */}
            <div className="absolute bottom-20 flex flex-wrap gap-4 justify-center max-w-md">
              <div className="px-3 py-1 bg-blue-600 bg-opacity-30 rounded-full text-sm">React</div>
              <div className="px-3 py-1 bg-green-600 bg-opacity-30 rounded-full text-sm">Node.js</div>
              <div className="px-3 py-1 bg-yellow-600 bg-opacity-30 rounded-full text-sm">JavaScript</div>
              <div className="px-3 py-1 bg-purple-600 bg-opacity-30 rounded-full text-sm">Java</div>
              <div className="px-3 py-1 bg-red-600 bg-opacity-30 rounded-full text-sm">Spring Boot</div>
            </div>
          </section>
        </section>

        <PageMarker />
      </section>
    </section>
  );
}