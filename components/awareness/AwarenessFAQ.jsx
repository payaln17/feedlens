"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Can I completely reset my recommendations?",
    a: "Some platforms provide recommendation-reset or preference controls, while others allow you to influence recommendations through actions such as following, unfollowing, muting and marking content as not relevant.",
  },
  {
    q: "Should I stop using social media?",
    a: "Awareness does not mean avoiding social media completely. The goal is to become more intentional about what you consume, how long you consume it and how you evaluate what you see.",
  },
  {
    q: "Why do I keep seeing the same type of content?",
    a: "Repeated interactions and content preferences can contribute to recommendation patterns. Once a particular interest becomes a strong signal, related content may become more visible.",
  },
  {
    q: "Does scrolling past something count as an interaction?",
    a: "It can depend on the platform and its recommendation system. Different systems can consider different behavioural signals, so FeedLens treats this as a simplified educational concept rather than a universal rule.",
  },
];

export default function AwarenessFAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-[#FFFDF9] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-4xl">

        <div className="text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
            Still curious?
          </p>

          <h2 className="mt-4 font-[var(--font-laila)] text-4xl text-[#292524] sm:text-5xl">
            Frequently asked questions.
          </h2>
        </div>

        <div className="mt-12 border-t border-[#E3D6C8]">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={item.q}
                className="border-b border-[#E3D6C8]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 py-6 text-left"
                >
                  <span className="font-[var(--font-laila)] text-lg text-[#292524] sm:text-xl">
                    {item.q}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    className="shrink-0 text-[#8F1D2C]"
                  >
                    <Plus size={18} />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-6 pr-8 text-sm leading-7 text-[#78716C]">
                        {item.a}
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