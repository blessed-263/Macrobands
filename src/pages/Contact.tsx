import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { TextReveal } from '../components/TextReveal';
import { ParallaxImage } from '../components/ParallaxImage';
import { images } from '../assets/images';

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      {/* Banner */}
      <section className="w-full h-[40vh] md:h-[50vh] overflow-hidden -mt-[88px] relative z-0">
        <ParallaxImage 
          src={images.contactOffice} 
          alt="Modern corporate office interior"
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
                Our team is available to discuss customs clearing and freight options for your regional supply chain.
              </p>
            </FadeIn>

            <div className="space-y-10">
              <FadeIn direction="up" delay={0.3} className="flex items-start space-x-6">
                <Mail className="text-[#A78BFA] shrink-0" strokeWidth={1} size={28} />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Email Inquiries</p>
                  <p className="font-syne tracking-tight text-2xl font-light">inquiries@macrobands.co.za</p>
                </div>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.4} className="flex items-start space-x-6">
                <Phone className="text-[#A78BFA] shrink-0" strokeWidth={1} size={28} />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Regional Helpdesk</p>
                  <p className="font-syne tracking-tight text-2xl font-light">+27 (11) 555-0199</p>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.5} className="flex items-start space-x-6">
                <MapPin className="text-[#A78BFA] shrink-0 mt-1" strokeWidth={1} size={28} />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-2">Headquarters</p>
                  <p className="font-light leading-[1.8] max-w-[200px] text-lg text-[#09090B]">
                    Sandton City Office Tower<br/>
                    Johannesburg, 2196<br/>
                    South Africa
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* Right Col - Form */}
          <FadeIn 
            direction="left"
            delay={0.3}
            className="bg-white p-10 md:p-16 rounded-sm shadow-2xl shadow-gray-200 border border-[#09090B]/5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent pointer-events-none"></div>
            <h3 className="relative z-10 font-syne tracking-tight text-3xl font-light mb-8 text-[#09090B]">Send a message</h3>
            <form className="relative z-10 space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-medium">Full Name</label>
                <input type="text" className="w-full border border-[#09090B]/20 p-3 rounded-sm bg-transparent outline-none focus:border-[#38BDF8] transition-colors font-light text-lg" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-medium ml-1">Corporate Email</label>
                <input type="email" className="w-full border border-[#09090B]/20 p-3 rounded-sm bg-transparent outline-none focus:border-[#38BDF8] transition-colors font-light text-lg" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-medium ml-1">Inquiry Topic</label>
                <select className="w-full border border-[#09090B]/20 p-3 rounded-sm bg-white outline-none focus:border-[#38BDF8] transition-colors font-light text-lg appearance-none cursor-pointer">
                  <option>Customs Brokering</option>
                  <option>Ocean Freight</option>
                  <option>Air Cargo</option>
                  <option>Supply Chain Auditing</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2 pt-4">
                <label className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-medium ml-1">Message Details</label>
                <textarea rows={4} className="w-full border border-[#09090B]/20 p-3 rounded-sm bg-transparent outline-none focus:border-[#38BDF8] transition-colors font-light text-lg resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-[#09090B] text-[#FAFAFA] py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#A78BFA] hover:text-[#09090B] transition-colors duration-300">
                Submit Inquiry
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
