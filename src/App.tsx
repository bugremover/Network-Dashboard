import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Traffic from './pages/Traffic';
import LatencyMap from './pages/LatencyMap';
import SuspiciousActivity from './pages/SuspiciousActivity';
import PodMap from './pages/PodMap';
import Analytics from './pages/Analytics';
import Logs from './pages/Logs';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/traffic" element={<Traffic />} />
          <Route path="/latency-map" element={<LatencyMap />} />
          <Route path="/suspicious-activity" element={<SuspiciousActivity />} />
          <Route path="/pod-map" element={<PodMap />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;