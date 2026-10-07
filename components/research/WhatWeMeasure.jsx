"use client";

import { motion } from "framer-motion";

const measurements = [
  {
    number: "01",
    title: "Usage frequency",
    description:
      "How often students use social media and how much time they typically spend consuming content.",
  },
  {
    number: "02",
    title: "Content discovery",
    description:
      "Whether students find content intentionally or primarily through personalised recommendations.",
  },
  {
    number: "03",
    title: "Algorithm awareness",
    description:
      "How well students understand that their interactions can influence future recommendations.",
  },
  {
    number: "04",
    title: "Behavioural influence",
    description:
      "Whether recommendations affect what students watch, explore or continue consuming.",
  },
];

export default function WhatWeMeasure() {
  return (
    <section className="bg-[#292524] px-6 py-20 text-white sm:px-10 sm:py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D6B7A5]">
            Variables we explore
          </p>

          <h2 className="mt-4 max-w-3xl font-[var(--font-laila)] text-4xl leading-tight sm:text-5xl lg:text-6xl">
            What are we actually
            <span className="text-[#D8A58B]"> looking for?</span>
          </h2>
        </motion.div>

        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {measurements.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -25 : 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="group grid gap-4 py-8 sm:grid-cols-[80px_0.8fr_1.2fr] sm:items-center"
            >
              <span className="font-[var(--font-laila)] text-3xl text-white/20">
                {item.number}
              </span>

              <h3 className="font-[var(--font-laila)] text-2xl transition-colors group-hover:text-[#D8A58B]">
                {item.title}
              </h3>

              <p className="max-w-lg text-sm leading-6 text-white/50">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}