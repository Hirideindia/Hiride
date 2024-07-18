import React from 'react';
import BookingForm from './BookingForm';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="intro">
        <h1>Welcome to HiRide</h1>
        <p>Your premier driver booking service in Hyderabad! Whether you need a driver for an hour, a day, or a longer period, HiRide connects you with professional and reliable drivers to ensure a safe and comfortable journey. Our easy-to-use platform allows you to book drivers for various car types tailored to your specific needs. Experience seamless bookings, transparent pricing, and exceptional service with HiRide. Book your driver today and travel with peace of mind!</p>
      </section>
      <BookingForm />
    </div>
  );
}

export default Home;
