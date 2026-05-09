import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ParallaxImage({ src, alt, className = '' }: { src: string, alt: string, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-[-20%] w-[140%] h-[140%]">
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover scale-110 grayscale-[0.3]"
        />
      </motion.div>
    </div>
  );
}
