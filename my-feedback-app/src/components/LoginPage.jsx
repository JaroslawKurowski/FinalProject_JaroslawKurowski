import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const userName = event.target.userName.value;
        const password = event.target.password.value;

        const response = await fetch('https://localhost:7139/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ userName, password })
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            alert('Zalogowano pomyślnie');
            navigate('/dashboard'); // Przekierowanie po zalogowaniu
            window.location.reload(); // Przeładuj stronę, aby zaktualizować stan autoryzacji
        } else {
            alert('Logowanie niepoprawne');
        }
    };

    return (
        <div className="container">
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

export default LoginPage;