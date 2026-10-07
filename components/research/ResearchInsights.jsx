"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  Brain,
  Users,
  BarChart3,
  Smartphone,
} from "lucide-react";

const insights = [
  {
    id: 1,
    number: "01",
    icon: Brain,
    category: "ALGORITHM",
    title: "How recommendations learn",
    short:
      "Your interactions can become signals that influence future recommendations.",
    description:
      "Recommendation systems can use different behavioural signals to estimate what content may be relevant to a user. Actions such as watching, liking, searching, saving or repeatedly interacting with similar content can contribute to these signals.",
    points: [
      "Watch time can indicate interest",
      "Likes and saves provide explicit signals",
      "Searches reveal intentional interests",
      "Repeated interactions can strengthen a pattern",
    ],
  },

  {
    id: 2,
    number: "02",
    icon: Users,
    category: "STUDENT BEHAVIOUR",
    title: "Why student behaviour matters",
    short:
      "Students interact with social media every day, creating continuous behavioural signals.",
    description:
      "Students are exposed to large amounts of personalised content. Understanding how they discover, consume and respond to that content can help us explore the relationship between user behaviour and recommendation systems.",
    points: [
      "Students frequently discover new content through feeds",
      "Personalised recommendations can influence discovery",
      "Repeated exposure may shape content preferences",
      "Awareness can change how users interpret their feeds",
    ],
  },

  {
    id: 3,
    number: "03",
    icon: BarChart3,
    category: "RESEARCH",
    title: "From responses to patterns",
    short:
      "Survey responses can reveal trends in how students experience personalised feeds.",
    description:
      "FeedLens uses structured responses to identify patterns in student behaviour. The goal is not to reproduce a platform's proprietary algorithm, but to understand user perceptions and experiences through research data.",
    points: [
      "Collect structured responses",
      "Group similar behavioural patterns",
      "Compare responses across questions",
      "Visualise meaningful trends",
    ],
  },

  {
    id: 4,
    number: "04",
    icon: Smartphone,
    category: "DIGITAL EXPERIENCE",
    title: "Your feed changes with you",
    short:
      "The content you interact with can influence the digital environment you experience.",
    description:
      "Personalised feeds are dynamic. As interests and behaviours change, recommendation systems can adapt the content shown to users. This creates a feedback loop between user behaviour and future recommendations.",
    points: [
      "You interact with content",
      "Your behaviour creates signals",
      "Recommendations respond to signals",
      "The new feed creates new interactions",
    ],
  },
];

export default function ResearchInsights() {
  const [selected, setSelected] = useState(null);

  // ESC key support
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelected(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <section className="bg-[#F7F1E8] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">

          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8F1D2C]">
              Explore the research
            </p>

            <h2 className="mt-4 font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl lg:text-6xl">
              Click deeper.
              <br />
              <span className="text-[#8F1D2C]">
                Understand your feed.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#78716C]">
              Explore the ideas behind FeedLens. Select any topic to learn
              more about algorithms, student behaviour and personalised feeds.
            </p>
          </motion.div>

          {/* CARDS */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {insights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => setSelected(item)}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group relative overflow-hidden border border-[#E3D6C8] bg-[#FFFDF9] p-7 text-left transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(41,37,36,0.09)] sm:p-8"
                >
                  {/* Background number */}
                  <span className="pointer-events-none absolute -right-3 -top-8 font-[var(--font-laila)] text-[130px] leading-none text-[#F3E6DB] transition-colors duration-500 group-hover:text-[#EBD8CC]">
                    {item.number}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D8C8B8] bg-[#FFFDF9] text-[#8F1D2C] transition-all duration-300 group-hover:bg-[#8F1D2C] group-hover:text-white">
                        <Icon size={17} strokeWidth={1.7} />
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="text-[#A67C62] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8F1D2C]"
                      />
                    </div>

                    <p className="mt-10 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#A67C62]">
                      {item.category}
                    </p>

                    <h3 className="mt-2 font-[var(--font-laila)] text-2xl text-[#292524] sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-[#78716C]">
                      {item.short}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F1D2C]">
                      Read more
                      <span className="h-px w-7 bg-[#8F1D2C] transition-all duration-300 group-hover:w-12" />
                    </div>
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#292524]/70 px-4 py-6 backdrop-blur-md sm:px-6"
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
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-[#FFFDF9] shadow-2xl"
            >
              {/* TOP */}
              <div className="relative overflow-hidden bg-[#641824] px-6 py-8 text-white sm:px-10 sm:py-10">
                <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full border border-white/10" />

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:bg-white hover:text-[#641824]"
                >
                  <X size={16} />
                </button>

                <div className="relative">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50">
                    {selected.category}
                  </p>

                  <h2 className="mt-3 max-w-xl font-[var(--font-laila)] text-3xl leading-tight sm:text-4xl">
                    {selected.title}
                  </h2>
                </div>
              </div>

              {/* CONTENT */}
              <div className="px-6 py-8 sm:px-10 sm:py-10">
                <p className="text-sm leading-7 text-[#57514D]">
                  {selected.description}
                </p>

                <div className="mt-8 border-t border-[#E3D6C8] pt-7">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F1D2C]">
                    Key points
                  </p>

                  <div className="mt-5 space-y-3">
                    {selected.points.map((point, index) => (
                      <motion.div
                        key={point}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.15 + index * 0.08,
                        }}
                        className="flex gap-4 border-b border-[#EEE7DF] pb-3 last:border-0"
                      >
                        <span className="font-[var(--font-laila)] text-sm text-[#8F1D2C]">
                          0{index + 1}
                        </span>

                        <p className="text-sm leading-6 text-[#57514D]">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-l-2 border-[#8F1D2C] bg-[#F7F1E8] px-5 py-4">
                  <p className="text-xs leading-5 text-[#78716C]">
                    <span className="font-semibold text-[#292524]">
                      FeedLens note:
                    </span>{" "}
                    This information is an educational simplification intended
                    to help users understand recommendation systems.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}