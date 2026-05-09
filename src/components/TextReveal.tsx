import { motion } from 'motion/react';
import { ReactNode } from 'react';

export function TextReveal({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: ReactNode, 
  delay?: number,
  className?: string
}) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "110%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
