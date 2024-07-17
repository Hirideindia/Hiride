// Your web app's Firebase configuration (replace with your config)
var firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

document.getElementById('booking-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const bookingData = {
    datetime: document.getElementById('pickup-time').value, 
    carType: document.getElementById('car-type').value,
    // Add other form values as required
  };

  const user = firebase.auth().currentUser;
  if(user) {
    await db.collection('bookings').add({ ...bookingData, userId: user.uid });
    alert('Booking confirmed!');
  } else {
    alert('Please login to book a driver.');
  }
});

const showPage = (page) => {
  document.querySelectorAll('main > div').forEach(div => div.style.display = 'none');
  document.getElementById(page).style.display = 'block';
};

const logout = () => {
  auth.signOut();
  document.getElementById('login-button').style.display = '';
  document.getElementById('logout-button').style.display = 'none';
  alert('Logged out!');
};

auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById('login-button').style.display = 'none';
    document.getElementById('logout-button').style.display = '';
  } else {
    document.getElementById('login-button').style.display = '';
    document.getElementById('logout-button').style.display = 'none';
  }
});