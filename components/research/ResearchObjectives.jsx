const objectives = [
  {
    number: "01",
    title: "What students consume",
    text: "Identify the platforms and content categories students engage with most.",
  },
  {
    number: "02",
    title: "What algorithms recommend",
    text: "Understand whether students recognize recommendations based on previous activity.",
  },
  {
    number: "03",
    title: "How behaviour changes",
    text: "Explore scrolling, viewing and interaction patterns influenced by recommendations.",
  },
  {
    number: "04",
    title: "What students are exposed to",
    text: "Examine repeated viewpoints and exposure to misleading or false information.",
  },
  {
    number: "05",
    title: "What students can do",
    text: "Identify practical ways to reduce negative algorithmic influence.",
  },
];

export default function ResearchObjectives() {
  return (
    <section className="bg-[#FFFDF9]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-8 lg:py-28">

        <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr]">

          {/* heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8F1D2C]">
              Research / 02
            </p>

            <h2 className="mt-4 font-[var(--font-laila)] text-4xl font-semibold leading-tight text-[#292524] sm:text-5xl">
              Five questions.
              <br />
              <span className="text-[#8F1D2C]">One bigger picture.</span>
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-[#78716C]">
              Instead of looking at algorithms as purely technical systems,
              this study focuses on their relationship with student behaviour.
            </p>
          </div>

          {/* timeline */}
          <div className="relative">

            <div className="absolute bottom-0 left-[19px] top-0 w-px bg-[#D8C8B8]" />

            <div className="space-y-2">
              {objectives.map((item) => (
                <article
                  key={item.number}
                  className="group relative grid grid-cols-[40px_1fr] gap-6 py-7"
                >
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#D8C8B8] bg-[#FFFDF9] text-[10px] font-bold text-[#8F1D2C] transition group-hover:border-[#8F1D2C] group-hover:bg-[#8F1D2C] group-hover:text-white">
                    {item.number}
                  </div>

                  <div className="border-b border-[#E7DED3] pb-7">
                    <h3 className="font-[var(--font-laila)] text-2xl font-semibold text-[#292524] transition group-hover:text-[#8F1D2C]">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-[#78716C]">
                      {item.text}
                    </p>
                  </div>
                </article>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}