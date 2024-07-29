// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length === 0) {
      alert('Password cannot be empty.');
      return;
    }

    // Perform login logic here
    dispatch(login({ email }));
    nav('/');
    alert('Register successful!');
  };

  return (
    <div>
      <div className='Register'>
        <form onSubmit={handleSubmit}>
          <div className='Register-container'>
            <h2>Register Your Account</h2>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            </div>
            <div>
            <label>UserName:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='Regbtn' type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;