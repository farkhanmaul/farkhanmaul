import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface AnimationConfig {
  trigger: string;
  start?: string;
  end?: string;
  delay?: number;
  duration?: number;
}

// Single Responsibility: Handle animation logic
export const useScrollAnimation = (config: AnimationConfig) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const { trigger, start = 'top 80%', delay = 0, duration = 1 } = config;

    gsap.fromTo(trigger, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger,
          start,
          toggleActions: 'play none none reverse'
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [config]);
};

// Single Responsibility: Handle hero animations
export const useHeroAnimation = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.to('.hero-greeting *', { opacity: 1, stagger: 0.2, delay: 0.5 })
      .to('.hero-name *', { opacity: 1, stagger: 0.15 }, '+=0.2')
      .to('.hero-greeting2 *', { opacity: 1, stagger: 0.15 }, '+=0.2');

    return () => tl.kill();
  }, []);
};