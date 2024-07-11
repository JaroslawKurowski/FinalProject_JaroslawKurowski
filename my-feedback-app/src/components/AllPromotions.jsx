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
        <div className="page">
            <h1>Wszystkie promocje</h1>
            <ul>
                {promotions.map((promotion, index) => (
                    <li key={index}>
                        <strong>Nazwa promocji:</strong> {promotion.promotionName}<br/>
                        <strong>Opis:</strong> {promotion.description}<br/>
                        <strong>Wymagane punkty:</strong> {promotion.pointsRequired}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllPromotions;