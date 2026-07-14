import Card from "../common/Card";

const regions = ["Enhancing Tumor", "Necrotic Core", "Peritumoral Edema"];

function TumorRegions() {
  return (
    <Card className="p-8 mt-10">
      <h2 className="text-2xl font-semibold mb-6">Tumor Regions</h2>

      <div className="space-y-4">
        {regions.map((region) => (
          <div
            key={region}
            className="flex justify-between items-center border rounded-xl p-4"
          >
            <span>{region}</span>

            <span className="text-slate-500">Pending Analysis</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

export default TumorRegions;
