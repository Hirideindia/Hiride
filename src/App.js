import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Partner from './components/Partner';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>HiRide</h1>
        </header>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/partner">Partner</a>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/partner" element={<Partner />} />
          </Routes>
        </div>
        <footer>
          <p>&copy; 2024 HiRide. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
