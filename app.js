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
    'size': 'invisible',
    'callback': function(response) {
      sendOtp();
    }
  });
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
  confirmationResult.confirm(otp).then(function(result) {
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
