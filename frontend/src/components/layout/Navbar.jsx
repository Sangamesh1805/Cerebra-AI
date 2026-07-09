import { Link } from "react-router-dom";
import Button from "../common/Button";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* Logo */}

        <Link to="/" className="text-3xl font-bold text-blue-600">
          🧠 Cerebra
        </Link>

        {/* Navigation */}

        <div className="flex gap-8 items-center">
          <Link to="/" className="text-slate-700 hover:text-blue-600">
            Home
          </Link>

          <Link to="/about" className="text-slate-700 hover:text-blue-600">
            About
          </Link>

          <Link to="/upload" className="text-slate-700 hover:text-blue-600">
            Upload
          </Link>

          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
