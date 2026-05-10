import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

import { easeEditorial } from '../constants/motion';

const BRAND_MAIN = 'MACROBANDS';
const LETTER_STAGGER = 0.048;
const LETTER_DURATION = 0.52;
const SUB_DELAY =
  (BRAND_MAIN.length - 1) * LETTER_STAGGER + LETTER_DURATION + 0.1;
const SUB_DURATION = 0.5;
const TAGLINE_DELAY = SUB_DELAY + SUB_DURATION + 0.1;
const TAGLINE_DURATION = 0.68;
const HOLD_AFTER_TAGLINE_MS = 1350;
const EXIT_DURATION_MS = 880;

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [exit, setExit] = useState(false);
  const completedRef = useRef(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const taglineEndsAt =
      TAGLINE_DELAY * 1000 + TAGLINE_DURATION * 1000 + HOLD_AFTER_TAGLINE_MS;
    const id = window.setTimeout(() => setExit(true), taglineEndsAt);
    return () => window.clearTimeout(id);
  }, [reduceMotion]);

  useEffect(() => {
    if (!reduceMotion) return;
    const id = window.setTimeout(() => setExit(true), 520);
    return () => window.clearTimeout(id);
  }, [reduceMotion]);

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
        duration: reduceMotion ? 0.35 : EXIT_DURATION_MS / 1000,
        ease: easeEditorial,
      }}
    >
      <div className="flex flex-col items-center">
        <div
          className="flex flex-wrap justify-center gap-0 font-syne text-[clamp(2.5rem,12vw,6.5rem)] font-light tracking-[0.02em] text-[#09090B] leading-none"
          aria-hidden
        >
          {BRAND_MAIN.split('').map((char, i) => (
            <span key={`${char}-${i}`} className="inline-block overflow-hidden pb-[0.08em]">
              <motion.span
                className="inline-block"
                initial={{ y: '115%' }}
                animate={{ y: 0 }}
                transition={{
                  duration: reduceMotion ? 0.28 : LETTER_DURATION,
                  delay: reduceMotion ? 0 : i * LETTER_STAGGER,
                  ease: easeEditorial,
                }}
              >
                {char}
              </motion.span>
            </span>
          ))}
        </div>

        <div className="mt-3 overflow-hidden md:mt-4">
          <motion.p
            className="text-center font-syne text-[clamp(0.75rem,2.2vw,1.125rem)] font-light uppercase tracking-[0.28em] text-[#09090B]/75"
            initial={{ y: '130%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: reduceMotion ? 0.28 : SUB_DURATION,
              delay: reduceMotion ? 0.06 : SUB_DELAY,
              ease: easeEditorial,
            }}
          >
            Pvt Ltd
          </motion.p>
        </div>

        <div className="mt-5 overflow-hidden md:mt-6">
          <motion.p
            className="text-center text-[10px] md:text-xs uppercase tracking-[0.42em] font-medium text-[#38BDF8]"
            initial={{ y: '140%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: reduceMotion ? 0.28 : TAGLINE_DURATION,
              delay: reduceMotion ? 0.12 : TAGLINE_DELAY,
              ease: easeEditorial,
            }}
          >
            Customs & Logistics
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
