import { ArrowDownRight, ScanSearch } from "lucide-react";

export default function ResearchHero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F1E8]">
      {/* Decorative background */}
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full border border-[#D8C8B8]" />
      <div className="absolute right-10 top-36 h-40 w-40 rounded-full border border-[#D8C8B8]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT */}
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8F1D2C] text-xs font-bold text-white">
                01
              </span>

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#78716C]">
                Research / The Question
              </span>
            </div>

            <h1 className="max-w-3xl font-[var(--font-laila)] text-5xl font-semibold leading-[1.02] text-[#292524] sm:text-6xl lg:text-7xl">
              How much of
              <br />
              what you see
              <br />
              is actually
              <span className="text-[#8F1D2C]"> your choice?</span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#78716C] sm:text-base">
              FeedLens investigates how recommendation algorithms influence
              what students discover, watch, scroll through and eventually
              prefer on social media.
            </p>

            <div className="mt-9 flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-[#8F1D2C]">
              Explore the research
              <ArrowDownRight size={17} />
            </div>
          </div>

          {/* RIGHT — VISUAL */}
          <div className="relative mx-auto w-full max-w-md">

            {/* back paper */}
            <div className="absolute -right-3 -top-3 h-full w-full rotate-3 border border-[#D8C8B8] bg-[#FFFDF9]" />

            {/* main paper */}
            <div className="relative border border-[#D8C8B8] bg-[#FFFDF9] p-5 shadow-[12px_18px_0px_#E7DED3]">

              <div className="flex items-center justify-between border-b border-[#E7DED3] pb-4">
                <div className="flex items-center gap-2">
                  <ScanSearch size={16} className="text-[#8F1D2C]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#57534E]">
                    Feed analysis
                  </span>
                </div>

                <span className="text-[10px] text-[#A67C62]">
                  FIELD STUDY
                </span>
              </div>

              {/* fake feed */}
              <div className="space-y-4 py-5">

                <div className="border border-[#E7DED3] bg-[#F7F1E8] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-[#8F1D2C]">
                      RECOMMENDED
                    </span>
                    <span className="text-[10px] text-[#A67C62]">
                      92% match
                    </span>
                  </div>

                  <div className="mt-4 h-16 bg-[#D8C8B8]" />

                  <p className="mt-3 font-[var(--font-laila)] text-lg font-semibold text-[#292524]">
                    More of what you already watch.
                  </p>

                  <div className="mt-3 flex gap-2">
                    <span className="h-1.5 w-16 bg-[#8F1D2C]" />
                    <span className="h-1.5 w-8 bg-[#D8C8B8]" />
                    <span className="h-1.5 w-12 bg-[#D8C8B8]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-[#E7DED3] p-3">
                    <p className="text-[9px] uppercase tracking-wider text-[#78716C]">
                      Students
                    </p>
                    <p className="mt-1 font-[var(--font-laila)] text-2xl font-semibold text-[#292524]">
                      14
                    </p>
                  </div>

                  <div className="border border-[#E7DED3] p-3">
                    <p className="text-[9px] uppercase tracking-wider text-[#78716C]">
                      Questions
                    </p>
                    <p className="mt-1 font-[var(--font-laila)] text-2xl font-semibold text-[#292524]">
                      21
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-t border-[#E7DED3] pt-4 text-[10px] text-[#78716C]">
                Your activity → algorithm → recommendation → behaviour
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}