"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Users,
  BarChart3,
  Lightbulb,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Question",
    description:
      "Define what we want to understand about students, recommendation systems and content consumption.",
  },
  {
    number: "02",
    icon: Users,
    title: "Collect",
    description:
      "Gather responses from students about their social media habits, preferences and awareness.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Analyse",
    description:
      "Organise responses into patterns that help reveal behavioural trends.",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Interpret",
    description:
      "Translate the findings into understandable insights about personalised feeds.",
  },
];

export default function ResearchProcess() {
  return (
    <section className="bg-[#F7F1E8] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8F1D2C]">
            Research process
          </p>

          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h2 className="font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl lg:text-6xl">
              From a question
              <br />
              <span className="text-[#8F1D2C]">
                to an insight.
              </span>
            </h2>

            <p className="max-w-md text-sm leading-7 text-[#78716C] lg:ml-auto">
              FeedLens follows a simple research journey designed to connect
              student behaviour with the way personalised content is
              experienced.
            </p>
          </div>
        </motion.div>

        <div className="relative mt-16">
          {/* Animated line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-6 hidden h-px bg-[#D8C8B8] lg:block"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -5 }}
                  className="relative border border-[#E3D6C8] bg-[#FFFDF9] p-6"
                >
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#D8C8B8] bg-[#FFFDF9] text-[#8F1D2C]">
                    <Icon size={17} strokeWidth={1.7} />
                  </div>

                  <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A67C62]">
                    Step {step.number}
                  </p>

                  <h3 className="mt-2 font-[var(--font-laila)] text-2xl text-[#292524]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#78716C]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}