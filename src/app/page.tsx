'use client';

import { useMemo, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

type Phrase = {
  kannada: string;
  transliteration: string;
  english: string;
};

type Exercise = {
  id: number;
  phrase: Phrase;
  options: string[];
};

const COURSE: Phrase[] = [
  // Day 1 – Greetings
  { kannada: "ನಮಸ್ಕಾರ", transliteration: "namaskāra", english: "Hello" },
  { kannada: "ಹೇಗಿದ್ದೀರಾ?", transliteration: "hēgiddīrā?", english: "How are you?" },
  { kannada: "ನಾನು ಚೆನ್ನಾಗಿದ್ದೇನೆ", transliteration: "nānu cennāgiddēne", english: "I am fine" },
  { kannada: "ಧನ್ಯವಾದಗಳು", transliteration: "dhanyavādagaḷu", english: "Thank you" },
  { kannada: "ಮತ್ತೆ ಭೇಟಿಯಾಗೋಣ", transliteration: "matte bhēṭiyāgōṇa", english: "See you again" },
  // Day 2 – Introductions
  { kannada: "ನನ್ನ ಹೆಸರು ಅಲೆಕ್ಸ್", transliteration: "nanna hesaru Alex", english: "My name is Alex" },
  { kannada: "ನೀವು ಎಲ್ಲಿಂದ ಬಂದಿದ್ದೀರಿ?", transliteration: "nīvu ellinda bandiddīri?", english: "Where are you from?" },
  { kannada: "ನಾನು ಬೆಂಗಳೂರಿನಿಂದ ಬಂದಿದ್ದೇನೆ", transliteration: "nānu beṅgaḷūrininda bandiddēne", english: "I am from Bangalore" },
  { kannada: "ನಿಮ್ಮನ್ನು ಭೇಟಿ ಆದದ್ದು ಸಂತೋಷ", transliteration: "nimmanu bhēṭi ādaddu santōṣa", english: "Nice to meet you" },
  { kannada: "ನಾನು ಕನ್ನಡ ಕಲಿಯುತ್ತಿದ್ದೇನೆ", transliteration: "nānu kannaḍa kaliyuttiddēne", english: "I am learning Kannada" },
];

function buildExercises(phrases: Phrase[]): Exercise[] {
  return phrases.map((phrase, index) => {
    const otherTranslations = phrases
      .filter((p) => p.english !== phrase.english)
      .map((p) => p.english);

    const shuffled = [...otherTranslations].sort(() => Math.random() - 0.5);
    const incorrect = shuffled.slice(0, 3);
    const options = [...incorrect, phrase.english].sort(() => Math.random() - 0.5);

    return {
      id: index,
      phrase,
      options,
    };
  });
}

export default function Home() {
  const exercises = useMemo(() => buildExercises(COURSE), []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const total = exercises.length;
  const current = exercises[currentIndex];
  const progress = ((currentIndex + (completed ? 1 : 0)) / total) * 100;

  const handleOptionClick = (option: string) => {
    if (completed || isCorrect !== null) return;
    setSelected(option);
    const correct = option === current.phrase.english;
    setIsCorrect(correct);
    if (correct) {
      setScore((prev) => prev + 10);
    }
  };

  const handleNext = () => {
    if (currentIndex === total - 1) {
      setCompleted(true);
      return;
    }
    setCurrentIndex((prev) => prev + 1);
    setSelected(null);
    setIsCorrect(null);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelected(null);
    setIsCorrect(null);
    setScore(0);
    setCompleted(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="outline" className="uppercase tracking-wide text-xs">
            Learn Kannada
          </Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Speak Kannada with confidence
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Practice essential everyday phrases through quick multiple-choice listening-style exercises.
            Perfect for English speakers starting their Kannada journey.
          </p>
        </div>

        <Card className="bg-white border-slate-200 shadow-lg">
          <CardHeader className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-1">
                <CardTitle className="text-lg sm:text-xl">
                  Lesson 1 · Greetings & Introductions
                </CardTitle>
                <CardDescription>
                  Question {Math.min(currentIndex + 1, total)} of {total}
                </CardDescription>
              </div>
              <div className="text-right space-y-1">
                <p className="text-xs uppercase tracking-wide text-slate-500">XP</p>
                <p className="font-semibold text-emerald-600 text-lg">{score}</p>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </CardHeader>

          <CardContent className="space-y-6">
            {!completed ? (
              <>
                <div className="space-y-3">
                  <p className="text-xs font-medium tracking-wide uppercase text-emerald-700">
                    Kannada phrase
                  </p>
                  <div className="space-y-1">
                    <p className="text-2xl sm:text-3xl font-semibold">
                      {current.phrase.kannada}
                    </p>
                    <p className="text-sm text-slate-600 italic">
                      {current.phrase.transliteration}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500">
                    Choose the correct English meaning.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {current.options.map((option) => {
                    const isSelected = selected === option;
                    const isAnswer = option === current.phrase.english;
                    const showAsCorrect = isCorrect !== null && isAnswer;
                    const showAsWrong = isCorrect === false && isSelected && !isAnswer;

                    return (
                      <Button
                        key={option}
                        variant="outline"
                        className={[
                          "justify-start text-left h-auto py-3 px-4 bg-slate-50 border-slate-200 hover:bg-slate-100",
                          showAsCorrect && "border-emerald-500 bg-emerald-50",
                          showAsWrong && "border-rose-500 bg-rose-50",
                          isSelected && !showAsCorrect && !showAsWrong && "border-sky-500 bg-sky-50",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </Button>
                    );
                  })}
                </div>

                {isCorrect !== null && (
                  <div
                    className={[
                      "rounded-lg border px-4 py-3 text-sm",
                      isCorrect
                        ? "border-emerald-500/60 bg-emerald-50 text-emerald-900"
                        : "border-rose-500/60 bg-rose-50 text-rose-900",
                    ].join(" ")}
                  >
                    {isCorrect ? (
                      <p>
                        ✅ Correct! <span className="font-medium">“{current.phrase.english}”</span> is the
                        right meaning. +10 XP
                      </p>
                    ) : (
                      <p>
                        ❌ Not quite. The correct answer is{" "}
                        <span className="font-medium">“{current.phrase.english}”</span>.
                      </p>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-semibold">Great job! 🎉</h2>
                <p className="text-slate-700">
                  You&apos;ve completed this short lesson on Kannada greetings and introductions.
                </p>
                <div className="inline-flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-6 py-4">
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Total XP</p>
                    <p className="text-2xl font-semibold text-emerald-600">{score}</p>
                  </div>
                  <div className="h-10 w-px bg-slate-200" />
                  <div className="text-left">
                    <p className="text-xs uppercase tracking-wide text-slate-500">Phrases practiced</p>
                    <p className="text-lg font-medium">
                      {total} <span className="text-slate-500 text-sm">core phrases</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={handleRestart}>
              Restart lesson
            </Button>
            {!completed && (
              <Button
                size="sm"
                onClick={handleNext}
                disabled={isCorrect === null && !completed}
              >
                {currentIndex === total - 1 ? "Finish" : "Next"}
              </Button>
            )}
            {completed && (
              <div className="text-xs text-slate-500">
                Tip: Repeat this lesson a few times to build a strong foundation.
              </div>
            )}
          </CardFooter>
        </Card>

        <p className="text-xs text-center text-slate-500">
          This app is for learning spoken Kannada. Content is simplified for beginners and focuses on
          practical, everyday phrases.
        </p>
      </div>
    </main>
  );
}