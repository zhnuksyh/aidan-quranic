import { qfFetch } from "./client";
import { QFVerse, QFTranslation, QFTafsir } from "../../types/verse";

interface VerseResponse {
  verse: QFVerse;
}

interface TranslationsResponse {
  translations: QFTranslation[];
}

interface TafsirsResponse {
  tafsirs: QFTafsir[];
}

export async function getVerseByKey(verseKey: string): Promise<QFVerse> {
  const data = await qfFetch<VerseResponse>(
    `/verses/by_key/${verseKey}?language=en&words=true&word_fields=text_uthmani`
  );
  return data.verse;
}

export async function getTranslation(
  verseKey: string,
  translationId = 131 // Sahih International
): Promise<QFTranslation[]> {
  const [chapter, verse] = verseKey.split(":");
  const data = await qfFetch<TranslationsResponse>(
    `/verses/by_chapter/${chapter}?translations=${translationId}&verse_number=${verse}`
  );
  return data.translations;
}

export async function getTafsir(
  verseKey: string,
  tafsirId = 169 // Ibn Kathir (English)
): Promise<QFTafsir[]> {
  const data = await qfFetch<TafsirsResponse>(
    `/tafsirs/${tafsirId}/by_ayah/${verseKey}`
  );
  return data.tafsirs;
}
