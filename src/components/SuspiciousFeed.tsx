import React from 'react';
import { AlertTriangle, Shield } from 'lucide-react';

const SuspiciousFeed = () => {
  const incidents = [
    {
      severity: 'high',
      message: 'Port scan detected from 192.168.1.100',
      timestamp: '2m ago',
    },
    {
      severity: 'medium',
      message: 'Unusual outbound traffic pattern',
      timestamp: '5m ago',
    },
    {
      severity: 'low',
      message: 'Failed authentication attempt',
      timestamp: '12m ago',
    },
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-[400px]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Suspicious Activity</h2>
        <Shield className="w-5 h-5 text-slate-400" />
      </div>

      <div className="space-y-4">
        {incidents.map((incident, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors cursor-pointer"
          >
            <AlertTriangle className={`w-5 h-5 flex-shrink-0 ${
              incident.severity === 'high' ? 'text-rose-400' :
              incident.severity === 'medium' ? 'text-amber-400' :
              'text-blue-400'
            }`} />
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-300 truncate">{incident.message}</p>
              <p className="text-xs text-slate-500 mt-1">{incident.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuspiciousFeed