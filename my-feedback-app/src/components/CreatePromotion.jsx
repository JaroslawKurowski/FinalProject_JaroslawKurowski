import { useState } from "react";
import { createPromotion } from "../api/promotionApi";
import {toast} from "react-toastify";

const CreatePromotion = () => {
    const [promotionName, setPromotionName] = useState('');
    const [description, setDescription] = useState('');
    const [pointsRequired, setPointsRequired] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPromotion({ promotionName, description, pointsRequired });
            toast.success('Promocja utworzona pomyślnie!');
        } catch (error) {
            console.error('Błąd podczas tworzenia promocji:', error);
        }
    };

    return (
      <div className="page">
          <h1>Stwórz nową promocję</h1>
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
                  className="form-input"
              />
              <button type="submit" className="form-button">Stwórz promocję</button>
          </form>
      </div>
    );
};

export default CreatePromotion;