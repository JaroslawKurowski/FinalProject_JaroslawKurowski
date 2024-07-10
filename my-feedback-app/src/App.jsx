import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import ReportsDashboard from './components/ReportsDashboard';
import AllReports from './components/AllReports';
import ReportById from './components/ReportById';
import CreateReport from './components/CreateReport';
import UpdateReport from './components/UpdateReport';
import DeleteReport from './components/DeleteReport';
import PromotionsPage from './components/PromotionsPage';

const App = () => {
    const isAuthenticated = localStorage.getItem('token');

    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                {isAuthenticated ? (
                    <>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/reports" element={<ReportsDashboard />} />
                        <Route path="/reports/all" element={<AllReports />} />
                        <Route path="/reports/id" element={<ReportById />} />
                        <Route path="/reports/create" element={<CreateReport />} />
                        <Route path="/reports/update" element={<UpdateReport />} />
                        <Route path="/reports/delete" element={<DeleteReport />} />
                        <Route path="/promotions" element={<PromotionsPage />} />
                    </>
                ) : (
                    <Route path="*" element={<Navigate to="/login" />} />
                )}
            </Routes>
        </Router>
    );
};

export default App;