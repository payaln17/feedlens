import InsightsHero from "@/components/insights/InsightsHero";
import StatCard from "@/components/insights/StatCard";
import PlatformChart from "@/components/insights/PlatformChart";
import UsageChart from "@/components/insights/UsageChart";
import Findings from "@/components/insights/Findings";
import InsightDeepDive from "@/components/insights/InsightDeepDive";
import ResearchQA from "@/components/insights/ResearchQA";
import FeedLoop from "@/components/insights/FeedLoop";
import Interpretation from "@/components/insights/Interpretation";
import InsightsCTA from "@/components/insights/InsightsCTA";

export default function InsightsPage() {
  return (
    <main className="overflow-hidden bg-[#FFFDF9]">

      <InsightsHero />

      {/* =========================================
          KEY NUMBERS
      ========================================= */}
      <section className="bg-[#FFFDF9] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#8F1D2C]">
                At a glance
              </p>

              <h2 className="font-[var(--font-laila)] text-4xl leading-tight text-[#292524] sm:text-5xl">
                Four numbers worth noticing.
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-6 text-[#78716C]">
              A snapshot of what students reported in the survey.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <StatCard
              number="14"
              label="Responses"
              description="Students participated in the survey."
              accent
            />

            <StatCard
              number="71%"
              label="Awareness"
              description="Students who said they are aware of social media algorithms."
            />

            <StatCard
              number="86%"
              label="Misinformation"
              description="Students who reported encountering misinformation."
            />

            <StatCard
              number="43%"
              label="Usage impact"
              description="Students who said algorithms increase their social media usage."
            />
          </div>
        </div>
      </section>

      {/* =========================================
          PLATFORM DATA
      ========================================= */}
      <section className="border-y border-[#E7DED3] bg-[#F1F1EF] px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#8F1D2C]">
                Where students are
              </p>

              <h2 className="font-[var(--font-laila)] text-4xl leading-[1.05] text-[#292524] sm:text-5xl">
                Instagram leads the
                <br />
                conversation.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#78716C]">
                Instagram appeared across every response, followed by
                YouTube. The platform mix gives us context for understanding
                where recommendation-driven consumption happens.
              </p>
            </div>

            <div className="border border-[#D8C8B8] bg-[#FFFDF9] p-5 sm:p-7">
              <PlatformChart />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          USAGE
      ========================================= */}
      <section className="bg-[#641824] px-6 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F1E8]/50">
                Time spent
              </p>

              <h2 className="max-w-xl font-[var(--font-laila)] text-4xl leading-[1.05] sm:text-5xl">
                How much of the day
                <br />
                belongs to the feed?
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-white/60">
                Daily usage varied across respondents. The distribution helps
                us understand how much space social media occupies in students'
                everyday routines.
              </p>
            </div>

            <div className="bg-[#FFFDF9] p-5 text-[#292524] sm:p-7">
              <UsageChart />
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          ORIGINAL FINDINGS
      ========================================= */}
      <Findings />

      {/* =========================================
          DEEP DIVE
      ========================================= */}
      <InsightDeepDive />

      {/* =========================================
          FEEDBACK LOOP
      ========================================= */}
      <FeedLoop />

      {/* =========================================
          RESEARCH Q&A
      ========================================= */}
      <ResearchQA />

      {/* =========================================
          INTERPRETATION
      ========================================= */}
      <Interpretation />

      {/* =========================================
          FINAL CTA
      ========================================= */}
      <InsightsCTA />

    </main>
  );
}