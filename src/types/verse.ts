export interface QFVerse {
  id: number;
  verse_key: string;
  text_uthmani: string;
  translations?: QFTranslation[];
}

export interface QFTranslation {
  id: number;
  text: string;
  resource_name: string;
}

export interface QFTafsir {
  tafsir_id: number;
  text: string;
  resource_name: string;
  verse_key: string;
}

export interface QFAudioFile {
  url: string;
  verse_key: string;
}

export interface QFChapter {
  id: number;
  revelation_place: string;
  revelation_order: number;
  bismillah_pre: boolean;
  name_simple: string;
  name_complex: string;
  name_arabic: string;
  verses_count: number;
  translated_name: {
    language_name: string;
    name: string;
  };
}
