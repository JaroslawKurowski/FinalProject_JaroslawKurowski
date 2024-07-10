import React from 'react';
import { useNavigate } from 'react-router-dom';

const PromotionsDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="container">
            <h1>Panel promocji</h1>
            <button onClick={() => navigate('/promotions/all')}>Pobierz wszystkie promocje</button>
            <button onClick={() => navigate('/promotions/id')}>Pobierz promocję po jej Id</button>
            <button onClick={() => navigate('/promotions/create')}>Stwórz nową promocję</button>
            <button onClick={() => navigate('/promotions/update')}>Aktualizuj promocję</button>
            <button onClick={() => navigate('/promotions/delete')}>Usuń promocję</button>
        </div>
    );
};

export default PromotionsDashboard;