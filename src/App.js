import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import './App.css';  // Importing the CSS file

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
