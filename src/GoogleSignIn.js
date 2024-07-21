// src/GoogleSignIn.js
import React from 'react';
import { auth } from './firebase';
import firebase from 'firebase/app';

const GoogleSignIn = () => {
  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        console.log(result.user);
        alert('Sign-In successful!');
      })
      .catch((error) => {
        console.error('Error during sign-in: ', error);
        alert('Failed to sign in.');
      });
  };

  return <button onClick={handleSignIn}>Sign in with Google</button>;
};

export default GoogleSignIn;
