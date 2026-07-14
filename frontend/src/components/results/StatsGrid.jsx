import Card from "../common/Card";

const stats = [
  { title: "Inference Time", value: "--" },
  { title: "Confidence", value: "--" },
  { title: "Tumor Volume", value: "--" },
  { title: "Dice Score", value: "--" },
];

function StatsGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6 text-center">
          <h3 className="text-slate-500">{stat.title}</h3>

          <p className="text-3xl font-bold mt-3 text-blue-600">{stat.value}</p>
        </Card>
      ))}
    </div>
  );
}

export default StatsGrid;
