import { useState, useEffect, useCallback } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLocation, useOutlet, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

import { dur, easePage } from '../constants/motion';
import {
  INQUIRY_EMAIL,
  INQUIRY_EMAIL_ALT,
  mailtoInquiryHref,
  TEL_CHIRUNDU,
  TEL_MACROBANDS_ZW,
  TEL_MUTARE_A,
  TEL_MUTARE_B,
  TEL_NYAMAPANDA,
  WHATSAPP_MACROBANDS_DIGITS,
  WHATSAPP_WEB_DESIGNER_DIGITS,
  waMeUrl,
} from '../constants/contacts';
import { CORRIDOR_HUB_CITIES, HQ_ADDRESS_LINES } from '../constants/site';
import { canonicalPath, seoForPath } from '../constants/seo';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [footerDropHq, setFooterDropHq] = useState(false);
  const [footerDropHubs, setFooterDropHubs] = useState(false);
  const [footerDropContact, setFooterDropContact] = useState(false);
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

  useEffect(() => {
    const path = location.pathname;
    const { title, description } = seoForPath(path);
    document.title = title;

    let metaDesc = document.head.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    let metaRobots = document.head.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', 'index, follow, max-image-preview:large');

    const canonical = canonicalPath(path);
    let linkCanon = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!linkCanon) {
      linkCanon = document.createElement('link');
      linkCanon.rel = 'canonical';
      document.head.appendChild(linkCanon);
    }
    linkCanon.href = canonical;

    const og = (property: string, content: string) => {
      let el = document.head.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    og('og:type', 'website');
    og('og:locale', 'en_ZA');
    og('og:url', canonical);
    og('og:title', title);
    og('og:description', description);
    og('og:site_name', 'Macrobands Pvt Ltd');

    let twCard = document.head.querySelector('meta[name="twitter:card"]');
    if (!twCard) {
      twCard = document.createElement('meta');
      twCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twCard);
    }
    twCard.setAttribute('content', 'summary_large_image');
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: dur.page, ease: easePage }}
            className="flex-grow flex flex-col"
          >
            {currentOutlet}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-[#FAFAFA] pt-32 pb-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10 lg:gap-14 mb-24">
            <div className="md:col-span-2">
              <div className="font-syne tracking-tight text-4xl mb-6 font-light">Macrobands Pvt Ltd</div>
              <p className="text-base leading-[1.8] opacity-[0.85] max-w-sm font-light">
                Premium clearing and forwarding solutions for a frictionless world economy.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="overflow-hidden rounded-xl border border-[#09090B]/[0.08] bg-white shadow-[0_2px_24px_-12px_rgba(9,9,11,0.12)] divide-y divide-[#09090B]/[0.06]">
                <div>
                  <button
                    type="button"
                    id="footer-hq-toggle"
                    aria-expanded={footerDropHq}
                    aria-controls="footer-hq-panel"
                    onClick={() => setFooterDropHq((o) => !o)}
                    className="flex w-full min-h-[3rem] cursor-pointer items-center justify-between gap-4 px-5 py-3 text-left transition-colors hover:bg-[#FAFAFA]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#09090B]/10"
                  >
                    <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-[#09090B]/45">
                      Headquarters
                    </span>
                    <ChevronDown
                      className={`shrink-0 text-[#09090B]/30 transition-transform duration-300 ease-out ${footerDropHq ? 'rotate-180' : ''}`}
                      size={17}
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </button>
                  <div
                    id="footer-hq-panel"
                    role="region"
                    aria-labelledby="footer-hq-toggle"
                    hidden={!footerDropHq}
                    className="border-t border-[#09090B]/[0.05] bg-[#FAFAFA]/50 px-5 pb-5 pt-3"
                  >
                    <ul className="space-y-1 text-sm leading-relaxed text-[#09090B]/85 font-light">
                      {HQ_ADDRESS_LINES.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    id="footer-hubs-toggle"
                    aria-expanded={footerDropHubs}
                    aria-controls="footer-hubs-panel"
                    onClick={() => setFooterDropHubs((o) => !o)}
                    className="flex w-full min-h-[3rem] cursor-pointer items-center justify-between gap-4 px-5 py-3 text-left transition-colors hover:bg-[#FAFAFA]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#09090B]/10"
                  >
                    <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-[#09090B]/45">
                      Corridor hubs
                    </span>
                    <ChevronDown
                      className={`shrink-0 text-[#09090B]/30 transition-transform duration-300 ease-out ${footerDropHubs ? 'rotate-180' : ''}`}
                      size={17}
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </button>
                  <div
                    id="footer-hubs-panel"
                    role="region"
                    aria-labelledby="footer-hubs-toggle"
                    hidden={!footerDropHubs}
                    className="border-t border-[#09090B]/[0.05] bg-[#FAFAFA]/50 px-5 pb-5 pt-3"
                  >
                    <ul className="columns-1 text-sm text-[#09090B]/85 font-light sm:columns-2 sm:gap-x-8">
                      {CORRIDOR_HUB_CITIES.map((city) => (
                        <li key={city} className="break-inside-avoid py-1">
                          {city}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    id="footer-contact-toggle"
                    aria-expanded={footerDropContact}
                    aria-controls="footer-contact-panel"
                    onClick={() => setFooterDropContact((o) => !o)}
                    className="flex w-full min-h-[3rem] cursor-pointer items-center justify-between gap-4 px-5 py-3 text-left transition-colors hover:bg-[#FAFAFA]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#09090B]/10"
                  >
                    <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-[#09090B]/45">
                      Contact
                    </span>
                    <ChevronDown
                      className={`shrink-0 text-[#09090B]/30 transition-transform duration-300 ease-out ${footerDropContact ? 'rotate-180' : ''}`}
                      size={17}
                      strokeWidth={1.5}
                      aria-hidden
                    />
                  </button>
                  <div
                    id="footer-contact-panel"
                    role="region"
                    aria-labelledby="footer-contact-toggle"
                    hidden={!footerDropContact}
                    className="border-t border-[#09090B]/[0.05] bg-[#FAFAFA]/50 px-5 pb-5 pt-3"
                  >
                    <ul className="space-y-3.5 text-sm text-[#09090B]/85 font-light leading-snug">
                      <li>
                        <a
                          href={mailtoInquiryHref()}
                          className="underline decoration-[#09090B]/15 underline-offset-4 hover:decoration-[#09090B]/40 transition-colors"
                        >
                          {INQUIRY_EMAIL}
                        </a>
                      </li>
                      <li>
                        <a
                          href={`mailto:${INQUIRY_EMAIL_ALT}`}
                          className="underline decoration-[#09090B]/15 underline-offset-4 hover:decoration-[#09090B]/40 transition-colors"
                        >
                          {INQUIRY_EMAIL_ALT}
                        </a>
                      </li>
                      <li>
                        <a href={TEL_MACROBANDS_ZW} className="hover:text-[#09090B] transition-colors">
                          +263 77 255 7785
                        </a>
                        <span className="text-[#09090B]/45"> · Beitbridge · Mobile</span>
                      </li>
                      <li>
                        <a href={TEL_CHIRUNDU} className="hover:text-[#09090B] transition-colors">
                          +263 78 890 7015
                        </a>
                        <span className="text-[#09090B]/45"> · Chirundu · Mobile</span>
                      </li>
                      <li>
                        <a href={TEL_NYAMAPANDA} className="hover:text-[#09090B] transition-colors">
                          +263 78 868 5806
                        </a>
                        <span className="text-[#09090B]/45"> · Nyamapanda · Mobile</span>
                      </li>
                      <li>
                        <a href={TEL_MUTARE_A} className="hover:text-[#09090B] transition-colors">
                          +263 71 932 0094
                        </a>
                        <span className="text-[#09090B]/35 mx-0.5">/</span>
                        <a href={TEL_MUTARE_B} className="hover:text-[#09090B] transition-colors">
                          +263 77 432 0094
                        </a>
                        <span className="text-[#09090B]/45"> · Mutare · Mobile</span>
                      </li>
                      <li>
                        <a href="tel:+27652442470" className="hover:text-[#09090B] transition-colors">
                          +27 65 244 2470
                        </a>
                        <span className="text-[#09090B]/45"> · South Africa</span>
                      </li>
                      <li>
                        <a
                          href={waMeUrl(WHATSAPP_MACROBANDS_DIGITS)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#16a34a] transition-colors"
                        >
                          +263 77 255 7785
                        </a>
                        <span className="text-[#09090B]/45"> · Zimbabwe · WhatsApp</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
