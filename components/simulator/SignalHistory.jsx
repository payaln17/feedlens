"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Eye,
  Activity,
} from "lucide-react";

export default function SignalHistory({ history = [] }) {
  return (
    <section className="bg-[#F1F1EF] px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
              Behaviour timeline
            </p>

            <h2 className="mt-4 font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl">
              See your signals
              <br />
              <span className="text-[#8F1D2C]">accumulate.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#78716C]">
              Every interaction in this experiment is recorded locally in the
              current session. Watch how individual actions become a pattern.
            </p>
          </div>

          <div className="min-h-[260px] border border-[#D8C8B8] bg-[#FFFDF9] p-6 sm:p-8">

            {history.length === 0 ? (
              <div className="flex min-h-[210px] flex-col items-center justify-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8C8B8] text-[#8F1D2C]">
                  <Activity size={18} />
                </div>

                <p className="mt-5 font-[var(--font-laila)] text-xl text-[#292524]">
                  No signals yet
                </p>

                <p className="mt-2 max-w-xs text-xs leading-5 text-[#78716C]">
                  Interact with the feed above to start building your
                  behavioural timeline.
                </p>
              </div>
            ) : (
              <div className="relative">
                <div className="absolute bottom-3 left-[15px] top-3 w-px bg-[#E3D6C8]" />

                <AnimatePresence initial={false}>
                  {history
                    .slice()
                    .reverse()
                    .slice(0, 8)
                    .map((item, index) => {
                      const isLike = item.type === "like";

                      return (
                        <motion.div
                          key={item.id}
                          initial={{
                            opacity: 0,
                            x: 20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          exit={{
                            opacity: 0,
                            x: -15,
                          }}
                          transition={{
                            duration: 0.35,
                          }}
                          className="relative flex gap-5 pb-6 last:pb-0"
                        >
                          <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D8C8B8] bg-[#FFFDF9] text-[#8F1D2C]">
                            {isLike ? (
                              <Heart size={12} />
                            ) : (
                              <Eye size={12} />
                            )}
                          </div>

                          <div className="pt-1">
                            <p className="text-xs text-[#292524]">
                              You{" "}
                              <strong>
                                {isLike ? "liked" : "watched"}
                              </strong>{" "}
                              <span className="text-[#8F1D2C]">
                                {item.category}
                              </span>{" "}
                              content.
                            </p>

                            <p className="mt-1 text-[10px] text-[#A67C62]">
                              +{isLike ? 12 : 6} interest signal
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                </AnimatePresence>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}