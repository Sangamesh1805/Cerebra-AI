import { Upload, Cpu, Brain, FileDown } from "lucide-react";

import SectionHeader from "../common/SectionHeader";
import StepCard from "../common/StepCard";

const steps = [
  {
    step: "01",
    icon: Upload,
    title: "Upload MRI",
    description:
      "Upload multi-modal MRI scans including T1, T1CE, T2 and FLAIR.",
  },
  {
    step: "02",
    icon: Cpu,
    title: "AI Processing",
    description:
      "Our trained 3D U-Net model analyzes the MRI and segments tumor regions.",
  },
  {
    step: "03",
    icon: Brain,
    title: "3D Visualization",
    description:
      "View segmented tumors through an interactive three-dimensional viewer.",
  },
  {
    step: "04",
    icon: FileDown,
    title: "Download Report",
    description: "Export segmentation results, statistics and visualizations.",
  },
];

function HowItWorks() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeader
          badge="How It Works"
          title="Simple AI Workflow"
          description="Upload your MRI scans, let Cerebra perform intelligent tumor segmentation, and explore the results in an interactive dashboard."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
