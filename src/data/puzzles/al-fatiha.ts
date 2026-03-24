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
};
