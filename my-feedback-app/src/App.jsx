import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';
import Header from './components/Header';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import ReportsDashboard from './components/ReportsDashboard';
import AllReports from './components/AllReports';
import ReportById from './components/ReportById';
import CreateReport from './components/CreateReport';
import UpdateReportStatus from './components/UpdateReportStatus.jsx';
import PromotionsDashboard from './components/PromotionsDashboard';
import AllPromotions from './components/AllPromotions';
import PromotionById from './components/PromotionById';
import CreatePromotion from './components/CreatePromotion';
import UpdatePromotion from './components/UpdatePromotion';
import './App.css';

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
                        <Route path="/reports/update/:id" element={<UpdateReportStatus />} />
                        <Route path="/promotions" element={<PromotionsDashboard />} />
                        <Route path="/promotions/all" element={<AllPromotions />} />
                        <Route path="/promotions/id" element={<PromotionById />} />
                        <Route path="/promotions/create" element={<CreatePromotion />} />
                        <Route path="/promotions/update/:id" element={<UpdatePromotion />} />
                    </>
                ) : (
                    <Route path="*" element={<Navigate to="/login" />} />
                )}
            </Routes>
        </Router>
    );
};

export default App;