"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HeartOff,
  UserMinus,
  Search,
  Clock,
  ShieldCheck,
} from "lucide-react";

const controls = [
  {
    icon: HeartOff,
    title: "Change your interactions",
    text: "Be intentional about what you like, save and engage with.",
  },
  {
    icon: UserMinus,
    title: "Review who you follow",
    text: "Unfollow or mute accounts that no longer match your interests.",
  },
  {
    icon: Search,
    title: "Search intentionally",
    text: "Explore information outside the recommendations appearing automatically.",
  },
  {
    icon: Clock,
    title: "Create usage boundaries",
    text: "Use screen-time tools or intentional breaks to reduce passive scrolling.",
  },
  {
    icon: ShieldCheck,
    title: "Verify information",
    text: "Check important claims before accepting repeatedly recommended content.",
  },
];

export default function ControlPanel() {
  const [active, setActive] = useState(0);

  const ActiveIcon = controls[active].icon;

  return (
    <section className="bg-[#F1F1EF] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8F1D2C]">
              Take control
            </p>

            <h2 className="mt-4 font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl">
              You can't control
              <br />
              the whole algorithm.
              <br />
              <span className="text-[#8F1D2C]">
                But you can control your behaviour.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#78716C]">
              Select an action to see how it can help you become a more
              intentional user.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">

            <div className="space-y-2">
              {controls.map((item, index) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.title}
                    onClick={() => setActive(index)}
                    className={`flex w-full items-center gap-3 border p-4 text-left transition-all ${
                      active === index
                        ? "border-[#8F1D2C] bg-[#FFFDF9] text-[#8F1D2C]"
                        : "border-[#E3D6C8] bg-[#FFFDF9]/60 text-[#78716C] hover:bg-[#FFFDF9]"
                    }`}
                  >
                    <Icon size={16} />

                    <span className="text-xs font-medium">
                      {item.title}
                    </span>
                  </button>
                );
              })}
            </div>

            <motion.div
              key={active}
              initial={{
                opacity: 0,
                x: 15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{ duration: 0.35 }}
              className="flex min-h-[330px] flex-col justify-between bg-[#8F1D2C] p-7 text-white sm:p-9"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
                  <ActiveIcon size={19} />
                </div>

                <p className="mt-10 text-[9px] uppercase tracking-[0.25em] text-white/40">
                  Practical action
                </p>

                <h3 className="mt-2 font-[var(--font-laila)] text-3xl">
                  {controls[active].title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {controls[active].text}
                </p>
              </div>

              <div className="mt-8 border-t border-white/15 pt-5">
                <p className="text-[10px] leading-5 text-white/45">
                  Small intentional choices can make your digital experience
                  more conscious.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}