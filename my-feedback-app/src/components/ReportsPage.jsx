import React, { useEffect, useState } from 'react';

const ReportsPage = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('https://localhost:7139/api/reports', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setReports(data);
            } else {
                alert('Failed to fetch reports');
            }
        };

        fetchReports();
    }, []);

    return (
        <div>
            <h1>Reports</h1>
            <ul>
                {reports.map(report => (
                    <li key={report.reportId}>
                        {report.title}: {report.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReportsPage;