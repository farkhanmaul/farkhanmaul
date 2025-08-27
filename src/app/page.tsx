'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Projects from '@/components/home/Projects';
import Footer from '@/components/home/Footer';
import useLenis from '@/hooks/useLenis';

const BlurredBackground = () => {
  return (
    <>
      <section className="w-screen h-full z-[-2] flex-grow absolute inset-0 overflow-hidden">
        <span
          id="blob-1"
          className="blur-[250px] block rounded-full w-[45rem] h-[40rem] -top-80 md:-top-16 -right-96 md:right-4 animate-spin-slow absolute bg-gradient-to-b from-[#37E7FF] via-[#E0CE92] to-[#F040BF]"
        />

        <span
          id="blob-2"
          className="blur-[250px] block rounded-full w-[30rem] h-[35rem] top-[105vh] -left-48 md:left-0 animate-spin-slow absolute bg-gradient-to-b from-[#FF375B] via-[#92E0A8] to-[#4440F0]"
        />

        <span
          id="blob-3"
          className="blur-[250px] block rounded-full w-[30rem] h-[35rem] top-[200vh] -right-56 md:right-0 animate-spin-slow absolute bg-gradient-to-b from-[#37FF4B] via-[#92ACE0] to-[#F040C9]"
        />
      </section>
    </>
  );
};

export default function Home() {
  const router = useRouter();
  const lenis = useLenis(({ instance }) => instance);

  useEffect(() => {
    const scrollTo = () => {
      if (!router || !lenis) return;
      
      // Handle scroll-to functionality if needed
      const urlParams = new URLSearchParams(window.location.search);
      const scrollTarget = urlParams.get('scroll');
      
      if (scrollTarget) {
        lenis.scrollTo(`[data-id=${scrollTarget}]`);
      }
    };

    requestAnimationFrame(scrollTo);
  }, [lenis, router]);

  return (
    <>
      <BlurredBackground />
      
      <Hero />
      <About />
      <Projects />
      <Footer />
    </>
  );
}