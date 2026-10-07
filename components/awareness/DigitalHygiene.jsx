"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck } from "lucide-react";

const habits = [
  "I check information before sharing it.",
  "I occasionally review who I follow.",
  "I use 'Not Interested' when appropriate.",
  "I intentionally search for information instead of only scrolling.",
  "I take breaks from social media.",
  "I notice when the same type of content keeps appearing.",
];

export default function DigitalHygiene() {
  const [checked, setChecked] = useState([]);

  const toggle = (index) => {
    setChecked((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const progress = Math.round((checked.length / habits.length) * 100);

  return (
    <section className="bg-[#F1F1EF] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8F1D2C] text-white">
              <ShieldCheck size={19} />
            </div>

            <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
              Digital hygiene
            </p>

            <h2 className="mt-4 font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl">
              How intentional
              <br />
              is your feed?
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#78716C]">
              Tick the habits you already follow. This isn't a scientific
              assessment — it's a quick self-reflection tool.
            </p>

            <div className="mt-8">
              <div className="flex justify-between text-[9px] uppercase tracking-[0.18em] text-[#78716C]">
                <span>Your progress</span>
                <span>{progress}%</span>
              </div>

              <div className="mt-2 h-1 bg-[#D8C8B8]">
                <motion.div
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-[#8F1D2C]"
                />
              </div>
            </div>
          </div>

          <div className="border border-[#D8C8B8] bg-[#FFFDF9] p-6 sm:p-8">
            <div className="space-y-2">
              {habits.map((habit, index) => {
                const isChecked = checked.includes(index);

                return (
                  <button
                    key={habit}
                    onClick={() => toggle(index)}
                    className={`flex w-full items-center gap-4 p-4 text-left transition ${
                      isChecked
                        ? "bg-[#F3E6DB]"
                        : "hover:bg-[#F7F1E8]"
                    }`}
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center border ${
                        isChecked
                          ? "border-[#8F1D2C] bg-[#8F1D2C] text-white"
                          : "border-[#CDB9A7]"
                      }`}
                    >
                      {isChecked && <Check size={13} />}
                    </span>

                    <span className="text-sm text-[#57514D]">
                      {habit}
                    </span>
                  </button>
                );
              })}
            </div>

            {checked.length === habits.length && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 border-l-2 border-[#8F1D2C] bg-[#F7F1E8] p-4"
              >
                <p className="text-sm font-semibold text-[#292524]">
                  You're being intentional. ✦
                </p>

                <p className="mt-1 text-xs leading-5 text-[#78716C]">
                  Keep questioning what appears in your feed rather than
                  automatically accepting it.
                </p>
              </motion.div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}