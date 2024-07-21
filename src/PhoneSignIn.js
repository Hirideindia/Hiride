// src/PhoneSignIn.js
import React, { useState } from 'react';
import { auth } from './firebase';
import firebase from 'firebase/app';

const PhoneSignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handleSendOtp = () => {
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    auth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
      })
      .catch((error) => {
        console.error('Error sending OTP: ', error);
        alert('Failed to send OTP.');
      });
  };

  const handleVerifyOtp = () => {
    confirmationResult.confirm(otp)
      .then((result) => {
        console.log(result.user);
        alert('Sign-In successful!');
      })
      .catch((error) => {
        console.error('Error verifying OTP: ', error);
        alert('Failed to verify OTP.');
      });
  };

  return (
    <div>
      <div id="recaptcha-container"></div>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleSendOtp}>Send OTP</button>
      {confirmationResult && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default PhoneSignIn;
