import { Image } from "lucide-react";
import Card from "../common/Card";

function MRIViewer() {
  return (
    <Card className="p-8 h-[420px]">
      <h2 className="text-2xl font-semibold mb-6">MRI Preview</h2>

      <div className="h-[300px] rounded-xl bg-slate-100 flex flex-col items-center justify-center">
        <Image size={70} className="text-slate-400" />

        <p className="mt-4 text-slate-500">
          Upload and analyze an MRI scan to preview slices.
        </p>
      </div>
    </Card>
  );
}

export default MRIViewer;
