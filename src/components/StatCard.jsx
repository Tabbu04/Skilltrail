export default function StatCard({ label, value, sub, accent = "text-navy-700 dark:text-white" }) {
  return (
    <div className="card">
      <div className="text-xs font-semibold text-navy-400 dark:text-navy-100 uppercase tracking-wide">{label}</div>
      <div className={`text-3xl font-display font-bold mt-1 ${accent}`}>{value}</div>
      {sub && <div className="text-xs text-navy-400 dark:text-navy-200 mt-1">{sub}</div>}
    </div>
  );
}
