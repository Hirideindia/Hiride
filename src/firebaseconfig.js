
// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCZ7UXxGoUlyxxNeRjcWT_7zmm9RjMX7fE",
  authDomain: "hiride-10d34.firebaseapp.com",
  projectId: "hiride-10d34",
  storageBucket: "hiride-10d34.appspot.com",
  messagingSenderId: "901713666193",
  appId: "1:901713666193:web:88b8558a029c462e34df30",
  measurementId: "G-NTCL5Q25ZC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
