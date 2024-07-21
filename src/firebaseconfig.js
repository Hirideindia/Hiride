// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCZ7UXxGoUlyxxNeRjcWT_7zmm9RjMX7fE",
  authDomain: "hiride-10d34.firebaseapp.com",
  projectId: "hiride-10d34",
  storageBucket: "hiride-10d34.appspot.com",
  messagingSenderId: "901713666193",
  appId: "1:901713666193:web:88b8558a029c462e34df30",
  measurementId: "G-NTCL5Q25ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.error(error);
    });
};

const setUpRecaptcha = (phoneNumber) => {
  window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
    'size': 'invisible',
    'callback': (response) => {
      // reCAPTCHA solved - will proceed with submit function
      signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        }).catch((error) => {
          console.error(error);
        });
    }
  }, auth);
};

const signInWithPhone = (phoneNumber, otp) => {
  window.confirmationResult.confirm(otp).then((result) => {
    console.log(result.user);
  }).catch((error) => {
    console.error(error);
  });
};

export { signInWithGoogle, setUpRecaptcha, signInWithPhone };
