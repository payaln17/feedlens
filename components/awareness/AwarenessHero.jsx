"use client";

import { motion } from "framer-motion";
import { ArrowDown, Eye, Sparkles } from "lucide-react";

export default function AwarenessHero() {
  return (
    <section className="relative min-h-[720px] overflow-hidden bg-[#641824] px-6 py-20 text-white sm:px-10 lg:px-16">
      {/* Decorative circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10"
      />

      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-20 right-[15%] h-28 w-28 rounded-full border border-[#CDB9A7]/20"
      />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-16 lg:grid-cols-[1fr_0.85fr]">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20">
              <Eye size={14} />
            </span>

            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D8C8B8]">
              Awareness
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="max-w-3xl font-[var(--font-laila)] text-5xl leading-[0.98] sm:text-6xl lg:text-8xl"
          >
            Your feed
            <br />
            learns from
            <br />
            <span className="text-[#D8C8B8]">you.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
            className="mt-8 max-w-xl text-base leading-8 text-white/65"
          >
            Every watch, like and search can become a signal. The more signals
            a recommendation system receives, the more personalised your feed
            can become.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
            }}
            className="mt-10 flex items-center gap-3 text-xs text-[#D8C8B8]"
          >
            <Sparkles size={14} />

            <span>
              The goal isn't to escape algorithms.
              <br />
              It's to understand them.
            </span>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="relative mx-auto w-full max-w-md"
        >
          {/* Main paper */}
          <div className="relative rotate-[2deg] bg-[#F7F1E8] p-5 text-[#292524] shadow-2xl sm:p-7">
            <div className="border border-[#D8C8B8] p-6">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A67C62]">
                  Feed awareness
                </span>

                <span className="h-2 w-2 rounded-full bg-[#8F1D2C]" />
              </div>

              <div className="mt-12">
                <p className="font-[var(--font-laila)] text-3xl leading-tight">
                  What are you
                  <br />
                  <span className="text-[#8F1D2C]">
                    not seeing?
                  </span>
                </p>
              </div>

              <div className="mt-10 space-y-3">
                {[
                  ["Entertainment", "72%"],
                  ["Education", "48%"],
                  ["News", "31%"],
                ].map(([label, value], index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.7 + index * 0.15,
                    }}
                  >
                    <div className="mb-1 flex justify-between text-[9px] uppercase tracking-wider">
                      <span>{label}</span>
                      <span className="text-[#8F1D2C]">
                        {value}
                      </span>
                    </div>

                    <div className="h-1 bg-[#E7DED3]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: value,
                        }}
                        transition={{
                          duration: 1,
                          delay: 0.8 + index * 0.15,
                        }}
                        className="h-full bg-[#8F1D2C]"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 border-t border-[#D8C8B8] pt-5">
                <p className="text-xs leading-5 text-[#78716C]">
                  A personalised feed can feel comfortable because it keeps
                  showing what already interests you.
                </p>
              </div>
            </div>

            {/* floating note */}
            <motion.div
              animate={{
                y: [0, -7, 0],
                rotate: [-2, 0, -2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-8 -left-8 bg-[#FFFDF9] px-5 py-4 shadow-xl"
            >
              <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#A67C62]">
                Remember
              </p>

              <p className="mt-1 font-[var(--font-laila)] text-lg text-[#292524]">
                Curiosity
                <br />
                breaks patterns.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/40">
        <span className="text-[8px] uppercase tracking-[0.25em]">
          Explore
        </span>

        <ArrowDown size={14} />
      </div>
    </section>
  );
}