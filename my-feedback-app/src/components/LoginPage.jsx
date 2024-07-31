import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {useState} from "react";

const LoginPage = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = async (event) => {
        event.preventDefault();
        setLoading(true); // Ustawia loading na true, gdy rozpoczyna się proces logowania
        const userName = event.target.userName.value;
        const password = event.target.password.value;

        const response = await fetch('https://localhost:7139/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName, password })
        });

        setLoading(false); // Ustawia loading na false, gdy proces logowania jest zakończony

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            toast.success('Zalogowano pomyślnie');
            navigate('/dashboard'); // Przekierowanie po zalogowaniu
        } else {
            toast.error('Logowanie niepoprawne');
        }
    };

    return (
        <div className="container">
            {loading && <LoadingScreen />} {/* Wyświetla ekran ładowania, gdy loading jest true */}
            <div className="login-form">
                <h2>Logowanie</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <label>Username:</label>
                        <input type="text" name="userName" required className="form-input"/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password" required className="form-input"/>
                    </div>
                    <button type="submit" className="form-button">Zaloguj się</button>
                </form>
            </div>
        </div>
    );
};

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="loading-spinner"></div>
        </div>
    );
};

export default LoginPage;