import { SVGProps } from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { TextReveal } from '../components/TextReveal';
import { easeCorridor } from '../constants/motion';
import { HQ_ADDRESS_SINGLE_LINE } from '../constants/site';

const corridorStats = [
  { value: '15+', label: 'Countries linked' },
  { value: '6', label: 'Operational hubs' },
  { value: '15+', label: 'Years corridor experience' },
];

/** Simplified SA → Zim corridor diagram (decorative geography, not a map product). */
function CorridorMap() {
  const mainPath =
    'M 110 280 C 260 215 340 188 420 170 C 520 145 620 115 812 88';
  const chirunduBranch = 'M 520 138 L 560 92';
  const mutareBranch = 'M 812 88 L 868 112';

  return (
    <svg
      viewBox="0 0 880 400"
      className="w-full h-auto max-w-4xl mx-auto"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="reachLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.35" />
          <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#FDE68A" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      <motion.path
        d={mainPath}
        stroke="url(#reachLine)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-12%' }}
        transition={{ duration: 1.65, ease: easeCorridor }}
      />
      <motion.path
        d={chirunduBranch}
        stroke="#FBBF24"
        strokeWidth="2"
        strokeOpacity={0.55}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-12%' }}
        transition={{ duration: 0.62, delay: 0.72, ease: easeCorridor }}
      />
      <motion.path
        d={mutareBranch}
        stroke="#FBBF24"
        strokeWidth="2"
        strokeOpacity={0.55}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-12%' }}
        transition={{ duration: 0.58, delay: 0.52, ease: easeCorridor }}
      />

      {[
        { cx: 110, cy: 280, code: 'MUS', name: 'Musina' },
        { cx: 420, cy: 170, code: 'BBR', name: 'Beitbridge' },
        { cx: 560, cy: 92, code: 'CHI', name: 'Chirundu' },
        { cx: 740, cy: 118, code: 'NYA', name: 'Nyamapanda' },
        { cx: 812, cy: 88, code: 'HRE', name: 'Harare' },
        { cx: 868, cy: 112, code: 'MUT', name: 'Mutare' },
      ].map((node, i) => (
        <g key={node.code}>
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="10"
            fill="#0c0a09"
            stroke="#FBBF24"
            strokeWidth="2"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * i + 0.42, duration: 0.38, ease: easeCorridor }}
          />
          <motion.circle
            cx={node.cx}
            cy={node.cy}
            r="18"
            fill="none"
            stroke="#FBBF24"
            strokeOpacity={0.25}
            strokeWidth="1"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * i + 0.48, duration: 0.42, ease: easeCorridor }}
          />
          <text
            x={node.cx}
            y={node.cy - 22}
            textAnchor="middle"
            className="fill-[#FBBF24] font-syne text-[11px] font-medium tracking-wide"
          >
            {node.code}
          </text>
          <text
            x={node.cx}
            y={node.cy + 36}
            textAnchor="middle"
            className="fill-[#a8a29e] font-sans text-[9px] tracking-wider uppercase"
          >
            {node.name}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function RegionalNetwork() {
  const locations = [
    { city: "Musina", desc: "South African staging & corridor feed into the Limpopo line toward Beitbridge" },
    {
      city: "Beitbridge",
      desc: "Registered office at Impala Extension—primary SA–Zimbabwe border clearance & heavy transit",
    },
    { city: "Chirundu", desc: "Zambezi gateway & northbound corridor coordination" },
    { city: "Nyamapanda", desc: "Eastern border post clearance & regional staging" },
    {
      city: "Mutare",
      desc: "Eastern highlands hub—corridor coordination, staging, and dual mobile reach for the eastern line",
    },
    { city: "Harare", desc: "Zimbabwean operations centre & distribution control" },
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-20 text-center">
        <FadeIn direction="up">
          <p className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#FBBF24] mb-3">
            Our Reach
          </p>
        </FadeIn>
        <TextReveal delay={0.1} className="mx-auto flex justify-center">
          <h1 className="font-syne tracking-tight text-5xl md:text-7xl font-light leading-[1.08] text-balance max-w-4xl mx-auto mb-4 text-[#09090B]">
              A frictionless network across <span className="italic">Southern Africa.</span>
          </h1>
        </TextReveal>
        <FadeIn direction="up" delay={0.15} className="max-w-2xl mx-auto">
          <p className="text-base md:text-lg font-light leading-relaxed opacity-[0.82] text-[#09090B]">
            Headquartered at {HQ_ADDRESS_SINGLE_LINE}, we maintain dedicated teams and staging capacity along the primary South Africa–Zimbabwe trade corridor—the same nodes highlighted here: Musina for staging, Beitbridge for border clearance, Chirundu and Nyamapanda as gateways, Mutare on the eastern spine, and Harare for national distribution.
          </p>
        </FadeIn>
      </div>

      <FadeIn direction="up" delay={0.2}>
        <div className="w-full relative overflow-hidden my-16 md:my-24 border-y border-[#FBBF24]/15 bg-[#0c0a09] text-[#fafaf9]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(to right, #78716c 1px, transparent 1px), linear-gradient(to bottom, #78716c 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#FBBF24]/[0.07] via-transparent to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">
              <div className="lg:w-[38%] space-y-5 text-left">
                <p className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#FBBF24]">
                  Corridor overview
                </p>
                <h2 className="font-syne text-3xl md:text-4xl font-light tracking-tight text-balance">
                  Musina to Harare—coordinated every step.
                </h2>
                <p className="text-sm md:text-base font-light leading-relaxed text-[#d6d3d1] max-w-md">
                  The map mirrors how we work: headquarters at Impala Extension in Beitbridge; staging across Musina; border and heavy transit at the Beitbridge post; Chirundu for the Zambezi crossing; Nyamapanda for the eastern frontier; Mutare for eastern Zimbabwe staging; Harare as the Zimbabwe control tower and distribution anchor.
                </p>
                <GlobeIcon size={40} className="text-[#FBBF24]/90 hidden sm:block" />
              </div>

              <div className="lg:w-[58%] min-h-[280px] flex items-center">
                <CorridorMap />
              </div>
            </div>

            <div className="mt-14 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-6 pt-10 border-t border-white/10">
              {corridorStats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <p className="font-syne text-4xl md:text-5xl font-light text-[#FBBF24] tabular-nums">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#a8a29e]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <TextReveal>
          <h3 className="font-syne tracking-tight text-3xl md:text-4xl font-light mb-12 pb-6 text-[#09090B]">Key Strategic Hubs</h3>
        </TextReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {locations.map((loc, i) => (
            <FadeIn 
              key={loc.city}
              direction="up"
              delay={i * 0.15}
              className="flex items-start space-x-4 group"
            >
              <MapPin className="text-[#FBBF24] shrink-0 mt-1 transform group-hover:-translate-y-1 transition-transform" size={24} strokeWidth={1.5} />
              <div>
                <h4 className="text-xl font-medium mb-2">{loc.city}</h4>
                <p className="text-sm font-light opacity-[0.85] text-[#09090B]">{loc.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

function GlobeIcon(props: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" x2="22" y1="12" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  );
}
