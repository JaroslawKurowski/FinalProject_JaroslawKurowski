import { useState } from 'react';
import { deletePromotion} from "../api/promotionApi";

const DeletePromotion = () => {
    const [promotionid, setPromotionId] = useState('');

    const handleDelete = async () => {
        try {
            await deletePromotion(promotionid);
            alert('Promocja usunięta pomyślnie!');
        } catch (error) {
            console.error('Błąd podczas usuwania promocji:', error);
        }
    };

    return (
        <div>
            <h1>Usuń promocję</h1>
            <input
                type="text"
                value={promotionid}
                onChange={e => setPromotionId(e.target.value)}
                placeholder="Wprowadź ID promocji"
                required
            />
            <button onClick={handleDelete}>Usuń promocję</button>
        </div>
    );
};

export default DeletePromotion;