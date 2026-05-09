import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  revealColor?: string;
};

export function ImageReveal({ src, alt, className = '' }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div ref={ref} className={`relative overflow-hidden bg-[#FAFAFA] ${className}`}>
      <motion.img
        initial={{ scale: 1.08, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 1.08, opacity: 0 }}
        transition={{ duration: 1.05, ease: [0.25, 1, 0.5, 1] }}
        src={src}
        alt={alt}
        className="relative z-0 w-full h-full object-cover grayscale-[0.2]"
      />
    </div>
  );
}
