import { useEffect, useState } from "react";
import { getAllPromotions, deletePromotion } from "../api/promotionApi";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";

const AllPromotions = () => {
    const [promotions, setPromotions] = useState([]);
    const navigate = useNavigate();

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

    const handleDelete = async (id) => {
        if (window.confirm('Czy na pewno chcesz usunąć tę promocję?')) {
            try {
                await deletePromotion(id);
                setPromotions(promotions.filter(promotion => promotion.promotionId !== id));
                toast.success('Promocja usunięta pomyślnie')
            } catch (error) {
                console.error('Błąd podczas usuwania promocji:', error)
                toast.error('Błąd podczas usuwania promocji')
            }
        }
    };

    return (
        <div className="page">
            <h1>Wszystkie promocje</h1>
            <ul>
                {promotions.map((promotion, index) => (
                    <li key={index}>
                        <strong>Id promocji:</strong> {promotion.promotionId}<br/>
                        <strong>Nazwa promocji:</strong> {promotion.promotionName}<br/>
                        <strong>Opis:</strong> {promotion.description}<br/>
                        <strong>Wymagane punkty:</strong> {promotion.pointsRequired}
                        <button onClick={() => navigate(`/promotions/update/${promotion.promotionId}`)} className="form-button">Aktualizuj</button>
                        <button onClick={() => handleDelete(promotion.promotionId)} className="form-button">Usuń</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AllPromotions;