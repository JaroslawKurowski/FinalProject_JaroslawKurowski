import { useState } from "react";
import { getPromotionById, updatePromotion } from "../api/promotionApi";

const UpdatePromotion = () => {
    const [promotionId, setPromotionId] = useState('');
    const [promotionName, setPromotionName] = useState('');
    const [description, setDescription] = useState('');
    const [pointsRequired, setPointsRequired] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await getPromotionById(promotionId);
            if (!data) {
                setErrorMessage('Promocja o podanym Id nie istnieje.');
                return;
            }

            await updatePromotion(promotionId, { promotionName, description, pointsRequired });
            alert('Promocja zaktualizowana pomyślnie!');
            setErrorMessage('');
        } catch (error) {
            console.error('Błąd podczas aktualizacji promocji:', error);
            setErrorMessage('Promocja o podanym Id nie istnieje.');
        }
    };

    return (
        <div className="page">
            <h1>Aktualizuj promocję</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={promotionId}
                    onChange={e => setPromotionId(e.target.value)}
                    placeholder="ID promocji"
                    required
                    className="form-input-small"
                />
                <input
                    type="text"
                    value={promotionName}
                    onChange={e => setPromotionName(e.target.value)}
                    placeholder="Nazwa promocji"
                    required
                    className="form-input"
                />
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Opis"
                    required
                    className="form-textarea"
                />
                <input
                    type="number"
                    value={pointsRequired}
                    onChange={e => setPointsRequired(e.target.value)}
                    placeholder="Wymagane punkty"
                    required
                    className="form-input-small"
                />
                <button type="submit" className="form-button">Aktualizuj promocję</button>
            </form>
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </div>
    );
};

export default UpdatePromotion;