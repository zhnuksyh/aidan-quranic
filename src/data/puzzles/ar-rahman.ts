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
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "Why is 'He taught the Quran' mentioned BEFORE 'He created man' in Surah Ar-Rahman?",
        scenarios: [
          { text: "Because the blessing of divine revelation holds such primacy that it is listed first — even before the creation of the very beings who would receive it.", isCorrect: true },
          { text: "Because the Quran existed physically before mankind was created, stored in a heavenly library.", isCorrect: false },
          { text: "Because it is an error in translation — in Arabic the order is reversed.", isCorrect: false },
        ],
      },
      sourceNote:
        "Ibn Kathir: Teaching the Quran is listed FIRST after naming Himself Ar-Rahman — before even mentioning the creation of mankind.",
    },
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "Allah named Himself Ar-Rahman (The Most Merciful)", effect: "The very first mercy He lists is teaching the Quran — even before creating man" },
          { cause: "Allah revealed the Quran to mankind", effect: "He also made it easy to memorize, understand, and recite" },
        ],
      },
      sourceNote:
        "Ibn Kathir: Teaching the Quran is listed FIRST after naming Himself Ar-Rahman. Also: Allah revealed the Quran and made it easy to memorize, understand, and recite.",
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
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "The blessing of revelation is even greater than the blessing of existence", effect: "Teaching the Quran (55:2) is deliberately placed before creating man (55:3)" },
          { cause: "The creation of the human being has immense complexity and wonder", effect: "It is counted among the mercies of Ar-Rahman" },
        ],
      },
      sourceNote:
        "Ibn Kathir: The ordering emphasizes that the blessing of revelation is even greater than the blessing of existence itself. Also: The creation of the human being is itself counted among the mercies of Ar-Rahman.",
    },
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "What is the significance of the creation of man being listed as a mercy of Ar-Rahman?",
        scenarios: [
          { text: "The creation of the human being — with all of its complexity and wonder — is itself counted among the mercies of Ar-Rahman, not merely a neutral act of power.", isCorrect: true },
          { text: "Man's creation is listed as a mercy because humans are the only creatures who will enter Paradise.", isCorrect: false },
          { text: "It is listed as a mercy because mankind was created without any struggle or difficulty on Allah's part.", isCorrect: false },
        ],
      },
      sourceNote:
        "Ibn Kathir: The creation of the human being — with all of its complexity and wonder — is itself counted among the mercies of Ar-Rahman.",
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
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "What does 'Al-Bayan' encompass according to Ibn Kathir?",
        scenarios: [
          { text: "Al-Bayan encompasses the ability to articulate thoughts, communicate meaning, comprehend what is said, and express what is in the mind — far more than just speaking words.", isCorrect: true },
          { text: "Al-Bayan refers exclusively to the ability to read and write in Arabic script.", isCorrect: false },
          { text: "Al-Bayan means the power to see hidden truths and predict the future through divine insight.", isCorrect: false },
        ],
      },
      sourceNote:
        "Ibn Kathir: Al-Bayan encompasses the ability to articulate thoughts, communicate meaning, comprehend what is said, and express what is in the mind.",
    },
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "Allah granted humans Al-Bayan (eloquent speech and expression)", effect: "Humans can convey knowledge, understand revelation, and maintain social relationships" },
          { cause: "The faculty of speech is transmitted across generations", effect: "The Quran's message can be passed from generation to generation" },
        ],
      },
      sourceNote:
        "Ibn Kathir: Without Al-Bayan, humans could not convey knowledge, understand revelation, engage in worship through spoken word, or maintain social relationships. The ability to speak makes the transmission of the Quran's message possible from generation to generation.",
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
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "What does 'Husban' mean in the context of the sun and moon's movement?",
        scenarios: [
          { text: "Husban comes from Hisab (calculation/reckoning), indicating that the sun and moon follow exact, predictable mathematical paths — never deviating from their appointed courses.", isCorrect: true },
          { text: "Husban means beauty (from Husn), indicating that the sun and moon were created primarily for aesthetic purposes.", isCorrect: false },
          { text: "Husban refers to confinement (from Hubs), meaning the sun and moon are locked in fixed positions in the sky.", isCorrect: false },
        ],
      },
      sourceNote:
        'Ibn Kathir: "Husban comes from Hisab (calculation/reckoning) and indicates that the celestial movements follow exact, predictable mathematical paths."',
    },
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "The sun and moon follow exact mathematical paths (Husban)", effect: "Humans can measure time — days, months, years, and seasons" },
          { cause: "The celestial bodies never deviate from their appointed courses", effect: "Their regularity serves as a sign of Allah's precise design and control" },
        ],
      },
      sourceNote:
        "Ibn Kathir: Husban comes from Hisab (calculation). The regularity of the sun and moon enables the measurement of time — days, months, years, and seasons. They never deviate from their appointed courses.",
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
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "What does 'An-Najm' refer to in this verse, according to Ibn Abbas?",
        scenarios: [
          { text: "According to Ibn Abbas as cited by Ibn Kathir, An-Najm refers to plants that creep along the ground without a trunk or stem — prostrating by their very nature.", isCorrect: true },
          { text: "An-Najm refers exclusively to the stars in the sky, which prostrate by setting below the horizon each night.", isCorrect: false },
          { text: "An-Najm refers to the angels who prostrate before Allah's throne in the highest heaven.", isCorrect: false },
        ],
      },
      sourceNote:
        'Ibn Kathir via Ibn Abbas: "An-Najm refers to plants that creep along the ground without a trunk or stem."',
    },
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "Stars, herbs, and trees all prostrate to Allah", effect: "All creation submits to Allah's will, whether they have consciousness or not" },
          { cause: "The refrain 'Which blessings will you deny?' is posed", effect: "Both mankind and Jinn are challenged to acknowledge these undeniable blessings" },
        ],
      },
      sourceNote:
        "Ibn Kathir: Their Sujud means all creation submits to Allah's will and divine command, whether conscious or not. The refrain is addressed to BOTH mankind and Jinn, challenging both species to acknowledge the undeniable blessings.",
    },
  ],
};
