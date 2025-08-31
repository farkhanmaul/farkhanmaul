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
    <Section id="contact" className="px-6 sm:px-12 lg:px-20 py-20 sm:py-32 justify-center items-center" dataId="contact">
      <div className="text-center max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 sm:mb-20">
          <h2 
            id="contact-title"
            className="text-2xl md:text-4xl xl:text-5xl font-bold tracking-tight mb-4 opacity-0"
            role="heading"
            aria-level="2"
          >
            LET&apos;S <span className="bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">CONNECT</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-slate-400 text-lg font-light mt-6 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate? Let&apos;s build something amazing together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 sm:mb-32" role="list" aria-label="Contact methods">
          {CONTACTS.map((contact, index) => (
            <ContactCard key={contact.name} {...contact} index={index} />
          ))}
        </div>

        {/* Footer Section */}
        <footer className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent h-px"></div>
          <div className="pt-12 pb-8">
            <div className="flex flex-col items-center space-y-6">
              <div className="text-center">
                <p className="text-slate-300 text-base font-medium tracking-wide">
                  © 2025 <span className="text-cyan-300 font-semibold">Muhammad Farkhan Maulana</span>
                </p>
                <p className="text-slate-400 text-sm font-light mt-2">
                  Crafted with passion, precision, and clean code
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-slate-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-light">Available for opportunities</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-slate-600"></div>
                <div className="text-slate-500 font-light">
                  Jakarta, Indonesia
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Section>
  );
}