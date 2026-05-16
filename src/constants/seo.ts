/**
 * Production site URL — keep in sync with `public/sitemap.xml` and `public/robots.txt`.
 * Override at build time with `import.meta.env.VITE_SITE_ORIGIN` if needed.
 */
export const SITE_ORIGIN = (
  import.meta.env.VITE_SITE_ORIGIN ?? 'https://www.macrobands.co.za'
).replace(/\/$/, '');

export type RouteSeo = {
  title: string;
  description: string;
};

/** Keys are `location.pathname` values (no trailing slash except `/`). */
export const ROUTE_SEO: Record<string, RouteSeo> = {
  '/': {
    title:
      'Macrobands Pvt Ltd — Beitbridge Customs Clearing & Border Logistics',
    description:
      'Customs clearing company in Beitbridge for the Zimbabwe-South Africa border. Freight, forwarding, and corridor logistics from Musina to Harare.',
  },
  '/services': {
    title: 'Customs Clearing & Freight Services — Macrobands Pvt Ltd',
    description:
      'Customs clearing, forwarding, road freight, and priority border clearance services on the South Africa-Zimbabwe corridor.',
  },
  '/expertise': {
    title: 'Expertise — Macrobands Pvt Ltd',
    description:
      'Logistics and customs expertise for mining, agriculture, FMCG, energy, and infrastructure cargo across Southern Africa.',
  },
  '/regional-network': {
    title: 'Beitbridge & Regional Network — Macrobands Pvt Ltd',
    description:
      'Regional network for Musina, Beitbridge, Chirundu, Nyamapanda, Mutare, and Harare corridor logistics.',
  },
  '/contact': {
    title: 'Contact Macrobands — Beitbridge Customs Clearing',
    description:
      'Contact Macrobands for Beitbridge customs clearing, Zimbabwe border freight, road logistics, and corridor hub support.',
  },
  '/terms': {
    title: 'Terms & Conditions — Macrobands Pvt Ltd',
    description:
      'Website terms for Macrobands Pvt Ltd — customs clearing, forwarding, and logistics information.',
  },
  '/privacy': {
    title: 'Privacy Policy — Macrobands Pvt Ltd',
    description:
      'How Macrobands Pvt Ltd handles personal information when you use our website and logistics services.',
  },
};

export function canonicalPath(pathname: string): string {
  if (pathname === '/') return `${SITE_ORIGIN}/`;
  return `${SITE_ORIGIN}${pathname}`;
}

export function seoForPath(pathname: string): RouteSeo {
  return ROUTE_SEO[pathname] ?? ROUTE_SEO['/'];
}
