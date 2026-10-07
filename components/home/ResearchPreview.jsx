"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Users, FileText } from "lucide-react";
import Link from "next/link";

const research = [
  {
    icon: Users,
    value: "Students",
    title: "Participant voices",
    text: "Understanding how students perceive recommendations and personalised feeds.",
  },
  {
    icon: FileText,
    value: "Survey",
    title: "Structured questions",
    text: "Responses designed to explore habits, awareness and content discovery.",
  },
  {
    icon: BarChart3,
    value: "Patterns",
    title: "Visual analysis",
    text: "Turning collected responses into readable patterns and research insights.",
  },
];

export default function ResearchPreview() {
  return (
    <section className="bg-[#FFFDF9] px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A67C62]">
                Behind FeedLens
              </p>

              <h2 className="mt-4 font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl">
                From student
                <br />
                responses to
                <br />
                <span className="text-[#8F1D2C]">real patterns.</span>
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-[#78716C]">
                FeedLens combines research, visual storytelling and an
                interactive simulator to make algorithmic influence easier to
                understand.
              </p>

              <Link
                href="/insights"
                className="group mt-8 inline-flex items-center gap-3 border-b border-[#8F1D2C] pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#8F1D2C]"
              >
                View research insights

                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </motion.div>
          </div>

          <div className="border-t border-[#E3D6C8]">
            {research.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid gap-5 border-b border-[#E3D6C8] py-8 sm:grid-cols-[60px_120px_1fr] sm:items-center"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8C8B8] text-[#8F1D2C]">
                    <Icon size={16} />
                  </div>

                  <p className="font-[var(--font-laila)] text-xl text-[#8F1D2C]">
                    {item.value}
                  </p>

                  <div>
                    <h3 className="font-[var(--font-laila)] text-xl text-[#292524]">
                      {item.title}
                    </h3>

                    <p className="mt-1 max-w-md text-xs leading-5 text-[#78716C]">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}