"use client";

import { useState } from "react";
import {
  RotateCcw,
  Sparkles,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  {
    name: "Entertainment",
    short: "ENT",
    description: "Short videos, trends & entertainment",
  },
  {
    name: "Education",
    short: "EDU",
    description: "Learning, facts & explainers",
  },
  {
    name: "News",
    short: "NEWS",
    description: "Current events & information",
  },
  {
    name: "Gaming",
    short: "GAME",
    description: "Games, esports & gaming culture",
  },
];

export default function FilterBubble() {
  const [selected, setSelected] = useState([]);

  const toggleCategory = (category) => {
    setSelected((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
  };

  const reset = () => {
    setSelected([]);
  };

  const diversity = Math.max(100 - selected.length * 20, 20);

  const status =
    selected.length === 0
      ? {
          label: "Broad feed",
          title: "Your feed has room to explore.",
          text: "Different content categories are still visible.",
        }
      : selected.length === 1
      ? {
          label: "Narrowing",
          title: "One interest is becoming dominant.",
          text: "Repeated attention can make related content more prominent.",
        }
      : selected.length === 2
      ? {
          label: "Focused",
          title: "Your content space is getting smaller.",
          text: "Fewer categories are now receiving your attention.",
        }
      : {
          label: "Highly focused",
          title: "The feed is becoming very narrow.",
          text: "Several categories are receiving little or no attention.",
        };

  return (
    <section className="relative overflow-hidden bg-[#FFFDF9] px-6 py-24 sm:px-10 lg:px-16">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-28 top-20 h-64 w-64 rounded-full border border-[#E7DED3]" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full border border-[#E7DED3]" />

      <div className="relative mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
            Interactive / Filter Bubble Lab
          </p>

          <h2 className="font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-6xl">
            What happens when
            <br />
            <span className="text-[#8F1D2C]">
              one interest takes over?
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-[#78716C]">
            Try the experiment below. Select the topics you repeatedly
            consume and watch how the simulated content space changes.
          </p>
        </div>

        {/* LAB */}
        <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr]">
          {/* LEFT — CONTROLS */}
          <div>
            <div className="sticky top-28">
              <div className="mb-7 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#F7F1E8] text-[#8F1D2C]">
                  <Sparkles size={16} />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A67C62]">
                    Step 01
                  </p>

                  <p className="font-[var(--font-laila)] text-xl text-[#292524]">
                    Choose your pattern
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {categories.map((category) => {
                  const active = selected.includes(category.name);

                  return (
                    <motion.button
                      key={category.name}
                      type="button"
                      onClick={() => toggleCategory(category.name)}
                      whileTap={{ scale: 0.98 }}
                      className={`group flex w-full items-center gap-4 border p-4 text-left transition-all duration-300 ${
                        active
                          ? "border-[#8F1D2C] bg-[#8F1D2C] text-white"
                          : "border-[#D8C8B8] bg-[#FFFDF9] text-[#292524] hover:-translate-y-0.5 hover:border-[#8F1D2C]"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 items-center justify-center text-[9px] font-bold tracking-wider ${
                          active
                            ? "bg-white/15 text-white"
                            : "bg-[#F7F1E8] text-[#8F1D2C]"
                        }`}
                      >
                        {category.short}
                      </span>

                      <span className="flex-1">
                        <span className="block font-[var(--font-laila)] text-lg">
                          {category.name}
                        </span>

                        <span
                          className={`mt-0.5 block text-[10px] ${
                            active
                              ? "text-white/60"
                              : "text-[#78716C]"
                          }`}
                        >
                          {category.description}
                        </span>
                      </span>

                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full border ${
                          active
                            ? "border-white/30"
                            : "border-[#D8C8B8]"
                        }`}
                      >
                        {active ? (
                          <Eye size={12} />
                        ) : (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#D8C8B8]" />
                        )}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={reset}
                className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#78716C] transition hover:text-[#8F1D2C]"
              >
                <RotateCcw size={13} />
                Reset experiment
              </button>

              <div className="mt-10 border-t border-[#E7DED3] pt-7">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A67C62]">
                  Your selection
                </p>

                <p className="mt-2 font-[var(--font-laila)] text-3xl text-[#292524]">
                  {selected.length}
                  <span className="text-[#A67C62]"> / 4</span>
                </p>

                <p className="mt-1 text-xs leading-5 text-[#78716C]">
                  categories receiving repeated attention
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — SIMULATION */}
          <div className="bg-[#F7F1E8] p-5 sm:p-8 lg:p-10">
            {/* STATUS */}
            <div className="border-b border-[#D8C8B8] pb-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A67C62]">
                    Step 02 / Observe
                  </p>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={status.title}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                      }}
                      transition={{
                        duration: 0.25,
                      }}
                    >
                      <h3 className="mt-2 max-w-xl font-[var(--font-laila)] text-2xl leading-tight text-[#292524] sm:text-3xl">
                        {status.title}
                      </h3>

                      <p className="mt-2 max-w-lg text-xs leading-6 text-[#78716C]">
                        {status.text}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                </div>

                <span className="shrink-0 border border-[#D8C8B8] bg-[#FFFDF9] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8F1D2C]">
                  {status.label}
                </span>
              </div>
            </div>

            {/* DIVERSITY */}
            <div className="py-8">
              <div className="mb-3 flex items-end justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#78716C]">
                    Simulated content diversity
                  </p>

                  <motion.p
                    key={diversity}
                    initial={{
                      opacity: 0.3,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    className="mt-1 font-[var(--font-laila)] text-5xl text-[#292524]"
                  >
                    {diversity}
                    <span className="text-2xl text-[#A67C62]">
                      %
                    </span>
                  </motion.p>
                </div>

                <span className="text-right text-[9px] uppercase tracking-[0.15em] text-[#78716C]">
                  {selected.length === 0
                    ? "Open"
                    : selected.length === 1
                    ? "Narrowing"
                    : selected.length === 2
                    ? "Focused"
                    : "Very narrow"}
                </span>
              </div>

              {/* animated meter */}
              <div className="relative h-3 overflow-hidden bg-[#E7DED3]">
                <motion.div
                  animate={{
                    width: `${diversity}%`,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="h-full bg-[#8F1D2C]"
                />

                <div className="absolute inset-0 flex justify-between px-[25%]">
                  <span className="h-full w-px bg-[#FFFDF9]/50" />
                  <span className="h-full w-px bg-[#FFFDF9]/50" />
                  <span className="h-full w-px bg-[#FFFDF9]/50" />
                </div>
              </div>
            </div>

            {/* FEED SPACE */}
            <div className="border border-[#D8C8B8] bg-[#FFFDF9] p-5 sm:p-7">
              <div className="mb-7 flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A67C62]">
                    Simulated feed
                  </p>

                  <p className="mt-1 font-[var(--font-laila)] text-xl text-[#292524]">
                    What you're seeing
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[9px] uppercase tracking-[0.15em] text-[#78716C]">
                  <span className="h-2 w-2 rounded-full bg-[#8F1D2C]" />
                  Personalised
                </div>
              </div>

              {/* BUBBLES */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <AnimatePresence mode="popLayout">
                  {categories.map((category, index) => {
                    const visible =
                      selected.length === 0 ||
                      selected.includes(category.name);

                    return (
                      <motion.div
                        key={category.name}
                        layout
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        animate={{
                          opacity: visible ? 1 : 0.25,
                          scale: visible ? 1 : 0.82,
                        }}
                        transition={{
                          duration: 0.45,
                          delay: index * 0.04,
                        }}
                        className={`relative flex h-36 flex-col justify-between overflow-hidden border p-4 ${
                          visible
                            ? "border-[#D8C8B8] bg-[#F7F1E8]"
                            : "border-[#E7DED3] bg-[#F1F1EF]"
                        }`}
                      >
                        {/* Decorative circle */}
                        <motion.div
                          animate={{
                            scale: visible ? 1 : 0.65,
                          }}
                          className={`absolute -right-8 -top-8 h-24 w-24 rounded-full border ${
                            visible
                              ? "border-[#D8C8B8]"
                              : "border-[#E7DED3]"
                          }`}
                        />

                        <div className="relative flex items-center justify-between">
                          <span className="text-[9px] font-bold tracking-[0.15em] text-[#8F1D2C]">
                            {category.short}
                          </span>

                          {visible ? (
                            <Eye
                              size={13}
                              className="text-[#A67C62]"
                            />
                          ) : (
                            <EyeOff
                              size={13}
                              className="text-[#A67C62]"
                            />
                          )}
                        </div>

                        <div className="relative">
                          <p className="font-[var(--font-laila)] text-lg leading-tight text-[#292524]">
                            {category.name}
                          </p>

                          <p className="mt-1 text-[9px] leading-4 text-[#78716C]">
                            {visible
                              ? "Still visible"
                              : "Less visible"}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* EXPLANATION */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.length}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  className="mt-7 flex gap-4 border-t border-[#E7DED3] pt-6"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#641824] text-white">
                    <Sparkles size={14} />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F1D2C]">
                      What this demonstrates
                    </p>

                    <p className="mt-1 max-w-xl text-xs leading-6 text-[#78716C]">
                      {selected.length === 0
                        ? "Your simulated feed currently has access to all four categories. Try selecting an interest to see the effect."
                        : "When attention repeatedly concentrates on certain topics, related content can become more prominent while other categories receive less exposure."}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* BOTTOM MESSAGE */}
            <div className="mt-7 flex items-center justify-between gap-5">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A67C62]">
                  Step 03 / Reflect
                </p>

                <p className="mt-1 font-[var(--font-laila)] text-xl text-[#292524]">
                  Notice what disappears.
                </p>
              </div>

              <ArrowRight
                size={18}
                className="shrink-0 text-[#8F1D2C]"
              />
            </div>
          </div>
        </div>

        {/* FINAL INSIGHT */}
        <div className="mt-20 grid gap-8 border-t border-[#D8C8B8] pt-10 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#A67C62]">
            The takeaway
          </p>

          <p className="max-w-3xl font-[var(--font-laila)] text-2xl leading-relaxed text-[#292524] sm:text-3xl">
            A personalised feed can feel{" "}
            <span className="text-[#8F1D2C]">comfortable</span>
            — but awareness helps you notice what might be missing.
          </p>
        </div>
      </div>
    </section>
  );
}