import { motion } from "framer-motion";

function StepCard({ step, icon: Icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 text-center"
    >
      <div className="w-12 h-12 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
        {step}
      </div>

      <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mx-auto mt-6">
        <Icon size={32} className="text-blue-600" />
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-slate-900">{title}</h3>

      <p className="mt-3 text-slate-600 leading-7">{description}</p>
    </motion.div>
  );
}

export default StepCard;
