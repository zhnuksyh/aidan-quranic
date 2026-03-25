import { PuzzleItem } from "../../types/lesson";

/**
 * Curated puzzles for Surah Al-Fatiha (1:1–1:7).
 * Derived from authentic Tafsir Ibn Kathir (QF API ID 169).
 * Every question is traceable to a specific factual claim in the tafsir.
 */
export const AL_FATIHA_PUZZLES: Record<string, PuzzleItem[]> = {
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
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "Why is Al-Fatihah considered the greatest Surah in the Quran?",
        scenarios: [
          { text: "The Prophet said it is the greatest Surah because it contains the essence of the entire Quran's message — praise, lordship, mercy, the Day of Judgment, worship, and guidance — all in seven verses.", isCorrect: true },
          { text: "It was the last Surah revealed, serving as a farewell summary of the Quran's teachings to the Muslim community.", isCorrect: false },
          { text: "It was specifically designated by the angel Jibril as the opening prayer for the five daily prayers only.", isCorrect: false },
        ],
      },
      sourceNote:
        'Ibn Kathir: "The Prophet said to Abu Sa\'id bin Al-Mu\'alla: I will teach you the greatest Surah in the Quran before you leave the Masjid — it is Al-Fatihah, the seven oft-repeated verses."',
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
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "What happens in the divine exchange when a servant recites 'Alhamdulillahi Rabbil-Alamin'?",
        scenarios: [
          { text: "Allah responds directly, saying: 'My servant has praised Me.' This is a personal acknowledgment from Allah to the one who recites this verse.", isCorrect: true },
          { text: "The angels record a good deed in the servant's book, but Allah does not respond directly during the recitation.", isCorrect: false },
          { text: "Allah forgives all the servant's sins immediately upon hearing this praise.", isCorrect: false },
        ],
      },
      sourceNote:
        'Ibn Kathir via Ibn Abbas: "When the servant says Alhamdulillahi Rabbil-Alamin, Allah says: My servant has praised Me."',
    },
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "Hamd (praise) covers both attributes and actions", effect: "It is broader than Shukr (thanks), which only acknowledges actions done" },
          { cause: "The servant recites 'Alhamdulillahi Rabbil-Alamin'", effect: "Allah responds: 'My servant has praised Me'" },
        ],
      },
      sourceNote:
        'Ibn Kathir: "Hamd praises both characteristics and actions. Shukr specifically acknowledges what has been done." Also: "When the servant says Alhamdulillahi Rabbil-Alamin, Allah says: My servant has praised Me."',
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
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "'Rabb' (Lord) carries an element of might and warning (Rahbah)", effect: "Allah follows it with 'Ar-Rahman Ar-Rahim' to encourage hope in His compassion (Raghbah)" },
          { cause: "The Quran consistently pairs descriptions of retribution with mercy", effect: "This creates a balanced spiritual dynamic of awe and hope throughout the Quran" },
        ],
      },
      sourceNote:
        'Ibn Kathir: "Rabb carries an element of warning and might. By following it with Ar-Rahman Ar-Rahim, Allah encourages hope in His compassion." Also via Al-Qurtubi: This balance of intimidation and encouragement is a consistent feature throughout the Quran.',
    },
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "Why does Allah place 'Ar-Rahman Ar-Rahim' immediately after 'Rabbil-Alamin'?",
        scenarios: [
          { text: "Because 'Rabb' conveys might and authority, so 'Ar-Rahman Ar-Rahim' is placed right after to balance that awe with hope in Allah's compassion and mercy.", isCorrect: true },
          { text: "Because 'Ar-Rahman Ar-Rahim' are the two most common names of Allah, so they appear in every Surah opening as a standard formula.", isCorrect: false },
          { text: "Because the verse is listing all of Allah's names in alphabetical order according to the Arabic alphabet.", isCorrect: false },
        ],
      },
      sourceNote:
        'Ibn Kathir: "Rabb carries an element of warning and might (Rahbah). By following it with Ar-Rahman Ar-Rahim, Allah encourages hope in His compassion (Raghbah)."',
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
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "Why is the Day of Judgment singled out in connection with Allah's sovereignty?",
        scenarios: [
          { text: "Because on that Day, no one will be able to claim ownership of anything whatsoever — all authority belongs exclusively to Allah.", isCorrect: true },
          { text: "Because it is the only day when Allah exercises His power; on other days, He delegates authority to the angels.", isCorrect: false },
          { text: "Because the Day of Judgment is when Allah first created the concept of kingship and ownership.", isCorrect: false },
        ],
      },
      sourceNote:
        'Ibn Kathir: "That Day is singled out because on it no one will be able to claim ownership of anything whatsoever."',
    },
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "A man calls himself 'king of kings' in this world", effect: "He earns the most despised name to Allah on the Day of Resurrection" },
          { cause: "The Day of Judgment arrives", effect: "No one except Allah can claim ownership of anything" },
        ],
      },
      sourceNote:
        'Ibn Kathir: "The Prophet said: The most despised name to Allah on the Day of Resurrection is that of a man who calls himself king of kings." Also: "That Day is singled out because on it no one will be able to claim ownership of anything whatsoever."',
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
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "Worship (Ibadah) is mentioned first in the verse", effect: "Because worship is the ultimate goal and purpose of creation" },
          { cause: "Seeking help (Isti'anah) is mentioned second", effect: "Because seeking help is the means to achieve the goal of worship" },
          { cause: "Early scholars called this verse 'the secret of Al-Fatihah'", effect: "Because it captures the entire relationship between servant and Lord" },
        ],
      },
      sourceNote:
        'Ibn Kathir: "Some scholars called this verse the secret of Al-Fatihah. Worship is the objective, seeking help is the means. One should care about the objectives above the means."',
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
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "In a prophetic narration cited by Ibn Kathir, how is the Straight Path described?",
        scenarios: [
          { text: "It is a road with walls on both sides containing open doors, with the Quran as a caller at the entrance announcing: 'O people! Stay on the path and do not deviate!'", isCorrect: true },
          { text: "It is a bridge made of light that stretches across the heavens, visible only to those who pray five times daily.", isCorrect: false },
          { text: "It is a mountain trail that narrows as one ascends, symbolizing the increasing difficulty of righteous living.", isCorrect: false },
        ],
      },
      sourceNote:
        'Ibn Kathir via An-Nawwas bin Sam\'an: "At the entrance of the path stands a caller (the Quran) who announces: O people! Stay on the path and do not deviate!"',
    },
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "The servant needs Allah at every hour of life", effect: "Believers ask for guidance to the Straight Path repeatedly in every prayer" },
          { cause: "The Quran stands as a caller at the entrance of the Straight Path", effect: "It warns: 'O people! Stay on the path and do not deviate!'" },
        ],
      },
      sourceNote:
        'Ibn Kathir: "The servant needs Allah at every hour of his life to help him remain firm on the path." Also via An-Nawwas bin Sam\'an: "At the entrance of the path stands a caller (the Quran)."',
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
    {
      puzzleType: "cause-effect",
      puzzleData: {
        pairs: [
          { cause: "A person says 'Amin' coinciding with the Amin of the angels", effect: "His previous sins will be forgiven" },
          { cause: "Those who earned anger knew the truth", effect: "They deliberately abandoned it despite having knowledge" },
        ],
      },
      sourceNote:
        'Ibn Kathir via Abu Hurayrah: "Whoever says Amin coinciding with the Amin of the angels, his previous sins will be forgiven." Also via Adi bin Hatim: "Those who earned the anger knew truth but abandoned it."',
    },
    {
      puzzleType: "context-detective",
      puzzleData: {
        prompt: "According to Ibn Kathir, who are 'those blessed' whose path believers ask to follow?",
        scenarios: [
          { text: "They are four groups mentioned in Surah An-Nisa (4:69-70): the Prophets, the truthful believers (Siddiqin), the martyrs (Shuhada), and the righteous (Salihin).", isCorrect: true },
          { text: "They are the first generation of Muslims who fought at the Battle of Badr and were promised Paradise.", isCorrect: false },
          { text: "They are all people who regularly perform the five daily prayers and fast during Ramadan.", isCorrect: false },
        ],
      },
      sourceNote:
        'Ibn Kathir via Surah An-Nisa 4:69-70: "The Prophets, the Siddiqin (truthful believers), the Shuhada (martyrs), and the Salihin (righteous)."',
    },
  ],
};
