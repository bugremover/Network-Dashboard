import React from 'react';
import { Activity, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-16 bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 px-6 flex items-center justify-between sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Activity className="w-6 h-6 text-cyan-400" />
        <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          CloudNet
        </h1>
      </div>

      {/* Status */}
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-sm text-slate-300">System Operational</span>
      </div>

      {/* Cluster Selector */}
      <button className="flex items-center space-x-2 bg-slate-700/50 hover:bg-slate-600/50 px-4 py-2 rounded-lg transition-colors">
        <span>production-cluster-01</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </header>
  );
}

export default Header