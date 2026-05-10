import { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useOutlet, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  TEL_MACROBANDS_ZW,
  WHATSAPP_MACROBANDS_DIGITS,
  WHATSAPP_WEB_DESIGNER_DIGITS,
  waMeUrl,
} from '../constants/contacts';
import { CORRIDOR_HUB_CITIES, HQ_ADDRESS_LINES } from '../constants/site';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentOutlet = useOutlet();

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Regional Network', path: '/regional-network' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#09090B] selection:bg-[#38BDF8] selection:text-white flex flex-col">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-[#FAFAFA]/90 backdrop-blur-md py-4 text-[#09090B]'
            : 'bg-transparent py-6 text-[#09090B]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="font-syne tracking-tight text-lg sm:text-xl md:text-2xl font-medium tracking-wide max-w-[85vw] sm:max-w-none leading-tight">
            Macrobands Pvt Ltd
          </Link>
          
          <div className="hidden md:flex space-x-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-opacity ${
                  location.pathname === link.path ? 'opacity-100 text-[#38BDF8]' : 'opacity-[0.85] hover:opacity-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAFAFA] pt-24 px-6 md:hidden">
          <div className="flex flex-col space-y-8">
            <Link to="/" className="text-left font-syne tracking-tight text-4xl font-light hover:italic transition-all duration-300">Home</Link>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-left font-syne tracking-tight text-4xl font-light hover:italic transition-all duration-300 ${
                  location.pathname === link.path ? 'text-[#38BDF8]' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col overflow-x-hidden pt-[88px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-grow flex flex-col"
          >
            {currentOutlet}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-[#FAFAFA] pt-32 pb-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
            <div className="md:col-span-2">
              <div className="font-syne tracking-tight text-4xl mb-6 font-light">Macrobands Pvt Ltd</div>
              <p className="text-base leading-[1.8] opacity-[0.85] max-w-sm font-light">
                Premium clearing and forwarding solutions for a frictionless world economy.
              </p>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium mb-6 opacity-40">
                Headquarters
              </h4>
              <ul className="space-y-1.5 text-sm opacity-90 font-light mb-8">
                {HQ_ADDRESS_LINES.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium mb-4 opacity-40">
                Corridor hubs
              </h4>
              <ul className="space-y-3 text-sm opacity-90 font-light">
                {CORRIDOR_HUB_CITIES.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-medium mb-6 opacity-40">Contact</h4>
              <ul className="space-y-3 text-sm opacity-90 font-light">
                <li>inquiries@macrobands.co.za</li>
                <li>
                  <a href={TEL_MACROBANDS_ZW} className="hover:opacity-100 transition-opacity">
                    +263 77 255 7785
                  </a>
                  <span className="opacity-60"> · Beitbridge · Mobile</span>
                </li>
                <li>
                  <a href="tel:+27652442470" className="hover:opacity-100 transition-opacity">
                    +27 65 244 2470
                  </a>
                  <span className="opacity-60"> · South Africa</span>
                </li>
                <li>
                  <a
                    href={waMeUrl(WHATSAPP_MACROBANDS_DIGITS)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-100 transition-opacity"
                  >
                    +263 77 255 7785
                  </a>
                  <span className="opacity-60"> · Zimbabwe · WhatsApp</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-xs font-light gap-6 md:gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 opacity-50">
              <p>&copy; {new Date().getFullYear()} Macrobands Pvt Ltd. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="hover:opacity-100 transition-opacity uppercase tracking-wider">
                  Privacy
                </Link>
                <Link to="/terms" className="hover:opacity-100 transition-opacity uppercase tracking-wider">
                  Terms
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 bg-white px-5 py-2.5 rounded-full border border-[#09090B]/10 shadow-sm text-xs">
              <span className="opacity-80 font-medium text-[#09090B]">Need a website like this?</span>
              <a
                href={waMeUrl(WHATSAPP_WEB_DESIGNER_DIGITS)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp the web designer"
                className="text-[#25D366] font-medium hover:text-[#20bd5a] transition-colors inline-flex items-center gap-1.5 bg-[#25D366]/10 px-3 py-1 rounded-full"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
                WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={waMeUrl(WHATSAPP_MACROBANDS_DIGITS)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 z-50 flex items-center justify-center group focus:outline-none focus:ring-4 focus:ring-green-300"
        aria-label="WhatsApp Macrobands +263772557785"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.059-.173-.297-.018-.458.13-.606.134-.133-.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}
