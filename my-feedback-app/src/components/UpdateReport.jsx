import { useState } from 'react';
import { getReportById, updateReport } from '../api/reportApi';

const UpdateReport = () => {
    const [reportId, setReportId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sprawdzenie, czy zgłoszenie istnieje
            const data = await getReportById(reportId);
            if (!data) {
                setErrorMessage('Zgłoszenie o podanym Id nie istnieje.');
                return;
            }
            // Aktualizacja zgłoszenia
            await updateReport(reportId, { title, description });
            alert('Zgłoszenie zaktualizowane pomyślnie!');
            setErrorMessage('');
        } catch (error) {
            console.error('Błąd podczas aktualizacji zgłoszenia:', error);
            setErrorMessage('Błąd podczas aktualizacji zgłoszenia.');
        }
    };

    return (
        <div className="page">
            <h1>Aktualizuj zgłoszenie</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={reportId}
                    onChange={e => setReportId(e.target.value)}
                    placeholder="ID zgłoszenia"
                    required
                    className="form-input-small"
                />
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Tytuł"
                    required
                    className="form-input"
                />
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Opis"
                    required
                    className="form-textarea"
                />
                <button type="submit" className="form-button">Aktualizuj zgłoszenie</button>
            </form>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </div>
    );
};

export default UpdateReport;