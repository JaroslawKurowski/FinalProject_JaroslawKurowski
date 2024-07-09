import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReportsPage from "./ReportsPage.jsx";

const LoginPage = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
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
            //tu dodać przekierowania do kolejnych podstron, a na każdej podstronie weryfikacja czy jest poprawny token w localStorage
            //ReportsPage()
        } else {
            alert('Login failed');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <div>
                <label>Login:</label>
                <input type="userName" value={userName} onChange={(e) => setUserName(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;