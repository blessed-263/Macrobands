import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { TextReveal } from '../components/TextReveal';
import { ImageReveal } from '../components/ImageReveal';
import { images, intrinsicDimensions } from '../assets/images';

/** One ratio & frame for every photo on this page (matches 1536×1024 banners). */
const servicePhotoShell =
  'relative w-full overflow-hidden rounded-sm bg-[#FAFAFA] shadow-[0_12px_42px_-14px_rgba(9,9,11,0.16)] ring-1 ring-[#09090B]/[0.07] aspect-[3/2]';

const viewportOnce = { once: true as const, amount: 0.22, margin: '-60px 0px' };

export default function Services() {
  const reduceMotion = useReducedMotion();

  const spring = {
    type: 'spring' as const,
    stiffness: reduceMotion ? 220 : 85,
    damping: reduceMotion ? 28 : 18,
    mass: reduceMotion ? 0.8 : 0.85,
  };

  const snap = {
    type: 'spring' as const,
    stiffness: reduceMotion ? 300 : 120,
    damping: reduceMotion ? 32 : 14,
  };

  const services = [
    {
      title: 'Cross-Border Customs Clearing',
      description:
        'Our licensed brokers navigate the intricacies of SARS and ZIMRA trade regulations, ensuring swift customs clearance at Beitbridge and other key transit points. We transform regulatory hurdles into streamlined operations, mitigating risk and avoiding costly delays.',
      image: images.serviceCustomsClearing,
      features: [
        'Tariff Classification & Compliance',
        'SARS & ZIMRA Navigations',
        'Electronic Data Interchange (EDI)',
        'Post-Entry Audits',
      ],
    },
    {
      title: 'Regional Road Freight',
      description:
        'We command vast capacity across major Southern African logistics corridors. Our road freight operations offer the perfect balance of cost-efficiency and reliable transit times for large-scale logistics between South Africa and Zimbabwe.',
      image: images.serviceRoadFreight,
      features: [
        'Full Truck Load (FTL)',
        'Less-than-Truck Load (LTL)',
        'Abnormal & Breakbulk Cargo',
        'Refrigerated Transit',
      ],
    },
    {
      title: 'Expedited Solutions',
      description:
        'When time is the ultimate currency. Our expedited freight solutions guarantee secure transport and priority border clearance for high-value and time-sensitive commodities.',
      image: images.serviceExpedited,
      features: [
        'Dedicated Fast-Track Vehicles',
        'Priority Customs Handling',
        'Door-to-Door Delivery',
        'High-Security Transit',
      ],
    },
  ];

  return (
    <div className="overflow-x-clip pt-24 pb-32">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
        {/* TEXT — intro */}
        <div className="mb-16 max-w-3xl md:mb-20">
          <FadeIn direction="up">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#FB7185]">Our Capabilities</p>
          </FadeIn>
          <TextReveal delay={0.1}>
            <h1 className="font-syne mb-8 text-5xl font-light leading-tight tracking-tight text-balance text-[#09090B] md:text-7xl">
              Precision across the <span className="italic">supply chain.</span>
            </h1>
          </TextReveal>
          <motion.p
            className="max-w-2xl text-lg font-light leading-[1.8] text-[#09090B] opacity-[0.85]"
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 0.85, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...spring, delay: 0.08 }}
          >
            We don&apos;t merely move goods; we engineer sophisticated pathways through the complexities of cross-border trade in
            Southern Africa.
          </motion.p>
        </div>

        {/* PIC — top banner */}
        <motion.div
          className="mb-16 w-full md:mb-20"
          initial={reduceMotion ? false : { opacity: 0, y: 56, scale: 0.94, rotateX: 6 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
          viewport={viewportOnce}
          transition={{ ...snap, delay: 0.05 }}
          style={{ perspective: 1400 }}
        >
          <div className={`${servicePhotoShell} mx-auto max-w-5xl`}>
            <ImageReveal
              src={images.servicesBanner}
              alt="Macrobands freight, customs, and corridor logistics"
              className="h-full w-full min-h-0"
              intrinsic={intrinsicDimensions.servicesBanner}
            />
          </div>
        </motion.div>

        {/* PIC ↔ TEXT × 3 (mobile: text first so banner + service images never stack back-to-back) */}
        <div className="space-y-24 lg:space-y-32">
          {services.map((service, index) => {
            const flip = index % 2 === 1;
            const imgX = flip ? 95 : -95;
            const txtX = flip ? -55 : 55;

            return (
              <motion.section
                key={service.title}
                className={`flex flex-col-reverse gap-10 lg:gap-16 ${flip ? 'lg:flex-row-reverse' : 'lg:flex-row'} lg:items-center`}
                style={{ perspective: 1600 }}
              >
                {/* PIC */}
                <motion.div
                  className="group w-full min-w-0 shrink-0 lg:w-[46%]"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: imgX,
                          rotateY: flip ? -11 : 11,
                          scale: 0.88,
                          filter: 'blur(16px)',
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    scale: 1,
                    filter: 'blur(0px)',
                  }}
                  viewport={viewportOnce}
                  transition={{ ...spring, delay: index * 0.06 }}
                >
                  <ImageReveal
                    src={service.image}
                    alt={service.title}
                    className={`${servicePhotoShell} transition-opacity duration-300 group-hover:opacity-95`}
                    revealColor="#F43F5E"
                  />
                </motion.div>

                {/* TEXT */}
                <motion.div
                  className="w-full min-w-0 space-y-8 lg:w-[54%]"
                  initial={reduceMotion ? false : { opacity: 0, x: txtX, y: 36 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ ...spring, delay: 0.12 + index * 0.05 }}
                >
                  <h2 className="font-syne text-3xl font-light tracking-tight text-[#09090B] md:text-5xl">{service.title}</h2>
                  <p className="text-base font-light leading-[1.8] text-[#09090B] opacity-[0.85]">{service.description}</p>

                  <ul className="space-y-4 pt-2">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={reduceMotion ? false : { opacity: 0, x: flip ? 24 : -24, scale: 0.96 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={viewportOnce}
                        transition={{
                          ...spring,
                          delay: 0.18 + i * 0.07 + index * 0.04,
                        }}
                        className="flex items-center space-x-4 text-sm font-light text-[#09090B]"
                      >
                        <motion.span
                          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#FB7185]"
                          initial={reduceMotion ? false : { scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={viewportOnce}
                          transition={{ ...snap, delay: 0.22 + i * 0.07 }}
                        />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.section>
            );
          })}
        </div>

        {/* PIC — mid strip */}
        <motion.div
          className="mt-20 w-full md:mt-28"
          initial={reduceMotion ? false : { opacity: 0, y: 70, scale: 0.9, skewY: 2 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, skewY: 0 }}
          viewport={viewportOnce}
          transition={{ ...snap, delay: 0.04 }}
        >
          <div className={`${servicePhotoShell} mx-auto max-w-5xl`}>
            <ImageReveal
              src={images.servicesMid}
              alt="Integrated logistics, warehousing, and corridor connectivity"
              className="h-full w-full min-h-0"
              intrinsic={intrinsicDimensions.servicesMid}
            />
          </div>
        </motion.div>

        {/* TEXT — CTA */}
        <motion.div
          className="dark-section relative mt-36 flex flex-col items-center overflow-hidden rounded-sm bg-white px-6 py-24 text-center text-[#09090B]"
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ ...spring }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-10 mix-blend-overlay"
            style={{ backgroundImage: `url(${images.heroLogistics})` }}
            aria-hidden
          />
          <motion.div
            initial={reduceMotion ? false : { scale: 0.97, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ ...snap, delay: 0.08 }}
            className="relative z-10"
          >
            <TextReveal>
              <h2 className="font-syne mb-6 text-3xl font-light tracking-tight text-balance text-[#09090B] md:text-5xl">
                Ready to elevate your logistics?
              </h2>
            </TextReveal>
            <p className="relative z-10 mx-auto mb-10 max-w-xl font-light opacity-[0.85] text-[#09090B]">
              Connect with our team to plan clearance and freight that fits your lanes and timelines.
            </p>
            <Link
              to="/contact"
              className="relative z-10 inline-flex items-center space-x-3 text-sm uppercase tracking-[0.2em] text-[#09090B] transition-colors group hover:text-[#F43F5E]"
            >
              <span>Schedule a consultation</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
