import { motion, useReducedMotion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

import { dur, easeEditorial } from '../constants/motion';

interface FadeInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  amount?: 'some' | 'all' | number;
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = dur.fade,
  className = '',
  amount = 0.15,
  ...props
}: FadeInProps) {
  const reduceMotion = useReducedMotion();

  const distance = reduceMotion ? 0 : 18;

  const getInitialY = () => {
    if (direction === 'none') return 0;
    if (direction === 'up') return distance;
    if (direction === 'down') return -distance;
    return 0;
  };

  const getInitialX = () => {
    if (direction === 'none') return 0;
    if (direction === 'left') return distance;
    if (direction === 'right') return -distance;
    return 0;
  };

  const resolvedDuration = reduceMotion ? 0.12 : duration;
  const resolvedDelay = reduceMotion ? 0 : delay;

  return (
    <motion.div
      initial={{
        opacity: reduceMotion ? 1 : 0,
        y: getInitialY(),
        x: getInitialX(),
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount, margin: '0px 0px -8% 0px' }}
      transition={{
        duration: resolvedDuration,
        delay: resolvedDelay,
        ease: easeEditorial,
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
