import { useEffect, useRef, useState } from "react";
import { Niivue } from "@niivue/niivue";

export default function BrainViewer({ originalUrl, predictionUrl }) {
  const canvasRef = useRef(null);
  const nvRef = useRef(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function initViewer() {
      if (!canvasRef.current) {
        return;
      }

      if (!originalUrl || !predictionUrl) {
        setError("Missing MRI or prediction file URL.");
        return;
      }

      setError("");

      const nv = new Niivue({
        dragAndDropEnabled: false,
        show3Dcrosshair: true,
      });

      nvRef.current = nv;

      try {
        await nv.attachToCanvas(canvasRef.current);

        if (cancelled) {
          return;
        }

        await nv.loadVolumes([
          {
            url: originalUrl,
            name: "original.nii.gz",
            colormap: "gray",
            opacity: 1,
          },
          {
            url: predictionUrl,
            name: "prediction.nii.gz",
            colormap: "red",
            opacity: 0.45,
            cal_min: 0.5,
            cal_max: 3.5,
            alphaThreshold: true,
          },
        ]);
      } catch (err) {
        console.error("Failed to initialize BrainViewer:", err);
        if (!cancelled) {
          setError("Failed to load the interactive tumor viewer.");
        }
      }
    }

    initViewer();

    return () => {
      cancelled = true;
      nvRef.current = null;
    };
  }, [originalUrl, predictionUrl]);

  return (
    <div className="relative w-full h-150 rounded-xl overflow-hidden bg-black border border-slate-700">
      <canvas
        ref={canvasRef}
        width={900}
        height={600}
        className="w-full h-full"
      />
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 text-slate-100 px-6 text-center">
          <p className="max-w-md text-sm leading-6">{error}</p>
        </div>
      ) : null}
    </div>
  );
}
