import React, { useState } from 'react';
import { firestore } from '../firebaseConfig';

function BookingForm() {
  const [name, setName] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await firestore.collection('bookings').add({
        name,
        pickupLocation: pickup,
        dropoffLocation: dropoff,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      });
      alert('Booking added!');
      setName('');
      setPickup('');
      setDropoff('');
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="Pickup Location" required />
      <input type="text" value={dropoff} onChange={(e) => setDropoff(e.target.value)} placeholder="Dropoff Location" required />
      <button type="submit">Submit Booking</button>
    </form>
  );
}

export default BookingForm;
