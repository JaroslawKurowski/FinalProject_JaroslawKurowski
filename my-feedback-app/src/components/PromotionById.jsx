import { useState } from "react";
import { getPromotionById } from "../api/promotionApi";

const PromotionById = () => {
    const [promotion, setPromotion] = useState(null);
    const [promotionId, setPromotionId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await getPromotionById(promotionId);
            if (!data) {
                setErrorMessage('Promocja o podanym Id nie istnieje.');
                setPromotion(null);
                return;
            }
            setPromotion(data);
            setErrorMessage('');
        } catch (error) {
            console.error('Błąd podczas pobierania promocji:', error);
            setErrorMessage('Promocja o podanym Id nie istnieje.');
            setPromotion(null);
        }
    };

    return (
        <div className="page">
            <h1>Pobierz promocję po jej Id</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={promotionId}
                    onChange={e => setPromotionId(e.target.value)}
                    placeholder="Wprowadź ID promocji"
                    className="form-input-small"
                />
                <button type="submit" className="form-button">Pobierz promocję</button>
            </form>
                {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
                {promotion && (
                    <div className="promotion-card">
                        <h2>{promotion.promotionName}</h2>
                        <p>{promotion.description}</p>
                        <p><strong>Wymagane punkty:</strong> {promotion.pointsRequired}</p>
                    </div>
                )}
        </div>
);
};

export default PromotionById;