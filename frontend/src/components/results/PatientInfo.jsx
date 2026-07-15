import { User, Calendar, Brain, Activity, Clock } from "lucide-react";

import Card from "../common/Card";

function PatientInfo() {
  return (
    <Card className="p-6 mb-8 hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Patient Information
          </h2>

          <p className="text-slate-500 mt-1">Current MRI analysis details</p>
        </div>

        <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium">
          Waiting for Analysis
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <div className="flex items-start gap-3">
          <User className="text-blue-500 mt-1" />

          <div>
            <p className="text-sm text-slate-500">Patient ID</p>

            <h3 className="font-semibold text-slate-900">--</h3>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Brain className="text-blue-500 mt-1" />

          <div>
            <p className="text-sm text-slate-500">Model</p>

            <h3 className="font-semibold text-slate-900">3D U-Net</h3>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Calendar className="text-blue-500 mt-1" />

          <div>
            <p className="text-sm text-slate-500">Scan Date</p>

            <h3 className="font-semibold text-slate-900">--</h3>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Clock className="text-blue-500 mt-1" />

          <div>
            <p className="text-sm text-slate-500">Inference Time</p>

            <h3 className="font-semibold text-slate-900">--</h3>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Activity className="text-blue-500 mt-1" />

          <div>
            <p className="text-sm text-slate-500">Status</p>

            <h3 className="font-semibold text-yellow-600">Pending</h3>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default PatientInfo;
