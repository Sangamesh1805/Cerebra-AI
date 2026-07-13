function SectionHeader({ badge, title, description }) {
  return (
    <div className="text-center max-w-3xl mx-auto">
      {/* Badge */}

      <p
        className="
        text-blue-600
        font-semibold
        uppercase
        tracking-[0.2em]
        text-sm
        "
      >
        {badge}
      </p>

      {/* Title */}

      <h2
        className="
        mt-4
        text-5xl
        font-bold
        text-slate-900
        "
      >
        {title}
      </h2>

      {/* Description */}

      <p
        className="
        mt-6
        text-lg
        leading-8
        text-slate-600
        "
      >
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
