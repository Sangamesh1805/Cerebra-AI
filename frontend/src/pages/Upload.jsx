import { useState } from "react";

import UploadGrid from "../components/upload/UploadGrid";
import UploadStatus from "../components/upload/UploadStatus";
import AnalyzeButton from "../components/upload/AnalyzeButton";
import AppNavbar from "../components/layout/AppNavbar";

function Upload() {
  const [files, setFiles] = useState({
    T1: null,
    T1CE: null,
    T2: null,
    FLAIR: null,
  });

  return (
    <>
      <AppNavbar />
      <main className="min-h-screen bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-10 mb-10">
            <h1 className="text-4xl font-bold text-slate-900">
              Upload MRI Scan
            </h1>

            <p className="text-slate-600 mt-4 max-w-2xl">
              Upload all four MRI modalities required for AI-powered brain tumor
              segmentation.
            </p>
          </div>

          <UploadGrid files={files} setFiles={setFiles} />

          <UploadStatus files={files} />

          <AnalyzeButton files={files} />
        </div>
      </main>
    </>
  );
}

export default Upload;
