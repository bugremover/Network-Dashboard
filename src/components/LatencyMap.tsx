import React from 'react';
import { Clock } from 'lucide-react';

const LatencyMap = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-[400px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Latency Heatmap</h2>
        <Clock className="w-5 h-5 text-slate-400" />
      </div>

      <div className="h-[300px] flex items-center justify-center">
        <p className="text-slate-400">Latency visualization coming soon...</p>
      </div>
    </div>
  );
}

export default LatencyMap