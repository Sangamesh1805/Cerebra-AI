import { NavLink } from "react-router-dom";
import { Brain } from "lucide-react";

function AppNavbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <Brain className="text-blue-600" size={34} />

          <div>
            <h1 className="text-2xl font-bold text-slate-900">Cerebra</h1>

            <p className="text-xs text-slate-500">
              AI Brain Tumor Segmentation
            </p>
          </div>
        </NavLink>

        {/* Navigation */}

        <div className="flex items-center gap-8">
          <NavLink
            to="/upload"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-slate-600 hover:text-blue-600 transition"
            }
          >
            Upload
          </NavLink>

          <NavLink
            to="/results"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-slate-600 hover:text-blue-600 transition"
            }
          >
            Results
          </NavLink>
        </div>

        {/* Status */}

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>

          <span className="text-sm text-slate-600">Model Ready</span>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
