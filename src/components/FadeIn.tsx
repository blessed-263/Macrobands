import { motion, HTMLMotionProps } from 'motion/react';
import { ReactNode } from 'react';

interface FadeInProps extends HTMLMotionProps<"div"> {
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
  duration = 0.8,
  className = '',
  amount = 0.2, // trigger when 20% visible
  ...props
}: FadeInProps) {
  
  const getInitialY = () => {
    if (direction === 'up') return 40;
    if (direction === 'down') return -40;
    return 0;
  };
  
  const getInitialX = () => {
    if (direction === 'left') return 40;
    if (direction === 'right') return -40;
    return 0;
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: getInitialY(), 
        x: getInitialX() 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      viewport={{ once: true, amount }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Custom easing for premium silky feel
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
