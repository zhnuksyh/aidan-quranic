import { LessonContent } from "../types/lesson";

export const LESSON_CONTENT: Record<string, LessonContent> = {
  // ── World 1: Surah Al-Fatiha ──────────────────────────────
  "w1-l1": {
    verseKey: "1:1",
    surahName: "Al-Fatiha",
    ayahNumber: 1,
    tafsirText:
      "The Basmalah — 'In the name of Allah, the Most Gracious, the Most Merciful' — is the phrase that opens the Quran and is recited before almost every action in a Muslim's life. It reminds us that all our deeds should begin with the consciousness of God. The scholars say it establishes the relationship between the servant and the Lord: everything we do is through His name, by His grace, and for His sake.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText: "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    translationText: "In the name of Allah, the Most Gracious, the Most Merciful.",
    puzzleType: "drag-drop",
    puzzleData: {
      sentence:
        "The Basmalah teaches us to begin every action in the ___ of Allah.",
      options: ["name", "power", "house", "light"],
      correctAnswer: "name",
    },
    audioUrl: null,
  },
  "w1-l2": {
    verseKey: "1:2",
    surahName: "Al-Fatiha",
    ayahNumber: 2,
    tafsirText:
      "This verse introduces the core attribute of Allah: He is the 'Rabb' (Lord, Sustainer, Cherisher) of all creation — not just of humans, but of every world and dimension that exists. The word 'Alamin' encompasses humans, jinn, angels, animals, and all of creation. Praising Allah as 'Rabb al-Alamin' recognizes His sovereignty over everything.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText: "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ",
    translationText: "All praise is due to Allah, Lord of all the worlds.",
    puzzleType: "true-false",
    puzzleData: {
      statement: "The word 'Alamin' refers only to the human world.",
      isTrue: false,
    },
    audioUrl: null,
  },
  "w1-l3": {
    verseKey: "1:3",
    surahName: "Al-Fatiha",
    ayahNumber: 3,
    tafsirText:
      "Ar-Rahman and Ar-Raheem are both derived from the root word 'Rahma' (mercy). Ar-Rahman refers to the vast, all-encompassing mercy of Allah that covers all of creation — believers and disbelievers alike. Ar-Raheem refers to the special mercy reserved for the believers in the Hereafter. Together they paint a complete picture of divine mercy.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText: "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    translationText: "The Most Gracious, the Most Merciful.",
    puzzleType: "drag-drop",
    puzzleData: {
      sentence:
        "Both Ar-Rahman and Ar-Raheem come from the root word ___, meaning mercy.",
      options: ["Rahma", "Salaam", "Noor", "Ilm"],
      correctAnswer: "Rahma",
    },
    audioUrl: null,
  },
  "w1-l4": {
    verseKey: "1:4",
    surahName: "Al-Fatiha",
    ayahNumber: 4,
    tafsirText:
      "This verse establishes that Allah is the sole Master of the Day of Judgment — the day when all souls will be held accountable for their deeds. On that day, no king or ruler will have any authority. Only Allah will judge, and His judgment will be perfectly just. This awareness is meant to instill both hope and accountability in our hearts.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText: "مَٰلِكِ يَوْمِ ٱلدِّينِ",
    translationText: "Master of the Day of Judgment.",
    puzzleType: "true-false",
    puzzleData: {
      statement:
        "On the Day of Judgment, Allah is the sole authority and judge.",
      isTrue: true,
    },
    audioUrl: null,
  },
  "w1-l5": {
    verseKey: "1:5",
    surahName: "Al-Fatiha",
    ayahNumber: 5,
    tafsirText:
      "This is the pivotal verse of Al-Fatiha where the servant directly addresses Allah: 'You alone we worship, and You alone we ask for help.' It is a declaration of Tawheed (monotheism) and a rejection of all false dependencies. The shift from third person to second person ('You') creates an intimate, direct conversation between the worshiper and God.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    translationText:
      "You alone we worship, and You alone we ask for help.",
    puzzleType: "drag-drop",
    puzzleData: {
      sentence:
        "This verse is a declaration of ___, the oneness of God.",
      options: ["Tawheed", "Shukr", "Sabr", "Dhikr"],
      correctAnswer: "Tawheed",
    },
    audioUrl: null,
  },

  "w1-l6": {
    verseKey: "1:6",
    surahName: "Al-Fatiha",
    ayahNumber: 6,
    tafsirText:
      "After declaring servitude and seeking help from Allah, the servant now makes the most important supplication: 'Guide us to the straight path.' The 'Sirat al-Mustaqim' is the path of Islam, the path of truth and righteousness. Every Muslim recites this prayer at least 17 times daily in their obligatory prayers, making it the most repeated supplication in a Muslim's life.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText: "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ",
    translationText: "Guide us to the straight path.",
    puzzleType: "drag-drop",
    puzzleData: {
      sentence:
        "Muslims recite this supplication at least ___ times daily in prayers.",
      options: ["17", "5", "10", "33"],
      correctAnswer: "17",
    },
    audioUrl: null,
  },
  "w1-l7": {
    verseKey: "1:7",
    surahName: "Al-Fatiha",
    ayahNumber: 7,
    tafsirText:
      "The final verse of Al-Fatiha clarifies what the 'straight path' is: it is the path of those whom Allah has blessed — the prophets, the truthful, the martyrs, and the righteous. It is NOT the path of those who earned Allah's anger through knowingly rejecting truth, nor of those who went astray through ignorance. This verse teaches us to seek good company and follow righteous examples.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText:
      "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ",
    translationText:
      "The path of those You have blessed, not of those who earned Your anger, nor of those who went astray.",
    puzzleType: "true-false",
    puzzleData: {
      statement:
        "The straight path refers to the path of prophets, truthful ones, martyrs, and the righteous.",
      isTrue: true,
    },
    audioUrl: null,
  },

  // ── World 2: Surah Yusuf ──────────────────────────────────
  "w2-l1": {
    verseKey: "12:1",
    surahName: "Yusuf",
    ayahNumber: 1,
    tafsirText:
      "Surah Yusuf begins with the disconnected letters 'Alif Lam Ra' — mysterious letters that appear at the start of several Quranic chapters. These letters remind us that despite our deep study, there remain aspects of the Quran known only to Allah. What follows is described as verses of 'the clear Book', emphasizing that the Quran's message, despite its depths, is made clear for those who reflect.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText: "الر ۚ تِلْكَ آيَاتُ الْكِتَابِ الْمُبِينِ",
    translationText:
      "Alif, Lam, Ra. These are the verses of the clear Book.",
    puzzleType: "true-false",
    puzzleData: {
      statement:
        "The disconnected letters at the start of some Surahs have a universally agreed-upon meaning among scholars.",
      isTrue: false,
    },
    audioUrl: null,
  },
  "w2-l2": {
    verseKey: "12:2",
    surahName: "Yusuf",
    ayahNumber: 2,
    tafsirText:
      "Allah reveals that He sent down this Quran in Arabic so that the people may use their intellect to understand it. The choice of Arabic was not arbitrary — it was the language of the first recipients, and Arabic's rich vocabulary allows for layers of meaning. This verse emphasizes that the Quran is meant to be understood, pondered, and reflected upon — not merely recited without comprehension.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText: "إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ",
    translationText:
      "Indeed, We have sent it down as an Arabic Quran so that you may understand.",
    puzzleType: "drag-drop",
    puzzleData: {
      sentence:
        "The Quran was revealed in ___ so that people may understand it.",
      options: ["Arabic", "Hebrew", "Aramaic", "Persian"],
      correctAnswer: "Arabic",
    },
    audioUrl: null,
  },
  "w2-l3": {
    verseKey: "12:3",
    surahName: "Yusuf",
    ayahNumber: 3,
    tafsirText:
      "Allah tells the Prophet Muhammad ﷺ that He is about to relate to him the best of stories through this Quran. The story of Prophet Yusuf (Joseph) is considered one of the most complete and beautiful narratives in the Quran — it covers themes of jealousy, patience, temptation, forgiveness, and divine planning. Before this revelation, the Prophet ﷺ was unaware of these details.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText:
      "نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ الْقَصَصِ بِمَا أَوْحَيْنَا إِلَيْكَ هَٰذَا الْقُرْآنَ",
    translationText:
      "We relate to you the best of stories through this Quran which We reveal to you.",
    puzzleType: "drag-drop",
    puzzleData: {
      sentence:
        "The story of Yusuf is described by Allah as the ___ of stories.",
      options: ["best", "longest", "first", "last"],
      correctAnswer: "best",
    },
    audioUrl: null,
  },
  "w2-l4": {
    verseKey: "12:4",
    surahName: "Yusuf",
    ayahNumber: 4,
    tafsirText:
      "Young Yusuf tells his father Ya'qub (Jacob) about a dream: he saw eleven stars, the sun, and the moon all prostrating to him. This dream was a prophecy of his future greatness — the eleven stars represented his brothers, and the sun and moon his parents. His father immediately recognized the dream's significance and warned him not to share it with his brothers, fearing their jealousy.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText:
      "إِذْ قَالَ يُوسُفُ لِأَبِيهِ يَا أَبَتِ إِنِّي رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا وَالشَّمْسَ وَالْقَمَرَ رَأَيْتُهُمْ لِي سَاجِدِينَ",
    translationText:
      "When Yusuf said to his father, 'O my father, indeed I saw eleven stars and the sun and the moon; I saw them prostrating to me.'",
    puzzleType: "true-false",
    puzzleData: {
      statement:
        "In Yusuf's dream, the eleven stars represent the eleven prophets who came before him.",
      isTrue: false,
    },
    audioUrl: null,
  },

  "w2-l5": {
    verseKey: "12:5",
    surahName: "Yusuf",
    ayahNumber: 5,
    tafsirText:
      "Ya'qub warns his son Yusuf not to tell his brothers about the dream, because they would plot against him out of jealousy. Ya'qub knew the nature of jealousy — it was through envy that Iblis (Satan) refused to bow to Adam. This verse teaches the wisdom of discretion: not every blessing should be shared openly, as it may provoke envy even among loved ones.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText:
      "قَالَ يَا بُنَيَّ لَا تَقْصُصْ رُؤْيَاكَ عَلَىٰ إِخْوَتِكَ فَيَكِيدُوا لَكَ كَيْدًا",
    translationText:
      "He said, 'O my son, do not relate your vision to your brothers, lest they plan against you a plan.'",
    puzzleType: "drag-drop",
    puzzleData: {
      sentence:
        "Ya'qub warned Yusuf not to share his dream to avoid his brothers' ___.",
      options: ["jealousy", "confusion", "laughter", "anger"],
      correctAnswer: "jealousy",
    },
    audioUrl: null,
  },
  "w2-l6": {
    verseKey: "12:6",
    surahName: "Yusuf",
    ayahNumber: 6,
    tafsirText:
      "Ya'qub then interprets the dream for Yusuf: Allah will choose him, teach him the interpretation of dreams, and complete His favor upon him and the family of Ya'qub — just as He completed it upon his forefathers Ibrahim (Abraham) and Ishaq (Isaac). This verse connects Yusuf to the great prophetic lineage and foreshadows his future rise to power in Egypt.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText:
      "وَكَذَٰلِكَ يَجْتَبِيكَ رَبُّكَ وَيُعَلِّمُكَ مِن تَأْوِيلِ ٱلْأَحَادِيثِ",
    translationText:
      "And thus your Lord will choose you and teach you the interpretation of dreams.",
    puzzleType: "true-false",
    puzzleData: {
      statement:
        "Ya'qub told Yusuf that Allah would teach him the interpretation of dreams.",
      isTrue: true,
    },
    audioUrl: null,
  },

  // ── World 3: Surah Ar-Rahman ──────────────────────────────
  "w3-l1": {
    verseKey: "55:1",
    surahName: "Ar-Rahman",
    ayahNumber: 1,
    tafsirText:
      "Surah Ar-Rahman opens with one of Allah's most beautiful names: 'Ar-Rahman' — the Most Gracious, the source of infinite mercy. This single-word verse is a powerful declaration. It tells us that everything that follows — the creation of humans, the teaching of the Quran, the balance of the universe — all flows from Allah's boundless mercy. It is mercy that defines His relationship with creation.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText: "ٱلرَّحْمَٰنُ",
    translationText: "The Most Gracious.",
    puzzleType: "drag-drop",
    puzzleData: {
      sentence:
        "Ar-Rahman means 'The Most ___', referring to Allah's infinite mercy.",
      options: ["Gracious", "Powerful", "Knowing", "Wise"],
      correctAnswer: "Gracious",
    },
    audioUrl: null,
  },
  "w3-l2": {
    verseKey: "55:2",
    surahName: "Ar-Rahman",
    ayahNumber: 2,
    tafsirText:
      "Immediately after identifying Himself as Ar-Rahman, Allah mentions His first favor: teaching the Quran. Before mentioning the creation of humans or the universe, Allah places the Quran first — signaling that divine guidance is the greatest gift. The Quran is not just a book; it is the speech of Allah, a mercy that guides humanity through darkness to light.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText: "عَلَّمَ ٱلْقُرْآنَ",
    translationText: "He taught the Quran.",
    puzzleType: "true-false",
    puzzleData: {
      statement:
        "In Surah Ar-Rahman, the creation of humans is mentioned before the teaching of the Quran.",
      isTrue: false,
    },
    audioUrl: null,
  },
  "w3-l3": {
    verseKey: "55:3",
    surahName: "Ar-Rahman",
    ayahNumber: 3,
    tafsirText:
      "After mentioning the Quran, Allah mentions the creation of the human being. The order is significant: guidance came before creation in this Surah's listing of blessings, teaching us that our purpose (to be guided) is more fundamental than our existence itself. The word 'Insan' (human) comes from 'uns' meaning intimacy — humans were created to have a close relationship with their Creator.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText: "خَلَقَ ٱلْإِنسَٰنَ",
    translationText: "He created humanity.",
    puzzleType: "drag-drop",
    puzzleData: {
      sentence:
        "The word 'Insan' (human) is derived from 'uns', meaning ___.",
      options: ["intimacy", "strength", "knowledge", "patience"],
      correctAnswer: "intimacy",
    },
    audioUrl: null,
  },
  "w3-l4": {
    verseKey: "55:4",
    surahName: "Ar-Rahman",
    ayahNumber: 4,
    tafsirText:
      "Allah taught humanity 'al-bayan' — the ability to express, communicate, and articulate. This is one of the greatest gifts that distinguishes humans from other creation. Al-bayan encompasses speech, writing, understanding, and the ability to convey thoughts and emotions. Without this gift, no knowledge could be shared, no prayers could be uttered, and no relationships could be formed.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText: "عَلَّمَهُ ٱلْبَيَانَ",
    translationText: "He taught him speech and expression.",
    puzzleType: "true-false",
    puzzleData: {
      statement:
        "Al-bayan refers only to the ability of spoken language.",
      isTrue: false,
    },
    audioUrl: null,
  },
  "w3-l5": {
    verseKey: "55:5",
    surahName: "Ar-Rahman",
    ayahNumber: 5,
    tafsirText:
      "After mentioning the gifts of the Quran, human creation, and speech, Allah draws attention to the cosmic order: the sun and moon follow precise calculations. The word 'husban' means exact reckoning — every orbit, every eclipse, every season is perfectly computed. This cosmic precision is itself a sign of Allah's mercy, providing reliable cycles for agriculture, navigation, and timekeeping.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText: "ٱلشَّمْسُ وَٱلْقَمَرُ بِحُسْبَانٍ",
    translationText: "The sun and the moon move by precise calculation.",
    puzzleType: "drag-drop",
    puzzleData: {
      sentence:
        "The word 'husban' means exact ___, referring to celestial precision.",
      options: ["reckoning", "speed", "distance", "beauty"],
      correctAnswer: "reckoning",
    },
    audioUrl: null,
  },
  "w3-l6": {
    verseKey: "55:6",
    surahName: "Ar-Rahman",
    ayahNumber: 6,
    tafsirText:
      "The stars and the trees prostrate to Allah. 'Najm' here can mean stars or stemless plants that spread along the ground, and 'shajar' means trees. Whether celestial or terrestrial, all of creation submits to Allah's will. This prostration is not like human prayer — it is the natural submission of all creation to the laws and order Allah has established. Even nature glorifies its Creator.",
    tafsirSourceName: "Tafsir Ibn Kathir",
    arabicText: "وَٱلنَّجْمُ وَٱلشَّجَرُ يَسْجُدَانِ",
    translationText: "And the stars and the trees prostrate.",
    puzzleType: "true-false",
    puzzleData: {
      statement:
        "In this verse, prostration means the natural submission of creation to Allah's laws.",
      isTrue: true,
    },
    audioUrl: null,
  },
};
