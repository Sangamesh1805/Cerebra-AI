import { Link, NavLink } from "react-router-dom";
import { Brain } from "lucide-react";
import Button from "../common/Button";

function Navbar() {
  const handleAboutClick = () => {
    const section = document.getElementById("features");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}

        <Link to="/" className="flex items-center gap-3">
          <Brain size={34} className="text-blue-600" />

          <span className="text-3xl font-bold text-blue-600">Cerebra</span>
        </Link>

        {/* Navigation */}

        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-slate-600 hover:text-blue-600 transition duration-300 font-medium"
            }
          >
            Home
          </NavLink>

          <button
            onClick={handleAboutClick}
            className="text-slate-600 hover:text-blue-600 transition duration-300 font-medium cursor-pointer"
          >
            About
          </button>

          <NavLink
            to="/upload"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-slate-600 hover:text-blue-600 transition duration-300 font-medium"
            }
          >
            Upload
          </NavLink>

          <Link to="/upload">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
