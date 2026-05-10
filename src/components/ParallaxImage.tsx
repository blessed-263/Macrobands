import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { useRef } from 'react';

export function ParallaxImage({
  src,
  alt,
  className = '',
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? ['0%', '0%'] : ['-12%', '12%'],
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-[-18%] h-[136%] w-[136%]">
        <img src={src} alt={alt} className="h-full w-full scale-110 object-cover grayscale-[0.3]" />
      </motion.div>
    </div>
  );
}
