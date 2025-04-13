import React from 'react';
import NetworkMap from '../components/NetworkMap';
import { Box, Activity, ArrowRight } from 'lucide-react';

function PodMap() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Pod Communication Map</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Active Pods', value: '24', change: '+2' },
          { label: 'Total Connections', value: '156', change: '+12' },
          { label: 'Data Transfer', value: '2.4 GB/s', change: '+0.3' }
        ].map((stat, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{stat.label}</p>
                <p className="text-2xl font-bold mt-1">{stat.value}</p>
              </div>
              <span className="text-sm text-emerald-400">{stat.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Network Map */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <NetworkMap />
        </div>

        {/* Active Connections */}
        <div className="space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Activity className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-semibold">Active Connections</h2>
            </div>
            <div className="space-y-4">
              {[
                { from: 'frontend-pod-1', to: 'api-pod-3', traffic: '1.2 MB/s' },
                { from: 'api-pod-3', to: 'db-pod-1', traffic: '0.8 MB/s' },
                { from: 'cache-pod-2', to: 'api-pod-1', traffic: '2.1 MB/s' },
                { from: 'auth-pod-1', to: 'db-pod-2', traffic: '0.3 MB/s' }
              ].map((conn, index) => (
                <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Box className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-mono">{conn.from}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-mono">{conn.to}</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-xs text-slate-400">{conn.traffic}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PodMap;