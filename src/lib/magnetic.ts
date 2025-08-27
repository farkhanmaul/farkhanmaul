import gsap from 'gsap';

export const magnetic = (element: HTMLElement, strength = 0.3) => {
  if (!element || typeof window === 'undefined') return () => {};
  
  const bounds = element.getBoundingClientRect();
  
  const onMouseMove = (e: MouseEvent) => {
    try {
      const x = e.clientX - bounds.left - bounds.width / 2;
      const y = e.clientY - bounds.top - bounds.height / 2;
      
      gsap.to(element, {
        duration: 0.3,
        x: x * strength,
        y: y * strength,
        ease: 'power2.out',
      });
    } catch (error) {
      console.warn('Magnetic mousemove animation failed:', error);
    }
  };

  const onMouseLeave = () => {
    try {
      gsap.to(element, {
        duration: 0.5,
        x: 0,
        y: 0,
        ease: 'elastic.out(1, 0.3)',
      });
    } catch (error) {
      console.warn('Magnetic mouseleave animation failed:', error);
    }
  };

  element.addEventListener('mousemove', onMouseMove);
  element.addEventListener('mouseleave', onMouseLeave);

  return () => {
    element.removeEventListener('mousemove', onMouseMove);
    element.removeEventListener('mouseleave', onMouseLeave);
  };
};