"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Heart,
  Eye,
  TrendingUp,
} from "lucide-react";

export default function ExperimentStats({
  interactionCounts,
  interests,
}) {
  const totalInteractions = Object.values(interactionCounts).reduce(
    (sum, value) => sum + value,
    0
  );

  const strongest = Object.entries(interests).sort(
    (a, b) => b[1] - a[1]
  )[0];

  const averageInterest =
    Object.values(interests).reduce((sum, value) => sum + value, 0) /
    Object.values(interests).length;

  const stats = [
    {
      label: "Interactions",
      value: totalInteractions,
      icon: Activity,
      description: "signals created",
    },
    {
      label: "Strongest interest",
      value: strongest?.[0] || "—",
      icon: TrendingUp,
      description: `${strongest?.[1] || 0}% signal`,
    },
    {
      label: "Average interest",
      value: `${Math.round(averageInterest)}%`,
      icon: Eye,
      description: "across categories",
    },
    {
      label: "Active signals",
      value: Object.values(interactionCounts).filter(Boolean).length,
      icon: Heart,
      description: "categories affected",
    },
  ];

  return (
    <section className="bg-[#FFFDF9] px-6 py-12 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
              Experiment status
            </p>

            <h2 className="mt-2 font-[var(--font-laila)] text-2xl text-[#292524] sm:text-3xl">
              Your activity, live.
            </h2>
          </div>

          <span className="hidden text-[9px] uppercase tracking-[0.2em] text-[#A67C62] sm:block">
            Updates automatically
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="border border-[#E3D6C8] bg-[#F7F1E8] p-5"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={16}
                    strokeWidth={1.7}
                    className="text-[#8F1D2C]"
                  />

                  <span className="text-[9px] text-[#B3A59A]">
                    0{index + 1}
                  </span>
                </div>

                <motion.p
                  key={String(stat.value)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-7 truncate font-[var(--font-laila)] text-2xl text-[#292524]"
                >
                  {stat.value}
                </motion.p>

                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#78716C]">
                  {stat.label}
                </p>

                <p className="mt-1 text-[10px] text-[#A67C62]">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}