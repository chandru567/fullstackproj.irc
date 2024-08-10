import React from 'react';
import { useNavigate } from 'react-router-dom';
import oilchange from '../assets/oilt.jpg';
import brake from '../assets/brake.jpg';
import steer from '../assets/steering.jpg';
import engine from '../assets/engine.jpg';
import wash from '../assets/carwash.jpg';
import gas from '../assets/air.jpg';
import tyre from '../assets/tyre.jpg';
import parts from '../assets/motor.jpg';
import alter from '../assets/alter.jpg';
import exhauster from '../assets/exhauster.jpg';
import silencer from '../assets/silencer.jpg';
import paint from '../assets/work.jpg';




const services = [
    
    {
        id: 1,
        title: 'Oil Change',
        image: oilchange
    },
    {
        id: 2,
        title: 'Brake Repair',
        image: brake
    },
    {
        id: 3,
        title: 'Engine Service',
        image: engine
    },
    {
        id: 4,
        title: 'Steering',
        image: steer
    },
    {
        id: 5,
        title: 'Washing',
        image: wash
    },
    {
        id: 6,
        title: 'Air Check',
        image: gas
    },
    {
        id: 7,
        title: 'Motors',
        image: parts
    },
    {
        id: 8,
        title: 'Tyre Service',
        image: tyre
    },
    {
        id: 9,
        title: 'Silencer',
        image: silencer
    },
    {
        id: 10,
        title: 'Painting',
        image: paint
    },
    {
        id: 11,
        title: 'Exhauster',
        image: exhauster
    },
    {
        id: 12,
        title: 'Alteration',
        image: alter
    }
];

const Service = () => {
    const navigate = useNavigate();
    return (
        <div className='service-container'>
            <header>
                <h1>Vehicle Repair Hub Services</h1>
            </header>
            <main>
                <div className='shead'>
                <h1>Our Services</h1>
                </div>
                <section className="services">
               
                    {services.map(service => (
                        <div key={service.id} className="service">
                            <img src={service.image} alt={service.title} />
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <button className='sbtn' type="submit"onClick={() => navigate('/booking')}>get</button>
                        </div>
                    ))}
                </section>
            </main>
            
        </div>
    );
};

export default Service;
