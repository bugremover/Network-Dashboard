import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Activity, AlertTriangle, BarChart3, Box, Globe, Home, Menu, Network, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Activity, label: 'Traffic', path: '/traffic' },
    { icon: Network, label: 'Latency Map', path: '/latency-map' },
    { icon: AlertTriangle, label: 'Suspicious Activity', path: '/suspicious-activity' },
    { icon: Globe, label: 'Pod Map', path: '/pod-map' },
    { icon: BarChart3, label: 'Analytics', path: '/analytics' },
    { icon: Box, label: 'Logs', path: '/logs' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <nav className={`
      bg-slate-800/50 backdrop-blur-sm border-r border-slate-700
      w-64 h-screen sticky top-0 transition-all duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      <div className="px-2 py-4">
        {navItems.map((item, index) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`
                w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all group
                ${isActive 
                  ? 'bg-slate-700/50 text-white' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'}
              `}
            >
              <item.icon className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'group-hover:text-cyan-400'} transition-colors`} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Sidebar;