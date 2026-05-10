import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { TextReveal } from '../components/TextReveal';

const sections: { heading: string; paragraphs: string[] }[] = [
  {
    heading: '1. Who we are',
    paragraphs: [
      'Macrobands Pvt Ltd (“Macrobands”, “we”, “us”) respects your privacy. This Privacy Policy explains how we collect, use, store, and protect personal information when you use this website or interact with us about customs clearing, forwarding, and logistics services.',
      'Our operational footprint spans South Africa and Zimbabwe. Depending on your interaction with us, protections under laws such as South Africa’s Protection of Personal Information Act (POPIA) and Zimbabwe’s data protection framework may apply alongside contractual obligations.',
    ],
  },
  {
    heading: '2. Information we may collect',
    paragraphs: [
      'Contact and enquiry data: name, company name, email address, telephone numbers, and message content you provide when you contact us by email, phone, or WhatsApp (including using the contact options on our website).',
      'Business and shipment-related data: addresses, registration numbers, cargo descriptions, and documentation necessary to provide customs and logistics services under our agreements with you.',
      'Technical data: browser type, general location derived from IP address, pages viewed, and timestamps—typically collected through server logs or essential website technologies.',
    ],
  },
  {
    heading: '3. How we use your information',
    paragraphs: [
      'To respond to enquiries, issue quotations, and deliver contracted customs clearing, forwarding, and logistics services.',
      'To comply with legal and regulatory obligations (including customs, tax, anti-money-laundering requirements where applicable), and to enforce our Terms & Conditions.',
      'To improve our website and communications, and—in aggregated or anonymised form—for internal analytics.',
    ],
  },
  {
    heading: '4. Legal bases',
    paragraphs: [
      'Where required by law, we rely on appropriate bases such as performance of a contract, legitimate interests in operating our business and securing shipments, compliance with legal obligations, or consent when we ask for it explicitly.',
    ],
  },
  {
    heading: '5. Sharing and international transfers',
    paragraphs: [
      'We may share personal data with employees and authorised agents who need it to perform services. We may disclose information to carriers, warehouses, customs authorities, insurers, and professional advisers where necessary to move cargo or meet legal duties.',
      'Because we operate cross-border corridors, information may be processed in South Africa, Zimbabwe, or other countries where partners operate. We take steps designed to ensure appropriate safeguards where required by applicable law.',
    ],
  },
  {
    heading: '6. Retention',
    paragraphs: [
      'We retain personal data only as long as needed for the purposes above, including statutory retention periods for customs, tax, and transport records. When retention ends, we delete or anonymise data in line with our internal policies.',
    ],
  },
  {
    heading: '7. Security',
    paragraphs: [
      'We implement reasonable administrative, technical, and organisational measures to protect personal information against unauthorised access, loss, or misuse. No online transmission is completely secure; you share information at your own risk beyond what we reasonably control.',
    ],
  },
  {
    heading: '8. Your rights',
    paragraphs: [
      'Subject to applicable law, you may have rights to access, correct, delete, or restrict processing of your personal data, to object to certain processing, or to lodge a complaint with a supervisory authority.',
      'To exercise rights or raise concerns, contact us using the details below. We may need to verify your identity before responding.',
    ],
  },
  {
    heading: '9. Cookies and similar technologies',
    paragraphs: [
      'This website may use essential cookies or similar technologies required for basic operation (for example, remembering preferences during your session). If we introduce analytics or marketing cookies, we will update this policy and, where required, seek consent.',
    ],
  },
  {
    heading: '10. Children',
    paragraphs: [
      'Our services are directed at businesses and adults. We do not knowingly collect personal information from children without appropriate parental or guardian involvement.',
    ],
  },
  {
    heading: '11. Changes',
    paragraphs: [
      'We may update this Privacy Policy from time to time. The “Last updated” date will change when we do. Material changes may be communicated through the website or direct notice where appropriate.',
    ],
  },
  {
    heading: '12. Contact',
    paragraphs: [
      'For privacy-related requests or questions: inquiries@macrobands.co.za, or use the contact details on our Contact page.',
    ],
  },
];

export default function Privacy() {
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
            Privacy policy
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
            to="/terms"
            className="text-xs uppercase tracking-[0.2em] text-[#09090B] opacity-80 hover:opacity-100 transition-opacity"
          >
            Terms &amp; conditions
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
