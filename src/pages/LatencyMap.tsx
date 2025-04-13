import React from 'react';
import LatencyMapComponent from '../components/LatencyMap';
import { Clock, Wifi } from 'lucide-react';

function LatencyMap() {
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Network Latency Map</h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Average Latency', value: '45ms', change: '-12%' },
          { label: 'Peak Latency', value: '120ms', change: '+5%' },
          { label: 'Packet Loss', value: '0.01%', change: '-2%' }
        ].map((stat, index) => (
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

      {/* Main Latency Map */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LatencyMapComponent />
        </div>

        {/* Service Health */}
        <div className="space-y-6">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Wifi className="w-5 h-5 text-cyan-400" />
              <h2 className="text-xl font-semibold">Service Health</h2>
            </div>
            <div className="space-y-4">
              {[
                { name: 'API Gateway', latency: '12ms', status: 'Excellent' },
                { name: 'Database', latency: '45ms', status: 'Good' },
                { name: 'Cache', latency: '8ms', status: 'Excellent' },
                { name: 'Auth Service', latency: '25ms', status: 'Good' }
              ].map((service, index) => (
                <div key={index} className="p-4 bg-slate-700/30 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{service.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      service.status === 'Excellent' ? 'bg-emerald-400/20 text-emerald-400' :
                      'bg-blue-400/20 text-blue-400'
                    }`}>
                      {service.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-slate-400" />
                    <span className="text-sm text-slate-400">{service.latency}</span>
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

export default LatencyMap;