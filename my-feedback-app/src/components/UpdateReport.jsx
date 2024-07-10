import React, { useState } from 'react';
import { updateReport } from '../api/reportApi';

const UpdateReport = () => {
    const [reportId, setReportId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateReport(reportId, { title, description });
            alert('Zgłoszenie zaktualizowane pomyślnie!');
        } catch (error) {
            console.error('Błąd podczas aktualizacji zgłoszenia:', error);
        }
    };

    return (
        <div>
            <h1>Aktualizuj zgłoszenie</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={reportId}
                    onChange={e => setReportId(e.target.value)}
                    placeholder="ID zgłoszenia"
                    required
                />
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Tytuł"
                    required
                />
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Opis"
                    required
                />
                <button type="submit">Aktualizuj zgłoszenie</button>
            </form>
        </div>
    );
};

export default UpdateReport;