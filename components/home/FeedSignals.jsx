"use client";

import { motion } from "framer-motion";
import {
  Heart,
  MessageCircle,
  Search,
  Clock3,
  Bookmark,
  RotateCcw,
} from "lucide-react";

const signals = [
  {
    icon: Heart,
    label: "Likes",
    text: "Content you actively respond to",
    size: "lg:col-span-2",
  },
  {
    icon: Clock3,
    label: "Watch time",
    text: "How long something holds your attention",
    size: "",
  },
  {
    icon: Search,
    label: "Search",
    text: "Topics you intentionally explore",
    size: "",
  },
  {
    icon: RotateCcw,
    label: "Replays",
    text: "Content worth watching again",
    size: "",
  },
  {
    icon: Bookmark,
    label: "Saves",
    text: "Posts you may want to return to",
    size: "",
  },
  {
    icon: MessageCircle,
    label: "Engagement",
    text: "Comments and conversations around content",
    size: "lg:col-span-2",
  },
];

export default function FeedSignals() {
  return (
    <section className="bg-[#F7F1E8] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
              Digital signals
            </p>

            <h2 className="mt-4 font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl lg:text-6xl">
              What does your
              <br />
              <span className="italic text-[#8F1D2C]">feed notice?</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg text-sm leading-7 text-[#78716C] lg:ml-auto"
          >
            Recommendation systems can consider many forms of behaviour.
            Individually they look small. Together, they can help build a
            picture of what might keep someone interested.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal, index) => {
            const Icon = signal.icon;

            return (
              <motion.div
                key={signal.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -5 }}
                className={`group min-h-[220px] border border-[#E3D6C8] bg-[#FFFDF9] p-6 transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(41,37,36,0.08)] ${signal.size}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E6DB] text-[#8F1D2C]">
                    <Icon size={17} strokeWidth={1.7} />
                  </div>

                  <span className="text-[9px] tracking-[0.2em] text-[#B6A89C]">
                    0{index + 1}
                  </span>
                </div>

                <div className="mt-12">
                  <h3 className="font-[var(--font-laila)] text-2xl text-[#292524] transition-colors group-hover:text-[#8F1D2C]">
                    {signal.label}
                  </h3>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-[#78716C]">
                    {signal.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-end">
          <p className="max-w-md border-l border-[#8F1D2C] pl-4 text-xs leading-5 text-[#78716C]">
            No single interaction defines a person. Recommendation systems
            typically work with patterns across multiple signals.
          </p>
        </div>
      </div>
    </section>
  );
}