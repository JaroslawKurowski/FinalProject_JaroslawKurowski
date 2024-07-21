import { useState } from 'react';
import { getReportById, updateReportStatus } from '../api/reportApi';

const UpdateReportStatus = () => {
    const [reportId, setReportId] = useState('');
    const [status, setStatus] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await getReportById(reportId);
            if (!data) {
                setErrorMessage('Zgłoszenie o podanym Id nie istnieje.');
                return;
            }

            await updateReportStatus(reportId, status);
            alert('Status zgłoszenia zaktualizowany pomyślnie!');
            setErrorMessage('');
        } catch (error) {
            console.error('Błąd podczas aktualizacji statusu zgłoszenia:', error);
            setErrorMessage('Zgłoszenie o podanym Id nie istnieje.');
        }
    };

    return (
        <div className="page">
            <h1>Aktualizuj status zgłoszenia</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={reportId}
                    onChange={e => setReportId(e.target.value)}
                    placeholder="ID zgłoszenia"
                    required
                    className="form-input-small"
                />
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
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </div>
    );
};

export default UpdateReportStatus;