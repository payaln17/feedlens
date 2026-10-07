"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, RotateCcw } from "lucide-react";

const questions = [
  {
    question: "When you see a post you don't like, what do you usually do?",
    options: [
      { text: "Scroll immediately", score: 1 },
      { text: "Watch it anyway", score: 0 },
      { text: "Use Not Interested / similar controls", score: 2 },
    ],
  },
  {
    question: "How often do you intentionally search outside your feed?",
    options: [
      { text: "Often", score: 2 },
      { text: "Sometimes", score: 1 },
      { text: "Rarely", score: 0 },
    ],
  },
  {
    question: "Before sharing surprising information, do you verify it?",
    options: [
      { text: "Usually", score: 2 },
      { text: "Sometimes", score: 1 },
      { text: "Not usually", score: 0 },
    ],
  },
  {
    question: "Do you know why certain content appears repeatedly?",
    options: [
      { text: "Yes, I understand the basic idea", score: 2 },
      { text: "A little", score: 1 },
      { text: "Not really", score: 0 },
    ],
  },
];

export default function AwarenessQuiz() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const answer = (points) => {
    const newScore = score + points;

    if (current === questions.length - 1) {
      setScore(newScore);
      setFinished(true);
      return;
    }

    setScore(newScore);
    setCurrent(current + 1);
  };

  const reset = () => {
    setCurrent(0);
    setScore(0);
    setFinished(false);
  };

  const getResult = () => {
    if (score >= 7) {
      return {
        title: "Algorithm aware",
        text: "You already think quite intentionally about what you consume online.",
      };
    }

    if (score >= 4) {
      return {
        title: "Getting aware",
        text: "You understand some of the patterns, but there is still room to become more intentional.",
      };
    }

    return {
      title: "Curious explorer",
      text: "You have a great opportunity to learn more about how your digital environment works.",
    };
  };

  return (
    <section className="bg-[#FFFDF9] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-4xl">

        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8F1D2C]">
            Interactive check
          </p>

          <h2 className="mt-4 font-[var(--font-laila)] text-4xl text-[#292524] sm:text-5xl">
            How algorithm-aware are you?
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#78716C]">
            Answer a few quick questions. There are no wrong answers.
          </p>
        </div>

        <div className="mt-12 border border-[#E3D6C8] bg-[#F7F1E8] p-6 sm:p-10">

          {!finished ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F1D2C]">
                    Question {current + 1} / {questions.length}
                  </span>

                  <span className="text-xs text-[#A67C62]">
                    {Math.round((current / questions.length) * 100)}%
                  </span>
                </div>

                <div className="mt-3 h-1 bg-[#E3D6C8]">
                  <motion.div
                    animate={{
                      width: `${((current + 1) / questions.length) * 100}%`,
                    }}
                    className="h-full bg-[#8F1D2C]"
                  />
                </div>

                <h3 className="mt-10 font-[var(--font-laila)] text-2xl leading-tight text-[#292524] sm:text-3xl">
                  {questions[current].question}
                </h3>

                <div className="mt-8 grid gap-3">
                  {questions[current].options.map((option) => (
                    <button
                      key={option.text}
                      onClick={() => answer(option.score)}
                      className="border border-[#D8C8B8] bg-[#FFFDF9] px-5 py-4 text-left text-sm text-[#57514D] transition hover:-translate-y-0.5 hover:border-[#8F1D2C] hover:text-[#8F1D2C]"
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 text-center"
            >
              <CheckCircle2
                size={42}
                className="mx-auto text-[#8F1D2C]"
              />

              <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A67C62]">
                Your result
              </p>

              <h3 className="mt-2 font-[var(--font-laila)] text-4xl text-[#292524]">
                {getResult().title}
              </h3>

              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#78716C]">
                {getResult().text}
              </p>

              <div className="mt-8">
                <button
                  onClick={reset}
                  className="inline-flex items-center gap-2 bg-[#8F1D2C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#641824]"
                >
                  <RotateCcw size={14} />
                  Try again
                </button>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}