import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Witamy w panelu głównym</h1>
            <button onClick={() => navigate('/reports')}>Zgłoszenia</button>
            <button onClick={() => navigate('/promotions')}>Promocje</button>
        </div>
    );
};

export default Dashboard;