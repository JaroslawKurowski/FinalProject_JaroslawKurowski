import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="sidebar">
            <button onClick={() => navigate('/dashboard')} className="sidebar-button">Dashboard</button>
            <button onClick={() => navigate('/reports')} className="sidebar-button">Reports</button>
            <button onClick={() => navigate('/promotions')} className="sidebar-button">Promotions</button>
            <button onClick={handleLogout} className="sidebar-button logout-button">Wyloguj się</button>
        </div>
    );
};

export default Sidebar;