import Card from "../common/Card";

function StatsGrid({ result }) {
  const stats = [
    {
      title: "Status",
      value: result?.status ?? "--",
    },
    {
      title: "Prediction File",
      value: result?.prediction_file
        ? result.prediction_file.split("/").pop().split("\\").pop()
        : "--",
    },
    {
      title: "Backend Message",
      value: result?.message ?? "--",
    },
    {
      title: "Inference Time",
      value: result?.inference_time ? `${result.inference_time} sec` : "--",
    },
    {
      title: "Tumor Detected",
      value: result.tumor_detected ? "Yes" : "No",
    },
    {
      title: "Tumor Voxels",
      value: result.tumor_voxel_count.toLocaleString(),
    },
    {
      title: "Edema",
      value: result.edema_voxels.toLocaleString(),
    },
    {
      title: "Enhancing Tumor",
      value: result.enhancing_voxels.toLocaleString(),
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
      {stats.map((stat) => (
        <Card key={stat.title} className="p-6 text-center">
          <h3 className="text-slate-500 text-sm">{stat.title}</h3>

          <p className="text-lg font-bold mt-3 text-blue-600 break-words">
            {stat.value}
          </p>
        </Card>
      ))}
    </div>
  );
}

export default StatsGrid;
