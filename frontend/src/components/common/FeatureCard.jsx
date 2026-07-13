import { motion } from "framer-motion";

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { duration: 0.2 },
      }}
      className="
      bg-white
      rounded-2xl
      p-8
      border
      border-slate-200
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      "
    >
      <div
        className="
        w-14
        h-14
        rounded-xl
        bg-blue-100
        flex
        items-center
        justify-center
        "
      >
        <Icon className="text-blue-600" size={28} />
      </div>

      <h3
        className="
        mt-6
        text-2xl
        font-semibold
        text-slate-900
        "
      >
        {title}
      </h3>

      <p
        className="
        mt-3
        text-slate-600
        leading-7
        "
      >
        {description}
      </p>
    </motion.div>
  );
}

export default FeatureCard;
