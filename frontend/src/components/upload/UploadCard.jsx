import { Upload, CheckCircle } from "lucide-react";

function UploadCard({ modality, files, setFiles }) {
  function handleFile(e) {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.name.endsWith(".nii") && !file.name.endsWith(".nii.gz")) {
      alert("Only .nii or .nii.gz files are allowed.");
      return;
    }

    setFiles((prev) => ({
      ...prev,
      [modality]: file,
    }));
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">{modality}</h2>

      {!files[modality] ? (
        <label className="border-2 border-dashed border-slate-300 rounded-xl h-52 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition">
          <Upload className="text-blue-600" size={42} />

          <p className="mt-4 text-slate-500">Click to upload</p>

          <input
            hidden
            type="file"
            accept=".nii,.nii.gz"
            onChange={handleFile}
          />
        </label>
      ) : (
        <div className="border rounded-xl p-6">
          <CheckCircle className="text-green-500" size={40} />

          <p className="mt-4 font-medium break-all">{files[modality].name}</p>

          <div className="flex gap-3 mt-6">
            <label className="px-4 py-2 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition">
              Replace
              <input
                hidden
                type="file"
                accept=".nii,.nii.gz"
                onChange={handleFile}
              />
            </label>

            <button
              onClick={() =>
                setFiles((prev) => ({
                  ...prev,
                  [modality]: null,
                }))
              }
              className="px-4 py-2 rounded-lg border hover:bg-slate-100 transition"
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadCard;
