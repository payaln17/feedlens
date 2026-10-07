"use client";

import { motion } from "framer-motion";
import { FileQuestion, UsersRound, ShieldCheck } from "lucide-react";

const stats = [
  {
    value: "01",
    label: "Survey",
    text: "Structured questionnaire designed around student social media behaviour.",
    icon: FileQuestion,
  },
  {
    value: "02",
    label: "Participants",
    text: "Student responses provide the primary source of behavioural observations.",
    icon: UsersRound,
  },
  {
    value: "03",
    label: "Analysis",
    text: "Responses are grouped to identify patterns, differences and recurring behaviours.",
    icon: ShieldCheck,
  },
];

export default function DataCollection() {
  return (
    <section className="bg-[#FFFDF9] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8F1D2C]">
              Data collection
            </p>

            <h2 className="mt-4 font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl">
              Listening to
              <br />
              <span className="text-[#8F1D2C]">
                student behaviour.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#78716C]">
              Instead of assuming how students interact with personalised
              content, FeedLens uses direct responses to understand their
              experiences.
            </p>

            <div className="mt-8 border-l-2 border-[#8F1D2C] pl-5">
              <p className="text-xs leading-6 text-[#78716C]">
                The collected responses are used for educational research and
                visual analysis.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="group border border-[#E3D6C8] bg-[#F7F1E8] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(41,37,36,0.07)]"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={18}
                      strokeWidth={1.6}
                      className="text-[#8F1D2C]"
                    />

                    <span className="font-[var(--font-laila)] text-3xl text-[#D8C8B8]">
                      {stat.value}
                    </span>
                  </div>

                  <h3 className="mt-14 font-[var(--font-laila)] text-xl text-[#292524]">
                    {stat.label}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#78716C]">
                    {stat.text}
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