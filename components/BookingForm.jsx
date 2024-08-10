// src/components/BookingForm.jsx

import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string().matches(/^\d{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
  vehicleType: yup.string().required('Vehicle type is required'),
  issue: yup.string().required('Issue description is required')
});

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log('Form data:', data);
    // Here you would typically send the data to an API or perform other actions
    alert('Booking successfully submitted!');
    reset(); // Reset form after successful submission
  };

  return (
    <div className="booking-form">
    <div className="booking-form1">
      
      <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Book Now</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" {...register('name')} />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register('email')} />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" {...register('phone')} />
          {errors.phone && <p className="error">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="vehicleType">Vehicle Type</label>
          <input id="vehicleType" {...register('vehicleType')} />
          {errors.vehicleType && <p className="error">{errors.vehicleType.message}</p>}
        </div>

        <div>
          <label htmlFor="issue">Issue Description</label>
          <textarea id="issue" {...register('issue')} />
          {errors.issue && <p className="error">{errors.issue.message}</p>}
        </div>

        <button type="submit">Book Appointment</button>
      </form>
    </div>
    </div>
  );
};

export default BookingForm;
