import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import ReportsPage from './components/ReportsPage';
import PromotionsPage from './components/PromotionsPage';

const App = () => {
    const isAuthenticated = localStorage.getItem('token');

    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    {isAuthenticated && (
                        <>
                            <Route path="/reports" element={<ReportsPage />} />
                            <Route path="/promotions" element={<PromotionsPage />} />
                        </>
                    )}
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;