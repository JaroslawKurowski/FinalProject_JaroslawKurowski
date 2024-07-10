import { useState } from "react";
import { createPromotion } from "../api/promotionApi";

const CreatePromotion = () => {
    const [promotionName, setPromotionName] = useState('');
    const [description, setDescription] = useState('');
    const [pointsRequired, setPointsRequired] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPromotion({ promotionName, description, pointsRequired });
            alert('Promocja utworzona pomyślnie!');
        } catch (error) {
            console.error('Błąd podczas tworzenia promocji:', error);
        }
    };

    return (
      <div>
          <h1>Stwórz nową promocję</h1>
          <form onSubmit={handleSubmit}>
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
              <button type="submit">Stwórz promocję</button>
          </form>
      </div>
    );
};

export default CreatePromotion;