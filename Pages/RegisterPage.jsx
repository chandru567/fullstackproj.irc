// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const nav = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Username is required.';
    }
    if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Perform login logic here
      dispatch(login({ email }));
      nav('/');
      alert('Registration successful!');
    }
  };

  return (
    <div>
      <div className='Register'>
        <form onSubmit={handleSubmit}>
          <div className='Register-container'>
            <h2>Register Your Account</h2>
            <div>
              <label>UserName:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <p className='error'>{errors.name}</p>}
            </div>
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className='error'>{errors.email}</p>}
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              
              {errors.password && <p className='error'>{errors.password}</p>}
            </div>
            <button className='Regbtn' type="submit">Register</button>
          </form>
          
        </div>
      </div>
    
  );
};

export default RegisterPage;
