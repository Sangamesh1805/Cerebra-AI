import React from "react";

function Button({ children, onClick, variant = "primary", type = "button" }) {
  const base = "px-6 py-3 rounded-lg font-semibold transition-all duration-300";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-md",

    secondary: "border border-blue-600 text-blue-600 hover:bg-blue-50",

    outline: "border border-slate-300 hover:bg-slate-100",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;
