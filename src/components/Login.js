import React, { useState } from 'react';
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  const handleSendOtp = async () => {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
    const appVerifier = window.recaptchaVerifier;

    try {
      const result = await signInWithPhoneNumber(auth, phone, appVerifier);
      setConfirmationResult(result);
    } catch (error) {
      console.error("Error sending OTP", error);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await confirmationResult.confirm(otp);
      console.log('User signed in successfully.');
    } catch (error) {
      console.error("Error verifying OTP", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
      <button onClick={handleSendOtp}>Send OTP</button>
      <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="OTP" />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Login;
