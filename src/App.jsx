// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Footer from './components/Footer';
import UserDashboard from './Pages/UserDashboard';
import AdminDashboard from './Pages/AdminDashboard';



const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/userdashboard" element={<UserDashboard />} />
                <Route path="/admindashboard" element={<AdminDashboard />} />
            </Routes>
            <Footer />
        </Router>
        
    );
};

export default App;
