const StatCard = ({ number, label, description, accent = false }) => {
  return (
    <article
      className={`group relative overflow-hidden border p-6 transition duration-300 hover:-translate-y-1 sm:p-7 ${
        accent
          ? "border-[#8F1D2C] bg-[#8F1D2C] text-white"
          : "border-[#D8C8B8] bg-[#FFFDF9] text-[#292524]"
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <span
          className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
            accent ? "text-white/55" : "text-[#A67C62]"
          }`}
        >
          {label}
        </span>

        <span
          className={`text-xs ${
            accent ? "text-white/35" : "text-[#D8C8B8]"
          }`}
        >
          01
        </span>
      </div>

      <div
        className={`mt-12 font-[var(--font-laila)] text-6xl leading-none sm:text-7xl ${
          accent ? "text-white" : "text-[#292524]"
        }`}
      >
        {number}
      </div>

      <p
        className={`mt-5 max-w-xs text-sm leading-6 ${
          accent ? "text-white/65" : "text-[#78716C]"
        }`}
      >
        {description}
      </p>

      <div
        className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${
          accent ? "bg-[#F7F1E8]" : "bg-[#8F1D2C]"
        }`}
      />
    </article>
  );
};

export default StatCard;