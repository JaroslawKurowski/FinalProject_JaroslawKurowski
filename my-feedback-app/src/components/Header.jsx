import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <header className="header">
            <h1>Feedback System</h1>
            <button onClick={handleLogout} className="logout-button">Wyloguj się</button>
        </header>
    );
};

export default Header;