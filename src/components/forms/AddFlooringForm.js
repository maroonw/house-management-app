import React, { useState } from 'react';
import axios from 'axios';

const AddFlooringForm = () => {
  const [room, setRoom] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFlooring = { room, type };

    try {
      await axios.post('/api/floorings', newFlooring);
      alert('Flooring added successfully!');
    } catch (err) {
      console.error('Error adding flooring:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Flooring</h2>
      <label>
        Room:
        <input type="text" value={room} onChange={(e) => setRoom(e.target.value)} required />
      </label>
      <label>
        Type:
        <input type="text" value={type} onChange={(e) => setType(e.target.value)} required />
      </label>
      <button type="submit">Add Flooring</button>
    </form>
  );
};

export default AddFlooringForm;
