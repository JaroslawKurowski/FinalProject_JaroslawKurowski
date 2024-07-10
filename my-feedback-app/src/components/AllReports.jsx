import React, { useEffect, useState } from 'react';
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
        <div>
            <h1>Wszystkie zgłoszenia</h1>
            {reports.map(report => (
                <div key={report.reportId}>
                    <h2>{report.title}</h2>
                    <p>{report.description}</p>
                </div>
            ))}
        </div>
    );
};

export default AllReports;