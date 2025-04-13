import React from 'react';
import { ArrowDown, ArrowUp, Clock } from 'lucide-react';

const Traffic = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Network Traffic Analysis</h1>
      
      {/* Traffic Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Upload Traffic Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-4">
            <ArrowUp className="w-6 h-6 text-emerald-400" />
            <h2 className="text-xl font-semibold">Upload Traffic</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-3xl font-bold text-emerald-400">1.2 GB/s</span>
              <span className="text-sm text-emerald-400">+15%</span>
            </div>
            <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-emerald-400/50 rounded-full" />
            </div>
          </div>
        </div>

        {/* Download Traffic Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-4">
            <ArrowDown className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-semibold">Download Traffic</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-3xl font-bold text-blue-400">2.8 GB/s</span>
              <span className="text-sm text-blue-400">+23%</span>
            </div>
            <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-blue-400/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Traffic History */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Traffic History</h2>
          <div className="flex items-center space-x-2 text-slate-400">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Last 24 hours</span>
          </div>
        </div>
        <div className="h-[400px] flex items-center justify-center">
          <p className="text-slate-400">Traffic history visualization coming soon...</p>
        </div>
      </div>

      {/* Top Applications */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">Top Applications</h2>
        <div className="space-y-4">
          {['Web Server', 'Database', 'Cache', 'API Gateway'].map((app, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="w-32 text-slate-300">{app}</span>
              <div className="flex-1 h-2 bg-slate-700/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-cyan-400/50 rounded-full"
                  style={{ width: `${85 - (index * 20)}%` }}
                />
              </div>
              <span className="text-sm text-slate-400">{85 - (index * 20)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Traffic;