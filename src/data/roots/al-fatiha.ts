import { RootWordEntry } from "../../types/lesson";

/**
 * Word-by-word root analysis for Surah Al-Fatiha (1:1–1:7).
 * Source: Quranic Arabic Corpus (corpus.quran.com) — Dr. Kais Dukes, University of Leeds.
 * Arabic text from QF API text_uthmani. Roots and morphology from the Corpus.
 */
export const AL_FATIHA_ROOTS: Record<string, RootWordEntry[]> = {
  "1:1": [
    { position: 1, arabic: "بِسْمِ", root: "س م و", rootArabic: "سمو", morphology: "preposition + noun", translation: "In the name" },
    { position: 2, arabic: "ٱللَّهِ", root: "ا ل ه", rootArabic: "اله", morphology: "proper noun", translation: "of Allah" },
    { position: 3, arabic: "ٱلرَّحْمَـٰنِ", root: "ر ح م", rootArabic: "رحم", morphology: "adjective", translation: "the Most Gracious" },
    { position: 4, arabic: "ٱلرَّحِيمِ", root: "ر ح م", rootArabic: "رحم", morphology: "adjective", translation: "the Most Merciful" },
  ],
  "1:2": [
    { position: 1, arabic: "ٱلْحَمْدُ", root: "ح م د", rootArabic: "حمد", morphology: "noun", translation: "All praise" },
    { position: 2, arabic: "لِلَّهِ", root: "ا ل ه", rootArabic: "اله", morphology: "preposition + proper noun", translation: "is for Allah" },
    { position: 3, arabic: "رَبِّ", root: "ر ب ب", rootArabic: "رب", morphology: "noun", translation: "Lord" },
    { position: 4, arabic: "ٱلْعَـٰلَمِينَ", root: "ع ل م", rootArabic: "علم", morphology: "noun", translation: "of the worlds" },
  ],
  "1:3": [
    { position: 1, arabic: "ٱلرَّحْمَـٰنِ", root: "ر ح م", rootArabic: "رحم", morphology: "adjective", translation: "The Most Gracious" },
    { position: 2, arabic: "ٱلرَّحِيمِ", root: "ر ح م", rootArabic: "رحم", morphology: "adjective", translation: "the Most Merciful" },
  ],
  "1:4": [
    { position: 1, arabic: "مَـٰلِكِ", root: "م ل ك", rootArabic: "ملك", morphology: "noun", translation: "Master" },
    { position: 2, arabic: "يَوْمِ", root: "ي و م", rootArabic: "يوم", morphology: "noun", translation: "of the Day" },
    { position: 3, arabic: "ٱلدِّينِ", root: "د ي ن", rootArabic: "دين", morphology: "noun", translation: "of Judgment" },
  ],
  "1:5": [
    { position: 1, arabic: "إِيَّاكَ", root: "", rootArabic: "", morphology: "accusative pronoun", translation: "You alone" },
    { position: 2, arabic: "نَعْبُدُ", root: "ع ب د", rootArabic: "عبد", morphology: "verb, imperfect", translation: "we worship" },
    { position: 3, arabic: "وَإِيَّاكَ", root: "", rootArabic: "", morphology: "conjunction + pronoun", translation: "and You alone" },
    { position: 4, arabic: "نَسْتَعِينُ", root: "ع و ن", rootArabic: "عون", morphology: "verb, imperfect", translation: "we ask for help" },
  ],
  "1:6": [
    { position: 1, arabic: "ٱهْدِنَا", root: "ه د ي", rootArabic: "هدي", morphology: "verb, imperative", translation: "Guide us" },
    { position: 2, arabic: "ٱلصِّرَٰطَ", root: "ص ر ط", rootArabic: "صرط", morphology: "noun", translation: "to the path" },
    { position: 3, arabic: "ٱلْمُسْتَقِيمَ", root: "ق و م", rootArabic: "قوم", morphology: "adjective", translation: "the straight" },
  ],
  "1:7": [
    { position: 1, arabic: "صِرَٰطَ", root: "ص ر ط", rootArabic: "صرط", morphology: "noun", translation: "The path" },
    { position: 2, arabic: "ٱلَّذِينَ", root: "", rootArabic: "", morphology: "relative pronoun", translation: "of those" },
    { position: 3, arabic: "أَنْعَمْتَ", root: "ن ع م", rootArabic: "نعم", morphology: "verb, perfect", translation: "You have blessed" },
    { position: 4, arabic: "عَلَيْهِمْ", root: "", rootArabic: "", morphology: "preposition + pronoun", translation: "upon them" },
    { position: 5, arabic: "غَيْرِ", root: "غ ي ر", rootArabic: "غير", morphology: "noun", translation: "not (of)" },
    { position: 6, arabic: "ٱلْمَغْضُوبِ", root: "غ ض ب", rootArabic: "غضب", morphology: "passive participle", translation: "those who earned wrath" },
    { position: 7, arabic: "عَلَيْهِمْ", root: "", rootArabic: "", morphology: "preposition + pronoun", translation: "upon them" },
    { position: 8, arabic: "وَلَا", root: "", rootArabic: "", morphology: "conjunction + negation", translation: "and not" },
    { position: 9, arabic: "ٱلضَّآلِّينَ", root: "ض ل ل", rootArabic: "ضلل", morphology: "active participle", translation: "those who went astray" },
  ],
};
