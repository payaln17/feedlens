"use client";

import { motion } from "framer-motion";
import {
  MousePointer2,
  Activity,
  Brain,
  Repeat2,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    icon: MousePointer2,
    title: "You interact",
    text: "Watch, like, search, save or skip content.",
  },
  {
    icon: Activity,
    title: "A signal appears",
    text: "Your behaviour becomes a useful recommendation signal.",
  },
  {
    icon: Brain,
    title: "The system adapts",
    text: "Future recommendations may respond to those signals.",
  },
  {
    icon: Repeat2,
    title: "You interact again",
    text: "The new feed creates another cycle of behaviour.",
  },
];

export default function FeedLoop() {
  return (
    <section className="bg-[#292524] px-6 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8A58B]">
              The feedback loop
            </p>

            <h2 className="mt-4 font-[var(--font-laila)] text-4xl leading-tight sm:text-5xl">
              Your behaviour
              <br />
              becomes part of
              <br />
              <span className="text-[#D8A58B]">the next feed.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              This simplified model shows how interaction and recommendation
              can continuously influence each other.
            </p>
          </div>

          <div className="relative">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  className="relative"
                >
                  <div className="flex gap-5 border-b border-white/10 py-6 sm:gap-7">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#D8A58B]">
                      <Icon size={17} />
                    </div>

                    <div>
                      <h3 className="font-[var(--font-laila)] text-xl">
                        {step.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-white/45">
                        {step.text}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.12 }}
                      className="absolute bottom-[-8px] left-[16px] z-10 flex h-4 w-4 items-center justify-center bg-[#292524] text-[#D8A58B]"
                    >
                      <ArrowDown size={11} />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}