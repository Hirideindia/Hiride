import React, { useState, useEffect } from 'react';

const DriverDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch driver bookings logic
  }, []);

  return (
    <div className="container">
      <h2>Driver Dashboard</h2>
      {bookings.map((booking, index) => (
        <div key={index}>
          <h3>Booking ID: {booking.id}</h3>
          <p>Customer Name: {booking.customerName}</p>
          <p>Pickup: {booking.pickup}</p>
          <p>Drop: {booking.drop}</p>
          <button>Accept</button>
        </div>
      ))}
    </div>
  );
};

export default DriverDashboard;
