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

    const elements = document.querySelectorAll(trigger);
    if (elements.length === 0) return;

    const animation = gsap.fromTo(elements, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger,
          start,
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
          once: false
        }
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(t => {
        if (t.trigger === trigger) t.kill();
      });
    };
  }, [config.trigger, config.start, config.delay, config.duration]);
};

// Single Responsibility: Handle hero animations
export const useHeroAnimation = () => {
  useEffect(() => {
    const checkAndAnimate = () => {
      const greetingEls = document.querySelectorAll('#hero-greeting *');
      const nameEls = document.querySelectorAll('#hero-title *');
      const aliasEl = document.querySelector('#hero-alias');
      const greeting2Els = document.querySelectorAll('#hero-greeting2 *');
      const descriptionEl = document.querySelector('#hero-description');

      if (greetingEls.length && nameEls.length && aliasEl && greeting2Els.length) {
        const tl = gsap.timeline();
        
        tl.to(greetingEls, { opacity: 1, stagger: 0.2, delay: 0.5 })
          .to(nameEls, { opacity: 1, stagger: 0.15 }, '+=0.2')
          .to(aliasEl, { opacity: 1, duration: 0.5 }, '+=0.1')
          .to(greeting2Els, { opacity: 1, stagger: 0.15 }, '+=0.2');
        
        if (descriptionEl) {
          tl.to(descriptionEl, { opacity: 1, y: 0, duration: 0.8 }, '+=0.3');
        }

        return tl;
      }
      return null;
    };

    const timer = setTimeout(checkAndAnimate, 100);
    
    return () => {
      clearTimeout(timer);
      const timeline = checkAndAnimate();
      if (timeline) timeline.kill();
    };
  }, []);
};