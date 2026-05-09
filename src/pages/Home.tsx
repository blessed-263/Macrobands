import { motion } from 'motion/react';
import { ArrowRight, Globe, ShieldCheck, Box } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { TextReveal } from '../components/TextReveal';
import { Link } from 'react-router-dom';
import { ParallaxImage } from '../components/ParallaxImage';
import { ImageReveal } from '../components/ImageReveal';
import { images } from '../assets/images';

export default function Home() {
  return (
    <div className="flex flex-col -mt-[88px]">
      {/* Hero Section - Split Editorial Layout */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 flex flex-col justify-center max-w-7xl mx-auto min-h-[100vh] lg:min-h-[95vh] overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 xl:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-[48%] flex flex-col items-start text-left text-[#09090B] z-10 order-2 lg:order-1 mt-10 lg:mt-0">
            <FadeIn direction="up" delay={0.2}>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-[#38BDF8] mb-6 md:mb-8 flex items-center gap-4">
                Southern Africa Customs & Logistics
              </p>
            </FadeIn>
            
            <TextReveal delay={0.4}>
              <h1 className="font-syne tracking-tight text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] font-light text-balance text-[#09090B]">
                Mastering the <br className="hidden md:block" />
                <span className="italic opacity-90 text-[#38BDF8] pr-2">flow</span> 
                <span className="inline-block">of trade.</span>
              </h1>
            </TextReveal>
            
            <FadeIn direction="up" delay={0.6}>
              <p className="mt-8 text-base md:text-xl opacity-90 max-w-xl leading-[1.8] font-light text-[#09090B]">
                Macrobands provides bespoke customs clearing and precision logistics between South Africa and Zimbabwe. We move what matters, seamlessly.
              </p>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.8}>
              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Link to="/services" className="px-8 py-4 bg-[#09090B] text-[#FAFAFA] text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#38BDF8] hover:text-[#FAFAFA] transition-colors w-full sm:w-auto text-center border border-[#09090B]">
                  Explore Services
                </Link>
                <Link to="/services" className="flex items-center space-x-3 text-xs uppercase tracking-[0.2em] transition-colors group cursor-pointer text-[#09090B] hover:text-[#38BDF8]">
                  <span>Our Approach</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Prominent Hero Image */}
          <div className="w-full lg:w-[52%] order-1 lg:order-2 relative mt-8 lg:mt-0">
            <FadeIn delay={0.4} direction="left" className="w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] relative z-10">
              <ImageReveal 
                src={images.heroLogistics}
                alt="Heavy freight trucks on a highway at dusk, representing regional road logistics"
                className="w-full h-full rounded-sm shadow-2xl shadow-gray-200"
              />
              
              {/* Floating animated badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 md:-bottom-12 -left-4 md:-left-12 bg-white p-6 shadow-xl border border-[#09090B]/5 rounded-sm z-20 hidden sm:block"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#38BDF8] mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse"></span>
                  Live Monitoring
                </p>
                <p className="font-syne text-xl font-medium tracking-tight">100% Precision</p>
              </motion.div>
            </FadeIn>

            {/* Background design elements */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#38BDF8]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#0284C7]/5 rounded-full blur-3xl z-0 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="bg-[#FAFAFA] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {[
            { label: 'SADC Nations', value: '2' },
            { label: 'Clearance Rate', value: '99.8%' },
            { label: 'Border Posts', value: '8+' },
            { label: 'Years of Excellence', value: '15' }
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 0.15} direction="up" className={`flex flex-col space-y-3 ${i !== 0 ? 'md:pl-8' : ''}`}>
              <span className="font-syne tracking-tight text-4xl md:text-5xl font-light text-[#38BDF8]">{stat.value}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] opacity-50 text-[#09090B]">{stat.label}</span>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Visual Break */}
      <section className="w-full h-[40vh] md:h-[60vh] overflow-hidden">
        <ParallaxImage 
          src={images.containerTerminal} 
          alt="Logistics network container terminal"
          className="w-full h-full"
        />
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <FadeIn direction="up">
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#38BDF8] mb-6">Capabilities</p>
            </FadeIn>
            <TextReveal delay={0.1}>
              <h2 className="font-syne tracking-tight text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#09090B]">
                Precision in every phase <br className="hidden md:block"/>
                of <span className="italic text-[#38BDF8]">transit</span>
              </h2>
            </TextReveal>
          </div>
          <FadeIn direction="left" delay={0.2}>
            <Link to="/services" className="text-xs uppercase tracking-[0.2em] transition-colors w-max cursor-pointer text-[#09090B] hover:text-[#38BDF8]">
              View All Services
            </Link>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-16">
          {[
            { 
              title: "Customs Brokering", 
              desc: "Navigating complex cross-border tariffs and SARS/ZIMRA compliance with immaculate precision, ensuring delays at Beitbridge are mathematically mitigated.",
              icon: <ShieldCheck strokeWidth={1} size={32} className="mb-6 opacity-90" />,
              image: images.homeCustomsBrokering
            },
            { 
              title: "Road Freight", 
              desc: "Deploying optimized routing across Southern Africa to deliver assets with reliability and speed on regional road networks.",
              icon: <Globe strokeWidth={1} size={32} className="mb-6 opacity-90" />,
              image: images.homeRoadFreight
            },
            { 
              title: "Supply Chain Strategy", 
              desc: "Designing resilient operations for your regional supply chain, turning cross-border bottlenecks into competitive advantages.",
              icon: <Box strokeWidth={1} size={32} className="mb-6 opacity-90" />,
              image: images.homeSupplyChain
            }
          ].map((service, i) => (
            <FadeIn
              key={i}
              direction="up"
              delay={i * 0.2}
              className="flex flex-col group"
            >
              <div className="w-full aspect-[4/3] mb-8 overflow-hidden rounded-sm">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="text-[#38BDF8] transform group-hover:-translate-y-1 transition-transform duration-500 ease-out">{service.icon}</div>
              <h3 className="text-lg font-medium mb-4 text-[#09090B]">{service.title}</h3>
              <p className="text-sm opacity-[0.85] leading-[1.8] font-light text-[#09090B]">{service.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Feature Section / Editorial Layout */}
      <section className="py-24 bg-white text-[#09090B] dark-section overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative aspect-[3/4] max-h-[700px]">
            <ImageReveal 
              src={images.philosophyArchitecture} 
              alt="Structured interior architecture representing disciplined logistics"
              className="w-full h-full rounded-sm"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-10 lg:pl-12">
            <FadeIn direction="up">
              <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#38BDF8]">Our Philosophy</p>
            </FadeIn>
            <TextReveal delay={0.1}>
              <h2 className="font-syne tracking-tight text-4xl md:text-6xl font-light leading-tight text-balance text-[#09090B]">
                Structure creates <br/>
                <span className="italic opacity-90 text-[#38BDF8]">freedom.</span>
              </h2>
            </TextReveal>
            <FadeIn direction="up" delay={0.2} className="space-y-6 opacity-[0.85] font-light text-sm md:text-base leading-[1.8] max-w-md text-[#09090B]">
              <p>
                In the complex environment of Southern African trade, friction is the enemy of progress. We believe that elegant logistical structures and flawless customs execution between South Africa and Zimbabwe provide the ultimate freedom for modern businesses.
              </p>
              <p>
                No border delays. No missing documents. Just absolute clarity and forward momentum across our borders.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
