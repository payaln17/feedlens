"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function ExploreCTA() {
  return (
    <section className="overflow-hidden bg-[#292524] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full border border-white/10"
        />

        <div className="relative grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D6B7A5]">
              Now test the idea
            </p>

            <h2 className="mt-5 max-w-4xl font-[var(--font-laila)] text-5xl leading-[0.98] text-[#FFFDF9] sm:text-6xl lg:text-7xl">
              What happens when
              <br />
              you teach a feed
              <br />
              <span className="text-[#D8A58B]">what you like?</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <p className="max-w-md text-sm leading-7 text-white/50">
              Use the interactive simulator to see how repeated choices can
              gradually change the type of content a fictional feed
              recommends.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/simulator"
                className="group flex items-center justify-between bg-[#8F1D2C] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#A92A3B]"
              >
                <span className="flex items-center gap-3">
                  <Play size={14} fill="currentColor" />
                  Start simulator
                </span>

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/insights"
                className="group flex items-center justify-between border border-white/15 px-6 py-4 text-sm text-white/80 transition hover:border-white/40"
              >
                Explore findings

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="relative mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6">
          {["Observe", "Interact", "Influence", "Repeat", "Understand"].map(
            (word, index) => (
              <span
                key={word}
                className="flex items-center gap-8 text-[9px] uppercase tracking-[0.22em] text-white/30"
              >
                {word}

                {index !== 4 && (
                  <span className="h-1 w-1 rounded-full bg-[#8F1D2C]" />
                )}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}