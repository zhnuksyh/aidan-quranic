import { PuzzleItem } from "../../types/lesson";

/**
 * Curated puzzles for Surah Ar-Rahman (55:1–55:6).
 * Derived from authentic Tafsir Ibn Kathir (QF API ID 169).
 * Every question is traceable to a specific factual claim in the tafsir.
 */
export const AR_RAHMAN_PUZZLES: Record<string, PuzzleItem[]> = {
  "55:1": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          "According to Ibn Kathir, who responded better to Surah Ar-Rahman when the Prophet recited it — the Companions or the Jinn?",
        options: [
          "The Jinn responded better",
          "The Companions responded better",
          "Both responded equally",
          "Neither responded",
        ],
        correctIndex: 0,
      },
      sourceNote:
        'Ibn Kathir: "The Prophet said: I recited it to the Jinn... their response was better than yours! Every time I reached the refrain, the Jinn replied: None of Your favors do we deny, our Lord!"',
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          "Ibn Kathir notes that when the Prophet recited Ar-Rahman to the Companions, they remained completely ___.",
        options: ["silent", "joyful", "tearful", "confused"],
        correctAnswer: "silent",
      },
      sourceNote:
        "Ibn Kathir: The Prophet recited this entire Surah to his Companions, but they remained silent throughout.",
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, Ibn Mas'ud considered Surah Ar-Rahman to be the beginning of the Mufassal section of the Quran.",
        isTrue: true,
      },
      sourceNote:
        "Ibn Kathir: Abdullah bin Mas'ud considered Surah Ar-Rahman to be the beginning of the Mufassal section of the Quran.",
    },
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "What happened when the Prophet recited Surah Ar-Rahman to different audiences?",
        scenarios: [
          { text: "The Companions remained completely silent during the recitation. Later, the Jinn responded better — every time the Prophet reached the refrain 'Which blessings will you deny?', they replied: 'None of Your favors do we deny, our Lord!'", isCorrect: true },
          { text: "Both the Companions and the Jinn wept uncontrollably when hearing the Surah for the first time, moved by its descriptions of Paradise.", isCorrect: false },
          { text: "The Companions immediately memorized the Surah upon first hearing and began teaching it to the people of Madinah.", isCorrect: false },
        ],
      },
      sourceNote:
        'Ibn Kathir: "The Prophet said: I recited it to the Jinn on the night of the Jinn, and their response was better than yours! Every time I reached the refrain, they said: None of Your favors do we deny, our Lord!"',
    },
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "The Prophet recited Ar-Rahman to the Companions", effect: "They remained completely silent throughout" },
          { cause: "The Prophet recited Ar-Rahman to the Jinn", effect: "They responded at every refrain: 'None of Your favors do we deny!'" },
        ],
      },
      sourceNote:
        'Ibn Kathir: The Prophet rebuked the Companions\' silence by telling them the Jinn had responded better. This hadith highlights the expected response to hearing about Allah\'s blessings.',
    },
  ],

  "55:2": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          'According to Ibn Kathir, what is significant about the order in Surah Ar-Rahman — "He taught the Quran" (55:2) before "He created man" (55:3)?',
        options: [
          "Divine revelation holds primacy even over the creation of its recipients",
          "The Quran was the last thing created",
          "Teaching is harder than creating",
          "This is simply the Arabic grammatical convention",
        ],
        correctIndex: 0,
      },
      sourceNote:
        "Ibn Kathir: Teaching the Quran is listed FIRST after naming Himself Ar-Rahman — before even mentioning the creation of mankind.",
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          "Ibn Kathir explains that Allah not only revealed the Quran but specifically made it easy to memorize, understand, and ___.",
        options: ["recite", "translate", "write", "debate"],
        correctAnswer: "recite",
      },
      sourceNote:
        "Ibn Kathir: Allah revealed the Quran and made it easy to memorize, understand, and recite.",
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, the ability to pronounce letters through articulation points (tongue, lips, throat) is itself counted as a divine mercy.",
        isTrue: true,
      },
      sourceNote:
        "Ibn Kathir: He enabled speech and proper pronunciation of letters through the various articulation points of the mouth.",
    },
  ],

  "55:3": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          'According to Ibn Kathir, why is "He taught the Quran" placed before "He created man" in Surah Ar-Rahman?',
        options: [
          "The blessing of revelation is even greater than the blessing of existence",
          "The Quran was revealed before Adam was created",
          "Teaching is mentioned first in Arabic tradition",
          "It is a grammatical requirement in Arabic",
        ],
        correctIndex: 0,
      },
      sourceNote:
        "Ibn Kathir: The ordering emphasizes that the blessing of revelation is even greater than the blessing of existence itself.",
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          "Ibn Kathir states that the creation of the human being is itself counted among the ___ of Ar-Rahman.",
        options: ["mercies", "tests", "signs", "commands"],
        correctAnswer: "mercies",
      },
      sourceNote:
        "Ibn Kathir: The creation of the human being — with all of its complexity and wonder — is itself counted among the mercies of Ar-Rahman.",
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, in Surah Ar-Rahman, teaching the Quran (55:2) is mentioned BEFORE creating man (55:3).",
        isTrue: true,
      },
      sourceNote:
        "Ibn Kathir: The deliberate ordering places the teaching of the Quran (55:2) BEFORE the creation of man (55:3).",
    },
  ],

  "55:4": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          'According to Ibn Kathir, what does "Al-Bayan" mean in this verse?',
        options: [
          "The capacity for eloquent speech, expression, and communication",
          "The ability to read and write",
          "The power of prophecy",
          "The gift of seeing the unseen",
        ],
        correctIndex: 0,
      },
      sourceNote:
        "Ibn Kathir: Al-Bayan encompasses the ability to articulate thoughts, communicate meaning, comprehend what is said, and express what is in the mind.",
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          "Ibn Kathir explains that without Al-Bayan (speech), humans could not convey ___ or understand revelation.",
        options: ["knowledge", "wealth", "authority", "territory"],
        correctAnswer: "knowledge",
      },
      sourceNote:
        "Ibn Kathir: Without Al-Bayan, humans could not convey knowledge, understand revelation, engage in worship through spoken word, or maintain social relationships.",
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, the faculty of speech makes the transmission of the Quran's message possible from generation to generation.",
        isTrue: true,
      },
      sourceNote:
        "Ibn Kathir: The ability to speak is what makes the transmission of the Quran's message possible from generation to generation.",
    },
  ],

  "55:5": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          'According to Ibn Kathir, what does "Husban" come from in verse 55:5?',
        options: [
          "Hisab (calculation/reckoning)",
          "Husn (beauty)",
          "Hubs (confinement)",
          "Hasab (lineage)",
        ],
        correctIndex: 0,
      },
      sourceNote:
        'Ibn Kathir: "Husban comes from Hisab (calculation/reckoning) and indicates that the celestial movements follow exact, predictable mathematical paths."',
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          "Ibn Kathir explains that the regularity of the sun and moon enables the measurement of ___ — days, months, years, and seasons.",
        options: ["time", "distance", "weight", "depth"],
        correctAnswer: "time",
      },
      sourceNote:
        "Ibn Kathir: The regularity of the sun and moon enables the measurement of time — days, months, years, and seasons.",
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, the sun and moon follow exact mathematical paths and never deviate from their appointed courses.",
        isTrue: true,
      },
      sourceNote:
        "Ibn Kathir: The celestial movements are not random but follow exact, predictable mathematical paths. They never deviate from their appointed courses.",
    },
  ],

  "55:6": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          'According to Ibn Kathir, who is the refrain "Which blessings will you deny?" addressed to?',
        options: [
          "Both mankind and Jinn",
          "Only mankind",
          "Only the disbelievers",
          "Only the angels",
        ],
        correctIndex: 0,
      },
      sourceNote:
        'Ibn Kathir: This question is addressed to BOTH mankind and Jinn, challenging both species to acknowledge the undeniable blessings.',
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          'According to Ibn Abbas as cited by Ibn Kathir, "An-Najm" in this verse may refer to plants without ___ that creep along the ground.',
        options: ["stems", "leaves", "roots", "flowers"],
        correctAnswer: "stems",
      },
      sourceNote:
        'Ibn Kathir via Ibn Abbas: "An-Najm refers to plants that creep along the ground without a trunk or stem."',
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, the prostration of stars/herbs and trees means all creation submits to Allah, whether conscious or not.",
        isTrue: true,
      },
      sourceNote:
        "Ibn Kathir: Their Sujud means all creation submits to Allah's will and divine command, whether they have consciousness or not.",
    },
  ],
};
