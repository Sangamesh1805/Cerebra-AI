import { Link } from "react-router-dom";

function ActionButtons({ result }) {
  function handleDownload() {
    if (!result?.prediction_file) {
      alert("Prediction file not found.");
      return;
    }

    window.open(
      `http://127.0.0.1:8000/download/${result.prediction_file
        .split("/")
        .pop()
        .split("\\")
        .pop()}`,
      "_blank",
    );
  }

  return (
    <div className="flex gap-4 justify-end mt-10">
      <Link
        to="/upload"
        className="px-6 py-3 rounded-xl border hover:bg-slate-100 transition"
      >
        Analyze Another Scan
      </Link>

      <button
        onClick={handleDownload}
        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition"
      >
        Download Prediction
      </button>
    </div>
  );
}

export default ActionButtons;
