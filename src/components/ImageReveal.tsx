import { motion, useInView, useReducedMotion } from 'motion/react';
import { useRef } from 'react';

import { dur, easeMedia } from '../constants/motion';

type ImageRevealProps = {
  src: string;
  alt: string;
  className?: string;
  revealColor?: string;
  /** Hint browser to load this image sooner (use for above-the-fold heroes only). */
  priority?: boolean;
  /** Natural pixel dimensions of `src` — avoids layout shift and keeps scaling honest. */
  intrinsic?: { width: number; height: number };
};

export function ImageReveal({ src, alt, className = '', priority, intrinsic }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const reduceMotion = useReducedMotion();
  const visible = priority || isInView || Boolean(reduceMotion);

  const initialScale = priority ? 1 : reduceMotion ? 1 : 1.018;
  const initialOpacity = priority ? 1 : reduceMotion ? 1 : 0;

  return (
    <div ref={ref} className={`relative overflow-hidden bg-[#FAFAFA] ${className}`}>
      <motion.img
        initial={{ scale: initialScale, opacity: initialOpacity }}
        animate={
          visible
            ? { scale: 1, opacity: 1 }
            : { scale: reduceMotion ? 1 : 1.018, opacity: reduceMotion ? 1 : 0 }
        }
        transition={{
          duration: reduceMotion ? 0.15 : dur.image,
          ease: easeMedia,
        }}
        src={src}
        alt={alt}
        width={intrinsic?.width}
        height={intrinsic?.height}
        decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        className="relative z-0 h-full w-full object-cover object-center"
      />
    </div>
  );
}
