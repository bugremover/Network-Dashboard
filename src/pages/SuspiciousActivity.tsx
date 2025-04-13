import React from 'react';
import SuspiciousFeed from '../components/SuspiciousFeed';
import { Shield, AlertTriangle } from 'lucide-react';

function SuspiciousActivity() {
  const stats = [
    { label: 'Total Alerts', value: '124', change: '+12%' },
    { label: 'Critical Issues', value: '3', change: '-25%' },
    { label: 'Response Time', value: '1.2s', change: '+5%' }
  ];

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Suspicious Activity Monitor</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <span className={`text-sm ${
                stat.change.startsWith('+') ? 'text-rose-400' : 'text-emerald-400'
              }`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="lg:col-span-2">
          <SuspiciousFeed />
        </div>

        {/* Security Recommendations */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-6">
            <Shield className="w-5 h-5 text-cyan-400" />
            <h2 className="text-xl font-semibold">Security Recommendations</h2>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <p className="text-sm text-slate-300">Enable network policy enforcement for better pod isolation</p>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <p className="text-sm text-slate-300">Review and update firewall rules for external traffic</p>
            </div>
            <div className="p-4 bg-slate-700/30 rounded-lg">
              <p className="text-sm text-slate-300">Implement rate limiting on public-facing endpoints</p>
            </div>
          </div>
        </div>

        {/* Recent Blocks */}
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-6">
            <AlertTriangle className="w-5 h-5 text-rose-400" />
            <h2 className="text-xl font-semibold">Recent Blocks</h2>
          </div>
          <div className="space-y-4">
            {[
              { ip: '192.168.1.100', reason: 'Port scanning', time: '5m ago' },
              { ip: '10.0.0.55', reason: 'Rate limit exceeded', time: '15m ago' },
              { ip: '172.16.0.23', reason: 'Suspicious pattern', time: '1h ago' }
            ].map((block, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-700/30 rounded-lg">
                <div>
                  <p className="text-sm font-mono text-slate-300">{block.ip}</p>
                  <p className="text-xs text-slate-400 mt-1">{block.reason}</p>
                </div>
                <span className="text-xs text-slate-500">{block.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuspiciousActivity;