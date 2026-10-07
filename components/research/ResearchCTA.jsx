"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ResearchCTA() {
  return (
    <section className="relative overflow-hidden bg-[#8F1D2C] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/50">
              Continue exploring
            </p>

            <h2 className="mt-4 max-w-3xl font-[var(--font-laila)] text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              The research gives us
              <br />
              the question.
              <br />
              <span className="text-[#E2BFAE]">
                The data gives us the story.
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
          >
            <Link
              href="/insights"
              className="group flex items-center gap-4 border border-white/30 bg-white px-6 py-4 text-sm font-semibold text-[#8F1D2C] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF7F1]"
            >
              Explore the findings

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}