import React, { useState, useEffect } from 'react';
import { db } from '../firebase';

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    db.collection('drivers').onSnapshot(snapshot => {
      setDrivers(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
    });
  }, []);

  return (
    <div>
      <h2>Available Drivers</h2>
      <ul>
        {drivers.map(driver => (
          <li key={driver.id}>
            {driver.data.name} - {driver.data.experience} years of experience
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DriverList;
