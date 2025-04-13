import React from 'react';
import QuickStats from '../components/QuickStats';
import TrafficPanel from '../components/TrafficPanel';
import SuspiciousFeed from '../components/SuspiciousFeed';
import NetworkMap from '../components/NetworkMap';
import LatencyMapComponent from '../components/LatencyMap';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <QuickStats />
        </div>
        <div className="col-span-8">
          <TrafficPanel />
        </div>
        <div className="col-span-4">
          <SuspiciousFeed />
        </div>
        <div className="col-span-8">
          <NetworkMap />
        </div>
        <div className="col-span-4">
          <LatencyMapComponent />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;