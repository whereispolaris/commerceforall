import React from 'react';

const Contact = () => {
    return (
        <div className="container">
            <h1>Contact Us</h1>
            <p>Have questions? Get in touch with us today!</p>
            <form className="contact-form">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <textarea placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
