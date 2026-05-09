import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const BRAND = 'MACROBANDS';
const LETTER_STAGGER = 0.048;
const LETTER_DURATION = 0.52;
const TAGLINE_DELAY =
  (BRAND.length - 1) * LETTER_STAGGER + LETTER_DURATION + 0.08;
const TAGLINE_DURATION = 0.68;
const HOLD_AFTER_TAGLINE_MS = 1350;
const EXIT_DURATION_MS = 880;

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [exit, setExit] = useState(false);
  const completedRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const taglineEndsAt =
      TAGLINE_DELAY * 1000 + TAGLINE_DURATION * 1000 + HOLD_AFTER_TAGLINE_MS;
    const id = window.setTimeout(() => setExit(true), taglineEndsAt);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    if (!exit) return;
    const id = window.setTimeout(() => {
      if (completedRef.current) return;
      completedRef.current = true;
      onComplete();
    }, EXIT_DURATION_MS);
    return () => window.clearTimeout(id);
  }, [exit, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white px-6"
      aria-hidden
      initial={false}
      animate={
        exit
          ? { y: '-100%', opacity: 0 }
          : { y: 0, opacity: 1 }
      }
      transition={{
        duration: EXIT_DURATION_MS / 1000,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div className="flex flex-col items-center">
        <div
          className="flex flex-wrap justify-center gap-0 font-syne text-[clamp(2.5rem,12vw,6.5rem)] font-light tracking-[0.02em] text-[#09090B] leading-none"
          aria-label={BRAND}
        >
          {BRAND.split('').map((char, i) => (
            <span key={`${char}-${i}`} className="inline-block overflow-hidden pb-[0.08em]">
              <motion.span
                className="inline-block"
                initial={{ y: '115%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: LETTER_DURATION,
                  delay: i * LETTER_STAGGER,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {char}
              </motion.span>
            </span>
          ))}
        </div>

        <div className="mt-5 md:mt-7 overflow-hidden">
          <motion.p
            className="text-center text-[10px] md:text-xs uppercase tracking-[0.42em] font-medium text-[#38BDF8]"
            initial={{ y: '140%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: TAGLINE_DURATION,
              delay: TAGLINE_DELAY,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Customs & Logistics
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
