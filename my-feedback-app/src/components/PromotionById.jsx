import { useState } from "react";
import { getPromotionById} from "../api/promotionApi";

const PromotionById = () => {
    const [promotion, setPromotion] = useState(null);
    const [promotionId, setPromotionId] = useState('');

    const fetchPromotions = async () => {
        try {
            const data = await getPromotionById(promotionId);
            setPromotion(data);
        } catch (error) {
            console.error('Błąd podczas pobierania promocji:', error);
        }
    };

    return (
        <div>
            <h1>Pobierz promocję po jej Id</h1>
            <input
                type="text"
                value={promotionId}
                onChange={e => setPromotionId(e.target.value)}
                placeholder="Wprowadź ID promocji"
            />
            <button onClick={fetchPromotions}>Pobierz promocję</button>
            {promotion && (
                <div>
                    <h2>{promotion.promotionName}</h2>
                    <p>{promotion.description}</p>
                    <p><strong>Wymagane punkty:</strong> {promotion.pointsRequired}</p>
                </div>
            )}
        </div>
    );
};

export default PromotionById;