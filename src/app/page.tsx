'use client';

import { useEffect, lazy, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import Hero from '@/components/home/Hero';
import LoadingFallback from '@/components/ui/LoadingFallback';
import useLenis from '@/hooks/useLenis';

const About = lazy(() => import('@/components/home/About'));
const Experience = lazy(() => import('@/components/home/Experience'));
const Projects = lazy(() => import('@/components/home/Projects'));
const Footer = lazy(() => import('@/components/home/Footer'));

const BlurredBackground = () => {
  return (
    <>
      <section className="fixed w-screen h-screen z-[-2] inset-0 overflow-hidden pointer-events-none">
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

        <span
          id="blob-4"
          className="blur-[250px] block rounded-full w-[35rem] h-[30rem] top-[300vh] left-1/4 animate-spin-slow absolute bg-gradient-to-b from-[#FF6B35] via-[#F7931E] to-[#FFD23F]"
        />

        <span
          id="blob-5"
          className="blur-[250px] block rounded-full w-[40rem] h-[35rem] top-[400vh] -right-32 animate-spin-slow absolute bg-gradient-to-b from-[#9B59B6] via-[#8E44AD] to-[#3498DB]"
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
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Footer />
      </Suspense>
    </>
  );
}