"use client";

import { useState } from "react";
import {
  Search,
  Shuffle,
  Clock3,
  CircleHelp,
  Eye,
  Plus,
  Minus,
} from "lucide-react";

const tips = [
  {
    number: "01",
    title: "Search intentionally",
    description:
      "Don't rely only on what appears in your feed. Search for topics, viewpoints and subjects you genuinely want to explore.",
    icon: Search,
  },
  {
    number: "02",
    title: "Break the pattern",
    description:
      "If your feed keeps repeating one type of content, deliberately explore something outside that pattern.",
    icon: Shuffle,
  },
  {
    number: "03",
    title: "Set a stopping point",
    description:
      "Endless feeds remove natural stopping points. Decide when you want to stop before opening the app.",
    icon: Clock3,
  },
  {
    number: "04",
    title: "Question what you see",
    description:
      "Repeated exposure can make information feel familiar. Familiar does not automatically mean accurate.",
    icon: CircleHelp,
  },
  {
    number: "05",
    title: "Notice your feed",
    description:
      "Occasionally look at your feed as an observer. What topics dominate? What perspectives rarely appear?",
    icon: Eye,
  },
];

export default function AwarenessTips() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#FFFDF9] px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          {/* INTRO */}
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
              Five small habits
            </p>

            <h2 className="font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl">
              Take back a little
              <br />
              <span className="text-[#8F1D2C]">
                control.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#78716C]">
              Awareness doesn't mean avoiding social media. It means becoming
              more intentional about how you interact with personalised feeds.
            </p>
          </div>

          {/* LIST */}
          <div className="border-t border-[#D8C8B8]">
            {tips.map((tip, index) => {
              const Icon = tip.icon;
              const isOpen = open === index;

              return (
                <div
                  key={tip.number}
                  className="border-b border-[#D8C8B8]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpen(isOpen ? -1 : index)
                    }
                    className="flex w-full items-center gap-5 py-7 text-left"
                  >
                    <span className="w-8 shrink-0 font-[var(--font-laila)] text-xl text-[#A67C62]">
                      {tip.number}
                    </span>

                    <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#D8C8B8] text-[#8F1D2C]">
                      <Icon size={16} />
                    </span>

                    <span className="flex-1 font-[var(--font-laila)] text-2xl text-[#292524]">
                      {tip.title}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F7F1E8] text-[#8F1D2C]">
                      {isOpen ? (
                        <Minus size={14} />
                      ) : (
                        <Plus size={14} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="grid grid-cols-[3rem_1fr] pb-7">
                      <div />

                      <p className="max-w-xl text-sm leading-7 text-[#78716C]">
                        {tip.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}