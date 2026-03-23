# Aidan — Gamified Quranic Tafsir App

Aidan is a mobile app that helps Muslims build and maintain a daily connection with the Quran through bite-sized, interactive lessons. A friendly avatar named Aidan guides users through rich Tafsir context, knowledge puzzles, and Quranic recitation — turning deep Quranic study into a rewarding daily habit.

Built for the **Quran Foundation Hackathon** to solve a common challenge: helping users sustain their Quran engagement beyond Ramadan.

---

## How It Works

Each lesson is a 3-minute journey through a single Quranic verse, broken into five phases:

### 1. Immersion
Users are introduced to the verse's context through authentic Tafsir excerpts. Teaching cards present verbatim scholarly commentary — who the verse was revealed to, why it was revealed, and what classical scholars said about its meaning. Every card cites its source.

### 2. Puzzle
Three interactive quizzes test comprehension of the Tafsir content. Puzzle types include drag-and-drop sentence completion, true/false statements, and multiple-choice questions. Every question is derived from real scholarly text with a traceable source note.

### 3. Reflection Moment
The Arabic verse is revealed alongside its English translation. A brief meditative pause lets users absorb the verse they just studied, accompanied by gentle haptic feedback.

### 4. Audio Recitation
Users listen to a professional Quranic recitation of the verse. Audio is sourced from the Quran Foundation Audio API.

### 5. Celebration
XP is awarded, the verse is added to the user's personal collection, and streaks are updated. A satisfying animation marks the completion.

---

## App Screens

### Adventure (Main Tab)
A vertical scrolling node map — similar to a game world — where each node represents one lesson. Nodes are connected by animated paths, showing a clear progression through the Surah. Lessons unlock sequentially: complete one to access the next.

Three themed worlds are available, each dedicated to a different Surah. Users swipe horizontally to explore worlds or jump directly via the World Selection Menu.

| World | Surah | Theme |
|-------|-------|-------|
| Indigo Meadows | Al-Fatiha (The Opening) | Foundation of faith |
| Amber Dunes | Yusuf (Joseph) | Patience and trust |
| Emerald Gardens | Ar-Rahman (The Most Gracious) | Divine mercy |

### Explore
A directory for browsing Surahs, topics, and root words powered by the Quran Foundation APIs.

### Gallery
A personal collection of every verse the user has unlocked through lessons. Each verse displays its Arabic text, English translation, and Surah reference — a growing library of mastered verses.

### Profile
Displays the user's total XP, current streak ("Nur"), lessons completed, and verse collection count. Each world's progress is visible at a glance.

---

## Content Authenticity

**Every piece of Quranic content in this app comes from authenticated, scholar-approved sources. Zero AI-generated text is used for any Quranic, Tafsir, or scholarly content.**

This is a non-negotiable principle of the project.

### Sources

**Arabic Text** — Uthmani script from the Quran Foundation API

**Translation** — Sahih International (primary), with additional approved translations available including Abdel Haleem, Yusuf Ali, Mufti Taqi Usmani, and Maududi

**Tafsir & Teaching Cards** — Verbatim excerpts from:
- Tafsir Ibn Kathir (Abridged)
- Ma'arif al-Qur'an (Mufti Muhammad Shafi)
- Tazkirul Quran (Maulana Wahiduddin Khan)
- Asbab al-Nuzul by al-Wahidi (Reasons of Revelation)
- Tafsir al-Jalalayn
- Tafsir Ibn Abbas

**Puzzles** — All 57 puzzles are derived from Tafsir Ibn Kathir with explicit source citations. Each puzzle includes a `sourceNote` tracing it back to the exact scholarly passage.

**Audio** — Quranic recitation via the Quran Foundation Audio API (Mishary Alafasy)

**Chapter Metadata** — Revelation context (Makki/Madani), verse counts, and Arabic names from the Quran Foundation Chapters API

### Attribution
Source attribution is visible throughout the app:
- Each teaching card displays its Tafsir source
- Translations are labeled with their source name
- Puzzle source notes cite the exact passage used
- Immersion phase footer lists all sources consulted

---

## Gamification & Progress

- **XP** — Earn 25 XP per new lesson completed
- **Nur (Streak)** — Track consecutive days of Quranic engagement. The name "Nur" (light) reflects the Quranic theme of consistency and illumination
- **Verse Collection** — Every completed lesson permanently unlocks its verse in the Gallery
- **Progressive Locking** — Lessons unlock sequentially within each world, encouraging thorough study rather than skipping ahead
- **Visual Feedback** — Completed nodes show checkmarks, active nodes pulse, and locked nodes display a lock icon

---

## Design Philosophy

Aidan's visual identity draws from indie games and modern learning apps:

- **Warm pastel color palettes** that shift with each world
- **Rounded, card-based layouts** with generous whitespace
- **Friendly typography** (Fredoka) that feels approachable, not academic
- **Smooth animations** between lesson phases
- **A consistent avatar companion** (Aidan, in Sunset Coral) that creates a personal learning relationship

The goal is to make Quranic Tafsir study feel as inviting and rewarding as the best language-learning apps — while never compromising on the authenticity and reverence the Quran deserves.

---

## Content Coverage

Currently includes **19 lessons** across 3 Surahs:

- **Al-Fatiha** — 7 verses (complete Surah)
- **Yusuf** — 6 verses (opening passage)
- **Ar-Rahman** — 6 verses (opening passage)

Each lesson covers one verse with live-fetched Tafsir, translation, Arabic text, audio, and 3 curated puzzles.

---

## License

Built for the Quran Foundation Hackathon. All Quranic content is sourced from the Quran Foundation APIs and open scholarly datasets.
