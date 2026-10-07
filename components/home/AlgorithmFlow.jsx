"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Heart,
  Brain,
  Repeat2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "You interact",
    description:
      "You watch, like, search or spend time with a piece of content.",
    icon: Eye,
  },
  {
    number: "02",
    title: "A signal is created",
    description:
      "Your interaction can become a signal about what may interest you.",
    icon: Heart,
  },
  {
    number: "03",
    title: "The system learns",
    description:
      "Recommendation systems use signals to personalise future suggestions.",
    icon: Brain,
  },
  {
    number: "04",
    title: "Your feed adapts",
    description:
      "Related content can become more prominent in your personalised feed.",
    icon: Repeat2,
  },
];

export default function AlgorithmFlow() {
  return (
    <section className="bg-[#F1F1EF] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 border-b border-[#D8D8D4] pb-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
              How it works
            </p>

            <h2 className="mt-4 max-w-xl font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl">
              Follow the
              <br />
              <span className="text-[#8F1D2C]">
                feedback loop.
              </span>
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-sm leading-7 text-[#78716C]">
              Recommendation systems respond to behavioural signals. The
              simplified flow below shows how an interaction can influence
              what appears next in a personalised feed.
            </p>
          </div>
        </motion.div>

        {/* FLOW */}
        <div className="mt-16">
          <div className="grid gap-0 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className={`relative ${
                    index !== 0
                      ? "border-t border-[#D8D8D4] lg:border-l lg:border-t-0"
                      : ""
                  }`}
                >
                  <div className="p-7 lg:min-h-[330px] lg:p-8">

                    {/* NUMBER */}
                    <div className="flex items-center justify-between">
                      <span className="font-[var(--font-laila)] text-4xl text-[#C9C9C4]">
                        {step.number}
                      </span>

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8C8B8] bg-[#FFFDF9] text-[#8F1D2C]">
                        <Icon size={16} strokeWidth={1.8} />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-14 font-[var(--font-laila)] text-2xl text-[#292524]">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-xs text-sm leading-6 text-[#78716C]">
                      {step.description}
                    </p>

                    {/* Connector */}
                    {index < steps.length - 1 && (
                      <div className="absolute -right-2.5 top-1/2 z-10 hidden h-5 w-5 items-center justify-center rounded-full border border-[#D8D8D4] bg-[#F1F1EF] lg:flex">
                        <ArrowRight
                          size={11}
                          className="text-[#8F1D2C]"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM STATEMENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-5 border-t border-[#D8D8D4] pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="font-[var(--font-laila)] text-xl text-[#292524]">
            Behaviour
            <span className="mx-3 text-[#8F1D2C]">→</span>
            Signal
            <span className="mx-3 text-[#8F1D2C]">→</span>
            Recommendation
          </p>

          <p className="max-w-sm text-xs leading-5 text-[#78716C]">
            This is an educational simplification, not a reproduction of any
            platform's proprietary algorithm.
          </p>
        </motion.div>
      </div>
    </section>
  );
}