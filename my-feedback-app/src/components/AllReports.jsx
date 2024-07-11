import { useEffect, useState } from 'react';
import { getAllReports } from '../api/reportApi';

const AllReports = () => {
    const [reports, setReports] = useState([]);

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

    return (
        <div className="page">
            <h1>Wszystkie zgłoszenia</h1>
            <ul>
                {reports.map((report, index) => (
                    <li key={index}>
                        <strong>Tytuł:</strong> {report.title}<br/>
                        <strong>Opis:</strong> {report.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllReports;