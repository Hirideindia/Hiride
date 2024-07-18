// src/components/Home.js
import React from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const Home = () => {
  const handleBooking = async (event) => {
    event.preventDefault();
    const bookingData = {
      fromAddress: event.target.fromAddress.value,
      toAddress: event.target.toAddress.value,
      needDateTime: event.target.needDateTime.value,
      tillDateTime: event.target.tillDateTime.value,
      package: event.target.package.value,
      carType: event.target.carType.value,
      transmission: event.target.transmission.value,
      estimatedFare: event.target.estimatedFare.value,
    };

    try {
      await addDoc(collection(db, "bookings"), bookingData);
      alert("Booking confirmed!");
    } catch (error) {
      console.error("Error adding booking: ", error);
    }
  };

  return (
    <div className="container" id="home">
      <h2>Welcome to HiRide</h2>
      <p>
        Your premier driver booking service in Hyderabad! Whether you need a driver for an hour, a day, or a longer period, HiRide connects you with professional and reliable drivers to ensure a safe and comfortable journey. Our easy-to-use platform allows you to book drivers for various car types tailored to your specific needs. Experience seamless bookings, transparent pricing, and exceptional service with HiRide. Book your driver today and travel with peace of mind!
      </p>
      <div className="booking-section">
        <h3>Book a Driver</h3>
        <form onSubmit={handleBooking}>
          <label htmlFor="fromAddress">From Address:</label>
          <input type="text" id="fromAddress" name="fromAddress" placeholder="Enter pickup address" required />

          <label htmlFor="toAddress">To Address:</label>
          <input type="text" id="toAddress" name="toAddress" placeholder="Enter destination address" required />

          <label htmlFor="needDateTime">When do you need the driver:</label>
          <input type="datetime-local" id="needDateTime" name="needDateTime" required />

          <label htmlFor="tillDateTime">Till when do you need the driver:</label>
          <input type="datetime-local" id="tillDateTime" name="tillDateTime" required />

          <label htmlFor="package">Package:</label>
          <select id="package" name="package" required>
            <option value="roundtrip">Roundtrip</option>
            <option value="oneway">Oneway</option>
            <option value="monthly">Monthly</option>
            <option value="outstation">Outstation</option>
          </select>

          <label htmlFor="carType">Car Type:</label>
          <input type="text" id="carType" name="carType" placeholder="Enter car type" required />

          <label htmlFor="transmission">Transmission:</label>
          <select id="transmission" name="transmission" required>
            <option value="manual">Manual</option>
            <option value="automatic">Automatic</option>
          </select>

          <label htmlFor="estimatedFare">Estimated Fare:</label>
          <input type="text" id="estimatedFare" name="estimatedFare" placeholder="Automatic fare calculation" readOnly />

          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
