"use client";

import { motion } from "framer-motion";
import { Info } from "lucide-react";

export default function ResearchLimitations() {
  return (
    <section className="bg-[#F7F1E8] px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-[#D8C8B8] bg-[#FFFDF9] p-7 sm:p-10 lg:p-12"
        >
          <div className="flex flex-col gap-8 sm:flex-row">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#8F1D2C] text-white">
              <Info size={18} />
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
                Research note
              </p>

              <h2 className="mt-3 font-[var(--font-laila)] text-3xl text-[#292524] sm:text-4xl">
                Understanding the limits of the study.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#78716C]">
                FeedLens is an educational research project. The findings
                represent the responses and perceptions of the participants
                included in the study. They should not be interpreted as a
                direct measurement of the proprietary algorithms used by any
                specific social media platform.
              </p>

              <div className="mt-7 grid gap-4 border-t border-[#E3D6C8] pt-6 sm:grid-cols-3">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#A67C62]">
                    Scope
                  </p>
                  <p className="mt-1 text-xs text-[#292524]">
                    Student behaviour
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#A67C62]">
                    Evidence
                  </p>
                  <p className="mt-1 text-xs text-[#292524]">
                    Survey responses
                  </p>
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#A67C62]">
                    Purpose
                  </p>
                  <p className="mt-1 text-xs text-[#292524]">
                    Educational research
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}