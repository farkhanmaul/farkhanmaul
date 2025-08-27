import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Animation configuration types
interface FadeInConfig {
  trigger: string;
  start?: string;
  end?: string;
  delay?: number;
  duration?: number;
  y?: number;
}

interface StaggerConfig {
  selector: string;
  trigger: string;
  start?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
}

// Reusable animation functions
export const createFadeInAnimation = ({
  trigger,
  start = 'top 80%',
  end = 'bottom 20%',
  delay = 0,
  duration = 1,
  y = 50
}: FadeInConfig) => {
  gsap.fromTo(trigger, 
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger,
        start,
        end,
        toggleActions: 'play none none reverse'
      }
    }
  );
};

export const createStaggerAnimation = ({
  selector,
  trigger,
  start = 'top 70%',
  stagger = 0.1,
  duration = 0.6,
  delay = 0
}: StaggerConfig) => {
  gsap.fromTo(selector,
    { opacity: 0, scale: 0.8 },
    {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      stagger,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger,
        start
      }
    }
  );
};

export const createHeroTimeline = () => {
  const tl = gsap.timeline();
  
  const animations = [
    { selector: '.hero-greeting *', delay: 0.5, stagger: 0.2 },
    { selector: '.hero-name *', delay: 0.2, stagger: 0.15 },
    { selector: '.hero-greeting2 *', delay: 0.2, stagger: 0.15 }
  ];

  animations.forEach(({ selector, delay, stagger }, index) => {
    const method = index === 0 ? 'to' : 'to';
    tl[method](
      selector,
      { opacity: 1, stagger },
      index === 0 ? delay : `+=${delay}`
    );
  });

  return tl;
};

export const cleanupAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};