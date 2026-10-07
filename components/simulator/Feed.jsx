"use client";

import { useState } from "react";
import {
  Eye,
  Heart,
  Play,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Feed = ({ posts, onInteract }) => {
  const [likedPosts, setLikedPosts] = useState([]);
  const [watchedPosts, setWatchedPosts] = useState([]);

  const handleWatch = (post) => {
    if (watchedPosts.includes(post.id)) return;

    setWatchedPosts((current) => [...current, post.id]);
    onInteract(post.category, "watch");
  };

  const handleLike = (post) => {
    if (likedPosts.includes(post.id)) return;

    setLikedPosts((current) => [...current, post.id]);
    onInteract(post.category, "like");
  };

  return (
    <div className="space-y-10">
      <AnimatePresence mode="popLayout">
        {posts.map((post, index) => {
          const isLiked = likedPosts.includes(post.id);
          const isWatched = watchedPosts.includes(post.id);

          const isTop = index === 0;

          return (
            <motion.article
              key={post.id}
              layout
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.4,
                delay: Math.min(index * 0.035, 0.25),
              }}
              className="group border-b border-[#E7DED3] pb-10 last:border-b-0"
            >
              {/* IMAGE / VIDEO PREVIEW */}
              <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden bg-[#E7DED3]">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                  whileHover={{
                    scale: 1.045,
                  }}
                  transition={{
                    duration: 0.55,
                  }}
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                {/* TOP LABELS */}
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <span className="bg-[#FFFDF9] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8F1D2C]">
                    {post.tag}
                  </span>

                  {isTop && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      className="flex items-center gap-1.5 bg-[#641824] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-white"
                    >
                      <TrendingUp size={11} />
                      Top recommendation
                    </motion.span>
                  )}
                </div>

                {/* RECOMMENDATION SCORE */}
                <div className="absolute bottom-4 right-4 bg-black/55 px-3 py-2 backdrop-blur-sm">
                  <p className="text-[8px] uppercase tracking-[0.15em] text-white/70">
                    Recommendation signal
                  </p>

                  <p className="mt-0.5 text-sm font-semibold text-white">
                    {Math.min(Math.round(post.recommendationScore), 100)}%
                  </p>
                </div>

                {/* PLAY BUTTON */}
                <motion.button
                  type="button"
                  onClick={() => handleWatch(post)}
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full shadow-xl transition ${
                    isWatched
                      ? "bg-[#8F1D2C] text-white"
                      : "bg-[#FFFDF9] text-[#8F1D2C] hover:bg-[#8F1D2C] hover:text-white"
                  }`}
                >
                  <Play
                    size={17}
                    fill="currentColor"
                  />
                </motion.button>

                {/* WATCHED LABEL */}
                <AnimatePresence>
                  {isWatched && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                      }}
                      className="absolute bottom-5 left-20 bg-[#641824] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-white"
                    >
                      Signal recorded
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CONTENT */}
              <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  {/* CATEGORY */}
                  <div className="mb-2 flex items-center gap-2">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#A67C62]">
                      {post.category}
                    </span>

                    {isWatched && (
                      <span className="text-[9px] text-[#78716C]">
                        • watched
                      </span>
                    )}

                    {isLiked && (
                      <span className="text-[9px] text-[#8F1D2C]">
                        • liked
                      </span>
                    )}
                  </div>

                  {/* TITLE */}
                  <h3 className="max-w-2xl font-[var(--font-laila)] text-2xl leading-tight text-[#292524] transition-colors duration-300 group-hover:text-[#8F1D2C] sm:text-3xl">
                    {post.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 max-w-xl text-sm leading-6 text-[#78716C]">
                    {post.description}
                  </p>
                </div>

                {/* ACTIONS */}
                <div className="flex shrink-0 items-center gap-2">
                  {/* WATCH */}
                  <motion.button
                    type="button"
                    onClick={() => handleWatch(post)}
                    whileTap={{
                      scale: 0.94,
                    }}
                    className={`flex items-center gap-2 border px-4 py-2.5 text-xs font-medium transition ${
                      isWatched
                        ? "border-[#8F1D2C] bg-[#8F1D2C] text-white"
                        : "border-[#D8C8B8] bg-[#FFFDF9] text-[#292524] hover:border-[#8F1D2C] hover:text-[#8F1D2C]"
                    }`}
                  >
                    <Eye size={14} />

                    {isWatched
                      ? "Watched"
                      : "Watch"}
                  </motion.button>

                  {/* LIKE */}
                  <motion.button
                    type="button"
                    onClick={() => handleLike(post)}
                    whileTap={{
                      scale: 0.82,
                    }}
                    className={`relative flex h-10 w-10 items-center justify-center border transition ${
                      isLiked
                        ? "border-[#8F1D2C] bg-[#8F1D2C] text-white"
                        : "border-[#D8C8B8] bg-[#FFFDF9] text-[#78716C] hover:border-[#8F1D2C] hover:text-[#8F1D2C]"
                    }`}
                  >
                    <Heart
                      size={16}
                      fill={
                        isLiked
                          ? "currentColor"
                          : "none"
                      }
                    />

                    <AnimatePresence>
                      {isLiked && (
                        <motion.span
                          initial={{
                            opacity: 0,
                            scale: 0.5,
                            y: 5,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                          }}
                          className="absolute -right-1 -top-2 flex items-center gap-0.5 text-[10px] font-bold text-[#8F1D2C]"
                        >
                          <Sparkles size={9} />
                          +1
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </div>

              {/* SIGNAL BAR */}
              <div className="mt-6 flex items-center gap-3">
                <div className="h-[2px] flex-1 overflow-hidden bg-[#E7DED3]">
                  <motion.div
                    initial={{
                      width: 0,
                    }}
                    animate={{
                      width: `${Math.min(
                        post.recommendationScore,
                        100
                      )}%`,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="h-full bg-[#8F1D2C]"
                  />
                </div>

                <span className="whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.15em] text-[#A67C62]">
                  predicted interest
                </span>
              </div>
            </motion.article>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default Feed;