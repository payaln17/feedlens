"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";

export default function RecommendationExplanation({
  post,
  interests,
  onClose,
}) {
  if (!post) return null;

  const score = interests[post.category] || 0;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#292524]/70 px-4 backdrop-blur-md"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 15,
            scale: 0.97,
          }}
          transition={{
            duration: 0.3,
          }}
          className="relative w-full max-w-lg overflow-hidden bg-[#FFFDF9] shadow-2xl"
        >
          <div className="bg-[#641824] px-6 py-7 text-white sm:px-8">
            <button
              onClick={onClose}
              className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 transition hover:bg-white hover:text-[#641824]"
              aria-label="Close"
            >
              <X size={14} />
            </button>

            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
              <Sparkles size={16} />
            </div>

            <p className="mt-5 text-[9px] uppercase tracking-[0.25em] text-white/50">
              Recommendation explanation
            </p>

            <h2 className="mt-2 font-[var(--font-laila)] text-3xl">
              Why this appeared
            </h2>
          </div>

          <div className="p-6 sm:p-8">

            <div className="border border-[#E3D6C8] bg-[#F7F1E8] p-5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A67C62]">
                Content category
              </p>

              <p className="mt-2 font-[var(--font-laila)] text-2xl text-[#8F1D2C]">
                {post.category}
              </p>
            </div>

            <div className="mt-6">
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-[#A67C62]">
                    Simulated interest
                  </p>

                  <p className="mt-1 font-[var(--font-laila)] text-3xl text-[#292524]">
                    {score}%
                  </p>
                </div>

                <p className="text-xs text-[#78716C]">
                  recommendation signal
                </p>
              </div>

              <div className="mt-4 h-2 overflow-hidden bg-[#E9E1D9]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${score}%` }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="h-full bg-[#8F1D2C]"
                />
              </div>
            </div>

            <div className="mt-7 flex items-start gap-4">
              <div className="mt-1">
                <ArrowRight size={15} className="text-[#8F1D2C]" />
              </div>

              <p className="text-sm leading-7 text-[#78716C]">
                Your current interaction pattern has increased the simulated
                interest in{" "}
                <strong className="text-[#292524]">
                  {post.category}
                </strong>
                . The simplified recommendation system therefore gives related
                content a higher chance of appearing in your feed.
              </p>
            </div>

            <p className="mt-7 border-t border-[#E3D6C8] pt-5 text-[10px] leading-5 text-[#A67C62]">
              This is a simplified educational model and does not represent
              the actual proprietary recommendation systems of social media
              platforms.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}