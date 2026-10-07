"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const questions = [
  {
    question: "Does the research prove how Instagram's algorithm works?",
    answer:
      "No. FeedLens does not have access to proprietary recommendation systems. The research focuses on student behaviour, perceptions and experiences related to personalised content.",
  },
  {
    question: "Does every interaction change my feed?",
    answer:
      "Not necessarily. Recommendation systems can consider many signals and their importance can vary. FeedLens presents the feedback loop as an educational simplification rather than an exact representation of a platform's internal system.",
  },
  {
    question: "Why is misinformation included in the research?",
    answer:
      "Misinformation is relevant because recommendation systems influence which content becomes visible and discoverable. Understanding user encounters with misinformation adds an important dimension to studying personalised feeds.",
  },
  {
    question: "Why are students the focus of this study?",
    answer:
      "Students are highly active digital users and regularly interact with personalised feeds. Studying their behaviour provides a useful context for exploring algorithm awareness and content consumption.",
  },
  {
    question: "Can users control their recommendations?",
    answer:
      "Users can influence their experience through actions such as following or unfollowing accounts, interacting with different content and using platform controls. However, the exact level of control varies between platforms.",
  },
];

export default function ResearchQA() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#F7F1E8] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-5xl">

        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F1D2C]">
            Questions worth asking
          </p>

          <h2 className="mt-4 font-[var(--font-laila)] text-4xl text-[#292524] sm:text-5xl">
            Research, explained simply.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#78716C]">
            Some of the questions that naturally come up when we talk about
            algorithms, recommendations and digital behaviour.
          </p>
        </div>

        <div className="mt-12 border-t border-[#D8C8B8]">
          {questions.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.question}
                className="border-b border-[#D8C8B8]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <div className="flex gap-5">
                    <span className="font-[var(--font-laila)] text-sm text-[#A67C62]">
                      0{index + 1}
                    </span>

                    <span className="font-[var(--font-laila)] text-lg text-[#292524] sm:text-xl">
                      {item.question}
                    </span>
                  </div>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 45 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D8C8B8] text-[#8F1D2C]"
                  >
                    <Plus size={15} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-7 pl-10 text-sm leading-7 text-[#78716C] sm:pl-12">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}