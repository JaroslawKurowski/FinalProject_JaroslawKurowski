import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getPromotionById, updatePromotion } from '../api/promotionApi';

const UpdatePromotion = () => {
    const { id } = useParams();
    const [promotionName, setPromotionName] = useState('');
    const [description, setDescription] = useState('');
    const [pointsRequired, setPointsRequired] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [promotion, setPromotion] = useState(null);

    useEffect(() => {
        const fetchPromotion = async () => {
            try {
                const data = await getPromotionById(id);
                if (!data) {
                    setErrorMessage('Promocja o podanym Id nie istnieje.');
                } else {
                    setPromotion(data);
                    setPromotionName(data.promotionName);
                    setDescription(data.description);
                    setPointsRequired(data.pointsRequired);
                    setErrorMessage('');
                }
            } catch (error) {
                console.error('Błąd podczas pobierania promocji:', error);
                setErrorMessage('Promocja o podanym Id nie istnieje.');
            }
        };

        fetchPromotion();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updatePromotion(id, { promotionName, description, pointsRequired });
            toast.success('Promocja zaktualizowana pomyślnie!');
            setErrorMessage('');
        } catch (error) {
            console.error('Błąd podczas aktualizacji promocji:', error);
            setErrorMessage('Błąd podczas aktualizacji promocji.');
            toast.error('Błąd podczas aktualizacji promocji.');
        }
    };

    return (
        <div className="page">
            <h1>Aktualizuj promocję</h1>
            {promotion && (
                <form onSubmit={handleSubmit} className="form">
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
            )}
            {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
        </div>
    );
};

export default UpdatePromotion;