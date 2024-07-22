import { useNavigate } from 'react-router-dom';

const ReportsDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Panel zgłoszeń</h1>
            <button onClick={() => navigate('/reports/all')}>Pobierz wszystkie zgłoszenia</button>
            <button onClick={() => navigate('/reports/id')}>Pobierz zgłoszenie po jego Id</button>
            <button onClick={() => navigate('/reports/create')}>Stwórz nowe zgłoszenie</button>
        </div>
    );
};

export default ReportsDashboard;