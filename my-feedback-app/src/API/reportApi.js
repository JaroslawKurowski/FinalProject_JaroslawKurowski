const API_URL = "https://localhost:7139/api/reports";

async function createReport(report) {
    const token = localStorage.getItem('token');
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(report)
    });

    if (!response.ok) {
        const errorDetail = await response.text();
        throw new Error(`Failed to create report: ${errorDetail}`);
    }

    return await response.json();
}

export { createReport };