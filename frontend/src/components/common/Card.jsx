function Card({ children, className = "" }) {
  return (
    <div
      className={`hover:shadow-lg hover:-translate-y-1 transition-all bg-white rounded-2xl border border-slate-200 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
