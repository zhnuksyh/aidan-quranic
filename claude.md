# Aidan - Gamified Quranic Tafsir App

## Hackathon
Quran Foundation Hackathon — help users maintain their Quran connection after Ramadan.

## App Concept
"Duolingo/Brilliant.org for the Quran." A flat-vector avatar (Aidan) guides users through bite-sized visual stories (Tafsir context) followed by interactive puzzles. Solving reveals the Quranic Verse + plays audio.

## Mandatory Constraints
- MUST use Quran Foundation Content APIs (Tafsir, Verse, Audio, Script, Translation)
- MUST use Quran Foundation User APIs (Streak Tracking, User Progress)
- Free stack only — no paid TTS. Text blocks + visual storytelling for immersion. Quran recitation audio via QF Audio API is required.
- No co-authors in commit messages
- Atomic commits (one logical change per commit)
- Always work on feature branches, never commit to main

## NON-NEGOTIABLE: Content Authenticity & Sources
ALL Quranic content MUST come from authenticated, scholar-approved sources. ZERO AI-generated or paraphrased Quranic content is permitted. Every piece of text shown to the user about the Quran must be traceable to a real scholarly source. This is the highest priority constraint in the entire project.

### Approved Sources Only

**Arabic Text:**
- Quran Foundation API `text_uthmani` — fetched live, never hardcoded

**Translations (QF API `/verses/` endpoints):**
| ID | Translation | Author |
|---|---|---|
| 20 | Saheeh International (default) | Saheeh International |
| 85 | M.A.S. Abdel Haleem | Abdul Haleem |
| 84 | T. Usmani | Mufti Taqi Usmani |
| 95 | Tafhim al-Quran | Sayyid Abul Ala Maududi |
| 22 | A. Yusuf Ali | Abdullah Yusuf Ali |
| 19 | M. Pickthall | Marmaduke Pickthall |
| 203 | Al-Hilali & Khan | Al-Hilali & Muhsin Khan |
| 149 | Bridges' Translation | Fadel Soliman |

**Tafsir — Quran Foundation API (`/tafsirs/{id}/by_ayah/{key}`):**
| ID | Tafsir | Author |
|---|---|---|
| 169 | Tafsir Ibn Kathir (Abridged) | Hafiz Ibn Kathir |
| 168 | Ma'arif al-Qur'an | Mufti Muhammad Shafi |
| 817 | Tazkirul Quran | Maulana Wahiduddin Khan |

**Tafsir — spa5k Tafsir API (free, no auth, no rate limits):**
| Slug | Tafsir | Scholar |
|---|---|---|
| `en-tafisr-ibn-kathir` | Ibn Kathir (Abridged) | Hafiz Ibn Kathir |
| `en-tafsir-maarif-ul-quran` | Ma'ariful Quran | Mufti Muhammad Shafi |
| `en-al-jalalayn` | Tafsir al-Jalalayn | Al-Mahalli & As-Suyuti |
| `en-tafsir-ibn-abbas` | Tanwir al-Miqbas | Attributed to Ibn Abbas |
| `en-tafsir-al-tustari` | Tafsir al-Tustari | Sahl al-Tustari |
| `en-kashani-tafsir` | Kashani Tafsir | Abd al-Razzaq al-Kashani |
| `en-al-qushairi-tafsir` | Al-Qushairi Tafsir | Al-Qushairi |
| `en-kashf-al-asrar-tafsir` | Kashf al-Asrar | Rashid al-Din Maybudi |
| `en-asbab-al-nuzul-by-al-wahidi` | Asbab al-Nuzul (reasons of revelation) | Al-Wahidi |
| `en-tazkirul-quran` | Tazkirul Quran | Maulana Wahiduddin Khan |

**Chapter Metadata — QF API `/chapters/{id}`:**
- revelation_place (Makki/Madani), revelation_order, verses_count, name_arabic

**Additional Data Sources:**
- QUL (Quranic Universal Library by Tarteel AI) — downloadable SQLite/JSON datasets
- ITQAN (Quran Technologies Community) — API with tafsir links, tadabbur, verse timings

### Content Rules
- NEVER write, paraphrase, or AI-generate tafsir, tadabbur, or Quranic explanations
- NEVER hardcode Arabic text or translations — always fetch from API
- Every displayed source must show real attribution (tafsir name + author)
- Teaching cards / immersion content must be direct excerpts from approved tafsir sources
- Quiz questions must be derived from facts stated in the fetched tafsir content
- If a source is unavailable at runtime, show nothing rather than fabricated content

## Tech Stack
- **Framework**: React Native + Expo (SDK 52+)
- **Routing**: Expo Router (file-based, built on React Navigation v7)
- **Styling**: NativeWind v4 (Tailwind CSS for RN)
- **UI Library**: react-native-reusables (Shadcn UI for RN)
- **Animations**: react-native-reanimated + react-native-gesture-handler
- **Typography**: Fredoka font family (all weights via @expo-google-fonts/fredoka)
- **Backend/DB**: Supabase (free tier) — PostgreSQL, Auth

## App Architecture (4 Bottom Tabs)
1. **Adventure** (Main): 2D vertical scrolling node map. Worlds swipeable L/R. World Selection Menu for instant jump. Nodes = 3-min interactive lessons.
2. **Explore**: Directory using QF APIs for Surahs, topics, root words.
3. **Gallery**: Grid of unlocked/mastered Quranic Verses.
4. **Profile**: XP, Streaks (Nur), settings.

## Core Lesson Loop (Modal from Adventure node tap)
1. **Immersion**: Placeholder image + Tafsir text block. Source tracker at top.
2. **Puzzle**: Interactive test (drag-and-drop, True/False swipe).
3. **Reveal**: Arabic text + translation appear (with Expo Haptics).
4. **Audio**: Play button → QF Audio API recitation.

## Design System
- **Aesthetic**: Warm, indie-game vibe. Soft rounded corners (rounded-2xl). Pastel colors.
- **Avatar Color**: Sunset Coral `#FB923C`
- **Dynamic Theming**: Colors from ThemeContext, NEVER hardcoded.
  - World 1 (Indigo Meadows): Background `#E0E7FF`, Accent `#6366F1`
  - World 2 (Amber Dunes): Background `#FFEDD5`, Accent `#EA580C`
  - World 3 (Emerald Gardens): Background `#D1FAE5`, Accent `#0284C7`

## Key Rules
- Dynamic colors via inline `style` props from `useTheme()`, not Tailwind classes
- Tailwind for layout, spacing, border-radius, fonts
- Font names: `Fredoka_400Regular`, `Fredoka_700Bold`, etc.
- NativeWind v4 with tailwindcss@3.x
