"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Play,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-[#F7F1E8] px-6 py-20 sm:px-10 lg:px-16">
      {/* Decorative background circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#D8C8B8]"
      />

      <motion.div
        animate={{
          y: [0, -12, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-10 left-[5%] h-20 w-20 rounded-full border border-[#D8C8B8]"
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-112px)] max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* LEFT */}
        <div>
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[#8F1D2C]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
              Research / Student Behaviour
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="max-w-4xl font-[var(--font-laila)] text-5xl leading-[0.98] text-[#292524] sm:text-6xl lg:text-8xl">
            <motion.span
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              Your feed
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              knows you.
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.34,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block text-[#8F1D2C]"
            >
              Do you know
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.46,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              your feed?
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.65,
            }}
            className="mt-8 max-w-xl text-base leading-8 text-[#78716C]"
          >
            FeedLens explores how recommendation algorithms influence what
            students discover, watch and repeatedly encounter on social media.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8,
            }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/insights"
              className="group flex items-center justify-center gap-2 bg-[#8F1D2C] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#641824] hover:shadow-lg"
            >
              Explore the data

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>

            <Link
              href="/simulator"
              className="group flex items-center justify-center gap-2 border border-[#CDB9A7] bg-[#FFFDF9] px-5 py-3.5 text-sm font-semibold text-[#292524] transition-all duration-300 hover:-translate-y-1 hover:border-[#8F1D2C] hover:text-[#8F1D2C]"
            >
              <Play
                size={14}
                fill="currentColor"
              />

              Try the simulator
            </Link>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{
            opacity: 0,
            x: 50,
            rotate: 3,
          }}
          animate={{
            opacity: 1,
            x: 0,
            rotate: 2,
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto w-full max-w-lg"
        >
          {/* Floating paper */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [2, 1, 2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative bg-[#FFFDF9] p-5 shadow-[0_25px_60px_rgba(41,37,36,0.12)] sm:p-7"
          >
            <div className="border border-[#E7DED3] p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#E7DED3] pb-5">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A67C62]">
                    Feed analysis
                  </p>

                  <p className="mt-1 font-[var(--font-laila)] text-xl text-[#292524]">
                    What shapes your feed?
                  </p>
                </div>

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8C8B8] text-[#8F1D2C]"
                >
                  <Sparkles size={15} />
                </motion.div>
              </div>

              {/* Fake chart */}
              <div className="mt-8">
                <div className="mb-3 flex items-end justify-between">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-[#78716C]">
                    Recommendation signals
                  </span>

                  <span className="font-[var(--font-laila)] text-2xl text-[#8F1D2C]">
                    14
                  </span>
                </div>

                <div className="flex h-40 items-end gap-3 border-b border-[#D8C8B8] px-2">
                  {[38, 62, 48, 78, 58, 88, 70, 96].map(
                    (height, index) => (
                      <motion.div
                        key={index}
                        initial={{
                          height: 0,
                        }}
                        animate={{
                          height: `${height}%`,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: 0.9 + index * 0.08,
                          ease: "easeOut",
                        }}
                        className={`flex-1 ${
                          index === 7
                            ? "bg-[#8F1D2C]"
                            : "bg-[#D8C8B8]"
                        }`}
                      />
                    )
                  )}
                </div>
              </div>

              {/* Data notes */}
              <div className="mt-7 grid grid-cols-3 gap-3">
                {[
                  ["14", "Students"],
                  ["21", "Questions"],
                  ["01", "Research"],
                ].map(([number, label], index) => (
                  <motion.div
                    key={label}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 1.45 + index * 0.1,
                    }}
                    className="border border-[#E7DED3] bg-[#F7F1E8] p-3"
                  >
                    <p className="font-[var(--font-laila)] text-xl text-[#8F1D2C]">
                      {number}
                    </p>

                    <p className="mt-1 text-[8px] uppercase tracking-wider text-[#78716C]">
                      {label}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom note */}
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1.8,
                }}
                className="mt-7 flex items-center gap-3 border-t border-[#E7DED3] pt-5"
              >
                <div className="flex h-8 w-8 items-center justify-center bg-[#8F1D2C] text-white">
                  <BarChart3 size={14} />
                </div>

                <p className="text-[10px] leading-4 text-[#78716C]">
                  Turning student responses
                  <br />
                  into visible patterns.
                </p>
              </motion.div>
            </div>

            {/* Floating research label */}
            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [-2, 0, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -left-7 bg-[#641824] px-5 py-4 text-white shadow-xl"
            >
              <p className="text-[8px] uppercase tracking-[0.2em] text-white/60">
                Research question
              </p>

              <p className="mt-1 font-[var(--font-laila)] text-lg">
                Choice or algorithm?
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}