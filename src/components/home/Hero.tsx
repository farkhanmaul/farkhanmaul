/* eslint-disable @next/next/no-img-element */
import Logo from '@/components/Logo';
import PageMarker from '@/components/PageMarker';
import Section from '@/components/sections/Section';
import { Emoji } from '@/components/Twemoji';
import { useHeroAnimation } from '@/hooks/useAnimation';
import { ArrowDown } from '@phosphor-icons/react';
import dynamic from 'next/dynamic';

const Link = dynamic(() => import('next/link'), { ssr: false });

export default function Hero() {
  useHeroAnimation();

  return (
    <Section id="hero" className="p-12 gap-4">
      <Link href="/">
        <Logo />
      </Link>

      <section className="flex-grow flex flex-col relative">
        <section className="flex flex-col sm:pl-[12vw] pt-[15vh] gap-4">
          <p className="text-xl sm:text-2xl font-medium flex gap-2" id="hero-greeting">
            <span style={{ opacity: 0 }}>Hey</span>
            <span style={{ opacity: 0 }}>there!</span>
            <Emoji code="1f44b" style={{ opacity: 0 }} />
          </p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold ml-[-5px] text-yellow-300 flex gap-4 tracking-tight" id="hero-name">
            <span style={{ opacity: 0 }}>I&apos;m</span>
            <span style={{ opacity: 0 }} className="font-bold text-white flex flex-col relative">
              <span className="text-lg tracking-tighter opacity-80 absolute -bottom-6 right-1">
                <span className="opacity-75">a.k.a</span> farkhanmaul
              </span>
              Farkhan
            </span>
            <span style={{ opacity: 0 }}>.</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium flex gap-2 text-zinc-100" id="hero-greeting2">
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