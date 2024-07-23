// src/components/Auth.js
import React, { useState } from "react";
import { auth } from "../firebase";
import firebase from 'firebase/compat/app';

const Auth = ({ setUser }) => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(provider);
    setUser(auth.currentUser);
  };

  const handlePhoneSignIn = async () => {
    const recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    const confirmation = await auth.signInWithPhoneNumber(phone, recaptcha);
    window.confirmation = confirmation;
    setIsOtpSent(true);
  };

  const verifyOtp = async () => {
    const result = await window.confirmation.confirm(otp);
    setUser(result.user);
  };

  return (
    <div>
      {!isOtpSent ? (
        <>
          <input placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button onClick={handlePhoneSignIn}>Send OTP</button>
          <div id="recaptcha"></div>
        </>
      ) : (
        <>
          <input placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default Auth;