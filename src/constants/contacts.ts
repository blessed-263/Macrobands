/** International digits only (no +). Macrobands — floating button, WhatsApp, Beitbridge mobile voice. */
export const WHATSAPP_MACROBANDS_DIGITS = '263772557785';

/** Voice/SMS `tel:` link for Macrobands Zimbabwe mobile (same number as WhatsApp). */
export const TEL_MACROBANDS_ZW = `tel:+${WHATSAPP_MACROBANDS_DIGITS}`;

/** Chirundu hub — international digits only (no +). */
export const PHONE_CHIRUNDU_DIGITS = '263788907015';

export const TEL_CHIRUNDU = `tel:+${PHONE_CHIRUNDU_DIGITS}`;

/** Nyamapanda hub — international digits only (no +). */
export const PHONE_NYAMAPANDA_DIGITS = '263788685806';

export const TEL_NYAMAPANDA = `tel:+${PHONE_NYAMAPANDA_DIGITS}`;

/** Mutare hub — two lines (international digits only, no +). */
export const PHONE_MUTARE_A_DIGITS = '263719320094';
export const PHONE_MUTARE_B_DIGITS = '263774320094';

export const TEL_MUTARE_A = `tel:+${PHONE_MUTARE_A_DIGITS}`;
export const TEL_MUTARE_B = `tel:+${PHONE_MUTARE_B_DIGITS}`;

/**
 * Footer “Need a website like this?” — web designer inquiry only (not Macrobands business).
 */
export const WHATSAPP_WEB_DESIGNER_DIGITS = '263771182657';

export const waMeUrl = (digits: string) => `https://wa.me/${digits}`;

export const INQUIRY_EMAIL = 'inquiries@macrobands.co.za';

/** Opens the user’s mail client with a sensible subject and starter body — no server required. */
export function mailtoInquiryHref(): string {
  const subject = encodeURIComponent('Logistics inquiry — macrobands.co.za');
  const body = encodeURIComponent(
    'Hello Macrobands,\n\nPlease describe your shipment, route, and timeline:\n\n',
  );
  return `mailto:${INQUIRY_EMAIL}?subject=${subject}&body=${body}`;
}

/** WhatsApp chat with pre-filled opening message. */
export function whatsappInquiryHref(digits: string): string {
  const text = encodeURIComponent(
    'Hello Macrobands — I would like to discuss a customs / logistics inquiry.',
  );
  return `${waMeUrl(digits)}?text=${text}`;
}
