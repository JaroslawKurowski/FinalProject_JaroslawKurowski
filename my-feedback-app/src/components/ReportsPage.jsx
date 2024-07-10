import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReportsPage = () => {
    const navigate = useNavigate();
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');  // Przekierowanie do strony logowania, jeśli token nie jest dostępny
        } else {
            fetchReports(token);
        }
    }, [navigate]);

    const fetchReports = async (token) => {
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

    return (
        <div className="container">
            <h2>Reports</h2>
            <ul>
                {reports.map(report => (
                    <li key={report.reportId}>
                        <strong>Title:</strong> {report.title}<br/>
                        <strong>Description:</strong> {report.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReportsPage;