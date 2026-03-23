export const SPA5K_EDITIONS = {
  ibnKathir: "en-tafisr-ibn-kathir",
  maarifUlQuran: "en-tafsir-maarif-ul-quran",
  asbabAlNuzul: "en-asbab-al-nuzul-by-al-wahidi",
  jalalayn: "en-al-jalalayn",
  ibnAbbas: "en-tafsir-ibn-abbas",
  tazkirulQuran: "en-tazkirul-quran",
} as const;

export type Spa5kEdition = (typeof SPA5K_EDITIONS)[keyof typeof SPA5K_EDITIONS];

const CDN_BASE =
  "https://cdn.jsdelivr.net/gh/spa5k/tafsir_api@main/tafsir";

interface Spa5kAyah {
  ayah: number;
  surah: number;
  text: string;
}

interface Spa5kResponse {
  ayahs: Spa5kAyah[];
}

/**
 * Fetch tafsir text for a specific ayah from the spa5k CDN.
 * Returns the raw text or null if unavailable.
 */
export async function getSpa5kTafsir(
  surahNumber: number,
  ayahNumber: number,
  edition: Spa5kEdition
): Promise<{ text: string; sourceName: string } | null> {
  try {
    const url = `${CDN_BASE}/${edition}/${surahNumber}.json`;
    const response = await fetch(url);

    if (!response.ok) return null;

    const data: Spa5kResponse = await response.json();
    const ayah = data.ayahs?.find(
      (a) => a.ayah === ayahNumber && a.surah === surahNumber
    );

    if (!ayah?.text) return null;

    // Derive human-readable source name from edition slug
    const sourceName = EDITION_NAMES[edition] ?? edition;

    return { text: ayah.text, sourceName };
  } catch {
    return null;
  }
}

const EDITION_NAMES: Record<string, string> = {
  "en-tafisr-ibn-kathir": "Tafsir Ibn Kathir",
  "en-tafsir-maarif-ul-quran": "Ma'ariful Quran — Mufti Muhammad Shafi",
  "en-asbab-al-nuzul-by-al-wahidi": "Asbab al-Nuzul — Al-Wahidi",
  "en-al-jalalayn": "Tafsir al-Jalalayn",
  "en-tafsir-ibn-abbas": "Tanwir al-Miqbas — Ibn Abbas",
  "en-tazkirul-quran": "Tazkirul Quran — Maulana Wahiduddin Khan",
};
