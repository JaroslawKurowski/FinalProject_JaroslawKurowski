import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateReportPage from './components/CreateReportPage';
import LoginPage from './components/LoginPage';
import ReportsPage from './components/ReportsPage';
import PromotionsPage from './components/PromotionsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} /> {/* Dodajemy trasę domyślną */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/create-report" element={<CreateReportPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/promotions" element={<PromotionsPage />} />
            </Routes>
        </Router>
    );
};

export default App;