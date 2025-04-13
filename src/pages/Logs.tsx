import React, { useState } from 'react';
import { Search, Filter, Download } from 'lucide-react';

const Logs = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const logs = [
    { timestamp: '2024-03-15 14:23:45', level: 'ERROR', message: 'Connection refused to database', service: 'auth-service' },
    { timestamp: '2024-03-15 14:23:42', level: 'INFO', message: 'User authentication successful', service: 'auth-service' },
    { timestamp: '2024-03-15 14:23:40', level: 'WARN', message: 'High memory usage detected', service: 'monitoring' },
    { timestamp: '2024-03-15 14:23:38', level: 'INFO', message: 'Cache cleared successfully', service: 'cache-service' },
    { timestamp: '2024-03-15 14:23:35', level: 'ERROR', message: 'API rate limit exceeded', service: 'api-gateway' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">System Logs</h1>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors">
            <Filter className="w-4 h-4" />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 rounded-lg hover:bg-slate-600/50 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search logs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-cyan-400 transition-colors"
        />
      </div>

      {/* Logs Table */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left bg-slate-700/50">
                <th className="px-6 py-4 text-slate-300">Timestamp</th>
                <th className="px-6 py-4 text-slate-300">Level</th>
                <th className="px-6 py-4 text-slate-300">Service</th>
                <th className="px-6 py-4 text-slate-300">Message</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index} className="border-t border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                  <td className="px-6 py-4 font-mono text-sm">{log.timestamp}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      log.level === 'ERROR' ? 'bg-rose-400/20 text-rose-400' :
                      log.level === 'WARN' ? 'bg-amber-400/20 text-amber-400' :
                      'bg-emerald-400/20 text-emerald-400'
                    }`}>
                      {log.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-300">{log.service}</td>
                  <td className="px-6 py-4 text-slate-300">{log.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Logs;