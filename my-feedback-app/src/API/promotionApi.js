const url = "https://localhost:7139/api/promotions";

const getToken = () => localStorage.getItem('token');

export async function getAllPromotions() {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch promotions");
    }

    return await response.json();
}

export async function getPromotionById(id) {
    const response = await fetch(`${url}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch promotion");
    }

    return await response.json();
}

export async function createPromotion(promotion) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
        body: JSON.stringify(promotion),
    });

    if (!response.ok) {
        throw new Error("Failed to create promotion");
    }

    return await response.json();
}

export async function updatePromotion(id, promotion) {
    const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        },
        body: JSON.stringify(promotion)
    });

    if (!response.ok) {
        throw new Error("Failed to update promotion");
    }

    // Sprawdzenie, czy odpowiedź jest pusta, aby uniknąć błędu parsowania JSON
    const text = await response.text();
    if (!text) {
        return {}; // Zwróć pusty obiekt, jeśli odpowiedź jest pusta
    } //Ten fragment kodu jest konieczny, ponieważ serwer może zwrócić pustą odpowiedź po zakończeniu operacji aktualizacji. W takim przypadku próba przetworzenia pustej odpowiedzi jako JSON prowadzi do błędu SyntaxError: Unexpected end of JSON input.

    return await response.json();
}

export async function deletePromotion(id) {
    const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to delete promotion");
    }
}