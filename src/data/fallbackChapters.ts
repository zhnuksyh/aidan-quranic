import { QFChapter } from "../types/verse";

// Minimal fallback for offline use — first 10 surahs + key surahs used in lessons
export const FALLBACK_CHAPTERS: QFChapter[] = [
  { id: 1, name_simple: "Al-Fatihah", name_complex: "Al-Fātiĥah", name_arabic: "الفاتحة", revelation_place: "makkah", revelation_order: 5, bismillah_pre: false, verses_count: 7, translated_name: { language_name: "english", name: "The Opener" } },
  { id: 2, name_simple: "Al-Baqarah", name_complex: "Al-Baqarah", name_arabic: "البقرة", revelation_place: "madinah", revelation_order: 87, bismillah_pre: true, verses_count: 286, translated_name: { language_name: "english", name: "The Cow" } },
  { id: 3, name_simple: "Ali 'Imran", name_complex: "Āli 'Imrān", name_arabic: "آل عمران", revelation_place: "madinah", revelation_order: 89, bismillah_pre: true, verses_count: 200, translated_name: { language_name: "english", name: "Family of Imran" } },
  { id: 4, name_simple: "An-Nisa", name_complex: "An-Nisā", name_arabic: "النساء", revelation_place: "madinah", revelation_order: 92, bismillah_pre: true, verses_count: 176, translated_name: { language_name: "english", name: "The Women" } },
  { id: 5, name_simple: "Al-Ma'idah", name_complex: "Al-Mā'idah", name_arabic: "المائدة", revelation_place: "madinah", revelation_order: 112, bismillah_pre: true, verses_count: 120, translated_name: { language_name: "english", name: "The Table Spread" } },
  { id: 6, name_simple: "Al-An'am", name_complex: "Al-'An'ām", name_arabic: "الأنعام", revelation_place: "makkah", revelation_order: 55, bismillah_pre: true, verses_count: 165, translated_name: { language_name: "english", name: "The Cattle" } },
  { id: 7, name_simple: "Al-A'raf", name_complex: "Al-'A'rāf", name_arabic: "الأعراف", revelation_place: "makkah", revelation_order: 39, bismillah_pre: true, verses_count: 206, translated_name: { language_name: "english", name: "The Heights" } },
  { id: 8, name_simple: "Al-Anfal", name_complex: "Al-'Anfāl", name_arabic: "الأنفال", revelation_place: "madinah", revelation_order: 88, bismillah_pre: true, verses_count: 75, translated_name: { language_name: "english", name: "The Spoils of War" } },
  { id: 9, name_simple: "At-Tawbah", name_complex: "At-Tawbah", name_arabic: "التوبة", revelation_place: "madinah", revelation_order: 113, bismillah_pre: false, verses_count: 129, translated_name: { language_name: "english", name: "The Repentance" } },
  { id: 10, name_simple: "Yunus", name_complex: "Yūnus", name_arabic: "يونس", revelation_place: "makkah", revelation_order: 51, bismillah_pre: true, verses_count: 109, translated_name: { language_name: "english", name: "Jonah" } },
  { id: 12, name_simple: "Yusuf", name_complex: "Yūsuf", name_arabic: "يوسف", revelation_place: "makkah", revelation_order: 53, bismillah_pre: true, verses_count: 111, translated_name: { language_name: "english", name: "Joseph" } },
  { id: 36, name_simple: "Ya-Sin", name_complex: "Yā Sīn", name_arabic: "يس", revelation_place: "makkah", revelation_order: 41, bismillah_pre: true, verses_count: 83, translated_name: { language_name: "english", name: "Ya Sin" } },
  { id: 55, name_simple: "Ar-Rahman", name_complex: "Ar-Raĥmān", name_arabic: "الرحمن", revelation_place: "madinah", revelation_order: 97, bismillah_pre: true, verses_count: 78, translated_name: { language_name: "english", name: "The Beneficent" } },
  { id: 67, name_simple: "Al-Mulk", name_complex: "Al-Mulk", name_arabic: "الملك", revelation_place: "makkah", revelation_order: 77, bismillah_pre: true, verses_count: 30, translated_name: { language_name: "english", name: "The Sovereignty" } },
  { id: 112, name_simple: "Al-Ikhlas", name_complex: "Al-'Ikhlāş", name_arabic: "الإخلاص", revelation_place: "makkah", revelation_order: 22, bismillah_pre: true, verses_count: 4, translated_name: { language_name: "english", name: "The Sincerity" } },
  { id: 113, name_simple: "Al-Falaq", name_complex: "Al-Falaq", name_arabic: "الفلق", revelation_place: "makkah", revelation_order: 20, bismillah_pre: true, verses_count: 5, translated_name: { language_name: "english", name: "The Daybreak" } },
  { id: 114, name_simple: "An-Nas", name_complex: "An-Nās", name_arabic: "الناس", revelation_place: "makkah", revelation_order: 21, bismillah_pre: true, verses_count: 6, translated_name: { language_name: "english", name: "Mankind" } },
];
