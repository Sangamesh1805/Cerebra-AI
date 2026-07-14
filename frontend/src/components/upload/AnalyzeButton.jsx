import { useNavigate } from "react-router-dom";

function AnalyzeButton({ files }) {
  const ready = Object.values(files).every(Boolean);
  const navigate = useNavigate();

  return (
    <div className="text-center mt-14">
      <button
        disabled={!ready}
        onClick={() => navigate("/processing")}
        className={`
    px-10
    py-4
    rounded-xl
    font-semibold
    text-lg
    transition-all
    ${
      ready
        ? "bg-blue-600 text-white hover:bg-blue-700"
        : "bg-slate-300 text-slate-500 cursor-not-allowed"
    }
  `}
      >
        Analyze MRI
      </button>
    </div>
  );
}

export default AnalyzeButton;
