import React from 'react';
import ServiceCard from '../components/ServiceCard';

const services = [
    { title: "E-Commerce Development", description: "Shopify & BigCommerce custom solutions." },
    { title: "Fintech & Payment Solutions", description: "Stripe API integrations and payment optimization." },
    { title: "Web Development", description: "Custom websites using React, Node.js, and MongoDB." },
    { title: "Support & Maintenance", description: "Ongoing support for Shopify, WordPress, and more." }
];

const Services = () => {
    return (
        <div className="container">
            <h1>Our Services</h1>
            <div className="service-list">
                {services.map((service, index) => (
                    <ServiceCard key={index} title={service.title} description={service.description} />
                ))}
            </div>
        </div>
    );
};

export default Services;
