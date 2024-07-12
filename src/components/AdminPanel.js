import React, { useState, useEffect } from 'react';

const AdminPanel = () => {
  const [bookings, setBookings] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    // Fetch admin data logic
  }, []);

  return (
    <div className="container">
      <h2>Admin Panel</h2>
      <h3>Bookings</h3>
      {bookings.map((booking, index) => (
        <div key={index}>
          <p>Booking ID: {booking.id}</p>
          <p>Customer: {booking.customer}</p>
          <p>Partner: {booking.partner}</p>
        </div>
      ))}
      <h3>Customers</h3>
      {customers.map((customer, index) => (
        <div key={index}>
          <p>Name: {customer
