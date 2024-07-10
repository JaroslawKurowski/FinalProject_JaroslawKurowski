import React, { useState } from 'react';
import { createReport } from '../api/reportApi';

const CreateReport = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createReport({ title, description });
            alert('Zgłoszenie utworzone pomyślnie!');
        } catch (error) {
            console.error('Błąd podczas tworzenia zgłoszenia:', error);
        }
    };

    return (
        <div>
            <h1>Stwórz nowe zgłoszenie</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Tytuł"
                    required
                />
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Opis"
                    required
                />
                <button type="submit">Stwórz zgłoszenie</button>
            </form>
        </div>
    );
};

export default CreateReport;