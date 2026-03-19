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
