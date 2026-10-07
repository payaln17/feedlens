"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  CircleAlert,
  Eye,
  X,
} from "lucide-react";

const insights = [
  {
    icon: Brain,
    tag: "AWARENESS",
    number: "71%",
    title: "Students know algorithms exist.",
    summary:
      "Most respondents reported awareness that social media platforms use algorithms.",
    detail:
      "This suggests that algorithmic recommendations are not completely invisible to students. However, awareness of algorithms does not necessarily mean users understand how individual interactions can influence what they see next.",
    points: [
      "Users may know that recommendations are personalised.",
      "Awareness does not always mean understanding.",
      "The feedback loop can still remain difficult to notice.",
    ],
  },

  {
    icon: CircleAlert,
    tag: "MISINFORMATION",
    number: "86%",
    title: "Misinformation is part of the experience.",
    summary:
      "A large majority of respondents reported encountering misinformation.",
    detail:
      "The result highlights why content recommendation deserves attention beyond entertainment. When content is repeatedly surfaced, users may encounter information that requires additional verification.",
    points: [
      "Recommendation does not automatically mean credibility.",
      "Repeated exposure can increase visibility.",
      "Users still need to evaluate information critically.",
    ],
  },

  {
    icon: Eye,
    tag: "USAGE",
    number: "43%",
    title: "Recommendations may encourage more usage.",
    summary:
      "Some respondents reported that algorithmic recommendations increase their social media usage.",
    detail:
      "A personalised feed is designed to remain relevant to the user. When content continuously matches a user's interests, it can make the platform easier and more engaging to continue using.",
    points: [
      "Relevant content can reduce friction.",
      "Continuous recommendations keep the feed active.",
      "Longer engagement can create additional behavioural signals.",
    ],
  },
];

export default function InsightDeepDive() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, []);

  return (
    <>
      <section className="bg-[#FFFDF9] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F1D2C]">
              Beyond the numbers
            </p>

            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.7fr]">
              <h2 className="font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl">
                What do these
                <br />
                <span className="text-[#8F1D2C]">
                  numbers actually mean?
                </span>
              </h2>

              <p className="max-w-md text-sm leading-7 text-[#78716C] lg:ml-auto">
                Numbers give us a snapshot. Interpretation helps us understand
                the behaviour behind them.
              </p>
            </div>
          </motion.div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {insights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.tag}
                  type="button"
                  onClick={() => setSelected(item)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -7 }}
                  className="group border border-[#E3D6C8] bg-[#F7F1E8] p-7 text-left transition-shadow hover:shadow-[0_20px_50px_rgba(41,37,36,0.08)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8C8B8] bg-[#FFFDF9] text-[#8F1D2C] transition group-hover:bg-[#8F1D2C] group-hover:text-white">
                      <Icon size={17} />
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-[#A67C62] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>

                  <p className="mt-12 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A67C62]">
                    {item.tag}
                  </p>

                  <p className="mt-2 font-[var(--font-laila)] text-4xl text-[#8F1D2C]">
                    {item.number}
                  </p>

                  <h3 className="mt-3 font-[var(--font-laila)] text-2xl text-[#292524]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#78716C]">
                    {item.summary}
                  </p>

                  <div className="mt-7 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F1D2C]">
                    Read more →
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#292524]/70 px-4 py-6 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) {
                setSelected(null);
              }
            }}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.97,
              }}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-[#FFFDF9] shadow-2xl"
            >
              <div className="relative bg-[#641824] px-7 py-9 text-white sm:px-10">
                <button
                  onClick={() => setSelected(null)}
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-[#641824]"
                >
                  <X size={16} />
                </button>

                <p className="text-[9px] uppercase tracking-[0.25em] text-white/50">
                  {selected.tag}
                </p>

                <p className="mt-3 font-[var(--font-laila)] text-5xl">
                  {selected.number}
                </p>

                <h2 className="mt-2 max-w-xl font-[var(--font-laila)] text-3xl">
                  {selected.title}
                </h2>
              </div>

              <div className="px-7 py-8 sm:px-10">
                <p className="text-sm leading-7 text-[#57514D]">
                  {selected.detail}
                </p>

                <div className="mt-8 border-t border-[#E3D6C8] pt-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F1D2C]">
                    What we can take from this
                  </p>

                  <div className="mt-5 space-y-3">
                    {selected.points.map((point, index) => (
                      <motion.div
                        key={point}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex gap-4 border-b border-[#EEE7DF] pb-3"
                      >
                        <span className="font-[var(--font-laila)] text-[#8F1D2C]">
                          0{index + 1}
                        </span>

                        <p className="text-sm leading-6 text-[#57514D]">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}