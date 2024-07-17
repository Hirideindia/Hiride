const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.createBooking = functions.firestore
  .document('bookings/{bookingId}')
  .onCreate((snap, context) => {
    const newValue = snap.data();
    // Notify driver partner here with newValue details
  });