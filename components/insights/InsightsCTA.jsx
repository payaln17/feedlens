"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

export default function InsightsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#8F1D2C] px-6 py-20 text-white sm:px-8 lg:px-10 lg:py-28">

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10"
      />

      <div className="relative mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Go one step further
          </p>

          <h2 className="mt-4 max-w-4xl font-[var(--font-laila)] text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Seeing the numbers is one thing.
            <br />
            <span className="text-[#E2BFAE]">
              Experimenting with them is another.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
            Explore how changing your interests can influence a simulated
            recommendation feed.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/simulator"
              className="group flex items-center justify-center gap-3 bg-white px-6 py-4 text-sm font-semibold text-[#8F1D2C] transition hover:-translate-y-1 hover:bg-[#FFF7F1]"
            >
              <Play size={14} fill="currentColor" />
              Try the simulator

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/research"
              className="flex items-center justify-center gap-3 border border-white/25 px-6 py-4 text-sm font-semibold text-white transition hover:border-white/60"
            >
              Read the research
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
}