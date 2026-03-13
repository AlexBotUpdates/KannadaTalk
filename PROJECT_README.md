# Learn Kannada - Duolingo-Style Language Learning App

A comprehensive language learning web application that teaches spoken Kannada to English speakers through interactive exercises.

## 🎯 Features

### Course Content
- **10-day course** covering essential Kannada phrases
- 5-6 phrases per day with Kannada script, pronunciation, and English translation
- Topics: Greetings, Introductions, Common Phrases, Numbers, Food & Dining, Shopping, Directions, Family, Time & Weather, Emergency

### Exercise Types
1. **Listening** 🔊 - Hear the Kannada phrase and select the correct English meaning
2. **Speaking** 🎤 - Repeat the phrase using browser speech recognition
3. **Matching** 🎯 - Match English phrases to their Kannada meanings

### Session System
- Choose from **5, 10, or 15 minute** lessons
- Dynamic exercise generation based on session length
- Progress bar shows completion status

### Gamification
- **XP Points** - Earn 10+ XP per correct answer
- **Streak Bonus** - Get extra XP for consecutive correct answers
- **Level System** - Level up every 100 XP
- **Achievements** - Unlock badges for milestones
- **Confetti Celebration** - Visual rewards for good performance

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun

### Installation

1. Extract the zip file:
   ```bash
   unzip kannada-app-clean.zip -d kannada-learning-app
   cd kannada-learning-app
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

3. Set up the database:
   ```bash
   npm run db:push
   # or
   bun run db:push
   ```

4. Create a `.env` file:
   ```
   DATABASE_URL="file:./dev.db"
   ```

5. Start the development server:
   ```bash
   npm run dev
   # or
   bun run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with shadcn/ui
- **State Management**: Zustand with persist middleware
- **Database**: Prisma ORM with SQLite
- **Animations**: Framer Motion
- **Audio**: Web Speech API (Text-to-Speech & Speech Recognition)

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main app entry
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # shadcn/ui components
│   └── lesson/           # Lesson components
│       ├── LandingScreen.tsx
│       ├── DashboardScreen.tsx
│       ├── LessonScreen.tsx
│       ├── ListeningExercise.tsx
│       ├── SpeakingExercise.tsx
│       ├── MatchingExercise.tsx
│       ├── ResultScreen.tsx
│       └── ProgressScreen.tsx
├── data/
│   └── course.json       # Course content data
├── lib/
│   ├── course.ts         # Course utilities
│   └── db.ts             # Database client
├── store/
│   └── app-store.ts      # Zustand store
└── types/
    ├── index.ts          # TypeScript types
    └── speech.d.ts       # Speech API types
```

## 🎮 How It Works

1. **Landing Page**: Introduction to the app with feature highlights
2. **Dashboard**: Select a day and session duration to start learning
3. **Lesson**: Complete exercises (listening, speaking, matching)
4. **Results**: See your performance, XP earned, and achievements
5. **Progress**: Track your overall progress, streaks, and achievements

## 🌐 Browser Support

For the best experience, use:
- Google Chrome (recommended)
- Microsoft Edge
- Brave

Note: Speech recognition requires browser support for the Web Speech API.

## 📝 License

MIT License - Feel free to use and modify for your own projects!

## 🙏 Acknowledgments

- Inspired by Duolingo's gamified learning approach
- Built with Next.js, Tailwind CSS, and shadcn/ui
- Kannada phrases designed for practical, everyday use
