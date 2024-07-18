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

  return