// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const nav = useNavigate();
  const dispatch = useDispatch();
  
  // Simple role-based user credentials (for demonstration purposes)
  const adminCredentials = { email: 'chandru@example.com', password: '1234' };
  const userCredentials = { email: 'user@example.com', password: 'user123' };

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

    // Check credentials based on role
    let validCredentials = false;
    if (role === 'admin') {
      validCredentials = email === adminCredentials.email && password === adminCredentials.password;
    } else {
      validCredentials = email === userCredentials.email && password === userCredentials.password;
    }

    if (!validCredentials) {
      alert('Invalid email or password.');
      return;
    }

    // Perform login logic here
    dispatch(login({ email, role }));
    
    // Redirect based on role
    if (role === 'admin') {
      nav('/adminpanel'); // Redirect to admin dashboard
    } else {
      nav('/userdashboard');  // Redirect to user dashboard
    }

    alert('Login successful!');
  };

  return (
    <div>
      <div className='login'>
        <form onSubmit={handleSubmit}>
          <div className='login-container'>
            <h2>Login Your Account</h2>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button className='logbtn' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
    