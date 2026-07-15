import { Brain } from "lucide-react";
import Card from "../common/Card";

function BrainViewer() {
  return (
    <Card className="p-8 h-[420px]">
      <h2 className="text-2xl font-semibold mb-6">3D Brain Viewer</h2>

      <div className="h-[300px] rounded-xl bg-slate-100 flex flex-col items-center justify-center">
        <Brain size={70} className="text-blue-600" />

        <p className="mt-4 text-slate-500">
          3D tumor segmentation will appear after successful analysis.
        </p>
      </div>
    </Card>
  );
}

export default BrainViewer;
