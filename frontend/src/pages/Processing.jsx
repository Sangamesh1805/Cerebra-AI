import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { predictTumor } from "../api/predict";
import {
  Brain,
  CheckCircle2,
  Loader2,
  Cpu,
  Database,
  Activity,
  Clock,
} from "lucide-react";
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

  const location = useLocation();
  const files = location.state?.files;

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!files) {
      navigate("/upload");
      return;
    }

    let interval;

    async function analyze() {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 95) return prev;

          const next = prev + 2;

          setCurrentStep(Math.min(Math.floor(next / 20), steps.length - 1));

          return next;
        });
      }, 250);

      try {
        const result = await predictTumor(files);

        clearInterval(interval);

        setProgress(100);
        setCurrentStep(steps.length - 1);

        setTimeout(() => {
          navigate("/results", {
            state: result,
          });
        }, 800);
      } catch (error) {
        clearInterval(interval);

        console.error(error);

        alert("Prediction failed.");

        navigate("/upload");
      }
    }

    analyze();

    return () => clearInterval(interval);
  }, [files, navigate]);

  return (
    <>
      <AppNavbar />

      <main className="min-h-screen bg-slate-50 flex justify-center items-center px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl border border-slate-200 p-12 w-full max-w-4xl"
        >
          {/* Brain Animation */}

          <div className="flex justify-center">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.08, 1],
              }}
              transition={{
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                },
              }}
            >
              <Brain size={90} className="text-blue-600" />
            </motion.div>
          </div>

          {/* Heading */}

          <h1 className="text-4xl font-bold text-center mt-8">AI Processing</h1>

          <p className="text-center text-slate-600 mt-3">
            Cerebra is analyzing your MRI scans using the trained 3D U-Net
            model.
          </p>

          {/* Progress */}

          <div className="mt-10">
            <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
              <motion.div
                className="bg-blue-600 h-full rounded-full"
                animate={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <p className="font-semibold text-blue-600">
                {progress}% Complete
              </p>

              <p className="text-sm text-slate-500">
                Estimated Time: {Math.max(1, Math.ceil((100 - progress) / 20))}{" "}
                sec
              </p>
            </div>
          </div>

          {/* Analysis Information */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 bg-slate-50 rounded-2xl border border-slate-200 p-6"
          >
            <h2 className="text-xl font-semibold mb-6">Analysis Information</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex gap-3">
                <Cpu className="text-blue-600" />

                <div>
                  <p className="text-sm text-slate-500">Model</p>

                  <p className="font-medium">3D U-Net</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Database className="text-blue-600" />

                <div>
                  <p className="text-sm text-slate-500">Input</p>

                  <p className="font-medium">4 MRI Modalities</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Activity className="text-blue-600" />

                <div>
                  <p className="text-sm text-slate-500">Current Stage</p>

                  <p className="font-medium text-blue-600">
                    {steps[currentStep]}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="text-blue-600" />

                <div>
                  <p className="text-sm text-slate-500">Status</p>

                  <p className="font-medium text-green-600">Processing</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Processing Steps */}

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
                    index <= currentStep
                      ? "font-medium text-slate-800"
                      : "text-slate-400"
                  }
                >
                  {step}
                </span>
              </div>
            ))}
          </div>

          {/* Footer */}

          <div className="mt-10 border-t pt-6">
            <p className="text-center text-sm text-slate-500">
              Please do not close or refresh this page while the analysis is
              running.
            </p>
          </div>
        </motion.div>
      </main>
    </>
  );
}

export default Processing;
