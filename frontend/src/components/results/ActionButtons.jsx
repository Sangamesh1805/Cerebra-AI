import { Link } from "react-router-dom";

function ActionButtons() {
  return (
    <div className="flex gap-4 justify-end mt-10">
      <Link
        to="/upload"
        className="px-6 py-3 rounded-xl border hover:bg-slate-100 transition"
      >
        Analyze Another Scan
      </Link>

      <button
        disabled
        className="px-6 py-3 rounded-xl bg-slate-300 text-slate-500 cursor-not-allowed"
      >
        Download Report
      </button>
    </div>
  );
}

export default ActionButtons;
