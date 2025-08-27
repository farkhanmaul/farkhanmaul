import Section from '@/components/sections/Section';
import ContactCard from '@/components/ui/ContactCard';
import { useScrollAnimation } from '@/hooks/useAnimation';
import { CONTACTS } from '@/lib/constants';

export default function Footer() {
  useScrollAnimation({
    trigger: '#contact-title',
    start: 'top 80%',
    duration: 1
  });

  return (
    <Section id="contact" className="px-6 sm:px-12 lg:px-20 py-16 sm:py-24 justify-center items-center" dataId="contact">
      <div className="text-center max-w-4xl">
        <h2 
          id="contact-title"
          className="text-3xl md:text-5xl xl:text-6xl font-bold tracking-tighter mb-20 sm:mb-24 opacity-0"
          role="heading"
          aria-level="2"
        >
          LET&apos;S <span className="text-yellow-300">CONNECT</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 sm:mb-24" role="list" aria-label="Contact methods">
          {CONTACTS.map((contact, index) => (
            <ContactCard key={contact.name} {...contact} index={index} />
          ))}
        </div>

        <footer className="border-t border-white border-opacity-20 pt-12">
          <p className="text-gray-400 text-sm">
            © 2025 Farkhan Maul. Crafted with passion and clean code.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Available for freelance work and full-time opportunities
          </p>
        </footer>
      </div>
    </Section>
  );
}