import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { TextReveal } from '../components/TextReveal';
import { ImageReveal } from '../components/ImageReveal';
import { images } from '../assets/images';

export default function Services() {
  const services = [
    {
      title: "Cross-Border Customs Clearing",
      description: "Our licensed brokers navigate the intricacies of SARS and ZIMRA trade regulations, ensuring swift customs clearance at Beitbridge and other key transit points. We transform regulatory hurdles into streamlined operations, mitigating risk and avoiding costly delays.",
      image: images.serviceCustomsClearing,
      features: ["Tariff Classification & Compliance", "SARS & ZIMRA Navigations", "Electronic Data Interchange (EDI)", "Post-Entry Audits"]
    },
    {
      title: "Regional Road Freight",
      description: "We command vast capacity across major Southern African logistics corridors. Our road freight operations offer the perfect balance of cost-efficiency and reliable transit times for large-scale logistics between South Africa and Zimbabwe.",
      image: images.serviceRoadFreight,
      features: ["Full Truck Load (FTL)", "Less-than-Truck Load (LTL)", "Abnormal & Breakbulk Cargo", "Refrigerated Transit"]
    },
    {
      title: "Expedited Solutions",
      description: "When time is the ultimate currency. Our expedited freight solutions guarantee secure transport and priority border clearance for high-value and time-sensitive commodities.",
      image: images.serviceExpedited,
      features: ["Dedicated Fast-Track Vehicles", "Priority Customs Handling", "Door-to-Door Delivery", "High-Security Transit"]
    }
  ];

  return (
    <div className="pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="max-w-3xl mb-24">
        <FadeIn direction="up">
          <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#FB7185] mb-6">
            Our Capabilities
          </p>
        </FadeIn>
        <TextReveal delay={0.1}>
          <h1 className="font-syne tracking-tight text-5xl md:text-7xl font-light leading-tight text-balance mb-8 text-[#09090B]">
            Precision across the <span className="italic">supply chain.</span>
          </h1>
        </TextReveal>
        <FadeIn direction="up" delay={0.2}>
          <p className="text-lg opacity-[0.85] font-light leading-[1.8] max-w-2xl text-[#09090B]">
            We don't merely move goods; we engineer sophisticated pathways through the complexities of cross-border trade in Southern Africa.
          </p>
        </FadeIn>
      </div>

      <div className="space-y-32 overflow-hidden">
        {services.map((service, index) => (
          <FadeIn 
            key={index}
            direction={index % 2 === 0 ? "left" : "right"}
            delay={0.1}
            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
          >
            <div className="w-full lg:w-1/2 group relative">
              <ImageReveal 
                src={service.image} 
                alt={service.title} 
                className="w-full aspect-[4/3] rounded-sm group-hover:opacity-90 transition-opacity duration-300"
                revealColor="#F43F5E"
              />
            </div>
            
            <div className="w-full lg:w-1/2 space-y-8">
              <TextReveal>
                <h2 className="font-syne tracking-tight text-3xl md:text-5xl font-light text-[#09090B]">{service.title}</h2>
              </TextReveal>
              <p className="text-base font-light opacity-[0.85] leading-[1.8] text-[#09090B]">
                {service.description}
              </p>
              
              <ul className="space-y-4 pt-4">
                {service.features.map((feature, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                    className="flex items-center space-x-4 text-sm font-light"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FB7185]"></span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
      
      {/* CTA */}
      <FadeIn direction="up">
        <div className="mt-40 text-center flex flex-col items-center bg-white text-[#09090B] py-24 px-6 rounded-sm dark-section relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
            style={{ backgroundImage: `url(${images.heroLogistics})` }}
            aria-hidden
          />
          <TextReveal>
            <h2 className="relative z-10 font-syne tracking-tight text-3xl md:text-5xl font-light mb-6 text-balance text-[#09090B]">Ready to elevate your logistics?</h2>
          </TextReveal>
          <p className="relative z-10 opacity-[0.85] font-light max-w-xl mx-auto mb-10 text-[#09090B]">
            Connect with our team to plan clearance and freight that fits your lanes and timelines.
          </p>
          <Link
            to="/contact"
            className="relative z-10 inline-flex items-center space-x-3 text-sm uppercase tracking-[0.2em] transition-colors group text-[#09090B] hover:text-[#F43F5E]"
          >
            <span>Schedule a consultation</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
