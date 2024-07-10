import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PromotionsPage = () => {
    const navigate = useNavigate();
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        } else {
            fetchPromotions(token);
        }
    }, [navigate]);

    const fetchPromotions = async (token) => {
        const response = await fetch('https://localhost:7139/api/promotions', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data);  // Dodane logowanie do konsoli
            setPromotions(data);
        } else {
            alert('Failed to fetch promotions');
        }
    };

    return (
        <div className="container">
            <h2>Promotions</h2>
            <ul>
                {promotions.map(promotion => (
                    <li key={promotion.promotionId}>
                        <strong>Promotion Name:</strong> {promotion.promotionName}<br/>
                        <strong>Description:</strong> {promotion.description}<br/>
                        <strong>Points Required:</strong> {promotion.pointsRequired}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PromotionsPage;


/*import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Promotion = ({ data }) => {
    return (
        <li>
            <strong>Promotion Name:</strong> {data.promotionName}<br/>
            <strong>Description:</strong> {data.description}<br/>
            <strong>Points Required:</strong> {data.pointsRequired}
        </li>
    );
};

Promotion.propTypes = {
    data: PropTypes.shape({
        promotionId: PropTypes.number.isRequired,
        promotionName: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        pointsRequired: PropTypes.number.isRequired,
    })
};

const PromotionsPage = () => {
    const navigate = useNavigate();
    const [promotions, setPromotions] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        } else {
            fetchPromotions(token);
        }
    }, [navigate]);

    const fetchPromotions = async (token) => {
        const response = await fetch('https://localhost:7139/api/promotions', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        if (response.ok) {
            const data = await response.json();
            console.log(data); // Sprawdzenie danych z API
            setPromotions(data);
        } else {
            alert('Failed to fetch promotions');
        }
    };

    return (
        <div>
            <h2>Promotions</h2>
            <ul>
                {promotions.map(promotion => (
                    <Promotion data={promotion} key={promotion.promotionId} />
                ))}
            </ul>
        </div>
    );
};

export default PromotionsPage;

 */