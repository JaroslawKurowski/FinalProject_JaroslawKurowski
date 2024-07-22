import { useState } from 'react';
import { createReport } from '../api/reportApi';
import {toast} from "react-toastify";

const CreateReport = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createReport({ title, description });
            toast.success('Zgłoszenie utworzone pomyślnie!');
        } catch (error) {
            console.error('Błąd podczas tworzenia zgłoszenia:', error);
        }
    };

    return (
        <div className="page">
            <h1>Stwórz nowe zgłoszenie</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Tytuł"
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
                <button type="submit" className="form-button">Stwórz zgłoszenie</button>
            </form>
        </div>
    );
};

export default CreateReport;