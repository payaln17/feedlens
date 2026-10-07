"use client";

import { motion } from "framer-motion";
import { Lightbulb, ArrowRight } from "lucide-react";

export default function Interpretation() {
  return (
    <section className="bg-[#FFFDF9] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#8F1D2C] text-white">
              <Lightbulb size={18} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#8F1D2C]">
              What this suggests
            </p>

            <h2 className="mt-4 font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl">
              The interesting part
              <br />
              is the relationship
              <br />
              <span className="text-[#8F1D2C]">between the numbers.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="border-l-2 border-[#8F1D2C] pl-6">
              <p className="text-lg leading-8 text-[#57514D]">
                A majority of respondents reported being aware of algorithms,
                while a large proportion also reported encountering
                misinformation.
              </p>
            </div>

            <p className="text-sm leading-7 text-[#78716C]">
              Together, these findings raise an important question: knowing
              that recommendations exist does not necessarily mean that users
              understand how those recommendations shape their everyday
              content environment.
            </p>

            <div className="flex items-center gap-4 border-t border-[#E3D6C8] pt-6">
              <div className="h-px w-10 bg-[#8F1D2C]" />

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8F1D2C]">
                Awareness → Understanding → Critical consumption
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}