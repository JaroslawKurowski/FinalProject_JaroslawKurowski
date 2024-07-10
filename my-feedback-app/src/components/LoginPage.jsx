import React from 'react';
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
            alert('Logged in successfully');
            navigate('/dashboard'); // Przekierowanie po zalogowaniu
        } else {
            alert('Login failed');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username:</label>
                    <input type="text" name="userName" required/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" required/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;