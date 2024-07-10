import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <button onClick={() => navigate('/reports')}>Reports</button>
            <button onClick={() => navigate('/promotions')}>Promotions</button>
        </div>
    );
};

export default Dashboard;