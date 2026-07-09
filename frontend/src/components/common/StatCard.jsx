function StatCard({ value, label }) {
  return (
    <div className="bg-white rounded-xl shadow-md px-6 py-4 min-w-35 border border-slate-100 hover:shadow-lg transition-all duration-300">
      <h3 className="text-3xl font-bold text-blue-600">{value}</h3>

      <p className="text-slate-500 mt-2 text-sm">{label}</p>
    </div>
  );
}

export default StatCard;
