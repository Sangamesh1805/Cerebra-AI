import { CheckCircle, Circle } from "lucide-react";

const modalities = ["T1", "T1CE", "T2", "FLAIR"];

function UploadStatus({ files }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 mt-12">
      <h2 className="text-2xl font-semibold">Upload Status</h2>

      <div className="grid grid-cols-2 gap-6 mt-8">
        {modalities.map((m) => (
          <div key={m} className="flex items-center gap-3">
            {files[m] ? (
              <CheckCircle className="text-green-500" />
            ) : (
              <Circle className="text-slate-400" />
            )}

            {m}
          </div>
        ))}
      </div>
    </div>
  );
}

export default UploadStatus;
