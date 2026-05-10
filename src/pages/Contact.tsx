import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { TextReveal } from '../components/TextReveal';
import { ParallaxImage } from '../components/ParallaxImage';
import { images } from '../assets/images';
import {
  INQUIRY_EMAIL,
  mailtoInquiryHref,
  TEL_CHIRUNDU,
  TEL_MACROBANDS_ZW,
  TEL_MUTARE_A,
  TEL_MUTARE_B,
  TEL_NYAMAPANDA,
  whatsappInquiryHref,
  WHATSAPP_MACROBANDS_DIGITS,
} from '../constants/contacts';
import { HQ_ADDRESS_LINES } from '../constants/site';

export default function Contact() {
  const [hubLinesOpen, setHubLinesOpen] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <section className="w-full h-[40vh] md:h-[50vh] overflow-hidden -mt-[88px] relative z-0">
        <ParallaxImage 
          src={images.contactOffice} 
          alt="Macrobands logistics along the SA–Zimbabwe corridor via Beitbridge"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/60 to-transparent z-10" />
      </section>

      <div className="pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10 -mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Col */}
          <div>
            <FadeIn direction="up">
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#A78BFA] mb-6 ">
                Contact
              </p>
            </FadeIn>
            <TextReveal delay={0.1}>
              <h1 className="font-syne tracking-tight text-5xl md:text-7xl font-light leading-tight text-balance mb-8 text-[#09090B] ">
                Begin the dialogue.
              </h1>
            </TextReveal>
            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg opacity-[0.85] font-light leading-[1.8] max-w-md mb-16 text-[#09090B]">
                Headquartered at Impala Extension in Beitbridge, we coordinate staging at Musina and clearance across Chirundu, Nyamapanda, Mutare, and Harare—clear movement across the SA–Zimbabwe corridor.
              </p>
            </FadeIn>

            <div className="space-y-10">
              <FadeIn direction="up" delay={0.28} className="flex items-start space-x-6">
                <MapPin className="text-[#A78BFA] shrink-0" strokeWidth={1} size={28} />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Address · Beitbridge (HQ)</p>
                  {HQ_ADDRESS_LINES.map((line) => (
                    <p key={line} className="font-syne tracking-tight text-xl md:text-2xl font-light leading-snug">
                      {line}
                    </p>
                  ))}
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3} className="flex items-start space-x-6">
                <Mail className="text-[#A78BFA] shrink-0" strokeWidth={1} size={28} />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Email Inquiries</p>
                  <a
                    href={mailtoInquiryHref()}
                    className="font-syne tracking-tight text-2xl font-light hover:text-[#A78BFA] transition-colors"
                  >
                    {INQUIRY_EMAIL}
                  </a>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.35} className="rounded-sm border border-[#09090B]/10 bg-[#FAFAFA]/80">
                <button
                  type="button"
                  id="hub-lines-toggle"
                  aria-expanded={hubLinesOpen}
                  aria-controls="hub-lines-panel"
                  onClick={() => setHubLinesOpen((o) => !o)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-4 text-left transition-colors hover:bg-white/90 md:px-5 md:py-4"
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <Phone className="text-[#A78BFA] shrink-0" strokeWidth={1} size={24} />
                    <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#09090B]/75">
                      Hub phone lines &amp; WhatsApp
                    </span>
                  </span>
                  <ChevronDown
                    className={`shrink-0 text-[#09090B]/45 transition-transform duration-200 ${hubLinesOpen ? 'rotate-180' : ''}`}
                    size={22}
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </button>

                <div
                  id="hub-lines-panel"
                  role="region"
                  aria-labelledby="hub-lines-toggle"
                  hidden={!hubLinesOpen}
                  className="border-t border-[#09090B]/08 px-4 pb-6 pt-2 md:px-5"
                >
                  <div className="space-y-8 pt-6">
                    <div className="flex items-start gap-5">
                      <Phone className="text-[#A78BFA] mt-0.5 shrink-0 opacity-70" strokeWidth={1} size={22} />
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Beitbridge · Mobile</p>
                        <a
                          href={TEL_MACROBANDS_ZW}
                          className="font-syne tracking-tight text-xl md:text-2xl font-light hover:text-[#A78BFA] transition-colors"
                        >
                          +263 77 255 7785
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <Phone className="text-[#A78BFA] mt-0.5 shrink-0 opacity-70" strokeWidth={1} size={22} />
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Chirundu · Mobile</p>
                        <a
                          href={TEL_CHIRUNDU}
                          className="font-syne tracking-tight text-xl md:text-2xl font-light hover:text-[#A78BFA] transition-colors"
                        >
                          +263 78 890 7015
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <Phone className="text-[#A78BFA] mt-0.5 shrink-0 opacity-70" strokeWidth={1} size={22} />
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Nyamapanda · Mobile</p>
                        <a
                          href={TEL_NYAMAPANDA}
                          className="font-syne tracking-tight text-xl md:text-2xl font-light hover:text-[#A78BFA] transition-colors"
                        >
                          +263 78 868 5806
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <Phone className="text-[#A78BFA] mt-0.5 shrink-0 opacity-70" strokeWidth={1} size={22} />
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Mutare · Mobile</p>
                        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-2">
                          <a
                            href={TEL_MUTARE_A}
                            className="font-syne tracking-tight text-lg md:text-xl font-light hover:text-[#A78BFA] transition-colors"
                          >
                            +263 71 932 0094
                          </a>
                          <span className="hidden sm:inline text-[#09090B]/30 font-light">/</span>
                          <a
                            href={TEL_MUTARE_B}
                            className="font-syne tracking-tight text-lg md:text-xl font-light hover:text-[#A78BFA] transition-colors"
                          >
                            +263 77 432 0094
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <Phone className="text-[#A78BFA] mt-0.5 shrink-0 opacity-70" strokeWidth={1} size={22} />
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">South Africa · Mobile</p>
                        <a
                          href="tel:+27652442470"
                          className="font-syne tracking-tight text-xl md:text-2xl font-light hover:text-[#A78BFA] transition-colors"
                        >
                          +27 65 244 2470
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-5">
                      <MessageCircle className="text-[#A78BFA] mt-0.5 shrink-0 opacity-70" strokeWidth={1} size={22} />
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Zimbabwe · WhatsApp</p>
                        <a
                          href={whatsappInquiryHref(WHATSAPP_MACROBANDS_DIGITS)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-syne tracking-tight text-xl md:text-2xl font-light hover:text-[#A78BFA] transition-colors"
                        >
                          +263 77 255 7785
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Col — mailto & WhatsApp (client-side only, no backend) */}
          <FadeIn
            direction="left"
            delay={0.3}
            className="bg-white p-10 md:p-16 rounded-sm shadow-2xl shadow-gray-200 border border-[#09090B]/5 relative overflow-hidden"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#A78BFA]/[0.06] to-transparent" />
            <div className="relative z-10">
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#A78BFA] mb-4">
                Start an inquiry
              </p>
              <h3 className="font-syne tracking-tight text-3xl font-light mb-4 text-[#09090B]">
                Reach us directly
              </h3>
              <p className="text-sm font-light leading-relaxed text-[#09090B]/75 mb-10 max-w-sm">
                Use your own email or WhatsApp—no web form or server. Your message opens ready to edit,
                then sends from your apps as usual.
              </p>

              <div className="flex flex-col gap-4">
                <a
                  href={mailtoInquiryHref()}
                  className="group flex items-center justify-between gap-4 rounded-sm border border-[#09090B]/15 bg-[#FAFAFA] px-5 py-4 transition-colors hover:border-[#A78BFA]/60 hover:bg-white"
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#09090B]/10 bg-white">
                      <Mail className="text-[#A78BFA]" strokeWidth={1.25} size={20} />
                    </span>
                    <span className="flex flex-col text-left min-w-0">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#09090B]/50 font-medium">
                        Email the desk
                      </span>
                      <span className="font-syne text-lg font-light tracking-tight text-[#09090B] truncate">
                        inquiries@macrobands.co.za
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="shrink-0 text-[#09090B]/35 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#A78BFA]"
                    size={20}
                    strokeWidth={1.25}
                  />
                </a>

                <a
                  href={whatsappInquiryHref(WHATSAPP_MACROBANDS_DIGITS)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-sm border border-[#25D366]/35 bg-[#25D366]/[0.06] px-5 py-4 transition-colors hover:border-[#25D366]/70 hover:bg-[#25D366]/10"
                >
                  <span className="flex items-center gap-3 min-w-0">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#25D366]/30 bg-white">
                      <MessageCircle className="text-[#20bd5a]" strokeWidth={1.25} size={20} />
                    </span>
                    <span className="flex flex-col text-left min-w-0">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#09090B]/50 font-medium">
                        WhatsApp
                      </span>
                      <span className="font-syne text-lg font-light tracking-tight text-[#09090B]">
                        Chat with operations
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="shrink-0 text-[#09090B]/35 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#25D366]"
                    size={20}
                    strokeWidth={1.25}
                  />
                </a>
              </div>

              <p className="mt-10 text-xs font-light leading-relaxed text-[#09090B]/45 max-w-sm">
                Response times depend on corridor and cargo complexity; urgent border matters are best
                flagged in the first line of your message.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
