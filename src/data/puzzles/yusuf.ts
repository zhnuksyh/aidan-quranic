import { PuzzleItem } from "../../types/lesson";

/**
 * Curated puzzles for Surah Yusuf (12:1–12:6).
 * Derived from authentic Tafsir Ibn Kathir (QF API ID 169).
 * Every question is traceable to a specific factual claim in the tafsir.
 */
export const YUSUF_PUZZLES: Record<string, PuzzleItem[]> = {
  "12:1": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          'What are the letters "Alif Lam Ra" at the start of Surah Yusuf called, according to Ibn Kathir?',
        options: [
          "Huruf al-Muqatta'at (disjointed letters)",
          "Ayat al-Ahkam (verses of rulings)",
          "Kalimat at-Tawhid (words of monotheism)",
          "Asma al-Husna (beautiful names)",
        ],
        correctIndex: 0,
      },
      sourceNote:
        "Ibn Kathir: Alif-Lam-Ra are among the Huruf al-Muqatta'at (disjointed/separate letters) that appear at the beginning of certain Surahs.",
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          'Ibn Kathir explains that "Mubin" means the Quran both makes things manifest AND is itself manifest and ___.',
        options: ["clear", "hidden", "ancient", "brief"],
        correctAnswer: "clear",
      },
      sourceNote:
        'Ibn Kathir: "Mubin indicates that this Book makes everything manifest and is itself manifest and clear in its guidance."',
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, the exact meaning of the disjointed letters (Huruf al-Muqatta'at) is debated among scholars.",
        isTrue: true,
      },
      sourceNote:
        "Ibn Kathir: Their exact meaning is debated among scholars.",
    },
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "What does 'Mubin' mean when describing the Quran in this verse?",
        scenarios: [
          { text: "It has a dual meaning: the Quran both makes things manifest (clarifies truth) AND is itself manifest and clear in its guidance.", isCorrect: true },
          { text: "It means the Quran was revealed publicly in front of all the people of Makkah, not in secret.", isCorrect: false },
          { text: "It refers specifically to the Quran's literary style being simple enough for children to understand.", isCorrect: false },
        ],
      },
      sourceNote:
        'Ibn Kathir: "Mubin indicates that this Book makes everything manifest and is itself manifest and clear in its guidance."',
    },
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "The disjointed letters (Huruf al-Muqatta'at) appear at the start of the Surah", effect: "Their exact meaning remains debated among scholars" },
          { cause: "The Quran is described as 'Mubin' (clear/manifest)", effect: "It both makes things manifest and is itself clear in its guidance" },
        ],
      },
      sourceNote:
        "Ibn Kathir: The Huruf al-Muqatta'at are debated among scholars. 'Mubin' indicates the Book makes everything manifest and is itself manifest and clear.",
    },
  ],

  "12:2": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          "According to Ibn Kathir, during which month did the revelation of the Quran begin?",
        options: ["Ramadan", "Shawwal", "Rajab", "Muharram"],
        correctIndex: 0,
      },
      sourceNote:
        'Ibn Kathir: "Its revelation began during the most honorable month of the year — Ramadan."',
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          'Ibn Kathir describes Arabic as "the most eloquent, plain, deep, and ___ of languages."',
        options: ["expressive", "ancient", "difficult", "sacred"],
        correctAnswer: "expressive",
      },
      sourceNote:
        'Ibn Kathir: "Arabic is the most eloquent, plain, deep, and expressive of languages in conveying the meanings that are in one\'s mind."',
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, the Quran is called 'perfect in every respect' because of the convergence of five honors: most honorable Book, language, Prophet, angel, and land.",
        isTrue: true,
      },
      sourceNote:
        'Ibn Kathir: "The Most Honorable Book was revealed in the most honorable language, to the most honorable Prophet, delivered by the most honorable angel, in the most honorable land."',
    },
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "Why is Arabic described as 'the most eloquent, plain, deep, and expressive of languages' by Ibn Kathir?",
        scenarios: [
          { text: "Because Arabic excels at conveying the meanings that are in one's mind, making it the ideal vehicle for the Quran's revelation.", isCorrect: true },
          { text: "Because Arabic was the only language spoken in the Arabian Peninsula at the time of revelation.", isCorrect: false },
          { text: "Because Arabic has the largest vocabulary of any language in the world.", isCorrect: false },
        ],
      },
      sourceNote:
        'Ibn Kathir: "Arabic is the most eloquent, plain, deep, and expressive of languages in conveying the meanings that are in one\'s mind."',
    },
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "The Quran's revelation began during Ramadan", effect: "The convergence of the most honorable month with the most honorable Book adds to its perfection" },
          { cause: "Five honors converge: Book, language, Prophet, angel, and land", effect: "The Quran is described as 'perfect in every respect'" },
        ],
      },
      sourceNote:
        'Ibn Kathir: "Its revelation began during the most honorable month — Ramadan." Also: "The Most Honorable Book was revealed in the most honorable language, to the most honorable Prophet, delivered by the most honorable angel, in the most honorable land."',
    },
  ],

  "12:3": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          "According to Ibn Kathir, what prompted the revelation of this verse about 'the best of stories'?",
        options: [
          "The Companions requested stories from the Prophet",
          "The Quraysh challenged the Prophet",
          "Angel Jibril suggested it",
          "The Prophet wanted to teach history",
        ],
        correctIndex: 0,
      },
      sourceNote:
        'Ibn Kathir via Ibn Abbas: "The companions said: O Messenger of Allah, why do you not tell us stories? — and this verse was then revealed."',
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          "When Umar brought a book from the People of the Book, the Prophet became angry and said he brought the message 'white and ___.'",
        options: ["pure", "complete", "final", "sealed"],
        correctAnswer: "pure",
      },
      sourceNote:
        'Ibn Kathir: "The Prophet said: I have brought it to you white and pure. Do not ask them about anything."',
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, Surah Yusuf is considered one of the most detailed and continuous narratives in the entire Quran — a complete story within one Surah.",
        isTrue: true,
      },
      sourceNote:
        "Ibn Kathir: Surah Yusuf is considered one of the most detailed and continuous narratives in the Quran — the story from beginning to end within a single Surah.",
    },
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "What prompted the revelation of this verse about 'the best of stories'?",
        scenarios: [
          { text: "The Companions said: 'O Messenger of Allah, why do you not tell us stories?' — and Allah revealed this verse about the best of stories, narrating the complete story of Yusuf.", isCorrect: true },
          { text: "The Quraysh challenged the Prophet to produce a story as eloquent as their poets, so this Surah was revealed as a literary response.", isCorrect: false },
          { text: "Umar ibn Al-Khattab requested a historical account of the Prophets, and this verse was revealed in direct response to his request.", isCorrect: false },
        ],
      },
      sourceNote:
        'Ibn Kathir via Ibn Abbas: "The companions said: O Messenger of Allah, why do you not tell us stories? — and this verse was then revealed."',
    },
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "The Companions requested stories from the Prophet", effect: "Allah revealed Surah Yusuf — the best of stories" },
          { cause: "Umar brought a book from the People of the Book", effect: "The Prophet became angry and said: 'I brought it to you white and pure'" },
        ],
      },
      sourceNote:
        'Ibn Kathir via Ibn Abbas: The Companions\' request led to the revelation of Surah Yusuf. Separately, when Umar brought outside scriptures, the Prophet rebuked this, affirming the Quran\'s sufficiency.',
    },
  ],

  "12:4": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          "According to Ibn Kathir, what do the eleven stars in Yusuf's dream represent?",
        options: [
          "His eleven brothers",
          "The eleven months of worship",
          "The eleven prophets before him",
          "The eleven gates of Paradise",
        ],
        correctIndex: 0,
      },
      sourceNote:
        "Ibn Kathir via Ibn Abbas, Ad-Dahhak, Qatadah: The eleven stars represent Yusuf's eleven brothers. The sun and moon represent his father and mother.",
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          "Ibn Abbas stated that 'the ___ of Prophets are revelations from Allah.'",
        options: ["dreams", "prayers", "words", "actions"],
        correctAnswer: "dreams",
      },
      sourceNote:
        'Ibn Kathir via Ibn Abbas: "The dreams of Prophets are revelations from Allah."',
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, Ya'qub (Jacob) is the son of Ishaq (Isaac), the son of Ibrahim (Abraham).",
        isTrue: true,
      },
      sourceNote:
        "Ibn Kathir: Ya'qub is the son of Ishaq the son of Ibrahim — peace be upon them all.",
    },
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "What do the eleven stars, the sun, and the moon represent in Yusuf's dream?",
        scenarios: [
          { text: "According to Ibn Abbas, Ad-Dahhak, and Qatadah, the eleven stars represent Yusuf's eleven brothers, while the sun and moon represent his father and mother.", isCorrect: true },
          { text: "The eleven stars represent the eleven months of the lunar calendar, with the sun and moon representing day and night.", isCorrect: false },
          { text: "The eleven stars represent the eleven prophets who came before Yusuf, with the sun and moon representing Ibrahim and Ishaq.", isCorrect: false },
        ],
      },
      sourceNote:
        "Ibn Kathir via Ibn Abbas, Ad-Dahhak, Qatadah: The eleven stars represent Yusuf's eleven brothers. The sun and moon represent his father and mother.",
    },
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "Yusuf sees eleven stars, the sun, and the moon prostrating to him in a dream", effect: "This foreshadows his future prominence over his eleven brothers and parents" },
          { cause: "The dreams of Prophets are revelations from Allah", effect: "Yusuf's dream is not mere imagination but a divinely ordained prophecy" },
        ],
      },
      sourceNote:
        "Ibn Kathir via Ibn Abbas: 'The dreams of Prophets are revelations from Allah.' The eleven stars represent his eleven brothers; the sun and moon represent his father and mother.",
    },
  ],

  "12:5": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          "Why did Ya'qub warn Yusuf not to tell his brothers about the dream, according to Ibn Kathir?",
        options: [
          "He feared their envy would lead to harmful plots",
          "The dream was too sacred to share",
          "Dreams should never be shared with anyone",
          "He wanted Yusuf to forget about it",
        ],
        correctIndex: 0,
      },
      sourceNote:
        "Ibn Kathir: Ya'qub cautioned Yusuf against revealing this vision to his brothers, fearing they would become envious and devise harmful schemes.",
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          "The Prophet said: 'Seek help in fulfilling your needs by being discrete, for every owner of a blessing is ___.'",
        options: ["envied", "rewarded", "tested", "forgotten"],
        correctAnswer: "envied",
      },
      sourceNote:
        'Ibn Kathir: The Prophet said: "Seek help in fulfilling your needs by being discrete, for verily, every owner of a blessing is envied."',
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to a hadith cited by Ibn Kathir, dreams remain suspended as long as they are not interpreted, but once interpreted, they come true.",
        isTrue: true,
      },
      sourceNote:
        'Ibn Kathir via Al-Hakim (Sahih chain): "Dreams remain suspended as long as they are not interpreted. If interpreted, they come true."',
    },
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "Ya'qub feared his sons' envy toward Yusuf", effect: "He warned Yusuf not to tell his brothers about the dream" },
          { cause: "Every owner of a blessing is envied", effect: "The Prophet advised: 'Seek help in fulfilling your needs by being discrete'" },
          { cause: "Dreams remain suspended as long as they are not interpreted", effect: "Once interpreted, they come true — hence Ya'qub's caution" },
        ],
      },
      sourceNote:
        "Ibn Kathir: Ya'qub cautioned Yusuf fearing envy. The Prophet said: 'Seek help by being discrete, for every owner of a blessing is envied.' Also via Al-Hakim: 'Dreams remain suspended until interpreted; once interpreted, they come true.'",
    },
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "Why did Ya'qub warn Yusuf not to share his dream with his brothers?",
        scenarios: [
          { text: "Ya'qub feared his sons would become envious and devise harmful schemes against Yusuf, knowing that every owner of a blessing is envied.", isCorrect: true },
          { text: "Ya'qub believed the dream was a bad omen and did not want the brothers to become frightened.", isCorrect: false },
          { text: "Ya'qub thought the brothers would mock Yusuf and cause him to lose faith in the dream's significance.", isCorrect: false },
        ],
      },
      sourceNote:
        "Ibn Kathir: Ya'qub cautioned Yusuf against revealing this vision to his brothers, fearing they would become envious and devise harmful schemes.",
    },
  ],

  "12:6": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          "According to Mujahid and As-Suddi as cited by Ibn Kathir, what does 'Ta'wil Al-Ahadith' mean in this verse?",
        options: [
          "The interpretation of dreams",
          "The explanation of hadith",
          "The narration of stories",
          "The compilation of sayings",
        ],
        correctIndex: 0,
      },
      sourceNote:
        'Ibn Kathir via Mujahid and As-Suddi: "Ta\'wil Al-Ahadith here means the interpretation of dreams specifically."',
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          "Ibn Kathir notes that Ibrahim holds the specific title ___ — Allah's intimate friend.",
        options: ["Khalilullah", "Habibullah", "Safiullah", "Ruhullah"],
        correctAnswer: "Khalilullah",
      },
      sourceNote:
        'Ibn Kathir: "Ibrahim is titled Khalilullah — Allah\'s intimate friend."',
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, the chain of prophetic favor runs: Ibrahim → Ishaq → Ya'qub → Yusuf.",
        isTrue: true,
      },
      sourceNote:
        "Ibn Kathir: As He perfected it aforetime on your fathers, Ibrahim and Ishaq. The chain: Ibrahim → Ishaq → Ya'qub → Yusuf.",
    },
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "What does 'Ta'wil Al-Ahadith' mean in this verse, according to scholars cited by Ibn Kathir?",
        scenarios: [
          { text: "According to Mujahid and As-Suddi, it specifically means the interpretation of dreams — a skill Allah would teach Yusuf as part of His blessing.", isCorrect: true },
          { text: "It refers to the ability to compile and authenticate hadith narrations for future generations.", isCorrect: false },
          { text: "It means the art of storytelling that Yusuf would use to teach moral lessons to the people of Egypt.", isCorrect: false },
        ],
      },
      sourceNote:
        'Ibn Kathir via Mujahid and As-Suddi: "Ta\'wil Al-Ahadith here means the interpretation of dreams specifically."',
    },
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "Allah chose Yusuf and perfected His blessing upon him", effect: "He taught him the interpretation of dreams (Ta'wil Al-Ahadith)" },
          { cause: "The chain of prophetic favor runs through Ibrahim, Ishaq, Ya'qub", effect: "Yusuf inherits this blessing as the next in the noble prophetic lineage" },
        ],
      },
      sourceNote:
        "Ibn Kathir: 'Ta'wil Al-Ahadith means the interpretation of dreams.' Also: 'As He perfected it aforetime on your fathers, Ibrahim and Ishaq.' The chain: Ibrahim → Ishaq → Ya'qub → Yusuf.",
    },
  ],
};
