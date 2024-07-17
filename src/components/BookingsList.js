import React, { useEffect, useState } from 'react';
import { firestore } from '../firebaseConfig';

function BookingsList() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const bookingsCollection = await firestore.collection('bookings').get();
      const bookingsData = bookingsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookings(bookingsData);
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>{booking.name} - {booking.pickupLocation} to {booking.dropoffLocation}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookingsList;
