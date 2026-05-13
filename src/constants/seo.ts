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
    title: 'Macrobands Pvt Ltd — Premium Logistics & Customs',
    description:
      'Macrobands Pvt Ltd — customs clearing, cross-border freight, and logistics between South Africa and Zimbabwe.',
  },
  '/services': {
    title: 'Services — Macrobands Pvt Ltd',
    description:
      'Clearing, forwarding, and corridor logistics services on the South Africa–Zimbabwe route — Macrobands Pvt Ltd.',
  },
  '/expertise': {
    title: 'Expertise — Macrobands Pvt Ltd',
    description:
      'Sector expertise in mining, agriculture, FMCG, and energy — customs and logistics across Southern Africa.',
  },
  '/regional-network': {
    title: 'Regional Network — Macrobands Pvt Ltd',
    description:
      'Operational hubs and corridor coverage from Musina and Beitbridge to Harare — Macrobands regional network.',
  },
  '/contact': {
    title: 'Contact — Macrobands Pvt Ltd',
    description:
      'Reach Macrobands for customs and logistics enquiries — email, phone, WhatsApp, and corridor hub lines.',
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
