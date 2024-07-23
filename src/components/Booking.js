// src/components/Booking.js
import React, { useState } from "react";
import { db } from "../firebase";

const Booking = ({ user }) => {
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [distance, setDistance] = useState(0);

  const calculateFare = (distance) => {
    const baseFare = 50;
    const perKmRate = 10;
    return baseFare + distance * perKmRate;
  };

  const handleBooking = async () => {
    const fare = calculateFare(distance);
    await db.collection("bookings").add({
      userId: user.uid,
      pickup,
      dropoff,
      distance,
      fare,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    alert(`Booking successful! Your fare is ${fare}`);
  };

  return (
    <div>
      <input placeholder="Pickup Location" value={pickup} onChange={(e) => setPickup(e.target.value)} />
      <input placeholder="Dropoff Location" value={dropoff} onChange={(e) => setDropoff(e.target.value)} />
      <input placeholder="Distance (km)" type="number" value={distance} onChange={(e) => setDistance(e.target.value)} />
      <button onClick={handleBooking}>Book Now</button>
    </div>
  );
};

export default Booking;