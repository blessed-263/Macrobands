import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { TextReveal } from '../components/TextReveal';

const sections: { heading: string; paragraphs: string[] }[] = [
  {
    heading: '1. Introduction',
    paragraphs: [
      'These Terms and Conditions (“Terms”) govern your use of this website and set out the basis on which Macrobands Pvt Ltd (“Macrobands”, “we”, “us”) provides information about its customs clearing, forwarding, and logistics services.',
      'By accessing or using this website, you agree to these Terms. If you do not agree, please do not use the site. Specific shipments, quotations, and service engagements are subject to separate written agreements, bills of lading, transport documents, and applicable law.',
    ],
  },
  {
    heading: '2. Website information',
    paragraphs: [
      'Content on this website is for general information only. It does not constitute legal, tax, or customs advice. Service descriptions, transit times, and operational references are indicative and may change without notice.',
      'Nothing on this website obligates Macrobands to provide any service or rate until confirmed in writing under our standard quotation and acceptance process.',
    ],
  },
  {
    heading: '3. Services and carriage',
    paragraphs: [
      'Where Macrobands acts as customs broker, freight forwarder, or logistics coordinator, our liability, insurance, and the terms of carriage are defined in the applicable contract, shipping documents, and mandatory conventions or national law (including, where relevant, rules relating to road, sea, or air carriage and cross-border movements between South Africa and Zimbabwe).',
      'Clients remain responsible for the accuracy of commercial invoices, permits, classifications, and declarations they supply. You warrant that goods are lawfully described and eligible for the intended routing.',
    ],
  },
  {
    heading: '4. Limitation of liability',
    paragraphs: [
      'To the fullest extent permitted by law, Macrobands shall not be liable for any indirect, consequential, or punitive loss, loss of profit, or loss of business arising from use of this website or from services except as expressly set out in a signed agreement or as required by applicable mandatory law.',
      'Where liability is not excluded by law, our aggregate liability arising from any single incident shall be limited to the extent provided in the relevant contract or, for website use only, to the minimum extent permitted by law.',
    ],
  },
  {
    heading: '5. Force majeure',
    paragraphs: [
      'We are not liable for delay or failure caused by events beyond our reasonable control, including border closures, regulatory changes, severe weather, industrial action, equipment failure, or disruptions at third-party terminals and carriers.',
    ],
  },
  {
    heading: '6. Intellectual property',
    paragraphs: [
      'All text, graphics, logos, and layout on this website are owned by Macrobands or its licensors. You may not copy, modify, or distribute them without prior written consent except for personal, non-commercial viewing.',
    ],
  },
  {
    heading: '7. Third-party links',
    paragraphs: [
      'This website may reference or link to third-party sites. We do not control those sites and are not responsible for their content or policies.',
    ],
  },
  {
    heading: '8. Changes',
    paragraphs: [
      'We may update these Terms from time to time. The “Last updated” date below will change when we do. Continued use of the website after changes constitutes acceptance of the revised Terms.',
    ],
  },
  {
    heading: '9. Contact',
    paragraphs: [
      'For questions about these Terms or our services, contact us at inquiries@macrobands.co.za or via the details shown on our Contact page.',
    ],
  },
];

export default function Terms() {
  return (
    <div className="w-full pt-24 pb-32 px-6 md:px-12">
      <div className="mx-auto max-w-3xl">
        <FadeIn direction="up">
          <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.2em] text-[#09090B]/50">
            Legal
          </p>
        </FadeIn>
        <TextReveal delay={0.05}>
          <h1 className="font-syne text-4xl font-light leading-tight tracking-tight text-balance text-[#09090B] md:text-6xl mb-4">
            Terms &amp; conditions
          </h1>
        </TextReveal>
        <FadeIn direction="up" delay={0.12}>
          <p className="text-sm font-light text-[#09090B]/60 mb-14">
            Last updated: May 2026
          </p>
        </FadeIn>

        <article className="space-y-12 text-[#09090B]">
          {sections.map((section) => (
            <FadeIn key={section.heading} direction="up">
              <section>
                <h2 className="font-syne text-lg font-medium tracking-tight text-[#09090B] mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-sm font-light leading-relaxed opacity-[0.88]">
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </section>
            </FadeIn>
          ))}
        </article>

        <FadeIn direction="up" delay={0.2} className="mt-16 pt-10 border-t border-[#09090B]/10 flex flex-wrap gap-x-8 gap-y-3">
          <Link
            to="/privacy"
            className="text-xs uppercase tracking-[0.2em] text-[#09090B] opacity-80 hover:opacity-100 transition-opacity"
          >
            Privacy policy
          </Link>
          <Link
            to="/contact"
            className="text-xs uppercase tracking-[0.2em] text-[#09090B] opacity-80 hover:opacity-100 transition-opacity"
          >
            Contact us
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}
