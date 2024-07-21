import { useState } from 'react';
import { getReportById } from '../api/reportApi';

const ReportById = () => {
    const [report, setReport] = useState(null);
    const [reportId, setReportId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await getReportById(reportId);
            if (!data) {
                setErrorMessage('Zgłoszenie o podanym Id nie istnieje.');
                setReport(null);
                return;
            }
            setReport(data);
            setErrorMessage('');
        } catch (error) {
            console.error('Błąd podczas pobierania zgłoszenia:', error);
            setErrorMessage('Zgłoszenie o podanym Id nie istnieje.')
            setReport(null)
        }
    };

    return (
        <div className="page">
            <h1>Pobierz zgłoszenie po jego Id</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={reportId}
                    onChange={e => setReportId(e.target.value)}
                    placeholder="Wprowadź ID zgłoszenia"
                    className="form-input-small"
                />
                <button type="submit" className="form-button">Pobierz zgłoszenie</button>
            </form>
                {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                {report && (
                    <div>
                        <h2>{report.title}</h2>
                        <p>{report.description}</p>
                    </div>
                )}
        </div>
);
};

export default ReportById;