import { Link } from "react-router-dom";
import Button from "../common/Button";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}

        <Link to="/" className="text-3xl font-bold text-blue-600">
          🧠 Cerebra
        </Link>

        {/* Navigation */}

        <div className="flex gap-8 items-center">
          <Link
            to="/"
            className="
text-slate-600
hover:text-blue-600
transition-all
duration-300
font-medium
"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="
text-slate-600
hover:text-blue-600
transition-all
duration-300
font-medium
"
          >
            About
          </Link>

          <Link
            to="/upload"
            className="
text-slate-600
hover:text-blue-600
transition-all
duration-300
font-medium
"
          >
            Upload
          </Link>

          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
