/** Static assets under `public/images/` — bundled paths work offline and in production. */
const p = (name: string) => `/images/${name}`;

export const images = {
  heroLogistics: p('hero-logistics.jpg'),
  containerTerminal: p('container-terminal.jpg'),
  homeCustomsBrokering: p('home-customs-brokering.jpg'),
  homeRoadFreight: p('home-road-freight.jpg'),
  homeSupplyChain: p('home-supply-chain.jpg'),
  philosophyArchitecture: p('philosophy-architecture.jpg'),
  serviceCustomsClearing: p('service-customs-clearing.jpg'),
  serviceRoadFreight: p('service-road-freight.jpg'),
  serviceExpedited: p('service-expedited.jpg'),
  expertiseMining: p('expertise-mining.jpg'),
  expertiseAgriculture: p('expertise-agriculture.jpg'),
  expertiseFmcg: p('expertise-fmcg.jpg'),
  expertiseEnergy: p('expertise-energy.jpg'),
  contactOffice: p('contact-office.jpg'),
} as const;
