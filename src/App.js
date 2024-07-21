// src/App.js
import React from 'react';
import BookingForm from './BookingForm';
import GoogleSignIn from './GoogleSignIn';
import PhoneSignIn from './PhoneSignIn';

function App() {
  return (
    <div className="App">
      <h1>Welcome to HiRide</h1>
      <GoogleSignIn />
      <PhoneSignIn />
      <BookingForm />
    </div>
  );
}

export default App;
