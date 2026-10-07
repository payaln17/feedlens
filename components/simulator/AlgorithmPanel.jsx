"use client";

import { motion } from "framer-motion";
import { Brain, RotateCcw, Sparkles } from "lucide-react";

const AlgorithmPanel = ({ interests, onReset }) => {
  const sortedInterests = Object.entries(interests).sort(
    ([, a], [, b]) => b - a
  );

  const topCategory = sortedInterests[0]?.[0] || "Entertainment";
  const topScore = sortedInterests[0]?.[1] || 0;

  return (
    <div className="space-y-7">

      {/* Main algorithm status */}
      <div className="relative overflow-hidden bg-[#641824] px-6 py-7 text-white">

        {/* Decorative circle */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-white/10" />

        <div className="relative">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Brain size={19} />
              </div>

              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/45">
                  Algorithm status
                </p>

                <p className="mt-1 font-[var(--font-laila)] text-xl">
                  Learning
                </p>
              </div>
            </div>

            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />

          </div>


          {/* Top interest */}
          <div className="mt-8 border-t border-white/10 pt-6">

            <p className="text-[9px] uppercase tracking-[0.18em] text-white/45">
              Strongest signal
            </p>

            <div className="mt-2 flex items-end justify-between gap-4">

              <h3 className="font-[var(--font-laila)] text-3xl">
                {topCategory}
              </h3>

              <span className="font-[var(--font-laila)] text-2xl text-white/60">
                {topScore}%
              </span>

            </div>

          </div>


          {/* Learning message */}
          <motion.div
            key={`${topCategory}-${topScore}`}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mt-6 flex items-start gap-3 border border-white/10 bg-white/5 p-4"
          >
            <Sparkles
              size={15}
              className="mt-0.5 shrink-0"
            />

            <p className="text-xs leading-5 text-white/65">
              The simulated algorithm is learning that you may be interested
              in <span className="font-semibold text-white">{topCategory}</span>{" "}
              content.
            </p>
          </motion.div>

        </div>
      </div>


      {/* Logic */}
      <div>

        <div className="mb-4 flex items-center justify-between">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8F1D2C]">
            How it works
          </p>

          <span className="text-[9px] uppercase tracking-widest text-[#A67C62]">
            Simulated
          </span>
        </div>


        <div className="space-y-0">

          {[
            {
              number: "01",
              title: "You interact",
              text: "Watch or like content.",
            },
            {
              number: "02",
              title: "Signal recorded",
              text: "Your action changes an interest score.",
            },
            {
              number: "03",
              title: "Feed adapts",
              text: "Higher-interest content moves up.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="group flex gap-4 border-b border-[#D8C8B8] py-5 first:border-t"
            >

              <span className="font-[var(--font-laila)] text-sm text-[#8F1D2C]">
                {step.number}
              </span>

              <div>
                <p className="text-sm font-medium text-[#292524]">
                  {step.title}
                </p>

                <p className="mt-1 text-xs leading-5 text-[#78716C]">
                  {step.text}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>


      {/* Reset */}
      <button
        type="button"
        onClick={onReset}
        className="group flex w-full items-center justify-center gap-2 border border-[#D8C8B8] bg-[#FFFDF9] px-4 py-3 text-xs font-medium text-[#292524] transition hover:border-[#8F1D2C] hover:text-[#8F1D2C]"
      >
        <RotateCcw
          size={14}
          className="transition-transform duration-500 group-hover:-rotate-180"
        />

        Reset algorithm
      </button>

    </div>
  );
};

export default AlgorithmPanel;