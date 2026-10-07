"use client";

import { useMemo, useState, useEffect } from "react";

import {
  ArrowDown,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Activity,
  Heart,
  Eye,
  TrendingUp,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

import SimulatorHero from "@/components/simulator/SimulatorHero";
import Feed from "@/components/simulator/Feed";
import InterestMeter from "@/components/simulator/InterestMeter";
import AlgorithmPanel from "@/components/simulator/AlgorithmPanel";

import { feedPosts, initialInterests } from "@/data/simulatorData";

export default function SimulatorPage() {
  const [interests, setInterests] = useState({
    ...initialInterests,
  });

  const [interactionCounts, setInteractionCounts] = useState({
    Entertainment: 0,
    Education: 0,
    News: 0,
    Gaming: 0,
    Creators: 0,
  });

  const [lastSignal, setLastSignal] = useState(null);

  const [history, setHistory] = useState([]);

  const [explainingPost, setExplainingPost] = useState(null);

  // --------------------------------
  // INTERACTION HANDLER
  // --------------------------------

  const handleInteraction = (category, type) => {
    const boost = type === "like" ? 12 : 6;

    const signalId = Date.now();

    setInterests((current) => {
      const updated = { ...current };

      Object.keys(updated).forEach((key) => {
        if (key === category) {
          updated[key] = Math.min(updated[key] + boost, 100);
        } else {
          updated[key] = Math.max(updated[key] - 1, 1);
        }
      });

      return updated;
    });

    setInteractionCounts((current) => ({
      ...current,
      [category]: (current[category] || 0) + 1,
    }));

    setLastSignal({
      category,
      type,
      id: signalId,
    });

    setHistory((current) => [
      ...current,
      {
        category,
        type,
        id: signalId,
      },
    ]);
  };

  // --------------------------------
  // RESET
  // --------------------------------

  const resetSimulator = () => {
    setInterests({
      ...initialInterests,
    });

    setInteractionCounts({
      Entertainment: 0,
      Education: 0,
      News: 0,
      Gaming: 0,
      Creators: 0,
    });

    setLastSignal(null);
    setHistory([]);
    setExplainingPost(null);
  };

  // --------------------------------
  // RECOMMENDATION ENGINE
  // --------------------------------

  const recommendedPosts = useMemo(() => {
    const rankedCategories = Object.entries(interests)
      .sort((a, b) => b[1] - a[1])
      .map(([category]) => category);

    const result = [];

    rankedCategories.forEach((category, categoryIndex) => {
      const categoryPosts = feedPosts.filter(
        (post) => post.category === category
      );

      let amount = 2;

      if (categoryIndex === 0) amount = 5;
      if (categoryIndex === 1) amount = 3;

      categoryPosts.slice(0, amount).forEach((post) => {
        result.push({
          ...post,
          recommendationScore: interests[category],
        });
      });
    });

    return result.sort((a, b) => {
      if (b.recommendationScore !== a.recommendationScore) {
        return b.recommendationScore - a.recommendationScore;
      }

      return a.id - b.id;
    });
  }, [interests]);

  // --------------------------------
  // TOP CATEGORY
  // --------------------------------

  const topCategory = Object.entries(interests).sort(
    (a, b) => b[1] - a[1]
  )[0];

  // --------------------------------
  // EXPERIMENT STATS
  // --------------------------------

  const totalInteractions = Object.values(interactionCounts).reduce(
    (sum, value) => sum + value,
    0
  );

  const activeCategories = Object.values(interactionCounts).filter(
    (value) => value > 0
  ).length;

  const averageInterest =
    Object.values(interests).reduce(
      (sum, value) => sum + value,
      0
    ) / Object.values(interests).length;

  // --------------------------------
  // ESC CLOSE MODAL
  // --------------------------------

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setExplainingPost(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // --------------------------------
  // BODY SCROLL LOCK
  // --------------------------------

  useEffect(() => {
    if (explainingPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [explainingPost]);

  return (
    <main className="overflow-hidden bg-[#FFFDF9]">

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <SimulatorHero />

      {/* ========================================================= */}
      {/* LIVE EXPERIMENT STATUS */}
      {/* ========================================================= */}

      <section className="border-b border-[#E3D6C8] bg-[#FFFDF9] px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
                Experiment status
              </p>

              <h2 className="mt-2 font-[var(--font-laila)] text-2xl text-[#292524] sm:text-3xl">
                Your activity, live.
              </h2>
            </div>

            <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8F1D2C]">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#8F1D2C]" />
              Simulation active
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                label: "Interactions",
                value: totalInteractions,
                text: "signals created",
                icon: Activity,
              },
              {
                label: "Strongest signal",
                value: topCategory?.[0] || "—",
                text: `${topCategory?.[1] || 0}% interest`,
                icon: TrendingUp,
              },
              {
                label: "Average interest",
                value: `${Math.round(averageInterest)}%`,
                text: "across categories",
                icon: Eye,
              },
              {
                label: "Active categories",
                value: activeCategories,
                text: "categories affected",
                icon: Heart,
              },
            ].map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="border border-[#E3D6C8] bg-[#F7F1E8] p-5"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={16}
                      strokeWidth={1.7}
                      className="text-[#8F1D2C]"
                    />

                    <span className="text-[9px] text-[#B7AAA0]">
                      0{index + 1}
                    </span>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={String(stat.value)}
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="mt-7 truncate font-[var(--font-laila)] text-2xl text-[#292524]"
                    >
                      {stat.value}
                    </motion.p>
                  </AnimatePresence>

                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#78716C]">
                    {stat.label}
                  </p>

                  <p className="mt-1 text-[10px] text-[#A67C62]">
                    {stat.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* INTRO */}
      {/* ========================================================= */}

      <section className="bg-[#FFFDF9] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
                Interactive experiment
              </p>

              <h2 className="font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl">
                Your behaviour
                <br />
                becomes a signal.
              </h2>
            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="max-w-2xl text-base leading-8 text-[#78716C]"
            >
              Watch, like and explore the simulated feed. Each interaction
              changes your interest scores, and the recommendation system
              responds by showing more content from the categories it believes
              you prefer.
            </motion.p>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* ALGORITHM LAB */}
      {/* ========================================================= */}

      <section className="bg-[#F1F1EF] px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#A67C62]">
                Algorithm lab
              </p>

              <h2 className="font-[var(--font-laila)] text-4xl text-[#292524] sm:text-5xl">
                Interact with the feed.
              </h2>
            </motion.div>

            <motion.button
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={resetSimulator}
              className="flex w-fit items-center gap-2 border border-[#D8C8B8] bg-[#FFFDF9] px-4 py-2.5 text-xs font-medium text-[#292524] transition hover:border-[#8F1D2C] hover:text-[#8F1D2C]"
            >
              <RotateCcw size={14} />
              Reset experiment
            </motion.button>

          </div>

          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_320px]">

            {/* FEED */}

            <div>

              <div className="mb-6 flex items-center justify-between border-b border-[#D8C8B8] pb-4">

                <div>
                  <p className="font-[var(--font-laila)] text-2xl text-[#292524]">
                    Your simulated feed
                  </p>

                  <p className="mt-1 text-xs text-[#78716C]">
                    Higher-interest categories receive more recommendations.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#8F1D2C]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#8F1D2C]" />
                  Live
                </div>

              </div>

              {/* ONLY FEED SCROLLS */}

              <div className="h-[620px] overflow-y-auto overscroll-contain pr-3 [scrollbar-color:#CDB9A7_transparent]">

                <Feed
                  posts={recommendedPosts}
                  onInteract={handleInteraction}
                  onExplain={(post) => setExplainingPost(post)}
                />

              </div>

            </div>

            {/* SIDE PANEL */}

            <aside className="lg:sticky lg:top-24 lg:h-fit">

              <div className="mb-8">

                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A67C62]">
                  Your signals
                </p>

                <h3 className="font-[var(--font-laila)] text-3xl leading-tight text-[#292524]">
                  What is the feed learning?
                </h3>

              </div>

              <InterestMeter interests={interests} />

              <div className="mt-8">

                <AlgorithmPanel
                  interests={interests}
                  onReset={resetSimulator}
                />

              </div>

            </aside>

          </div>

          {/* LEARNING FEEDBACK */}

          <AnimatePresence mode="wait">
            {lastSignal && (
              <motion.div
                key={lastSignal.id}
                initial={{
                  opacity: 0,
                  y: 15,
                  scale: 0.98,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                className="mt-12 border-l-4 border-[#8F1D2C] bg-[#FFFDF9] px-6 py-5"
              >

                <div className="flex gap-4">

                  <motion.div
                    initial={{
                      scale: 0.7,
                    }}
                    animate={{
                      scale: 1,
                    }}
                    className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#F7F1E8] text-[#8F1D2C]"
                  >
                    <Sparkles size={17} />
                  </motion.div>

                  <div>

                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#8F1D2C]">
                      New signal recorded
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[#292524]">
                      You{" "}
                      <strong>
                        {lastSignal.type === "like"
                          ? "liked"
                          : "watched"}
                      </strong>{" "}
                      {lastSignal.category} content.
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#78716C]">
                      The simulated system now gives this category a stronger
                      recommendation signal.
                    </p>

                  </div>

                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SIGNAL HISTORY */}
      {/* ========================================================= */}

      <section className="bg-[#F7F1E8] px-6 py-20 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
                Behaviour timeline
              </p>

              <h2 className="mt-4 font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl">
                See your signals
                <br />
                <span className="text-[#8F1D2C]">
                  accumulate.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-[#78716C]">
                Every interaction in this experiment becomes part of your
                simulated behavioural profile.
              </p>
            </motion.div>

            <div className="min-h-[260px] border border-[#D8C8B8] bg-[#FFFDF9] p-6 sm:p-8">

              {history.length === 0 ? (

                <div className="flex min-h-[210px] flex-col items-center justify-center text-center">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D8C8B8] text-[#8F1D2C]">
                    <Activity size={18} />
                  </div>

                  <p className="mt-5 font-[var(--font-laila)] text-xl text-[#292524]">
                    No signals yet
                  </p>

                  <p className="mt-2 max-w-xs text-xs leading-5 text-[#78716C]">
                    Interact with the feed above to start building your
                    behavioural timeline.
                  </p>

                </div>

              ) : (

                <div className="relative">

                  <div className="absolute bottom-3 left-[15px] top-3 w-px bg-[#E3D6C8]" />

                  <AnimatePresence initial={false}>

                    {history
                      .slice()
                      .reverse()
                      .slice(0, 8)
                      .map((item) => {

                        const isLike = item.type === "like";

                        return (
                          <motion.div
                            key={item.id}
                            initial={{
                              opacity: 0,
                              x: 20,
                            }}
                            animate={{
                              opacity: 1,
                              x: 0,
                            }}
                            exit={{
                              opacity: 0,
                              x: -15,
                            }}
                            className="relative flex gap-5 pb-6 last:pb-0"
                          >

                            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D8C8B8] bg-[#FFFDF9] text-[#8F1D2C]">
                              {isLike ? (
                                <Heart size={12} />
                              ) : (
                                <Eye size={12} />
                              )}
                            </div>

                            <div className="pt-1">

                              <p className="text-xs text-[#292524]">
                                You{" "}
                                <strong>
                                  {isLike ? "liked" : "watched"}
                                </strong>{" "}
                                <span className="text-[#8F1D2C]">
                                  {item.category}
                                </span>{" "}
                                content.
                              </p>

                              <p className="mt-1 text-[10px] text-[#A67C62]">
                                +{isLike ? 12 : 6} interest signal
                              </p>

                            </div>

                          </motion.div>
                        );
                      })}

                  </AnimatePresence>

                </div>
              )}

            </div>

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* FEEDBACK LOOP */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden bg-[#292524] px-6 py-24 text-white sm:px-10 lg:px-16">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full border border-white/10"
        />

        <div className="relative mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D8A58B]">
              The feedback loop
            </p>

            <h2 className="font-[var(--font-laila)] text-4xl leading-tight sm:text-6xl">
              One interaction can influence what comes next.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/50">
              This experiment simplifies a recommendation system for learning
              purposes. Real platforms use much more complex signals and
              models. The point here is to make the feedback loop visible.
            </p>

          </div>

          <div className="mt-16 grid overflow-hidden border border-white/10 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Behaviour",
                text: "You watch or like something.",
              },
              {
                number: "02",
                title: "Signal",
                text: "The system interprets that action as a preference.",
              },
              {
                number: "03",
                title: "Recommendation",
                text: "More related content becomes likely to appear.",
              },
            ].map((step, index) => (

              <motion.div
                key={step.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -5,
                }}
                className="relative border-b border-white/10 bg-[#332F2D] p-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >

                <span className="font-[var(--font-laila)] text-4xl text-[#D8A58B]">
                  {step.number}
                </span>

                <h3 className="mt-8 font-[var(--font-laila)] text-2xl">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  {step.text}
                </p>

                {index < 2 && (
                  <motion.div
                    animate={{
                      x: [0, 7, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-[#292524] text-[#D8A58B] md:flex"
                  >
                    <ArrowRight size={12} />
                  </motion.div>
                )}

              </motion.div>

            ))}

          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

            <div>

              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Current strongest signal
              </p>

              <AnimatePresence mode="wait">

                <motion.p
                  key={topCategory?.[0]}
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  className="mt-1 font-[var(--font-laila)] text-2xl text-[#D8A58B]"
                >
                  {topCategory?.[0] || "No signal yet"}
                </motion.p>

              </AnimatePresence>

            </div>

            <div className="flex flex-wrap items-center gap-3 text-xs text-white/40">

              <span>Behaviour</span>

              <ArrowDown
                size={14}
                className="rotate-[-90deg]"
              />

              <span>Signal</span>

              <ArrowDown
                size={14}
                className="rotate-[-90deg]"
              />

              <span>Recommendation</span>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL SUMMARY */}
      {/* ========================================================= */}

      <section className="bg-[#FFFDF9] px-6 py-20 sm:px-10 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-5xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
            }}
            className="border border-[#E3D6C8] bg-[#F7F1E8] p-7 sm:p-10 lg:p-12"
          >

            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
              Your experiment
            </p>

            <h2 className="mt-4 font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl">
              Your feed learned to
              <br />
              <span className="text-[#8F1D2C]">
                pay attention to {topCategory?.[0] || "your interests"}.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-[#78716C]">
              {totalInteractions > 0
                ? `During this experiment, you created ${totalInteractions} interaction${
                    totalInteractions === 1 ? "" : "s"
                  }. The strongest simulated signal is ${
                    topCategory?.[0]
                  } at ${topCategory?.[1]}%.`
                : "Start interacting with the simulated feed to see how your behaviour changes the recommendation system."}
            </p>

            <div className="mt-8 flex flex-col gap-4 border-t border-[#D8C8B8] pt-7 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8F1D2C] text-white">
                  <Sparkles size={14} />
                </div>

                <p className="text-xs text-[#78716C]">
                  {totalInteractions > 0
                    ? "Your simulated recommendation profile has changed."
                    : "Your recommendation profile is waiting for signals."}
                </p>

              </div>

              <button
                onClick={resetSimulator}
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#8F1D2C] transition hover:gap-3"
              >
                <RotateCcw size={13} />
                Run again
              </button>

            </div>

          </motion.div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* WHY AM I SEEING THIS MODAL */}
      {/* ========================================================= */}

      <AnimatePresence>

        {explainingPost && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setExplainingPost(null);
              }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#292524]/70 px-4 py-6 backdrop-blur-md"
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
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto bg-[#FFFDF9] shadow-2xl"
            >

              {/* MODAL HEADER */}

              <div className="relative overflow-hidden bg-[#641824] px-6 py-8 text-white sm:px-8">

                <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full border border-white/10" />

                <button
                  type="button"
                  onClick={() => setExplainingPost(null)}
                  aria-label="Close explanation"
                  className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:bg-white hover:text-[#641824]"
                >
                  <X size={15} />
                </button>

                <div className="relative">

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20">
                    <Sparkles size={16} />
                  </div>

                  <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50">
                    Recommendation explanation
                  </p>

                  <h2 className="mt-2 font-[var(--font-laila)] text-3xl">
                    Why did this appear?
                  </h2>

                </div>

              </div>

              {/* MODAL CONTENT */}

              <div className="p-6 sm:p-8">

                <div className="border border-[#E3D6C8] bg-[#F7F1E8] p-5">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#A67C62]">
                    Content category
                  </p>

                  <p className="mt-2 font-[var(--font-laila)] text-2xl text-[#8F1D2C]">
                    {explainingPost.category}
                  </p>

                </div>

                <div className="mt-7">

                  <div className="flex items-end justify-between gap-4">

                    <div>
                      <p className="text-[9px] uppercase tracking-[0.2em] text-[#A67C62]">
                        Simulated interest
                      </p>

                      <p className="mt-1 font-[var(--font-laila)] text-3xl text-[#292524]">
                        {interests[explainingPost.category] || 0}%
                      </p>
                    </div>

                    <p className="text-right text-xs text-[#78716C]">
                      recommendation
                      <br />
                      signal
                    </p>

                  </div>

                  <div className="mt-4 h-2 overflow-hidden bg-[#E9E1D9]">

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      animate={{
                        width: `${interests[explainingPost.category] || 0}%`,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                      }}
                      className="h-full bg-[#8F1D2C]"
                    />

                  </div>

                </div>

                <div className="mt-7 flex items-start gap-4">

                  <ArrowRight
                    size={15}
                    className="mt-1 shrink-0 text-[#8F1D2C]"
                  />

                  <p className="text-sm leading-7 text-[#78716C]">
                    Your current interaction pattern has increased the
                    simulated interest in{" "}
                    <strong className="text-[#292524]">
                      {explainingPost.category}
                    </strong>
                    . The simplified recommendation system therefore gives
                    related content a higher chance of appearing in your feed.
                  </p>

                </div>

                <div className="mt-7 border-l-2 border-[#8F1D2C] bg-[#F7F1E8] px-5 py-4">

                  <p className="text-xs leading-5 text-[#78716C]">
                    <span className="font-semibold text-[#292524]">
                      FeedLens note:
                    </span>{" "}
                    This is an educational simulation. It does not reproduce
                    the proprietary recommendation systems of real platforms.
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}