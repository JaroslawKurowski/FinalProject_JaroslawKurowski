import { useState } from 'react';
import { getReportById, deleteReport } from "../api/reportApi";
import {toast} from "react-toastify";

const DeleteReport = () => {
    const [reportId, setReportId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Sprawdzamy, czy zgłoszenie istnieje
            const report = await getReportById(reportId);
            if (!report) {
                setErrorMessage('Zgłoszenie o podanym Id nie istnieje.');
                return;
            }

            // Jeśli zgłoszenie istnieje, próbujemy je usunąć
            await deleteReport(reportId);
            toast.success('Zgłoszenie usunięte pomyślnie!');
            setErrorMessage(''); // Czyścimy komunikat o błędzie po pomyślnym usunięciu
        } catch (error) {
            console.error('Błąd podczas usuwania zgłoszenia:', error);
            setErrorMessage('Zgłoszenie o podanym Id nie istnieje.');
            toast.error('Błąd podczas usuwania zgłoszenia');
        }
    };

    return (
        <div className="page">
            <h1>Usuń zgłoszenie</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={reportId}
                    onChange={e => setReportId(e.target.value)}
                    placeholder="Wprowadź ID zgłoszenia"
                    required
                    className="form-input-small"
                />
                <button type="submit" className="form-button">Usuń zgłoszenie</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default DeleteReport;