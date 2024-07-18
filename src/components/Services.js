import React from 'react';
import BookingForm from './BookingForm';
import './Services.css';

function Services() {
  return (
    <div className="services">
      <h1>Your Journey, Our Wheels</h1>
      <p>At HiRide, we’re more than just a ride-hailing service. We’re your trusted travel companion, offering a range of convenient options tailored to your needs:</p>
      <ul>
        <li>RoundTrip: Whether it’s your daily commute or a weekend getaway, our RoundTrip service ensures you get to your destination and back hassle-free. No detours—just a smooth ride.</li>
        <li>Oneway: Need a ride to the airport, office, or an important meeting? Our Oneway service provides efficient point-to-point travel. Say goodbye to unnecessary stops!</li>
        <li>Monthly Plans: For those who value consistency, our Monthly Plans offer a fixed number of rides per month. Say hello to predictable travel expenses and reliable service.</li>
        <li>Outstation Adventures: Planning a road trip? HiRide’s Outstation service lets you hire a driver for those long journeys. Enjoy the scenery while we handle the wheel.</li>
      </ul>
      <h2>Why Choose HiRide?</h2>
      <ul>
        <li>Professional Drivers: Our courteous and skilled drivers prioritize your safety and comfort.</li>
        <li>Clean Vehicles: Step into a well-maintained car every time.</li>
        <li>Easy Booking: Use our app to book, track, and manage your rides effortlessly.</li>
      </ul>
      <BookingForm />
    </div>
  );
}

export
