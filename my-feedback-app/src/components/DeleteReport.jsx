import React, { useState } from 'react';
import { deleteReport } from '../api/reportApi';

const DeleteReport = () => {
    const [reportId, setReportId] = useState('');

    const handleDelete = async () => {
        try {
            await deleteReport(reportId);
            alert('Zgłoszenie usunięte pomyślnie!');
        } catch (error) {
            console.error('Błąd podczas usuwania zgłoszenia:', error);
        }
    };

    return (
        <div>
            <h1>Usuń zgłoszenie</h1>
            <input
                type="text"
                value={reportId}
                onChange={e => setReportId(e.target.value)}
                placeholder="Wprowadź ID zgłoszenia"
                required
            />
            <button onClick={handleDelete}>Usuń zgłoszenie</button>
        </div>
    );
};

export default DeleteReport;