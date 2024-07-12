import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignup = async () => {
    const auth = getAuth();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, `${phone}@hiride.com`, 'defaultPassword');
      const user = userCredential.user;
      console.log('User signed up:', user);
    } catch (error) {
      console.error("Error signing up", error);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
