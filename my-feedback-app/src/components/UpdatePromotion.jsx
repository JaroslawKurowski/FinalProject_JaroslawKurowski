import { useState } from "react";
import { updatePromotion} from "../api/promotionApi";

const UpdatePromotion = () => {
    const [promotionId, setPromotionId] = useState('');
    const [promotionName, setPromotionName] = useState('');
    const [description, setDescription] = useState('');
    const [pointsRequired, setPointsRequired] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePromotion(promotionId, { promotionName, description, pointsRequired });
            alert('Promocja utworzona pomyślnie!');
        } catch (error) {
            console.error('Błąd podczas aktualizacji promocji:', error);
        }
    };

    return (
        <div>
            <h1>Aktualizuj promocję</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={promotionId}
                    onChange={e => setPromotionId(e.target.value)}
                    placeholder="ID promocji"
                    required
                />
                <input
                    type="text"
                    value={promotionName}
                    onChange={e => setPromotionName(e.target.value)}
                    placeholder="Nazwa promocji"
                    required
                />
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Opis"
                    required
                />
                <input
                    type="number"
                    value={pointsRequired}
                    onChange={e => setPointsRequired(e.target.value)}
                    placeholder="Wymagane punkty"
                    required
                />
            </form>
        </div>
    );
};

export default UpdatePromotion;