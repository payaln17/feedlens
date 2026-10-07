import { ArrowUpRight } from "lucide-react";

const findings = [
  {
    number: "01",
    stat: "9 / 14",
    title: "Recommendations are hard to ignore.",
    description:
      "Most students reported interacting with recommended content at least sometimes. Recommendations are therefore not just background elements — they can become part of everyday content consumption.",
    align: "left",
  },
  {
    number: "02",
    stat: "12 / 14",
    title: "Similar content keeps appearing.",
    description:
      "A large majority of respondents noticed similar content appearing repeatedly in their feeds, suggesting that personalised recommendations can reinforce existing viewing patterns.",
    align: "right",
  },
  {
    number: "03",
    stat: "12 / 14",
    title: "Misinformation remains a concern.",
    description:
      "Most respondents said they had encountered misinformation either sometimes or frequently. This makes awareness and critical evaluation an important part of responsible content consumption.",
    align: "left",
  },
  {
    number: "04",
    stat: "9 / 14",
    title: "Algorithm awareness isn't complete.",
    description:
      "Although many students understand that algorithms influence their feeds, several respondents were uncertain. Knowing that personalisation exists does not necessarily mean understanding how it works.",
    align: "right",
  },
];

const Findings = () => {
  return (
    <section className="overflow-hidden bg-[#FFFDF9] px-6 py-20 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="grid gap-8 border-b border-[#D8C8B8] pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#8F1D2C]">
              What we found
            </p>

            <p className="font-[var(--font-laila)] text-6xl leading-none text-[#D8C8B8] sm:text-7xl">
              04
            </p>
          </div>

          <div>
            <h2 className="max-w-3xl font-[var(--font-laila)] text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              The interesting part
              <br />
              is what happens
              <span className="text-[#8F1D2C]"> between the numbers.</span>
            </h2>
          </div>

        </div>

        {/* Findings */}
        <div className="mt-16">
          {findings.map((finding, index) => (
            <article
              key={finding.number}
              className={`group relative grid gap-8 border-b border-[#E7DED3] py-12 lg:grid-cols-[0.25fr_0.35fr_1fr] lg:items-start ${
                index === 0 ? "border-t" : ""
              }`}
            >

              {/* Number */}
              <div>
                <span className="font-[var(--font-laila)] text-2xl text-[#8F1D2C]">
                  {finding.number}
                </span>
              </div>

              {/* Stat */}
              <div>
                <p className="font-[var(--font-laila)] text-5xl leading-none text-[#292524] transition duration-300 group-hover:text-[#8F1D2C] sm:text-6xl">
                  {finding.stat}
                </p>
              </div>

              {/* Text */}
              <div className="max-w-2xl">
                <h3 className="font-[var(--font-laila)] text-2xl leading-tight text-[#292524] sm:text-3xl">
                  {finding.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#78716C] sm:text-base">
                  {finding.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8F1D2C] opacity-60 transition group-hover:opacity-100">
                  Finding
                  <ArrowUpRight size={14} />
                </div>
              </div>

              {/* Hover line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#8F1D2C] transition-all duration-500 group-hover:w-full" />

            </article>
          ))}
        </div>

        {/* Closing statement */}
        <div className="relative mt-20 overflow-hidden bg-[#F7F1E8] px-7 py-12 sm:px-12 sm:py-16">

          <div className="absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full border border-[#8F1D2C]/10" />

          <div className="relative grid gap-8 lg:grid-cols-[0.3fr_1fr] lg:items-center">

            <p className="font-[var(--font-laila)] text-6xl text-[#8F1D2C] sm:text-7xl">
              ↓
            </p>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8F1D2C]">
                The bigger picture
              </p>

              <h3 className="mt-4 max-w-3xl font-[var(--font-laila)] text-3xl leading-tight text-[#292524] sm:text-4xl">
                Algorithms don't simply show us content.
                <br />
                <span className="text-[#8F1D2C]">
                  Our behaviour helps shape what comes next.
                </span>
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[#78716C]">
                The relationship is continuous: users interact with content,
                recommendation systems learn from those signals, and the
                resulting feed can influence what users encounter next.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Findings;