import { qfFetch } from "./client";
import { QFAudioFile } from "../../types/verse";

interface AudioResponse {
  audio_files: QFAudioFile[];
}

export async function getAudioUrl(
  verseKey: string,
  reciterId = 7 // Mishary Alafasy
): Promise<string | null> {
  try {
    const [chapter] = verseKey.split(":");
    const data = await qfFetch<AudioResponse>(
      `/recitations/${reciterId}/by_chapter/${chapter}`
    );
    const file = data.audio_files?.find((f) => f.verse_key === verseKey);
    if (file?.url) {
      return file.url.startsWith("http")
        ? file.url
        : `https://audio.qurancdn.com/${file.url}`;
    }
    return null;
  } catch {
    return null;
  }
}
