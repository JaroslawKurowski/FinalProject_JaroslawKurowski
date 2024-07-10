import { useEffect, useState } from "react";
import { getAllPromotions } from "../api/promotionApi";

const AllPromotions = () => {
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllPromotions();

                setPromotions(data);
            } catch (error) {
                console.error('Błąd podczas pobierania promocji: ', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Wszystkie promocje</h1>
            {promotions.map(promotion => (
                <div key={promotion.id}>
                    <h2>{promotion.promotionName}</h2>
                    <p>{promotion.description}</p>
                    <p><strong>Wymagane punkty:</strong> {promotion.pointsRequired}</p>
                </div>
            ))}
        </div>
    );
};

export default AllPromotions;