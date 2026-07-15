import { Brain, ScanSearch, Zap, Box, BarChart3, FileText } from "lucide-react";

import SectionHeader from "../common/SectionHeader";
import FeatureCard from "../common/FeatureCard";

const features = [
  {
    icon: Brain,
    title: "3D Brain Segmentation",
    description:
      "Detect and segment brain tumors using an advanced 3D U-Net deep learning model.",
  },

  {
    icon: ScanSearch,
    title: "Multi-Modal MRI",
    description:
      "Supports T1, T1CE, T2 and FLAIR MRI modalities for comprehensive analysis.",
  },

  {
    icon: Zap,
    title: "Fast AI Inference",
    description:
      "Generate accurate segmentation results efficiently after MRI upload.",
  },

  {
    icon: Box,
    title: "Interactive 3D Viewer",
    description:
      "Visualize segmented tumors with an interactive three-dimensional brain model.",
  },

  {
    icon: BarChart3,
    title: "Tumor Analytics",
    description:
      "View segmentation metrics and tumor statistics in a clean dashboard.",
  },

  {
    icon: FileText,
    title: "Clinical Reports",
    description:
      "Download segmentation results and generated reports for future reference.",
  },
];

function Features() {
  return (
    <section id="features" className="py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        <SectionHeader
          badge="Why Choose Cerebra"
          title="Powerful AI Features"
          description="
            Everything you need for intelligent
            brain tumor segmentation, MRI analysis,
            and interactive 3D visualization.
            "
        />

        <div
          className="
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        mt-16
        "
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
