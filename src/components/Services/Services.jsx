import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Services.css';
import ServiceImage from '../../assets/images/medical-service.jpg';
import ServiceImage1 from '../../assets/images/service1.jpg';

const Services = () => {
    return (
        <div className="services">
            <h1>My Services</h1>
            <div className="service-list">
                {/* Wrap each service item with a Link */}
                <Link to="/services/1" className="service-item">
                    <img src={ServiceImage} alt="Service 1" />
                    <h2>Service 1</h2>
                    <p>Lorem Ipsum is simply dummy text...</p>
                </Link>
                <Link to="/services/2" className="service-item">
                    <img src={ServiceImage1} alt="Service 2" />
                    <h2>Service 2</h2>
                    <p>Lorem Ipsum is simply dummy text...</p>
                </Link>
                {/* Repeat for other services */}
            </div>
        </div>
    );
}

export default Services;
