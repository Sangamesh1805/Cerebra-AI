import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain } from "lucide-react";
import { fadeUp } from "../../utils/animations";
import Button from "../common/Button";
import StatCard from "../common/StatCard";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white pt-4">
      <div className="max-w-7xl mx-auto min-h-[80vh] px-8 flex items-center">
        {/* LEFT SIDE */}

        <div className="flex-1">
          {/* Badge */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium"
          >
            <Brain size={18} />
            AI-Powered Medical Imaging
          </motion.div>

          {/* Heading */}

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-5 text-6xl font-extrabold leading-tight text-slate-900"
          >
            AI-Powered
            <br />
            Brain Tumor
            <br />
            Segmentation
          </motion.h1>

          {/* Description */}

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-lg text-slate-600 leading-8 max-w-lg"
            transition={{ delay: 0.4 }}
          >
            Upload multi-modal MRI scans and generate accurate voxel-level tumor
            segmentation with interactive 3D visualization powered by deep
            learning.
          </motion.p>

          {/* Buttons */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex gap-5"
            transition={{ delay: 0.6 }}
          >
            <Button>Upload MRI →</Button>

            <Button variant="secondary">Learn More</Button>
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="mt-16 mb-14 flex gap-6"
          >
            <StatCard value="98%" label="Segmentation Accuracy" />

            <StatCard value="4" label="MRI Modalities" />

            <StatCard value="3D" label="Interactive Viewer" />
          </motion.div>
        </div>

        {/* RIGHT SIDE */}

        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-1/2 relative flex justify-center items-center"
        >
          <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-100 blur-3xl opacity-30"></div>

          <div className="relative w-[400px] h-[400px] rounded-full bg-blue-50 border border-blue-100 shadow-xl flex justify-center items-center">
            <Brain size={220} className="text-blue-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
