import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2022 The E-Commerce Site. All rights reserved.</p>
            <div className="footer-links">
                <a href="/terms">Terms of Service</a>
                <a href="/privacy">Privacy Policy</a>
                <a href="/contact">Contact Us</a>
            </div>
        </footer>
    );
};

export default Footer;