// src/SignIn.js

import React, { useState } from 'react';
import { signInWithGoogle, setUpRecaptcha, signInWithPhone } from './firebaseConfig';

const SignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handleSendOtp = () => {
    setUpRecaptcha(phoneNumber);
  };

  const handleVerifyOtp = () => {
    signInWithPhone(phoneNumber, otp);
  };

  return (
    <div>
      <h1>Welcome to HiRide</h1>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      <div>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
        />
        <button onClick={handleSendOtp}>Send OTP</button>
      </div>
      <div>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter OTP"
        />
        <button onClick={handleVerifyOtp}>Verify OTP</button>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default SignIn;
