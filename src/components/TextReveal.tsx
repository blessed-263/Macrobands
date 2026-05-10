import { motion, useReducedMotion } from 'motion/react';
import { ReactNode } from 'react';

import { dur, easeEditorial } from '../constants/motion';

export function TextReveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: '85%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.12, margin: '0px 0px -10% 0px' }}
        transition={{
          duration: dur.headline,
          ease: easeEditorial,
          delay,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
