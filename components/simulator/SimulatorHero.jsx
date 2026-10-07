"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const SimulatorHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F1F1EF]">
      {/* Background decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute -right-20 top-16 h-72 w-72 rounded-full border border-[#8F1D2C]/10"
      />

      <div className="pointer-events-none absolute left-[8%] top-20 h-2 w-2 rounded-full bg-[#8F1D2C]" />
      <div className="pointer-events-none absolute right-[18%] bottom-24 h-3 w-3 rounded-full bg-[#A67C62]/40" />

      <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-24">

        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#8F1D2C]" />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F1D2C]">
                Interactive experiment
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="max-w-3xl font-[var(--font-laila)] text-5xl leading-[0.98] tracking-[-0.03em] text-[#292524] sm:text-6xl lg:text-7xl xl:text-[82px]"
            >
              Train the
              <br />
              <span className="text-[#8F1D2C]">algorithm.</span>
              <br />
              Watch your
              <br />
              feed change.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 max-w-xl text-base leading-7 text-[#78716C] sm:text-lg"
            >
              Interact with different types of content and see how a
              recommendation system might learn from your behaviour.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex items-center gap-3 text-sm text-[#78716C]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D8C8B8] bg-[#FFFDF9]">
                <ArrowDown size={15} />
              </span>

              Start interacting with the feed below
            </motion.div>
          </div>

          {/* Right experiment visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="border border-[#D8C8B8] bg-[#FFFDF9] p-5 shadow-[12px_14px_0px_rgba(100,24,36,0.07)] sm:p-7">

              <div className="flex items-center justify-between border-b border-[#E7DED3] pb-5">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8F1D2C] text-white"
                  >
                    <Sparkles size={17} />
                  </motion.div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#78716C]">
                      Algorithm Lab
                    </p>

                    <p className="font-[var(--font-laila)] text-xl">
                      Learning in progress
                    </p>
                  </div>
                </div>

                <span className="flex items-center gap-2 text-[9px] uppercase tracking-widest text-[#8F1D2C]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#8F1D2C]" />
                  Live
                </span>
              </div>

              {/* Learning bars */}
              <div className="space-y-5 py-7">

                {[
                  ["Entertainment", "82%"],
                  ["Education", "48%"],
                  ["News", "31%"],
                  ["Gaming", "18%"],
                ].map(([name, value], index) => (
                  <div key={name}>
                    <div className="mb-2 flex justify-between text-xs">
                      <span>{name}</span>
                      <span className="text-[#78716C]">{value}</span>
                    </div>

                    <div className="h-2 overflow-hidden bg-[#F1F1EF]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: value }}
                        transition={{
                          duration: 1,
                          delay: 0.5 + index * 0.15,
                        }}
                        className="h-full bg-[#8F1D2C]"
                      />
                    </div>
                  </div>
                ))}

              </div>

              {/* Feedback loop */}
              <div className="border-t border-[#E7DED3] pt-5">
                <div className="flex flex-wrap items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-[#78716C]">
                  <span className="border border-[#D8C8B8] px-3 py-2">
                    Your action
                  </span>

                  <span className="text-[#8F1D2C]">→</span>

                  <span className="border border-[#D8C8B8] px-3 py-2">
                    Learning
                  </span>

                  <span className="text-[#8F1D2C]">→</span>

                  <span className="border border-[#D8C8B8] px-3 py-2">
                    New feed
                  </span>
                </div>
              </div>
            </div>

            {/* Floating label */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 -left-5 border border-[#D8C8B8] bg-[#641824] px-5 py-4 text-white shadow-lg sm:-left-8"
            >
              <p className="text-[9px] uppercase tracking-[0.18em] text-white/50">
                Try it yourself
              </p>

              <p className="mt-1 font-[var(--font-laila)] text-sm">
                Your choices matter.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SimulatorHero;