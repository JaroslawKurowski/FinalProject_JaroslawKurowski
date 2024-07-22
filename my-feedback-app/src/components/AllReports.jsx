import { useEffect, useState } from 'react';
import { getAllReports, deleteReport } from '../api/reportApi';
import { useNavigate } from 'react-router-dom';

const AllReports = () => {
    const [reports, setReports] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllReports();
                setReports(data);
            } catch (error) {
                console.error('Błąd podczas pobierania zgłoszeń:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Czy na pewno chcesz usunąć to zgłoszenie?')) {
            try {
                await deleteReport(id);
                setReports(reports.filter(report => report.reportId !== id));
                alert('Zgłoszenie usunięto prawidłowo')
            } catch (error) {
                console.error('Błąd podczas usuwania zgłoszenia:', error);
                alert('Błąd podczas usuwania zgłoszenia')
            }
        }
    };

    return (
        <div className="page">
            <h1>Wszystkie zgłoszenia</h1>
            <ul>
                {reports.map((report, index) => (
                    <li key={index}>
                        <strong>Id zgłoszenia:</strong> {report.reportId}<br/>
                        <strong>Tytuł:</strong> {report.title}<br/>
                        <strong>Opis:</strong> {report.description}
                        <button onClick={() => navigate(`/reports/update/${report.reportId}`)}
                                className="form-button">Aktualizuj
                        </button>
                        <button onClick={() => handleDelete(report.reportId)} className="form-button">Usuń</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllReports;