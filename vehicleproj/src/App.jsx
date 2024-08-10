// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import UserDashboard from './Pages/UserDashboard';
import BookingForm from './components/BookingForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterPage from './Pages/RegisterPage';
import ServicesPage from './Pages/ServicesPage';
import ContactUs from './components/ContactUs';




const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/userdashboard" element={<UserDashboard />} />
                <Route path="/booking" element={<BookingForm />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/service" element={<ServicesPage />} />
            </Routes>
            <Footer />
        </Router>
        
    );
};

export default App;
