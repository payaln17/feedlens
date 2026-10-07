import { ArrowRight, Database, FileText, BarChart3, Lightbulb } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Collect",
    text: "Structured questionnaire",
  },
  {
    number: "02",
    icon: Database,
    title: "Organise",
    text: "Student responses",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Analyse",
    text: "Patterns & frequencies",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Interpret",
    text: "Research insights",
  },
];

export default function Methodology() {
  return (
    <section className="overflow-hidden bg-[#F7F1E8]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">

        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
              Research / 03
            </p>

            <h2 className="mt-4 max-w-2xl font-[var(--font-laila)] text-4xl font-semibold leading-tight text-[#292524] sm:text-5xl">
              From responses
              <span className="text-[#8F1D2C]"> to insight.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#78716C]">
            A primary survey was used to understand student experiences with
            algorithm-driven content consumption.
          </p>

        </div>

        {/* Process */}
        <div className="mt-16 grid border-y border-[#D8C8B8] md:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className={`group relative px-5 py-8 ${
                  index !== 0 ? "border-t border-[#D8C8B8] md:border-l md:border-t-0" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-[#A67C62]">
                    {step.number}
                  </span>

                  <Icon
                    size={19}
                    strokeWidth={1.5}
                    className="text-[#8F1D2C] transition-transform group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-10 font-[var(--font-laila)] text-2xl font-semibold text-[#292524]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-[#78716C]">
                  {step.text}
                </p>

                {index !== steps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 bg-[#F7F1E8] text-[#A67C62] md:block"
                  />
                )}
              </div>
            );
          })}

        </div>

        {/* Bottom research details */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          <div className="relative overflow-hidden bg-[#641824] p-8 text-[#FFFDF9]">
            <span className="absolute -right-5 -top-12 font-[var(--font-laila)] text-[150px] leading-none text-[#8F1D2C]">
              14
            </span>

            <p className="relative text-xs font-semibold uppercase tracking-[0.2em] text-[#D8C8B8]">
              Primary sample
            </p>

            <h3 className="relative mt-4 max-w-md font-[var(--font-laila)] text-3xl font-semibold">
              Student voices form the foundation of FeedLens.
            </h3>

            <p className="relative mt-4 max-w-lg text-sm leading-7 text-[#E7DED3]">
              The collected questionnaire contains 14 student responses and
              covers 21 survey questions.
            </p>
          </div>

          <div className="border border-[#D8C8B8] bg-[#FFFDF9] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A67C62]">
              Data approach
            </p>

            <h3 className="mt-4 font-[var(--font-laila)] text-3xl font-semibold text-[#292524]">
              Descriptive analysis
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#78716C]">
              Responses are summarized using counts, percentages and visual
              comparisons. The dashboard presents aggregated findings rather
              than individual respondent information.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Frequency", "Percentage", "Comparison", "Interpretation"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="border border-[#D8C8B8] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#57534E]"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}