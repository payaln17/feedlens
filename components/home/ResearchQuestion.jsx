"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ResearchQuestion() {
  return (
    <section className="border-t border-[#E3D6C8] bg-[#FFFDF9] px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 lg:grid-cols-[1fr_auto_0.65fr] lg:items-end">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#8F1D2C]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A67C62]">
                The question
              </p>
            </div>

            <h2 className="mt-4 max-w-3xl font-[var(--font-laila)] text-4xl font-semibold leading-[1.08] text-[#292524] sm:text-5xl lg:text-6xl">
              How much of what students consume
              <span className="text-[#8F1D2C]">
                {" "}
                is actually their choice?
              </span>
            </h2>
          </motion.div>

          {/* CENTER DETAIL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.15,
            }}
            className="hidden h-14 w-14 items-center justify-center rounded-full border border-[#D8C8B8] lg:flex"
          >
            <motion.span
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-[#8F1D2C]"
            />
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="border-l border-[#E3D6C8] pl-6 lg:pb-1"
          >
            <p className="max-w-sm text-sm leading-7 text-[#78716C]">
              A data-driven exploration of recommendation systems, student
              behaviour and the content people encounter online.
            </p>

            <div className="mt-5 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F1D2C]">
              Explore the research

              <ArrowUpRight size={13} />
            </div>
          </motion.div>
        </div>

        {/* BOTTOM LINE */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          style={{ transformOrigin: "left" }}
          className="mt-14 h-px bg-[#E3D6C8]"
        />

      </div>
    </section>
  );
}