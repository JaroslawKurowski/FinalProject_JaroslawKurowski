import React, { useEffect, useState } from 'react';

const PromotionsPage = () => {
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        const fetchPromotions = async () => {
            const token = localStorage.getItem('token');
            const response = await fetch('https://localhost:7139/api/promotions', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setPromotions(data);
            } else {
                alert('Failed to fetch promotions');
            }
        };

        fetchPromotions();
    }, []);

    return (
        <div>
            <h1>Promotions</h1>
            <ul>
                {promotions.map(promotion => (
                    <li key={promotion.promotionId}>
                        {promotion.promotionName}: {promotion.description} (Points required: {promotion.pointsRequired})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PromotionsPage;