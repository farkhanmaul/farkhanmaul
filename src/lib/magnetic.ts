import { gsap } from "gsap";

export const magnetic = (el: HTMLElement, intensity = 0.3) => {
  let bounds: DOMRect;
  
  const handleMouseEnter = () => {
    bounds = el.getBoundingClientRect();
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!bounds) return;
    
    const { clientX, clientY } = e;
    const { left, top, width, height } = bounds;
    
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const deltaX = (clientX - centerX) * intensity;
    const deltaY = (clientY - centerY) * intensity;
    
    gsap.to(el, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true
    });
  };
  
  const handleMouseLeave = () => {
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
      overwrite: true
    });
  };
  
  el.addEventListener('mouseenter', handleMouseEnter);
  el.addEventListener('mousemove', handleMouseMove);
  el.addEventListener('mouseleave', handleMouseLeave);
  
  return () => {
    el.removeEventListener('mouseenter', handleMouseEnter);
    el.removeEventListener('mousemove', handleMouseMove);  
    el.removeEventListener('mouseleave', handleMouseLeave);
  };
};