import React from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetail.css'; // Make sure this CSS file is properly linked
import ServiceImage1 from '../../assets/images/medical-service.jpg';
import ServiceImage2 from '../../assets/images/service1.jpg';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    // Assuming serviceDetails now includes an image property that's used directly
    const serviceDetails = {
        '1': { title: 'Comprehensive Medical Consultation', description: 'Get a full health evaluation with our comprehensive medical consultation service. Our team of experts uses the latest diagnostic techniques to provide personalized care and recommendations.', image: ServiceImage1 },
        '2': { title: 'Advanced Diagnostic Testing', description: 'Benefit from our advanced diagnostic testing services, which utilize state-of-the-art technology to accurately diagnose and treat various conditions.', image: ServiceImage2 },
        // More services as needed
    };

    const service = serviceDetails[serviceId];

    return (
        <div className="service-detail">
            <div className="service-image">
                <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
            </div>
        </div>
    );
}

export default ServiceDetail;
