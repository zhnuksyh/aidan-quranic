import { TeachingCard } from "../types/lesson";

const ICON_POOL = [
  "book-outline",
  "heart-outline",
  "star-outline",
  "globe-outline",
  "shield-outline",
  "sunny-outline",
  "compass-outline",
  "flame-outline",
  "leaf-outline",
  "eye-outline",
  "moon-outline",
  "people-outline",
  "scale-outline",
];

/**
 * Split raw tafsir text into teaching-card-sized verbatim excerpts.
 * No paraphrasing — bodies are exact substrings of the original text.
 */
export function segmentTafsirToCards(
  tafsirText: string,
  sourceName: string,
  sourceId: string,
  maxCards = 3
): TeachingCard[] {
  if (!tafsirText || tafsirText.trim().length === 0) return [];

  // Clean up: strip HTML, normalize whitespace
  const clean = tafsirText
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .trim();

  // Split by paragraph breaks first
  let segments = clean
    .split(/\n\s*\n/)
    .map((s) => s.replace(/\s+/g, " ").trim())
    .filter((s) => s.length > 30);

  // If only one big paragraph, split by sentences
  if (segments.length <= 1 && clean.length > 250) {
    segments = splitBySentences(clean, 250);
  }

  // If still just one segment but it's long, force sentence split
  if (segments.length === 1 && segments[0].length > 400) {
    segments = splitBySentences(segments[0], 250);
  }

  // Take up to maxCards segments
  const cards = segments.slice(0, maxCards);

  return cards.map((body, index) => ({
    title: `${sourceName} — Part ${index + 1}`,
    body,
    icon: ICON_POOL[index % ICON_POOL.length],
    sourceId,
    sourceName,
  }));
}

/**
 * Split text into chunks at sentence boundaries, each roughly under maxLen.
 */
function splitBySentences(text: string, maxLen: number): string[] {
  const sentences = text.match(/[^.!?]+[.!?]+\s*/g);
  if (!sentences) return [text];

  const chunks: string[] = [];
  let current = "";

  for (const sentence of sentences) {
    if (current.length + sentence.length > maxLen && current.length > 0) {
      chunks.push(current.trim());
      current = sentence;
    } else {
      current += sentence;
    }
  }

  if (current.trim().length > 0) {
    chunks.push(current.trim());
  }

  return chunks.filter((c) => c.length > 20);
}
