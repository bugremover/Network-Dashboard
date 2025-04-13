import React from 'react';
import { Bell, Shield, User, Monitor, Database } from 'lucide-react';

const Settings = () => {
  const settingSections = [
    {
      icon: User,
      title: 'User Preferences',
      settings: [
        { name: 'Theme', value: 'Dark', type: 'select' },
        { name: 'Timezone', value: 'UTC', type: 'select' },
        { name: 'Date Format', value: 'YYYY-MM-DD', type: 'select' },
      ]
    },
    {
      icon: Bell,
      title: 'Notifications',
      settings: [
        { name: 'Email Alerts', value: true, type: 'toggle' },
        { name: 'Push Notifications', value: true, type: 'toggle' },
        { name: 'Alert Threshold', value: '90%', type: 'input' },
      ]
    },
    {
      icon: Shield,
      title: 'Security',
      settings: [
        { name: 'Two-Factor Auth', value: true, type: 'toggle' },
        { name: 'API Key', value: '****-****-****', type: 'password' },
        { name: 'Session Timeout', value: '30 minutes', type: 'select' },
      ]
    },
    {
      icon: Monitor,
      title: 'Display',
      settings: [
        { name: 'Refresh Rate', value: '5s', type: 'select' },
        { name: 'Graph Animation', value: true, type: 'toggle' },
        { name: 'Compact View', value: false, type: 'toggle' },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      <div className="grid grid-cols-1 gap-6">
        {settingSections.map((section, index) => (
          <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
            <div className="flex items-center space-x-3 mb-6">
              <section.icon className="w-6 h-6 text-cyan-400" />
              <h2 className="text-xl font-semibold">{section.title}</h2>
            </div>

            <div className="space-y-4">
              {section.settings.map((setting, settingIndex) => (
                <div key={settingIndex} className="flex items-center justify-between">
                  <span className="text-slate-300">{setting.name}</span>
                  {setting.type === 'toggle' ? (
                    <button
                      className={`w-12 h-6 rounded-full p-1 transition-colors ${
                        setting.value ? 'bg-cyan-400' : 'bg-slate-600'
                      }`}
                    >
                      <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                        setting.value ? 'translate-x-6' : 'translate-x-0'
                      }`} />
                    </button>
                  ) : setting.type === 'select' ? (
                    <select className="bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2">
                      <option>{setting.value}</option>
                    </select>
                  ) : setting.type === 'password' ? (
                    <div className="flex items-center space-x-2">
                      <input
                        type="password"
                        value={setting.value}
                        readOnly
                        className="bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2"
                      />
                      <button className="text-cyan-400 hover:text-cyan-300">Show</button>
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={setting.value}
                      className="bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Settings;