const url = "https://localhost:7139/api/reports";

const getToken = () => localStorage.getItem('token');

export async function getAllReports() {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch reports");
    }

    return await response.json();
}

export async function getReportById(id) {
    const response = await fetch(`${url}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch report");
    }

    return await response.json();
}

export async function createReport(report) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
        body: JSON.stringify(report),
    });

    if (!response.ok) {
        throw new Error("Failed to create report");
    }

    return await response.json();
}

export async function updateReportStatus(id, status) {
    const response = await fetch(`${url}/${id}/status`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
        body: JSON.stringify({ status: parseInt(status, 10) }),
    });

    if (!response.ok) {
        throw new Error("Failed to update report status");
    }

    // Sprawdzenie, czy odpowiedź jest pusta, aby uniknąć błędu parsowania JSON
    const text = await response.text();
    if (!text) {
        return {}; // Zwróć pusty obiekt, jeśli odpowiedź jest pusta
    }

    return await response.json();
}

export async function deleteReport(id) {
    const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to delete report");
    }
}