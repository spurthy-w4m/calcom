import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import CalComCalendar from './components/CalComCalendar';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/calendar" element={<CalComCalendar />} />
          <Route path="*" element={<Navigate to="/calendar" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
