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
    teachingCards: [
      {
        title: "The Power of Bismillah",
        body: "The Basmalah opens the entire Quran and is recited before almost every action in a Muslim's life. It reminds us that all our deeds should begin with the consciousness of God.",
        icon: "book-outline",
        lottieAsset: "book",
      },
      {
        title: "A Bond with the Creator",
        body: "The scholars say the Basmalah establishes the relationship between the servant and the Lord. Everything we do is through His name, by His grace, and for His sake.",
        icon: "heart-outline",
        lottieAsset: "heart",
      },
      {
        title: "Grace and Mercy",
        body: "By invoking 'the Most Gracious, the Most Merciful,' we acknowledge that Allah's mercy surrounds every action we take. This phrase sets the tone for the entire Quran.",
        icon: "sunny-outline",
      },
    ],
    puzzles: [
      {
        puzzleType: "drag-drop",
        puzzleData: {
          sentence: "The Basmalah teaches us to begin every action in the ___ of Allah.",
          options: ["name", "power", "house", "light"],
          correctAnswer: "name",
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "Why is the Basmalah placed at the very beginning of the Quran?",
          options: [
            "To establish that everything begins with Allah's name and grace",
            "To teach Arabic grammar to the reader",
            "To separate the Quran from previous scriptures",
            "To mark the start of Ramadan",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "The Basmalah reminds us that all deeds should begin with consciousness of God.",
          isTrue: true,
        },
      },
    ],
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
    teachingCards: [
      {
        title: "The Meaning of Rabb",
        body: "Allah is the 'Rabb' — Lord, Sustainer, and Cherisher of all creation. This is not limited to humans; it extends to every world and dimension that exists.",
        icon: "star-outline",
        lottieAsset: "stars",
      },
      {
        title: "All the Worlds",
        body: "The word 'Alamin' encompasses humans, jinn, angels, animals, and all of creation. It highlights the vast scope of Allah's care and sovereignty.",
        icon: "globe-outline",
        lottieAsset: "nature",
      },
      {
        title: "Universal Sovereignty",
        body: "Praising Allah as 'Rabb al-Alamin' means recognizing His sovereignty over everything in existence. Every being depends on Him for sustenance and care.",
        icon: "shield-outline",
      },
    ],
    puzzles: [
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "The word 'Alamin' refers only to the human world.",
          isTrue: false,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "What is the deeper significance of calling Allah 'Rabb al-Alamin' (Lord of all worlds)?",
          options: [
            "His care and sovereignty extend to every being in existence, not just humans",
            "He created multiple physical planets in the solar system",
            "Only the human world matters in the grand scheme",
            "It refers to Allah's power to destroy worlds",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "drag-drop",
        puzzleData: {
          sentence: "The word 'Rabb' means Lord, Sustainer, and ___.",
          options: ["Cherisher", "Destroyer", "Punisher", "Judge"],
          correctAnswer: "Cherisher",
        },
      },
    ],
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
    teachingCards: [
      {
        title: "The Root of Mercy",
        body: "Both Ar-Rahman and Ar-Raheem come from the root word 'Rahma,' meaning mercy. These two names together paint a complete picture of Allah's divine mercy.",
        icon: "heart-outline",
        lottieAsset: "heart",
      },
      {
        title: "Mercy for All Creation",
        body: "Ar-Rahman refers to the vast, all-encompassing mercy of Allah that covers all of creation — believers and disbelievers alike. No one is excluded from this universal mercy.",
        icon: "people-outline",
      },
      {
        title: "Special Mercy for Believers",
        body: "Ar-Raheem refers to the special mercy reserved for the believers in the Hereafter. While Ar-Rahman's mercy is universal, Ar-Raheem's mercy is a unique reward for those who believe.",
        icon: "star-outline",
        lottieAsset: "heart",
      },
    ],
    puzzles: [
      {
        puzzleType: "drag-drop",
        puzzleData: {
          sentence: "Both Ar-Rahman and Ar-Raheem come from the root word ___, meaning mercy.",
          options: ["Rahma", "Salaam", "Noor", "Ilm"],
          correctAnswer: "Rahma",
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "What is the key difference between Ar-Rahman and Ar-Raheem?",
          options: [
            "Ar-Rahman covers all creation; Ar-Raheem is special mercy for believers in the Hereafter",
            "Ar-Rahman is for believers only; Ar-Raheem is for all creation",
            "They are identical in meaning with no difference",
            "Ar-Rahman refers to punishment; Ar-Raheem refers to reward",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "Ar-Rahman's mercy is only for believers, while Ar-Raheem's mercy is for all creation.",
          isTrue: false,
        },
      },
    ],
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
    teachingCards: [
      {
        title: "The Day of Accountability",
        body: "Allah is the sole Master of the Day of Judgment — the day when all souls will be held accountable for their deeds. No king or ruler will have any authority on that day.",
        icon: "scale-outline",
        lottieAsset: "scales",
      },
      {
        title: "Perfect Justice",
        body: "Only Allah will judge, and His judgment will be perfectly just. The oppressed will be vindicated and wrongdoers will be held accountable for every action.",
        icon: "shield-outline",
        lottieAsset: "scales",
      },
      {
        title: "Hope and Accountability",
        body: "This awareness is meant to instill both hope and accountability in our hearts. It gives hope to the wronged and reminds us all to live with purpose and integrity.",
        icon: "sunny-outline",
      },
    ],
    puzzles: [
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "On the Day of Judgment, Allah is the sole authority and judge.",
          isTrue: true,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "Why does this verse instill both hope AND accountability?",
          options: [
            "Because Allah's perfect justice means the oppressed will be vindicated and wrongdoers held accountable",
            "Because the Day of Judgment is very far away so there is nothing to worry about",
            "Because only kings and rulers will be judged on that day",
            "Because accountability only applies to major sins",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "This verse is meant to instill only fear, without any hope.",
          isTrue: false,
        },
      },
    ],
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
    translationText: "You alone we worship, and You alone we ask for help.",
    teachingCards: [
      {
        title: "The Declaration of Tawheed",
        body: "This pivotal verse is a declaration of Tawheed (monotheism) — 'You alone we worship, and You alone we ask for help.' It is a rejection of all false dependencies.",
        icon: "compass-outline",
        lottieAsset: "book",
      },
      {
        title: "An Intimate Conversation",
        body: "The shift from third person to second person ('You') creates an intimate, direct conversation between the worshiper and God. It is as if you are standing before Allah, speaking to Him directly.",
        icon: "heart-outline",
        lottieAsset: "heart",
      },
    ],
    puzzles: [
      {
        puzzleType: "drag-drop",
        puzzleData: {
          sentence: "This verse is a declaration of ___, the oneness of God.",
          options: ["Tawheed", "Shukr", "Sabr", "Dhikr"],
          correctAnswer: "Tawheed",
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "You feel overwhelmed by exams and a friend suggests relying on a 'lucky charm.' Based on this verse, what should you do?",
          options: [
            "Turn to Allah alone for help, as only He truly controls outcomes",
            "Use the lucky charm since it cannot hurt",
            "Rely entirely on your own effort without any prayer",
            "Ask your friend to pray for you instead",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "The shift from third person to second person ('You') creates an intimate conversation with Allah.",
          isTrue: true,
        },
      },
    ],
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
    teachingCards: [
      {
        title: "The Greatest Supplication",
        body: "After declaring servitude and seeking help, the servant makes the most important supplication: 'Guide us to the straight path.' The Sirat al-Mustaqim is the path of truth and righteousness.",
        icon: "compass-outline",
        lottieAsset: "book",
      },
      {
        title: "17 Times a Day",
        body: "Every Muslim recites this prayer at least 17 times daily in their obligatory prayers. This makes it the most repeated supplication in a Muslim's life, showing how essential guidance is.",
        icon: "flame-outline",
      },
      {
        title: "Guidance Is Ongoing",
        body: "We ask for guidance repeatedly because staying on the right path requires constant divine support. Guidance is not a one-time event but an ongoing need throughout life.",
        icon: "leaf-outline",
        lottieAsset: "nature",
      },
    ],
    puzzles: [
      {
        puzzleType: "drag-drop",
        puzzleData: {
          sentence: "Muslims recite this supplication at least ___ times daily in prayers.",
          options: ["17", "5", "10", "33"],
          correctAnswer: "17",
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "Why do Muslims need to ask for guidance repeatedly, even if they are already Muslim?",
          options: [
            "Because guidance is an ongoing need — staying on the right path requires constant divine support",
            "Because Allah forgets our previous prayers",
            "Because the prayer only counts if said a certain number of times",
            "Because guidance is only needed during Ramadan",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "A friend is going through a difficult time and asks for advice. Based on this verse, what is the most important thing you can do?",
          options: [
            "Pray for their guidance and encourage them to turn to Allah for direction",
            "Tell them to solve the problem on their own",
            "Ignore their problems since it is not your concern",
            "Give them money to fix everything",
          ],
          correctIndex: 0,
        },
      },
    ],
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
    teachingCards: [
      {
        title: "The Blessed Path",
        body: "The straight path is the path of those whom Allah has blessed — the prophets, the truthful, the martyrs, and the righteous. These are the role models we are taught to follow.",
        icon: "people-outline",
        lottieAsset: "book",
      },
      {
        title: "Two Paths to Avoid",
        body: "The verse warns against two deviant paths: those who earned Allah's anger by knowingly rejecting truth, and those who went astray through ignorance. Knowledge and sincerity are both essential.",
        icon: "shield-outline",
      },
      {
        title: "The Company You Keep",
        body: "This verse teaches us to seek good company and follow righteous examples. Surrounding yourself with people of faith and integrity helps you stay on the blessed path.",
        icon: "people-outline",
        lottieAsset: "heart",
      },
    ],
    puzzles: [
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "The straight path refers to the path of prophets, truthful ones, martyrs, and the righteous.",
          isTrue: true,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "What is the difference between those who 'earned anger' and those who 'went astray'?",
          options: [
            "Those who earned anger knowingly rejected truth; those who went astray did so through ignorance",
            "There is no difference — both are the same group",
            "Those who earned anger were poor; those astray were wealthy",
            "Those who earned anger lived long ago; those astray are modern people",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "You notice your social circle is pulling you away from good habits. Based on this verse, what should you prioritize?",
          options: [
            "Seek righteous company, as this verse teaches us to follow the path of the blessed",
            "Stay with them since loyalty to friends is more important",
            "Isolate yourself completely from everyone",
            "Only change if someone directly tells you to",
          ],
          correctIndex: 0,
        },
      },
    ],
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
    translationText: "Alif, Lam, Ra. These are the verses of the clear Book.",
    teachingCards: [
      {
        title: "The Mysterious Letters",
        body: "Surah Yusuf begins with 'Alif Lam Ra' — disconnected letters that appear at the start of several Quranic chapters. They remind us that some aspects of the Quran remain known only to Allah.",
        icon: "book-outline",
        lottieAsset: "book",
      },
      {
        title: "Mystery and Clarity Together",
        body: "Despite the mystery of these letters, what follows is described as 'the clear Book.' The Quran balances depth beyond our understanding with a message made clear for those who reflect.",
        icon: "eye-outline",
        lottieAsset: "book",
      },
    ],
    puzzles: [
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "The disconnected letters at the start of some Surahs have a universally agreed-upon meaning among scholars.",
          isTrue: false,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "What does the combination of mysterious letters and 'the clear Book' teach us?",
          options: [
            "The Quran has both depths beyond our understanding and a message made clear for those who reflect",
            "The Quran is entirely impossible to understand",
            "Only scholars can read the Quran properly",
            "The letters are mistakes left in the text",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "drag-drop",
        puzzleData: {
          sentence: "The Quran is described as 'al-Kitab al-Mubeen', meaning the ___ Book.",
          options: ["clear", "hidden", "ancient", "sealed"],
          correctAnswer: "clear",
        },
      },
    ],
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
    translationText: "Indeed, We have sent it down as an Arabic Quran so that you may understand.",
    teachingCards: [
      {
        title: "A Language of Depth",
        body: "The choice of Arabic was not arbitrary. It was the language of the first recipients, and Arabic's rich vocabulary allows for layers of meaning in every verse.",
        icon: "book-outline",
        lottieAsset: "book",
      },
      {
        title: "Meant to Be Understood",
        body: "This verse emphasizes that the Quran is meant to be understood, pondered, and reflected upon — not merely recited without comprehension. Allah sent it so we may use our intellect.",
        icon: "eye-outline",
      },
    ],
    puzzles: [
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "What is the main teaching of this verse about how we should approach the Quran?",
          options: [
            "The Quran is meant to be understood and reflected upon, not just recited",
            "Only Arabic speakers can benefit from the Quran",
            "The Quran should be memorized but not interpreted",
            "Arabic is the only language allowed in prayer",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "This verse implies the Quran is meant to be pondered and reflected upon, not just recited.",
          isTrue: true,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "Someone says 'I recite Quran daily but never try to understand the meaning.' Based on this verse, what advice would you give?",
          options: [
            "Encourage them to also study the meaning, as Allah sent it so we may understand",
            "Tell them recitation alone is sufficient",
            "Suggest they stop reciting until they learn Arabic fluently",
            "It does not matter as long as the words are pronounced correctly",
          ],
          correctIndex: 0,
        },
      },
    ],
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
    translationText: "We relate to you the best of stories through this Quran which We reveal to you.",
    teachingCards: [
      {
        title: "The Best of Stories",
        body: "Allah Himself describes the story of Yusuf as 'the best of stories.' It is considered one of the most complete and beautiful narratives in the entire Quran.",
        icon: "book-outline",
        lottieAsset: "book",
      },
      {
        title: "Themes of the Human Experience",
        body: "The story of Yusuf covers the full range of human experience: jealousy, patience, temptation, forgiveness, and divine planning. Every person can find something relatable in it.",
        icon: "people-outline",
        lottieAsset: "heart",
      },
      {
        title: "Revealed Knowledge",
        body: "Before this revelation, the Prophet Muhammad was unaware of these details. The story came through divine inspiration, confirming the Quran's miraculous origin.",
        icon: "star-outline",
        lottieAsset: "stars",
      },
    ],
    puzzles: [
      {
        puzzleType: "drag-drop",
        puzzleData: {
          sentence: "The story of Yusuf is described by Allah as the ___ of stories.",
          options: ["best", "longest", "first", "last"],
          correctAnswer: "best",
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "Why is the story of Yusuf called 'the best of stories'?",
          options: [
            "Because it covers the full range of human experience: jealousy, patience, temptation, forgiveness, and divine planning",
            "Because it is the shortest story in the Quran",
            "Because it was the first story ever written",
            "Because it only contains happy events",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "The story of Yusuf covers themes of jealousy, patience, temptation, and forgiveness.",
          isTrue: true,
        },
      },
    ],
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
    teachingCards: [
      {
        title: "The Prophetic Dream",
        body: "Young Yusuf saw eleven stars, the sun, and the moon all prostrating to him. This was not an ordinary dream — it was a prophecy of his future greatness, revealed through divine symbolism.",
        icon: "moon-outline",
        lottieAsset: "stars",
      },
      {
        title: "The Symbols Explained",
        body: "The eleven stars represented Yusuf's brothers, and the sun and moon represented his parents. The prostration symbolized the honor and authority he would one day hold.",
        icon: "star-outline",
        lottieAsset: "stars",
      },
      {
        title: "A Father's Wisdom",
        body: "Ya'qub immediately recognized the dream's significance and warned Yusuf not to share it with his brothers. His protective instinct showed his understanding of human jealousy.",
        icon: "shield-outline",
      },
    ],
    puzzles: [
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "In Yusuf's dream, the eleven stars represent the eleven prophets who came before him.",
          isTrue: false,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "What does Ya'qub's immediate reaction to the dream reveal about his character?",
          options: [
            "He was wise and protective — he understood the dream's significance and anticipated the danger of jealousy",
            "He was dismissive and did not believe in dreams",
            "He was jealous of his son's future",
            "He wanted to tell the brothers himself",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "You receive good news about a promotion. Based on Ya'qub's wisdom in this verse, what should you consider?",
          options: [
            "Be thoughtful about who you share blessings with, as not everyone will respond with joy",
            "Share it with everyone immediately on social media",
            "Never tell anyone about any good news ever",
            "Only tell people who are more successful than you",
          ],
          correctIndex: 0,
        },
      },
    ],
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
    teachingCards: [
      {
        title: "The Danger of Jealousy",
        body: "Ya'qub warned Yusuf not to share his dream because his brothers would plot against him out of jealousy. Ya'qub understood that envy can drive even loved ones to harmful actions.",
        icon: "shield-outline",
      },
      {
        title: "The Origin of Envy",
        body: "Ya'qub knew the destructive nature of jealousy — it was through envy that Iblis (Satan) refused to bow to Adam. Envy is among the oldest and most dangerous spiritual diseases.",
        icon: "flame-outline",
      },
      {
        title: "The Wisdom of Discretion",
        body: "This verse teaches that not every blessing should be shared openly, as it may provoke envy even among loved ones. Discretion is a form of wisdom and self-protection.",
        icon: "eye-outline",
        lottieAsset: "book",
      },
    ],
    puzzles: [
      {
        puzzleType: "drag-drop",
        puzzleData: {
          sentence: "Ya'qub warned Yusuf not to share his dream to avoid his brothers' ___.",
          options: ["jealousy", "confusion", "laughter", "anger"],
          correctAnswer: "jealousy",
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "The verse draws a parallel between the brothers' potential jealousy and which historical event?",
          options: [
            "Iblis refusing to bow to Adam out of envy",
            "The flood of Prophet Nuh",
            "The migration to Madinah",
            "The building of the Ka'bah",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "This verse teaches that every blessing should always be shared openly with everyone.",
          isTrue: false,
        },
      },
    ],
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
    translationText: "And thus your Lord will choose you and teach you the interpretation of dreams.",
    teachingCards: [
      {
        title: "Chosen by Allah",
        body: "Ya'qub interpreted Yusuf's dream as a sign that Allah would choose him and teach him the interpretation of dreams. This special gift would define Yusuf's role in the years to come.",
        icon: "star-outline",
        lottieAsset: "stars",
      },
      {
        title: "A Prophetic Lineage",
        body: "Allah's favor upon Yusuf continues the legacy of his forefathers Ibrahim (Abraham) and Ishaq (Isaac). This shows that Allah's guidance flows through generations of the faithful.",
        icon: "people-outline",
        lottieAsset: "book",
      },
      {
        title: "Foreshadowing Greatness",
        body: "This verse foreshadows Yusuf's future rise to power in Egypt. Despite the hardships ahead, Allah's plan for him was already set in motion from his youth.",
        icon: "sunny-outline",
      },
    ],
    puzzles: [
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "Ya'qub told Yusuf that Allah would teach him the interpretation of dreams.",
          isTrue: true,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "What is the significance of connecting Yusuf to Ibrahim and Ishaq in this verse?",
          options: [
            "It shows that Allah's favor and guidance continue through a prophetic lineage across generations",
            "It means Yusuf would visit the same places as Ibrahim",
            "It implies all prophets had identical life stories",
            "It is just a historical footnote with no deeper meaning",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "drag-drop",
        puzzleData: {
          sentence: "Yusuf's forefathers include Ibrahim and ___, forming a great prophetic lineage.",
          options: ["Ishaq", "Musa", "Dawud", "Nuh"],
          correctAnswer: "Ishaq",
        },
      },
    ],
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
    teachingCards: [
      {
        title: "The Name Ar-Rahman",
        body: "Surah Ar-Rahman opens with one of Allah's most beautiful names: 'Ar-Rahman' — the Most Gracious, the source of infinite mercy. This single-word verse is a powerful declaration.",
        icon: "heart-outline",
        lottieAsset: "heart",
      },
      {
        title: "Everything Flows from Mercy",
        body: "Everything that follows in this Surah — the creation of humans, the teaching of the Quran, the balance of the universe — all flows from Allah's boundless mercy.",
        icon: "sunny-outline",
        lottieAsset: "heart",
      },
      {
        title: "Mercy Defines the Relationship",
        body: "It is mercy that defines Allah's relationship with all of creation. Before mentioning power, knowledge, or judgment, He introduces Himself through His mercy.",
        icon: "leaf-outline",
        lottieAsset: "nature",
      },
    ],
    puzzles: [
      {
        puzzleType: "drag-drop",
        puzzleData: {
          sentence: "Ar-Rahman means 'The Most ___', referring to Allah's infinite mercy.",
          options: ["Gracious", "Powerful", "Knowing", "Wise"],
          correctAnswer: "Gracious",
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "Why does the entire Surah begin with the single word 'Ar-Rahman'?",
          options: [
            "To declare that everything that follows — creation, guidance, the universe — all flows from Allah's mercy",
            "Because it is the shortest possible opening",
            "To introduce a new name that was never mentioned before",
            "It is a greeting to the angels",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "Everything mentioned after this verse — creation, guidance, cosmic balance — all flows from Allah's mercy.",
          isTrue: true,
        },
      },
    ],
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
    teachingCards: [
      {
        title: "The Greatest Gift",
        body: "Immediately after identifying Himself as Ar-Rahman, Allah mentions His first favor: teaching the Quran. Before creation, before the universe — guidance comes first.",
        icon: "book-outline",
        lottieAsset: "book",
      },
      {
        title: "More Than a Book",
        body: "The Quran is not just a book; it is the speech of Allah, a mercy that guides humanity through darkness to light. It is the most profound connection between Creator and creation.",
        icon: "star-outline",
        lottieAsset: "book",
      },
    ],
    puzzles: [
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "In Surah Ar-Rahman, the creation of humans is mentioned before the teaching of the Quran.",
          isTrue: false,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "Why does Allah mention teaching the Quran BEFORE creating humans in this Surah?",
          options: [
            "To signal that divine guidance is the greatest gift — even greater than existence itself",
            "Because the Quran was created before the universe in a literal timeline",
            "It is simply a poetic choice with no deeper meaning",
            "Because humans were not important enough to mention first",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "drag-drop",
        puzzleData: {
          sentence: "Allah places the Quran first to signal that divine ___ is the greatest gift.",
          options: ["guidance", "punishment", "creation", "wealth"],
          correctAnswer: "guidance",
        },
      },
    ],
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
    teachingCards: [
      {
        title: "Purpose Before Existence",
        body: "Guidance came before creation in this Surah's listing of blessings. This teaches us that our purpose — to be guided — is more fundamental than our existence itself.",
        icon: "compass-outline",
        lottieAsset: "book",
      },
      {
        title: "The Meaning of Insan",
        body: "The word 'Insan' (human) comes from 'uns' meaning intimacy. Humans were created to have a close, intimate relationship with their Creator.",
        icon: "heart-outline",
        lottieAsset: "heart",
      },
    ],
    puzzles: [
      {
        puzzleType: "drag-drop",
        puzzleData: {
          sentence: "The word 'Insan' (human) is derived from 'uns', meaning ___.",
          options: ["intimacy", "strength", "knowledge", "patience"],
          correctAnswer: "intimacy",
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "What does the order of blessings in Ar-Rahman (Quran → creation of humans) teach us?",
          options: [
            "Our purpose — to be guided — is more fundamental than our existence itself",
            "The Quran is older than humanity in a literal sense",
            "Creation is less important than destruction",
            "Humans should not care about their physical needs",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "Someone says 'I'm too busy with work and life to study the Quran.' Based on this verse's teaching, how would you respond?",
          options: [
            "Guidance is the very purpose of our existence — it should be prioritized alongside life's demands",
            "They are right, work always comes first",
            "Tell them to quit their job and only study Quran",
            "Suggest they wait until retirement to start learning",
          ],
          correctIndex: 0,
        },
      },
    ],
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
    teachingCards: [
      {
        title: "The Gift of Expression",
        body: "Allah taught humanity 'al-bayan' — the ability to express, communicate, and articulate. This is one of the greatest gifts that distinguishes humans from other creation.",
        icon: "people-outline",
        lottieAsset: "heart",
      },
      {
        title: "More Than Just Speech",
        body: "Al-bayan encompasses speech, writing, understanding, and the ability to convey thoughts and emotions. It is the foundation of all human connection and knowledge.",
        icon: "book-outline",
        lottieAsset: "book",
      },
      {
        title: "A Responsibility",
        body: "Without this gift, no knowledge could be shared, no prayers could be uttered, and no relationships could be formed. The ability to express carries a responsibility to use it for truth and good.",
        icon: "flame-outline",
      },
    ],
    puzzles: [
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "Al-bayan refers only to the ability of spoken language.",
          isTrue: false,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "Why is al-bayan (expression) listed as one of Allah's greatest favors?",
          options: [
            "Without it, no knowledge could be shared, no prayers uttered, and no relationships formed",
            "Because speaking is the only thing humans can do that animals cannot",
            "Because writing was invented before speech",
            "It is only important for poets and writers",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "You have the ability to speak, write, and express your feelings. Based on this verse, how should you view this ability?",
          options: [
            "As a gift from Allah that carries responsibility — use it for truth, kindness, and worship",
            "As a random evolutionary trait with no special significance",
            "As something only useful for career advancement",
            "As less important than physical strength",
          ],
          correctIndex: 0,
        },
      },
    ],
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
    teachingCards: [
      {
        title: "Cosmic Precision",
        body: "The sun and moon follow precise calculations. The word 'husban' means exact reckoning — every orbit, every eclipse, every season is perfectly computed by Allah.",
        icon: "moon-outline",
        lottieAsset: "stars",
      },
      {
        title: "Mercy in the Cosmos",
        body: "This cosmic precision is itself a sign of Allah's mercy. It provides reliable cycles for agriculture, navigation, and timekeeping — essentials for human life on earth.",
        icon: "sunny-outline",
        lottieAsset: "nature",
      },
    ],
    puzzles: [
      {
        puzzleType: "drag-drop",
        puzzleData: {
          sentence: "The word 'husban' means exact ___, referring to celestial precision.",
          options: ["reckoning", "speed", "distance", "beauty"],
          correctAnswer: "reckoning",
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "How is the precise movement of the sun and moon connected to Allah's mercy?",
          options: [
            "Their reliable cycles enable agriculture, navigation, and timekeeping — all essential for human life",
            "It has no connection to mercy; it is just a scientific fact",
            "The sun and moon were created only for decoration",
            "Precision only matters in mathematics, not in faith",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "The cosmic precision of the sun and moon is itself a sign of Allah's mercy.",
          isTrue: true,
        },
      },
    ],
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
    teachingCards: [
      {
        title: "All Creation Prostrates",
        body: "The stars and the trees prostrate to Allah. Whether celestial or terrestrial, all of creation submits to Allah's will and glorifies its Creator.",
        icon: "leaf-outline",
        lottieAsset: "nature",
      },
      {
        title: "The Meaning of Najm",
        body: "'Najm' here can mean stars or stemless plants that spread along the ground, and 'shajar' means trees. Both the heavens and the earth are united in submission to Allah.",
        icon: "star-outline",
        lottieAsset: "stars",
      },
      {
        title: "Natural Submission",
        body: "This prostration is not like human prayer — it is the natural submission of all creation to the laws and order Allah has established. Even nature glorifies its Creator.",
        icon: "eye-outline",
        lottieAsset: "nature",
      },
    ],
    puzzles: [
      {
        puzzleType: "true-false",
        puzzleData: {
          statement: "In this verse, prostration means the natural submission of creation to Allah's laws.",
          isTrue: true,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "What does it mean that stars and trees 'prostrate' to Allah?",
          options: [
            "All of creation naturally submits to the laws and order Allah has established",
            "Trees and stars literally bend down like humans in prayer",
            "Only living things worship Allah; non-living things do not",
            "This is a metaphor with no real meaning",
          ],
          correctIndex: 0,
        },
      },
      {
        puzzleType: "multiple-choice",
        puzzleData: {
          question: "You are walking in nature and see the beauty of trees, mountains, and the sky. Based on this verse, what should this inspire in you?",
          options: [
            "Recognizing that all of nature glorifies Allah, which should motivate you to worship Him too",
            "Taking photos for social media",
            "Feeling that nature is separate from spirituality",
            "Thinking that only mosques are places of worship",
          ],
          correctIndex: 0,
        },
      },
    ],
    audioUrl: null,
  },
};
