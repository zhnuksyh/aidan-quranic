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

const ARABIC_RE = /[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/;

/**
 * Split tafsir HTML into teaching-card-sized verbatim excerpts.
 * Uses the HTML structure (headings, paragraphs) to keep
 * Quranic Arabic verses grouped with their explanations.
 *
 * Accepts RAW HTML from the API — strips tags internally.
 */
export function segmentTafsirToCards(
  tafsirHtml: string,
  sourceName: string,
  sourceId: string,
  maxCards = 3
): TeachingCard[] {
  if (!tafsirHtml || tafsirHtml.trim().length === 0) return [];

  // 1. Split into sections by <h2> headings
  const sections = splitBySections(tafsirHtml);

  // 2. Within each section, extract paragraphs and group semantic units
  const allUnits: string[] = [];
  for (const section of sections) {
    const paragraphs = extractParagraphs(section);
    const units = groupSemanticUnits(paragraphs);
    allUnits.push(...units);
  }

  if (allUnits.length === 0) return [];

  // 3. Combine units into card-sized chunks (~500 chars target)
  const cards = combineIntoCards(allUnits, 500, maxCards);

  return cards.map((body, index) => ({
    title: `${sourceName} — Part ${index + 1}`,
    body,
    icon: ICON_POOL[index % ICON_POOL.length],
    sourceId,
    sourceName,
  }));
}

/**
 * Split HTML into sections at <h2> boundaries.
 * Each section is a chunk of HTML between headings.
 */
function splitBySections(html: string): string[] {
  // Split at <h2> or <h1> tags
  const parts = html.split(/<h[12][^>]*>/i);
  return parts.filter((p) => p.trim().length > 0);
}

/**
 * Extract text content from <p> tags within an HTML section.
 * Returns array of stripped paragraph texts.
 */
function extractParagraphs(html: string): string[] {
  const matches = html.match(/<p[^>]*>([\s\S]*?)<\/p>/gi);
  if (!matches) return [stripTags(html)].filter((t) => t.length > 10);

  return matches
    .map((m) => stripTags(m))
    .filter((t) => t.length > 0);
}

/**
 * Group paragraphs into semantic units, keeping Arabic verses
 * together with their explanations.
 *
 * Pattern: "intro text" + "Arabic verse" + "(explanation)" → one unit
 */
function groupSemanticUnits(paragraphs: string[]): string[] {
  const units: string[] = [];
  let i = 0;

  while (i < paragraphs.length) {
    const current = paragraphs[i];
    const isCurrentArabic = isArabicText(current);

    if (isCurrentArabic) {
      // Arabic paragraph: merge with previous intro (if short) and next explanation
      let unit = "";

      // Check if the previous unit is a short intro like "Allah said,"
      if (units.length > 0) {
        const lastUnit = units[units.length - 1];
        if (lastUnit.length < 60 && isIntroPhrase(lastUnit)) {
          unit = units.pop()! + " ";
        }
      }

      // Add the Arabic verse
      unit += current;

      // Add the following explanation if it exists
      if (i + 1 < paragraphs.length && !isArabicText(paragraphs[i + 1])) {
        unit += "\n" + paragraphs[i + 1];
        i++;
      }

      units.push(unit.trim());
    } else {
      units.push(current);
    }

    i++;
  }

  return units.filter((u) => u.length > 15);
}

/**
 * Combine semantic units into card-sized chunks.
 * Never breaks a unit across cards.
 */
function combineIntoCards(
  units: string[],
  targetLen: number,
  maxCards: number
): string[] {
  const cards: string[] = [];
  let current = "";

  for (const unit of units) {
    // If adding this unit would exceed target and we have content, start new card
    if (current.length + unit.length > targetLen && current.length > 0) {
      cards.push(current.trim());
      current = unit;
    } else {
      current += (current ? "\n\n" : "") + unit;
    }
  }

  if (current.trim().length > 0) {
    cards.push(current.trim());
  }

  return cards.slice(0, maxCards);
}

/** Check if text is predominantly Arabic */
function isArabicText(text: string): boolean {
  const stripped = text.replace(/\s/g, "");
  if (stripped.length === 0) return false;
  const arabicChars = (stripped.match(/[\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/g) || []).length;
  return arabicChars / stripped.length > 0.4;
}

/** Check if text is a short intro phrase like "Allah said," or "Similarly," */
function isIntroPhrase(text: string): boolean {
  const lower = text.toLowerCase().trim();
  return (
    lower.endsWith(",") ||
    lower.endsWith("said,") ||
    lower.endsWith("said:") ||
    lower.includes("allah said") ||
    lower.includes("also,") ||
    lower.includes("similarly,") ||
    lower.includes("he said") ||
    lower.includes("prophet said")
  );
}

/** Strip HTML tags and decode common entities */
function stripTags(html: string): string {
  return html
    .replace(/<sup[^>]*>.*?<\/sup>/gi, "")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/,\.\s/g, ", ")
    .replace(/\.\s*\./g, ".")
    .replace(/\s+/g, " ")
    .trim();
}
