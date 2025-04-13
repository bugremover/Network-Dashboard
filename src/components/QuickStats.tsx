import React from 'react';
import { Activity, Link2, XCircle, Globe } from 'lucide-react';

const QuickStats = () => {
  const stats = [
    {
      icon: Activity,
      label: 'Total Traffic',
      value: '4.0 TB/s',
      change: '+12.5%',
      color: 'text-cyan-400',
    },
    {
      icon: Link2,
      label: 'Active Connections',
      value: '12,453',
      change: '+5.2%',
      color: 'text-emerald-400',
    },
    {
      icon: XCircle,
      label: 'Dropped Packets',
      value: '0.02%',
      change: '-3.1%',
      color: 'text-rose-400',
    },
    {
      icon: Globe,
      label: 'External Traffic',
      value: '35%',
      change: '+8.4%',
      color: 'text-violet-400',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-slate-600 transition-colors"
        >
          <div className="flex items-start justify-between">
            <div>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
              <h3 className="mt-4 text-lg font-semibold">{stat.value}</h3>
              <p className="text-sm text-slate-400">{stat.label}</p>
            </div>
            <span className={`text-sm ${stat.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
              {stat.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default QuickStats