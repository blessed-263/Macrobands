/** Static assets under `public/images/` — bundled paths work offline and in production. */

/** Pixel size of each WebP on disk (matches sharp output from `npm run optimize-images`). */
export const intrinsicDimensions = {
  heroLogistics: { width: 1672, height: 941 },
  philosophyArchitecture: { width: 1536, height: 1024 },
  servicesBanner: { width: 1536, height: 1024 },
  servicesMid: { width: 1536, height: 1024 },
} as const;

const p = (name: string) => `/images/${name}`;

export const images = {
  heroLogistics: p('hero-logistics.webp'),
  containerTerminal: p('container-terminal.webp'),
  homeCustomsBrokering: p('home-customs-brokering.webp'),
  homeRoadFreight: p('home-road-freight.webp'),
  homeSupplyChain: p('home-supply-chain.webp'),
  philosophyArchitecture: p('philosophy-architecture.webp'),
  servicesBanner: p('services-banner.webp'),
  servicesMid: p('services-mid.webp'),
  serviceCustomsClearing: p('service-customs-clearing.webp'),
  serviceRoadFreight: p('service-road-freight.webp'),
  serviceExpedited: p('service-expedited.webp'),
  expertiseMining: p('expertise-mining.webp'),
  expertiseAgriculture: p('expertise-agriculture.webp'),
  expertiseFmcg: p('expertise-fmcg.webp'),
  expertiseEnergy: p('expertise-energy.webp'),
  contactOffice: p('contact-office.webp'),
} as const;
