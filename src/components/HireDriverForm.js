import React, { useState } from 'react';
import { db } from '../firebase';

const HireDriverForm = () => {
  const [name, setName] = useState('');
  const [experience, setExperience] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('drivers').add({
      name: name,
      experience: parseInt(experience, 10)
    });
    setName('');
    setExperience('');
  };

  return (
    <div>
      <h2>Hire a Driver</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Experience (years)"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <button type="submit">Hire</button>
      </form>
    </div>
  );
};

export default HireDriverForm;
