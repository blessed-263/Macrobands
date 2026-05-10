/** International digits only (no +). Macrobands — floating button, WhatsApp, Beitbridge mobile voice. */
export const WHATSAPP_MACROBANDS_DIGITS = '263772557785';

/** Voice/SMS `tel:` link for Macrobands Zimbabwe mobile (same number as WhatsApp). */
export const TEL_MACROBANDS_ZW = `tel:+${WHATSAPP_MACROBANDS_DIGITS}`;

/**
 * Footer “Need a website like this?” — web designer inquiry only (not Macrobands business).
 */
export const WHATSAPP_WEB_DESIGNER_DIGITS = '263771182657';

export const waMeUrl = (digits: string) => `https://wa.me/${digits}`;
