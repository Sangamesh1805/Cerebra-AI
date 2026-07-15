import { NavLink } from "react-router-dom";
import { Brain } from "lucide-react";
import { motion } from "framer-motion";

function AppNavbar() {
  const navItems = [
    { name: "Upload", path: "/upload" },
    { name: "Results", path: "/results" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-8 grid grid-cols-3 items-center">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 justify-self-start">
          <Brain className="text-blue-600" size={34} />

          <div>
            <h1 className="text-2xl font-bold text-slate-900">Cerebra</h1>

            <p className="text-xs text-slate-500">
              AI Brain Tumor Segmentation
            </p>
          </div>
        </NavLink>

        {/* Center Navigation */}
        <div className="flex justify-center gap-10">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path}>
              {({ isActive }) => (
                <motion.div whileHover={{ y: -2 }} className="relative py-2">
                  <span
                    className={`font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-blue-600"
                        : "text-slate-600 hover:text-blue-600"
                    }`}
                  >
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute left-0 right-0 -bottom-1 h-[3px] rounded-full bg-blue-600"
                    />
                  )}
                </motion.div>
              )}
            </NavLink>
          ))}
        </div>

        {/* Status */}
        <div className="flex items-center gap-2 justify-self-end">
          <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>

          <span className="text-sm font-medium text-slate-600">
            Model Ready
          </span>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
