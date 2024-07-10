import React, { useState } from 'react';
import { getReportById } from '../api/reportApi';

const ReportById = () => {
    const [report, setReport] = useState(null);
    const [reportId, setReportId] = useState('');

    const fetchReport = async () => {
        try {
            const data = await getReportById(reportId);
            setReport(data);
        } catch (error) {
            console.error('Błąd podczas pobierania zgłoszenia:', error);
        }
    };

    return (
        <div>
            <h1>Pobierz zgłoszenie po jego Id</h1>
            <input
                type="text"
                value={reportId}
                onChange={e => setReportId(e.target.value)}
                placeholder="Wprowadź ID zgłoszenia"
            />
            <button onClick={fetchReport}>Pobierz zgłoszenie</button>
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