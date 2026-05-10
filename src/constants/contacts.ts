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
