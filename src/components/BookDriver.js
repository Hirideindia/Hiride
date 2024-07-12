import React, { useState } from 'react';

const BookDriver = () => {
  const [pickup, setPickup] = useState('');
  const [drop, setDrop] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [carType, setCarType] = useState('');

  const handleBooking = () => {
    console.log({
      pickup,
      drop,
      date,
      time,
      carType
    });
  };

  return (
    <div>
      <h1>Book Driver</h1>
      <input type="text" value={pickup} onChange={(e) => setPickup(e.target.value)} placeholder="Pickup Location" />
      <input type="text" value={drop} onChange={(e) => setDrop(e.target.value)} placeholder="Drop Location" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      <select value={carType} onChange={(e) => setCarType(e.target.value)}>
        <option value="hatchback">Hatchback</option>
        <option value="sedan">Sedan</option>
        <option value="suv">SUV</option>
        <option value="luxury">Luxury</option>
      </select>
      <button onClick={handleBooking}>Book Driver</button>
    </div>
  );
};

export default BookDriver;
