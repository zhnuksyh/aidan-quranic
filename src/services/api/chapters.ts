import { qfFetch } from "./client";
import { QFChapter } from "../../types/verse";

interface ChaptersResponse {
  chapters: QFChapter[];
}

export async function getChapters(): Promise<QFChapter[]> {
  const data = await qfFetch<ChaptersResponse>("/chapters?language=en");
  return data.chapters;
}

export async function getChapter(id: number): Promise<QFChapter> {
  const data = await qfFetch<{ chapter: QFChapter }>(`/chapters/${id}?language=en`);
  return data.chapter;
}
