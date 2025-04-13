import React from 'react';
import { BarChart3, TrendingUp, Users, Clock } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Network Analytics</h1>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: BarChart3, label: 'Bandwidth Usage', value: '85%', trend: '+5%' },
          { icon: Users, label: 'Active Users', value: '1,234', trend: '+12%' },
          { icon: Clock, label: 'Avg Response Time', value: '45ms', trend: '-8%' }
        ].map((stat, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-4">
              <stat.icon className="w-6 h-6 text-cyan-400" />
              <h2 className="text-lg font-semibold">{stat.label}</h2>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-bold">{stat.value}</span>
              <span className={`text-sm ${stat.trend.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Performance Metrics */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Performance Metrics</h2>
          <TrendingUp className="w-5 h-5 text-slate-400" />
        </div>
        <div className="h-[400px] flex items-center justify-center">
          <p className="text-slate-400">Performance metrics visualization coming soon...</p>
        </div>
      </div>

      {/* Resource Usage Table */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-6">Resource Usage</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-slate-700">
                <th className="pb-4 text-slate-400">Resource</th>
                <th className="pb-4 text-slate-400">Usage</th>
                <th className="pb-4 text-slate-400">Limit</th>
                <th className="pb-4 text-slate-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'CPU', usage: '75%', limit: '90%', status: 'Optimal' },
                { name: 'Memory', usage: '60%', limit: '80%', status: 'Good' },
                { name: 'Storage', usage: '85%', limit: '95%', status: 'Warning' },
                { name: 'Network', usage: '45%', limit: '100%', status: 'Excellent' },
              ].map((resource, index) => (
                <tr key={index} className="border-b border-slate-700/50">
                  <td className="py-4">{resource.name}</td>
                  <td className="py-4">{resource.usage}</td>
                  <td className="py-4">{resource.limit}</td>
                  <td className="py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      resource.status === 'Optimal' ? 'bg-emerald-400/20 text-emerald-400' :
                      resource.status === 'Good' ? 'bg-blue-400/20 text-blue-400' :
                      resource.status === 'Warning' ? 'bg-amber-400/20 text-amber-400' :
                      'bg-cyan-400/20 text-cyan-400'
                    }`}>
                      {resource.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Analytics;