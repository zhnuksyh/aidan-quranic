import { PuzzleItem } from "../types/lesson";

/**
 * Curated puzzles derived from authentic Tafsir Ibn Kathir (QF API ID 169).
 * Every question is traceable to a specific factual claim in the tafsir.
 * sourceNote cites the exact tafsir passage each puzzle is based on.
 *
 * Keyed by verseKey (e.g. "1:1") — 3 puzzles per verse, 19 verses = 57 total.
 */
export const CURATED_PUZZLES: Record<string, PuzzleItem[]> = {
  // ══════════════════════════════════════════════════════════
  // WORLD 1: SURAH AL-FATIHA
  // ══════════════════════════════════════════════════════════

  "1:1": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          "According to Ibn Kathir, what did the Prophet call Al-Fatihah?",
        options: [
          "The greatest Surah in the Quran",
          "The final revelation",
          "The Surah of patience",
          "The secret prayer",
        ],
        correctIndex: 0,
      },
      sourceNote:
        'Ibn Kathir: "The Prophet said it is the greatest Surah in the Quran."',
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          'Ibn Kathir explains that "Ar-Rahman" denotes mercy toward all ___, while "Ar-Rahim" is mercy specifically for the believers.',
        options: ["creation", "prophets", "angels", "scholars"],
        correctAnswer: "creation",
      },
      sourceNote:
        'Ibn Kathir: "Ar-Rahman denotes mercy that encompasses all creation without exception. Ar-Rahim denotes mercy directed specifically toward the believers."',
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, Al-Fatihah contains seven verses, twenty-five words, and one hundred and thirteen letters.",
        isTrue: true,
      },
      sourceNote:
        'Ibn Kathir: "Al-Fatihah contains seven Ayat, twenty-five words, and one hundred and thirteen letters."',
    },
  ],

  "1:2": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          "According to Ibn Kathir, what does Allah say when His servant recites 'Alhamdulillahi Rabbil-Alamin'?",
        options: [
          "My servant has praised Me",
          "My servant has obeyed Me",
          "My servant has remembered Me",
          "My servant has repented to Me",
        ],
        correctIndex: 0,
      },
      sourceNote:
        'Ibn Kathir via Ibn Abbas: "When the servant says Alhamdulillahi Rabbil-Alamin, Allah says: My servant has praised Me."',
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          "Ibn Kathir explains that Al-Hamd (praise) is broader than Ash-Shukr (thanks), because Hamd covers both attributes and ___.",
        options: ["actions", "prayers", "dreams", "names"],
        correctAnswer: "actions",
      },
      sourceNote:
        'Ibn Kathir: "Hamd praises both characteristics and actions. Shukr specifically acknowledges what has been done, not attributes alone."',
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          'According to Ibn Kathir, "Al-Alamin" refers to all creation in the heavens and earth — everything except Allah Himself.',
        isTrue: true,
      },
      sourceNote:
        'Ibn Kathir via Qatadah: "Al-Alamin refers to every type of creation in the heavens and the earth."',
    },
  ],

  "1:3": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          'Why does Allah mention "Ar-Rahman Ar-Rahim" immediately after "Rabbil-Alamin," according to Ibn Kathir?',
        options: [
          "To balance the sense of divine might with hope in His compassion",
          "To repeat His most important name twice",
          "To introduce a new topic in the Surah",
          "To mark the end of the first section",
        ],
        correctIndex: 0,
      },
      sourceNote:
        'Ibn Kathir: "Rabb carries an element of warning and might (Rahbah). By following it with Ar-Rahman Ar-Rahim, Allah encourages hope in His compassion (Raghbah)."',
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          "Ibn Kathir notes that the Quran consistently balances descriptions of retribution with ___.",
        options: ["mercy", "power", "knowledge", "creation"],
        correctAnswer: "mercy",
      },
      sourceNote:
        "Ibn Kathir via Al-Qurtubi: This balance of intimidation and encouragement is a consistent stylistic feature throughout the Quran.",
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to a hadith in Sahih Muslim cited by Ibn Kathir, if the disbeliever knew what mercy Allah has, none would lose hope of entering His Paradise.",
        isTrue: true,
      },
      sourceNote:
        'Ibn Kathir via Sahih Muslim: "If the disbeliever knew what mercy Allah has, none would lose hope of entering His Paradise."',
    },
  ],

  "1:4": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          'What does "Yawm Ad-Din" mean according to Ibn Abbas, as cited by Ibn Kathir?',
        options: [
          "The Day of Recompense for creatures",
          "The Day of Religion",
          "The Day of Prayer",
          "The Day of Creation",
        ],
        correctIndex: 0,
      },
      sourceNote:
        'Ibn Kathir via Ibn Abbas: "Yawm Ad-Din is the Day of Recompense for the creatures — the Day He will reckon with them for their deeds."',
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          'The Prophet said that the most despised name to Allah on the Day of Resurrection is a man who calls himself "king of ___."',
        options: ["kings", "worlds", "nations", "people"],
        correctAnswer: "kings",
      },
      sourceNote:
        'Ibn Kathir: "The Prophet said: The most despised name to Allah on the Day of Resurrection is that of a man who calls himself king of kings."',
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, the Day of Judgment is singled out because on it no one except Allah can claim ownership of anything.",
        isTrue: true,
      },
      sourceNote:
        'Ibn Kathir: "That Day is singled out because on it no one will be able to claim ownership of anything whatsoever."',
    },
  ],

  "1:5": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          "According to Ibn Kathir, some early scholars called verse 1:5 by what title?",
        options: [
          "The secret of Al-Fatihah",
          "The heart of the Quran",
          "The key to Paradise",
          "The light of guidance",
        ],
        correctIndex: 0,
      },
      sourceNote:
        'Ibn Kathir: "Some scholars of the early generations called this verse the secret of Al-Fatihah."',
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          'Ibn Kathir explains that "You alone we worship" is a declaration of freedom from ___ (associating partners with Allah).',
        options: ["shirk", "prayer", "fasting", "charity"],
        correctAnswer: "shirk",
      },
      sourceNote:
        'Ibn Kathir: "The first half is a declaration of freedom from shirk (polytheism/associating partners with Allah)."',
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, worship is mentioned before asking for help because worship is the goal while help is the means.",
        isTrue: true,
      },
      sourceNote:
        'Ibn Kathir: "Worship is the ultimate objective and purpose of creation, while seeking help is the means to achieve that purpose."',
    },
  ],

  "1:6": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          'According to At-Tabari as cited by Ibn Kathir, what does "As-Sirat Al-Mustaqim" specifically refer to?',
        options: [
          "Islam",
          "The Quran only",
          "Prayer",
          "The path to Makkah",
        ],
        correctIndex: 0,
      },
      sourceNote:
        'Ibn Kathir via At-Tabari and Jabir bin Abdullah: "As-Sirat Al-Mustaqim specifically refers to Islam."',
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          "In a prophetic narration cited by Ibn Kathir, the Straight Path is described as a road with walls on both sides, with the ___ as a caller at the entrance.",
        options: ["Quran", "Prophet", "angel", "believer"],
        correctAnswer: "Quran",
      },
      sourceNote:
        'Ibn Kathir via An-Nawwas bin Sam\'an: "At the entrance of the path stands a caller (the Quran) who announces: O people! Stay on the path and do not deviate!"',
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          "According to Ibn Kathir, believers ask for guidance repeatedly because they need Allah every hour to remain firm on the path.",
        isTrue: true,
      },
      sourceNote:
        'Ibn Kathir: "The servant needs Allah at every hour of his life to help him remain firm on the path."',
    },
  ],

  "1:7": [
    {
      puzzleType: "multiple-choice",
      puzzleData: {
        question:
          'According to Ibn Kathir referencing Surah An-Nisa 4:69-70, "those blessed" are which four groups?',
        options: [
          "Prophets, truthful believers, martyrs, and the righteous",
          "Scholars, warriors, merchants, and farmers",
          "Angels, prophets, saints, and kings",
          "Men, women, children, and elders",
        ],
        correctIndex: 0,
      },
      sourceNote:
        'Ibn Kathir via Surah An-Nisa 4:69-70: "The Prophets, the Siddiqin (truthful believers), the Shuhada (martyrs), and the Salihin (righteous)."',
    },
    {
      puzzleType: "drag-drop",
      puzzleData: {
        sentence:
          'Abu Hurayrah narrated that the Prophet said: whoever says "Amin" coinciding with the Amin of the ___, his previous sins will be forgiven.',
        options: ["angels", "prophets", "companions", "scholars"],
        correctAnswer: "angels",
      },
      sourceNote:
        'Ibn Kathir via Abu Hurayrah: "Whoever says Amin coinciding with the Amin of the angels, his previous sins will be forgiven."',
    },
    {
      puzzleType: "true-false",
      puzzleData: {
        statement:
          'According to Ibn Kathir, the Prophet himself explained that "those who earned anger" refers to those who knew the truth but deliberately abandoned it.',
        isTrue: true,
      },
      sourceNote:
        'Ibn Kathir via Adi bin Hatim: "The Prophet himself explained: Those who have earned the anger are the Jews [who knew truth but abandoned it]."',
    },
  ],

  // ══════════════════════════════════════════════════════════
  // WORLD 2: SURAH YUSUF
  // ══════════════════════════════════════════════════════════

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
  ],

  // ══════════════════════════════════════════════════════════
  // WORLD 3: SURAH AR-RAHMAN
  // ══════════════════════════════════════════════════════════

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
