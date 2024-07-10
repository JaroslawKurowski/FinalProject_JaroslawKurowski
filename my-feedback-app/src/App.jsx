import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import ReportsPage from './components/ReportsPage';
import PromotionsPage from './components/PromotionsPage';
import Dashboard from './components/Dashboard';

const App = () => {
    const isAuthenticated = localStorage.getItem('token');

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    {isAuthenticated ? (
                        <>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/reports" element={<ReportsPage />} />
                            <Route path="/promotions" element={<PromotionsPage />} />
                        </>
                    ) : (
                        <Route path="*" element={<Navigate to="/login" />} />
                    )}
                </Routes>
            </div>
        </Router>
    );
};

export default App;