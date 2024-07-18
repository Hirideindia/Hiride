import React, { useState } from 'react';
import { firestore } from '../firebase';
import './BookingForm.css';

function BookingForm() {
  const [fromAddress, setFromAddress] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [packageType, setPackageType] = useState('');
  const [carType, setCarType] = useState('');
  const [transmission, setTransmission] = useState('');
  const [estimatedFare, setEstimatedFare] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    firestore.collection('bookings').add({
      fromAddress,
      toAddress,
      pickupDate,
      dropoffDate,
      packageType,
      carType,
      transmission,
      estimatedFare,
    }).then(() => {
      alert('Booking Confirmed');
    }).catch((error) => {
      alert('Error: ' + error.message);
    });
  };

  const calculateFare = () => {
    // Implement fare calculation logic
    setEstimatedFare('Estimated Fare Calculation');
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div>
        <label>From Address:</label>
        <input type="text" value={fromAddress} onChange={(e) => setFromAddress(e.target.value)} required />
      </div>
      <div>
        <label>To Address:</label>
        <input type="text" value={toAddress} onChange={(e) => setToAddress(e.target.value)} required />
      </div>
      <div>
        <label>Pickup Date & Time:</label>
        <input type="datetime-local" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} required />
      </div>
      <div>
        <label>Dropoff Date & Time:</label>
        <input type="datetime-local" value={dropoffDate} onChange={(e) => setDropoffDate(e.target.value)} required />
      </div>
      <div>
        <label>Package:</label>
        <select value={packageType} onChange={(e) => setPackageType(e.target.value)} required>
          <option value="RoundTrip">RoundTrip</option>
          <option value="Oneway">Oneway</option>
          <option value="Monthly">Monthly</option>
          <option value="Outstation">Outstation</option>
        </select>
      </div>
      <div>
        <label>Car Type:</label>
        <select value={carType} onChange={(e) => setCarType(e.target.value)} required>
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>
      <div>
        <label>Transmission:</label>
        <select value={transmission} onChange={(e) => setTransmission(e.target.value)} required>
          <option value="Manual">Manual</option>
          <option value="Automatic">Automatic</option>
        </select>
      </div>
      <div>
        <label>Estimated Fare:</label>
        <input type="text" value={estimatedFare} onChange={(e) => setEstimatedFare(e.target.value)} required />
      </div>
      <button type="submit" onClick={calculateFare}>Confirm Booking</button>
    </form>
  );
}

export default BookingForm;
