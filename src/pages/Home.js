import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <h1>Empowering Businesses with Seamless E-Commerce & Fintech Solutions</h1>
            <p>We specialize in Shopify, Stripe, and full-stack web development to scale your business.</p>
            <Link to="/services" className="cta-button">Explore Our Services</Link>
        </div>
    );
};

export default Home;
