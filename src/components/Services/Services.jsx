import React from 'react';
import './Services.css';
import ServiceImage from '../../assets/images/medical-service.jpg'

const Services = () => {
    return (
        <div className="services">
            <h1>My Services</h1>
            <div className="service-list">
                <div className="service-item">
                    <img src={ServiceImage} alt="Service 1" />
                    <h2>Service 1</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>
                <div className="service-item">
                    <img src={ServiceImage} alt="Service 2" />
                    <h2>Service 2</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>
                <div className="service-item">
                    <img src={ServiceImage} alt="Service 3" />
                    <h2>Service 3</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>
                <div className="service-item">
                    <img src={ServiceImage} alt="Service 4" />
                    <h2>Service 4</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>
                <div className="service-item">
                    <img src={ServiceImage} alt="Service 5" />
                    <h2>Service 5</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>
                <div className="service-item">
                    <img src={ServiceImage} alt="Service 6" />
                    <h2>Service 6</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                </div>
            </div>
        </div>
    );
}

export default Services;
