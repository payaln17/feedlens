"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftRight, Check, X } from "lucide-react";

const myths = [
  {
    myth: "If I don't like a post, the algorithm knows I hate it.",
    fact: "Not necessarily. Recommendation systems can use many signals, and one action usually does not tell the complete story.",
  },
  {
    myth: "My feed is completely random.",
    fact: "Personalised feeds are generally influenced by signals such as interactions, interests and content patterns.",
  },
  {
    myth: "The algorithm knows exactly what I am thinking.",
    fact: "Algorithms infer patterns from available data. They do not literally know your thoughts.",
  },
  {
    myth: "I cannot influence what appears on my feed.",
    fact: "Your interactions can influence recommendations, and many platforms also provide controls for managing your experience.",
  },
];

export default function MythFact() {
  const [index, setIndex] = useState(0);
  const [showFact, setShowFact] = useState(false);

  const current = myths[index];

  const next = () => {
    setShowFact(false);
    setIndex((prev) => (prev + 1) % myths.length);
  };

  return (
    <section className="bg-[#641824] px-6 py-20 text-white sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-5xl">

        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D8A58B]">
            Myth or fact?
          </p>

          <h2 className="mt-4 font-[var(--font-laila)] text-4xl sm:text-5xl">
            Test what you know.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/50">
            Think you understand recommendation systems? Tap the card to reveal
            the answer.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${index}-${showFact}`}
              initial={{
                opacity: 0,
                rotateY: -10,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                rotateY: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                rotateY: 10,
              }}
              transition={{ duration: 0.35 }}
              className="min-h-[330px] border border-white/15 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                  {showFact ? "FACT" : "MYTH"}
                </span>

                <span className="font-[var(--font-laila)] text-3xl text-white/15">
                  0{index + 1}
                </span>
              </div>

              <div className="flex min-h-[210px] flex-col justify-center">
                {!showFact ? (
                  <>
                    <X className="mb-5 text-[#D8A58B]" size={24} />

                    <h3 className="font-[var(--font-laila)] text-2xl leading-tight sm:text-3xl">
                      {current.myth}
                    </h3>
                  </>
                ) : (
                  <>
                    <Check className="mb-5 text-[#D8A58B]" size={24} />

                    <h3 className="font-[var(--font-laila)] text-2xl leading-tight sm:text-3xl">
                      {current.fact}
                    </h3>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setShowFact(!showFact)}
                  className="flex flex-1 items-center justify-center gap-2 bg-white px-5 py-3 text-sm font-semibold text-[#641824] transition hover:bg-[#F7F1E8]"
                >
                  <ArrowLeftRight size={15} />

                  {showFact ? "Show myth" : "Reveal answer"}
                </button>

                <button
                  onClick={next}
                  className="border border-white/20 px-5 py-3 text-sm text-white/80 transition hover:border-white/50"
                >
                  Next question →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}