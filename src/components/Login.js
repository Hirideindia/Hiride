import React, { useState } from 'react';

const Login = () => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleSendOtp = () => {
    // Handle sending OTP logic
    setIsOtpSent(true);
  };

  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      {isOtpSent && (
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
      )}
      <button onClick={isOtpSent ? handleLogin : handleSendOtp}>
        {isOtpSent ? 'Login' : 'Send OTP'}
      </button>
    </div>
  );
};

export default Login;
