// src/components/BookingForm.js
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const BookingForm = () => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [carType, setCarType] = useState('');
  const [bookingType, setBookingType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "bookings"), {
        pickup,
        drop,
        dateTime,
        carType,
        bookingType,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="Pickup Location" />
      <input type="text" value={drop} onChange={(e) => setDrop(e.target.value)} placeholder="Drop Location" />
      <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
      <select value={carType} onChange={(e) => setCarType(e.target.value)}>
        <option value="">Select Car Type</option>
        <option value="hatchback">Hatchback</option>
        <option value="sedan">Sedan</option>
        <option value="suv">SUV</option>
        <option value="luxury">Luxury</option>
      </select>
      <select value={bookingType} onChange={(e) => setBookingType(e.target.value)}>
        <option value="">Select Booking Type</option>
        <option value="hourly">Hourly</option>
        <option value="daily">Daily</option>
        <option value="monthly">Monthly</option>
        <option value="roundtrip">Roundtrip</option>
        <option value="oneway">One Way</option>
      </select>
      <button type="submit">Book Driver</button>
    </form>
  );
};

export default BookingForm;
