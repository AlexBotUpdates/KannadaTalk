## KannadaTalk – Learn Spoken Kannada

A focused, Duolingo-style web app that helps English speakers learn practical, everyday Kannada phrases through short, interactive lessons.

### 🌟 What it does

- **Core lesson** on greetings and introductions in Kannada
- **Multiple-choice “listening-style” exercises**: see a Kannada phrase, pick the correct English meaning
- **Transliteration support** to help with pronunciation
- **XP score** so you get instant feedback and motivation

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+**
- **npm** (comes with Node)

### 1. Install dependencies

From the project root:

```bash
npm install
```

### 2. Configure the database

This project uses **Prisma** with a local SQLite database.

Create a `.env` file in the project root (this is already created if you followed the assistant’s steps):

```env
DATABASE_URL="file:./dev.db"
```

Then push the Prisma schema to create the SQLite database:

```bash
npx prisma db push
```

### 3. Run the dev server

Because the default `npm run dev` script uses `tee` (a Unix tool), on Windows it’s easier to call Next.js directly:

```bash
npx next dev -p 3000
```

Then open `http://localhost:3000` in your browser.

---

## 🧠 How the app works

- The **home page** (`/`) is the main learning experience.
- You’ll see:
  - A short introduction to the app
  - A **lesson card** with Kannada phrases for greetings and introductions
  - For each question:
    - The **Kannada script**
    - A **Latin transliteration**
    - 4 possible **English meanings** (one correct, three distractors)
- Select an answer to see immediate feedback and earn XP.
- Finish all questions to see a small **summary screen** with your total XP and phrases practiced.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui components
- **Database / ORM**: Prisma with SQLite

---

## 📁 Project Structure (high level)

```text
src/
  app/
    layout.tsx     # Root layout, metadata, fonts
    page.tsx       # KannadaTalk lesson experience (home page)
  components/
    ui/            # Reusable shadcn/ui components
```

---

## ✅ Scripts (npm)

Most common commands:

- **Development**: `npx next dev -p 3000`
- **Prisma DB push**: `npx prisma db push`
- **Build**: `npm run build`
- **Lint**: `npm run lint`

> Note: the provided `npm run dev` and `npm run start` scripts assume a Unix-like environment because of `tee` and `cp`. On Windows PowerShell, prefer `npx next dev -p 3000` for development unless you install equivalents or adjust the scripts.

---

## 📜 License

You’re free to use and modify this project for your own Kannada-learning experiments or to build a richer course on top of it.
