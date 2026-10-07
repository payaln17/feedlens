import { ArrowDownRight, BarChart3 } from "lucide-react";

const InsightsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#F1F1EF]">
      {/* Decorative background lines */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[35%] border-l border-[#D8C8B8]/60" />

      <div className="pointer-events-none absolute right-16 top-20 h-40 w-40 rounded-full border border-[#8F1D2C]/15" />

      <div className="pointer-events-none absolute bottom-[-100px] right-[-80px] h-64 w-64 rounded-full bg-[#A67C62]/10" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 lg:px-10 lg:pb-24 lg:pt-24">

        {/* Top label */}
        <div className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#8F1D2C]" />

            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8F1D2C]">
              Survey Insights
            </span>
          </div>

          <span className="hidden text-xs tracking-widest text-[#78716C] sm:block">
            01 / 04
          </span>
        </div>

        <div className="grid items-end gap-14 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Main heading */}
          <div>
            <h1 className="max-w-4xl font-[var(--font-laila)] text-5xl leading-[0.98] tracking-[-0.03em] text-[#292524] sm:text-6xl lg:text-7xl xl:text-[86px]">
              What does the
              <br />
              <span className="text-[#8F1D2C]">data reveal</span>
              <br />
              about our feeds?
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-[#78716C] sm:text-lg">
              We asked students about their social media habits, the content
              they encounter, and how much influence they believe algorithms
              have on what they consume.
            </p>
          </div>

          {/* Research note */}
          <div className="relative lg:pb-2">

            <div className="rotate-[-2deg] border border-[#D8C8B8] bg-[#FFFDF9] p-6 shadow-[8px_10px_0px_rgba(100,24,36,0.06)] sm:p-7">

              <div className="flex items-center justify-between border-b border-[#E7DED3] pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-[#8F1D2C] text-white">
                    <BarChart3 size={19} strokeWidth={1.5} />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#78716C]">
                      Research sample
                    </p>

                    <p className="font-[var(--font-laila)] text-xl">
                      Student responses
                    </p>
                  </div>
                </div>

                <span className="font-[var(--font-laila)] text-3xl text-[#8F1D2C]">
                  14
                </span>
              </div>

              <div className="py-6">

                <div className="flex items-end justify-between gap-2">
                  {[35, 52, 43, 68, 58, 82, 72, 91].map((height, index) => (
                    <div
                      key={index}
                      className="flex-1 bg-[#8F1D2C]/15"
                      style={{ height: `${height}px` }}
                    >
                      <div
                        className="h-full w-full bg-[#8F1D2C]"
                        style={{
                          transform: `scaleY(${0.35 + index * 0.06})`,
                          transformOrigin: "bottom",
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-3 flex justify-between text-[9px] uppercase tracking-widest text-[#A67C62]">
                  <span>Responses</span>
                  <span>Observed patterns</span>
                </div>
              </div>

              <div className="border-t border-[#E7DED3] pt-5">
                <p className="text-sm leading-6 text-[#78716C]">
                  The numbers don't tell the whole story. The patterns
                  behind them do.
                </p>
              </div>
            </div>

            {/* Floating annotation */}
            <div className="absolute -bottom-9 -left-5 flex items-center gap-3 bg-[#641824] px-5 py-4 text-white shadow-lg sm:-left-8">
              <ArrowDownRight size={18} />

              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/55">
                  Look closer
                </p>

                <p className="mt-1 font-[var(--font-laila)] text-sm">
                  Numbers → patterns
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsHero;