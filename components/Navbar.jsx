// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='nav'>
                <h2>Repair Hub</h2>
            </div>
            
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/service">Services</Link>
            <Link to="/contact">Contact</Link>
            
        
        </nav>
    );
};

export default Navbar;
