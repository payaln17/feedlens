"use client";

export default function InterestMeter({ interests }) {
  return (
    <div className="border border-[#D8C8B8] bg-[#FFFDF9] p-5">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8F1D2C]">
            Algorithm memory
          </p>

          <h3 className="mt-1 font-[var(--font-laila)] text-xl font-semibold text-[#292524]">
            What it thinks you like
          </h3>
        </div>

        <div className="h-8 w-8 rounded-full border border-[#D8C8B8]" />
      </div>

      <div className="space-y-5">
        {Object.entries(interests)
          .sort(([, a], [, b]) => b - a)
          .map(([category, score]) => (
            <div key={category}>

              <div className="mb-2 flex justify-between text-xs">
                <span className="font-medium text-[#57534E]">
                  {category}
                </span>

                <span className="font-semibold text-[#8F1D2C]">
                  {score}%
                </span>
              </div>

              <div className="h-1.5 bg-[#E7DED3]">
                <div
                  className="h-full bg-[#8F1D2C] transition-all duration-500"
                  style={{ width: `${score}%` }}
                />
              </div>

            </div>
          ))}
      </div>
    </div>
  );
}