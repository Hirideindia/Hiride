import React, { useState } from 'react';
import './Partner.css';

function Partner() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [idProof, setIdProof] = useState('');
  const [license, setLicense] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform partner registration or submission logic
    // For example, send data to backend or display confirmation
    setIsSubmitted(true);
  };

  return (
    <div className="partner">
      <h1>Become a HiRide Partner</h1>
      {isSubmitted ? (
        <div className="submission-confirmation">
          <p>Thank you for your interest in becoming a HiRide partner. We will review your information and get back to you shortly.</p>
        </div>
      ) : (
        <form className="partner-form" onSubmit={handleSubmit}>
          <div>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <div>
            <label>Mobile Number:</label>
            <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
    
