// src/firebaseConfig.js
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
   apiKey: "AIzaSyCZ7UXxGoUlyxxNeRjcWT_7zmm9RjMX7fE",
  authDomain: "hiride-10d34.firebaseapp.com",
  projectId: "hiride-10d34",
  storageBucket: "hiride-10d34.appspot.com",
  messagingSenderId: "901713666193",
  appId: "1:901713666193:web:88b8558a029c462e34df30",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
