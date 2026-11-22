import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { SalonDemoPage } from './SalonDemoPage';
import './styles/salon.css';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Salon Demo Routes */}
        <Route path="/" element={<SalonDemoPage />} />
        <Route path="/demos/salon" element={<SalonDemoPage />} />

        {/* Fallback to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
