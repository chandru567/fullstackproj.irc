// src/pages/HomePage.jsx
import React from 'react';

import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    
    return (
        <div className='home'>
            
            <div className='home-container'>
            <main>
                <div className='home-p'>
                <h1>Welcome to the Vehicle Repair Hub</h1>
                <p><h5>A vehicle repair hub offers a wide range of services, including engine repair, transmission services, brake maintenance, tire replacement, and routine oil changes.Our team consists of certified and experienced technicians who are trained to work on a variety of vehicle makes and models. With their extensive knowledge and skill, they can handle everything from minor repairs to major overhauls. Whether you drive a domestic car, an imported vehicle, or a commercial truck, our technicians are equipped to provide the expert care your vehicle needs.</h5></p>
                <button  className='homebtn'type="submit"onClick={() => navigate('/service')}>GetStarted</button>
                </div>
                
            </main>
            </div>
            <Footer />
        </div>
    );
};

export default HomePage;
