import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Brain, CheckCircle2, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import AppNavbar from "../components/layout/AppNavbar";

const steps = [
  "Loading AI Model",
  "Reading MRI Files",
  "Running 3D U-Net",
  "Generating Segmentation",
  "Preparing 3D Visualization",
];

function Processing() {
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate("/results");
          return 100;
        }

        const next = prev + 4;

        setCurrentStep(Math.min(Math.floor(next / 20), steps.length - 1));

        return next;
      });
    }, 180);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <>
      <AppNavbar />

      <main className="min-h-screen bg-slate-50 flex justify-center items-center px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-lg p-12 w-full max-w-3xl"
        >
          <div className="flex justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <Brain size={90} className="text-blue-600" />
            </motion.div>
          </div>

          <h1 className="text-4xl font-bold text-center mt-8">AI Processing</h1>

          <p className="text-center text-slate-600 mt-3">
            Please wait while Cerebra analyzes the MRI scans.
          </p>

          <div className="mt-10">
            <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
              <motion.div
                className="bg-blue-600 h-4 rounded-full"
                animate={{ width: `${progress}%` }}
              />
            </div>

            <p className="text-center mt-3 font-semibold">{progress}%</p>
          </div>

          <div className="mt-10 space-y-5">
            {steps.map((step, index) => (
              <div key={step} className="flex items-center gap-4">
                {index < currentStep ? (
                  <CheckCircle2 className="text-green-500" />
                ) : index === currentStep ? (
                  <Loader2 className="animate-spin text-blue-600" />
                ) : (
                  <div className="w-6 h-6 rounded-full border-2 border-slate-300"></div>
                )}

                <span
                  className={
                    index <= currentStep ? "font-medium" : "text-slate-400"
                  }
                >
                  {step}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
    </>
  );
}

export default Processing;
