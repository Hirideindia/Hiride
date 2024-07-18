import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the booking submission here, e.g., send it to a server or display a confirmation
    alert("Booking confirmed!");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Book a Ride</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="pickup" className="form-label">Pickup Location</label>
          <input
            type="text"
            className="form-control"
            id="pickup"
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="destination" className="form-label">Destination</label>
          <input
            type="text"
            className="form-control"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Time</label>
          <input
            type="time"
            className="form-control"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="vehicleType" className="form-label">Vehicle Type</label>
          <select
            className="form-select"
            id="vehicleType"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
          >
            <option value="">Select a vehicle type</option>
            <option value="sedan">Sedan</option>
            <option value="suv">SUV</option>
            <option value="hatchback">Hatchback</option>
            <option value="minivan">Minivan</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Book Now</button>
      </form>
    </div>
  );
};

export default Home;
