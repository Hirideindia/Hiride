import React from "react";
import { db } from "../firebase";
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
   
