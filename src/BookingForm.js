// src/BookingForm.js
import React, { useState } from 'react';
import { db } from './firebase';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    pickupLocation: '',
    dropoffLocation: '',
    additionalRequirements: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection('bookings').add(formData);
      alert('Booking successful!');
    } catch (error) {
      console.error('Error adding booking: ', error);
      alert('Failed to book a driver.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </label>
      <label>
        Time:
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </label>
      <label>
        Pickup Location:
        <input type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} required />
      </label>
      <label>
        Dropoff Location:
        <input type="text" name="dropoffLocation" value={formData.dropoffLocation} onChange={handleChange} required />
      </label>
      <label>
        Additional Requirements:
        <textarea name="additionalRequirements" value={formData.additionalRequirements} onChange={handleChange}></textarea>
      </label>
      <button type="submit">Book Driver</button>
    </form>
  );
};

export default BookingForm;
