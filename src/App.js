// src/App.js
import React from 'react';
import BookingForm from './components/BookingForm';
import BookingsList from './components/BookingsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HiRide</h1>
      </header>
      <main>
        <BookingForm />
        <BookingsList />
      </main>
    </div>
  );
}

export default App;
