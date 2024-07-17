// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCZ7UXxGoUlyxxNeRjcWT_7zmm9RjMX7fE",
  authDomain: "hiride-10d34.firebaseapp.com",
  projectId: "hiride-10d34",
  storageBucket: "hiride-10d34.appspot.com",
  messagingSenderId: "901713666193",
  appId: "1:901713666193:web:88b8558a029c462e34df30",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

window.onload = function() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
    'size': 'normal',
    'callback': function(response) {
      // reCAPTCHA solved, allow sendOtp()
    }
  });
  recaptchaVerifier.render();
};

function sendOtp() {
  var phoneNumber = document.getElementById('phone-number').value;
  var appVerifier = window.recaptchaVerifier;
  auth.signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(function(confirmationResult) {
      window.confirmationResult = confirmationResult;
      alert('OTP sent');
    }).catch(function(error) {
      console.error('Error during signInWithPhoneNumber', error);
      alert('Error; SMS not sent');
    });
}

function verifyOtp() {
  var otp = document.getElementById('otp').value;
  window.confirmationResult.confirm(otp).then(function(result) {
    var user = result.user;
    alert('Phone number verified');
    // Handle user signed in
  }).catch(function(error) {
    console.error('Error during confirmationResult.confirm', error);
    alert('Error; Invalid OTP');
  });
}

function googleSignIn() {
  var provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(function(result) {
    var user = result.user;
    alert('Google sign-in successful');
    // Handle user signed in
  }).catch(function(error) {
    console.error('Error during Google sign-in', error);
    alert('Error; Google sign-in failed');
  });
}

function calculateFare() {
  const startDate = new Date(document.getElementById('start-date').value);
  const endDate = new Date(document.getElementById('end-date').value);
  const transmission = document.getElementById('transmission').value;
  const packageType = document.getElementById('package').value;

  if (startDate >= endDate) {
    alert("End date must be after start date.");
    return;
  }

  // Basic fare calculation example
  const hours = Math.abs(endDate - startDate) / 36e5;
  let fare = 0;

  switch(packageType) {
    case "roundtrip":
      fare = hours * 100;
      break;
    case "oneway":
      fare = hours * 75;
      break;
    case "outstation":
      fare = hours * 150;
      break;
    case "monthly":
      fare = hours * 50;
      break;
  }

  if (transmission === "automatic") {
    fare += hours * 20;
  }

  document.getElementById('fare').innerText = `Estimated Fare: ₹${fare.toFixed(2)}`;
}

document.getElementById('booking-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const bookingData = {
    startDate: document.getElementById('start-date').value,
    endDate: document.getElementById('end-date').value,
    pickupPlace: document.getElementById('pickup-place').value,
    dropPlace: document.getElementById('drop-place').value,
    carName: document.getElementById('car-name').value,
    transmission: document.getElementById('transmission').value,
    packageType: document.getElementById('package').value,
    fare: document.getElementById('fare').innerText.replace('Estimated Fare: ₹', '')
  };

  db.collection('bookings').add(bookingData)
    .then(function() {
      alert('Booking successful!');
    })
    .catch(function(error) {
      console.error('Error adding booking: ', error);
      alert('Error; booking failed');
    });
});
