import { useState } from 'react';
import { getPromotionById, deletePromotion} from "../api/promotionApi";

const DeletePromotion = () => {
    const [promotionId, setPromotionId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const promotion = await getPromotionById(promotionId);
            if (!promotion) {
                setErrorMessage('Promocja o podanym Id nie istnieje.');
                return;
            }

            await deletePromotion(promotionId);
            alert('Promocja usunięta pomyślnie!');
            setErrorMessage('');
        } catch (error) {
            console.error('Błąd podczas usuwania promocji:', error);
            setErrorMessage('Promocja o podanym Id nie istnieje.');
        }
    };

    return (
        <div className="page">
            <h1>Usuń promocję</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={promotionId}
                    onChange={e => setPromotionId(e.target.value)}
                    placeholder="Wprowadź ID promocji"
                    required
                    className="form-input-small"
                />
                <button type="submit" className="form-button">Usuń promocję</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default DeletePromotion;