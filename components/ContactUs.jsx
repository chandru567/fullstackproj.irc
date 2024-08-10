// src/components/ContactUs.jsx
import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = 'Invalid email address';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Here you would typically send the data to your server
      console.log('Form submitted:', formData);
      alert('Thank you for contacting us. We will get back to you shortly.');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div className="contact-us">
    <div className="contact">
      
      <p>If you have any questions or need assistance, please reach out to us using the form below.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <h1>Contact Us</h1>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {formErrors.name && <p className="error">{formErrors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          {formErrors.message && <p className="error">{formErrors.message}</p>}
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="address">
        <h2>Our Address</h2>
        <p>Vehicle Repair Hub</p>
        <p>Kovaipudur</p>
        <p>Coimbatore, PIN 641042</p>
        <p>Phone: 9876543210,9876567890,9871234569</p>
        <p>Email: carhub@vehiclerepairhub.com</p>
      </div>
      <div className="additional-info">
        <h2>Additional Information</h2>
        <p>We are committed to providing high-quality vehicle repair services. Our team of experienced mechanics is here to assist you with any vehicle issues you may have. Feel free to contact us or visit our location for prompt and professional service.</p>
        <p>Our repair facility is open Monday through Friday, from 8 AM to 6 PM. We look forward to helping you get back on the road quickly and safely.</p>
      </div>
    </div>
    </div>
  );
};

export default ContactUs;
