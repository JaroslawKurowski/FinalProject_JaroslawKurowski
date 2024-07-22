import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReportById, updateReportStatus } from '../api/reportApi';

const UpdateReportStatus = () => {
    const { id } = useParams();
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [report, setReport] = useState(null);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const data = await getReportById(id);
                if (!data) {
                    setErrorMessage('Zgłoszenie o podanym Id nie istnieje.');
                } else {
                    setReport(data);
                    setErrorMessage('');
                }
            } catch (error) {
                console.error('Błąd podczas pobierania zgłoszenia:', error);
                setErrorMessage('Zgłoszenie o podanym Id nie istnieje.');
            }
        };

        fetchReport();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateReportStatus(id, status);
            alert('Status zgłoszenia zaktualizowany pomyślnie!');
            setErrorMessage('');
        } catch (error) {
            console.error('Błąd podczas aktualizacji statusu zgłoszenia:', error);
            setErrorMessage('Błąd podczas aktualizacji statusu zgłoszenia.');
        }
    };

    return (
        <div className="page">
            <h1>Aktualizuj status zgłoszenia</h1>
            {report && (
                <form onSubmit={handleSubmit} className="form">
                    <select
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                        required
                        className="form-input-small"
                    >
                        <option value="">Wybierz status</option>
                        <option value="0">Pending (0)</option>
                        <option value="1">InProgress (1)</option>
                        <option value="2">Resolved (2)</option>
                        <option value="3">Closed (3)</option>
                        <option value="4">Rejected (4)</option>
                    </select>
                    <button type="submit" className="form-button">Aktualizuj status</button>
                </form>
            )}
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </div>
    );
};

export default UpdateReportStatus;