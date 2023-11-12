import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>The E-Commerce Site</h1>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
};

export default Header;