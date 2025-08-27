import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { magnetic } from '@/lib/magnetic';

const contacts = [
  { name: 'Email', value: 'farkhanmaul@gmail.com', link: 'mailto:farkhanmaul@gmail.com' },
  { name: 'LinkedIn', value: 'linkedin.com/in/farkhanmaul/', link: 'https://www.linkedin.com/in/farkhanmaul/' },
  { name: 'GitHub', value: 'github.com/farkhanmaul', link: 'https://github.com/farkhanmaul' },
  { name: 'Instagram', value: '@farkhanmaul', link: 'https://instagram.com/farkhanmaul' }
];

export default function Footer() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const magneticRefs = useRef<HTMLAnchorElement[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Contacts animation
    if (contactsRef.current) {
      gsap.fromTo('.contact-item', 
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contactsRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Apply magnetic effect to contact links
    const cleanupFunctions: (() => void)[] = [];
    magneticRefs.current.forEach((ref) => {
      if (ref) {
        const cleanup = magnetic(ref, 0.2);
        cleanupFunctions.push(cleanup);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      cleanupFunctions.forEach(cleanup => cleanup());
    };
  }, []);

  return (
    <section 
      id="contact" 
      className="relative p-12 w-screen min-h-screen flex flex-col justify-center items-center"
      data-id="contact"
    >
      <div className="text-center max-w-4xl">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl xl:text-7xl font-bold tracking-tighter mb-16"
        >
          LET&apos;S <span className="text-yellow-300">CONNECT</span>
        </h2>

        <div 
          ref={contactsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {contacts.map((contact, index) => (
            <a
              key={contact.name}
              ref={(el) => {
                if (el) magneticRefs.current[index] = el;
              }}
              href={contact.link}
              target={contact.link.startsWith('http') ? '_blank' : '_self'}
              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
              className="contact-item group p-6 rounded-2xl bg-white bg-opacity-5 backdrop-blur-sm border border-white border-opacity-10 hover:border-opacity-30 transition-all duration-300 hover:bg-opacity-10"
            >
              <h3 className="text-xl font-semibold text-yellow-300 mb-2 group-hover:scale-105 transition-transform">
                {contact.name}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                {contact.value}
              </p>
            </a>
          ))}
        </div>

        <div className="border-t border-white border-opacity-20 pt-8">
          <p className="text-gray-400 text-sm">
            © 2025 Farkhan Maul. Crafted with passion and code.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Available for freelance work and full-time opportunities
          </p>
        </div>
      </div>
    </section>
  );
}