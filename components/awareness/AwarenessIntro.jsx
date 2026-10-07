"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Brain,
  SlidersHorizontal,
} from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "Notice",
    text: "Pay attention to the patterns in what repeatedly appears in your feed.",
  },
  {
    icon: Brain,
    title: "Understand",
    text: "Learn that your interactions can become signals for recommendation systems.",
  },
  {
    icon: SlidersHorizontal,
    title: "Take control",
    text: "Use available controls and intentional behaviour to shape your experience.",
  },
];

export default function AwarenessIntro() {
  return (
    <section className="bg-[#FFFDF9] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8F1D2C]">
            Awareness starts here
          </p>

          <h2 className="mt-4 font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl lg:text-6xl">
            You don't have to
            <br />
            <span className="text-[#8F1D2C]">
              understand the entire algorithm.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#78716C]">
            You just need to understand enough to recognise how your behaviour
            and your feed can influence each other.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -6 }}
                className="border border-[#E3D6C8] bg-[#F7F1E8] p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFFDF9] text-[#8F1D2C]">
                  <Icon size={17} />
                </div>

                <h3 className="mt-10 font-[var(--font-laila)] text-2xl text-[#292524]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#78716C]">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}