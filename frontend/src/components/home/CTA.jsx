import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-blue-600 to-cyan-600">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-14 text-center border border-white/20"
        >
          <h2 className="text-5xl font-bold text-white">
            Ready to Experience AI-Powered
            <br />
            Brain Tumor Segmentation?
          </h2>

          <p className="text-blue-100 text-lg mt-6 max-w-3xl mx-auto leading-8">
            Upload your MRI scan and let Cerebra generate accurate segmentation
            results with interactive 3D visualization.
          </p>

          <Link
            to="/upload"
            className="inline-flex items-center gap-2 mt-10 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-all duration-300"
          >
            Upload MRI
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
