/** Static assets under `public/images/` — bundled paths work offline and in production. */

/** Pixel size of each file on disk. Update these when you replace an image so layout matches real dimensions (run `python -c "from PIL import Image; print(Image.open('public/images/FILE').size)"`). */
export const intrinsicDimensions = {
  heroLogistics: { width: 1672, height: 941 },
  philosophyArchitecture: { width: 1536, height: 1024 },
  servicesBanner: { width: 1536, height: 1024 },
  servicesMid: { width: 1536, height: 1024 },
} as const;

const p = (name: string) => `/images/${name}`;

export const images = {
  heroLogistics: p('hero.png'),
  containerTerminal: p('container-terminal.jpg'),
  homeCustomsBrokering: p('home-customs-brokering.jpg'),
  homeRoadFreight: p('home-road-freight.jpg'),
  homeSupplyChain: p('home-supply-chain.jpg'),
  philosophyArchitecture: p('philosophy.png'),
  servicesBanner: p('services-banner.png'),
  servicesMid: p('services-mid.png'),
  serviceCustomsClearing: p('service-customs-clearing.jpg'),
  serviceRoadFreight: p('service-road-freight.jpg'),
  serviceExpedited: p('service-expedited.jpg'),
  expertiseMining: p('expertise-mining.jpg'),
  expertiseAgriculture: p('expertise-agriculture.jpg'),
  expertiseFmcg: p('expertise-fmcg.jpg'),
  expertiseEnergy: p('expertise-energy.jpg'),
  contactOffice: p('contact-office.png'),
} as const;
