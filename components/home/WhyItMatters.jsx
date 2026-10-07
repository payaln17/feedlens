"use client";

import { motion } from "framer-motion";
import { Clock3, RefreshCw, MousePointer2 } from "lucide-react";

const points = [
  {
    number: "01",
    icon: Clock3,
    title: "Attention",
    text: "What keeps us watching can become a powerful signal for what appears next.",
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "Repetition",
    text: "Repeated recommendations can make certain topics feel more common or important.",
  },
  {
    number: "03",
    icon: MousePointer2,
    title: "Choice",
    text: "The line between what we choose and what is suggested can become difficult to notice.",
  },
];

export default function WhyItMatters() {
  return (
    <section className="overflow-hidden bg-[#641824] px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#DDB8A5]">
              Why it matters
            </p>

            <h2 className="mt-5 font-[var(--font-laila)] text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Your scroll is
              <br />
              <span className="text-[#E2BFAE]">not random.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/60">
              Every pause, replay and interaction may contribute to the digital
              environment you experience next.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-12 bg-white/30" />
              <span className="text-[9px] uppercase tracking-[0.22em] text-white/50">
                Small actions → evolving feeds
              </span>
            </div>
          </motion.div>

          <div className="border-t border-white/15 lg:border-l lg:border-t-0">
            {points.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="group grid gap-5 border-b border-white/15 py-8 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-7 lg:px-8"
                >
                  <span className="font-[var(--font-laila)] text-3xl text-white/20">
                    {item.number}
                  </span>

                  <div>
                    <h3 className="font-[var(--font-laila)] text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-lg text-sm leading-6 text-white/55">
                      {item.text}
                    </p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition duration-300 group-hover:bg-white group-hover:text-[#641824]">
                    <Icon size={16} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}