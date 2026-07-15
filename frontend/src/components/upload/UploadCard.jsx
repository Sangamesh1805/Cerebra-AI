import { useState } from "react";
import {
  Upload,
  CheckCircle,
  Trash2,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { motion } from "framer-motion";

function UploadCard({ modality, files, setFiles }) {
  const [error, setError] = useState("");
  const [dragActive, setDragActive] = useState(false);

  const file = files[modality];

  const validateFile = (selectedFile) => {
    if (!selectedFile) return false;

    const valid =
      selectedFile.name.endsWith(".nii") ||
      selectedFile.name.endsWith(".nii.gz");

    if (!valid) {
      setError("Only .nii and .nii.gz MRI files are supported.");
      return false;
    }

    setError("");
    return true;
  };

  const handleFile = (selectedFile) => {
    if (!validateFile(selectedFile)) return;

    setFiles((prev) => ({
      ...prev,
      [modality]: selectedFile,
    }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);

    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  };

  const removeFile = () => {
    setError("");

    setFiles((prev) => ({
      ...prev,
      [modality]: null,
    }));
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 p-6"
    >
      <h2 className="text-2xl font-semibold text-slate-900 mb-5">{modality}</h2>

      {!file ? (
        <>
          <label
            onDragOver={(e) => {
              e.preventDefault();
              setDragActive(true);
            }}
            onDragLeave={() => setDragActive(false)}
            onDrop={handleDrop}
            className={`
              h-56
              border-2
              border-dashed
              rounded-2xl
              flex
              flex-col
              justify-center
              items-center
              cursor-pointer
              transition-all
              duration-300

              ${
                dragActive
                  ? "border-blue-600 bg-blue-50 scale-[1.02]"
                  : error
                    ? "border-red-400 bg-red-50"
                    : "border-slate-300 hover:border-blue-500 hover:bg-blue-50"
              }
            `}
          >
            <Upload
              size={42}
              className={`${error ? "text-red-500" : "text-blue-600"}`}
            />

            <h3 className="mt-4 text-lg font-semibold">Drag & Drop MRI</h3>

            <p className="text-slate-500 text-sm mt-2">or click to browse</p>

            <p className="text-xs text-slate-400 mt-2">
              Supported: .nii / .nii.gz
            </p>

            <input
              hidden
              type="file"
              accept=".nii,.nii.gz"
              onChange={(e) => handleFile(e.target.files[0])}
            />
          </label>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 flex gap-3"
            >
              <AlertCircle size={20} className="text-red-600 mt-0.5" />

              <div>
                <p className="font-semibold text-red-700">Invalid File</p>

                <p className="text-sm text-red-600">{error}</p>
              </div>
            </motion.div>
          )}
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-2xl border border-green-200 bg-green-50 p-5"
        >
          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-600" size={28} />

            <div>
              <h3 className="font-semibold text-green-700">
                Upload Successful
              </h3>

              <p className="text-sm text-slate-500 break-all">{file.name}</p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-500">File Size</p>

              <p className="font-medium">
                {(file.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>

            <div>
              <p className="text-slate-500">Format</p>

              <p className="font-medium">
                {file.name.endsWith(".nii.gz") ? ".nii.gz" : ".nii"}
              </p>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <label className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 flex justify-center items-center gap-2 cursor-pointer transition">
              <RefreshCw size={18} />
              Replace
              <input
                hidden
                type="file"
                accept=".nii,.nii.gz"
                onChange={(e) => handleFile(e.target.files[0])}
              />
            </label>

            <button
              onClick={removeFile}
              className="flex-1 border border-red-200 text-red-600 rounded-xl py-3 flex justify-center items-center gap-2 hover:bg-red-50 transition"
            >
              <Trash2 size={18} />
              Remove
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default UploadCard;
