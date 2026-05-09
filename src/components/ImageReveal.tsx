import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

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
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const visible = priority || isInView;

  return (
    <div ref={ref} className={`relative overflow-hidden bg-[#FAFAFA] ${className}`}>
      <motion.img
        initial={priority ? { scale: 1, opacity: 1 } : { scale: 1.03, opacity: 0 }}
        animate={visible ? { scale: 1, opacity: 1 } : { scale: 1.03, opacity: 0 }}
        transition={{ duration: 1.05, ease: [0.25, 1, 0.5, 1] }}
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
