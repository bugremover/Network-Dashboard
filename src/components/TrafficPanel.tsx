import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

const TrafficPanel = () => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
      <h2 className="text-xl font-semibold mb-6">Network Traffic</h2>
      
      <div className="space-y-6">
        {/* Upload Traffic */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ArrowUp className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-slate-300">Upload</span>
            </div>
            <span className="text-sm font-mono text-emerald-400">1.2 GB/s</span>
          </div>
          <div className="h-12 bg-slate-700/50 rounded-lg overflow-hidden">
            <div 
              className="h-full w-3/4 bg-gradient-to-r from-emerald-500/50 to-emerald-400/50"
              style={{ 
                backgroundSize: '200% 100%',
                animation: 'gradient 2s linear infinite'
              }}
            />
          </div>
        </div>

        {/* Download Traffic */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ArrowDown className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-slate-300">Download</span>
            </div>
            <span className="text-sm font-mono text-blue-400">2.8 GB/s</span>
          </div>
          <div className="h-12 bg-slate-700/50 rounded-lg overflow-hidden">
            <div 
              className="h-full w-1/2 bg-gradient-to-r from-blue-500/50 to-blue-400/50"
              style={{ 
                backgroundSize: '200% 100%',
                animation: 'gradient 2s linear infinite'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrafficPanel