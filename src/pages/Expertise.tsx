import { motion } from 'motion/react';
import { FadeIn } from '../components/FadeIn';
import { TextReveal } from '../components/TextReveal';
import { ImageReveal } from '../components/ImageReveal';
import { images } from '../assets/images';

export default function Expertise() {
  const domains = [
    { title: "Mining & Heavy Equipment", img: images.expertiseMining },
    { title: "Agriculture", img: images.expertiseAgriculture },
    { title: "FMCG Retail", img: images.expertiseFmcg },
    { title: "Energy & Infrastructure", img: images.expertiseEnergy },
  ];

  return (
    <div className="pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32">
        <div className="lg:sticky relative lg:top-32 z-10">
          <FadeIn direction="up">
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#34D399] mb-6">
              Domain Expertise
            </p>
          </FadeIn>
          <TextReveal delay={0.1}>
            <h1 className="font-syne tracking-tight text-5xl md:text-7xl font-light leading-tight text-balance mb-8 text-[#09090B]">
              Deep sector expertise.
            </h1>
          </TextReveal>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-lg opacity-[0.85] font-light leading-[1.8] max-w-md text-[#09090B]">
              Different industries present entirely varying logistical environments. Our dedicated teams possess deep, vertical-specific knowledge to handle the most demanding supply chain requirements.
            </p>
          </FadeIn>
        </div>

        <div className="space-y-16">
          {domains.map((domain, i) => (
            <FadeIn 
              key={i}
              direction="up"
              delay={0.1}
              className="group cursor-pointer"
            >
              <div className="mb-6">
                <ImageReveal 
                  src={domain.img} 
                  alt={domain.title} 
                  className="w-full aspect-[16/9] rounded-sm group-hover:opacity-80 transition-opacity duration-300" 
                  revealColor="#10B981" 
                />
              </div>
              <h3 className="font-syne tracking-tight text-3xl font-light text-[#09090B]">{domain.title}</h3>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
