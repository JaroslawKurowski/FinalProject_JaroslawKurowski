const url = "https://localhost:7139/api/promotions";

export async function getAllPromotions() {
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
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
        },
        body: JSON.stringify(promotion),
    });

    if (!response.ok) {
        throw new Error("Failed to update promotion");
    }

    return await response.json();
}

export async function deletePromotion(id) {
    const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to delete promotion");
    }
}